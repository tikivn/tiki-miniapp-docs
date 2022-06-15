import React from 'react';

const BASE_URL = 'http://tiniapp-web.dev.tiki.services/apps';
const DEFAULT_APP_ID = 'vn.tiki.miniapp.demo';

const generateURL = (appId = '', page = '', params) => {
  const fullParams = {
    ...params,
    simulateMobile: 1,
  };
  return `${BASE_URL}/${appId}/${page}?${new URLSearchParams(
    fullParams,
  ).toString()}`;
};

export const Simulator = ({
  width = 360,
  height = 640,
  appId = DEFAULT_APP_ID,
  page = '',
  params = {},
}) => {
  return (
    <iframe
      src={generateURL(appId, page, params)}
      width={width}
      height={height}
    />
  );
};

export default Simulator;
