import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from './BlogSidebar';

import styles from './styles.module.scss';

const SocialConfig = {
  twitterUsername: 'nvuhung',
  facebookAppId: '',
};

const SocialFooter = () => {
  return (
    <div className={styles.social}>
      <div
        className="fb-like"
        data-href={SocialConfig.facebookAppId}
        data-layout="button_count"
        data-share="true"
        data-show-faces="false"
        data-size="large"
      />
    </div>
  );
};

export default function BlogLayout(props) {
  const {sidebar, toc, children, ...layoutProps} = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
          <aside className="col col--3">
            <BlogSidebar sidebar={sidebar} />
          </aside>
          <main
            className={clsx('col', {
              'col--7': hasSidebar,
              'col--9 col--offset-1': !hasSidebar,
            })}
            itemScope
            itemType="http://schema.org/Blog">
            {children}
            <SocialFooter />
          </main>
          {toc && <div className="col col--2">{toc}</div>}
        </div>
      </div>
    </Layout>
  );
}
