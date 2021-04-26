# Render có điều kiện

## tiki:if

TXML sử dụng thuộc tính `tiki:if=""` để xác định một block có được render hay không:

```xml
<view tiki:if="{{condition}}"> True </view>
```

Bạn cũng có thể sử dụng `tiki:elif` và `tiki:else` để thêm một "else" block:

```xml
<view tiki:if="{{length > 5}}"> 1 </view>
<view tiki:elif="{{length > 2}}"> 2 </view>
<view tiki:else> 3 </view>
```

## block tiki:if

`tiki:if` là một thuộc tính điều kiện, do đó bạn bắt buộc phải sử dụng nó trong một tag.
Nếu muốn kiểm soát việc render cho một tập các thẻ cùng lúc, bạn có thể sử dụng thẻ `<block>`
để nhóm các thẻ lại với nhau, sau đó sử dụng `tiki:if` với thẻ `<block>`

```xml
<block tiki:if="{{true}}">
  <view> view1 </view>
  <view> view2 </view>
</block>
```

**Chú ý** `<block>` không phải là một Component, do vậy `<block>` chỉ hỗ trợ các thuộc tính điều kiện mà thôi.
