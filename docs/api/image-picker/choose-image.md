---
title: my.chooseImage
---

## Giới thiệu

**my.chooseImage** là API dùng để lấy hình từ camera hoặc từ album.

## Sử dụng

### Sample Code

```xml
<view class="block-content">
    <button class="button-full" onTap="onChooseImage">Choose Image</button>
  </view>
  <image src="{{img}}"/>
```

```js
Page({
  data: {
    img: undefined
  },
  doPayment() {
    my.chooseImage({
      success: (res) => {
        this.setData({
          img: res.uri
        });
      }
    });
  }
});
```

### API Params

Các thuộc tính:

| Attributes | Type     | Required | Description                                                                    |
| ---------- | -------- | -------- | ------------------------------------------------------------------------------ |
| success    | Function | No       | Callback function khi pick image được thực hiện thành công                     |
| fail       | Function | No       | Callback function khi pick image thất bại                                      |
| complete   | Function | No       | Callback function khi việc pick image kết thúc cho dù thành công hay thất bại. |

### Callback function payload

| Attributes | Type   | Description                |
| ---------- | ------ | -------------------------- |
| uri        | base64 | Data của image dạng base64 |
| width      | number | Chiều rộng của image       |
| height     | number | height của image           |

```__react
import image from '../../../theme/static/images/choose-image.gif'
ReactDOM.render(<img style={{maxWidth: 414}} alt="choose-image" src={image}/>, mountNode);
```
