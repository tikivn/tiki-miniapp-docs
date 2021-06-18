# getApp method

Applet cung cấp 1 hàm global là `getApp`, có thể access ở cả page và component. Hàm `getApp` trả về instance của application.
Ví dụ ở Application, khai báo biến globalData
```js
App({
  globalData: 1
  doSomething() {
    // bla bla
  }
})
```

Ở page access biến globalData và gọi hàm doSomething
```js
// page.js
var app = getApp();
console.log(app.globalData);
app.doSomething()
```

## Lưu ý:
* Nếu đang ở App() không gọi hàm `getApp()`, mà nên gọi `this` để trả về app instance.
* Khi sử dụng `getApp` không nên gọi các hàm lifecycle của `App`. Việc này sẽ dễ phát sinh các vấn đề không mong muốn. Các lifecycle của app, page, hay component phải để applet tự trigger.