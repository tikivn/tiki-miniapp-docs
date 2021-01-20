---
order: 30
category:
  vi-VN: SJS
  en-US: SJS
title:
  vi-VN: Giới thiệu về SJS
  en-US: Introduction to SJS
---

SJS (safe/subset javascript) là một tập ngôn ngữ script có thể sử dụng trong TXML để xây dựng các UI Component trong Tiki Mini App. SJS là một tập con của Javascript. Cú pháp của SJS là không hoàn toàn giống với Javascript, vì thế hãy cẩn trọng khi viết code SJS để tránh nhầm lẫn với Javascript.

## Cách sử dụng

Định nghĩa một file với đuôi `.sjs`:

```js
// pages/index/index.sjs
const message = "hello tiki";
const getMsg = (x) => x;
export default {
  message,
  getMsg,
};
```

```js
// pages/index/index.js
Page({
  data: {
    msg: "hello mini app",
  },
});
```

```xml
<!-- pages/index/index.txml -->
<import-sjs name="m1" from="./index.sjs"/>
<view>{{m1.message}}</view>
<view>{{m1.getMsg(msg)}}</view>
```

Page output:

```
hello tiki
hello mini app
```

**Chú ý**

- SJS chỉ có thể được định nghĩa với các file có extension là `.sjs`, và sau được được sử dụng bằng cách sử dụng thẻ `<import-sjs>` trong TXML.
- SJS có thể gọi các hàm được định nghĩa trong file SJS khác.
- SJS là một tập con của Javascript, nó không hoàn toàn giống với Javascript.
- Môi trường Runtime của SJS là tách biệt với các code Javascript khác, vì thế SJS không thể gọi các hàm được định nghĩa trong các file Javascripts khác, hoặc gọi các API được cung cấp bởi Tiki Mini App Framework
- các hàm của SJS không thể được sử dụng như là Component callback để xử lý sự kiện
- SJS không phụ thuộc vào version của Tiki Mini App Framework, và có thể chạy trên tất cả các version của Tiki Mini App Framework.

## Thẻ import-SJS

Sample code:

```js
// pages/index/index.js
Page({
  data: {
    msg: "hello tiki",
  },
});
```

```js
// pages/index/index.sjs
function bar(prefix) {
  return prefix;
}
export default {
  foo: "foo",
  bar: bar,
};
```

```js
// pages/index/namedExport.sjs
export const x = 3;
export const y = 4;
```

```xml
<!-- pages/index/index.txml -->
<import-sjs from="./index.sjs" name="test" />
<!-- sau khi khi khai báo module với tên `test`, chúng ta có thể sử dung các biến trong `test` !-->
<view> {{test.bar(test.foo)}} </view>
<view> {{test.bar(msg)}} </view>

<import-sjs from="./namedExport.sjs" name="{x, y: z}" />
<!-- bằng việc sử dụng các exported variables, chúng ta có thể sử dụng chúng trực tiếp !-->
<view>{{x}}</view>
<view>{{z}}</view>
```

Page output:

```
foo
hello tiki
3
4
```

Thẻ `<import-sjs>` hỗ trợ các thuộc tính sau

| attributes | types  | required | description                         |
| ---------- | ------ | -------- | ----------------------------------- |
| `name`     | string | yes      | Tên của module đang được import     |
| `from`     | string | yes      | Đường dẫn tương đối của file `.sjs` |

- `name` xác định tên của module `.sjs` được import. Trong một file TXML, tên của các module `.sjs` nên là duy nhất. Nếu có nhiều module `.sjs` được khai báo trùng tên, thì module được khai báo sau, sẽ được ghi đè lên module khai báo trước đó. Giữa các file TXML khác nhau, tên của các `.sjs` module là không bị ghi đè lên nhau.
- `name` có thể nhận vào một chuỗi để thể hiện module name, hoặc có thể nhận vào chuỗi dạng `{x}` để export ra các biến trong module.

**Chú ý**

- Trong thẻ `<import-sjs>`, các đường dẫn bắt buộc phải có extension là `.sjs`
- Nếu một module `.sjs` được định nghĩa, nhưng không bao giờ được tham chiếu tới, thì module đó sẽ không bao giờ được biên dịch, và cũng không được bundle trong mini app.
