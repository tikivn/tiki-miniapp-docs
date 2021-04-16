---
order: 20
category:
  vi-VN: Miniapp Page
  en-US: Miniapp Page
title:
  vi-VN: Giới thiệu về Miniapp Page
  en-US: Miniapp Page introduction
---

Miniapp page là 1 instance đại diện cho các pages của app. Mỗi page được chia thành 1 folder và có 4 thành phần `txml`, `tcss`, `js` và `json`.
- index.js: chứa code logic của Page
- index.txml: chứa code về layout của Page
- index.tcss: chứa code về style của Page
- index.json: chứa các cấu hình cho Page

## Page data

Khởi tạo data cho page

```js
Page({
  data: {
    title: 'Tiki',
    array: [{user: 'Alex'}, {user: 'Lucy'}],
  },
});
```

**index.txml**
Render data cho page

```xml
<view>{{title}}</view>
<view>{{array[0].user}}</view>
```

Handle event cho page

```xml
<view onTap="handleTap">click me</view>
```
Khi user click button `click me`, function `handleTap` sẽ được trigger. 
Xử lí event ở file **index.js**

```js
Page({
  handleTap() {
    console.log('yo! view tap!');
  },
});
```

Giả sử chúng ta muốn rerender lại page, sử dụng hàm this.setData() để set lại data, page sẽ tự rerender.

```xml
<view>{{text}}</view>
<button onTap="changeText"> Change normal data </button>
```

```js
Page({
  data: {
    text: 'init data',
  },
  changeText() {
    this.setData({
      text: 'changed data',
    });
  },
});
```