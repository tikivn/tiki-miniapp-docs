---
title: avatar
sidebar_custom_props:
  description: Component Tini UI - Hiển thị hình ảnh của user, tên, hoặc text giới thiệu
---

`avatar` là component dùng để hiển thị hình ảnh của user, tên, hoặc text giới thiệu.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/advance/navigation/avatar/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/component/advance/navigation/avatar/index" />

## Thuộc tính

| Thuộc tính | Kiểu dữ liệu | Giá trị mặc định | Mô tả                            |
| ---------- | ------------ | ---------------- | -------------------------------- |
| size       | string       | md               | Kích thước avatar (lg/md/xs)     |
| shape      | string       | circle           | Các giá trị: "circle","standard" |
| src        | string       | ""               | source hình ảnh                  |
| style      | string       | ""               | Disabled button                  |

## Sample Code:

Khai báo components:

```json
{
  "defaultTitle": "Avatar",
  "usingComponents": {
    "avatar": "@tiki.vn/tini-ui/es/avatar/index"
  }
}
```

### Shape: circle

```xml title=index.txml
<view class="container">
 <view class="content" style="margin-top:32px">
      <text class="content-label">Shape: circle, Size:lg-md-xs</text>
      <view style="flex-direction:row;align-items:flex-end">
          <avatar name="Avatar" size="lg" style="margin:8px" src="https://www.denofgeek.com/wp-content/uploads/2016/11/avatar-sequel.jpg"/>
          <avatar name="Default" size="md" style="margin:8px" />
          <avatar name="Author" size="xs" style="margin:8px" />
      </view>
  </view>
</view>
```

_Result:_

```__react
import image from '../../../theme/static/images/avatar-circle.png'
ReactDOM.render(<img style={{maxWidth: 414}} alt="Avatar" src={image}/>, mountNode);
```

### Shape: standard

```xml title=index.txml
<view class="container">
  <view class="content" style="margin-top:32px">
      <text class="content-label">Shape: standard, Size:lg-md-xs</text>
      <view style="flex-direction:row;align-items:flex-end">
          <avatar name="Avatar" size="lg" style="margin:8px" shape="standard" src="https://www.denofgeek.com/wp-content/uploads/2016/11/avatar-sequel.jpg"/>
          <avatar name="Default" size="md" style="margin:8px" shape="standard"/>
          <avatar name="Author" size="xs" style="margin:8px" shape="standard"/>
      </view>
  </view>
</view>
```

_Result_

```__react
import image from '../../../theme/static/images/avatar-standard.png'
ReactDOM.render(<img style={{maxWidth: 414}} alt="Avatar" src={image}/>, mountNode);
```

## Advance

Sử dụng component avatar để implement user item

### Example

```xml title=index.tcss
<view class="content">
  <list>
      <list-item
          upperSubtitle="We're using react-native-config for configuration, so to make android work with config we need to add below line to android/app/build.gradle"
          >
      <view slot="supporting">
          <avatar size="lg" style="margin:8px" src="https://www.denofgeek.com/wp-content/uploads/2016/11/avatar-sequel.jpg"/>
      </view>
          Lý Nhân
  </list-item>
</list>
</view>
```

```__react
import image from '../../../theme/static/images/avatar-row.png'
ReactDOM.render(<img style={{maxWidth: 414}} alt="Avatar" src={image}/>, mountNode);
```

### Example

```xml title=index.tcss
<view class="content">
    <view class="avatar-wrapper">
        <avatar
            size="md"
            shape="standard"
            src="https://www.denofgeek.com/wp-content/uploads/2016/11/avatar-sequel.jpg"
          />
        <text class="avatar-name">Username</text>
        <text class="avatar-desc">Dev Assistant is a mini app that lists all mini apps of a developer which are build on tiki-studio</text>
    </view>
</view>
```

```css title=index.tcss
.avatar-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
}
.avatar-info {
  padding: 8;
  max-width: 300px;
}
.avatar-info-name {
  font-size: 16px;
  font-weight: 500;
}
.avatar-info-desc {
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
}
```

_Result_

```__react
import image from '../../../theme/static/images/avatar-column.png'
ReactDOM.render(<img style={{maxWidth: 414}} alt="Button" src={image}/>, mountNode);
```

```js title=index.js
Page({
  data: {},
  onError() {
    console.log('Onload error');
  }
});
```
