# Template

TXML hỗ trợ bạn để có thể định nghĩa và sử dụng template.

## Định nghĩa một template

Để định một template, chúng ta sử dụng thẻ `<template>`, và thuộc tính `name` để xác định tên của template.

```xml
<!--
  index: int
  msg: string
  time: string
-->
<template name="msgItem">
  <view>
    <text> {{index}}: {{msg}} </text>
    <text> Time: {{time}} </text>
  </view>
</template>
```

## Sử dụng template

Để sử dụng một template, chúng ta sử dụng thuộc tính `is` để xác định template mà chúng ta muốn sử dụng.
Sau đó, truyền vào data mà chúng ta cần để render.

```xml
<template is="msgItem" data="{{...item}}"/>
```

```js
Page({
  data: {
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    }
  }
});
```

Bạn cũng có thể gán dữ liệu vào thuộc tính `is` của thẻ `<template>`

```xml
<template name="odd">
  <view> odd </view>
</template>
<template name="even">
  <view> even </view>
</template>

<block tiki:for="{{[1, 2, 3, 4, 5]}}">
  <template is="{{item % 2 == 0 ? 'even' : 'odd'}}"/>
</block>
```

## Template Scope

Template chỉ có thể sử dụng các dữ liệu được truyền vào và định nghĩa từ file logic tương ứng.
