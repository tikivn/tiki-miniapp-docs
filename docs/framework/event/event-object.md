---
order: 51
category:
  vi-VN: Event
  en-US: Event
title: 
  vi-VN: Event object
  en-US: Event object
---

Khi một component kích hoạt event, logic layer chứa event handler sẽ nhận 1 event object

## BaseEvent object

| Thuộc tính     |  Type | mô tả                         |
| ------- | --------------- | ----------------------------- |
| type | String          | Loại event |
| timeStamp | Integer | Thời gian mà event được sinh ra | 
| target | Object | Tập hợp các thuộc tính của thành phần đã kích hoạt sự kiện.

## type
Event type ví dụ: event `onTap` thì type sẽ là `tap`

## timeStamp
Thời gian mà event được sinh ra theo dạng UNIX timestamp

## target
`dataset` Data được define ở trong component, và được gửi qua logic layer thông qua events. Ở file `.txml`, data được đặt tên bắt đầu bằng `data-`, phần sau theo format tất cả chữ cái đều viết thường và nối với nhau bằng dấu `-`. Ví dụ:
```xml
<view data-view-name="Test View" onTap="tapName"/>
```
Khi gửi qua lớp logic thông qua events, thì data được lấy ra thông qua `event.target.dataset.viewName`
```js
Page({
  tapName(event) {
    console.log(event.target.dataset.viewName); // console log sẽ in ra giá trị Test View
  },
});
```

The `target` object sẽ có các thuộc tính:

| Thuộc tính     |  Type | mô tả                         |
| ------- | --------------- | ----------------------------- |
| id | String          | id của component |
| tagName | String | Component type ví dụ `view` | 
| dataset | Object | Tập hợp các thuộc tính của dataset được define bắt đầu bằng `data-` |

## TouchEvent touch event object
TouchEvent touch event object (kế thừa từ BaseEvent), attribute list:

| Thuộc tính     |  Type | mô tả                         |
| ------- | --------------- | ----------------------------- |
| id | String          | id của component |
| touches | Array | Mảng các điểm được touch trên màn hình | 
| changedTouches | Array | Mảng chứa thông tin thay đổi của các điểm được touch |

```touches``` Là 1 mảng mà mỗi thành phần là 1 touch object, chứa thông tin toạ độ điểm được touch trên màn hình.
```changedTouches``` là 1 mảng giống như ```touches``` nhưng sẽ chỉ ra sự thay đổi của các điểm được touch. Ví dụ
`onTouchStart` thì changedTouches sẽ thay đổi từ mảng rỗng sang mảng các điểm được touch
`onTouchMove` thì changeTouches sẽ thay đổi toạ độ các điểm được touch
`onTouchEnd`, `onTouchCancel` thì changeTouches sẽ thay đổi về mảng rỗng

### Touch object

| Thuộc tính     |  Type | mô tả                         |
| ------- | --------------- | ----------------------------- |
| identifier | Number          | id của touch point |
| pageX, pageY | Number | Khoảng cách từ góc trên bên trái của page góc trên bên trái là điểm gốc, trục hoành là trục X và trục tung là trục Y. | 
| clientX, clientY | Number |  Khoảng cách từ góc trên bên trái của page (trừ navigation bar), góc trên bên trái là điểm gốc, trục hoành là trục X và trục tung là trục Y. |

# Example
Ví dụ sự kiện onTap khi user click vào 1 view
```xml
<view data-view-name="Test View" onTap="tapName"/>
```
Khi gửi qua lớp logic thông qua events, thì data được lấy ra thông qua `event.target.dataset.viewName`
```js
Page({
  tapName(event) {
    console.log(event.target.dataset.viewName); // console log sẽ in ra giá trị Test View
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