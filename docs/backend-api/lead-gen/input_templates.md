---
title: Danh sách input template
---

## Giới thiệu

Tùy thuộc vào mỗi ứng dụng, Tini App sẽ yêu cầu các dữ liệu của hồ sơ được gửi kèm khác nhau, thông qua các template khác nhau.

## Danh sách template

_Lưu ý: hiện tại chỉ có hai template_

### Template 1

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                        |
| ---------- | ------------ | :------: | ---------------------------- |
| name       | string       |    ✓     | Tên của khách hàng           |
| phone      | string       |    ✓     | Số điện thoại của khách hàng |
| address    | string       |    ✓     | Địa chỉ của khách hàng       |

## Ví dụ

Ứng dụng "app.test" được yêu cầu gửi dữ liệu của hồ sơ theo Template 1, thì API request sẽ là:

```
{"customer_id":"333","inputs":"{\"name\":\"John\",\"phone\":\"090123443\",\"address\":\"101 Nguyen Van Cu\"}"}
```

Lưu ý giá trị của params `inputs` là một JSON string

### Template 2

| Thuộc tính      | Kiểu dữ liệu | Bắt buộc | Mô tả                        |
| --------------- | ------------ | :------: | ---------------------------- |
| name            | string       |    ✓     | Tên của khách hàng           |
| phone           | string       |    ✓     | Số điện thoại của khách hàng |
| identity_number | string       |    ✓     | Số CMND/CCCD                 |

## Ví dụ

Ứng dụng "app.test" được yêu cầu gửi dữ liệu của hồ sơ theo Template 2, thì API request sẽ là:

```
{"customer_id":"333","inputs":"{\"name\":\"John\",\"phone\":\"090123443\",\"identity_number\":\"024591111\"}"}
```

Lưu ý giá trị của params `inputs` là một JSON string

### Template 3

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                        |
| ---------- | ------------ | :------: | ---------------------------- |
| email      | string       |    ✓     | Email của khách hàng         |
| phone      | string       |    ✓     | Số điện thoại của khách hàng |

## Ví dụ

Ứng dụng "app.test" được yêu cầu gửi dữ liệu của hồ sơ theo Template 3, thì API request sẽ là:

```
{"customer_id":"333","inputs":"{\"email\":\"john@gmail.com\",\"phone\":\"090123443\"}"}
```

Lưu ý giá trị của params `inputs` là một JSON string