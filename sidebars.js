module.exports = {
  developer: [
    'developer/getting-started',
    'developer/development-process',
    {
      type: 'category',
      label: 'Hướng dẫn nhà phát triển',
      collapsed: false,
      items: [
        'developer/introduce/register',
        'developer/introduce/create',
        'developer/introduce/member',
        'developer/introduce/upload',
        'developer/introduce/release',
        'developer/introduce/dev-assistant',
      ],
    },
    {
      type: 'category',
      label: 'Tích hợp luồng thanh toán',
      collapsed: false,
      items: [
        'developer/payment-flow/overview',
        'developer/payment-flow/create-sku',
        'developer/payment-flow/payment-feature-request',
      ],
    },
    {
      type: 'category',
      label: 'Ví dụ mẫu',
      collapsed: false,
      items: [
        'developer/quick-example/shopping',
        'developer/quick-example/custom-header',
      ],
    },
  ],
  /* studio: [
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
      items: ['studio/development'],
    },
    {
      type: 'category',
      label: 'Debug',
      collapsed: false,
      items: ['studio/debug'],
    },
  ],
*/
  studio: [
    'studio/overview',
    'studio/development',
    'studio/simulator',
    'studio/debug',
  ],

  framework: [
    'framework/overview',
    {
      type: 'category',
      label: 'App Config',
      items: [
        {
          type: 'autogenerated',
          dirName: 'framework/app',
        },
      ],
    },
    {
      type: 'category',
      label: 'Page Config',
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
      label: 'SJS',
      collapsed: true,
      items: [
        'framework/sjs/introduction',
        'framework/sjs/how-to-import',
        'framework/sjs/variable',
        'framework/sjs/annotation',
        'framework/sjs/operator',
        'framework/sjs/statement',
        'framework/sjs/type',
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
      label: 'Basic components',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'View container',
          items: [
            {
              type: 'autogenerated',
              dirName: 'component/basic/view-container',
            },
          ],
        },
        {
          type: 'category',
          label: 'Basic content',
          items: [
            {
              type: 'autogenerated',
              dirName: 'component/basic/basic',
            },
          ],
        },
        {
          type: 'category',
          label: 'Form component',
          items: [
            {
              type: 'autogenerated',
              dirName: 'component/basic/form',
            },
          ],
        },
        {
          type: 'category',
          label: 'Graphics',
          items: [
            {
              type: 'autogenerated',
              dirName: 'component/basic/graphics',
            },
          ],
        },
        {
          type: 'category',
          label: 'Media components',
          items: [
            {
              type: 'autogenerated',
              dirName: 'component/basic/media',
            },
          ],
        },
        {
          type: 'category',
          label: 'Map',
          items: [
            {
              type: 'autogenerated',
              dirName: 'component/basic/map',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Advanced components',
      collapsed: false,
      items: [
        'component/advance/introduce',
        {
          type: 'category',
          label: 'Actions',
          items: ['component/advance/actions/button'],
        },
        {
          type: 'category',
          label: 'Forms',
          items: [
            'component/advance/form/stepper',
            'component/advance/form/steps',
            'component/advance/form/textfield',
            'component/advance/form/dropdown',
          ],
        },
        {
          type: 'category',
          label: 'Navigation',
          items: [
            'component/advance/navigation/avatar',
            'component/advance/navigation/badge',
            'component/advance/navigation/sidebar',
            'component/advance/navigation/tabs',
          ],
        },
        {
          type: 'category',
          label: 'Data visualization',
          items: [
            'component/advance/data-visualization/list-item',
            'component/advance/data-visualization/address',
          ],
        },
        {
          type: 'category',
          label: 'Feedback',
          items: [
            'component/advance/feedback/popup',
            'component/advance/feedback/modal',
            'component/advance/feedback/bottom-sheet',
          ],
        },
        {
          type: 'category',
          label: 'Styling',
          items: [
            {
              type: 'category',
              label: 'Concept',
              items: [
                'component/advance/styling/concept/utility-first',
                'component/advance/styling/concept/install',
                'component/advance/styling/concept/customize',
              ],
            },
            {
              type: 'category',
              label: 'Layout',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'component/advance/styling/layout',
                },
              ],
            },
            {
              type: 'category',
              label: 'Flexbox',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'component/advance/styling/flexbox',
                },
              ],
            },
            {
              type: 'category',
              label: 'Spacing',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'component/advance/styling/spacing',
                },
              ],
            },
            {
              type: 'category',
              label: 'Sizing',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'component/advance/styling/sizing',
                },
              ],
            },
            {
              type: 'category',
              label: 'Typography',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'component/advance/styling/typography',
                },
              ],
            },
            {
              type: 'category',
              label: 'Background',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'component/advance/styling/background',
                },
              ],
            },
            {
              type: 'category',
              label: 'Border',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'component/advance/styling/border',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  api: [
    'api/overview',
    {
      type: 'category',
      label: 'Basic',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/basic',
        },
      ],
    },
    {
      type: 'category',
      label: 'In-App Event',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/in-app-event',
        },
      ],
    },
    {
      type: 'category',
      label: 'UI',
      items: [
        {
          type: 'category',
          label: 'Navigation Bar',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/ui/navigation-bar',
            },
          ],
        },
        {
          type: 'category',
          label: 'Tab Bar',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/ui/tab-bar',
            },
          ],
        },
        {
          type: 'category',
          label: 'Route',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/ui/route',
            },
          ],
        },
        {
          type: 'category',
          label: 'Feedback',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/ui/feedback',
            },
          ],
        },
        {
          type: 'category',
          label: 'Pull-down',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/ui/pull-down',
            },
          ],
        },
        {
          type: 'category',
          label: 'Contact',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/ui/contact',
            },
          ],
        },
        {
          type: 'category',
          label: 'Choose Date',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/ui/choose-date',
            },
          ],
        },
        {
          type: 'category',
          label: 'Animation',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/ui/animation',
            },
          ],
        },
        {
          type: 'category',
          label: 'Canvas',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/ui/canvas',
            },
          ],
        },
        {
          type: 'category',
          label: 'Keyboard',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/ui/keyboard',
            },
          ],
        },
        {
          type: 'category',
          label: 'Scroll',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/ui/scroll',
            },
          ],
        },
        {
          type: 'category',
          label: 'Selector Query',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/ui/selector-query',
            },
          ],
        },
        {
          type: 'category',
          label: 'Multilevel select',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/ui/multilevel-select',
            },
          ],
        },
        {
          type: 'category',
          label: 'Background',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/ui/background',
            },
          ],
        },
        {
          type: 'category',
          label: 'Set Page Pulldown',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/ui/set-page-pulldown',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Media',
      items: [
        {
          type: 'category',
          label: 'Image',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/media/image',
            },
          ],
        },
        {
          type: 'category',
          label: 'Audio',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/media/audio',
            },
          ],
        },
        {
          type: 'category',
          label: 'Video',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/media/video',
            },
          ],
        },
        {
          type: 'category',
          label: 'Lottie',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/media/lottie',
            },
          ],
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
      label: 'File',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/file',
        },
      ],
    },
    {
      type: 'category',
      label: 'Geography',
      items: [
        {
          type: 'category',
          label: 'Location',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/geo/location',
            },
          ],
        },
        {
          type: 'category',
          label: 'Map',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/geo/map',
            },
          ],
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
      label: 'Sharing',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/sharing',
        },
      ],
    },
    {
      type: 'category',
      label: 'Device',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/device',
        },
      ],
    },
    {
      type: 'category',
      label: 'Open',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/open',
        },
      ],
    },
    {
      type: 'category',
      label: 'Analytics',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/analytics',
        },
      ],
    },
  ],
  'Backend API': [
    'backend-api/overview',
    {
      type: 'category',
      label: 'Open API',
      collapsed: false,
      items: [
        'backend-api/open-api/overview',
        'backend-api/open-api/user-profile',
      ],
    },
    {
      type: 'category',
      label: 'Platform API',
      collapsed: false,
      items: [
        'backend-api/platform-api/overview',
        'backend-api/platform-api/sandbox',
        'backend-api/platform-api/calculate-signature',
        'backend-api/platform-api/exchange-auth-token',
        {
          type: 'category',
          label: 'Thanh toán với Tiki',
          items: [
            'backend-api/platform-api/payment/overview',
            'backend-api/platform-api/payment/flow',
            'backend-api/platform-api/payment/create-order',
            'backend-api/platform-api/payment/ipn',
            'backend-api/platform-api/payment/get-order',
            'backend-api/platform-api/payment/list-orders',
            'backend-api/platform-api/payment/complete-order',
            'backend-api/platform-api/payment/cancel-order',
            'backend-api/platform-api/payment/order-status',
            'backend-api/platform-api/payment/error-code',
          ],
        },
        {
          type: 'category',
          label: 'Shipping API',
          items: [
            'backend-api/platform-api/shipping/overview',
            'backend-api/platform-api/shipping/list_quotes',
            'backend-api/platform-api/shipping/create_shipment',
            'backend-api/platform-api/shipping/get_shipment',
            'backend-api/platform-api/shipping/cancel_shipment',
            'backend-api/platform-api/shipping/get_ward_code',
            'backend-api/platform-api/shipping/switch_shipment_status',
            'backend-api/platform-api/shipping/webhook',
            'backend-api/platform-api/shipping/status_flow',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Backend với GCP',
      collapsed: false,
      items: [
        'backend-api/gcp-sponsor/intro',
        'backend-api/gcp-sponsor/auth-backend',
      ],
    },
  ],
  design: [
    {
      type: 'category',
      label: 'Tini Design',
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
        'design/guideline/frame',
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
