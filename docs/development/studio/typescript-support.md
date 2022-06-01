---
title: Typescript Experimental Support for Tiki Tini Studio

description: Typescript Experimental Support for Tiki Tini Studio
---

Tiki Tini App hỗ trợ sử dụng Typescript từ phiên bản [**Tini Studio 1.28.0**](https://developers.tiki.vn/downloads).

TypeScript type definition của Tini App được cung cấp bởi Tiki Open Platfrom thông qua NPM package **[`@tiki.vn/tini-types`](https://www.npmjs.com/package/@tiki.vn/tini-types)** và GitHub chính thức của Tiki **[`github.com/tikivn/tini-types`](https://github.com/tikivn/tini-types)**.


## Install 
```bash
yarn add @tiki.vn/tini-types
# hoặc
npm install @tiki.vn/tini-types --save 
```

> **NOTE:**
> - Bạn cần sử dụng `@tiki.vn/tini-types` phiên bản mới nhất hoặc cập nhật lên phiên bản **>=0.3.0** để bắt đầu sử dụng các builtin typescript feature trong Tini Studio cho dự án Tini App của bạn.
> - Bạn cần cài đặt `@tiki.vn/tini-types` dưới dạng [production dependencies](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#dependencies).

## New project
Bạn có thể tạo mới project Tini App sử dụng typescript template trên studio:

_**Tini Studio window menu > File > New Project > Choose a template > [`blank-typescript`](https://github.com/tikivn/miniapp-getting-started/tree/main/blank-typescript) template.**_
## Migration from javascript project
Xem phần [Configuration](#configuration).
> NOTE: Bạn có thể bắt đầu quá trình chuyển đổi sang typescript  từng  component hoặc page hay các js file qua typescript bằng cách đặt `compilerOptions.allowJs` về `true` trong file `tsconfig.json`. Config này cho phép bạn sử dụng cả các js component và ts component trong cùng một source code.

## Configuration
### TS config
Bạn cần tạo file tsconfig.json và thêm `@tiki.vn/tini-types` vào thuộc tính `types` của [`compilerOptions`](https://www.typescriptlang.org/tsconfig#compilerOptions) trong file tsconfig.json
```TS
// file ./tsconfig.json
{
    /* orther configurations */
    "compilerOptions" :  {
        /* orther configurations */
        "types" :  [ "@tiki.vn/tini-types" ]
    }
}
```
> NOTE: Để xem các cài đặt khác cho TypeScript tsconfig.json, xem thêm [tại đây](https://www.typescriptlang.org/tsconfig).

Dưới đây là một ví dụ cho cài đặt tsconfig.json mà bạn có thể tham khảo :
```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "noUnusedLocals": true,
    "noEmit": true,
    "target": "ES5",
    "noImplicitAny": true,
    "noUnusedParameters": true,
    "alwaysStrict": true,
    "strict": true,
    "rootDir": "./",
    "baseUrl": "./src",
    "types": ["@tiki.vn/tini-types"]
  },
  "exclude": ["./documents", "node_modules"]
}
```
>NOTE: Tini App compiler chỉ sử dụng tsconfig cho mục đích type checking và IntelliSense features. Chúng tôi sẽ compile javascript và typescript bằng babel và một số compiler chuyên biệt khác.

### Project config
Trong file `project.config.json`, thêm `["typescript"]` vào trường `useCompilerPlugins` của mục  `settings` để bắt đầu sử dụng built-in typescript  feature của Tini Studio.  
Example:
```json
{
    "setting": {
        "useCompilerPlugins": ["typescript"]
    }
}
```
## Feedback
Nếu bạn tìm thấy bất kỳ vấn đề nào, vui lòng gửi issue [tại đây](https://github.com/tikivn/tini-types/issues).
