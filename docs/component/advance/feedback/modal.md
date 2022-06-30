---
title: modal
sidebar_custom_props:
  description: Component Tini UI - Hiển thị hoặc yêu cầu thao tác của người dùng mà không phải chuyển trang
---

Khi ứng dụng cần cảnh báo hoặc nhắc nhở người dùng, yêu cầu thao tác của người dùng mà không phải chuyển trang, bạn có thể sử dụng modal.
Người dùng cần thực hiện các thao tác trên modal trước khi đóng.

<img style={{ width: '100%', maxWidth: 360 }} src="https://salt.tikicdn.com/ts/tiniapp/f7/4f/11/d936e3e772479908fa56979a94ca7af2.gif"/>

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/advance/modal/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/advance/modal/index" />

## Thuộc tính

| Thuộc tính    | Kiểu dữ liệu            | Giá trị mặc định   | Mô tả                                                                             |
| ------------- | ----------------------- | ------------------ | --------------------------------------------------------------------------------- |
| show          | boolean                 | false              | Hiện/ẩn modal                                                                     |
| showClose     | boolean                 | true               | Hiển thị button đóng modal, Cần implement props **onModalClose**                  |
| className     | string                  |                    | Thêm class cho modal                                                              |
| mask          | boolean                 | true               | Hiển thị mask                                                                     |
| topImage      | string                  | undefined          | Hiển thị hình ảnh ở trên top của modal                                            |
| topImageSize  | 'lg', 'md', 'sm'        | md                 | Quyết định size render của topImage                                               |
| buttons       | Button[]                | undefined          | Custom bottom buttons, implement props **onButtonClick** bind function vào button |
| buttonsLayout | 'horizontal','vertical' | 'horizontal'       | Mask=true, khi click vào mask sẽ trigger function onClose                         |
| advice        | boolean                 | false              | Close button ở bottom                                                             |
| onModalClick  | event                   | () => void         | Trigger function này khi click vào footer slot                                    |
| onMaskClick   | event                   | () => void         | Trigger function này khi click vào mask                                           |
| onModalClose  | event                   | () => void         | Function này sẽ được trigger khi click vào close button                           |
| onButtonClick | event                   | (e:Object) => void | Function sẽ được bind và trigger khi click vào custom button                      |

### buttons

| Thuộc tính | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                                            |
| ---------- | ------------ | ---------------- | ---------------------------------------------------------------- |
| type       | string       | solid            | Kiểu button. Nhận các giá trị = [solid \|\| outline \|\| ghost]. |
| text       | string       | ''               | Hiển thị text button                                             |
| extClass   | string       | ''               | Class cho button                                                 |

### slots

| Thuộc tính  | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                       |
| ----------- | ------------ | ---------------- | ------------------------------------------- |
| header      | boolean      | false            | Render component ở section header           |
| description | boolean      | false            | Render component ở dưới header và trên body |
| footer      | boolean      | false            | Render component ở section footer           |

## Sample Code

```json title=index.json
{
  "defaultTitle": "Modal",
  "usingComponents": {
    "modal": "@tiki.vn/tini-ui/es/modal/index"
  }
}
```

```js title=index.js
Page({
  data: {
    show: false
  },

  handleShowModal() {
    this.setData({ show: true });
  },

  handleHideModal() {
    this.setData({ show: false });
  },

  handleTapButton(event) {
    const { item } = event.target.dataset;
    my.alert({ content: JSON.stringify(item) });
    this.handleHideModal();
  }
});
```

### Basic

<img style={{ width: '100%', maxWidth: 360 }} src="https://salt.tikicdn.com/ts/tiniapp/7e/dc/03/5cbd60b08b386acf78ae09bd715c77be.png"/>

```xml title=index.txml
<button onTap="handleShowModal">Show modal</button>

<modal
  show="{{show}}"
  buttons="{{[{'text': 'Close'}]}}"
  onMaskClick="handleHideModal"
  onButtonClick="handleTapButton"
>
  <view slot="header">Title</view>
  <view slot="description">Description</view>
  <view class="modal-content">
    Swap me!!!
  </view>
</modal>
```

### Top Image

<img style={{ width: '100%', maxWidth: 360 }} src="https://salt.tikicdn.com/ts/tiniapp/c5/bf/a6/73947c34eb1f06e8b56f43119f36c18a.png"/>

```xml title=index.txml
<button onTap="handleShowModal">Show modal</button>

<modal
  show="{{show}}"
  topImage="http://placeimg.com/640/480"
  topImageSize="lg"
  buttons="{{[{'text': 'Cancel', type: 'outline'}, {'text': 'OK'}]}}"
  onMaskClick="handleHideModal"
  onButtonClick="handleTapButton"
>
  <view slot="header">Title</view>
  <view slot="description">Description</view>
  <view class="modal-content">
    Swap me!!!
  </view>
</modal>

```

### Custom Button

<img style={{ width: '100%', maxWidth: 360 }} src="https://salt.tikicdn.com/ts/tiniapp/b2/d2/92/db92c764b59f46dc57036c99cd134f5b.png"/>

```xml title=index.txml
<button onTap="handleShowModal">Show modal</button>

<modal
  show="{{show}}"
  buttons="{{[{'text': 'Close', type: 'ghost'}, {'text': 'Cancel', type: 'outline'}, {'text': 'OK'}]}}"
  buttonsLayout="vertical"
  onMaskClick="handleHideModal"
  onButtonClick="handleTapButton"
>
  <view slot="header">Title</view>
  <view slot="description">Description</view>
</modal>
```
