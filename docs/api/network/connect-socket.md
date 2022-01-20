---
title: my.connectSocket
---

`my.connectSocket` là API được dùng để mở websocket connection trên ứng dụng. Một ứng dụng chỉ có thể duy trì một WebSocket connection ở một thời điểm. Nếu api này được gọi khi có connection đang được mở, thì connection có sẵn đó sẽ tự động đóng lại và connection mới được mở ra.

***Quan trọng***: Bạn cần phải thêm tên miền trong phần **Cài đặt chung** của ứng dụng trên [Tini Console](https://developer.tiki.vn/apps) trước khi sử dụng các Networking API và Webview. Xem phần hướng dẫn [tại đây](/docs/development/tini-console/whitelist-domains)

## API Params

Để cấu hình mở WebSocket cần truyền các thuộc tính sau:

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                                |
| ---------- | ------------ | :------: | ---------------------------------------------------------------------------------------------------- |
| url        | string       |    ✓     | Đường dẫn tới WebSocket server. Đường dẫn hỗ trợ cả ws:// lẫn wss://                                 |
| data       | Object       |          | Data kèm theo khi kết nối tới server. Data này sẽ được truyền kèm như query string trên url kết nối. |
| success    | Function     |          | Callback function khi việc kết nối thành công.                                                       |
| fail       | Function     |          | Callback function khi việc kết nối thất bại.                                                         |
| complete   | Function     |          | Callback function khi việc kết nối kết thúc bất kể thành công hay thất bại.                          |

***Lưu ý***:

> `my.connectSocket` sẽ phát sinh lỗi nếu giá trị truyền vào thuộc tính `url` không phải kiểu string, bị NULL, hoặc không đúng dịnh dạng `ws://` hay `wss://`.
>
> Tuy nhiên, trường hợp sai token hoặc sai url thì vẫn được tính là success callback.

## Sample Code

```js
my.connectSocket({
  url: this.data.websocketServer,
  data: {},
  success: (res) => {
     console.log(JSON.stringify(res));
  },
  fail: () => { 
  }
});
```


