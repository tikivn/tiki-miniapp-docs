---
title: my.compressImage
---

## Giới thiệu

**my.compressImage** là API dùng để compress nhiều images 1 lúc để có dung lượng nhỏ hơn nhưng vẫn giữ nguyên kích thước gốc.

## Sử dụng

### Sample Code

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

### API Params

Các thuộc tính:

| Attributes | Type             | Required | Description                                                                    |
| ---------- | --------         | -------- | ------------------------------------------------------------------------------ |
| filePaths  | String Array     | Yes      |  Đường dẫn tới các files image cần compress                                    |
| compressLevel  | Number    | No      |  Mức độ compress từ 0 tới 3. Mặc định là 3. Tham khảo bảng chi tiết mức độ compress ở dưới.                                    |
| success    | Function         | No       | Callback function khi compress image được thực hiện thành công                     |
| fail       | Function         | No       | Callback function khi compress image thất bại                                      |
| complete   | Function         | No       | Callback function khi việc compress image kết thúc cho dù thành công hay thất bại. |

### Callback function payload

| Attributes | Type   | Description                |
| ---------- | ------ | -------------------------- |
| filePaths  | String Array  | List các đường đẫn tạm thời của các images đã được compress xong |

### Compress level

| Level | Description                |
| ----- | -------------------------- |
| 0     | Low quality                |
| 1     | Medium quality             |                                         
| 2     | High quality               |    
| 3     | Không compress             |

