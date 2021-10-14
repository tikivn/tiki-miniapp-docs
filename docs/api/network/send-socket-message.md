---
title: my.sendSocketMessage
---

`my.sendSocketMessage` là một API dùng để gửi dữ liệu thông qua một WebSocket connection. Để sử dụng `my.sendSocketMessage`, bạn trước hết cần thiết lập WebSocket connection bằng `my.connectSocket`, tiếp đến là gọi `my.onSocketOpen` callback.

## API Params

| Thuộc tính | Kiểu dữ liệu        | Bắt buộc | Mô tả                                                                                   |
| ---------- | ------------------- | :------: | --------------------------------------------------------------------------------------- |
| data       | string/ ArrayBuffer |    ✓     | Dữ liệu cần gửi đi, có thể ở dạng thuần văn bản hoặc chuỗi mã hoá Base64.               |
| success    | Function            |          | Callback function khi gửi dữ liệu thành công.                                           |
| fail       | Function            |          | Callback function khi gửi dữ liệu bất thành.                                            |
| complete   | Function            |          | Callback function khi gọi API hoàn tất bất kể việc gửi dữ liệu thành công hay thất bại. |

## Sample Code

``` js
let socketOpen = false
let socketMsgQueue = []
wx.connectSocket({
   url: 'wss://www.example.com/socketserver'
})

wx.onSocketOpen(function(res) {
  socketOpen = true
  for (let i = 0; i < socketMsgQueue.length; i++){
    sendSocketMessage(socketMsgQueue[i])
  }
  socketMsgQueue = []
})

function sendSocketMessage(msg) {
  if (socketOpen) {
    wx.sendSocketMessage({
      data:msg
    })
  } else {
    socketMsgQueue.push(msg)
  }
}
```