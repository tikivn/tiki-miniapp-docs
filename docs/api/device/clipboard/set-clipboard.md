---
title: my.setClipboard
sidebar_custom_props:
  description: Dùng để đưa dữ liệu vào clipboard của thiết bị
---

`my.setClipboard` là API dùng để đưa dữ liệu vào clipboard của thiết bị.

**_Khả dụng_**: Hỗ trợ từ version 1.79.1 trở lên.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/clipboard/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/clipboard/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                      |
| ---------- | ------------ | :------: | ------------------------------------------------------------------------------------------ |
| text       | string       |    ✓     | Dữ liệu cần đưa vào clipboard                                                              |
| success    | Function     |          | Callback function khi đưa dữ liệu vào clipboard thành công.                                |
| fail       | Function     |          | Callback function khi việc đưa dữ liệu vào clipboard bất thành.                            |
| complete   | Function     |          | Callback function khi việc dữ liệu vào clipboard hoàn tất bất kể thành công hay thất bại . |

## Sample Code

```js title=index.js
Page({
  data: {
    text: undefined
  },
  textChange(e) {
    this.setData({
      text: e.detail.value
    });
  },
  onSetClipboard() {
    my.setClipboard({
      text: this.data.text,
      success: (res) => {
        my.alert({ title: 'Success' });
      },
      fail: (e) => {
        my.alert({ title: 'error', content: JSON.stringify(e) });
      }
    });
  },
  onGetClipboard() {
    my.getClipboard({
      success: (res) => {
        my.alert({ title: 'Success', content: res.text });
      },
      fail: (e) => {
        my.alert({ title: 'error', content: JSON.stringify(e) });
      }
    });
  }
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
