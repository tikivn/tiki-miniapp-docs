---
title: my.openNativeAppStore
---

`my.openNativeAppStore` là API dùng để truy cập đến một ứng dụng trên Apple Store hay Google Play Store.

## API Params

Các thuộc tính:

| Thuộc tính   | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                           |
| ------------ | ------------ | :------: | ----------------------------------------------------------------------------------------------- |
| appleStoreId | String       |    ✓     | App Id của ứng dụng iOS trên Apple Store cần truy cập.                                          |
| googlePlayId | String       |    ✓     | App Id của ứng dụng Android trên Google Play Store cần truy cập.                                |
| success      | Function     |          | Callback function khi truy cập đến ứng dụng trên store thành công.                              |
| fail         | Function     |          | Callback function khi truy cập đến ứng dụng trên store bất thành, argument sẽ là error message. |
| complete     | Function     |          | Callback function khi truy cập đến ứng dụng trên store kết thúc bất kể thành công hay thất bại. |

### Callback function payload

* success callback payload là 1 biến kiểu boolean và luôn mang giá trị true

* Fail callback payload

| Thuộc tính   | Kiểu dữ liệu | Mô tả        |
| ------------ | ------------ | ------------ |
| error        | string       | Tên lỗi      |
| errorMessage | string       | Chi tiết lỗi |

## Sample Code

```xml title=index.txml
<view>
  <block-header title="Usage" description="Open the Google Play/Apple Store" />
  <view class="block-content">
    <button class="button-full" onTap="onOpenNativeStore">Open Store</button>
  </view>
</view>
```

```js title=index.js
Page({
  onOpenNativeStore() {
    my.openNativeAppStore({
      googlePlayId: 'vn.tiki.app.tikiandroid',
      appleStoreId: '958100553',
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
});
```


