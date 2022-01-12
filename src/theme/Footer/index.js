import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.scss';
import LogoSVG from '@site/static/img/logo.svg';

const groups = [
  {
    title: 'Tài liệu',
    items: [
      {title: 'Bắt đầu', url: '/docs/introduce/getting-started'},
      {title: 'Phát triển', url: '/docs/development/studio/overview'},
      {title: 'Framework', url: '/docs/framework/overview'},
      {title: 'Component', url: '/docs/component/overview'},
      {title: 'JS API', url: '/docs/api/overview'},
      {title: 'Server API', url: '/docs/backend-api/overview'},
      {title: 'Tiki Open API', url: '/docs/backend-api/open-api/overview'},
      {title: 'Design', url: '/docs/design/overview'},
    ],
  },
  {
    title: 'Tin tức',
    items: [
      {title: 'Tini Blog', url: '/blog'},
      {title: 'Tiki Engineering Blog', url: 'https://engineering.tiki.vn/'},
      {title: 'Hackathon', url: 'https://hackathon.tiki.vn/'},
    ],
  },
  {
    title: 'Liên kết',
    items: [
      {title: 'Cộng đồng', url: 'https://community.tiki.vn/'},
      {title: 'Facebook', url: 'https://www.facebook.com/tikicareers/'},
      {
        title: 'Youtube',
        url: 'https://www.youtube.com/channel/UCM1pfRas6M31zRWvCOGvedQ',
      },
      {
        title: 'Slack',
        url:
          'https://join.slack.com/t/tini-apps/shared_invite/zt-z7ikk3ox-rCirvNmeOrSvUo_tW67D4Q',
      },
      {title: 'QR Code', url: '/qr-code'},
    ],
  },
];

const bottom = [
  {
    title: 'Về Tiki',
    url: 'https://tiki.vn/gioi-thieu-ve-tiki',
  },
  {
    title: 'Tuyển dụng',
    url: 'https://tuyendung.tiki.vn/',
  },
  {
    title: 'Nguyên tắc kiểm duyệt',
    url: '/docs/operation/approval-rules',
  },
];

function FooterLink({to, href, label, prependBaseUrlToHref, ...props}) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true,
  });
  return (
    <Link
      className={styles.footerLink}
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {label}
    </Link>
  );
}

function Group({items, title}) {
  return (
    <div className={styles.groupWrapper}>
      <h4 className={styles.groupTitle}>{title}</h4>
      {items.map((item, index) => (
        <div key={index} style={{marginBottom: 8}}>
          <FooterLink label={item.title} to={item.url} />
        </div>
      ))}
    </div>
  );
}

function Content() {
  return (
    <div className={styles.footerContent}>
      <div className={styles.flex2}>
        <Link to="/">
          <LogoSVG />
        </Link>
      </div>
      <div className={styles.groups}>
        {groups.map((item, index) => (
          <Group key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className={styles.bottom}>
      <div className={styles.copyRight}>© {new Date().getFullYear()} Tiki</div>
      <div className={styles.bottomItems}>
        {bottom.map((item, index) => (
          <div key={index} className={styles.bottomItem}>
            <FooterLink label={item.title} to={item.url} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <Content />
        <div className={styles.line} />
        <Bottom />
      </div>
    </footer>
  );
}

export default Footer;
