---
title: text
---

Thẻ text dùng để hiển thị nội dung văn bản, và phải nằm trong các thẻ component khác. Thẻ text có những đặc điểm như sau:

- Có thể đặt lồng vào nhau.
- Hỗ trợ styling.
- Các thẻ text gần nhau được trình bày trên cùng một hàng. Nếu muốn xuống hàng, bạn có thể dùng \n.

## Thuộc tính

| Thuộc tính      | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                                                                                                               |
| --------------- | ------------ | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| selectable      | boolean      | false            | Có cho phép người dùng select text không.                                                                                           |
| space           | string       |                  | Kích thước khoảng trắng. Nhận các giá trị = [ nbsp \|\| ensp \|\| emsp ]                                                            |
| decode          | boolean      | false            | Có decode text hay không.                                                                                                           |
| number-of-lines | number       |                  | Số dòng tối đa mà text có thể hiển thị. Phần nội dung dư ra sẽ được đại diện bằng dấu ba chấm (…). Nhận giá trị lớn hơn hay bằng 1. |

### Space

| Giá trị | Mô tả                                                                             |
| ------- | --------------------------------------------------------------------------------- |
| nbsp    | Khoảng trắng có kích thước theo font quy định.                                    |
| ensp    | Viết tắt của en space. Khoảng trắng có kích thước bằng phân nửa chiều ngang ký tự |
| emsp    | Viết tắt của em space. Khoảng trắng có kích thước bằng chiều ngang ký tự.         |

## Sample code

```xml
<view class="page">
  <view class="text-view">
    <text>{{text}}</text>
  </view>
</view>
```

```js
Page({
  data: {
    text: 'Hello Tini App',
  },
})
```