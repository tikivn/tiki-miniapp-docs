---
title: Token
---

## Token là gì?

Token là ngôn ngữ chung giữa designer và developer. Token là một hệ thống quy chuẩn tất cả các yếu tố cơ bản cấu thành một thiết kế như màu sắc, font chữ, khoảng cách, v.v. Mỗi token ngoài việc điều chỉnh một giá trị tương ứng mà nó còn thể hiện mối quan hệ với các token khác thông qua việc đặt tên token.

<img src="/img/foundation/1-token-1.png" width="560px"/>

## Các loại token

### Global

Global token là những token cơ bản nhất, giá trị của một Global token là đơn vị cơ bản của một yếu tố thiết kế, ví dụ đối với màu sắc là mã hex, mã rgb; đối với font chữ hay khoảng cách là pixel.

<img src="/img/foundation/1-token-2.png" width="560px"/>

### Alias

Alias token là những token thể hiện cách sử dụng, mục đích sử dụng, v.v., của một yếu tố thiết kế. Giá trị của Alias token thường là thừa hưởng từ Global token.

<img src="/img/foundation/1-token-3.png" width="560px"/>

### Component specific

Component specific token là token quy định những thành phần cấu tạo thành một component, ví dụ button là gồm có 2 phần background và label, thì background sẽ có token với giá trị riêng và tương tự với label, cũng sẽ có token riêng. Giá trị của Component specific token sẽ thưà hưởng từ Alias token nếu có thể, còn không thì thừa hưởng từ Global token.

<img src="/img/foundation/1-token-4.png" width="560px"/>

## Tại sao nên dùng token?

### Đồng nhất

Token giúp cho Design system trở nên đồng nhất, đảm bảo một component giữ được sự đồng nhất ở các thiết kế khác nhau trong cùng một hệ thống. Đồng thời nó cũng giúp cho việc bảo trì, cập nhật nhanh và chính xác.

<img src="/img/foundation/1-token-5.png" width="560px"/>

### Khả năng mở rộng

Giá trị của token có thể thay đổi nên tăng khả năng mở rộng của design system cũng như sản phẩm

### Linh hoạt

Như trên đã nói, giá trị của token có thể thay đổi tùy vào từng sản phẩm cụ thể, làm cho Design system được áp dụng một cách linh hoạt cho dù sản phẩm có những thuộc tính khác với Design system, ví dụ màu brand của Tini Design System là màu xanh nhưng bạn có thể thay đổi thành màu thuộc brand của bạn bằng cách đổi giá trị của token color-alias-brand

<img src="/img/foundation/1-token-6.png" width="560px"/>

## Cách dùng token

### Không lấy token của component này thay cho component khác

<img src="/img/foundation/1-token-7.png" width="720px"/>

### Dùng Alias token đúng với chức năng của nó

<img src="/img/foundation/1-token-8.png" width="720px"/>

### Dùng Global token khi không có Alias token hay Component specific token

<img src="/img/foundation/1-token-9.png" width="720px"/>

## Cấu tạo token

### Chung

<img src="/img/foundation/1-token-10.png" width="560x"/>

1: Yếu tố thiết kế. Vd: Màu sắc, khoảng cách, font chữ,v.v.

2: Chi tiết token. Tùy loại token mà phần chi tiết sẽ có cấu trúc khác nhau

### Màu sắc

#### Global token

<img src="/img/foundation/1-token-11.png" width="360x"/>


1: Loại token: Global

2: Tên màu

#### Alias token

<img src="/img/foundation/1-token-12.png" width="560x"/>


1: Loại token: Alias

2: Hoàn cảnh, mục đích, đối tượng sử dụng


#### Component specific token

<img src="/img/foundation/1-token-13.png" width="560x"/>


1: Tên component

2: Các thuộc tính của component. Các thuộc tính của component bao gồm phân cấp, thành phần, trạng thái, v.v.


### Font chữ

Các cả các token về font chữ là loại Global token

<img src="/img/foundation/1-token-14.png" width="360x"/>


1: Thuộc tính của font chữ

2: Giá trị

### Khoảng cách 

Các cả các token về khoảng cách là loại Global token

<img src="/img/foundation/1-token-15.png" width="360x"/>


1: Loại khoảng cách

2: Đơn vị

### Góc bo

Các cả các token về góc bo là loại Global token

<img src="/img/foundation/1-token-16.png" width="360x"/>


1: Loại góc bo

2: Giá trị (không bắt buộc)

### Hiệu ứng

Các cả các token về hiệu ứng là loại Global token

#### Đổ bóng

<img src="/img/foundation/1-token-17.png" width="360x"/>


1: Index (số càng lớn, index càng cao, vật thể có index cao nằm trên vật thể index thấp)


