---
title: Steps
---

## Giới thiệu

Component `steps` dùng để tạo các bước trên multi-step form.

## Sử dụng

<img src="/img/form-steps.svg" alt="form-steps" style={{ margin: '0 auto', display: 'flex' }}/>

### Sample Code

**index.txml**

```xml
<view class="container">
  <steps
  className="demo-steps-class"
  activeIndex="{{activeIndex}}"
  direction="vertical"
  failIndex="{{failIndex}}"
  items="{{items}}"
  activeColor="green"
  dotSize="30px"
  dotErrorColor="yellow"
  >
    <view slot="title_2" style="color: green; font-weight: bold;">title custom with slot</view>
    <view slot="desc_4">custom <text style="color: green;"> description </text> with slot component here; custom <text style="color: green;"> description </text> with slot component here; </view>
  </steps>
</view>
```

**index.js**

```js
Page({
  data: {
    activeIndex: 2,
    failIndex: 1,
    size: 0,
    items: [
      {
        title: 'Step 1',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. It was popularised in the 1960s with the release of Letraset PgeMaker including versions of Lorem Ipsum."
      },
      {
        // item này không có title, title sẽ được render từ <view slot="title_2" ... />
        description: 'description'
      },
      {
        title: 'Step 3',
        description: 'description'
      },
      {
        title: 'Step 4'
        // item này không có description, description sẽ được render từ <view slot="desc_4" ... />
      },

      {
        title: 'Step 5',
        description: 'description'
      }
    ]
  }
});
```

### Chi tiết

| Property        | Type                                             | Default              | Required | Description                                                                                                               |
| --------------- | ------------------------------------------------ | -------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| className       | `string`                                         | ""                   | no       | Custom class cho component                                                                                                |
| style           | `string`                                         | ""                   | no       | Custom inline style cho component                                                                                         |
| direction       | `'horizontal'` \| `'vertical'`                   |                      | yes      | Hướng của steps menu                                                                                                      |
| activeIndex     | `number` \| `null`                               |                      | yes      | Index của step hiện tại                                                                                                   |
| failIndex       | `number` \| `null`                               |                      | no       | Index của step bị bỏ qua, step chưa hoàn thành hoặc lỗi                                                                   |
| items           | `Array<{ title?: string; description?:string }>` |                      | yes      | Danh sách các step. Bạn có thể truyền title hoặc description rỗng và sử dụng custom slot để chỉnh sửa item như ví dụ trên |
| inactiveColor   | `string`                                         | 'rgba(0, 0, 0, 0.1)' | no       | Màu của line và dot khi step inactive                                                                                     |
| activeColor     | `string`                                         | '#1a94ff'            | no       | Màu của line và dot khi step active                                                                                       |
| dotErrorColor   | `string`                                         | '#ff424f'            | no       | Màu của dot khi step được đánh dấu error(index === failIndex)                                                             |
| dotSize         | `string`                                         | '16px'               | no       | Size của dot                                                                                                              |
| reverseVertical | `boolean`                                        | false                | no       | Đảo ngược hướng của các vertical steps theo chiều bắt đầu từ dưới lên trên                                                |
