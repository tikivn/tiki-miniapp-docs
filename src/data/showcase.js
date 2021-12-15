/*
 * ADD YOUR SITE TO THE TINIAPP SHOWCASE:
 *
 * Requirements for adding your site to our showcase:
 * - It is a production-ready site with real content and decent customizations (different from the init templates)
 * - It is NOT a work-in-progress with empty pages
 *
 * Instructions:
 * - Add your site in the json array below
 * - Add a local image preview (decent screenshot of your Docusaurus site)
 * - Use relevant tags to qualify your site (read the tag descriptions below)
 * - The image MUST be added to the GitHub repository, and use `require("image")`
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/tikivn/tiki-miniapp-docs/pull/3976
 *
 * If you edit this file through the Github interface, you can:
 * - Submit first your users.tsx edit PR
 * - This will create a branch on your Tiniapp Docs fork (usually "patch-1")
 * - Go to https://github.com/<username>/tiki-miniapp-docs/tree/<branch>/src/data/showcase
 * - Drag-and-drop an image here to add it to your existing PR
 *
 * Please help us maintain this showcase page data:
 * - Update apps with wrong data
 * - Ensure apps tags remains correct over time
 * - Remove apps not working anymore
 * - Add missing tiniapps (if the site owner agreed)
 *
 */

// Add your site to this list
module.exports = [
  {
    title: 'Tiki API Demo',
    description:
      'API Demo là ứng dụng dùng để trải nghiệm các API/Components được cung cấp trên nền tảng TiniApp.',
    preview:
      'https://user-images.githubusercontent.com/1713660/146020363-865dc11c-275f-4f56-8317-41655550aef2.png',
    app: 'https://tiki.vn/apps/vn.tiki.miniapp.demo',
    source:
      'https://github.com/tikivn/miniapp-getting-started/tree/main/api-demo',
    tags: ['opensource', 'app', 'component'],
  },
  {
    title: 'Tini UI Design System',
    description:
      'TiniUI là bộ design system phục vụ cho viết ứng dụng nhanh chóng trên TiniApp.',
    preview:
      'https://salt.tikicdn.com/ts/upload/0d/19/53/aeeb9d1418c8348aa027d0335e29eb3f.png',
    app: 'https://tiki.vn/apps/vn.tiki.miniapp.demo',
    npm: 'https://www.npmjs.com/package/@tiki.vn/tini-ui',
    source: 'https://github.com/tikivn/tini-ui',
    tags: ['opensource', 'component'],
  },
  {
    title: 'Shopping Template',
    description:
      'Template hỗ trợ store của Tiki có thể tạo được một ứng dụng shopping đơn giản bằng nền tảng Tini App',
    preview:
      'https://user-images.githubusercontent.com/1713660/146023043-f50040dd-c60e-4dd4-96eb-5c3a4c5ae80e.png',
    app: 'https://tiki.vn/apps/vn.tiki.shop',
    source: 'https://github.com/tikivn/miniapp-getting-started/tree/main/shop',
    tags: ['opensource', 'app', 'component'],
  },
  {
    title: 'Merchant Template',
    description:
      'Template hỗ trợ store của Tiki có thể tạo được một ứng dụng shopping đơn giản dựa trên sản phẩm có trên sàn Tiki.',
    preview:
      'https://salt.tikicdn.com/ts/miniapp/c3/8f/7c/73520800f96ac05c7a1d649b5e89c986.png',
    app: 'https://tiki.vn/apps/vn.tiki.tini.merchant',
    source:
      'https://github.com/tikivn/miniapp-getting-started/tree/main/merchant',
    tags: ['opensource', 'app', 'component'],
  },
  {
    title: 'Redux miniprogram bindings',
    description: 'Redux cho các mini-programs (Tiki, Alipay và Wechat)',
    preview: 'https://redux.js.org/img/redux-logo-landscape.png',
    app: null,
    npm: 'https://www.npmjs.com/package/@tiki.vn/redux-miniprogram-bindings',
    source: 'https://github.com/tikivn/redux-miniprogram-bindings',
    tags: ['opensource', 'lib'],
  },
  /*
  Pro Tip: add your site in alphabetical order.
  Appending your app here (at the end) is more likely to produce Git conflicts.
   */
];
