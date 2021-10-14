---
title: my.request
---

`my.request` là API dùng để thực hiện các network request. Hiện chỉ hỗ trợ những request qua giao thức **https**.

Ứng dụng của bạn sẽ được chạy trong môi trường cô lập thuần javascript nên sẽ không có các hàm gọi network thông thường như `fetch` hay `XMLHttpRequest`. Để thực hiện gọi network bạn phải dùng đến `my.request`.

***Quan trọng***: Bạn cần phải thêm tên miền trong phần **Cài đặt chung** của ứng dụng trên Dev Center trước khi sử dụng các Networking API và Webview. Xem phần hướng dẫn [tại đây](/docs/backend-api/overview#tên-miền).

## API Params

Để cấu hình việc gọi network, bạn cần truyền object với các thuộc tính sau:

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                                |
| ---------- | ------------ | :------: | ---------------------------------------------------------------------------------------------------- |
| url        | string       |    ✓     | Đường dẫn muốn gọi tới.                                                                              |
| headers    | object       |          | Cấu hình headers khi thực hiện gọi network.                                                          |
| method     | string       |          | Phương thức gọi network. Mặc định sẽ là GET.                                                         |
| data       | object       |          | Data kèm theo trong request.                                                                         |
| timeout    | Number       |          | Request sẽ bị cancel sau khoảng thời gian timeout. Đơn vị là ms và mặc định là 30,000 (30s)          |
| dataType   | string       |          | Quy định format trả về sau request. Mặc định là JSON. Bạn có thể truyền text nếu muốn nhận raw data. |
| success    | Function     |          | Callback function khi việc gọi network thành công.                                                   |
| fail       | Function     |          | Callback function khi việc gọi network thất bại.                                                     |
| complete   | Function     |          | Callback function khi việc gọi network kết thúc cho dù thành công hay thất bại.                      |

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
const task = my.reuqest({ url: 'https://tiki.vn/api' });
task.abort();
```
