---
title: Install
---

Để cài đặt `tini-style`, bạn sử dụng

```bash
$> yarn add @tiki.vn/tini-style
```

Sau đó, trong file `app.tcss`, bạn cần import style từ tini-style vô

```css
// app.tcss
@import '@tiki.vn/tini-style/es/index.tcss';
```

Thay vì import tất cả các utilities, bạn cũng có thể xác định cụ thể utilities mà mình muốn sử dụng.

VD: nếu muốn chỉ sử dụng các utilities về typography, bạn có thể import như sau

```css
// app.tcss
@import '@tiki.vn/tini-style/es/typography/font-size.tcss';
@import '@tiki.vn/tini-style/es/typography/font-weight.tcss';
@import '@tiki.vn/tini-style/es/typography/font-style.tcss';
@import '@tiki.vn/tini-style/es/typography/text-align.tcss';
@import '@tiki.vn/tini-style/es/typography/text-color.tcss';
@import '@tiki.vn/tini-style/es/typography/text-overflow.tcss';
@import '@tiki.vn/tini-style/es/typography/word-break.tcss';
```
