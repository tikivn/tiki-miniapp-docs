---
title: cashback
sidebar_custom_props:
  description: Component cho phép hiển thị số Astra được hoàn khi mua sản phẩm trên Tiki
---

**_Khả dụng_**: chỉ hỗ trợ từ phiên bản framework 1.104.8 trở lên.

**_Lưu ý_**: Component này đang trong giai đoạn phát triển, nên sẽ có hạn chế về app được sử dụng. Nếu bạn có nhu cầu dùng, hãy liên hệ với team Tini App để có thêm thông tin nhé.

## Thuộc tính

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                                                                                                                              |
| ---------- | ------------ | :------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| product-id | string       |    ✓     | Id của sản phẩm. Bạn có thể lấy được từ link chi tiết sản phẩm của Tiki. Ví dụ với link https://tiki.vn/apple-iphone-12-hang-chinh-hang-p123345348.html?spid=70766425, thì product id là 123345348 |

:::

## Sample Code

```xml title=index.txml
  <cashback product-id="{{productId}}" />
```
