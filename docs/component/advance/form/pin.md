---
title: PIN
---

## Giới thiệu

- Để sử dụng `chip`, bạn cần phải cài [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui) từ version `0.2.1` trở lên.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/advance/form/pin/index" />

## Sử dụng

<div style={{ width: '100%', maxWidth: 360 }}>
  <img src="/img/pin-1.png" alt="form-steps"/>
  <img src="/img/pin-2.png" alt="form-steps"/>
  <img src="/img/pin-3.png" alt="form-steps"/>
</div>

### Sample Code

### Cài đặt `tini-ui`:

```bash
$> yarn add @tiki.vn/tini-ui
```

### Sample Code

**index.json**

```json
{
  "defaultTitle": "PIN",
  "usingComponents": {
    "pin": "@tiki.vn/tini-ui/es/pin/index",
    "block-variant": "components/block-variant/index"
  }
}
```

**index.txml**

```xml
<view class="page">
  <block-variant
    header="Variants"
    title="1. Format"
    description="Label & Input only."
  >
    <view class="mt-2x-small">
      <pin className="mb-medium" label="Label"/>
      <pin/>
    </view>
  </block-variant>
  <block-variant
    title="2. Shape"
    description="Rounded, Circle."
  >
    <view class="mt-2x-small">
      <pin className="mb-medium" label="Rounded"/>
      <pin label="Circle" shape="circle"/>
    </view>
  </block-variant>
  <block-variant
    title="3. Quantity"
    description="4 blocks, 6 blocks."
  >
    <view class="mt-2x-small">
      <pin className="mb-medium" label="4 blocks"/>
      <pin label="6 blocks" length="{{6}}"/>
    </view>
  </block-variant>
  <block-variant
    title="4. Type"
    description="Hidden input & Visible input"
  >
    <view class="mt-2x-small">
      <pin secret className="mb-medium" label="Hidden input" value="0123"/>
      <pin label="Visible input" value="0123"/>
    </view>
  </block-variant>
  <block-variant
    title="5. State"
    description="Empty, Hove, Active, Typing, Filled, Disabled, Error, Skeleton loading."
  >
    <view class="mt-2x-small">
      <pin className="mb-medium" label="Empty"/>
      <pin focus className="mb-medium" label="Active"/>
      <pin secret className="mb-medium" label="Typing" value="0"/>
      <pin secret className="mb-medium" label="Filled" value="0123"/>
      <pin disabled className="mb-medium" label="Disabled"/>
      <pin hasError secret className="mb-medium" label="Error" errorMsg="Error message" value="0123"/>
    </view>
  </block-variant>
</view>
```

**index.js**

```js
Page({
  onPinChange(pin, position) {
    console.log(
      `Pin was changed to ${pin} at position ${position}`
    );
  },

  onPinComplete(pin) {
    console.log(`Pin was completed: ${pin}`);
  }
});
```

### Chi tiết

| Property   | Type                  | Default Value                             | Description                                                                   |
| ---------- | --------------------- | ----------------------------------------- | ----------------------------------------------------------------------------- |
| className  | string                | ''                                        | Custom class                                                                  |
| style      | string                | ''                                        | Inline style                                                                  |
| value      | string                | ''                                        | Giá trị khởi tạo                                                              |
| label      | string                | ''                                        | Nội dung của label                                                            |
| length     | number                | 4                                         | Số lượng block                                                                |
| shape      | 'rounded' \| 'circle' | 'rounded'                                 | Hình dạng định sẵn                                                            |
| focus      | boolean               | false                                     | Tự động focus vào PIN                                                         |
| secret     | boolean               | false                                     | Mỗi ký tự người dùng nhập vào sẽ được đại diện bằng chấm tròn (•)             |
| hideCaret  | boolean               | false                                     | Ẩn con trỏ                                                                    |
| disabled   | boolean               | false                                     | Disable PIN                                                                   |
| hasError   | boolean               | false                                     | Khi giá trị là true, input sẽ có viền màu đỏ, và xuất hiện icon thông báo lỗi |
| errorMsg   | string                | ''                                        | Hiển thị thông báo lỗi bên dưới input, cần khai báo thêm `hasError=true`      |
| onChange   | event                 | (pin?: string, position?: number) => void | Sự kiện sẽ được gọi khi nội dung của PIN bị thay đổi                          |
| onComplete | event                 | (pin?: string) => void                    | Sự kiện sẽ được gọi khi tất cả các block đã được fill                         |
