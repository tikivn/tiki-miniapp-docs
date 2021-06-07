---
title: 'my.isLoggedIn'
---

## Giới thiệu

**my.isLoggedIn** là API để kiểm tra user đã logged in hay chưa.
## Sử dụng

### Sample Code

```xml
 <view class="block-content">
    <text class="title mb-8">Is user logged in?</text>
    <text class="title mb-8">{{isLogged}}</text>
  </view>
  <view class="block-content">
    <button class="button-full" onTap="onCheckUserLoggedIn">Check</button>
  </view>
```

```js
Page({
  data: {
    isLogged: undefined,
  },

  onCheckUserLoggedIn() {
    my.isLoggedIn({
      success: (res) => {
        this.setData({ isLogged: res });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
});

```

### API Params

| Attributes | Type           | Required | Description                                                           |
| ---------- | -------------- | -------- | --------------------------------------------------------------------- |
| success    | Function       | No       | Callback function khi thành công.                                     |
| fail       | Function       | No       | Callback function khi thất bại.                                       |
| complete   | Function       | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại. |

### Giá trị trong success callback
payload của success callback là giá trị boolean, kết quả của việc kiểm tra user đã logged in hay chưa.