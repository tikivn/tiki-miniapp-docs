import React, {useMemo} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import {translate} from '@docusaurus/Translate';
import customSidebar from '../../../blog/sidebars';

export default function BlogSidebar({sidebar: originSidebar}) {
  if (originSidebar.items.length === 0) {
    return null;
  }

  const mappedSidebar = useMemo(
    () =>
      customSidebar
        .map(sidebar => {
          if (sidebar.items.length === 0) return null;

          sidebar.mappedItems = sidebar.items.map(item =>
            originSidebar.items.find(originItem =>
              item.includes(originItem.permalink.split('/').slice(-1).pop()),
            ),
          );

          return sidebar;
        })
        .filter(Boolean),
    [originSidebar],
  );

  return (
    <nav
      className={clsx(styles.sidebar, 'thin-scrollbar')}
      aria-label={translate({
        id: 'theme.blog.sidebar.navAriaLabel',
        message: 'Blog recent posts navigation',
        description: 'The ARIA label for recent posts in the blog sidebar',
      })}>
      <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
        {originSidebar.title}
      </div>
      <ul className={styles.sidebarItemList}>
        {mappedSidebar.map(category => {
          return (
            <>
              <li className={styles.blogSidebarCategoryLabel}>
                {category.label}
              </li>
              <ul className={styles.blogSidebarCategoryList}>
                {category.mappedItems.map(item => (
                  <li key={item.permalink} className={styles.sidebarItem}>
                    <Link
                      isNavLink
                      to={item.permalink}
                      className={styles.sidebarItemLink}
                      activeClassName={styles.sidebarItemLinkActive}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          );
        })}
      </ul>
    </nav>
  );
}
