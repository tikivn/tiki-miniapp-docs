---
title: my.setClipboard
---

## Giới thiệu

- **my.setClipboard** là API dùng để lưu string vào clipboard của device
- Chỉ hỗ trợ từ version 1.79.1 trở lên

## Sử dụng

### Sample Code

```js title=index.js
Page({
  data: {
    text: undefined,
  },
  textChange(e) {
    this.setData({
      text: e.detail.value,
    });
  },
  onSetClipboard() {
    my.setClipboard({
      text: this.data.text,
      success: (res) => {
        my.alert({ title: 'Success' });
      },
      fail: (e) => {
        my.alert({ title: "error", content: JSON.stringify(e) });
      },
    });
  },
  onGetClipboard() {
    my.getClipboard({
      success: (res) => {
        my.alert({ title: 'Success', content: res.text });
      },
      fail: (e) => {
        my.alert({ title: "error", content: JSON.stringify(e) });
      },
    });
  },
});

```

```xml title=index.txml
<view>
  <block-header title="Usage" description="Get/Set clipboard" />
  <view class="block-content">
    Input text
  </view>
  <input class="form-value" placeholder="" name="text" onInput="textChange"></input>
  <view class="block-content">
    <button class="button-full" onTap="onSetClipboard">Set Clipboard</button>
    <button class="button-full" onTap="onGetClipboard">Get Clipboard</button>
  </view>
</view>
```

### API Params

Các thuộc tính:

| Attributes | Type     | Required |Description                                                                          |
| ---------- | -------- | -------- | ----------------------------------------------------------------------------------- |
| text       | String   |      ✓   | String cần lưu vào clipboard   |
| success    | Function |          | Callback khi việc lưu vào clipboard thành công                                      |
| fail       | Function |          | Callback khi việc lưu vào clipboard thất bại                                        |
| complete   | Function |          | Callback khi việc lưu vào clipboard thành công hoặc thất bại                        |

### Callback function payload
API set clipboard không có payload trong success callback