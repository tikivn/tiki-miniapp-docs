const Users = require('../src/data/showcase');
const {normalizeUrl, docuHash} = require('@docusaurus/utils');

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
      const {addRoute, createData} = actions;
      await Promise.all(
        Users.map(async item => {
          const permalink = normalizeUrl([
            baseUrl,
            'showcase',
            convertToSlug(item.title),
          ]);
          const detailsJsonPath = await createData(
            `${docuHash(permalink)}.json`,
            JSON.stringify(item, null, 2),
          );
          addRoute({
            path: permalink,
            component: '@theme/ShowcaseDetails',
            exact: true,
            modules: {
              details: detailsJsonPath,
            },
          });
        }),
      );
    },
  };
};
