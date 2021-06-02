---
title: my.openDeeplink
---

## Giới thiệu

**my.openDeeplink** là API dùng để open 1 deeplink

## Sử dụng

### Sample Code

```js
Page({
  data: {
    url: undefined,
  },
  urlChange(e) {
    this.setData({
      url: e.detail.value,
    });
  },
  onOpenDeeplink() {
    my.openDeeplink({
      url: this.data.url,
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
});
```

### API Params

Các thuộc tính:

| Attributes | Type     | Required | Description                                                                         |
| ---------- | -------- | -------- | ----------------------------------------------------------------------------------- |
| url        | string   | Yes      | deeplink cần open                                                                         |
| success    | Function | No       | Callback function khi open deeplink được thực hiện thành công                             |
| fail       | Function | No       | Callback function khi open deeplink thất bại, argument sẽ là error message                |
| complete   | Function | No       | Callback function khi việc gọi open deeplink kết thúc cho dù thành công hay thất bại.     |

### Callback function payload
* success callback payload là 1 biến boolean và luôn là true 
* Fail callback payload 

| Attributes   | Type     |  Description              |
| ----------   | -------- | ------------------------- |
| error        | string   | error title               |
| errorMessage | string   | error message in detail   |


