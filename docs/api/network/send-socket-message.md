---
title: my.sendSocketMessage
sidebar_custom_props:
  description: Dùng để gửi dữ liệu thông qua một WebSocket connection
---

`my.sendSocketMessage` là một API dùng để gửi dữ liệu thông qua một WebSocket connection. Để sử dụng `my.sendSocketMessage`, bạn trước hết cần thiết lập WebSocket connection bằng `my.connectSocket`, tiếp đến là gọi `my.onSocketOpen` callback.

:::important Quan trọng

Bạn cần phải thêm tên miền trong phần **Cài đặt chung** của ứng dụng trên [Tini Console](https://developer.tiki.vn/apps) trước khi sử dụng các Networking API và Webview. Xem phần hướng dẫn [tại đây](/docs/development/tini-console/whitelist-domains).

:::

## API Params

| Thuộc tính | Kiểu dữ liệu        | Bắt buộc | Mô tả                                                                                   |
| ---------- | ------------------- | :------: | --------------------------------------------------------------------------------------- |
| data       | string/ ArrayBuffer |    ✓     | Dữ liệu cần gửi đi, có thể ở dạng thuần văn bản hoặc chuỗi mã hoá Base64.               |
| success    | Function            |          | Callback function khi gửi dữ liệu thành công.                                           |
| fail       | Function            |          | Callback function khi gửi dữ liệu bất thành.                                            |
| complete   | Function            |          | Callback function khi gọi API hoàn tất bất kể việc gửi dữ liệu thành công hay thất bại. |

## Sample Code

```js
let socketOpen = false;
let socketMsgQueue = [];
my.connectSocket({
  url: 'wss://www.example.com/socketserver'
});

my.onSocketOpen(function (res) {
  socketOpen = true;
  for (let i = 0; i < socketMsgQueue.length; i++) {
    sendSocketMessage(socketMsgQueue[i]);
  }
  socketMsgQueue = [];
});

function sendSocketMessage(msg) {
  if (socketOpen) {
    my.sendSocketMessage({
      data: msg
    });
  } else {
    socketMsgQueue.push(msg);
  }
}
```
