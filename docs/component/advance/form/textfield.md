---
title: textfield
sidebar_custom_props:
  description: Component Tini UI - Chức năng tương tự như thẻ input nhưng hỗ trợ thêm label, icon và một số tính năng mở rộng về giao diện
---

- `textfield` là component trong [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui) với chức năng tương tự như thẻ [input](/docs/component/basic/form/input) nhưng hỗ trợ thêm label, icon và một số tính năng mở rộng về giao diện.
- Để sử dụng `textfield`, bạn cần phải cài [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui) từ version `0.0.18` trở lên.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/advance/form/text-field/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/advance/form/text-field/index" />

## Cài đặt `tini-ui`:

```bash
$> yarn add @tiki.vn/tini-ui
```

## Thuộc tính

| Thuộc tính       | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                                                                                                  |
| ---------------- | ------------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------- |
| labelCls         | string       |                  | Custom class cho thẻ label                                                                                             |
| labelShowBadge   | boolean      |                  | Hiển thị badge trên label                                                                                              |
| labelIcon        | string       |                  | Icon type hiển thị trên label, bạn có thể tim thêm các icon type tại [đây](/docs/component/basic/basic/icon)           |
| labelIconColor   | string       | #808089          | Mã màu cho icon trên label                                                                                             |
| labelHelperText  | string       |                  | Helper text hiển thị bên dưới `labelText`                                                                              |
| labelText        | string       |                  | Nội dung của label                                                                                                     |
| trailingIcon     | string       |                  | Type của icon hiển thị bên phải input                                                                                  |
| suffix           | string       | ''               | Type của suffix hiển thị bên phải input `button, text`                                                                 |
| prefix           | string       | ''               | Type của prefix hiển thị bên trái input `button, text`                                                                 |
| suffixContent    | string       | ''               | Content của suffix hiển thị bên phải input                                                                             |
| prefixContent    | string       | ''               | Content của prefix hiển thị bên trái input                                                                             |
| leadingIcon      | string       |                  | Type của icon hiển thị bên trái input                                                                                  |
| iconColor        | string       | #808089          | Mã màu cho icon trên input                                                                                             |
| shape            | string       | rounded          | Kiểu border radius của input. Hỗ trợ `rounded` hoặc `pill`. Mặc định là `rounded`                                      |
| loading          | boolean      | false            | Hiển thị loading skeleton cho textfield                                                                                |
| hasError         | boolean      | false            | Khi giá trị là true, input sẽ có viền màu đỏ (mã #ff424f), và xuất hiện icon thông báo lỗi                             |
| errorMsg         | string       |                  | Hiển thị thông báo lỗi bên dưới input, cần khai báo thêm `hasError=true`                                               |
| errorIconColor   | string       | #ff424f          | Màu của icon lỗi                                                                                                       |
| inputCls         | string       |                  | Custom class cho input                                                                                                 |
| className        | string       |                  | Custom class cho textfield                                                                                             |
| type             | string       |                  | Loại input. Hỗ trợ các giá trị tương tự thẻ [input](/docs/component/basic/form/input)                                  |
| password         | boolean      | false            | Chỉ định loại input là password                                                                                        |
| name             | string       |                  | Khai báo `name` khi được sử dụng trong [form](/docs/component/basic/form/form), được sử dụng để lấy `value` cho `form` |
| value            | string       | ''               | Giá trị khởi tạo                                                                                                       |
| placeholder      | string       |                  | Nội dung hiển thị trước khi người dùng nhập giá trị của input                                                          |
| placeholderClass | string       |                  | Class name cho placeholder                                                                                             |
| placeholderStyle | css style    |                  | Inline style cho placeholder                                                                                           |
| disabled         | boolean      | false            | Disable input                                                                                                          |
| maxlength        | number       | 140              | Giới hạn số ký tự được nhập                                                                                            |
| focus            | boolean      | false            | Tự động focus vào input                                                                                                |
| controlled       | boolean      | false            | Khi giá trị là `true`, nội dung value của input sẽ được điều khiển hoàn toàn thông qua hàm `setData` trong file `js`   |
| onInput          | event        |                  | Sự kiện sẽ được gọi khi nội dung của input bị thay đổi, `event.detail = { value: value }`                              |
| onConfirm        | event        |                  | Sự kiện sẽ được gọi khi nhấn nút submit (return/Nhập) , `event.detail = { value: value }`                              |
| onFocus          | event        |                  | Sự kiện sẽ được gọi khi input được focus , `event.detail = { value: value }`                                           |
| onTapLeadingIcon | event        |                  | Sự kiện sẽ được gọi khi nhấn vào leadingIcon                                                                           |
| onTapTrailingIcon| event        |                  | Sự kiện sẽ được gọi khi nhấn vào trailingIcon                                                                          |
| onTapSuffix      | event        |                  | Sự kiện sẽ được gọi khi nhấn vào suffix (button or text)                                                               |
| onTapPrefix      | event        |                  | Sự kiện sẽ được gọi khi nhấn vào prefix (button or text)                                                               |
| onBlur           | event        |                  | Sự kiện sẽ được gọi khi input không được focus nữa , `event.detail = { value: value }`                                 |

## Sample Code

```json title=index.json
{
  "defaultTitle": "Text field",
  "usingComponents": {
    "list-item": "@tiki.vn/tini-ui/es/list/list-item/index",
    "textfield": "@tiki.vn/tini-ui/es/textfield/index",
    "block-header": "components/block-header/index",
    "block-variant": "components/block-variant/index"
  }
}
```

```xml title=index.txml
<view class="page">
  <block-header title="Usage"
    description="Text fields are used to allow users to provide text input when the expected input is short. Input component has a range of options and supports several text formats including numbers." />

  <block-variant header="Variants">
    <view class="list-item">
      <view class="subtitle mb-8">1. Format</view>
      <view class="sub-content mb-8">Label & Input only.</view>
      <view class="line" />

      <view class="list-item-label">
        <textfield placeholder="Placeholder" onInput="onInput" onFocus="onFocus" onBlur="onBlur" onConfirm="onConfirm"
          labelText="Label" />
      </view>
      <view class="list-item-label">
        <textfield placeholder="Placeholder" />
      </view>
    </view>
  </block-variant>

  <block-variant header="">
    <view class="list-item">
      <view class="subtitle mb-8">2. Shape</view>
      <view class="sub-content mb-8">Rounded & Pill</view>
      <view class="line" />

      <view class="list-item-label">
        <textfield placeholder="Placeholder" labelText="Rounded" shape="rounded" />
      </view>
      <view class="list-item-label">
        <textfield placeholder="Placeholder" labelText="Pill" shape="pill" />
      </view>
    </view>
  </block-variant>

  <block-variant header="">
    <view class="list-item">
      <view class="subtitle mb-8">3. Content</view>
      <view class="sub-content mb-8">Text only, Leading icon, Trailing icon.</view>
      <view class="line" />

      <view class="list-item-label">
        <textfield placeholder="Placeholder" />
      </view>
      <view class="list-item-label">
        <textfield placeholder="Placeholder" leadingIcon="placeholder" />
      </view>
      <view class="list-item-label">
        <textfield placeholder="Placeholder" trailingIcon="placeholder" />
      </view>

      <view class="list-item-label">
        <textfield placeholder="Placeholder" leadingIcon="placeholder" trailingIcon="placeholder" />
      </view>

      <view class="list-item-label">
        <textfield placeholder="Placeholder" prefix="text" prefixContent="Label" />
      </view>

      <view class="list-item-label">
        <textfield placeholder="Placeholder" suffix="button" suffixContent="Button" />
      </view>

      <view class="list-item-label">
        <textfield placeholder="Placeholder" prefix="text" prefixContent="Label" suffix="button"
          suffixContent="Button" />
      </view>
    </view>
  </block-variant>

  <block-variant header="">
    <view class="list-item">
      <view class="subtitle mb-8">4. States & Statuses</view>
      <view class="sub-content mb-8">Empty, Hove, Focus, Typing, Filled, Disabled, Error, Skeleton loading.</view>
      <view class="line" />

      <view class="list-item-label">
        <textfield value="{{filled}}" labelText="Label" onInput="onChangeFilled" />
      </view>
      <view class="list-item-label">
        <textfield disabled labelText="Label" placeholder="Placeholder" />
      </view>
      <view class="list-item-label">
        <textfield hasError errorMsg="Error message" placeholder="Placeholder" labelText="Label" />
      </view>

      <view class="list-item-label">
        <textfield hasSuccess successMsg="Success message" placeholder="Placeholder" labelText="Label" />
      </view>
      <view class="list-item-label">
        <textfield loading placeholder="Placeholder" />
      </view>
    </view>
  </block-variant>
</view>
```

```js title=index.js
Page({
  data: {
    filled: 'Filled'
  },
  onInput(event) {
    console.log('onInput', event);
  },
  onConfirm(event) {
    console.log('onConfirm', event);
  },
  onFocus(event) {
    console.log('onFocus', event);
  },
  onBlur(event) {
    console.log('onBlur', event);
  },
  onChangeFilled(event) {
    this.setData({ filled: event.detail.value });
  }
});
```

```css title=index.tcss
.list-item-label {
  margin-bottom: 16px;
}

.sub-content {
  color: var(--text-content-secondary);
  font-size: 12px;
}

.line {
  margin-bottom: 8px;
}

.list-item {
  display: block;
}
```
