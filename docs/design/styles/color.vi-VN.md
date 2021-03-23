---
order: 31
category: Thiết kế chung
title: Màu sắc
---
Chúng tôi sử dụng màu sắc để truyền đạt thông tin một cách trực quan, các chức năng trong trải nghiệm của chúng tôi.

## Hệ thống màu của Tiny

Hệ thống màu bao gồm những thành phần màu như sau

- Màu chính (màu thương hiệu của ứng dụng) thường dành cho những yếu tố cần bắt mắt như hệ thống nút, thanh điều hướng.
- Màu phụ, như là màu sắc cho nền, chữ, icon và các trạng thái trong thiết kế

Các màu sắc đều có thể tùy chỉnh dựa theo ý đồ thiết kế của bạn.

```__react
import {Color} from '../../../theme/template/Design';
import vi from '../../../theme/template/Design/Color/global-vi';
import en from '../../../theme/template/Design/Color/global-en';
ReactDOM.render(<Color color={{ name: 'gray', count: 13 }} en={en} vi={vi} direction="horizontal" />, mountNode);
```

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

```__react
import {Color} from '../../../theme/template/Design';
import vi from '../../../theme/template/Design/Color/text-vi';
import en from '../../../theme/template/Design/Color/text-en';
ReactDOM.render(<Color color={{ name: 'gray', count: 13 }} en={en} vi={vi} direction="horizontal" />, mountNode);
```

### Màu của icon

```__react
import {Color} from '../../../theme/template/Design';
import vi from '../../../theme/template/Design/Color/icon-vi';
import en from '../../../theme/template/Design/Color/icon-en';
ReactDOM.render(<Color color={{ name: 'gray', count: 13 }} en={en} vi={vi} direction="horizontal" />, mountNode);
```

### Màu của viền

```__react
import {Color} from '../../../theme/template/Design';
import vi from '../../../theme/template/Design/Color/border-vi';
import en from '../../../theme/template/Design/Color/border-en';
ReactDOM.render(<Color color={{ name: 'gray', count: 13 }} en={en} vi={vi} direction="horizontal" />, mountNode);
```

### Màu của nền

```__react
import {Color} from '../../../theme/template/Design';
import vi from '../../../theme/template/Design/Color/background-vi';
import en from '../../../theme/template/Design/Color/background-en';
ReactDOM.render(<Color color={{ name: 'gray', count: 13 }} en={en} vi={vi} direction="horizontal" />, mountNode);
```

