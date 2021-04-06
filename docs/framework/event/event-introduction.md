---
order: 50
category:
  vi-VN: Event
  en-US: Event
title: 
  vi-VN: Giới thiệu về event
  en-US: Event introduction
---

# Introduction
- Events là phương thức giao tiếp giữa View Layer và Logic layer
- Events sẽ gửi các thao tác của user sang Logic layer để thực thi.
- Event có thể được liên kết với Component và khi đạt đến điều kiện kích hoạt, hàm sự kiện tương ứng trong Logic Layer sẽ được thực thi.
- Event objects có thể mang thêm thông tin bổ sung, chẳng hạn như id, dataset, touches.

## Cách sử dụng:
Giả sử chúng ta cần handle sự kiện tap ở 1 view bất kỳ.
Ở file .txml 
```xml
<view id="tapTest" data-name="Test view" onTap="tapName">
    Click me! 
</view>
```

Ở Page tương ứng, ta thêm hàm `tapName` để bind event onTap từ view sang lớp logic
```js
Page({
  tapName(event) {
    console.log(event);
  },
});
```

Quan sát console log, chúng ta sẽ thấy:
```js
{
  "type": "tap",
  "target": {
    "id": "tapTest",
    "tagName": "view",
    "dataset": {
      "name": "Test view"
    }
  },
  "timeStamp": 1611557634256
}
```

Khi sử dụng các component (basic component, extend component và custom component), event nào có sẵn trong thành phần phụ thuộc vào việc bản thân thành phần đó có hỗ trợ hay không. Các event được hỗ trợ sẽ được liệt kê rõ ràng trong tài liệu của component.

## Event type
Events được chia làm 2 loại:
- Bubbling event: sẽ có chứa prefix là `on` ví dụ `onTap`. Khi node con trigger event, nó sẽ trigger thêm event của node cha. 
- Non-bubbling event: sẽ có chứa prefix là `catch` ví dụ `catchTap`. Khi node con trigger event, nó sẽ không trigger event của node cha. 

Các binding event cũng tương tự như cách set thuộc tính của component gồm key và value
- `key`: có prefix là `on` hoặc `catch`, sau đó là type của event ví dụ `onTap`, `catchTap`.
- `value`: là string. Giá trị này sẽ là tên của method của event trong Page. Nếu page ko define method này, khi event được trigger sẽ throw error.

```xml
<view id="outter" onTap="handleTap1">
  view1
  <view id="middle" catchTap="handleTap2">
    view2
    <view id="inner" onTap="handleTap3">
      view3
    </view>
  </view>
</view>
```
Trong ví dụ trên, nhấp vào view3 sẽ kích hoạt handleTap3 và handleTap2 liên tiếp (vì sự kiện chạm sẽ bubble đối với view2 và view2 ngăn sự kiện bubble và không còn chuyển đến nút cha), nhấp vào view2 sẽ kích hoạt handleTap2, và nhấp vào view1 sẽ kích hoạt handleTap1.

Tất cả bubbling events:

| Loại event     | Điều kiện kích hoạt  |
| ------- | --------------- |
| touchStart | Khi bắt đầu touch |
| touchMove | Touch move |
| touchEnd | Kết thúc touch |
| touchCancel | Khi touch action bị huỷ bỏ do có call reminder hoặc 1 popup |
| tap | user tap |
| longTap | Nhấn giữ lâu hơn 500ms |

