---
title: my.reportAnalytics
sidebar_custom_props:
  description: Ghi nhận dữ liệu của một số sự kiện tuỳ chỉnh
---

`my.reportAnalytics` là API dùng để ghi nhận dữ liệu của một số sự kiện tuỳ chỉnh.

## Các sự kiện hỗ trợ

### purchase

Sự kiện này được ghi nhận khi khách hàng thực hiện thanh toán cho 1 hay nhiều sản phẩm / dịch vụ:

#### Parameters

| Thuộc tính | Kiểu dữ liệu | Bắt buộc |            Mô tả             |
| ---------- | ------------ | -------- | :--------------------------: |
| ecommerce  | Ecommerce    | ✓        | Chứa thông tin của đơn hàng. |

#### Ecommerce Parameters

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Ví dụ      | Mô tả                                  |
| ---------- | ------------ | :------: | ---------- | -------------------------------------- |
| order_id   | string       |    ✓     | O_12345    | Mã đơn hàng.                           |
| coupon     | string       |          | SUMMER_FUN | Mã coupon được sử dụng trong đơn hàng. |
| items      | Item[]       |          |            | Danh sách items có trong đơn hàng.     |
| shipping   | number       |          | 5000       | Phí vận chuyển của đơn hàng.           |
| tax        | number       |          | 10000      | Thuế trên đơn hàng.                    |
| value      | number       |          | 115000     | Tổng giá trị đơn hàng.                 |

#### Item Parameters

| Thuộc tính    | Kiểu dữ liệu | Bắt buộc | Ví dụ             | Mô tả                     |
| ------------- | ------------ | :------: | ----------------- | ------------------------- |
| item_id       | string       |    ✓     | SKU_12345         | Mã định danh sản phẩm.    |
| item_name     | string       |    ✓     | iPhone 12 Pro Max | Tên của sản phẩm.         |
| price         | number       |          | 50000             | Giá sản phẩm.             |
| quantity      | number       |          | 1                 | số lượng của sản phẩm đó. |
| item_brand    | string       |          | Apple             | Thương hiệu của sản phẩm. |
| item_category | string       |          | Mobile Phone      | Danh mục của sản phẩm.    |
| item_variant  | string       |          | White             | Phẩn bản của sản phẩm.    |

## Sử dụng

Ví dụ sau dùng để ghi nhận đơn hàng lên hệ thống analytics:

```js
Page({
  onLoad() {
    my.reportAnalytics('purchase', {
      ecommerce: {
        order_id: '12345',
        value: 1000,
        tax: 0,
        shipping: 0,
        coupon: 'SUMMER_SALE',
        items: [
          {
            item_name: 'Tiki T-Shirt',
            item_id: '12345',
            price: 500,
            item_brand: 'Tiki',
            item_category: 'Apparel',
            item_variant: 'Gray',
            quantity: 1
          },
          {
            item_name: 'Tini T-Shirt',
            item_id: '67890',
            price: 500,
            item_brand: 'Tiki',
            item_category: 'Apparel',
            item_variant: 'Black',
            quantity: 1
          }
        ]
      }
    });
  }
});
```

<div align="center"> ---oOo--- </div>

## refund

### Parameters

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                 |
| ---------- | ------------ | :------: | ------------------------------------- |
| ecommerce  | Ecommerce    |    ✓     | Chứa thông tin của đơn hàng muốn huỷ. |

### Ecommerce Parameters

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Ví dụ   | Mô tả               |
| ---------- | ------------ | -------- | ------- | ------------------- |
| order_id   | string       | ✓        | O_12345 | Mã đơn hàng bị huỷ. |

### Sample Code

Sự kiện dùng để ghi nhận đơn hàng bị huỷ

```js
my.reportAnalytics('refund', {
  ecommerce: {
    order_id: '12345'
  }
});
```
