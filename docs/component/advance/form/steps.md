---
title: Steps
---

`steps` là component dùng để tạo các bước trên multi-step form.

<img src="/img/form-steps.svg" alt="form-steps" style={{ margin: '0 auto', display: 'flex' }}/>

## Cài đặt `tini-ui`:

```bash
$> yarn add @tiki.vn/tini-ui
```


## Thuộc tính

| Thuộc tính       | Kiểu dữ liệu                                            | Giá trị mặc định              | Bắt buộc | Mô tả                                                                                                              |
| --------------- | ------------------------------------------------ | -------------------- | :------: | ------------------------------------------------------------------------------------------------------------------------- |
| className       | `string`                                         | ""                   |        | Custom class cho component                                                                                                |
| style           | `string`                                         | ""                   |        | Custom inline style cho component                                                                                         |
| direction       | `'horizontal'` \| `'vertical'`                   |                      |  ✓      | Hướng của steps menu                                                                                                      |
| activeIndex     | `number` \| `null`                               |                      |  ✓      | Index của step hiện tại                                                                                                   |
| failIndex       | `number` \| `null`                               |                      |        | Index của step bị bỏ qua, step chưa hoàn thành hoặc lỗi                                                                   |
| items           | `Array<{ label?: string; sub?:string }>` |                      |  ✓      | Danh sách các step. Bạn có thể truyền label hoặc sub rỗng và sử dụng custom slot để chỉnh sửa item như ví dụ trên |
| inactiveColor   | `string`                                         | 'rgba(0, 0, 0, 0.1)' |        | Màu của line và milestone khi step inactive                                                                                     |
| activeColor     | `string`                                         | '#1a94ff'            |        | Màu của line và milestone khi step active                                                                                       |
| milestoneErrorColor   | `string`                                         | '#ff424f'            |        | Màu của milestone khi step được đánh dấu error(index === failIndex)                                                             |
| milestoneSize         | `string`                                         | '16px'               |        | Size của milestone                                                                                                              |
| reverseVertical | `boolean`                                        | false                |        | Đảo ngược hướng của các vertical steps theo chiều bắt đầu từ dưới lên trên                                                |


## Sample Code

```xml title=index.txml
<view class="container">
  <steps
  className="demo-steps-class"
  activeIndex="{{activeIndex}}"
  direction="vertical"
  failIndex="{{failIndex}}"
  items="{{items}}"
  activeColor="green"
  milestoneSize="30px"
  milestoneErrorColor="yellow"
  >
    <view slot="label_2" style="color: green; font-weight: bold;">label custom with slot</view>
    <view slot="sub_4">custom <text style="color: green;"> sub </text> with slot component here; custom <text style="color: green;"> sub </text> with slot component here; </view>
  </steps>
</view>
```

```js title=index.js
Page({
  data: {
    activeIndex: 2,
    failIndex: 1,
    size: 0,
    items: [
      {
        label: 'Step 1',
        sub:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. It was popularised in the 1960s with the release of Letraset PgeMaker including versions of Lorem Ipsum."
      },
      {
        // item này không có label, label sẽ được render từ <view slot="label_2" ... />
        sub: 'sub'
      },
      {
        label: 'Step 3',
        sub: 'sub'
      },
      {
        label: 'Step 4'
        // item này không có sub, sub sẽ được render từ <view slot="sub_4" ... />
      },

      {
        label: 'Step 5',
        sub: 'sub'
      }
    ]
  }
});
```

