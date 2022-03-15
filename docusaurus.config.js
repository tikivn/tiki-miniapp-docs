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
        label: 'Tiếng Việt',
      },
      en: {
        label: 'English',
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
        apiKey: '25de9A8j5KT1Esm7kdNDOzUE4xQdik0R', // Prod
      },
      // Optional: Typesense search parameters: https://typesense.org/docs/0.21.0/api/documents.md#search-parameters
      typesenseSearchParameters: {
        filter_by: 'language:=vi'
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
          position: 'right',
          label: 'Bắt đầu',
        },
        {
          type: 'doc',
          docId: 'development/studio/overview',
          position: 'right',
          label: 'Phát triển',
        },
        {
          to: 'showcase',
          label: 'Showcase',
          position: 'right',
        },
        {
          type: 'doc',
          docId: 'framework/overview',
          position: 'right',
          label: 'Framework',
        },
        {
          type: 'doc',
          docId: 'component/overview',
          position: 'right',
          label: 'Components',
        },
        {
          type: 'doc',
          docId: 'api/overview',
          position: 'right',
          label: 'JS APIs',
        },
        {
          type: 'doc',
          docId: 'backend-api/overview',
          position: 'right',
          label: 'Server APIs',
        },

        {
          type: 'doc',
          docId: 'design/overview',
          position: 'right',
          label: 'Design',
        },
        {
          label: 'Cộng đồng',
          href: 'https://community.tiki.vn',
          position: 'right',
        },
        {
          label: 'Blog',
          href: '/blog',
          position: 'right',
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
          blogSidebarTitle: 'Bài viết gần đây',
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
