---
title: Giới thiệu về TCSS

description: TCSS ngôn ngữ định dạng các phần tử trong Tiki mini app
---



TCSS là một tập ngôn ngữ được sử dụng để mô tả style của các component từ TXML. TCSS sẽ quyết định việc các TXML component được hiển thị ra sao.

## Đơn vị đo

Tiki Mini App hỗ trợ thêm đơn vị đo rpx (reponsive pixel)

Mỗi một màn hình bất kỳ sẽ có độ rộng được tính bằng 750 rpx. Nếu như màn hình có kích thước là 375 px, thì ta sẽ có: 750 rpx = 375 px, do đó, 1 rpx = 0.5px

Bằng cách sử dụng rpx, lập trình viên có thể đảm bảo rằng thiết kế của họ chạy tốt với các màn hình khác nhau.

<!---  ## Các thuộc tính của TCSS

TCSS hỗ trợ hầu hết các thuộc tính phổ biến của CSS.

Sau đây là danh sách các thuộc tính CSS mà Tiki Mini App hỗ trợ

### Nhóm các thuộc tính về layout

- flex
  `flex` nhận các giá trị là số. Khi flex là một số dương, kích thước của component chứa flex sẽ dựa vào giá trị này. Nếu một component với flex là 2, sẽ có kích thước nhiều gấp 2 lần so với component có flex là 1. Nếu flex = 0, thì kích thước của component sẽ dựa vào thuộc tính width và height của nó. Nếu flex là -1, thì kích thước của component sẽ dựa vào thuộc tính width và height của nó. Tuy nhiên, nếu như không có đủ không gian, component sẽ bị co về thuộc tính `min-width` và `min-height`.
- [flex-basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)
- [flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
- [flex-grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)
- [flex-shink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shink)
- [flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
- [flex-flow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow)
- [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
  `align-items` nhận các giá trị
  - `flex-start`
  - `flex-end`
  - `center`
  - `stretch`
  - `baseline`
- [align-self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
  `align-content` nhận các giá trị
  - `flex-start`
  - `flex-end`
  - `center`
  - `space-between`
  - `space-around`
  - `space-evenly`
- [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
  `justify-content` nhận các giá trị
  - `flex-start`
  - `flex-end`
  - `center`
  - `space-between`
  - `space-around`
  - `space-evenly`
- [place-content](https://developer.mozilla.org/en-US/docs/Web/CSS/place-content)
  `place-content` là thuộc tính shorthand. Giá trị của `place-content` có định dạng
  `<align-content>` `<justify-content>`

### Nhóm các thuộc tính về box model

- [border-top-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width)
- [border-right-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width)
- [border-bottom-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width)
- [border-left-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width)
- [border-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width)
- [border-top-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color)
- [border-right-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color)
- [border-bottom-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color)
- [border-left-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color)
- [border-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color)
- [border-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)
  `border-style` nhận các giá trị

  - `solid`
  - `dotted`
  - `dashed`

- [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
- [border-top-left-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius)
- [border-top-right-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius)
- [border-bottom-left-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius)
- [border-bottom-right-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius)
- [border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
- [margin-top](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top)
- [margin-right](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right)
- [margin-bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom)
- [margin-left](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left)
- [margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
- [padding-top](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top)
- [padding-right](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right)
- [padding-bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom)
- [padding-left](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left)
- [padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
- [padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)

### Nhóm các thuộc tính text

- [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
- [background](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
- [background-color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
- [font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
- [font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
- [font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
- [font-style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
- [font-variant](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant)
- [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
- [font](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
- [text-decoration-line](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line)
- [text-decoration-style](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style)
- [text-decoration-color](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color)
- [text-decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
- [shadow-offset](https://developer.mozilla.org/en-US/docs/Web/CSS/shadow-offset)
- [text-shadow-offset](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow-offset)
- [text-shadow-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow-radius)
- [text-shadow-color](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow-color)
- [text-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)

### Nhóm các thuộc tính khác

- [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width)
- [min-widht](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)
- [max-width](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
- [height](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
- [min-height](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height)
- [max-height](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)
- [position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)

--->

## Import

Tiki Mini App cho phép bạn có thể import các file TCSS từ các nguồn khác nhau bằng cách sử dụng cú pháp `@import` 

```css
/** common.tcss  */
.small-p {
  padding: 5px;
}

/** app.tcss */
@import './common.tcss';
.middle-p {
  padding: 15px;
}
```

## Inline style

Bạn có thể sử dụng 2 thuộc tính `style` và `class` trong TXML để xác định style cho một thẻ.

```xml
<view style="color: red;" />
```

```xml
<view class="normal">
```

```css
/** app.tcss */
.normal {
  color: red;
}
```

## CSS Selector

TCSS hỗ trợ các loại Selector sau

- selector với class name. VD: `.class1`, `.class2`
- selector với thẻ cho các basic component. Cụ thể là các thẻ `view`, `input`, `text`, `icon`, `progress`, `radio`, `radio-group`, `label`, `checkbox`, `checkbox-group`, `switch`.
- selector cho các item con. VD: `view > .class1`
- selector cho các item con và cháu. VD: `view .class1`

## Thứ tự import

Khi một Page được render, các tcss sẽ được import theo thứ tự như sau

- app.tcss sẽ được import trước tiên.
- Khi một Page sử dụng nhiều component, component này cũng có thể sử dụng các component khác. Tất cả các component (bao gồm cả các Component con của một Component) mà một Page sử dụng, sẽ được sort theo 2 tiêu chí: (1) Component nào ở dưới lá, (2) đường dẫn của chúng. Thứ tự sort này sẽ quyết định xem tcss của Component nào được import vào trước, tcss của Component nào được import vào sau.
- cuối cùng là index.tcss của chính page đó

Do được import cuối cùng, nên tcss của Page có thể override tcss của các Component con.

Ví dụ: Giả sử chúng ta có một Mini App với cấu trúc như sau

```jsx
app.tcss;
pages / page1 / index.tcss;
components / component1 / index.tcss;
component2 / index.tcss;
component3 / index.tcss;
component4 / index.tcss;
```

Giả sử rằng:

- page1 sử dụng component1
- component1 sử dụng component4
- component4 sử dụng component2 và component3

Thế thì khi đó, thứ tự import của tcss sẽ là

- app.tcss
- components/component2/index.tcss
- components/component3/index.tcss
- components/component4/index.tcss
- components/component1/index.tcss
- pages/page1/index.tcss
