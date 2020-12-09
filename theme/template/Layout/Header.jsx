import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Link } from 'bisheng/router';
import { Row, Col, Menu, notification } from 'antd';
import GitHubButton from 'react-github-button';

import PhoneNav from './PhoneNav';
import * as utils from '../utils';
import { getNewHref } from '../../utils';

class Header extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  componentDidMount() {
    // notification.open({
    //   placement: 'bottomLeft',
    //   duration: 10000,
    //   message: this.props.intl.formatMessage({ id: 'app.layout.notification.title' }),
    //   description: (
    //     <div>
    //       {this.props.intl.formatMessage({ id: 'app.layout.notification.content' })}
    //       <GitHubButton
    //         type="stargazers"
    //         namespace="ant-design"
    //         repo="ant-design-landing"
    //         style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: 8 }}
    //       />
    //     </div>
    //   ),
    // });
  }

  handleLangChange = () => {
    const { pathname } = this.props.location;
    const currentProtocol = `${window.location.protocol}//`;
    const currentHref = window.location.href.substr(currentProtocol.length);

    if (utils.isLocalStorageNameSupported()) {
      localStorage.setItem('locale', utils.isEnUS(pathname) ? 'vi-VN' : 'en-US');
    }

    window.location.href = currentProtocol + currentHref.replace(
      window.location.pathname,
      utils.getLocalizedPathname(pathname, !utils.isEnUS(pathname)),
    );
  }

  getMenuToRender = (lang) => {
    const { isMobile, location, intl } = this.props;
    const isEnUS = intl.locale === 'en-US';
    const menuMode = isMobile ? 'inline' : 'horizontal';
    const module = location.pathname.replace(/(^\/|\/$)/g, '').split('/').slice(0, 2).join('/');
    const activeMenuItem = (module.match('index') && 'home') || module;
    return (
      <Menu mode={menuMode} selectedKeys={[activeMenuItem]} id="nav" key="nav">
        <Menu.Item key="home">
          <Link to={utils.getLocalizedPathname('/', isEnUS)}>
            <FormattedMessage id="app.header.menu.home" />
          </Link>
        </Menu.Item>
        <Menu.Item key="docs/developer">
          <Link to={utils.getLocalizedPathname('/docs/developer/getting-started', isEnUS)}>
            <FormattedMessage id="app.header.menu.getting-started" />
          </Link>
        </Menu.Item>
        <Menu.Item key="docs/framework">
          <Link to={utils.getLocalizedPathname('/docs/framework/overview', isEnUS)}>
            <FormattedMessage id="app.header.menu.framework" />
          </Link>
        </Menu.Item>
        <Menu.Item key="docs/component">
          <Link to={utils.getLocalizedPathname('/docs/component/overview', isEnUS)}>
            <FormattedMessage id="app.header.menu.component" />
          </Link>
        </Menu.Item>
        <Menu.Item key="docs/api">
          <Link to={utils.getLocalizedPathname('/docs/api/overview', isEnUS)}>
            <FormattedMessage id="app.header.menu.api" />
          </Link>
        </Menu.Item>
        <Menu.Item key="docs/ide">
          <Link to={utils.getLocalizedPathname('/docs/ide/overview', isEnUS)}>
            <FormattedMessage id="app.header.menu.ide" />
          </Link>
        </Menu.Item>
        {
          isMobile && (
            <Menu.Item key="lang" onClick={this.handleLangChange}>
              {lang}
            </Menu.Item>
          )
        }
      </Menu>
    );
  }

  render() {
    const { isMobile, intl } = this.props;
    const lang = (<FormattedMessage id="app.footer.lang" />);
    const menu = this.getMenuToRender(lang);
    const isEnUs = intl.locale === 'en-US';
    return (
      <div id="header" className="header page-wrapper">
        {isMobile && (
          <PhoneNav>
            {menu}
          </PhoneNav>
        )}
        <Row className="page">
          <Col md={6} sm={24}>
            <Link className="logo" to={utils.getLocalizedPathname('/', isEnUs)}>
              <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/SVDdpZEbAlWBFuRGIIIL.svg" />
              <span>
                LANDING
              </span>
            </Link>
          </Col>
          {
            !isMobile && (
              <Col md={18} sm={0}>
                <div className="menu">
                  {menu}
                  <a
                    href="https://github.com/tikivn/miniapp"
                    alt="git"
                    target="_blank"
                    className="gitbtn"
                  >
                    Github
                  </a>
                  <a className="gitbtn" onClick={this.handleLangChange}>
                    {lang}
                  </a>
                </div>
              </Col>
            )
          }
        </Row>
      </div>
    );
  }
}

export default injectIntl(Header);
