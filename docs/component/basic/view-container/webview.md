---
title: web-view
---

## Giới thiệu

`web-view` là một container componet dùng để hiển thị nội dung html trong một miniapp. Vì miniapp không thể nhảy qua một trang web ngoài tiki, thế nên để hiện thị nội dung trang đó
bạn có thể dùng web-view để hiển thị.

## Lưu ý khi sử dụng

- Mỗi page chỉ có thể trình bày 1 web-view. web-view sẽ tự động trình bày toàn màn hình, tất cả các components khác sẽ bị che bởi web-view đó.
- Để đảm bảo cam kết avaibility của nội dung trong web-view khi khách hàng sử dụng, bạn cần phải có tài khoản công ty hoặc doanh nghiệp.

## Sử dụng

### Sample Code

**index.txml**

```xml
<web-view id="web-view1" src="https://dev-tikiscp.tbox.vn/miniapps/files/h5.html" onMessage="onMessage" />
```

**index.js**

```js
Page({
  onMessage(e) {
    console.log(e.detail.data); // it will log "ping" to console
    const webview = my.createWebViewContext('web-view1');
    webview.postMessage('pong');
  }
});
```

**h5.html**

```html
<script
  type="text/javascript"
  src="https://tiki/tf-miniapp.webview.js"
></script>
<script>
  my.navigateTo({ url: 'pages/user-info/index' });
  my.postMessage('ping');
  window.onmessage = function () {
    alert(JSON.stringify(e.data)); // this will alert "pong" message
  };
  window.addEventListener('message', (e) => {
    alert(JSON.stringify(e.data)); // this will alert "pong" message
  });
</script>
```

### Các API có thể gọi trong web-view

| API              | Description                                                                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| my.navigateTo    | Dùng để di chuyển từ màn hình hiện tại tới màn hình mong muốn trong ứng dụng. Xem thêm [my.navigateTo](https://developers.tiki.vn/docs/api/navigator/navigate-to). |
| my.navigateBack  | Dùng để đóng màn hình hiện tại và trở lại màn hình trước đó. Xem thêm [my.navigateBack](https://developers.tiki.vn/docs/api/navigator/navigate-back).              |
| my.getSystemInfo | Dùng để lấy thông tin của hệ thống. [my.getSystemInfo](https://developers.tiki.vn/docs/api/device/get-system-info).                                                |
| my.getUserInfo   | Dùng để lấy các thông tin cơ bản của users (tên, ảnh). [my.getUserInfo](https://developers.tiki.vn/docs/api/open/get-user-info).                                   |
| my.request       | Dùng để thực hiện các network request. [my.request](https://developers.tiki.vn/docs/api/network/request).                                                          |
| my.postMessage   | Dùng để gửi message tới webview. Message sẽ được gửi tới listener của `window.onmessage` hay `window.addEventListener('message', listener)`.                       |
