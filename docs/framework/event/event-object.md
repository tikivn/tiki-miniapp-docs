---
title: Event object
---

Khi một component kích hoạt event, logic layer chứa event handler sẽ nhận 1 event object

## BaseEvent object

| Thuộc tính    | Kiểu dữ liệu | mô tả                                                   |
| ------------- | ------------ | ------------------------------------------------------- |
| type          | string       | Loại event                                              |
| timeStamp     | integer      | Thời gian mà event được sinh ra                         |
| target        | Object       | Tập hợp các thuộc tính của component kích hoạt sự kiện. |
| currentTarget | Object       | Tập hợp các giá trị thuộc tính của component hiện tại   |

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

## currentTarget

Với những bubbling event thành phần handle sự kiện với thành phần trigger sự kiện có thể khác nhau. Ví dụ:

```xml
 <view onTap="onTap">Parent View<view>Clickable view</view></view>
 ```
 
Trong trường hợp này currentTarget sẽ là thành phần handle sự kiện (Parent View) và target sẽ là thành phần kích hoạt sự kiện (Clickable view). 

Đổi với non-bubbling hoặc chính target handle cũng chính là thành phần kích hoạt sự kiện thì giá trị của target và currentTarget sẽ giống nhau.

```js
Page({
  tapName(event) {
    console.log(event.target.dataset.viewName); // console log sẽ in ra giá trị Test View
  }
});
```

The `target` object sẽ có các thuộc tính:

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                               |
| ---------- | ------------ | ------------------------------------------------------------------- |
| id         | string       | id của component                                                    |
| tagName    | string       | Component type ví dụ `view`                                         |
| dataset    | Object       | Tập hợp các thuộc tính của dataset được define bắt đầu bằng `data-` |

## TouchEvent event object

TouchEvent touch event object (kế thừa từ BaseEvent), attribute list:

| Thuộc tính     | Kiểu dữ liệu | Mô tả                                                |
| -------------- | ------------ | ---------------------------------------------------- |
| id             | string       | id của component                                     |
| touches        | Array        | Mảng các điểm được touch trên màn hình               |
| changedTouches | Array        | Mảng chứa thông tin thay đổi của các điểm được touch |

`touches` Là 1 mảng mà mỗi thành phần là 1 touch object, chứa thông tin toạ độ điểm được touch trên màn hình.
`changedTouches` là 1 mảng giống như `touches` nhưng sẽ chỉ ra sự thay đổi của các điểm được touch. Ví dụ
`onTouchStart` thì changedTouches sẽ thay đổi từ mảng rỗng sang mảng các điểm được touch
`onTouchMove` thì changeTouches sẽ thay đổi toạ độ các điểm được touch
`onTouchEnd`, `onTouchCancel` thì changeTouches sẽ thay đổi về mảng rỗng.

### Touch object

| Thuộc tính       | Kiểu dữ liệu | mô tả                                                                                                                                       |
| ---------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| identifier       | number       | id của touch point                                                                                                                          |
| pageX, pageY     | number       | Khoảng cách từ góc trên bên trái của page góc trên bên trái là điểm gốc, trục hoành là trục X và trục tung là trục Y.                       |
| clientX, clientY | number       | Khoảng cách từ góc trên bên trái của page (trừ navigation bar), góc trên bên trái là điểm gốc, trục hoành là trục X và trục tung là trục Y. |

#### Example

Ví dụ sự kiện onTap khi user click vào 1 view

```xml
<view data-view-name="Test View" onTap="tapName"/>
```

Khi gửi qua lớp logic thông qua events, thì data được lấy ra thông qua `event.target.dataset.viewName`

```js
Page({
  tapName(event) {
    console.log(event.target.dataset.viewName); // console log sẽ in ra giá trị Test View
  }
});
```

Quan sát console log, chúng ta sẽ thấy:

```js
{
  "type": "tap",
  "currentTarget": {
    "tagName": "view",
    "dataset": {
      "view-name": "Test view"
    }
  },
  "target": {
    "tagName": "view",
    "dataset": {
      "view-name": "Test view"
    },
    "targetDataset": {
      "view-name": "Test view"
    }
  },
  "timeStamp": 1611557634256
}
```

## Animation Event object

Animation Object là event object của các sự kiện liên quan tới Animation bao gồm:

- onTransitionEnd: sự kiện này được kích hoạt khi CSS transition hoàn tất.
- onAnimationStart: sự kiện này được kích hoạt khi CSS Animation bắt đầu thực thi.
- onAnimationIteration: sự kiện này được kích hoạt khi CSS Animation kết thúc 1 iteration.
- onAnimationEnd: sự kiện này được kích hoạt khi CSS Animation kết thúc.

Ngoài thuộc tính của Base Object,Transition event sẽ có thêm các thuộc tính:

| Thuộc tính   | Kiểu dữ liệu | Mô tả                                            |
| ------------ | ------------ | ------------------------------------------------ |
| elapsedTime  | number       | Khoảng thời gian theo giây animation đã thực thi |
| propertyName | string       | Tên của thuộc tính gắn với transition.           |

Các Animation Object sẽ có thêm các thuộc tính sau:

| Thuộc tính    | Kiểu dữ liệu | Mô tả                                            |
| ------------- | ------------ | ------------------------------------------------ |
| elapsedTime   | number       | Khoảng thời gian theo giây animation đã thực thi |
| animationName | string       | Tên của thuộc tính CSS gắn với animation.        |