---
title: Avatar
---

## Giới thiệu

Compnent avatar dùng để hiển thị hình ảnh của user, tên, hoặc text giới thiệu.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/advance/navigation/avatar/index" />

## Sử dụng

### Sample Code:

Khai báo components:

```json
{
  "defaultTitle": "Avatar",
  "usingComponents": {
    "avatar": "@tikivn/mini-ui/lib/avatar/index"
  }
}
```

#### Shape: circle

_index.txml_

```xml
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

#### Shape: standard

_index.txml_

```xml
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

### Advance

Sử dụng component avatar để implement user item

#### Sample

_index.tcss_

```xml
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

#### Sample

_index.tcss_

```xml
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

_index.tcss_

```css
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

**index.js**

```js
Page({
  data: {},
  onError() {
    console.log('Onload error');
  }
});
```

### Chi tiết

| Property | Type   | Default Value | Description                      |
| -------- | ------ | ------------- | -------------------------------- |
| size     | string | md            | Kích thước avatar (lg/md/xs)     |
| shape    | string | circle        | Các giá trị: "circle","standard" |
| src      | string | ""            | source hình ảnh                  |
| style    | string | ""            | Disabled button                  |

<img alt="Avatar" src="/img/avatar-full.png"/>
