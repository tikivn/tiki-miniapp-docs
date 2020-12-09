const path = require('path');

const homeTmpl = './template/Home/index';
const contentTmpl = './template/Content/index';

function pickerGenerator(module) {
  const tester = new RegExp(`^docs/${module || ''}`);
  return (markdownData) => {
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
    'docs/developer': pickerGenerator('developer'),
    'docs/developer/introduce': pickerGenerator('developer'),
    'docs/developer/quick-example': pickerGenerator('developer'),
    'docs/component': pickerGenerator('component'),
    'docs/api': pickerGenerator('api'),
    'docs/framework': pickerGenerator('framework'),
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
        path: '/docs/:module/:children',
        component: contentTmpl,
      },
      {
        path: '/docs/:module/:file/:children',
        component: contentTmpl,
      },
    ],
  },
};
