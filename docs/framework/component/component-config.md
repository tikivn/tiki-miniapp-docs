---
title: Cấu hình Custom Component

description: cấu hình custom component của Tini App Framework
---

Khi tạo mới một Custom Component, chúng ta có thể cấu hình Custom Component bằng file `index.json` trong thư mục chứa code Custom Component.

File `index.json` có thể chứa nội dung như sau

```json
{
  "component": true, // định nghĩa đây là một Custom Component
  "usingComponents": {
    // chỉ thị rằng Custom Component này muốn sử dụng các Component khác
    "other": "../other/index" // tên và đường dẫn tương đối tới các Custom Component khác
  },
  "componentLifeCycleV2": "YES" // cần bật option này để fix các bug liên quan tới Component
}
```

File `index.json` có các keys sau

| Thuộc tính           | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                                                                                                                                                                                                |
| -------------------- | ------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| component            | boolean      | có       | định nghĩa đây là một custom component                                                                                                                                                                                                                               |
| usingComponents      | object       | không    | định nghĩa các custom component mà component hiện tại muốn sử dụng. key là tên của custom component, value là đường dẫn của component. Nếu đường dẫn là đường dẫn tuyệt đối của dự án thì nó cần bắt đầu bằng `/`, còn nếu không đường dẫn sẽ là đường dẫn tương đối |
| componentLifeCycleV2 | boolean      | không    | bật cờ này để fix các bug liên quan tới Component                                                                                                                                                                                                                    |

## Chú ý

Để fix các bug liên quan tới Component Life Cycle, chúng ta nên turn on option `componentLifeCycleV2`.

Khi option này được bật lên, các bug sau sẽ được fix

- Thứ tự của các Life Cycle được đảm bảo đúng theo mô tả tại [life-cycle](./life-cycle)
- Ref handle trong Component được đảm bảo theo mô tả [ref](./ref)
- Các hàm trong Component ngoại trừ các life cycle bắt buộc phải khai báo trong `methods`.
  Cụ thể

```js
Component({
  didMount() {
    this.doSomething();
  }
});
```

Hàm `doSomething` cần phải khai báo trong `methods`,

```js
Component({
  didMount() {
    this.doSomething();
  },

  methods: {
    doSomething() {
      // implement in here
    }
  }
});
```

- Data và props của Component có thể là hàm, ví dụ

```js
Component({
  data() {},
  props() {}
});
```

Bạn có thể khai báo `data` và `props` là thuộc tính, hoặc hàm.
Khi `data` hoặc `props` cần involve các hàm xử lý data, các bạn có thể sử dụng `data` và `props` dưới dạng hàm
để tăng tốc độ hiển thị.
