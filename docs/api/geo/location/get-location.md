---
title: my.getLocation
---

`my.getLocation` là API dùng để lấy thông tin vị trí địa lí hiện tại của device.

***Khả dụng***: Hỗ trợ từ runtime version 1.73.1 trở lên.

### API Params

| Thuộc tính | Kiểu dữ liệu     |  Mô tả                                                                     |
| ---------- | -------- | ------------------------------------------------------------------------------ |
| cacheTimeout      | number  | Thời gian mà cache toạ độ địa lý của thiết bị có hiệu lực. Đơn vị tính là giây, mặc định 30 giây. Sử dụng cache toạ độ giúp tăng tốc độ lấy location, đồng thời tiết kiệm pin.  |
| type | number    | Chọn độ chính xác: <br/>0 - low accuracy. Sử dụng wifi để lấy location <br/> 1 - high accuracy. Sử dụng GPS để lấy location |
| success    | Function | Callback function khi lấy thông tin location được thực hiện thành công                     |
| fail       | Function | Callback function khi lấy thông tin location thất bại                                      |
| complete   | Function | Callback function khi việc lấy thông tin location kết thúc cho dù thành công hay thất bại |

### Callback success function payload

| Thuộc tính | Kiểu dữ liệu    | Mô tả                  |
| ---------- | ------ | -------------------------- |
| latitude  | number  | Kinh độ của thiết bị |
| longitude  | mumber  | Vĩ độ của thiết bị |  
| altitude  | number  | Độ cao của thiết bị so với mực nước biển  |
| accuracy  | number  | Độ chính xác của vị trí; tính bằng mét |
| altitudeAccuracy  | number  | Độ chính xác của độ cao; tính bằng mét |
| heading  | number  | Hướng di chuyển |
| speed | number | Tốc độ di chuyển; tính bằng m/s |

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

