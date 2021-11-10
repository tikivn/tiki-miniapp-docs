import React from 'react';
import Layout from '@theme/Layout';

import LogoLabel from '@site/static/tini-studio-label.svg';
import Logo from '@site/static/tini-studio-logo.svg';
import styles from './index.module.scss';

export default function Import() {
  React.useEffect(() => {
    const params = decodeURIComponent(document.location.search);
    const url = `tiniapp://${params}&type=import-project`;
    window.location.href = url;
  }, []);

  return (
    <Layout title="Tini App" description="Tini App">
      <main
        className={styles.allCenter}
        style={{height: 'calc(100vh - var(--ifm-navbar-height) - 260px)'}}>
        <Logo />
        <LogoLabel />
        <p style={{marginTop: 16}}>
          Vui lòng mở Tini Studio để xem thử code mẫu. Nếu chưa có Tini Studio,
          bạn có thể tải về{' '}
          <a href="/downloads" target="_blank">
            tại đây.
          </a>
        </p>
      </main>
    </Layout>
  );
}
