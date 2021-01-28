---
order: 46
category:
  vi-VN: Component
  en-US: Component
title:
  vi-VN: ref
  en-US: ref
---

## Sử dụng `ref` để truy cập vào Component Instance

Bạn có thể sử dụng `ref` để tham chiếu tới Component Instance.

```js
// /pages/index/index.js
Page({
  plus() {
    this.counter.plus();
  },
  saveRef(ref) {
    this.counter = ref;
  },
});
```

```xml
<!-- /pages/index/index.txml -->
<my-component ref="saveRef" />
<button onTap="plus">+</button>
```

- Bằng cách bind `ref` tới giá trị `"saveRef"`, khi `<my-component>` được render hàm `saveRef` sẽ được gọi
- Tham số `ref` được truyền tới hàm saveRef`sẽ trỏ tới Component instance của`<my-component>`. Bằng cách này parent component có thể accesss được tới child component

```js
// /components/index/index.js
Component({
  data: {
    counter: 0,
  },
  methods: {
    plus() {
      this.setData({ counter: this.data.counter + 1 });
    },
  },
});
```

```xml
<!-- /components/index/index.txml -->
<view>{{counter}}</view>
```

## Custom Component thay đổi định nghĩa `ref`

Mặc định, `ref` sẽ trỏ tới Component Instance. Nếu Custom Component muốn thay đổi giá trị tham chiếu bởi ref, Custom Component có thể implement hàm `ref`

```js
// /components/index/index.js
Component({
  ref() {
    return { key: 'value' }
  }
}
```

```xml
<!-- /pages/index/index.txml -->
<my-component ref="saveRef" />
```

```js
// /pages/index/index.js
Page({
  saveRef(ref) {
    // ref lúc này sẽ là kết quả của hàm Component.ref() được định nghĩa ở trên
    // giá trị của ref sẽ là { key: 'value' }
    this.counter = ref;
  },
});
```
