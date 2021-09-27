---
title: my.compressImage
---

**my.compressImage** là API dùng để nén nhiều ảnh (image) cùng một lúc, khiến chúng có dung lượng nhỏ hơn nhưng vẫn giữ nguyên kích thước ban đầu.

## API Params

| Thuộc tính    | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                          |
| ------------- | ------------ | :------: | ------------------------------------------------------------------------------ |
| filePaths     | String Array |    ✓     | Đường dẫn tới các tập tin ảnh cần nén                                          |
| compressLevel | Number       |          | Mức độ nén ảnh, Nhận giá trị từ 0 tới 3; mặc định là 3. Bảng chi tiết ở dưới.  |
| success       | Function     |          | Callback function khi nén ảnh thành công                                       |
| fail          | Function     |          | Callback function khi nén ảnh bất thành                                        |
| complete      | Function     |          | Callback function khi gọi API hoàn tất bất kể nén ảnh thành công hay thất bại. |

### Callback function payload

| Thuộc tính | Kiểu dữ liệu | Mô tả                                               |
| ---------- | ------------ | --------------------------------------------------- |
| filePaths  | String Array | Chứa các đường đẫn tạm thời của các ảnh đã được nén |

### Compress level

| Mức độ | Mô tả          |
| ------ | -------------- |
| 0      | Low quality    |
| 1      | Medium quality |
| 2      | High quality   |
| 3      | Không compress |

## Sample Code

```xml
<view>
  <block-header title="Usage" description="Compress image" />
  <view class="block-content">
    <image class="image-cover" src="{{tempFilePath}}" />
    <button class="button-full" onTap="onChooseImage">Choose Image</button>
  </view>
  <view class="block-content">
    <button class="button-full" disabled="{{tempFilePath === undefined}}" onTap="onCompressImage">Compress
      Image</button>
  </view>
</view>
```

```js
Page({
  data: {
    tempFilePath: undefined,
    compressedFilePath: undefined,
  },
  onChooseImage() {
    my.chooseImage({
      count: 1,
      success: (res) => {
        console.log(res);
        this.setData({
          tempFilePath: res.filePaths[0],
        });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  onCompressImage() {
    my.compressImage({
      filePaths: [this.data.tempFilePath],
      compressLevel: 0,
      success: (res) => {
        console.log(res);
        my.alert({
          title: "Compressed",
          content: `File path ${res.filePaths}`,
        });
        this.setData({
          compressedFilePath: res.filePaths[0],
        });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
});
```
