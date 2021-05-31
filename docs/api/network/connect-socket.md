---
title: my.connectSocket
---

## Giới thiệu

**my.connectSocket** được dùng để mở websocket connection tr trên ứng dụng. Một ứng dụng chỉ có thể duy trì một WebSocket connection ở cùng một thời điểm. Nếu api này được gọi khi có connection được mở trước đó, thì connection trước đó sẽ tự động bị đóng và mở connection mới.

## Sử dụng

### Sample Code

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

### API Params

Để cấu hình mở WebSocket cần truyền các thuộc tính sau:

| Attributes | Type     | Required | Description                                                                                          |
| ---------- | -------- | -------- | ---------------------------------------------------------------------------------------------------- |
| url        | string   | Yes      | Đường dẫn tới WebSocket server. Đường dẫn hỗ trợ cả ws:// lẫn wss://                                 |
| data       | Object   | No       | Data kèm theo khi kết nối tới server. Data này sẽ được truyền kèm như query string trên url kết nối. |
| header     | Object   | No       | Header kèm theo khi kết nối.                                                                         |
| success    | Function | No       | Callback function khi việc kết nối thành công.                                                       |
| fail       | Function | No       | Callback function khi việc kết nối thất bại.                                                         |
| complete   | Function | No       | Callback function khi việc kết nối kết thúc cho dù thành công hay thất bại.                          |
