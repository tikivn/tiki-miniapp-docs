module.exports = {
  title: 'Tini App',
  tagline: 'Tini App - Tiki',
  url: 'https://miniapp.tiki.vn',
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
  projectName: 'tinyapp',
  themeConfig: {
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
          docId: 'developer/getting-started',
          position: 'right',
          label: 'Bắt đầu',
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
          label: 'API',
        },
        {
          type: 'doc',
          docId: 'backend-api/overview',
          position: 'right',
          label: 'Backend API',
        },
        {
          type: 'doc',
          docId: 'studio/overview',
          position: 'right',
          label: 'Studio',
        },
        {
          type: 'doc',
          docId: 'design/overview',
          position: 'right',
          label: 'Design',
        },
        {type: 'localeDropdown', position: 'right'},
      ],
    },
    gtag: {
      trackingID: 'UA-15036050-25',
    },
  },
  plugins: [
    'docusaurus-plugin-sass',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/tikivn/tiki-miniapp-docs/blob/master',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/tikivn/tiki-miniapp-docs/blob/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
};
