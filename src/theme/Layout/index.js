import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';

export default function Layout(props) {
  const context = useDocusaurusContext();
  const language = context.i18n.currentLocale;
  const version = 'current';
  const tag = 'docs-default-current';

  return (
    <>
      <Head>
        {language && <meta name="docsearch:language" content={language} />}
        {version && <meta name="docsearch:version" content={version} />}
        {tag && <meta name="docsearch:docusaurus_tag" content={tag} />}
      </Head>
      <OriginalLayout {...props} />
    </>
  );
}

