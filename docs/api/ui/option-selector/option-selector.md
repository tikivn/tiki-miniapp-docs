---
title: my.optionsSelect
---

## Giới thiệu

**my.optionsSelect** là API dùng để tạo component Select. Bạn có thể tạo component Select 1 cấp hoặc 2 cấp.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/option-selector/index" />

## Sử dụng

### Sample Code

**index.txml**

```xml
<view>
  <block-header title="Usage" description="my.optionsSelect" />
  <view class="block-content">
    <button class="button-full" onTap="openOne">Single column selector</button>
    <button class="button-full" onTap="openTwo">Double column selector</button>
  </view>
</view>
```

**index.js**

```js
Page({
  openOne() {
    my.optionsSelect({
      title: 'Repayment Date Selection',
      optionsOne: [
        'Every Monday',
        'Every Tuesday',
        'Wednesday',
        'Every Thursday',
        'Every Friday',
        'Every Saturday',
        'Every Sunday'
      ],
      selectedOneIndex: 2,
      positiveString: 'Xác nhận',
      negativeString: 'Hủy',
      success: (res) => {
        my.alert({
          title: JSON.stringify(res)
        });
      },
      fail: () => {
        console.log('Fail');
      }
    });
  },

  openTwo() {
    my.optionsSelect({
      title: 'Repayment Date Selection',
      optionsOne: [
        'Every Monday',
        'Every Tuesday',
        'Wednesday',
        'Every Thursday',
        'Every Friday',
        'Every Saturday',
        'Every Sunday'
      ],
      optionsTwo: [
        'Every Week',
        'Every Month',
        'Every Quarter',
        'Every Year'
      ],
      selectedOneIndex: 2,
      selectedTwoIndex: 2,
      positiveString: 'Xác nhận',
      negativeString: 'Hủy',
      success: (res) => {
        my.alert({
          title: JSON.stringify(res)
        });
      },
      fail: () => {
        console.log('Fail');
      }
    });
  }
});
```

## API Params

| Thuộc tính       | Kiểu dữ liệu     | Bắt buộc | Mô tả                                                             |
| ---------------- | ---------------- | :------: | ----------------------------------------------------------------- |
| title            | String           |          | Title của Option Selector                                         |
| optionsOne       | Array of objects |    ✓     | Danh sách tùy chọn.                                               |
| optionsTwo       | Array of objects |          | Danh sách tùy chọn thứ 2.                                         |
| selectedOneIndex | number           |          | Tùy chọn thứ nhất được chọn theo mặc định. Giá trị mặc định là 0. |
| selectedTwoIndex | number           |          | Tùy chọn thứ 2 được chọn theo mặc định. Giá trị mặc định là 0.    |
| positiveString   | String           |          | Text của button bên phải. Mặc định là Xác nhận.                   |
| negativeString   | String           |          | Text của button bên trái. Mặc định là Hủy.                        |
| success          | Function         |          | Callback function khi chọn thành công.                            |

### Giá trị trong success callback

| Attributes        | Type   | Description                                                                              |
| ----------------- | ------ | ---------------------------------------------------------------------------------------- |
| selectedOneIndex  | number | Giá trị được chọn cho tùy chọn một. Nếu bạn chọn hủy, một chuỗi trống sẽ được trả về.    |
| selectedOneOption | String | Nội dung được chọn trong tùy chọn một. Nếu bạn chọn hủy, một chuỗi trống sẽ được trả về. |
| selectedTwoIndex  | number | Giá trị được chọn cho tùy chọn hai. Nếu bạn chọn hủy, một chuỗi trống sẽ được trả về.    |
| selectedTwoOption | String | Nội dung được chọn trong tùy chọn hai. Nếu bạn chọn hủy, một chuỗi trống sẽ được trả về. |
