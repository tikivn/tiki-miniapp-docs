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
        'development/studio/remote-debug',
        'development/studio/project-config',
        'development/studio/vscode-extension',
        'development/studio/typescript-support',
        'development/studio/troubleshooting-studio',
      ],
    },
    {
      type: 'category',
      label: 'Tini Console',
      collapsed: true,
      items: [
        'development/tini-console/overview',
        'development/tini-console/app_statuses',
        'development/tini-console/delete',
        'development/tini-console/hide',
        'development/tini-console/share-app',
        'development/tini-console/support',
        'development/tini-console/chat',
        'development/tini-console/whitelist-domains',
        'development/tini-console/app-key',
        'development/tini-console/mobile-web',
        'development/tini-console/sitemap-seo',
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
    'faq/index',
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
    {
      type: 'category',
      label: 'Components',
      link: {type: 'doc', id: 'component/overview'},
      items: [
        {
          type: 'category',
          label: 'Basic components',
          collapsed: false,
          items: [
            {
              type: 'category',
              label: 'View container',
              items: [
                'component/basic/view-container/view',
                'component/basic/view-container/scroll-view',
                'component/basic/view-container/recycle-view',
                'component/basic/view-container/movable-view',
                'component/basic/view-container/movable-area',
                'component/basic/view-container/webview',
                'component/basic/view-container/gameview',
                'component/basic/view-container/carousel',
              ],
            },
            {
              type: 'category',
              label: 'Basic content',
              items: [
                'component/basic/basic/text',
                'component/basic/basic/rich-text',
                'component/basic/basic/icon',
                'component/basic/basic/progress',
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
              items: [
                'component/basic/form/form',
                'component/basic/form/label',
                'component/basic/form/input',
                'component/basic/form/textarea',
                'component/basic/form/checkbox',
                'component/basic/form/checkbox-group',
                'component/basic/form/radio',
                'component/basic/form/radio-group',
                'component/basic/form/picker',
                'component/basic/form/picker-view',
                'component/basic/form/button',
                'component/basic/form/slider',
                'component/basic/form/switch',
              ],
            },
            {
              type: 'category',
              label: 'Navigation',
              items: ['component/basic/navigation/navigator'],
            },
            {
              type: 'category',
              label: 'Graphics',
              items: ['component/basic/graphics/canvas'],
            },
            {
              type: 'category',
              label: 'Media components',
              items: [
                'component/basic/media/image',
                'component/basic/media/audio',
                'component/basic/media/video',
                'component/basic/media/player',
                'component/basic/media/lottie',
              ],
            },
            {
              type: 'category',
              label: 'Map',
              items: ['component/basic/map/map'],
            },
            {
              type: 'category',
              label: 'Utilities',
              items: [
                'component/basic/utilities/image-cropper',
                'component/basic/utilities/cashback',
                'component/basic/utilities/share-to-earn',
              ],
            },
            {
              type: 'category',
              label: 'Advertising',
              items: ['component/basic/ads/banner-ad'],
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
              items: [
                'component/advance/actions/button',
                'component/advance/actions/uploader',
              ],
            },
            {
              type: 'category',
              label: 'Forms',
              items: [
                'component/advance/form/textfield',
                'component/advance/form/dropdown',
                'component/advance/form/search-bar',
                'component/advance/form/calendar',
                'component/advance/form/step',
                'component/advance/form/stepper',
                'component/advance/form/pin',
                'component/advance/form/chip',
              ],
            },
            {
              type: 'category',
              label: 'Navigation',
              items: [
                'component/advance/navigation/tabs',
                'component/advance/navigation/sidebar',
                'component/advance/navigation/badge',
                'component/advance/navigation/avatar',
              ],
            },
            {
              type: 'category',
              label: 'Data visualization',
              items: [
                'component/advance/data-visualization/list-item',
                'component/advance/data-visualization/address',
                'component/advance/data-visualization/alphabet',
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
                'component/advance/feedback/toast-bar',
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
    },
  ],
  api: [
    {
      type: 'category',
      label: 'JS APIs',
      link: {type: 'doc', id: 'api/overview'},
      items: [
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
                  dirName: 'api/ui/multi-level-select',
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
              label: 'Option Selector',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'api/ui/option-selector',
                },
              ],
            },
            {
              type: 'category',
              label: 'Page Scroll To',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'api/ui/page-scroll-to',
                },
              ],
            },
            {
              type: 'category',
              label: 'Date Picker',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'api/ui/datepicker',
                },
              ],
            },
            {
              type: 'category',
              label: 'Font',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'api/ui/font',
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
          label: 'Deeplink',
          items: [
            {
              type: 'autogenerated',
              dirName: 'api/deeplink',
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
          label: 'Device',
          items: [
            {
              type: 'category',
              label: 'Screen',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'api/device/screen',
                },
              ],
            },
            {
              type: 'category',
              label: 'Setting',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'api/device/setting',
                },
              ],
            },
            {
              type: 'category',
              label: 'Network',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'api/device/network',
                },
              ],
            },
            {
              type: 'category',
              label: 'Vibrate',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'api/device/vibrate',
                },
              ],
            },
            {
              type: 'category',
              label: 'Shake',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'api/device/shake',
                },
              ],
            },
            {
              type: 'category',
              label: 'Compass',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'api/device/compass',
                },
              ],
            },
            {
              type: 'category',
              label: 'Accelerometer',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'api/device/accelerometer',
                },
              ],
            },
            {
              type: 'category',
              label: 'Contact',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'api/device/contact',
                },
              ],
            },
            {
              type: 'category',
              label: 'Clipboard',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'api/device/clipboard',
                },
              ],
            },
            {
              type: 'category',
              label: 'Scan',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'api/device/scan',
                },
              ],
            },
            {
              type: 'category',
              label: 'Bio metrics',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'api/device/bio-metrics',
                },
              ],
            },
            {
              type: 'category',
              label: 'Security Storage',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'api/device/security-storage',
                },
              ],
            },
            {
              type: 'category',
              label: 'Permission',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'api/device/permission',
                },
              ],
            },
            {
              type: 'category',
              label: 'Others',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'api/device/others',
                },
              ],
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
        'backend-api/platform-api/auth-code',
      ],
    },
    {
      type: 'category',
      label: 'Thanh toán với Tiki',
      items: [
        'backend-api/payment/overview',
        'backend-api/payment/link-accounts',
        /*'backend-api/payment/create-sku', */
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
        'backend-api/payment/bank-transfer',
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
        'backend-api/lead-gen/list_customer_responses',
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
      items: [
        {
          type: 'category',
          label: 'Các flow chuẩn',
          items: [
            {
              type: 'autogenerated',
              dirName: 'design/figma/standard-flows',
            },
          ],
        },
        'design/figma/started',
        'design/figma/download',
      ],
    },
  ],
  sdk: [
    'sdk/overview',
    {
      type: 'category',
      label: 'Tích hợp SDK',
      collapsed: false,
      items: [
        'sdk/setup-for-ios',
        'sdk/setup-for-android',
        'sdk/troubleshooting',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Các ví dụ mẫu',
    //   collapsed: false,
    //   items: ['sdk/example-for-ios', 'sdk/example-for-android'],
    // },
    {
      type: 'category',
      label: 'Tích hợp Backend',
      collapsed: false,
      items: [
        'sdk/backend/payment',
        'sdk/backend/ipn',
        'sdk/backend/api_signature',
      ],
    },
  ],
};
