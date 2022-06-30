import React from 'react';

const BASE_URL = 'https://tiki.vn/apps';
const DEFAULT_APP_ID = 'vn.tiki.miniapp.demo';

const generateURL = (appId = '', page = '', params = {}) => {
  const fullParams = {
    ...params,
    page,
    simulateMobile: true,
  };
  return `${BASE_URL}/${appId}?${
    typeof window !== 'undefined'
      ? new window.URLSearchParams(fullParams).toString()
      : 'simulateMobile=true'
  }`;
};

export const Simulator = ({
  width = 360,
  height = 640,
  appId = DEFAULT_APP_ID,
  page = '',
  params = {},
  description = 'Trải nghiệm thử với trình giả lập bên dưới',
}) => {
  return (
    <>
      {description && <div style={{marginBottom: 10}}>{description}</div>}
      <iframe
        src={generateURL(appId, page, params)}
        width={width}
        height={height}
      />
    </>
  );
};

export default Simulator;
