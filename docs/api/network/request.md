---
order: 30
category:
  vi-VN: Network
  en-US: Network
title:
  vi-VN: my.request
  en-US: my.request
---

## Giới thiệu

**my.request** là API dùng để thực hiện các network request.

**Lưu ý:** ứng dụng của bạn sẽ được chạy trong môi trường cô lập thuần javascript nên sẽ không có các hàm gọi network thông thường như `fetch` hay `XMLHttpRequest`. Để thực hiện gọi network bạn phải dùng qua `my.request`.

### Lưu ý khi sử dụng

- `my.request` hiện chỉ hỗ trợ những request qua giao thức **https**.
- Bạn cần phải cấu hình whitelist domain trước khi có thể gọi network tới domain đó.

## Sử dụng

### Sample Code

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
    loading: false,
  },
  makeRequest() {
    this.setData({ loading: true });
    my.request({
      url: "https://httpbin.org/post",
      method: "POST",
      success: (response) => {
        this.setData({ response, loading: false });
      },
    });
  },
  clear() {
    this.setData({ response: {} });
  },
});
```

### API Params

Để cấu hình việc gọi network, bạn cần truyền object với các thuộc tính sau:

| Attributes | Type     | Required | Description                                                                                          |
| ---------- | -------- | -------- | ---------------------------------------------------------------------------------------------------- |
| url        | string   | Yes      | Đường dẫn muốn gọi tới.                                                                              |
| headers    | Object   | No       | Cấu hình headers khi thực hiện gọi network.                                                          |
| method     | String   | No       | Phương thức gọi network. Mặc định sẽ là GET.                                                         |
| data       | Object   | No       | Data kèm theo trong request.                                                                         |
| timeout    | Number   | No       | Request sẽ bị cancel sau khoảng thời gian timeout. Đơn vị là ms và mặc định là 30,000 (30s)          |
| dataType   | String   | No       | Quy định format trả về sau request. Mặc định là JSON. Bạn có thể truyền text nếu muốn nhận raw data. |
| success    | Function | No       | Callback function khi việc gọi network thành công.                                                   |
| fail       | Function | No       | Callback function khi việc gọi network thất bại.                                                     |
| complete   | Function | No       | Callback function khi việc gọi network kết thúc cho dù thành công hay thất bại.                      |

#### Callback function payload

TODO

### Return value

API trả về network request task. Bạn có thể thực hiện huỷ việc gọi network thông qua network request task.

```js
const task = my.reuqest({ url: "https://tiki.vn/api" });
task.abort();
```
