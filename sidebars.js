module.exports = {
  introduce: [
    'introduce/getting-started',
    'introduce/development-process',
    'introduce/register',
    'introduce/create',
    'introduce/member',
    'introduce/upload',
    'introduce/release',
    {
      type: 'category',
      label: 'Hướng dẫn sử dụng tài liệu',
      collapsed: true,
      items: ['introduce/how-to-use-docs/experience-sample-code'],
    },
    {
      type: 'category',
      label: 'Ví dụ mẫu',
      collapsed: true,
      items: [
        /*'introduce/quick-example/shopping', */
        'introduce/quick-example/custom-header',
      ],
    },
  ],
  development: [
    {
      type: 'category',
      label: 'Tini Studio',
      collapsed: true,
      items: [
        'development/studio/overview',
        'development/studio/development',
        'development/studio/simulator',
        'development/studio/debug',
        'development/studio/project-config',
      ],
    },
    {
      type: 'category',
      label: 'Tini Console',
      collapsed: true,
      items: [
        'development/tini-console/delete',
        'development/tini-console/hide',
        'development/tini-console/share-app',
        'development/tini-console/support',
        'development/tini-console/chat',
        'development/tini-console/whitelist-domains',
        'development/tini-console/app-key',
      ],
    },
    {
      type: 'category',
      label: 'Kiểm thử',
      collapsed: true,
      items: [
        'development/testing/dev-assistant',
        'development/testing/quick-test',
      ],
    },
  ],

  framework: [
    'framework/overview',
    /*{
      type: 'category',
      label: 'App Config',
      items: [
        {
          type: 'autogenerated',
          dirName: 'framework/app',
        },
      ],
    }, */
    {
      type: 'category',
      label: 'Config',
      collapsed: true,
      items: [
        'framework/app/config',
        'framework/app/get-app-method',
        'framework/app/config-game',
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
        {
          type: 'category',
          label: 'Utilities',
          items: [
            {
              type: 'autogenerated',
              dirName: 'component/basic/utilities',
            },
          ],
        },
        {
          type: 'category',
          label: 'Advertising',
          items: [
            {
              type: 'autogenerated',
              dirName: 'component/basic/ads',
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
            'component/advance/form/pin',
            'component/advance/form/dropdown',
            'component/advance/form/chip',
            'component/advance/form/calendar',
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
            'component/advance/feedback/tooltip',
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
          label: 'Cascade selection',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/ui/multi-level-select',
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
        {
          type: 'category',
          label: 'Option Selector',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/ui/option-selector',
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
      label: 'Ads',
      items: [
        'api/ads/create-interstitial-ad',
        {
          type: 'category',
          label: 'InterstitialAd',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/ads/interstitial-ad',
            },
          ],
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
    'api/backend-permission',
  ],
  'Backend API': [
    'backend-api/overview',
    {
      type: 'category',
      label: 'Open API',
      collapsed: true,
      items: [
        'backend-api/open-api/overview',
        'backend-api/open-api/user-profile',
      ],
    },
    {
      type: 'category',
      label: 'Platform API',
      collapsed: true,
      items: [
        'backend-api/platform-api/overview',
        'backend-api/platform-api/sandbox',
        'backend-api/platform-api/production',
        'backend-api/platform-api/calculate-signature',
        'backend-api/platform-api/exchange-auth-token',
      ],
    },
    {
      type: 'category',
      label: 'Thanh toán với Tiki',
      items: [
        'backend-api/payment/overview',
        'backend-api/payment/link-accounts',
        'backend-api/payment/create-sku',
        'backend-api/payment/payment-integration',
        'backend-api/payment/flow',
        'backend-api/payment/create-order',
        'backend-api/payment/ipn',
        'backend-api/payment/get-order',
        'backend-api/payment/list-orders',
        'backend-api/payment/complete-order',
        'backend-api/payment/cancel-order',
        'backend-api/payment/order-status',
        'backend-api/payment/error-code',
      ],
    },
    {
      type: 'category',
      label: 'Shipping API',
      items: [
        'backend-api/shipping/overview',
        'backend-api/shipping/list_quotes',
        'backend-api/shipping/create_shipment',
        'backend-api/shipping/get_shipment',
        'backend-api/shipping/cancel_shipment',
        'backend-api/shipping/get_ward_code',
        'backend-api/shipping/switch_shipment_status',
        'backend-api/shipping/webhook',
        'backend-api/shipping/status_flow',
      ],
    },
    {
      type: 'category',
      label: 'Lead Gen API',
      items: [
        'backend-api/lead-gen/overview',
        'backend-api/lead-gen/create_application',
        'backend-api/lead-gen/update_application',
        'backend-api/lead-gen/input_templates',
        'backend-api/lead-gen/status',
      ],
    },

    {
      type: 'category',
      label: 'Backend với GCP',
      collapsed: true,
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
      label: 'Nền tảng thiết kế',
      items: [
        'design/styles/design-tokens',
        'design/styles/color',
        'design/styles/font',
        'design/styles/space',
        'design/styles/radius',
        'design/styles/effects',
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
