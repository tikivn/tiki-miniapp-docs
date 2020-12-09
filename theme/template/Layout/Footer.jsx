import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Row, Col } from 'antd';
import * as utils from '../utils';

class Footer extends React.PureComponent {
  render() {
    const { pathname } = this.props.location;
    const isEnUS = utils.isEnUS(pathname);
    return (
      <footer id="footer" className="dark">
        <div className="footer-wrap">
        </div>
        <div className="bottom-bar">
        </div>
      </footer>
    );
  }
}

export default injectIntl(Footer);
