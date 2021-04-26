import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.scss';
import LogoSVG from '@site/static/img/logo.svg';

const groups = [
  {
    title: 'Tài liệu',
    items: [
      {title: 'Studio', url: '/docs/ide/overview'},
      {title: 'Framework', url: '/docs/framework/overview'},
      {title: 'Component', url: '/docs/component/overview'},
      {title: 'API', url: '/docs/api/overview'},
      {title: 'Ví dụ mẫu', url: ''},
    ],
  },
  {
    title: 'Hỗ trợ',
    items: [
      {title: 'Câu hỏi thường gặp', url: ''},
      {title: 'Bugs', url: ''},
      {title: 'Cộng đồng', url: ''},
      {title: 'Sitemap', url: ''},
    ],
  },
  {
    title: 'Tin tức',
    items: [
      {title: 'Blog', url: ''},
      {title: 'Case studies', url: ''},
      {title: 'Workshop', url: ''},
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
    title: 'Chính sách Nhà phát triển',
    url: '',
  },
  {
    title: 'Điều khoản sử dụng',
    url: '',
  },
  {
    title: 'Chính sách riêng tư',
    url: '',
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
