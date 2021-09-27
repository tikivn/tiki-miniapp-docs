---
title: my.saveImage
---

## Giới thiệu

**my.saveImage** là API dùng để lưu 1 remote image vào gallery của thiết bị di động.

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                     |
| ---------- | ------------ | :------: | ----------------------------------------------------------------------------------------- |
| url        | string       |    ✓     | Đường dẫn của remote image.                                                               |  |
| success    | Function     |          | Callback function khi save hình ảnh thành công                                            |
| fail       | Function     |          | Callback function khi save image bất thành                                                |
| complete   | Function     |          | Callback function khi gọi API hoàn tất bất kể việc save hình ảnh thành công hay thất bại. |
 
**Lưu ý**: 

- Image sẽ được lưu vào album `Tiki-Miniapp`
- Không hỗ trợ đường dẫn base64.

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

:::
abc
:::


1. Truy cập vào Seller Center.
2. Sidebar menu >> Sản phẩm >> Tạo mới / đăng sản phẩm. Trên trang **Tạo mới / đăng sản phẩm**, bấm nút Bắt đầu trong phần **Tạo Mới Sản Phẩm**.
3. Trên trang **Tạo Sản Phẩm**, điền thông tin sản phẩm vào biểu mẫu.
    - Phân 1: Thông tin chung
      - Chọn “Voucher - Dịch vụ / Tini App” từ Danh sách thả xuống **Danh mục**.
      - Chọn “Not visible individually” từ Danh sách thả xuống **Visibility**.
      - Bấm vào **Hiển thị các thông tin khác**, và chọn mức thuế VAT từ hộp thoại % VAT (thuế).
    - Phần 3: Vận hành & các lựa chọn.  
4. Sau khi điền đầy đủ thông tin, bấm nút **Tạo và bật bán**. Thông tin sản phẩm sẽ được gửi đến Tiki để xét duyệt


:::tip
Phần 1: Thông tin chung

- Chọn “Voucher - Dịch vụ / Tini App” từ Danh sách thả xuống **Danh mục**.
- Chọn “Not visible individually” từ Danh sách thả xuống **Visibility**.
- Bấm vào **Hiển thị các thông tin khác**, và chọn mức thuế VAT từ hộp thoại % VAT (thuế).

Phần 3: Vận hành & các lựa chọn.

- Chọn “E-Delivery - Giao hàng điện tử” từ danh sách thả xuống Mô hình vận hành.
:::