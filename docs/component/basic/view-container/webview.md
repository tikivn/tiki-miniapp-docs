---
title: web-view
sidebar_custom_props:
  description: Container component dùng để hiển thị trang web trong một Tini App
---

`web-view` là một container component dùng để hiển thị trang web trong một Tini App. Nó đặc biệt hữu dụng chính vì Tini App không thể nhảy đến một trang web bên ngoài Tiki App.

Mỗi page của Tini App chỉ được phép chứa một `web-view` duy nhất. `web-view` sẽ tự động chiếm toàn màn hình; tất cả các component khác sẽ bị che bởi `web-view` đó.

Bạn cần có tài khoản Nhà phát triển loại Công ty để có thể khai thác đầy đủ tính năng của `web-view`.

:::important Quan trọng

Bạn cần phải thêm tên miền trong phần **Cài đặt chung** của ứng dụng trên [Tini Console](https://developer.tiki.vn/apps) trước khi sử dụng các Networking API và Webview. Xem phần hướng dẫn [tại đây](/docs/development/tini-console/whitelist-domains).

:::

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/basic/webview/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/basic/webview/index" />

## Các API có thể được gọi trong web-view

| API                                                     | Mô tả                                                                                                                                   |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [my.navigateTo](/docs/api/ui/route/navigate-to)         | Di chuyển từ màn hình hiện tại tới màn hình mong muốn trong ứng dụng.                                                                   |
| [my.navigateBack](/docs/api/ui/route/navigate-back)     | Đóng màn hình hiện tại và trở lại màn hình trước đó.                                                                                    |
| [my.getSystemInfo](/docs/api/device/get-system-info)    | Lấy thông tin của hệ thống.                                                                                                             |
| [my.getUserInfo](/docs/api/open/get-user-info)          | Lấy các thông tin cơ bản của người dùng (tên, ảnh).                                                                                     |
| [my.request](/docs/api/network/request)                 | Thực hiện các network request.                                                                                                          |
| my.postMessage                                          | Gửi message tới `web-view`. Message sẽ được gửi tới listener của `window.onmessage` hay `window.addEventListener('message', listener)`. |
| [my.setStorage](/docs/api/storage/set-storage)          | Lưu trữ dữ liệu theo key.                                                                                                               |
| [my.getStorage](/docs/api/storage/get-storage)          | Đọc dữ liệu đã được lưu theo key.                                                                                                       |
| [my.removeStorage](/docs/api/storage/remove-storage)    | Xoá dữ liệu đã được lưu theo key.                                                                                                       |
| [my.clearStorage](/docs/api/storage/clear-storage)      | Xoá toàn bộ dữ liệu.                                                                                                                    |
| [my.getStorageInfo](/docs/api/storage/get-storage-info) | Đọc thông tin của ứng dụng.                                                                                                             |
| [my.chooseImage](/docs/api/media/image/choose-image)    | Chụp ảnh bằng camera hoặc chọn hình từ album cục bộ.                                                                                    |
| [my.previewImage](/docs/api/media/image/preview-image)  | Mở một cửa sổ lớn để xem hình ảnh.                                                                                                      |
| [my.getLocation](/docs/api/geo/location/get-location)   | Lấy thông tin vị trí địa lí hiện tại của thiết bị.                                                                                      |
| [my.showLoading](/docs/api/ui/feedback/show-loading)    | Hiển thị loading.                                                                                                                       |

### Các thuộc tính

| Thuộc tính     | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                       |
| -------------- | ------------ | ---------------- | ------------------------------------------- |
| src            | string       |                  | Đường dẫn đến trang web của bạn             |
| progress       | boolean      | true             | Hiển thị progress hay không                 |
| progressHeight | number       | 3                | Chiều cao của progress                      |
| progressColor  | string       | #1a94ff          | Mã màu của progress                         |
| onMessage      | function     |                  | Được gọi khi có sự kiện được gửi từ webview |

## Sample Code

```xml title=index.txml
<web-view id="web-view1" src="https://your-example-host.com/miniapps/your-file.html" onMessage="onWebviewMessage" />
```

```js title=index.js
Page({
  onLoad() {
    this.webviewContext = my.createWebViewContext('web-view1');
  }
  onWebviewMessage(e) {
    console.log(e.detail.data); // it will log "ping" to console
   if(e.detail.data ==="ping") {
     this.webviewContext.postMessage('pong'); // send string "pong" to webview
   }
  }
});
```

```html title=your-file.html
<body>
  <button id="send">
    send message to webview
  </button>
  <button id="goto">
    go to tini app user info example page
  </button>
</body>
<script>
  function main(){
    console.debug("window.my",window.my);

    if(!window.my) {
      throw new Error('main function has to wait for the Tini app framework ready event');
    };

    // setup buttons' click event
    document.querySelector('button#send').addEventListener('click', function(){
      my.postMessage('ping');
    });
    document.querySelector('button#goto').addEventListener('click', function(){
      my.navigateTo({ url: 'pages/user-info/index' });
    });

    // handle messages from tini app:
    window.onmessage = function () {
      alert(JSON.stringify(e.data)); // this will alert "pong" message
    };
    /** or you can use:
     *   
     * window.addEventListener('message', (e) => {
     *   alert(JSON.stringify(e.data)); // this will alert "pong" message
     * });
     * 
     * 
    */
  
  }
 // check if jsapi `my` is available
 // if not, wait until the event `TiniAppJSBridgeReady` is emitted
  try {
    if(window.my) {
      main();
    }
    else {
      window.addEventListener('TiniAppJSBridgeReady', () => {
        // window.my is available here
        main();
      });
    }
  } catch(e){
    console.error(e)
    // your code to handle errors goes here
  }
</script>
```
:::note Lưu ý

- Bridge `my` được đăng ký như một global variable (window.my);
- Các jsapi `my.<tiki-api>` trên webview chỉ có thể gọi sau khi event `TiniAppJSBridgeReady` được emit;

:::
## Tạo cầu để kết nối giữa `web-view` và các page trong Tini App

`web-view` chỉ cung cấp giới hạn một số API mà thôi.

Do vậy, nếu từ `web-view`, bạn muốn gọi các API còn lại, bạn sẽ cần sử dụng `my.postMessage` để gửi message tới các page khác của Tini App, và sử dụng `onmesssage` để nhận message trả về.

Ví dụ dưới đây mô tả một cách cài đặt cầu đơn giản để kết nối giữa `web-view` và các page trong Tini App

Ở webview, chúng ta sử dụng một dictionary callbacks để lưu các callback lại.
Mỗi lần muốn gửi message từ `web-view` sang Tini App, chúng ta sẽ sinh ra một requestId là timestamp tại thời điểm đó

```js
const callbacks = {};
function sendMessageToTiniApp(params, callback) {
  const requestId =
    new Date().getTime() +
    '' +
    Math.floor(Math.random() * 1000000);
  callbacks[requestId] = callback;
  debug('send to Tini App', requestId, JSON.stringify(params));
  my.postMessage({ requestId, params });
}
```

Khi nhận được message này, ở Tini App chúng ta sẽ viết hàm xử lý message.
Trong case này, chúng ta nhận api muốn gọi từ `web-view`, rồi gọi API này ở tầng Tini App.
Khi trả về result cho WebView, chúng ta sẽ trả về kèm theo requestId đã nhận được.

```js title=src/pages/webview-postmessage/index.js
Page({
  onMessage(e) {
    console.log('receive message from webview', e.detail);

    const { requestId, params } = e.detail;
    const { api, params: messageParams = {} } = params;
    if (my[api] === undefined) {
      return;
    }

    console.log(`call my.${api}`, messageParams);
    const webview = my.createWebViewContext('web-view1');
    // gọi API mà webview truyền lên
    my[api]({
      ...(messageParams || {}),
      success: (res) => {
        // nếu thành công, thì send lại weview result kèm theo requestId
        webview.postMessage({
          requestId,
          result: {
            status: 'success',
            res
          }
        });
      },
      fail: (res) => {
        // nếu thất bại, thì send lại weview result kèm theo requestId
        webview.postMessage({
          requestId,
          result: {
            status: 'fail',
            res
          }
        });
      }
    });
  }
});
```

Khi `web-view` nhận được message, thì dựa vào requestId, chúng ta có thể lấy ra callback cần xử lý là gì
và gọi callback đó thôi

```js
// src/public/webview/index.html

window.addEventListener('message', (e) => {
  const { requestId, result } = e.data;
  if (callbacks[requestId] === undefined) {
    return;
  }

  const callback = callbacks[requestId];
  delete callbacks[requestId];
  callback(result);
});
```

Để sử dụng hàm `sendMessageToTiniApp`, chúng ta có thể gọi như sau

```js
// src/public/webview/index.html
setTimeout(() => {
  // how to use the client
  sendMessageToTiniApp(
    {
      api: 'getUserInfo'
    },
    (result) => {
      debug('result from Tini App', JSON.stringify(result));
    }
  );
}, 0);
```

Hàm `sendMessageToTiniApp` nhận vào 2 tham số

- tham số đầu tiên là một object có 2 key
  - api: là JSAPI mà bạn muốn gọi ở Tini App
  - params: là các tham số bạn muốn JSAPI gọi
- callback là function bạn muốn gọi khi nhận được result (success / failure) từ Tini App

