const path = require('path');

module.exports = {
  title: 'Tini App',
  tagline: 'Tini App - Tiki',
  url: 'https://developers.tiki.vn',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'tiki',
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    localeConfigs: {
      vi: {
        label: 'VI',
      },
      en: {
        label: 'EN',
      },
    },
  },
  projectName: 'tiniapp',
  themes: ['docusaurus-theme-search-typesense'],
  themeConfig: {
    typesense: {
      typesenseCollectionName: 'tiniapp-docs',
      typesenseServerConfig: {
        nodes: [
          {
            // host: 'localhost',
            // port: 8108,
            // protocol: 'http',

            // host: 'api.tala.xyz',
            host: 'api.tiki.vn',
            port: '443/scp-typesense',
            protocol: 'https',
          },
        ],
        // apiKey: '__w3r0ck__',
        // apiKey: 'XQE43G2ZrXZWpC8utUlXetUSM929kQh6', // UAT
        apiKey: '7kxk8OfF50SHDcyLc7uJp4dMCNGnAroC', // Prod
      },
      // Optional: Typesense search parameters: https://typesense.org/docs/0.21.0/api/documents.md#search-parameters
      typesenseSearchParameters: {
        filter_by: 'language:=vi',
      },
      contextualSearch: false,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Tini Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduce/getting-started',
          position: 'left',
          label: 'Get Started',
        },
        {
          type: 'doc',
          docId: 'development/studio/overview',
          position: 'left',
          label: 'DevTools',
        },
        {
          type: 'doc',
          docId: 'design/overview',
          position: 'left',
          label: 'Design',
        },
        {
          to: 'showcase',
          label: 'Showcase',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'Docs',
          position: 'left',
          className: 'navbar-dropdown',
          items: [
            {
              type: 'doc',
              docId: 'framework/overview',
              label: 'Framework',
            },
            {
              type: 'doc',
              docId: 'component/overview',
              label: 'Components',
            },
            {
              type: 'doc',
              docId: 'api/overview',
              label: 'JS APIs',
            },
            {
              type: 'doc',
              docId: 'backend-api/overview',
              label: 'Server APIs',
            },
            {
              type: 'doc',
              docId: 'sdk/overview',
              label: 'Tini App SDK',
            },
          ],
        },
        {
          label: 'Cộng đồng',
          href: 'https://community.tiki.vn',
          position: 'right',
          className: 'button-link ml-16x',
          target: '_blank',
          'aria-label': 'Tini Comnuity',
        },
        {
          label: 'Tini Console',
          href: 'https://developers.tiki.vn/apps',
          position: 'right',
          className: 'button-link ml-16x',
          target: '_blank',
          'aria-label': 'Tini Console',
        },
        {type: 'localeDropdown', position: 'right'},
      ],
    },
    facebook: {
      pixelId: '445439733868914',
    },
  },
  plugins: [
    path.resolve(__dirname, './plugins/docusaurus-plugin-showcase-generator'),
    'docusaurus-plugin-sass',
    [
      /** @type {import('@docusaurus/plugin-content-blog').Options} */
      '@docusaurus/plugin-content-blog',
      {
        id: 'second-blog',
        routeBasePath: 'release',
        path: './release',
        blogSidebarTitle: 'Danh sách các phiên bản',
        blogSidebarCount: 'ALL',
      },
    ],
    path.resolve(__dirname, './plugins/docusaurus-plugin-facebook-pixel'),
    path.resolve(__dirname, './plugins/docusaurus-plugin-facebook-share'),
    path.resolve(__dirname, './plugins/docusaurus-plugin-gtm'),
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          // editUrl: 'https://github.com/tikivn/tiki-miniapp-docs/blob/master',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Tất cả bài viết',
          blogSidebarCount: 'ALL',
          // editUrl: 'https://github.com/tikivn/tiki-miniapp-docs/blob/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        sitemap: {
          changefreq: 'daily',
        },
      },
    ],
  ],
};
