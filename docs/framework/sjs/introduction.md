# Giới thiệu về SJS
SJS (safe/subset javascript) là 1 tập con của JavaScript language, có thể xài trực tiếp ở file txml. Tuy nhiên SJS có sự khác biệt với Javascipt, syntax của SJS ko đồng bộ với Javascript nên đừng nhầm lẫn SJS là Javascipt.

# Cách sử dụng:
Ta tạo 1 file sjs.

```js
// pages/index/index.sjs
const message = 'hello tiki';
const getMsg = x => x;
export default {
  message,
  getMsg,
};
```

Ở page js
```js
// pages/index/index.js
Page({
  data: {
    msg: 'hello miniapp',
  },
});
```
Ở page txml
```xml
<!-- pages/index/index.axml -->
<import-sjs name="m1" from="./index.sjs"/>
<view>{{m1.message}}</view>
<view>{{m1.getMsg(msg)}}</view>
```

Output ta có được như sau:
```
hello tiki
hello miniapp
```

## Lưu ý:
* Chỉ support import, export theo ECMAScript Modules

* Phải define sjs trong `.sjs` file, và sử dụng thẻ `<import-sjs>` để import sjs vào trong file txml.

* sjs có thể gọi function từ file sjs khác

* Syntax của SJS ko đồng bộ với Javascript nên đừng nhầm lẫn SJS là Javascipt.

* Môi trường chạy của sjs được isolate hoàn toàn với các file javascript khác. Sjs không thể gọi các hàm được định nghĩa trong các file JavaScript khác, cũng như không thể gọi các API được cung cấp bởi applet.

*  Sjs function không thể sử dụng như 1 component event callback.
