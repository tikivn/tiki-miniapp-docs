---
title: Màu sắc
---

Chúng tôi sử dụng màu sắc để truyền đạt thông tin một cách trực quan, các chức năng trong trải nghiệm của chúng tôi.

## Hệ thống màu của Tiny

Hệ thống màu bao gồm những thành phần màu như sau

- Màu chính (màu thương hiệu của ứng dụng) thường dành cho những yếu tố cần bắt mắt như hệ thống nút, thanh điều hướng.
- Màu phụ, như là màu sắc cho nền, chữ, icon và các trạng thái trong thiết kế

Các màu sắc đều có thể tùy chỉnh dựa theo ý đồ thiết kế của bạn.

import {Color} from '../../../src/components/Design';
import vi from '../../../src/components/Design/Color/global-vi';
import en from '../../../src/components/Design/Color/global-en';
import ReactTooltip from "react-tooltip";

<Color color={{ name: 'gray', count: 13 }} en={en} vi={vi} direction="horizontal" />
<ReactTooltip />

## Khả năng sử dụng

Sử dụng các dạng tương phản khác nhau là điều quan trọng nhất cần cân nhắc khi đưa ra lựa chọn màu sắc và giao diện thân thiện với người dùng. Nhận thức về các tiêu chuẩn và thực hành tốt nhất là chìa khóa để lựa chọn màu sắc dễ tiếp cận.

Các màu trong mỗi bảng màu chứa mười giá trị được đánh số từ 10 đến 100. Trắng và Đen nằm ngoài các giá trị đó.

Đáp ứng các yêu cầu của WCAG AA để có độ tương phản tối thiểu.

- Văn bản màu xám đen theo quy chuẩn của WCAG AA nằm trong vùng màu từ 10 đến 50. Văn bản màu trắng nằm trên mảng có vùng màu từ 60 đến 100.
- Văn bản nhỏ dưới 24px phải có tỷ lệ tương phản là 4.5:1.
- Văn bản lớn trên 24px phải có tỷ lệ tương phản là 3:1.

## Color tokens

Các color tokens là một phần nền tảng trong hệ thống thiết kế của Tiny.

### Màu của văn bản

import textVi from '../../../src/components/Design/Color/text-vi';
import textEn from '../../../src/components/Design/Color/text-en';

<Color color={{ name: 'gray', count: 13 }} en={textEn} vi={textVi} direction="horizontal" />

### Màu của icon

import iconVi from '../../../src/components/Design/Color/icon-vi';
import iconEn from '../../../src/components/Design/Color/icon-en';

<Color color={{ name: 'gray', count: 13 }} en={iconEn} vi={iconVi} direction="horizontal" />

### Màu của viền

import borderVi from '../../../src/components/Design/Color/border-vi';
import borderEn from '../../../src/components/Design/Color/border-en';

<Color color={{ name: 'gray', count: 13 }} en={borderEn} vi={borderVi} direction="horizontal" />

### Màu của nền

import backgroundVi from '../../../src/components/Design/Color/background-vi';
import backgroundEn from '../../../src/components/Design/Color/background-en';

<Color color={{ name: 'gray', count: 13 }} en={backgroundEn} vi={backgroundVi} direction="horizontal" />
