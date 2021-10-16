---
title: my.makePhoneCall
---

## Giới thiệu

- **my.makePhoneCall** là API dùng để gọi tới 1 số điện thoại.
- Chỉ hỗ trợ từ version 1.77.1 trở lên

## Sử dụng

### Sample Code

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

### API Params

Các thuộc tính:

| Attributes | Type     | Required |Description                                                                          |
| ---------- | -------- | -------- | ----------------------------------------------------------------------------------- |
| number    | Function  |     √    | Số điện thoại cần gọi                                                           |
| success    | Function |          | Callback khi việc lấy clipboard thành công                                      |
| fail       | Function |          | Callback khi việc lấy clipboard thất bại                                        |
| complete   | Function |          | Callback khi việc lấy clipboard thành công hoặc thất bại                        |

### Callback function payload

### Callback function payload

* Fail callback payload 

| Attributes   | Type     |  Description              |
| ----------   | -------- | ------------------------- |
| error        | string   | error title               |
| errorMessage | string   | error message in detail   |