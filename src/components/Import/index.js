import React from 'react';

const Import = ({
  style,
  content,
  appId,
  appName,
  template = 'api-demo',
  github,
  page,
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
      style={{
        display: 'flex',
        fontWeight: 'bold',
        fontSize: 16,
        textDecoration: 'none',
        marginTop: 16,
        marginBottom: 16,
        ...style,
      }}>
      {content || 'Xem code mẫu trên Tini Studio'}
    </a>
  );
};

export default Import;
