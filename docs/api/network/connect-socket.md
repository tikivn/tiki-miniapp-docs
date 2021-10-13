---
title: my.connectSocket
---

`my.connectSocket` là API được dùng để mở websocket connection tr trên ứng dụng. Một ứng dụng chỉ có thể duy trì một WebSocket connection ở cùng một thời điểm. Nếu api này được gọi khi có connection được mở trước đó, thì connection trước đó sẽ tự động bị đóng và mở connection mới.

***Quan trọng***: Bạn cần phải thêm tên miền trong phần **Cài đặt chung** của ứng dụng trên Dev Center trước khi sử dụng các Networking API và Webview. Xem phần hướng dẫn [tại đây](/docs/backend-api/overview#tên-miền)

## Sample Code

```js
my.connectSocket({
  url: this.data.websocketServer,
  data: {},
  header:{
    'content-type': 'application/json'
  },
  success: (res) => {
     console.log(JSON.stringify(res));
  },
  fail: () => {
  }
});
```

## API Params

Để cấu hình mở WebSocket cần truyền các thuộc tính sau:

| Attributes | Type     | Required | Description                                                                                          |
| ---------- | -------- | -------- | ---------------------------------------------------------------------------------------------------- |
| url        | string   | Yes      | Đường dẫn tới WebSocket server. Đường dẫn hỗ trợ cả ws:// lẫn wss://                                 |
| data       | Object   | No       | Data kèm theo khi kết nối tới server. Data này sẽ được truyền kèm như query string trên url kết nối. |
| header     | Object   | No       | Header kèm theo khi kết nối.                                                                         |
| success    | Function | No       | Callback function khi việc kết nối thành công.                                                       |
| fail       | Function | No       | Callback function khi việc kết nối thất bại.                                                         |
| complete   | Function | No       | Callback function khi việc kết nối kết thúc cho dù thành công hay thất bại.                          |
