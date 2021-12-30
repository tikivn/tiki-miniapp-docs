---
title: Font chữ

description: Quy định font chữ trong thiết kế giao diện Tiki mini app
---

## Typeface

Chúng tôi chọn [bộ font Inter](https://fonts.google.com/specimen/Inter?preview.text_type=custom) để thiết lập hệ thống phân cấp thông qua phong cách, trọng lượng để hỗ trợ giao tiếp có chủ ý cho tất cả các nền tảng.


## Kích thước

| Token              | Font size | Usages               |
| :----------------- | :-------- | :------------------- |
| font-size-5x-large | 48px      | Header               |
| font-size-4x-large | 32px      | Header               |
| font-size-3x-large | 28px      | Header               |
| font-size-2x-large | 24px      | Header               |
| font-size-x-large  | 20px      | Header, body text    |
| font-size-large    | 18px      | Header, body text    |
| font-size-medium   | 16px      | Body text            |
| font-size-base     | 14px      | Body text            |
| font-size-small    | 12px      | Description, caption |
| font-size-x-small  | 10px      | Description, caption |


## Chiều cao

| Token               | Line height |
| :------------------ | :---------- |
| font-height-default | 1.5         |


## Độ dày

Trong hầu hết các trường hợp, chỉ cần Regular 400 và Medium 500 là đủ. Trong trường hợp có thông tin quan trọng, Bold 700 có thể được sử dụng.

| Token               | Font weight |
| :------------------ | :---------- |
| font-weight-black   | Black 900   |
| font-weight-bold    | Bold 700    |
| font-weight-medium  | Medium 500  |
| font-weight-regular | Regular 400 |
| font-weight-light   | Light 300   |
| font-weight-thin    | Thin 100    |

## Thể loại

| Token                    | Style             |
| :----------------------- | :---------------- |
| font-style-normal        | Normal            |
| font-style-underline     | <u>Underline</u>  |
| font-style-strikethrough | ~~Strikethrough~~ |

## Cách dùng

### Viết hoa chữ cái đầu câu

Viết hoa chữ cái đầu câu cho mọi yếu tố có chữ, chỉ dùng viết hoa các chữ cái đầu mỗi từ trong trường hợp tên riêng, hạn chế dùng viết hoa tất cả.

<img src="/img/foundation/3-typo-1.png" width="860"/>

### Sử dụng đúng đơn vị tiền tệ của Việt Nam (₫)
- Có khoảng cách giữa ₫ và số tiền
- Không sử dụng bằng cách gõ chữ đ, hoặc gõ chữ đ thêm gạch dưới (<u>đ</u>)

<img src="/img/foundation/3-typo-2.png" width="860"/>

### Cách viết số thập phân

- Dùng dấy phẩy để chia tách phần thập phân và phần nguyên. Ví dụ: 0,5
- Dùng dấy chấm để tách đơn vị ngàn. Ví dụ: 5.000.000 (năm triệu)

<img src="/img/foundation/3-typo-3.png" width="860"/>

### Cách viết ngày, tháng, giờ

- Ngày: **DD/MM/YYYY**. Ví dụ: 20/04/2020
- Giờ: **hh:mm**, 24 giờ (không có AM, PM)

<img src="/img/foundation/3-typo-4.png" width="860"/>
