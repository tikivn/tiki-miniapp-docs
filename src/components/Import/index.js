import React from 'react';

const Import = ({
  style,
  content = 'Xem code mẫu trên Tini Studio',
  appId = '',
  appName = '',
  template = 'api-demo',
  github = '',
  page = '',
  githubFolder = '',
}) => {
  const params = Object.fromEntries(
    Object.entries({
      appId,
      appName,
      template,
      github,
      page,
      githubFolder,
    }).filter(([_, v]) => !!v),
  );
  const link =
    typeof window !== 'undefined' &&
    `/import?${new window.URLSearchParams(params).toString()}`;

  return (
    <a
      href={link}
      target="_blank"
      className="flex fr fcc download-button"
      style={{
        display: 'flex',
        fontWeight: 'bold',
        fontSize: 16,
        textDecoration: 'none',
        marginTop: 8,
        marginBottom: 16,
        ...style,
      }}>
      {content}
    </a>
  );
};

export default Import;
