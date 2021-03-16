const path = require('path');

const homeTmpl = './template/Home/index';
const contentTmpl = './template/Content/index';

function pickerGenerator(module) {
  const tester = new RegExp(`^docs/${module || ''}`);
  return markdownData => {
    const { filename } = markdownData.meta;
    if (tester.test(filename) && !/\/demo$/.test(path.dirname(filename))) {
      return {
        meta: markdownData.meta,
      };
    }
    return null;
  };
}

module.exports = {
  lazyLoad(nodePath, nodeValue) {
    if (typeof nodeValue === 'string') {
      return true;
    }
    return nodePath.endsWith('/demo');
  },
  pick: {
    docs: pickerGenerator(),
    // developers
    'docs/developer': pickerGenerator('developer'),
    'docs/developer/introduce': pickerGenerator('developer'),
    'docs/developer/quick-example': pickerGenerator('developer'),

    // design
    'docs/design': pickerGenerator('design'),
    'docs/design/comps': pickerGenerator('design'),
    'docs/design/styles': pickerGenerator('design'),
    'docs/design/patterns': pickerGenerator('design'),
    'docs/design/principles': pickerGenerator('design'),

    // framework
    'docs/framework': pickerGenerator('framework'),
    'docs/framework/config': pickerGenerator('framework'),
    'docs/framework/txml': pickerGenerator('framework'),
    'docs/framework/tcss': pickerGenerator('framework'),
    'docs/framework/component': pickerGenerator('framework'),
    'docs/framework/event': pickerGenerator('framework'),

    // api
    'docs/api': pickerGenerator('api'),
    'docs/api/basic': pickerGenerator('api'),
    'docs/api/open': pickerGenerator('api'),
    'docs/api/device': pickerGenerator('api'),
    'docs/api/interface': pickerGenerator('api'),
    'docs/api/navigator': pickerGenerator('api'),
    'docs/api/network': pickerGenerator('api'),
    'docs/api/interactive': pickerGenerator('api'),
    'docs/api/application': pickerGenerator('api'),
    'docs/api/pull-refresh': pickerGenerator('api'),
    'docs/api/navigation-bar': pickerGenerator('api'),
    'docs/api/tabbar': pickerGenerator('api'),

    // others
    'docs/component': pickerGenerator('component'),
    'docs/component/basic': pickerGenerator('component'),
    'docs/component/media': pickerGenerator('component'),
    'docs/component/view-container': pickerGenerator('component'),
    'docs/ide': pickerGenerator('ide'),
  },
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc?maxDepth=2&keepElem',
    'bisheng-plugin-antd',
    'bisheng-plugin-react?lang=__react',
  ],
  routes: {
    path: '/',
    component: './template/Layout/index',
    indexRoute: { component: homeTmpl },
    childRoutes: [
      {
        path: 'index-en',
        component: homeTmpl,
      },
      {
        path: '/docs/:module/:file/:children',
        component: contentTmpl,
      },
      {
        path: '/docs/:module/:children',
        component: contentTmpl,
      },
    ],
  },
};
