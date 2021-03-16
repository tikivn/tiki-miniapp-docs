---
order: 19
category:
  vi-VN: Thành phần cơ bản
  en-US: Basic components
title:
  vi-VN: label
  en-US: label
---

## Giới thiệu

Để tăng trải nghiệm với các form component, các thành phần bên trong `label` sẽ được focus khi bấm vào phạm vi của `label`. Hỗ trợ các component `radio`, `checkbox`, `input` và `switch`, nếu có nhiều component trong `label`, chỉ component đầu tiên được focus

## Giới hạn

- Component cần được đặt bên trong `label`
- Chỉ component đầu tiên là được focus khi bấm vào `label`
- Nội dung bên trong label nên được bỏ vào trong thẻ `<text>` nếu không được sử dụng trong component nào

## Sử dụng

### Sample Code

**index.txml**

```xml
<view>
  <label>
    <input />
    <text>This is label with text</text>
  </labe>
</view>
```
