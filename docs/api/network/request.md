---
title: my.request
---

`my.request` là API dùng để thực hiện các network request. Hiện chỉ hỗ trợ những request qua giao thức **https**.

Ứng dụng của bạn sẽ được chạy trong môi trường cô lập thuần javascript nên sẽ không có các hàm gọi network thông thường như `fetch` hay `XMLHttpRequest`. Để thực hiện gọi network bạn phải dùng đến `my.request`.

***Quan trọng***: Bạn cần phải thêm tên miền trong phần **Cài đặt chung** của ứng dụng trên [Tini Console](https://developer.tiki.vn/apps) trước khi sử dụng các Networking API và Webview. Xem phần hướng dẫn [tại đây](/docs/development/tini-console/whitelist-domains).

## API Params

Để cấu hình việc gọi network, bạn cần truyền object với các thuộc tính sau:

| Thuộc tính    | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                                                    |
| ------------- | ------------ | :------: | ------------------------------------------------------------------------------------------------------------------------ |
| url           | string       |    ✓     | Đường dẫn muốn gọi tới.                                                                                                  |
| headers       | object       |          | Cấu hình headers khi thực hiện gọi network.                                                                              |
| method        | string       |          | Phương thức gọi network. Mặc định sẽ là GET.                                                                             |
| data          | object       |          | Data kèm theo trong request.                                                                                             |
| timeout       | number       |          | Request sẽ bị cancel sau khoảng thời gian timeout. Đơn vị là mili giây (ms); mặc định là 30,000 (30s)                    |
| dataType      | string       |          | Quy định định dạng dữ liệu (data format) trả về sau request. Hỗ trợ JSON, text, base64 và arraybuffer; mặc định là JSON. |
| includeHeader | boolean      |          | Quy định dữ liệu trả về trường hợp thành công có bao gồm headers hay không.                                              |
| success       | Function     |          | Callback function khi việc gọi network thành công.                                                                       |
| fail          | Function     |          | Callback function khi việc gọi network thất bại.                                                                         |
| complete      | Function     |          | Callback function khi việc gọi network kết thúc cho dù thành công hay thất bại.                                          |

***Lưu ý***: Định dạng arraybuffer được hỗ trợ từ runtime version 1.85 trở đi.

### Callback success function payload

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                |
| ---------- | ------------ | -------------------------------------------------------------------- |
| data       | string       | Dữ liệu trả về. Định dạng của nó phụ thuộc vào tuộc tính `dataType`. |
| headers    | Object       | Header trả về trường hợp `includeHeader : true`.                     |
| status     | number       | Mã trả về (Response code). Mặc định là 200.                          |
| statusText | string       | Thông điệp trả về tương ứng với mã trả về. Mặc định sẽ là `OK`.      |

## Sample Code

```xml
<view class="page">
  <view class="page__section">
    <view class="page__section__content">
      <text>my.request</text>
      <text>{{JSON.stringify(response)}}</text>
      <view class="page__section__buttons">
        <button
          onTap="makeRequest"
        >{{loading ? "Loading..." : "Query"}}</button>
        <button onTap="clear">Clear</button>
      </view>
    </view>
  </view>
</view>
```

```js
Page({
  data: {
    response: {},
    loading: false
  },
  makeRequest() {
    this.setData({ loading: true });
    my.request({
      url: 'https://httpbin.org/post',
      method: 'POST',
      success: (response) => {
        this.setData({ response, loading: false });
      }
    });
  },
  clear() {
    this.setData({ response: {} });
  }
});
```

## Return value

API trả về network request task. Bạn có thể thực hiện huỷ việc gọi network thông qua network request task.

```js
const task = my.request({ url: 'https://tiki.vn/api' });
task.abort();
```
