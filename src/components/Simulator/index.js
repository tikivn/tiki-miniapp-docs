import React from 'react';

const BASE_URL = 'https://beta.tiki.vn/apps';
const DEFAULT_APP_ID = 'vn.tiki.miniapp.demo';

const generateURL = (appId = '', page = '', params) => {
  const fullParams = {
    ...params,
    simulateMobile: true,
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
