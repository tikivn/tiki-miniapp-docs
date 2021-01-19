---
order: 23
category:
  vi-VN: TXML
  en-US: TXML
title:
  vi-VN: Render list
  en-US: List rendering
---

## t:for

Trong một Component, bằng việc sử dụng thuộc tính `t:for` để gán một mảng dữ liệu vào TXML, bạn có thể sử dụng mảng dữ liệu đó để render.

Khi sử dụng `t:for`, mỗi item của mảng có thể truy xuất vào 2 giá trị `index` và `item`.

```xml
<view t:for="{{array}}">
  {{index}}: {{item.message}}
</view>
```

```js
Page({
  data: {
    array: [
      {
        message: "foo",
      },
      {
        message: "bar",
      },
    ],
  },
});
```

Bạn cũng có thể sử dụng `t:for-item` để gán tên khác thay vì giá trị mặc định `item`.
Tương tự, bạn có thể sử dụng `t:for-index` để gán tên khác cho `index`.

```xml
<view t:for="{{array}}" t:for-index="idx" t:for-item="itemName">
  {{idx}}: {{itemName.message}}
</view>
```

`t:for` cũng có thể sử dụng lồng nhau. Dưới đây là một ví dụ

```xml
<view t:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" t:for-item="i">
  <view t:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" t:for-item="j">
    <view t:if="{{i <= j}}">
      {{i}} * {{j}} = {{i * j}}
    </view>
  </view>
</view>
```

## block t:for

Giống như `t:if`, bạn có thể sử dụng `t:for` trên thẻ `<block>`

```xml
<block t:for="{{[1, 2, 3]}}">
  <view> {{index}}: </view>
  <view> {{item}} </view>
</block>
```

### t:key

Để định danh các phần tử trong mảng, TXML cung cấp hàm thuộc tính `t:key`.
Bằng việc sử dụng `t:key`, khi dữ liệu trong mảng thay đổi, Mini App Framework sẽ không cập nhật chứ không tạo mới các Component.

`t:key` có thể sử dụng theo 2 cách

1. nhận một giá trị string, string này là thuộc tính để định danh id cho item trong mảng

```xml
<switch t:for="{{objectArray}}" t:key="unique" style="display: block;"> {{item.id}} </switch>
```

```js
Page({
  data: {
    objectArray: [
      { id: 5, unique: "unique_5" },
      { id: 4, unique: "unique_4" },
      { id: 3, unique: "unique_3" },
      { id: 2, unique: "unique_2" },
      { id: 1, unique: "unique_1" },
      { id: 0, unique: "unique_0" },
    ],
  },
});
```

Mỗi phần tử trong mảng `objectArray` đều có thuộc tính `unique`, bằng việc sử dụng `t:key="unique"` trong TXML,
chúng ta xác định rằng key của item là sẽ là thuộc tính `unique` này.

2. nhân giá trị là từ khoá `*this`, có nghĩa là key của item là chính nó. Chúng ta chỉ nên sử dụng `t:key="*this"` nếu như mảng chỉ chứa các chuỗi, hoặc các number

```xml
<switch t:for="{{numberArray}}" t:key="*this" style="display: block;"> {{item}} </switch>
```

```js
Page({
  data: {
    numberArray: [1, 2, 3, 4],
  },
});
```

**Chú ý**
Khi giá trị của `t:for` là một chuỗi, thì chuỗi đó sẽ được coi như một mảng các ký tự

```xml
<view t:for="array">
  {{item}}
</view>
```

```xml
<view t:for="{{['a','r','r','a','y']}}">
  {{item}}
</view>
```
