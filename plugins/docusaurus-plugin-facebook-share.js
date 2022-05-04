module.exports = function (context) {
  return {
    name: 'docusaurus-plugin-facebook-share',
    injectHtmlTags() {
      return {
        preBodyTags: [
          {
            tagName: 'div',
            attributes: {
              id: 'fb-root',
            },
          },
          {
            tagName: 'script',
            attributes: {
              defer: true,
              async: true,
              crossorigin: 'anonymous',
              src: 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v13.0&appId=384645493547018&autoLogAppEvents=1',
            },
          },
        ],
      };
    },
  };
};
