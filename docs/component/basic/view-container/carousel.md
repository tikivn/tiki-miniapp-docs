---
title: carousel
sidebar_custom_props:
  description: Container component cho phép bạn tổ chức các phần tử theo dạng băng chuyền
---

<img src="/img/Carousel.png" width="600px" alt="DevTools" style={{ margin: '0 auto', display: 'flex' }}/>

Thử tưởng tượng bạn phải hiển thị hàng tá hình ảnh trong một không gian hạn chế. Nếu chọn cách hiển thị tất cả cùng một lúc thì mỗi hình chỉ còn kích thước bé tí, khó lòng thu hút sự chú ý của người dùng. Thậm chí hình ảnh chi chít có thể khiến người ta rối mắt.

Carousel là một container component cho phép bạn tổ chức các phần tử hay còn gọi là item (hình ảnh, video, text, …) theo dạng băng chuyền. Mỗi lần, một hoặc vài item được hiển thị. Người dùng có thể trượt (slide) qua trái/ phải đối với carousel ngang, hoặc trượt lên/ xuống đối với carousel đứng để (tuần tự) xem những item khác. Ngoài ra carousel còn có chế độ trượt tự động - cứ sau một khoảng thời gian, carousel sẽ mặc nhiên trượt đến item tiếp theo.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/basic/carousel/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/basic/carousel/index" />

## Cú pháp

Thẻ `<carousel>` định nghĩa một carousel.

Thẻ `<carousel-item>` định nghĩa item (phần tử) của carousel đó. `<carousel-item>` phải là thẻ con của `<carousel>`.

### Chi tiết

| Thuộc tính             | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                                                                                                                                                                                      |
| ---------------------- | ------------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| arrows                 | boolean      | false            | Hiển thị previous và next arrows                                                                                                                                                                           |
| indicator-dots         | boolean      | false            | Cho phép hiển thị dot indicator                                                                                                                                                                            |
| indicator-color        | string       | gray-20          | Màu sắc của dot indicator                                                                                                                                                                                  |
| indicator-active-color | string       | brand            | Màu sắc của dot đang được active                                                                                                                                                                           |
| active-class           | string       |                  | Thuộc tính này sẽ thêm một lớp (được định nghĩa trong TCSS) cho item đang active                                                                                                                           |
| current                | number       | 0                | Cho biết item thứ mấy của carousel đang active (được hiển thị). Các item được đánh số bắt đầu từ 0                                                                                                         |
| autoplay               | boolean      | false            | Tự động trượt qua các phần tử.                                                                                                                                                                             |
| interval               | number       | 5000             | (Đơn vị tính mili giây - ms) Thời gian hiển thị một item trước carousel khi trượt qua item tiếp theo.                                                                                                      |
| duration               | number       | 500              | (Đơn vị tính mili giây - ms) Thời gian diễn ra hiệu ứng đổi item.                                                                                                                                          |
| vertical               | number       | false            | Carousel đứng, trượt theo chiều dọc. Bạn cần khai báo chiều cao cho carousel thông qua thuộc tính `height` ở `style` hoặc `class`                                                                          |
| circular               | boolean      | false            | Quy định carousel trượt xoay vòng. Ví dụ carousel có 10 item và `circular="true"`. Nếu trượt theo chiều xuôi, hết item 9, sẽ quay lại item 0. Nếu trượt theo chiều ngược, hết item 0 sẽ chuyển đến item 9. |
| disable-touch          | boolean      | false            | Cho phép user có thể touch được vào carousel để lướt hay không                                                                                                                                             |
| spacing                | number       | 0                | Khoảng cách giữa các item (đơn vị tính pixel). Chỉ hỗ trợ từ version 1.74.23                                                                                                                               |
| onChange               | function     |                  | Sự kiện được kích hoạt khi trượt từ item này sang item khác., `event.detail = { current }`                                                                                                                 |

<div align="center"> ---oOo--- </div>

### Indicator dots:

<img src="/img/Carousel_Dot_Indicator.png" width="300px" alt="DevTools" style={{ margin: '0 auto', display: 'flex' }}/>

Một dãy các chấm tròn mà mỗi chấm đại diện cho một item trên carousel. Nó cho bạn biết có bao nhiêu item hết thảy trên carousel, item nào đang active; cho phép bạn nhảy đến một item bất kỳ mà ko phải trượt qua từng item trung gian.

## Sample Code

**index.txml**

```xml
<carousel
  arrows
  indicator-dots
  onChange="onChange"
>
  <carousel-item>
    <image class="w-full" mode="aspectFill" src="https://picsum.photos/714/327?random=1" />
  </carousel-item>
  <carousel-item>
    <image class="w-full" mode="aspectFill" src="https://picsum.photos/714/327?random=2" />
  </carousel-item>
  <carousel-item>
    <image class="w-full" mode="aspectFill" src="https://picsum.photos/714/327?random=3" />
  </carousel-item>
</carousel>
```

**index.js**

```js
Page({
  data: {},
  onChange(e) {
    console.log('onChange: ', e);
  }
});
```
