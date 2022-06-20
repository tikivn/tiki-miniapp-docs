import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';
import uniqueid from 'lodash.uniqueid';
import React from 'react';
import './styles.scss';

export const Overview = () => {
  const sidebars = useCurrentSidebarCategory();
  const history = useHistory();

  const renderHTML = data => {
    const html = [];

    const generateHTML = (sidebar, result, level) => {
      if (sidebar.type === 'link' && sidebar.customProps?.description) {
        result.push(
          <tr className="overview-row" key={sidebar.label}>
            <td>
              <Link to={sidebar.href}>{sidebar.label}</Link>
            </td>
            <td className="overview-description">
              {sidebar.customProps.description}
            </td>
          </tr>,
        );
      }

      if (sidebar.type === 'category') {
        result.push(
          React.createElement(
            `h${level}`,
            {
              key: sidebar.label,
            },
            sidebar.label,
          ),
        );
      }

      if (sidebar.items) generateHTML(sidebar.items, result, level + 1);

      if (Array.isArray(sidebar)) {
        const subHtml = [];

        for (const subSidebar of sidebar) {
          generateHTML(subSidebar, subHtml, level);
        }

        if (subHtml.length > 0 && subHtml[0] && subHtml[0].type === 'tr') {
          result.push(
            <table key={uniqueid('table-')}>
              <thead>
                <tr>
                  <th>Tên</th>
                  <th>Mô tả</th>
                </tr>
              </thead>
              <tbody>{subHtml}</tbody>
            </table>,
          );
        } else if (subHtml.length > 0) {
          result.push(subHtml);
        }
      }
    };

    generateHTML(data, html, 1);

    return html;
  };

  return <>{renderHTML(sidebars)}</>;
};

export default Overview;
