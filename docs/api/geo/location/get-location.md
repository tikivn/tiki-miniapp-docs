---
title: my.getLocation
---

## Giới thiệu

**my.getLocation** là API dùng để lấy thông tin vị trí địa lí hiện tại của device
## Lưu ý:
- Khả dụng: từ runtime version 1.73.1 trở lên.

### Sample Code

```xml
<view>
  <view class="block-content">
    <button class="button-full" onTap="onGetLocation">Get User Location</button>
  </view>
  <view class="block-content" hidden={{!location}}>
    <view class="title mb-8">Current location:</view>
    <text class="text-full">Latitude:{{location.latitude}}</text>
    <text class="text-full">Longitude:{{location.longitude}}</text>
    <text class="text-full">Altitude:{{location.altitude}}</text>
    <text class="text-full">Accuracy:{{location.accuracy}}</text>
    <text class="text-full">Altitude Accuracy:{{location.altitudeAccuracy}}</text>
    <text class="text-full">Heading:{{location.heading}}</text>
    <text class="text-full">Speed:{{location.speed}}</text>
  </view>
</view>
```

```js
Page({
  data: {
    location: undefined,
  },
  onGetLocation() {
    my.getLocation({
      cacheTimeout: 30,
      success: (res) => {
        this.setData({ location: res });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
});

```

### API Params

Các thuộc tính:

| Attributes | Type     | Required | Description                                                                    |
| ---------- | -------- | -------- | ------------------------------------------------------------------------------ |
| cacheTimeout      | Number   | No       |  Thời gian cache của latitude, longitude. Đơn vị là giây. Default là 30s. Sử dụng cache time sẽ tăng speed của việc lấy location và tiết kiệm pin hơn            |
| type | Number    | No       | Chọn độ chính xác: <br/>0 - low accuracy. Sử dụng wifi để lấy location <br/> 1 - high accuracy. Sử dụng GPS để lấy location |
| success    | Function | No       | Callback function khi lấy thông tin location được thực hiện thành công                     |
| fail       | Function | No       | Callback function khi lấy thông tin location thất bại                                      |
| complete   | Function | No       | Callback function khi việc lấy thông tin location kết thúc cho dù thành công hay thất bại. |

### Callback success function payload

| Attributes | Type   | Description                |
| ---------- | ------ | -------------------------- |
| latitude  | Number  | Latitude |
| longitude  | Number  | Longitude |  
| altitude  | Number  | Altitude |   
| accuracy  | Number  | Accuracy (m) |        
| altitudeAccuracy  | Number  | Altitude accuracy |                   
| heading  | Number  | Heading |         
| speed | Number | Speed |