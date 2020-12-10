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
    categoryOrder: {},
  },
  ...commonConfig 
};