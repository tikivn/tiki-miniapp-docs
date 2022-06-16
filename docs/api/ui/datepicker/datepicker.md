---
title: my.datePicker
---

`my.datePicker` là API cho phép user chọn thời gian. Chỉ hỗ trợ từ version 1.84.13 trở lên.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/datepicker/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/datepicker/index" />

## API Params

| Thuộc tính             | Kiểu dữ liệu |      Mặc định      | Mô tả                                                                                                                                                                                   |
| ---------------------- | ------------ | :----------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| format                 | string       |     dd-MM-yyyy     | Định dạng trả về sau khi người dùng chọn xong thời gian. Hỗ trợ các định dạng: `dd-MM-yyyy`, `dd-MM-yyyy HH:mm`, `HH:mm`                                                                |
| title                  | string       |                    | Title cho date picker                                                                                                                                                                   |
| confirmText            | string       |       Đồng ý       | Nội dung của button confirm trong date picker                                                                                                                                           |
| currentDate            | string       | Thời gian hiện tại | Giá trị khởi tạo cho date picker. Định dạng phải giống như giá trị của `format`. Ví dụ nếu format của bạn đang để là `dd-MM-yyyy HH:mm`, thì currentDate phải để là `14-02-2022 14:20`. |
| startDate              | string       |                    | Giá trị nhỏ nhất cho phép người dùng chọn. Định dạng cũng phải giống như giá trị của `format`.                                                                                          |
| endDate                | string       |                    | Giá trị lớn nhất cho phép người dùng chọn. Định dạng cũng phải giống như giá trị của `format`.                                                                                          |
| textColor              | string       |                    | Màu chữ của text trên date picker. Hỗ trợ từ version 1.88.12                                                                                                                            |
| description            | string       |                    | Nội dung của description, nằm bên dưới title. Hỗ trợ từ version 1.88.12                                                                                                                 |
| descriptionColor       | string       |                    | Màu chữ của description. Hỗ trợ từ version 1.88.12                                                                                                                                      |
| confirmColor           | string       |                    | Màu chữ của button confirm. Hỗ trợ từ version 1.88.12                                                                                                                                   |
| confirmBackgroundColor | string       |                    | Màu nền của button confirm. Hỗ trợ từ version 1.88.12                                                                                                                                   |
| success                | Function     |                    | Callback function sau khi chọn thành công                                                                                                                                               |
| fail                   | Function     |                    | Callback function khi người dùng không chọn thời gian nào                                                                                                                               |

_Lưu ý:_ Giao diện của `my.datePicker` tuỳ vào việc bạn chạy trên simulator, android hoặc ios sẽ có sự khác biệt

## Sample Code

```xml
  <button onTap="onShowDate">dd-MM-yyyy</button>
  <button onTap="onShowTime">HH:mm</button>
  <button onTap="onShowDateTime">dd-MM-yyyy HH:mm</button>
  <button onTap="onShowContent">Content</button>
```

```js
Page({
  showDatePicker(format, ...options) {
    my.datePicker({
      format,
      ...options,
      success: (success) => {
        my.alert({
          content: JSON.stringify(success)
        });
      },
      fail: (error) => {
        my.alert({
          content: JSON.stringify(error)
        });
      }
    });
  },
  onShowDate() {
    this.showDatePicker('dd-MM-yyyy');
  },
  onShowTime() {
    this.showDatePicker('HH:mm');
  },
  onShowDateTime() {
    this.showDatePicker('dd-MM-yyyy HH:mm');
  },
  onShowContent() {
    my.datePicker({
      title: 'Chọn ngày sinh',
      description: 'Người lớn: trên 12 tuổi',
      confirmText: 'Xong',
      confirmBackgroundColor: '#D3A73B',
      success: (success) => {
        my.alert({
          content: JSON.stringify(success)
        });
      },
      fail: (error) => {
        my.alert({
          content: JSON.stringify(error)
        });
      }
    });
  }
});
```
