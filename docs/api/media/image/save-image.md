---
title: my.saveImage
---

## Giới thiệu

**my.saveImage** là API dùng để lưu 1 remote Image vào gallery của device

## Sử dụng

### Sample Code

```xml
<view>
  <block-header title="Usage" description="Save an image to gallery" />
  <view class="block-content">
    Input the url to download
    <input class="form-value" placeholder="URL" name="url" onInput="urlChange"></input>
  </view>
  <view class="block-content">
    <button class="button-full" onTap="onSaveImage">Save Image</button>
  </view>
</view>
```

```js
Page({
  data: {
    url: undefined,
  },
  urlChange(e) {
    this.setData({
      url: e.detail.value,
    });
  },
  onSaveImage() {
    my.saveImage({
      url: this.data.url,
      success: (res) => {
        my.alert({ title: "Saved!", content: "Check your gallery" });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
});
```

### API Params

Các thuộc tính:

| Attributes | Type             | Required | Description                                                                    |
| ---------- | --------         | -------- | ------------------------------------------------------------------------------ |
| url  | String      | Yes      |  Đường dẫn của remote image.                                   |                                 |
| success    | Function         | No       | Callback function khi save image được thực hiện thành công                     |
| fail       | Function         | No       | Callback function khi save image thất bại                                      |
| complete   | Function         | No       | Callback function khi việc save image kết thúc cho dù thành công hay thất bại. |
 
**Lưu ý**: 
* Image sẽ được lưu vào album `Tiki-Miniapp`
* Không support đường dẫn base64