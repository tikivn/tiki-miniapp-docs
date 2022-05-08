---
title: 'my.isLoggedIn'
---

`my.isLoggedIn` là API để kiểm tra user đã log in hay chưa.

## API Params

| Thuộc tính | Kiểu dữ liệu   |  Mô tả                                                                |
| ---------- | -------------- | --------------------------------------------------------------------- |
| success    | Function       | Callback function khi kiểm tra thành công.                                     |
| fail       | Function       | Callback function khi kiểm tra thất bại.                                       |
| complete   | Function       | Callback function khi kiểm tra hoàn tất cho dù thành công hay thất bại. |

### Giá trị trong success callback

payload của success callback là giá trị boolean, kết quả của việc kiểm tra user đã logged in hay chưa.

## Sample Code

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

