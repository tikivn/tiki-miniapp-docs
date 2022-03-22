---
title: my.getCart
---

`my.getCart` là API trả về tổng sản phẩm đang có trong giỏ hàng (cart) của Tiki.

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                   |
| ---------- | ------------ | :------: | ----------------------------------------------------------------------- |
| success    | Function     |          | Callback function khi get cart được thực hiện thành công                |
| fail       | Function     |          | Callback function khi get cart thất bại, argument sẽ là error message   |
| complete   | Function     |          | Callback function khi get cart kết thúc cho dù thành công hay thất bại. |

### Giá trị trong success callback

| Thuộc tính | Kiểu dữ liệu | Mô tả                          |
| ---------- | ------------ | ------------------------------ |
| total      | number       | Tổng sản phẩm                  |
| items      | array        | Danh sách sản phẩm (tối đa 30) |

## Sample Code

```xml title=index.txml
<view>
  <block-header title="Usage" description="Get Cart" />
  <view class="block-content">
    <button style="width: 100%;" onTap="onGetCart">
      Get Cart
    </button>
  </view>
</view>
```

```js title=index.js
Page({
  onGetCart() {
    my.getCart({
      success: (res) => {
        console.log(res);
        my.alert({
          title: 'Total number of items',
          content: res.total
        });
      },
      fail: (res) => {
        console.log(res);
      }
    });
  }
});
```
