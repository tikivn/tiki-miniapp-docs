---
title: Xây dựng thư viện và tích hợp với tini-app
---

## Những gì bạn sẽ học trong bài blog này

Cách xây dựng một thư viện component UI cho dự án tini-app và triển khai package trên npm (Node package management)

## Mục lục

1. [Mở đầu](#introduction)
2. [Chuẩn bị](#prerequisite)
3. [Tiến hành xây dựng thư viện](#build-lib-stage)
4. [Triển khai thư viện lên npm registry](#publish-package)
5. [Kết luận](#conclusion)

---

### Mở đầu: <a id="introduction"></a>

Nếu bạn là một lập trình viên của [Tini App](https://developers.tiki.vn/), việc sử dụng là các package như **tini-ui**, **tini-style** không hề xa lạ đối với với chúng ta. Các thư viện được sinh ra nhằm giúp lập trình viên có thể phát triển ứng dụng Mini App một cách nhanh chóng và hiệu quả. Và có bao giờ bạn đã thắc mắc về việc làm thế nào để xây dựng ra các thư viện tương tự để phục vụ cho quá trình phát triển cũng như đóng góp cho cộng đồng lập trình viên? Trong bài hướng dẫn ngày hôm nay chúng ta sẽ cùng nhau từng bước xây dựng ra thư viện và triển khai lên npm nhé!

### Chuẩn bị <a id="prerequisite"></a>

- #### Cơ bản <a id="prerequisite-basic"></a>
  Trước khi bắt đầu phần chính, bạn cần phải chuẩn bị một số thứ được liệt kê dưới đây:

1. [Github account](https://github.com/)
2. Cài đặt Node.js & npm ([Hướng dẫn](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))
3. [NPM account](https://www.npmjs.com/)

Sau khi qua bước chuẩn bị này, chúng ta sẽ bắt đầu tiến hành vào công việc chính nào!

- #### Tên package <a id="preparing-package-name"></a>

Khi chọn tên cho một package sẽ được tạo mới, các bạn cần phải kiểm tra tên của package có khả dụng trên trang chủ của [npm](https://www.npmjs.com/) hay chưa. Tên package cần phải được xem là **duy nhất** nếu bạn phát hành như một unscoped (public) package. Ví dụ như: rez-deploy, lodash, node-fetch...

Tuy nhiên, nếu package của bạn là có gắn với scope cụ thể hoặc là private thì tên package **không** cần phải là duy nhất và thông thường các loại package này sẽ có định dạng như: @username/package-name, @org/package-name. Bạn có thể tìm hiểu thêm về scoped packages [tại đây](https://docs.npmjs.com/cli/v8/using-npm/scope)

:fire: **Quan trọng**:
Có một lưu ý về tên của package khi bạn tích hợp vào tini-app đó là nếu bạn đang sử dụng package như một phần của tini-app, tức là Sử dụng các biến toàn cục như: **Page**, **Component**, **App**... thì bạn cần phải đặt tên cho package theo định dạng được white-list như sau: @tiki.vn/package-name, @tikivn/package-name, @tiki-miniapp\*/packagename, tiki-miniapp\*.

Trong quá trình biên dịch của framework, các package có tên nằm trong white list trên sẽ được hiểu như một phần của tini-app và bạn có thể sử dụng các biến toàn cụ được liệt kê phía trên. Nếu tên package không tuân thủ theo việc đặt tên này thì trình biên dịch sẽ báo lỗi trong quá trình quá biên dịch. Trong bài blog này mình sẽ tạo một [organization](https://docs.npmjs.com/organizations) trên npm tên là **tiki-miniapp-rez** và package-name là **tini-ui** để thoả đều kiện phía trên. Lúc này package của chúng ta sẽ có định dạng: **@tiki-miniapp-rez/tini-ui**.

Bạn cũng có thể tạo ra một unscoped package và đặt tên theo định dạng với prefix tiki-miniapp vẫn được xem là hợp lí nhé. Ví dụ: **tiki-miniapp-{package-name}**, **tiki-miniapplib**... (Lưu ý với tên của unscope package sẽ phải là **unique** trên npm registry)

![](https://i.imgur.com/d9mmc6H.png)

- #### Tạo một repo trên Github <a id="preparing-github"></a>

Bây giờ chúng ta sẽ tạo một repo trên Github để thuận tiện cho việc quản lý code và xem như open source để các lập trình viên có thể cùng nhau phát triển thư viện. Hãy nhớ thêm README và chọn license như [MIT license](https://opensource.org/licenses/mit-license.php) nhé.

- #### Cấu hình & đăng nhập vào npm<a id="preparing-npm-config"></a>

Bạn có thể cấu hình một số thông tin như name, email, website (nếu có) trong npm. Các thông tin này sẽ được thêm vào file package.json của một project khi nó được tạo ra.

```bash
$ npm set init.author.name "your-name"
$ npm set init.author.email "your-email"
$ npm set init.author.url "your-website-url"
```

Sau khi đã setup xong thì các bạn hãy gọi lệnh `npm login` từ terminal để login vào npm với các thông tin như: **Username**, **password**, **Email** được tạo từ trang npm trước đó. Ngoài ra bạn sẽ phải nhập thêm mã OTP nếu tài khoản có bật tính năng 2FA.

Tiếp theo chúng ta sẽ cấu hình org scope cho một package cụ thể với lệnh sau, các thông tin chi tiết về cấu hình cho org bạn có thể xem thêm tại [đây](https://docs.npmjs.com/configuring-your-npm-client-with-your-organization-settings):

```bash
$ cd /path/to/package
$ npm config set scope <org-name>

// Kiểm tra lại các configs
$ npm config list
```

- #### Khởi tạo project <a id="preparing-init-project"></a>

Khi bạn đang đứng ở thư mục chứa project đã setup từ ban đầu, khởi tạo với lệnh `npm init` hoặc `npm init --scope=@my-org` (đối với scoped module) và kiểm tra lại các thông tin trong file package.json như: **name**, **version** (nên được gán với giá trị "0.0.0" ở lần khởi tạo), **description**, **git repository**, **keywords** & **license**.

```json
// packge.json

{
  "name": "@tiki-miniapp-rez/tini-ui",
  "version": "0.0.0",
  "description": "Tini UI",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/chanhchung-tiki/rez-ui.git"
  },
  "keywords": ["test", "ui"],
  "author": "chanhchung <chanh.chung@tiki.vn>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/chanhchung-tiki/rez-ui/issues"
  },
  "homepage": "https://github.com/chanhchung-tiki/rez-ui#readme"
}
```

### Tiến hành xây dựng thư viện <a id="build-lib-stage"></a>

Cấu trúc của thư viện được tổ chức như sau:

```
- es/ -> Thư mục chứa các file sau khi được biên dịch.
 |- checkbox/
  |  index.js
  |  index.json
  |  index.tcss
  |  index.txml
- scripts/ -> Các helper scripts khi gọi npm script
 | complier.js
 | release.js
- src/ -> Thư mục chứa code chính
 |- checkbox/
  |  index.js
  |  index.json
  |  index.tcss
  |  index.txml
.gitignore
babel.config.js
jsconfig.json
package.json
README.md
```

- #### Khởi tạo custom component <a id="init-custom-component"></a>

Mình sẽ tạo ra một checkbox component với các props được nhận vào như: **checked**, **disabled** và hàm **onChange** để thực hiện việc toggle status của checkbox

```javascript
// src/checkbox/index.js

/**
 * @typedef {Object} Props
 *  @property {boolean} checked
 *  @property {boolean} disabled
 *  @property {() => any} onChange
 *
 */
Component({
  props: {
    checked: false,
    disabled: false,
    onChange: () => {}
  },
  didMount() {
    this._updateDataSet();
  },
  didUpdate() {
    this._updateDataSet();
  },
  methods: {
    _updateDataSet() {
      this.dataset = {};
      for (const key in this.props) {
        if (/data-/gi.test(key)) {
          this.dataset[key.replace(/data-/gi, '')] =
            this.props[key];
        }
      }
    },
    onChange(event) {
      const { checked, disabled } = this.props;
      if (disabled) return;

      const value = checked ? false : true;
      event.detail = { value };
      const _onChange = this.props.onChange;
      if (typeof _onChange === 'function') {
        event.target = { ...event.target, dataset: this.dataset };
        _onChange(event);
      }
    }
  }
});
```

Tiếp theo đến các cấu hình của component trong file json:

```json
// src/checkbox/index.json
{
  "component": true,
  "componentLifeCycleV2": "YES"
}
```

Styling cho checkbox:

```css
/* src/checkbox/index.tcss */

.custom-checkbox {
  --tf-checkbox-custom-color: #1a94ff;
  --background-selection-default: #f5f5fa;
  --border-selection-default: #dddde3;
  --background-selection-disable: #c4c4cf;
  --border-selection-disable: #ebebf0;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  background-color: var(--background-selection-default);
  border: 1px solid;
  border-color: var(--border-selection-default);
  border-radius: 4px;
}

.custom-checkbox.custom-checkbox--checked {
  background-color: var(--tf-checkbox-custom-color);
  border-color: var(--tf-checkbox-custom-color);
}

.custom-checkbox.custom-checkbox--checked.custom-checkbox--disabled {
  background-color: var(--background-selection-disable);
}

.custom-checkbox.custom-checkbox--disabled {
  background-color: var(--background-selection-default);
  border-color: var(--border-selection-disable);
}

.custom-checkbox.custom-checkbox--disabled:hover {
  border-color: none;
}

.custom-checkbox .t-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.custom-checkbox .t-icon .success-icon {
  width: 16px;
  height: 16px;
}
```

Và cuối cùng chính là file txml chứa các thẻ cơ bản trong tini-framework để tạo ra UI:

```
<!-- src/checkbox/index.txml -->

<view
  class="custom-checkbox {{checked ? 'custom-checkbox--checked' : ''}} {{disabled ? 'custom-checkbox--disabled' : ''}}"
  catchTap="onChange">
  <view tiki:if="{{checked}}" class="t-icon">
    <icon type="success" color="#fff" size="{{16}}" />
  </view>
</view>
```

Vậy là chúng ta đã hoàn thành được một component đơn giản trong thư viện rồi. Tiếp theo sẽ đến bước biên dịch các file trong source code với 2 công cụ chính là [Babel](https://babeljs.io/docs/en/index.html) và [Glup](https://gulpjs.com/).

Giải thích nhanh về 2 công cụ trên:

- **Babel** - Javascript Complier: hỗ trợ biên dịch mã nguồn javascript khi viết bằng ECMAScript 2015+ sang phiên bản mã nguồn tương thích với các môi trường và trình duyệt cũ. Ngoài ra Babel còn làm được các việc như: transform syntax, polyfill một số tính năng còn thiếu ở môi trường javascript đang chạy...
- **Glup**: là công cụ như một build tool giành cho Javascript giúp lập trình viên có thể tự động hoá và cải thiện workflow một các hiệu quả. Glup cung cấp các api để làm việc với file: sao chép các file từ thư mục source sang dest, watch các file để chỉ ra sự thay đổi trong quá trình develop và thực thi các tác vụ khi file có sự thay đổi...

- #### Biên dịch và build thư viện <a id="complier-and-build-lib"></a>

Cài đặt một số package cần thiết:

```bash
$ npm install --save-dev @babel/core @babel/preset-env babel-plugin-module-resolver gulp gulp-babel
```

Thực hiện cấu hình cho babel:

```json
// babel.config.json

{
  "presets": [
    // Hỗ trợ cho lập trình viên sử dụng các tính năng mới nhất của Javascript và tối ưu đóng gói mã nguồn
    [
      "@babel/preset-env",
      {
        "loose": true, // Mã nguồn sau khi biên dịch sẽ giống ES5 của javascript
        "modules": false // Tắt tính năng transform ES module syntax
      }
    ]
    // Mở rộng: sử dụng @babel/preset-typescript nếu bạn muốn viết file logic bằng typescript
  ],
  "plugins": [
    // Hỗ trợ resolve các module khi import (Optional)
    [
      "module-resolver",
      {
        "root": ["./src"],
        "alias": {
          "@": "./src"
        },
        "extensions": [".js"]
      }
    ]
  ]
}
```

```json
// Cấu hình hỗ trợ các tính năng như: code completion, code suggestion nếu bạn sử dụng IDE Visual Code
// jsconfig.json

{
  "compilerOptions": {
    "target": "es6",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

Tiếp theo chúng ta sẽ tạo ra một helper script có tên là **complier.js** nằm trong thư mục scripts để hỗ trợ biên dịch và build code

```javascript
// scripts/complier.js

const path = require('path');
const gulp = require('gulp');
const babel = require('gulp-babel');

const isProduction = process.env.NODE_ENV === 'production';
let dist = path.join(__dirname, '..', 'es');
const basePath = path.join(__dirname, '..', 'src');
const extTypes = ['js', 'tcss', 'json', 'txml', 'sjs'];

const argv = process.argv.slice(2);
const indexOutdir = argv.findIndex(
  (item) => item === '--out-dir'
);

// Server for development process
if (!isProduction && indexOutdir !== -1) {
  dist = argv[indexOutdir + 1];
}

/*
 Mở rộng: bạn có thể thêm 1 task cho việc biên dịch typescript -> javascript tương tự
 Lưu ý: thêm 1 giá "ts" vào mảng extTypes nữa nhé!
*/
gulp.task('js', () => {
  return gulp
    .src(`${basePath}/**/*.js`)
    .pipe(babel())
    .on('error', (err) => console.log({ err }))
    .pipe(gulp.dest(dist));
});

gulp.task('tcss', () => {
  return gulp.src(`${basePath}/**/*.tcss`).pipe(gulp.dest(dist));
});

gulp.task('json', () => {
  return gulp.src(`${basePath}/**/*.json`).pipe(gulp.dest(dist));
});

gulp.task('txml', () => {
  return gulp.src(`${basePath}/**/*.txml`).pipe(gulp.dest(dist));
});

gulp.task('sjs', () => {
  return gulp.src(`${basePath}/**/*.sjs`).pipe(gulp.dest(dist));
});

const build = gulp.series(...extTypes);
// Build code dựa trên các file có extension được liệt kê trong mảng extTypes
// Đường dẫn đích sẽ tuỳ thuộc vào NODE_ENV và tham số --out-dir được truyền vào
build();

if (!isProduction) {
  /*
Với mode development:
Chúng ta sẽ sử dụng glup để watch các file change
và cập nhật trực tiếp vào thư mục build để code mới có thể được áp dụng ngay lập tức
*/
  extTypes.forEach((type) => {
    const watcher = gulp.watch(
      `${basePath}/**/*.${type}`,
      gulp.series(type)
    );

    watcher.on('change', function (path) {
      console.log(`File ${path} was changed`);
    });

    watcher.on('add', function (path) {
      console.log(`File ${path} was added`);
    });

    watcher.on('unlink', function (path) {
      console.log(`File ${path} was removed`);
    });
  });
}
```

Trong file complier.js, chúng ta sẽ sử dụng glup để tạo ra các task làm các nhiệm vụ như đọc 1 file với glob được định nghĩa và tiến hành thực thi 1 số tác vụ như biên dịch bằng babel hoặc stream các file này và ghi đến một đường dẫn output nào đó. Ngoài ra mình còn sử dụng **glup.watch** để hỗ trợ quan sát sự thay đổi của file trong quá trình develop

Chi tiết về các api làm việc với file các bạn có thể xem thêm tại [đây](https://gulpjs.com/docs/en/getting-started/working-with-files).

Sau khi xây dựng được script complier thì chúng ta sẽ đi cập nhật lại file package.json một số field để hỗ trợ việc run script nhé. File package.json sau khi được cập nhật:

```json
{
  "name": "@tiki-miniapp-rez/tini-ui",
  "version": "0.0.0",
  "description": "Tini UI",
  // Package khi được đóng gói sẽ gồm các file trong thư mục es
  "files": ["es"],
  // Thêm field main nếu thư viện là một module
  // Giá trị của field này chính là entry point chính thức trỏ đến file module chính
  // Chi tiết bạn có thể xem thêm tại đây:
  // https://docs.npmjs.com/cli/v8/configuring-npm/package-json#main
  // "main": "index.js",

  // Cấu hình chế độ publish package
  "publishConfig": {
    "access": "public"
  },
  "scripts": {
    "clean": "rm -rf es",
    "dev": "npm run clean && node scripts/complier.js",
    "build": "npm run clean && NODE_ENV=production node scripts/complier.js",
    // npm script for publishing package
    "pub:patch": "node scripts/release.js --version-type patch",
    "pub:minor": "node scripts/release.js --version-type minor",
    "pub:major": "node scripts/release.js --version-type major"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/chanhchung-tiki/rez-ui.git"
  },
  "keywords": ["test", "ui"],
  "author": "chanhchung <chanh.chung@tiki.vn>",
  "license": "MIT",
  "devDependencies": {
    "@babel/core": "^7.18.5",
    "@babel/preset-env": "^7.18.2",
    "babel-plugin-module-resolver": "^4.1.0",
    "gulp": "^4.0.2",
    "gulp-babel": "^8.0.0"
  },
  "dependencies": {},
  "bugs": {
    "url": "https://github.com/chanhchung-tiki/rez-ui/issues"
  },
  "homepage": "https://github.com/chanhchung-tiki/rez-ui#readme"
}
```

Chạy thử lệnh `npm run dev` và xem kết quả, ở mode **development** thì glup sẽ tự động kiểm tra sự thay đổi của các file và build ra mã nguồn mới tương ứng vào thư mục **es**.

![](https://i.imgur.com/pySv22Q.png)

Trường hợp nếu bạn không truyền vào `--out-dir` khi gọi lệnh thì mặc định thư mục đích chứa các file build sẽ là **es**. Giả sử mình muốn build thư viện vào một project demo thì lúc này mình sẽ gọi lệnh như sau:

```bash
$ npm run dev -- --out-dir <<out-dir>>

Eg:
$ npm run dev -- --out-dir ~/Documents/Tini/repos/demo-ui-lib/node_modules/@tiki-miniapp-rez/tini-ui/es
```

Sau khi đã hoàn thành các bước xây dựng thư viện thì bây giờ chúng ta sẽ đến bước cuối cùng đó là phát hành thư viện lên npm thôi nào!

### Triển khai thư viện lên npm registry <a id="publish-package"></a>

Mình sẽ thêm một số cấu hình trong file package.json như ở phía trên để phục vụ cho việc triển khai thư viện lên npm, các cấu hình bao gồm các trường sau: **files**, **publishConfig**, và một số **npm run script** như:

- `npm run pub:patch`: Phát hành thư viện với version được tăng lên với giá trị **patch** (Khi có sự thay đổi trong code liên quan đến việc fix bug, format code...).
  Ví dụ: 0.0.0 -> 0.0.1 .
- `npm run pub:minor`: Phát hành thư viện với version được tăng lên với giá trị **minor** (Khi có sự thay đổi trong code liên quan đến việc thêm các function, component, module mới...)
  Ví dụ: 0.0.0 -> 0.1.0 .
- `npm run pub:major`: Phát hành thư viện với version được tăng lên với giá trị **major** (Khi có sự thay đổi lớn về thư viện, có thể không còn tương thích về các API hoặc component trong thư viện như trước đó)
  Ví dụ: 0.0.0 -> 1.0.0 .

Nếu để ý thì với các npm script trên thì mình sẽ gọi một helper script là **release.js** trong folder scripts để thực thi việc này. Chúng ta sẽ đi chi tiết xem script này sẽ làm gì nhé!

```javascript
const { execSync } = require('child_process');
const fs = require('fs');

// Helper function
const getPackageJSON = () => {
  const packageJSON = fs.readFileSync('./package.json', 'utf-8');
  return JSON.parse(packageJSON);
};

const setPackageJSONVersion = (version) => {
  const packageJSON = getPackageJSON();
  packageJSON.version = version;
  fs.writeFileSync(
    './package.json',
    JSON.stringify(packageJSON, null, 2)
  );
};

const argv = process.argv.slice(2);
const indexVersionType = argv.findIndex(
  (arg) => arg === '--version-type'
);
const versionTypes = ['major', 'minor', 'patch'];
let semanticVersionType = 'minor';
if (
  indexVersionType !== -1 &&
  versionTypes.includes(argv[indexVersionType + 1])
) {
  semanticVersionType = argv[indexVersionType + 1];
}

// Xử lí publish package:

try {
  // Step: 1 - Build lib
  execSync('npm run build');

  // Step: 2
  // Bump up version and add tag
  // (Require the tree of git clean: not exist files change)
  execSync(
    `npm version ${semanticVersionType} -m 'Bump up package with version %s'`
  );
  // Step: 3 - Publish package
  execSync('npm publish');
  // Step: 4 - Publish code
  execSync('git push origin master:master && git push -f --tags');
} catch (error) {
  console.group('Error detail:');
  console.log('An error occur while release package: ', error);
  console.groupEnd();
}
```

Quá trình triển khai package lên npm sẽ bao gồm các bước sau:

- Bước 1: Build code với lệnh `npm run build` để cho ra các file của thư viện nằm trong thư mục es
- Bước 2: Tăng version trong package.json và đồng thời comit với một message được định nghĩa sẵn kèm theo tạo git tag.
  Lệnh thực hiện:

```bash
$ npm version ${versionType} -m 'Bump up package with version %s'
```

Lưu ý: Trong quá trình run script có thể bị lỗi **Git working directory not clean** do chúng ta chưa comit các file thay đổi ở project hiện tại. Việc này mình nghĩ sẽ là bắt buộc nên làm trước khi bạn muốn publish một version mới, giúp việc quản lý các comit trở nên rõ ràng hơn và đồng thời tránh việc thiếu xót các file khi gắn tag trong git. Bạn có thể bypass bước này khi thêm 1 tham số vào lệnh npm như sau: `npm version ${versionType} -m 'Bump up package with version %s' -f `. Bạn có thể tham khảo thêm về **npm version** ở [đây](https://docs.npmjs.com/cli/v8/commands/npm-version#description) nhé.

- Bước 3: Phát hành package lên npm bằng `npm publish`. Do package của chúng ta đang thuộc bởi một org nên việc publish lên npm sẽ là **private package**, tuy nhiên mình đã thêm 1 config vào file package.json là **publishConfig** với field `"access": "publish"`. Ngoài ra bạn cũng có thể làm một cách khác khi publish package với **public** mode khi gọi lệnh `npm publish --access public`.

Lưu ý: Ở bước phát hành có thể bị lỗi trong lúc chạy script **release.js** do account npm có bật yêu cầu nhập mã OTP khi publish package. Bạn có thể tắt việc nhập mã OTP trong mục **Account > Two-Factor Authentication > Additional Options** để giải quyết vấn đề này.

- Bước 4: Sau khi phát hành package thành công thì sẽ đến bước cuối cùng là pushlish code và kèm tag lên git

```bash
$ git push origin master:master && git push -f --tags
```

Bây giờ chúng ta hãy kiểm tra thành quả thôi nào :tada:
![](https://i.imgur.com/4uB4VYI.jpg)

Cài đặt thư viện vào tini-app và xem kết quả

```bash
$ npm install @tiki-miniapp-rez/tini-ui --save
```

![](https://i.imgur.com/9ysHvQh.jpg)

### Kết luận <a id="conclusion"></a>

Vậy là chúng ta đã hoàn thành xong các bước xây dựng thư viện cho tini-app và triển khai lên npm rồi đấy. Việc xây dựng các thư viện hỗ trợ cho quá trình phát triển tini-app cũng là một trong những yếu tố quan trọng góp phần giúp cho dự án thành công.

Mình hy vọng qua bài blog chia sẻ này có thể giúp các bạn biết thêm thứ gì đó hữu ích, và trên hết là cảm ơn các bạn đã giành ra thời gian để đọc những gì mình chia sẻ :heart:

Cuối cùng mình xin gửi đến các bạn repo github example chứa toàn bộ mã nguồn: https://github.com/chanhchung-tiki/rez-ui.
