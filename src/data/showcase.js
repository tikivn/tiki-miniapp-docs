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
    title: 'DoriDori',
    description: 'Nền tảng Recommerce đầu tiên tại Việt Nam',
    preview: 'https://user-images.githubusercontent.com/87349335/157161213-81de4025-c584-44b9-81ca-6ec4ac85f01e.png',
    app: 'https://tiki.vn/apps/vn.tiki.doridori',
    source:
      'https://github.com/tikivn/tiki-miniapp-docs/tree/master/src/data/apps/vn.tiki.doridori',
    tags: ['app'],
  },

  {
    title: 'Hexa: Reach the Start',
    description: 'Trò chơi ghép hình',
    preview: 'https://user-images.githubusercontent.com/87349335/146311639-2ac445a4-c249-48f3-9fc7-7fd290c0e152.jpg',
    app: 'https://tiki.vn/apps/abi.hexa',
    source:
      'https://github.com/tikivn/tiki-miniapp-docs/tree/master/src/data/apps/abi.hexa',
    tags: ['game'],
  },
  {
    title: 'Hồi Ức Mọt Sách',
    description:
      'Hồi Ức Mọt Sách là ứng dụng xem lại 10 năm hành trình của người dùng đối với ngành hàng sách của Tiki.',
    preview:
      'https://salt.tikicdn.com/ts/miniapp/0c/ac/65/3233676439ec0f90f8720d448583876f.jpg',
    app: 'https://tiki.vn/apps/vn.tiki.miniapp.lookback',
    source:
      'https://github.com/tikivn/tiki-miniapp-docs/tree/master/src/data/apps/vn.tiki.miniapp.lookback/',
    tags: ['app'],
  },
  {
    title: 'Lì xì',
    description:
      'Lì Xì đầu năm',
    preview:
      'https://user-images.githubusercontent.com/87349335/157080616-71952e27-7a19-4dba-b29f-6b1b2243c26a.png',
    app: 'https://tiki.vn/apps/vn.tiki.tini.lixi',
    source:
      'https://github.com/tikivn/tiki-miniapp-docs/tree/master/src/data/apps/vn.tiki.tini.lixi/',
    tags: ['game'],
  },

  {
    title: 'Merge Planets',
    description: 'Hợp nhất các hành tinh và hợp nhất vũ trụ ',
    preview: 'https://user-images.githubusercontent.com/87349335/146346144-e9967980-edd6-4f86-a672-e858dfea5572.png',
    app: 'https://tiki.vn/apps/abi.mergePlanets2048',
    source:
      'https://github.com/tikivn/tiki-miniapp-docs/tree/master/src/data/apps/abi.mergePlanets2048',
    tags: ['game'],
  },
  {
    title: 'Miki',
    description: 'Miễn phí đọc sách',
    preview: 'https://user-images.githubusercontent.com/87349335/146874655-0e5afbb5-f580-4861-b49d-438d5734051b.png',
    app: 'https://tiki.vn/apps/vn.tiki.miki',
    source:
      'https://github.com/tikivn/tiki-miniapp-docs/tree/master/src/data/apps/vn.tiki.miki',
    tags: ['app'],
  },
  {
    title: 'Rescue the Lover',
    description: 'Hành trình của chàng trai cứu cô bạn gái khỏi băng nhóm bắt cóc tống tiền',
    preview: 'https://user-images.githubusercontent.com/87349335/146406073-16d203c2-63b9-40b9-b3e2-574aa212e77c.png',
    app: 'https://tiki.vn/apps/abi.rescure',
    source:
      'https://github.com/tikivn/tiki-miniapp-docs/tree/master/src/data/apps/abi.rescure',
    tags: ['game'],
  },
  {
    title: 'Stack Art 3D',
    description: 'Trò chơi ghép hình puzzle',
    preview: 'https://user-images.githubusercontent.com/87349335/146391406-38e79e38-931a-4603-a590-9f3f3dfe6cf3.png',
    app: 'https://tiki.vn/apps/abi.stackart3d',
    source:
      'https://github.com/tikivn/tiki-miniapp-docs/tree/master/src/data/apps/abi.stackart3d',
    tags: ['game'],
  },
  {
    title: 'Tefal',
    description: 'Chia sẻ công thức và video nấu ăn cho mọi gia đình ',
    preview: 'https://user-images.githubusercontent.com/87349335/157161417-f951d2db-f44c-489e-95f9-d18595de4b16.png',
    app: 'https://tiki.vn/apps/vn.tiki.tini.tefal',
    source:
      'https://github.com/tikivn/tiki-miniapp-docs/tree/master/src/data/apps/vn.tiki.tini.tefal',
    tags: ['app'],
  },
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
    title: 'Tiki Exchange',
    description:
      'Sàn giao dịch Tiki Xu và Astra',
    preview:
      'https://user-images.githubusercontent.com/87349335/146875295-ffbcc0bb-d2bd-437b-8ed0-45e8454c8448.png',
    app: 'https://tiki.vn/apps/vn.tiki.miniapp.tikiexchange',
    source:
      'https://github.com/tikivn/tiki-miniapp-docs/tree/master/src/data/apps/vn.tiki.miniapp.tikiexchange',
    tags: ['app'],
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
    title: 'Troll Master',
    description: 'Động não và thử thách khả năng sáng tạo',
    preview: 'https://user-images.githubusercontent.com/87349335/146404505-8d3210bc-8ee5-47b2-9123-ed1e7f389ce5.png',
    app: 'https://tiki.vn/apps/abi.trollmaster',
    source:
      'https://github.com/tikivn/tiki-miniapp-docs/tree/master/src/data/apps/abi.trollmaster',
    tags: ['game'],
  },
  {
    title: 'Troll Master 2',
    description: 'Trò chơi vui nhộn kích thích sự sáng tạo',
    preview: 'https://user-images.githubusercontent.com/87349335/146392978-c7c20c29-15a2-44e5-8316-61422ca8f87e.png',
    app: 'https://tiki.vn/apps/abi.trollmaster2',
    source:
      'https://github.com/tikivn/tiki-miniapp-docs/tree/master/src/data/apps/abi.trollmaster2',
    tags: ['game'],
  },


  {
    title: 'Shop Template',
    description:
      'Template hỗ trợ store của Tiki có thể tạo được một ứng dụng shopping đơn giản bằng nền tảng Tini App',
    preview:
      'https://salt.tikicdn.com/ts/miniapp/f2/74/44/0f3df3bdece99c3c3de3e69ab1739a86.png',
    app: 'https://tiki.vn/apps/vn.tiki.shop',
    source: 'https://github.com/tikivn/miniapp-getting-started/tree/main/shop',
    tags: ['opensource', 'app', 'component'],
  },
  {
    title: 'Merchant Template',
    description:
      'Template hỗ trợ store của Tiki có thể tạo được một ứng dụng shopping đơn giản dựa trên sản phẩm có trên sàn Tiki.',
    preview:
      'https://salt.tikicdn.com/ts/miniapp/61/76/00/b10f77e2c882a3a7d267eb5e15f6e39f.png',
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
