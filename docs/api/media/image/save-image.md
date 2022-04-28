---
title: my.saveImage
---

`my.saveImage` là API dùng để lưu 1 remote image vào gallery của thiết bị di động.

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                     |
| ---------- | ------------ | :------: | ----------------------------------------------------------------------------------------- |
| url        | string       |    ✓     | Đường dẫn của remote image.                                                               |  |
| success    | Function     |          | Callback function khi save hình ảnh thành công                                            |
| fail       | Function     |          | Callback function khi save image bất thành                                                |
| complete   | Function     |          | Callback function khi gọi API hoàn tất bất kể việc save hình ảnh thành công hay thất bại. |
 
:::note Lưu ý

- Image sẽ được lưu vào album `Tiki-Miniapp`.
- Không hỗ trợ đường dẫn base64.

:::

## Sample Code

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
