---
order: 40
category:
  vi-VN: Component
  en-US: Component
title:
  vi-VN: Giới thiệu về Custom Component
  en-US: Introduction to custom components
---

Tiki MiniApp Framework hỗ trợ tính năng tạo các Custom Component trong code base của bạn.
Giống như `Page`, một Custom Component cũng sẽ bao gồm 4 thành phần `txml`, `tcss`, `js` và `json`.

Để tạo mới một Custom Component, bạn sẽ cần thực hiện 4 bước sau:

## Tạo mới một thư mục để chứa code của Custom Component

Một thư mục chứa Custom Component sẽ chứa 4 files sau

- index.js: chứa code logic của Custom Component
- index.txml: chứa code về layout của Custom Component
- index.tcss: chứa code về style của Custom Component
- index.json: chứa các cấu hình cho Custom Component

## Thêm định nghĩa Custom Component

Trong file `index.json`, cần thêm đoạn code sau

```json
// /components/index/index.json
{
  "component": true
}
```

## Đăng ký Custom Component

Để đăng ký một Custom Component, chúng ta cần sửa file `index.js` với nội dung tương tự như sau

```js
Component({
  mixins: [], // các minxin sử dụng trong Component
  data: { x: 1 }, // data của component
  props: { y: 1 }, // các thuộc tính

  // các hàm life cycles
  didMount() {},
  didUpdate() {},
  didUnmount() {},

  // các methods
  methods: {
    handleTap() {
      this.setData({ x: this.data.x + 1 });
    },
  },
});
```

Template của Custom Component sẽ được định nghĩa trong file `index.txml` và `index.tcss` tương ứng. File `index.tcss` là có thể bỏ qua.

```xml
<view>
  HI, I am Custom Component of Tiki Mini App
</view>
```

## Sử dụng Custom Component trong code base

Sau khi Custom Component đã được định nghĩa, bạn có thể sử dụng Custom Component trong một Custom Component khác, hoặc trong một Page.

Trước hết, bạn cần phải chỉ định rằng bạn muốn sử dụng một Custom Component bằng cách sửa file `index.json` của Page hiện tại

```json
// /pages/index/index.json
{
  "usingComponents": {
    "my-component": "/components/index/index"
  }
}
```

Sau đó, trong file `txml` bạn có thể tham chiếu tới Custom Component như sau

```xml
<!--  /pages/index/index.txml -->
<view>
  this is a blank page
</view>
<my-component />
```
