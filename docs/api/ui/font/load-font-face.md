---
title: my.loadFontFace
---

`my.loadFontFace` là API để load 1 web font.

***Khả dụng***:Hỗ trợ từ version 1.89.5 trở lên. 

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/load-font-face/index" />

:::note Lưu ý

- Đường dẫn của font phải là đường dẫn có thể download được.
- Trên ios chỉ support đường dẫn https
- Chỉ support woff, otf, ttf, sfnt fonts.

:::

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                  |
| ---------- | ------------ | :------: | ---------------------------------------------------------------------- |
| family  | string       |        √  | Tên font
| source   | string       |       √   | Đường dẫn của font
| desc   | String       |          |  Thuộc tính của font
| success    | Function     |          | Callback function khi load font thành công.                                 |
| fail       | Function     |          | Callback function khi việc load font bất thành.                         |
| complete   | Function     |          | Callback function khi gọi API hoàn tất bất kể thành công hay thất bại. |

### desc params

| Thuộc tính | Kiểu dữ liệu |  Mô tả                                                                  |
| ---------- | ------------ |  ---------------------------------------------------------------------- |
| style  | string       |   Style của font, mặc định là normal. Các giá trị normal/italic/oblique
| weight   | string       | Font weight, mặc định là normal. Các giá trị normal/bold/100/200../900
| variant   | String       | Thiết lập việc có chuyển các "ký tự in thường" trong văn bản sang dạng "ký tự in hoa" hay không. Mặc định là normal. Các giá trị normal/small-caps/inherit. |
## Sample Code

```xml title=index.txml
<view>
  <block-header title="Usage" description="Load font face" />
  <view class="block-content">
    <button class="button-full" onTap="onLoadFontFace">Get Font Face</button>
    <text class="test-font">Text after loaded font</text>
  </view>
</view>
```


```js title=index.js
Page({
  onLoadFontFace() {
    my.loadFontFace({
      family: 'Pacifico Regular',
      source: "url('https://sungd.github.io/Pacifico.ttf')",
      success: (res) => {
        my.showAlert({ content: 'Font is load successful' });
      },
      fail: (res) => {
        my.showAlert({ title: JSON.stringify(res) });
      },
    });
  },
});
```

