---
title: web-view
---

`web-view` là một container component dùng để hiển thị trang web trong một Tini App. Nó đặc biệt hữu dụng chính vì Tini App không thể nhảy đến một trang web bên ngoài Tiki App. 

Mỗi page của Tini App chỉ được phép chứa một `web-view` duy nhất. `web-view` sẽ tự động chiếm toàn màn hình; tất cả các component khác sẽ bị che bởi `web-view` đó.

Bạn cần phải có Nhà phát triển loại công ty/doanh nghiệp để có thể khai thác đầy đủ tính năng của `web-view`.

## Các API có thể gọi trong web-view

| API                                               | Mô tả                                                                                                                                   |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [my.navigateTo](api/ui/route/navigate-to.md)      | Di chuyển từ màn hình hiện tại tới màn hình mong muốn trong ứng dụng.                                                                   |
| [my.navigateBack](api/ui/route/navigate-back.md)  | Đóng màn hình hiện tại và trở lại màn hình trước đó.                                                                                    |
| [my.getSystemInfo](api/device/get-system-info.md) | Lấy thông tin của hệ thống.                                                                                                             |
| [my.getUserInfo](api/open/05-get-user-info.md)    | Lấy các thông tin cơ bản của người dùng (tên, ảnh).                                                                                     |
| [my.request](api/network/request.md)              | Thực hiện các network request.                                                                                                          |
| my.postMessage                                    | Gửi message tới `web-view`. Message sẽ được gửi tới listener của `window.onmessage` hay `window.addEventListener('message', listener)`. |

## Sample Code

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

