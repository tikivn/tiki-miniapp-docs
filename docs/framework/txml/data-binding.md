---
title: Gán dữ liệu vào TXML
---

Dữ liệu được gán vào TXML từ trường `data` của `Page` hoặc `Component` tương ứng.

## Gán dữ liệu đơn giản

TXML có thể truy xuất các biến từ trường `data` thông qua việc sử dụng cú pháp `{{}}`.

Ví dụ, ở file `pages/page1/index.js` chúng ta định nghĩa Page như sau

```js
Page({
  data: {
    message: 'Hello world'
  }
});
```

Với đoạn code trên, Page khai báo trường `data` với biến `message` nhận giá trị là `"Hello world"`.
Trong TXML tương ứng tại đường dẫn `pages/page1/index.txml`, chúng ta có thể sử dụng biến `message` như sau

```xml
<view>{{ message }}</view>
```

### Thuộc tính của Component

TXML cũng cho phép gán dữ liệu vào thuộc tính của Component. Giá trị của các thuộc tính bắt buộc phải được bao bởi dấu ngoặc kép `"`.

```xml
<view id="item-{{id}}"></view>
```

```js
Page({
  data: {
    id: 0
  }
});
```

### Thuộc tính điều kiện

Các thuộc tính điều kiện cũng cần phải bao bởi dấu ngoặc kép `"`.

```xml
<view tiki:if="{{condition}}"></view>
```

```js
Page({
  data: {
    condition: false
  }
});
```

### Từ khoá

Các từ khoá cũng cần phải bao trong dấu ngoặc kép `"`.

- `true`: giá trị true
- `false`: giá trị false

```xml
<checkbox checked="{{false}}"></checkbox>
```

***Lưu ý***: Không nên sử dụng giá trị `false` trực tiếp `<checked="false">`, bởi vì `"false"` sẽ được hiểu là chuỗi `"false"`, và nó sẽ nhận giá trị là `true`.

## Tính toán

Trong dấu `{{}}`, bạn có thể sử dụng các phép tính toán đơn giản. TXML hỗ trợ các hàm sau

### Hàm kiểm tra (ternary)

```xml
<view hidden="{{flag ? true: false}}">Hidden</view>
```

### Hàm số học

```xml
<view>{{a + b}} + {{c}} + d</view>
```

```js
Page({
  data: {
    a: 1,
    b: 2,
    c: 3
  }
});
```

Kết quả sẽ là

```
3 + 3 + d
```

### Hàm logic

```xml
<view tiki:if="{{length > 5}}"></view>
```

### Hàm xử lý chuỗi

```xml
<view>{{"hello" + name}}</view>
```

```js
Page({
  data: {
    name: 'tiki miniapp'
  }
});
```

Kết quả sẽ là

```
hello tiki miniapp
```

### Hàm truy xuất dữ liệu của Object từ đường dẫn

```xml
<view>{{object.key}} {{array[0]}}</view>
```

```js
Page({
  data: {
    object: {
      key: 'Hello '
    },
    array: ['tiki miniapp']
  }
});
```

Kết quả là

```
Hello tiki miniapp
```

## Kết hợp

Bạn có thể kết hợp các thuộc tính lại để tạo các Object hoặc mảng mới

### Mảng

```xml
<view tiki:for="{{[zero, 1, 2, 3, 4]}}"> {{item}} </view>
```

```js
Page({
  data: {
    zero: 0
  }
});
```

Kết quả sẽ là mảng `[0, 1, 2, 3, 4]`

### Object

```xml
<template is="objectCombine" data="{{foo: a, bar: b}}"></template>
```

```js
Page({
  data: {
    a: 1,
    b: 2
  }
});
```

Kết quả là `{foo: 1, bar: 2}`

Toán tử deconstruction cũng có thể sử dụng

```xml
<template is="objectCombine" data="{{...obj1, ...obj2, e: 5}}"></template>
```

```js
Page({
  data: {
    obj1: {
      a: 1,
      b: 2
    },
    obj2: {
      c: 3,
      d: 4
    }
  }
});
```

Với đoạn code trên, chúng ta sẽ có được kết quả `{a: 1, b: 2, c: 3, d: 4, e: 5}`.

Nếu key và value của object giống nhau, chúng ta có thể sử dụng cú pháp như sau

```xml
<template is="objectCombine" data="{{foo, bar}}"></template>
```

```js
Page({
  data: {
    foo: 'my-foo',
    bar: 'my-bar'
  }
});
```

Kết quả là `{foo: 'my-foo', bar:'my-bar'}`.

**Chú ý**: khi sử dụng các hàm trên cùng nhau, nếu các object có cùng tên thuộc tính, thì các thuộc tính được gán ở sau sẽ được ghi đè lên các thuộc tính gán ở trước.

```xml
<template is="objectCombine" data="{{...obj1, ...obj2, a, c: 6}}"></template>
```

```js
Page({
  data: {
    obj1: {
      a: 1,
      b: 2
    },
    obj2: {
      b: 3,
      c: 4
    },
    a: 5
  }
});
```

Kết quả cuối cùng sẽ là `{a: 5, b: 3, c: 6}`.
