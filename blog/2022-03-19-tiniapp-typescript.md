# Build Tini App với TypeScript/Less
## 1. Introduction
Đợt tháng rồi, mình có đi cafe với 1 ông anh ngồi tám chuyện này kia thì mình có giới thiệu cho ảnh về Tini App của Tiki. Cái mình nói ảnh vậy nè ...

> Công nghệ Tini App của Tiki đi kèm với hệ thống framework đơn giản, hiệu quả với đa dạng các thành phần giao diện cũng như APIs cần thiết cho phép các nhà phát triển xây dựng ứng dụng với trải nghiệm native app trên nền tảng Tiki một cách dễ dàng nhất có thể.

 Là một người đã có dày dặn chinh chiến nhiều với ngôn ngữ lập trình và nhiều dự án, cái ảnh nói lại mình vậy nè: 
 
 > Ủa vậy Tini App này có support Typescript hông?
 Giờ ai cũng dùng TypeScript thôi à.

 Rồi nói cho mình nghe 1 loạt điểm nổi bật của nó. Cá nhân mình cũng đã có tiếp cận với `TypeScript` trong ``React`` không biết sang `Tini App` thì nó sẽ thế nào.
 
 Hãy đồng hành cùng mình trong bài viết này nha!
 
* Lý do chọn [TypeScript](https://serokell.io/blog/why-typescript/).
* Cấu hình dự án TiniApp kết hợp với [TypeScript](https://www.typescriptlang.org/)/[Less](https://lesscss.org/).
* Ví dụ.

## 2. Why Typescript ?


>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

TypeScript được phát triển bởi Microsoft và cộng đồng mã nguồn mở.
"Superset" ở đây có thể được hiểu là: 
TypeScript = JavaScript + some amazing stuffs :satisfied:

Ngoài sở hữu những đặc điểm của JavaScript, mình thấy rõ nhất ưu điểm ở TypeScript là về việc hỗ trợ **static typing**. Lúc đầu tiếp cận, mọi người có thể cảm thấy "không thoải mái" lắm vì đã quen với **dynamic typing** bên JavaScript rồi đúng hông? :triumph: Và mình cũng thế TypeScript khó tính quá mà. 

Nhưng mà suy nghĩ xa đi 1 chút, chúng ta có thể quản lý dữ liệu và luồng dữ liệu chặt chẽ hơn nhờ có TypeScript.

Vào việc cấu hình 1 project Tini App với Typescript nào ...

## 3. How to config

Thì chuyện là hiện tại compiler của tiniapp chỉ hỗ trợ ES chưa support cho TS :cry: nhưng mà tương lai sẽ có nha.

Do đó ý tưởng của mình ở đây là gì? Tadaa..

Đơn giản là mình sẽ compile code TypeScript/Less sang JS/CSS thôi nè. 

Theo ý tưởng trên thì mình sẽ viết 1 script cấu hình tasks để compile TS sang ES, rồi dùng ES đó làm entry cho Tini App. 

`es folder` ở đây sẽ được coi như là `dist folder`.
```
- scripts/                                        
 |  compiler.js 
- es/                         
 |- pages/                    
  |  index.js
  |  index.json
  |  index.tcss
  |  index.txml               
 |  app.js 
 |  app.tcss
 |  app.json                  
- src/                        
 |- pages/                    
  |  index.ts 
  |  index.less
  |  index.json 
  |  index.txml               
 |  app.json                  
 |  app.ts
 |  app.less
- types/                                                     
 |  index.d.ts
tsconfig.json
babel.config.js
package.json
  
```

Vậy đầu tiên làm gì ta? 

Mình sẽ chọn 1 tool Task Runner có các tính năng mình cần dùng chủ yếu là: Tasks, Minify, Complile, Reload.

Mình chọn [`gulp`](https://gulpjs.com/) để làm phần này nha. Các bạn có thể sử dụng tool khác để thay thế.

Bắt đầu thôi đi từng cái nào.

1. Install packages

``packages.json``
```json=

{
  "name": "app-typescript",
  "version": "0.1.0",
  "tiki": {
    "appIdentifier": "app.id.typescript",
    "buildNumber": 1
  },
  "scripts": {
    "clean": "rm -rf es",
    "dev": "yarn clean && node scripts/compiler.js"
  },
  "devDependencies": {
    "@babel/core": "^7.13.15",
    "@babel/plugin-syntax-dynamic-import": "^7.0.0",
    "@babel/plugin-transform-runtime": "^7.13.15",
    "@babel/preset-env": "^7.13.15",
    "@babel/preset-typescript": "^7.1.0",
    "@types/jest": "^26.0.23",
    "@typescript-eslint/eslint-plugin": "^4.21.0",
    "@typescript-eslint/parser": "^4.21.0",
    "eslint": "^7.24.0",
    "eslint-config-prettier": "^8.1.0",
    "eslint-plugin-prettier": "^3.3.1",
    "gulp": "^4.0.2",
    "gulp-babel": "^8.0.0",
    "gulp-clean-css": "^4.0.0",
    "gulp-less": "^4.0.1",
    "gulp-rename": "^2.0.0",
    "prettier": "^2.2.1",
    "stylelint": "^13.12.0",
    "stylelint-config-standard": "^21.0.0",
    "typescript": "^4.2.4"
  },
  "dependencies": {
    "@babel/runtime": "^7.15.3"
  }
}
```

``babel.config.js``

```json=
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-transform-runtime'],
};

```


Tiếp tục là file script nè: ``compiler.js``

```js=
const path = require('path');
const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const cleanCss = require('gulp-clean-css');
const babel = require('gulp-babel');

const dist = path.join(__dirname, '..', 'es');
const src = path.join(__dirname, '..', 'src');
const extTypes = ['ts', 'less', 'json', 'txml', 'sjs'];

// LESS

gulp.task('less', () =>
  gulp
    .src(`${src}/**/*.less`)
    .pipe(less())
    .on('error', (e) => console.error(e))
    .pipe(cleanCss())
    .pipe(
      rename({
        extname: '.tcss',
      })
    )
    .pipe(gulp.dest(dist))
);

// TS

gulp.task('ts', () =>
  gulp
    .src(`${src}/**/*.ts`)
    .pipe(babel())
    .on('error', (err) => {
      console.log(err);
    })
    .pipe(gulp.dest(dist))
);

// JS

gulp.task('js', () =>
  gulp
    .src(`${src}/**/*.js`)
    .pipe(babel())
    .on('error', (err) => {
      console.log(err);
    })
    .pipe(gulp.dest(dist))
);

gulp.task('json', () => gulp.src(`${src}/**/*.json`).pipe(gulp.dest(dist)));

gulp.task('txml', () => gulp.src(`${src}/**/*.txml`).pipe(gulp.dest(dist)));

gulp.task('sjs', () => gulp.src(`${src}/**/*.sjs`).pipe(gulp.dest(dist)));

gulp.task('tcss', () =>
  gulp.src([`${src}/**/*.tcss`, `!${src}/**/*.skip.tcss`]).pipe(gulp.dest(dist))
);

const build = gulp.series(...extTypes);
build();

extTypes.forEach((type) => {
  const watcher = gulp.watch(`${src}/**/*${type}`, gulp.series(type));
  watcher.on('change', (event) => {
    console.log(`File ${event} was change`);
  });
  watcher.on('add', (event) => {
    console.log(`File ${event} was add`);
  });
  watcher.on('unlink', (event) => {
    console.log(`File ${event} was remove`);
  });
});

```


Bạn có thể cài đặt thêm tini-types để có thể có các gợi ý code trên các IDE 

``yarn add @tiki.vn/tini-types``

Sau đó config như sau:

``tsconfig.json``
```json=
{
  "compilerOptions": {
    "baseUrl": ".",
    "target": "es6",
    "noImplicitThis": true,
    "noImplicitUseStrict": true,
    "typeRoots": ["types/index.d.ts", "node_modules/@tiki.vn/tini-types/types/index.d.ts" ]

  },
  "include": ["types/**/*", "src/**/*", "node_modules/@tiki.vn/tini-types/types/**/*"]
}
```

![](https://i.imgur.com/HF8stB1.png)

![](https://i.imgur.com/GZ1kkIq.png)

Code Tini App sẽ được gợi ý rất nhiệt tình  :yum:

Tuy nhiên việc gợi ý code này đã được support sẵn khi bạn dùng [Tini Studio](https://developers.tiki.vn/downloads) để code nha.

Và cuối cùng là nhớ [cấu hình project](https://developers.tiki.vn/docs/development/studio/project-config) của mình root là folder es nè. 

``project.config.json``
```json=
{
    "miniprogramRoot": "es"
}
```


Done :yum: chạy lệnh thôi nào ...

``yarn run dev``

Example: https://github.com/anhhuynh5/tiniapp-typescript

## 4. Example

Ở đây mình viết example component thôi nha. Thế là xong. 

```js=
interface TestMethods {
  onClick?: () => void;
}
interface TestComponentProps extends TestMethods {
  className?: string;
  style?: string;
  value: string;
}

Component({
  props: {
    value: '',
    onClick: () => {},
  } as TestComponentProps,

  methods: {
    onTest() {
      const a: number = 5;
      console.log(a);
    },
  },
});

```

## 5. Sumup

Vậy là chúng ta đã cùng nhau tìm hiểu cách build 1 project **Tini App** với **TypeScript/Less** rồi nè. Như mình đã nói hiện tại thì compiler của Tini App chưa suppport cho TypeScript nhưng trong tương lai gần sẽ có sớm thôi nha. :boom:

Một điều nữa mình muốn chia sẻ, TypeScript không-sinh-ra-với-mục-đích-thay-thế JavaScript. Nó là một-lựa-chọn.

Với sức mạnh nổi bật của TypeScript, việc tích hợp vào Tini App sẽ phù hợp với các dự án dài hạn hoặc phục vụ cho việc phát triển một thư viện. Nếu chưa chọn dùng TypeScript cũng chẳng sao, TypeScript thực sự tốt nhưng JavaScript không gặp bất lợi gì quá lớn cả, nó vẫn đáng để chúng ta tin tưởng.

TypeScript là một-lựa-chọn tốt, nhưng nó không thay thế hoàn toàn JavaScript :yum:

Hi vọng bài viết của mình giúp bạn có thêm tài liệu tham khảo khi áp dụng TypeScript cho dự án Tini App của bạn.

Example: https://github.com/anhhuynh5/tiniapp-typescript