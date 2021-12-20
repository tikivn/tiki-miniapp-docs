---
title: Màu sắc
---

Chúng tôi sử dụng màu sắc để truyền đạt thông tin một cách trực quan, các chức năng trong trải nghiệm của chúng tôi.

## Độ tương phản
Chúng tôi tuân theo tiêu chuẩn AA của WCAG cho độ tương phản.

| Yếu tố                                           | Độ tương phản   |
|:-------------------------------------------------|:----------------|
| Chữ lớn (trên 18px hoặc 24px với Light style)    | 3:1             |
| Chữ thường                                       | 4.5:1           |

Công cụ dùng để kiểm tra độ tương phản:

- Web: [Webaim](https://webaim.org/resources/contrastchecker/)
- Figma: [Able - Friction free accessibility](https://www.figma.com/community/plugin/734693888346260052/Able-%E2%80%93-Friction-free-accessibility)

## Hệ thống màu sắc
Chúng tôi sử dụng Token cho hệ thống màu. Xem thêm về token tại [đây](https://developers.tiki.vn/docs/design/styles/design-tokens)

### Theme
Theme là hệ thống những màu được dùng để tạo ra tông màu chủ đạo của sản phẩm.
Tini có Light theme (theme màu sáng) và Dark theme (theme màu tối - đang phát triển)

| Theme       | Link                                                                                             |
|:------------|:-------------------------------------------------------------------------------------------------|
| Light       | [Figma community](https://www.figma.com/community/file/958198956095698455/Tini-design-system)    |
| Dark        | *Đang phát triển*                                                                                |

### Màu Global
Màu Global là những palette màu được tạo sẵn trong Tini design system. Tùy thuộc vào theme mà một token màu Global có thể có giá trị (mã Hex, rgb) khác nhau. Giá trị màu Global không được thay đổi

Ví dụ: Palette màu trung tính của Light theme

<img src="/img/foundation/2-color-1.png" width="360"/>

### Màu Alias
Màu Alias là những màu có mục đích, hoàn cảnh sử dụng, màu Alias có giá trị thừa hưởng từ màu Global. Giá trị màu Alias có thể thay đổi tùy thuộc vào yêu cầu của sản phẩm.

<img src="/img/foundation/1-token-6.png" width="480px"/>

#### Mục đích, hoàn cảnh sử dụng của màu Alias

| Token | Hoàn cảnh, mục đích sử dụng |
|:---|:---|
| color-alias-brand | Màu brand của sản phẩm |
| color-alias-on-brand | Màu cho các nội dung (chữ, icon, v.v.) được sử dụng trên nền có màu brand  |
| color-alias-positive | Màu mang tính tích cực |
| color-alias-on-positive | Màu cho các nội dung (chữ, icon, v.v.) được sử dụng trên nền có màu tích cực |
| color-alias-negative | Màu mang tính tiêu cực |
| color-alias-on-negative | Màu cho các nội dung (chữ, icon, v.v.) được sử dụng trên nền có màu tiêu cực |
| color-alias-theme | Màu theme chính của sản phẩm (vd Light theme thì màu trắng là màu theme chính), chủ yếu dùng cho nền (background) |
| color-alias-theme-variant | Màu theme phụ đậm hơn màu theme chính |
| color-alias-primary-on-theme | Màu chính cho các nội dung (chữ, icon, v.v.) được sử dụng trên nền có màu theme |
| color-alias-secondary-on-theme | Màu phụ cho các nội dung (chữ, icon, v.v.) được sử dụng trên nền có màu theme, nhạt hơn màu chính |
| color-alias-reverse-theme | Màu theme tương phản với màu theme chính, được sử dụng trong một số trường hợp đặc biệt. Chúng tôi không dùng Light, Dark trong tên token để tránh nhầm với Light theme, Dark theme |
| color-alias-primary-on-reverse-theme | Màu chính cho các nội dung (chữ, icon, v.v.) được sử dụng trên nền có màu theme tương phản |
| color-alias-secondary-on-reverse-theme | Màu phụ cho các nội dung (chữ, icon, v.v.) được sử dụng trên nền có màu theme tương phản |
| color-alias-disabled | Màu disabled, thường dùng cho chữ, icon |
| color-alias-disabled-variant | Màu disabled nhạt hơn, thường dùng cho nền, viền |
| color-alias-skeleton | Màu skeleton loading |
| color-alias-outline | Màu dùng cho viền |
| color-alias-outline-variant | Màu dùng cho viền |
| color-alias-outline-overlay | Màu dùng cho viền, có độ trong suốt để tệp với nền |

### Màu Component specific
Màu Component specific là màu của các thành phần cấu tạo nên một component. Giá trị của màu component specific thừa hưởng từ màu Alias nếu có thể, nếu ko có màu Alias thích hợp thì có thể thừa hưởng từ màu Global

Ví dụ về màu Component specific của một dạng button

<img src="/img/foundation/2-color-2.png" width="860"/>

