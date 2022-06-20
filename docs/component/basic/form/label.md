---
title: label
sidebar_custom_props:
  description: Các thành phần bên trong label sẽ được focus khi bấm vào phạm vi của
---

Để tăng trải nghiệm với các form component, các thành phần bên trong `label` sẽ được focus khi bấm vào phạm vi của `label`. Hỗ trợ các component `radio`, `checkbox`, `input` và `switch`, nếu có nhiều component trong `label`, chỉ component đầu tiên được focus.

<!-- ## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/basic/label/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/basic/label/index" /> -->

## Giới hạn

- Component cần được đặt bên trong `label`
- Chỉ component đầu tiên là được focus khi bấm vào `label`
- Nội dung bên trong label nên được bỏ vào trong thẻ `<text>` nếu không được sử dụng trong component nào.

## Sample Code

```xml title=index.txml
<view>
  <label>
    <input />
    <text>This is label with text</text>
  </labe>
</view>
```
