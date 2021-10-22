---
title: my.makePhoneCall
---

`my.makePhoneCall` là API dùng để gọi tới 1 số điện thoại cụ thể.

***Khả dụng***: hỗ trợ từ version 1.77.1 trở lên.

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                  |
| ---------- | ------------ | :------: | ---------------------------------------------------------------------- |
| number     | number       |    ✓     | Số điện thoại cần gọi                                                  |
| success    | Function     |          | Callback function khi việc gọi điện thành công                         |
| fail       | Function     |          | Callback function khi gọi điện bất thành                               |
| complete   | Function     |          | Callback function khi hoàn tất việc gọi bất kể thành công hay thất bại |

### Callback function payload

* Fail callback payload 

| Thuộc tính   | Kiểu dữ liệu | Mô tả        |
| ------------ | ------------ | ------------ |
| error        | string       | Tên lỗi      |
| errorMessage | string       | Chi tiết lỗi |

## Sample Code

```js title=index.js
Page({
  data: {
    phone: undefined,
  },
  phoneChange(e) {
    this.setData({
      phone: e.detail.value,
    });
  },
  onPhoneCall() {
    my.makePhoneCall({
      number: this.data.phone,
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        my.alert({title: error, content: JSON.stringify(e)});
      },
    });
  },
});
```

```xml title=index.txml
<view>
  <block-header title="Usage" description="Make phone call" />
  <view class=" block-content">
    Input the number to call

  </view>
  <input class="form-value" placeholder="Phone number" name="phone" onInput="phoneChange"></input>
  <view class="block-content">
    <button class="button-full" onTap="onPhoneCall">Call</button>
  </view>
</view>
```
|