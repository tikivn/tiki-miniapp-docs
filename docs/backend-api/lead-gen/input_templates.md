---
title: Danh sách input template
---

## Giới thiệu

Tùy thuộc vào mỗi ứng dụng, Tini App sẽ yêu cầu các dữ liệu của hồ sơ được gửi kèm khác nhau, thông qua các template khác nhau.

## Danh sách template

_Lưu ý: hiện tại chỉ có một template duy nhất_

### Template 1

| Attributes | Type   | Required | Description                  |
| ---------- | ------ | -------- | ---------------------------- |
| name       | string | yes      | tên của khách hàng           |
| phone      | string | yes      | số điện thoại của khách hàng |
| address    | string | yes      | địa chỉ của khách hàng       |

## Ví dụ

Ứng dụng "app.test" được yêu cầu gửi dữ liệu của hồ sơ theo Template 1, thì API request sẽ là:

```
{"customer_id":"333","inputs":"{\"name\":\"John\",\"phone\":\"090123443\",\"address\":\"101 Nguyen Van Cu\"}"}
```

Lưu ý giá trị của params `inputs` là một JSON string
