import React from 'react';
import Layout from '@theme/Layout';

export default function Import() {
  React.useEffect(() => {
    window.location.href =
      'https://www.figma.com/community/file/958198956095698455';
  }, []);

  return <Layout title="Tini App" description="Tini App" />;
}
