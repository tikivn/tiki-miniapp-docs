---
title: game-view
---

`game-view` là một container component, được tối ưu hoá cho việc chạy các HTML5 game, hay còn biết đến với cái tên rút gọn H5 game, trong Tini App.

:::note Lưu ý

- Nhằm đáp ứng nhu cầu rất lớn về phát hành game của các đối tác trên nền tảng Tini App, game-view đã được xây dựng từ web-view như một giải pháp tạm thời. Tuy nhiên, game-view sẽ sớm đổi thành native.
- Mỗi page của Tini App chỉ có thể chứa một `game-view` duy nhất và nó mặc nhiên chiếm trọn màn hình.
- Khi hoạt động, `game-view` sẽ tự động load tập tin `index.html` trong thư mục `public`.

:::

******: 

## Sample Code

``` js
<script>
  my.navigateTo({ url: 'pages/user-info/index' });
  my.postMessage('ping');
  my.getUserInfo({
    success: function (userInfo) {
      alert(JSON.stringify(userInfo));
    }
  })
  my.getSystemInfo({
    success: function (result) {
      alert('getSystemInfo' + JSON.stringify(result));
    }
  });
</script>
```

Danh sách các API có thể gọi trong game-view

| API                                                     | Mô tả                                                                 |
| ------------------------------------------------------- | --------------------------------------------------------------------- |
| [my.navigateTo](/docs/api/ui/route/navigate-to)         | Di chuyển từ màn hình hiện tại tới màn hình mong muốn trong ứng dụng. |
| [my.navigateBack](/docs/api/ui/route/navigate-back)     | Đóng màn hình hiện tại và trở lại màn hình trước đó.                  |
| [my.getSystemInfo](/docs/api/device/get-system-info)    | Lấy thông tin của hệ thống.                                           |
| [my.getUserInfo](/docs/api/open/get-user-info)          | Lấy các thông tin cơ bản của người dùng (tên, ảnh).                   |
| [my.request](/docs/api/network/request)                 | Thực hiện các network request.                                        |
| [my.setStorage](/docs/api/storage/set-storage)          | Lưu trữ dữ liệu theo key.                                             |
| [my.getStorage](/docs/api/storage/get-storage)          | Đọc dữ liệu đã được lưu theo key.                                     |
| [my.removeStorage](/docs/api/storage/remove-storage)    | Xoá dữ liệu đã được lưu theo key.                                     |
| [my.clearStorage](/docs/api/storage/clear-storage)      | Xoá toàn bộ dữ liệu.                                                  |
| [my.getStorageInfo](/docs/api/storage/get-storage-info) | Đọc thông tin của ứng dụng.                                           |
| [my.chooseImage](/docs/api/media/image/choose-image)    | Chụp ảnh bằng camera hoặc chọn hình từ album cục bộ.                  |
| [my.previewImage](/docs/api/media/image/preview-image)  | Mở một cửa sổ lớn để xem hình ảnh.                                    |
| [my.getLocation](/docs/api/geo/location/get-location)   | Lấy thông tin vị trí địa lí hiện tại của thiết bị.                    |
| [my.showLoading](/docs/api/ui/feedback/show-loading)    | Hiển thị loading.                                                     |
| my.postMessage                                          | Gọi API nằm ngoài danh sách này.                                      |

:::warning Cảnh báo

Nhiều khả năng `my.postMessage` sẽ không còn sử dụng được với `game-view’ sau khi component này chuyển sang native.

:::

## Tạo cầu để kết nối giữa game-view và các page trong Tini App

Do `game-view` chỉ được phép gọi một số API nhất định, bạn có thể thông qua `my.postMessage` để gọi những API khác mà không thể được gọi trực tiếp trong `game-view`. Cách làm là bạn dùng `my.postMessage` sẽ gửi message đến một page khác của Tini App.  Page này sẽ gọi API và gửi message phản hồi cho `game-view`. `onMessage`sẽ được dùng để nhận message trả về.

Ví dụ dưới đây mô tả một cách cài đặt cầu đơn giản để kết nối giữa `game-view` và các page trong Tini App.

Ở gameview, chúng ta sử dụng callback dictionary để lưu các callback lại. Mỗi lần muốn gửi message từ `game-view` sang Tini App, chúng ta sẽ sinh ra một requestId là timestamp tại thời điểm đó.

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

Ở Tini App chúng ta sẽ viết hàm xử lý message khi nhận được message này.  Ở đây, chúng ta nhận api muốn gọi từ `game-view`, rồi gọi API này ở tầng Tini App. Khi trả về result cho game-view, chúng ta sẽ trả về kèm theo requestId đã nhận được.

```js  title=src/pages/webview-postmessage/index.js
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
Khi `game-view` nhận được message, thì dựa vào requestId, chúng ta có thể lấy ra callback cần xử lý là gì và gọi callback đó thôi.

```js titel=title=src/public/webview/index.html

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

```js title=src/public/webview/index.html
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

- tham số đầu tiên là một object có 2 key
  - api: là JSAPI mà bạn muốn gọi ở Tini App
  - params: là các tham số bạn muốn JSAPI gọi
- callback là function bạn muốn gọi khi nhận được result (success / failure) từ Tini App
