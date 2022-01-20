---
title: Banner Ad
---

## Giới thiệu

Banner Ad là component dùng để hiển thị quảng cáo dạng banner ngang

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/advance/ads/banner-ad/index" />

## Sử dụng

### Sample Code:
javascript code dưới đây được sử dụng cho tất cả các component demo,
_**lưu ý đây không phải là best practise, nên sử dụng để tham khảo.**_

Sử dụng ad ở txml
```xml
<ad class="banner-ad" />
```

Simple style cho ad
```css
.banner-ad {
 width: 90%;
 margin-left: 5%;
}

```

- **Kết quả**

<div style={{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    widht:'100%',
    background:'#f2f4f5',
    padding:'24px',
    borderRadius:'4px'
  }}>
  <div>
      <img style={{maxWidth: 300}} alt="modal" src="/img/banner-ad.png"/>
  </div>
</div>

### Chi tiết props

| Thuộc tính   | Kiểu dữ liệu    | Giá trị mặc định |  Mô tả                  |
| ------------ | --------------- | ---------------- | ----------------------- |
| className    | string          |                  | Thêm class cho component                   |
| id           | string          |                  | id của component        |
