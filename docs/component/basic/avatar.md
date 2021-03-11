---
order: 10
category:
  vi-VN: Thành phần cơ bản
  en-US: Basic components
title:
  vi-VN: avatar
  en-US: avatar
---

## Giới thiệu

Compnent avatar dùng để hiển thị hình ảnh của user, tên, hoặc text giới thiệu.

## Sử dụng

### Sample Code:

#### Shape: circle

*index.txml*
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

*Result:*
```__react
import image from '../../../theme/static/images/avatar-circle.png'
ReactDOM.render(<img style={{maxWidth: 414}} alt="Avatar" src={image}/>, mountNode);
```

#### Shape: standard

*index.txml*
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
*Result*
```__react
import image from '../../../theme/static/images/avatar-standard.png'
ReactDOM.render(<img style={{maxWidth: 414}} alt="Avatar" src={image}/>, mountNode);
```

### Advance
Sử dụng component avatar để implement user item

#### Sample
*index.tcss*
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
*index.tcss*
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
*index.tcss*
```css
.avatar-wrapper {
    display:flex;
    flex-direction:column;
    align-items:center;
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
*Result*

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
  },
});
```

### Chi tiết

| Property | Type    | Default Value | Description                                       |
| -------- | ------- | ------------- | ------------------------------------------------- |
| size     | string  | md          | Kích thước avatar (lg/md/xs)                      |
| shape    | string  | circle      | Các giá trị: "circle","standard"                  |
| src      | string  | ""            | source hình ảnh                                   |
| style    | string  | ""            | Disabled button                                   |
| onError  | event   | null          | Trigger khi load ảnh không thành công             |

```__react
import image from '../../../theme/static/images/avatar-full.png'
ReactDOM.render(<img style={{maxWidth: 414}} alt="Button" src={image}/>, mountNode);
```
