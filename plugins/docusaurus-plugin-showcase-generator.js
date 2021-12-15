const Users = require('../src/data/showcase');
const {normalizeUrl} = require('@docusaurus/utils');

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

module.exports = function (context) {
  const {siteConfig} = context;
  const {baseUrl} = siteConfig;

  return {
    name: 'docusaurus-plugin-showcase-generator',
    async contentLoaded({conent, actions}) {
      const {addRoute, setGlobalData} = actions;
      Users.forEach(item => {
        setGlobalData({details: item});
        addRoute({
          path: normalizeUrl([baseUrl, 'showcase', convertToSlug(item.title)]),
          component: '@theme/ShowcaseDetails',
          exact: true,
        });
      });
    },
  };
};
