---
title: my.reportAnalytics
---

## Giới thiệu

**my.reportAnalytics** là API dùng để ghi nhận dữ liệu của một số sự kiện tuỳ chỉnh. 

## Sử dụng

Ví dụ sau dùng để ghi nhận đơn hàng lên hệ thống analytics:

```js
Page({
  onLoad() {
    my.reportAnalytics('purchase', {
      ecommerce: {
        'order_id': '12345',
        'value': 1000,
        'tax': 0,
        'shipping': 0,
        'coupon': 'SUMMER_SALE',
        'items': [{
          'item_name': 'Tiki T-Shirt',
          'item_id': '12345',
          'price': 500,
          'item_brand': 'Tiki',
          'item_category': 'Apparel',
          'item_variant': 'Gray',
          'quantity': 1
        }, {
          'item_name': 'Tini T-Shirt',
          'item_id': '67890',
          'price': 500,
          'item_brand': 'Tiki',
          'item_category': 'Apparel',
          'item_variant': 'Black',
          'quantity': 1
        }]
      }
    });
  }
})
```

## Các sự kiện hỗ trợ

### purchase
Sự kiện này được ghi nhận khi khách hàng thực hiện thanh toán cho 1 hay nhiều sản phẩm / dịch vụ:

#### Parameters

| Name      | Type      | Required | Example | Description                  |
| --------- | --------- | -------- | ------- | ---------------------------- |
| ecommerce | Ecommerce | Yes      |         | Chứa thông tin của đơn hàng. |

#### Ecommerce Parameters
| Name     | Type        | Required | Example    | Description                            |
| -------- | ----------- | -------- | ---------- | -------------------------------------- |
| order_id | string      | Yes      | O_12345    | Mã đơn hàng.                           |
| coupon   | string      | No       | SUMMER_FUN | Mã coupon được sử dụng trong đơn hàng. |
| items    | Array<Item> | No       |            | Danh sách items có trong đơn hàng.     |
| shipping | number      | No       | 5000       | Phí vận chuyển của đơn hàng.           |
| tax      | number      | No       | 10000      | Thuế trên đơn hàng.                    |
| value    | number      | No       | 115000     | Tổng giá trị đơn hàng.                 |

#### Item Parameters

| Name          | Type   | Required | Example           | Description                         |
| ------------- | ------ | -------- | ----------------- | ----------------------------------- |
| item_id       | string | Yes      | SKU_12345         | Mã định danh sản phẩm.              |
| item_name     | string | Yes      | iPhone 12 Pro Max | Tên của sản phẩm .                  |
| price         | number | No       | 50000             | Giá sản phẩm.                       |
| quantity      | number | No       | 1                 | Số lượng sản phẩm trong order item. |
| item_brand    | string | No       | Apple             | Thương hiệu của sản phẩm.           |
| item_category | string | No       | Mobile Phone      | Danh mục của sản phẩm.              |
| item_variant  | string | No       | White             | Phẩn bản của sản phẩm.              |

### refund

Sự kiện dùng để ghi nhận đơn hàng bị huỷ

```js
my.reportAnalytics('refund', {
  ecommerce: { 
    order_id: '12345'
  }
});
```

#### Parameters

| Name      | Type      | Required | Example | Description                           |
| --------- | --------- | -------- | ------- | ------------------------------------- |
| ecommerce | Ecommerce | Yes      |         | Chứa thông tin của đơn hàng muốn huỷ. |

#### Ecommerce Parameters

| Name     | Type   | Required | Example | Description         |
| -------- | ------ | -------- | ------- | ------------------- |
| order_id | string | Yes      | O_12345 | Mã đơn hàng bị huỷ. |
