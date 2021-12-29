---
title: Render list
---

## tiki:for

Trong một Component, bằng việc sử dụng thuộc tính `tiki:for` để gán một mảng dữ liệu vào TXML, bạn có thể sử dụng mảng dữ liệu đó để render.

Khi sử dụng `tiki:for`, mỗi item của mảng có thể truy xuất vào 2 giá trị `index` và `item`.

```xml
<view tiki:for="{{array}}">
  {{index}}: {{item.message}}
</view>
```

```js
Page({
  data: {
    array: [
      {
        message: 'foo'
      },
      {
        message: 'bar'
      }
    ]
  }
});
```

Bạn cũng có thể sử dụng `tiki:for-item` để gán tên khác thay vì giá trị mặc định `item`.
Tương tự, bạn có thể sử dụng `tiki:for-index` để gán tên khác cho `index`.

```xml
<view tiki:for="{{array}}" tiki:for-index="idx" tiki:for-item="itemName">
  {{idx}}: {{itemName.message}}
</view>
```

`tiki:for` cũng có thể sử dụng lồng nhau. Dưới đây là một ví dụ

```xml
<view tiki:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" tiki:for-item="i">
  <view tiki:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" tiki:for-item="j">
    <view tiki:if="{{i <= j}}">
      {{i}} * {{j}} = {{i * j}}
    </view>
  </view>
</view>
```

## block tiki:for

Giống như `tiki:if`, bạn có thể sử dụng `tiki:for` trên thẻ `<block>`

```xml
<block tiki:for="{{[1, 2, 3]}}">
  <view> {{index}}: </view>
  <view> {{item}} </view>
</block>
```

### tiki:key

Để định danh các phần tử trong mảng, TXML cung cấp hàm thuộc tính `tiki:key`.
Bằng việc sử dụng `tiki:key`, khi dữ liệu trong mảng thay đổi, Mini App Framework sẽ chỉ cập nhật các dữ liệu thay đổi dựa vào key.

`tiki:key` có thể sử dụng theo 2 cách

- `tiki:key` nhận một giá trị string, string này là thuộc tính để định danh id cho item trong mảng

```xml
<switch tiki:for="{{objectArray}}" tiki:key="unique" style="display: block;"> {{item.id}} </switch>
```

```js
Page({
  data: {
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' }
    ]
  }
});
```

Mỗi phần tử trong mảng `objectArray` đều có thuộc tính `unique`, bằng việc sử dụng `tiki:key="unique"` trong TXML,
chúng ta xác định rằng key của item là sẽ là thuộc tính `unique` này.

- `tiki:key` cũng có thể nhận giá trị là từ khoá `*this`, có nghĩa là key của item là chính nó. Chúng ta chỉ nên sử dụng `tiki:key="*this"` nếu như mảng chỉ chứa các chuỗi, hoặc các number

```xml
<switch tiki:for="{{numberArray}}" tiki:key="*this" style="display: block;"> {{item}} </switch>
```

```js
Page({
  data: {
    numberArray: [1, 2, 3, 4]
  }
});
```
