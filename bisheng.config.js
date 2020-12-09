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
      // developer
      'Bắt đầu': 0,
      'Hướng dẫn nhà phát triển': 1,
      'Ví dụ mẫu': 2,
      'Khái niệm': 3,
      'Getting Started': 0,
      'MiniApp Development Guide': 1,
      'Quick Example': 2,
      'Terms': 3,
      // design
      'Tổng quan về thiết kế': 0,
      'Styles': 1,
      'Components': 2,
      'Patterns': 3,
    },
  },
  ...commonConfig 
};