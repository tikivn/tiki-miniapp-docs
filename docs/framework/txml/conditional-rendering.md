---
order: 22
category:
  vi-VN: TXML
  en-US: TXML
title:
  vi-VN: Render có điều kiện
  en-US: Conditional rendering
---

## t:if

TXML sử dụng thuộc tính `t:if=""` để xác định một block có được render hay không:

```xml
<view t:if="{{condition}}"> True </view>
```

Bạn cũng có thể sử dụng `t:elif` và `t:else` để thêm một "else" block:

```xml
<view t:if="{{length > 5}}"> 1 </view>
<view t:elif="{{length > 2}}"> 2 </view>
<view t:else> 3 </view>
```

## block t:if

`t:if` là một thuộc tính điều kiện, do đó bạn bắt buộc phải sử dụng nó trong một tag.
Nếu muốn kiểm soát việc render cho một tập các thẻ cùng lúc, bạn có thể sử dụng thẻ `<block>`
để nhóm các thẻ lại với nhau, sau đó sử dụng `t:if` với thẻ `<block>`

```xml
<block t:if="{{true}}">
  <view> view1 </view>
  <view> view2 </view>
</block>
```

**Chú ý** `<block>` không phải là một Component, do vậy `<block>` chỉ hỗ trợ các thuộc tính điều kiện mà thôi.
