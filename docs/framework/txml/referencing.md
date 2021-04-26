# Referencing

TXML cung cấp 2 cách để tham chiếu tới code khác: `import` và `include`.

## import

`import` có thể sử dụng để tham chiếu tới một template được định nghĩa ở file khác.

Trong ví dụ dưới đây, template `item`được định nghĩa trong file `item.txml`:

```xml
<!-- item.txml -->
<template name="item">
  <text>{{text}}</text>
</template>
```

Bằng cách sử dụng `import`, bạn có thể sử dụng template `item` như sau:

```xml
<import src="item.txml"/>
<template is="item" data="{{text: 'forbar'}}"/>
```

## import scope

Khi một file TXML import một template từ file khác, nó chỉ import duy nhất template được chỉ định, chứ không import các template được import trong file template.

Ví dụ: trong trường hợp file C import B, B import A, template được định nghĩa bởi B có thể được sử dụng trong C, và template được định nghĩa bởi A thì có thể sử dụng trong B. Tuy nhiên, C không thể sử dụng các template được định nghĩa bởi A.

```xml
<!-- A.txml -->
<template name="A">
  <text> A template </text>
</template>
```

```xml
<!-- B.txml -->
<import src="a.txml"/>
<template name="B">
  <text> B template </text>
</template>
```

```xml
<!-- C.txml -->
<import src="b.txml"/>
<template is="A"/>  <!-- Error! Cannot use template when not import A. -->
<template is="B"/>
```

## include

`include` được sử dụng để copy toàn bộ code ngoại trừ các `<template>`.
Ví dụ

```xml
<!-- header.txml -->
<view> header </view>
```

```xml
<!-- footer.txml -->
<view> footer </view>
```

```xml
<!-- index.txml -->
<include src="header.txml"/>
<view> body </view>
<include src="footer.txml"/>
```
