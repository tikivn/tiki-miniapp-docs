---
title: ad
sidebar_custom_props:
  description: Component dùng để hiển thị quảng cáo dạng banner ngang
---

Banner Ad là component dùng để hiển thị quảng cáo dạng banner ngang.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/advance/ads/banner-ad/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/advance/ads/banner-ad/index" />

## Thuộc tính

| Thuộc tính | Kiểu dữ liệu | Mô tả                    |
| ---------- | ------------ | ------------------------ |
| className  | string       | Thêm class cho component |
| id         | string       | id của component         |

## Sample Code:

javascript code dưới đây được sử dụng cho tất cả các component demo,

:::note Lưu ý

Code dưới đây chỉ được dùng cho mục đích tham khảo và không phải là best practice,

:::

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
