import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { ConfigProvider } from 'antd';
import { enquireScreen } from 'enquire-js';
import Animate from 'rc-animate';

import enLocale from '../../en-US';
import vnLocale from '../../vi-VN';
import * as utils from '../utils';

import Header from './Header';
import Footer from './Footer';
import enUS from '../../en-US';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});
class Layout extends React.PureComponent {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    const { pathname } = props.location;
    const appLocale = utils.isEnUS(pathname) ? enLocale : vnLocale;

    this.state = {
      appLocale,
      isMobile,
    };
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }

  render() {
    const { children, ...restProps } = this.props;
    const { pathname } = this.props.location;
    const { appLocale } = this.state;
    const pathKey = pathname && pathname.split('/')[0];// (pathname.split('/')[1] || pathname.split('/')[0]);
    const childrenToRender = React.cloneElement(children, {
      ...children.props,
      isMobile: this.state.isMobile,
      key: pathKey,
    });
    return (
      <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
        <ConfigProvider locale={appLocale.locale === 'en-US' ? enUS : null}>
          <div className={(pathname === '/' || pathname === 'index-en') ? 'home' : ''}>
            <div className="header-placeholder" />
            <Header {...restProps} isMobile={this.state.isMobile} />
            <Animate component="div" transitionName="landing-move">
              {childrenToRender}
            </Animate>
            <Footer {...restProps} isMobile={this.state.isMobile} />
          </div>
        </ConfigProvider>
      </IntlProvider>
    );
  }
}

export default Layout;
