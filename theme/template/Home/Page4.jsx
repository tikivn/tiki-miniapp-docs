import React from 'react';
import QueueAnim from 'rc-queue-anim';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { FormattedMessage } from 'react-intl';

import { svgBgToParallax } from './utils';
import { getNewHref } from '../../utils';

const svgBg = [
  <circle id="Oval-8" stroke="#13C2C2" cx="530" cy="195" r="5" />,
  <circle id="Oval-8" fillOpacity="0.4" fill="#9EE6E6" cx="606" cy="76" r="3" />,
  <circle id="Oval-8" stroke="#13C2C2" cx="1165" cy="240" r="5" />,
  <circle id="Oval-8" stroke="#CED4D9" cx="701.5" cy="250" r="3.5" />,
  <circle id="Oval-8" stroke="#ffffff" cx="1326.5" cy="181.5" r="3.5" />,
  <circle id="Oval-8" fillOpacity="0.4" fill="#9EE6E6" cx="944" cy="251" r="5" />,
  <g transform="translate(0, 180)">
    <path d="M1182.79367,448.230356 L1186.00213,453.787581 C1186.55442,454.744166 1186.22667,455.967347 1185.27008,456.519632 C1184.96604,456.695168 1184.62116,456.787581 1184.27008,456.787581 L1177.85315,456.787581 C1176.74858,456.787581 1175.85315,455.89215 1175.85315,454.787581 C1175.85315,454.436507 1175.94556,454.091619 1176.1211,453.787581 L1179.32957,448.230356 C1179.88185,447.273771 1181.10503,446.946021 1182.06162,447.498305 C1182.36566,447.673842 1182.61813,447.926318 1182.79367,448.230356 Z" id="Polygon-2" stroke="#CED4D9" transform="translate(1181.061784, 452.008801) rotate(40.000000) translate(-1181.061784, -452.008801) " />
  </g>,
  <g transform="translate(0, 100)">
    <path d="M1376.79367,204.230356 L1380.00213,209.787581 C1380.55442,210.744166 1380.22667,211.967347 1379.27008,212.519632 C1378.96604,212.695168 1378.62116,212.787581 1378.27008,212.787581 L1371.85315,212.787581 C1370.74858,212.787581 1369.85315,211.89215 1369.85315,210.787581 C1369.85315,210.436507 1369.94556,210.091619 1370.1211,209.787581 L1373.32957,204.230356 C1373.88185,203.273771 1375.10503,202.946021 1376.06162,203.498305 C1376.36566,203.673842 1376.61813,203.926318 1376.79367,204.230356 Z" id="Polygon-2" stroke="#2F54EB" transform="translate(1375.061784, 208.008801) rotate(40.000000) translate(-1375.061784, -208.008801) " />
  </g>,
  <rect id="Rectangle-14" strokeOpacity="0.4" stroke="#ffffff" transform="translate(949.801502, 129.801502) rotate(30.000000) translate(-949.801502, -129.801502) " x="942.626304" y="52.626304" width="14.3503946" height="14.3503946" rx="1" />,
  <rect id="Rectangle-14" stroke="#CED4D9" transform="translate(111.673081, 158.673081) rotate(30.000000) translate(-111.673081, -158.673081) " x="107.288047" y="254.288047" width="8.77006914" height="8.77006914" rx="1" />,
];
const svgChildren = svgBgToParallax(svgBg);

export default function Page2() {
  return (
    <div className="home-page-wrapper page4">
      <div className="bg">
        <svg width="1440px" height="300px" viewBox="0 0 1440 300" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          {svgChildren}
        </svg>
      </div>
      <ScrollOverPack playScale="0.3" className="home-page">
        <QueueAnim type="bottom" key="queue" leaveReverse>
          <p key="p">
            <FormattedMessage id="app.home.edit-slogen" />
          </p>
          <div key="a">
            <a className="home-button" href={getNewHref('7112')}>
              <FormattedMessage id="app.home.enter-editor" />
            </a>
          </div>
        </QueueAnim>
      </ScrollOverPack>
    </div>
  );
}
