---
title: Customize
---

Các style của `tini-style` được định nghĩa theo các Design Token của Tini UI Design System

Cụ thể là các tokens sau

## Colors

```css
:root {
  --white: #ffffff;
  --black: #000000;
  --gray10: #f5f5fa;
  --gray20: #ebebf0;
  --gray30: #dddde3;
  --gray40: #c4c4cf;
  --gray50: #a6a6b0;
  --gray60: #808089;
  --gray70: #64646d;
  --gray80: #515158;
  --gray90: #38383d;
  --gray100: #27272a;
  --black: #000000;
  --blue: #1a94ff;
  --green: #2ec275;
  --yellow: #ffc400;
  --orange: #fc820a;
  --red: #ff424f;

  /* alias */
  --background: var(--white);
  --text: #28282b;
  --brand: var(--blue);
  --success: var(--green);
  --error: var(--red);
}
```

## Typography

```css
:root {
  /* Font size */
  --font-size-5x-large: 48px;
  --font-size-4x-large: 32px;
  --font-size-3x-large: 28px;
  --font-size-2x-large: 24px;
  --font-size-x-large: 20px;
  --font-size-large: 18px;
  --font-size-medium: 16px;
  --font-size-base: 14px;
  --font-size-small: 12px;
  --font-size-x-small: 10px;

  /* Font height */
  --font-height-default: 1.5;

  /* Font weight */
  --font-weight-black: 900;
  --font-weight-bold: 700;
  --font-weight-medium: 500;
  --font-weight-regular: 400;
  --font-weight-light: 300;
  --font-weight-thin: 100;

  /* Font style */
  --font-style-normal: normal;
  --font-style-underline: underline;
  --font-style-strikethrough: line-through;
}
```

## Divider

```css
:root {
  --divider-thick: 8px;
  --divider-thin: 1px;
}
```

## Spaces

```css
:root {
  /* Stack */
  --space-stack-5x-small: 2px;
  --space-stack-4x-small: 4px;
  --space-stack-3x-small: 6px;
  --space-stack-2x-small: 8px;
  --space-stack-x-small: 10px;
  --space-stack-small: 12px;
  --space-stack-medium: 16px;
  --space-stack-large: 24px;
  --space-stack-x-large: 32px;
  --space-stack-2x-large: 48px;
  --space-stack-3x-large: 64px;
  /* Inline */
  --space-inline-5x-small: 2px;
  --space-inline-4x-small: 4px;
  --space-inline-3x-small: 6px;
  --space-inline-2x-small: 8px;
  --space-inline-x-small: 10px;
  --space-inline-small: 12px;
  --space-inline-medium: 16px;
  --space-inline-large: 24px;
  --space-inline-x-large: 32px;
  --space-inline-2x-large: 48px;
  --space-inline-3x-large: 64px;
  /* Inset */
  --space-inset-5x-small: 2px;
  --space-inset-4x-small: 4px;
  --space-inset-3x-small: 6px;
  --space-inset-2x-small: 8px;
  --space-inset-x-small: 10px;
  --space-inset-small: 12px;
  --space-inset-medium: 16px;
  --space-inset-large: 24px;
  --space-inset-x-large: 32px;
  --space-inset-2x-large: 48px;
  --space-inset-3x-large: 64px;
}
```

Để thay đổi các style theo design mà bạn muốn, bạn chỉ cần định nghĩa là các biến này

Ví dụ, nếu muốn thay đổi brand từ màu `blue` sang màu `red`, trong file `app.tcss` bạn chỉ cần thêm đoạn code

```css
:root {
  --brand: var(--red);
}
```
