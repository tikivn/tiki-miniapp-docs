module.exports = {
  developer: [
    'developer/getting-started',
    {
      type: 'category',
      label: 'Hướng dẫn nhà phát triển',
      collapsed: false,
      items: [
        'developer/introduce/register',
        'developer/introduce/create',
        'developer/introduce/upload',
        'developer/introduce/release',
        'developer/introduce/member',
      ],
    },
    {
      type: 'category',
      label: 'Ví dụ mẫu',
      collapsed: false,
      items: [
        'developer/quick-example/quick-example',
        'developer/quick-example/shopping',
      ],
    },
  ],
  studio: [
    'studio/overview',
    {
      type: 'category',
      label: 'Giao diện',
      collapsed: false,
      items: ['studio/start-page', 'studio/main', 'studio/simulator'],
    },
    {
      type: 'category',
      label: 'Phát triển',
      collapsed: false,
      items: ['studio/development', 'studio/dev-assistant'],
    },
    {
      type: 'category',
      label: 'Debug',
      collapsed: false,
      items: ['studio/debug'],
    },
  ],
  framework: [
    'framework/overview',
    {
      type: 'category',
      label: 'Cấu hình chung',
      collapsed: true,
      items: ['framework/config/app', 'framework/config/page'],
    },
    {
      type: 'category',
      label: 'TXML',
      collapsed: true,
      items: [
        'framework/txml/introduction',
        'framework/txml/data-binding',
        'framework/txml/conditional-rendering',
        'framework/txml/list-rendering',
        'framework/txml/template',
        'framework/txml/referencing',
      ],
    },
    {
      type: 'category',
      label: 'Page',
      collapsed: true,
      items: [
        'framework/miniapp-page/introduction',
        'framework/miniapp-page/config',
        'framework/miniapp-page/style',
        'framework/miniapp-page/life-cycle',
        'framework/miniapp-page/get-current-pages',
      ],
    },
    {
      type: 'category',
      label: 'TCSS',
      collapsed: true,
      items: ['framework/tcss/tcss-introduction'],
    },
    {
      type: 'category',
      label: 'Component',
      collapsed: true,
      items: [
        'framework/component/custom-component-introduction',
        'framework/component/component-config',
        'framework/component/template-and-styles',
        'framework/component/object',
        'framework/component/life-cycle',
        'framework/component/mixins',
        'framework/component/ref',
        'framework/component/using',
      ],
    },
    {
      type: 'category',
      label: 'Event',
      collapsed: true,
      items: [
        'framework/event/event-introduction',
        'framework/event/event-object',
      ],
    },
  ],
  components: [
    'component/overview',
    {
      type: 'category',
      label: 'View containers',
      items: [
        {
          type: 'autogenerated',
          dirName: 'component/view-container',
        },
      ],
    },
    {
      type: 'category',
      label: 'Basic components',
      items: [
        {
          type: 'autogenerated',
          dirName: 'component/basic',
        },
      ],
    },
    {
      type: 'category',
      label: 'Media components',
      items: [
        {
          type: 'autogenerated',
          dirName: 'component/media',
        },
      ],
    },
    {
      type: 'category',
      label: 'Advance components',
      items: [
        {
          type: 'autogenerated',
          dirName: 'component/advance',
        },
      ],
    },
  ],
  api: [
    'api/overview',
    {
      type: 'category',
      label: 'Cơ bản',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/basic',
        },
      ],
    },
    {
      type: 'category',
      label: 'Tiki APIs',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/open',
        },
      ],
    },
    {
      type: 'category',
      label: 'Network',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/network',
        },
      ],
    },
    {
      type: 'category',
      label: 'Media',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/media',
        },
      ],
    },
    {
      type: 'category',
      label: 'Điều hướng',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/navigator',
        },
      ],
    },
    {
      type: 'category',
      label: 'Giao diện',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/interface',
        },
      ],
    },
    {
      type: 'category',
      label: 'Application Level',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/application',
        },
      ],
    },
    {
      type: 'category',
      label: 'Thiết bị',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/device',
        },
      ],
    },
    {
      type: 'category',
      label: 'Interactive Feedback',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/interactive',
        },
      ],
    },
    {
      type: 'category',
      label: 'Pull down to refresh',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/pull-refresh',
        },
      ],
    },
    {
      type: 'category',
      label: 'Thanh điều hướng',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/navigation-bar',
        },
      ],
    },
    {
      type: 'category',
      label: 'Tab Bar',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/tabbar',
        },
      ],
    },
    {
      type: 'category',
      label: 'Storage',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/storage',
        },
      ],
    },
    {
      type: 'category',
      label: 'Payment',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/payment',
        },
      ],
    },
    {
      type: 'category',
      label: 'Image Picker',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/image-picker',
        },
      ],
    },
    {
      type: 'category',
      label: 'Deeplink',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/deeplink',
        },
      ],
    },
  ],
  'Backend API': [
    'backend-api/overview',
    {
      type: 'category',
      label: 'Open API',
      items: [
        'backend-api/open-api/overview',
        'backend-api/open-api/user-profile',
      ],
    },
    {
      type: 'category',
      label: 'Platform API',
      items: [
        'backend-api/platform-api/overview',
        'backend-api/platform-api/calculate-signature',
        'backend-api/platform-api/exchange-auth-token',
        'backend-api/platform-api/payment',
        'backend-api/platform-api/error-code',
      ],
    },
  ],
  design: [
    {
      type: 'category',
      label: 'Tiny Design',
      items: ['design/overview'],
    },
    {
      type: 'category',
      label: 'Nguyên tắc thiết kế',
      items: [
        'design/principles/accessible',
        'design/principles/transparency',
        'design/principles/clear-focus',
        'design/principles/positive',
      ],
    },
    {
      type: 'category',
      label: 'Quy định trong thiết kế',
      items: [
        'design/guideline/navigation',
        'design/guideline/clear-progress',
        'design/guideline/hierarchy',
        'design/guideline/icon-app',
      ],
    },
    {
      type: 'category',
      label: 'Thiết kế chung',
      items: [
        'design/styles/color',
        'design/styles/font',
        'design/styles/icon',
      ],
    },
    {
      type: 'category',
      label: 'Tài nguyên thiết kế',
      items: ['design/figma/started', 'design/figma/download'],
    },
  ],
};
