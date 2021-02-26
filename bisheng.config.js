const commonConfig = require('./bisheng.common.js');

module.exports = { 
  port: 7111,
  root: '/',
  source: {
    docs: './docs',
  },
  theme: './theme',
  htmlTemplate: './theme/static/template.html',
  themeConfig: {
    root: '/',
    categoryOrder: {
    },
    typeOrder: {
      'Basic components': 1,
      'Advanced components': 2,
    },
  },
  ...commonConfig 
};