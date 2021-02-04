---
order: 62
category:
  vi-VN: Interactive Feedback
  en-US: Interactive Feedback
title: 
  vi-VN: my.confirm
  en-US: my.confirm
---

# Giới thiệu
my.confirm là api để hiển thị Confirm popup. Có thể set được title, content, text của button confirm và cancel
## Sample Code

index.txml
```xml
<view class="page">
  <view class="page-description">Confirm API</view>
  <view class="page-section">
    <view class="page-section-title">my.confirm</view>
    <view class="page-section-demo">
      <button type="primary" onTap="onConfirm">Show Confirm</button>
    </view>
  </view>
</view>
```

index.js
```js
Page({
  onConfirm() {
    my.confirm({
      title: "Alert title",
      content: "Alert content",
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
      success: (result) => {
        my.alert({ title: `${result.confirm}` });
      },
      fail: (e) => {
        my.alert({ title: `${e}` });
      },
      complete: () => {
        console.log("Complete");
      },
    });
  },
})
```

## Chi tiết
| Thuộc tính     | Kiểu dữ liệu  | Required | Mô tả |
| ------- | --------------- | ------- | --------------- |
| title | String | No | Title của confirm box |
| content | String | No | Content message của confirm box |
| confirmButtonText | String | No | Text của button confirm, mặc định là OK |
| cancelButtonText | String | No | Text của button confirm, mặc định là Cancel |
| success | Function | No | Callback khi confirm box show success |
| fail | Function | No | Callback khi confirm box show fail |
| complete | Function | No | Callback khi confirm box đã được show |
