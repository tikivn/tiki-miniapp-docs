---
title: map
---

- `map` component sử dụng google maps để phục vụ các tác vụ liên quan tới map

***Lưu ý:*** Component này có mặt trên Tini Studio từ version 1.74.12 trở lên.

## Các thuộc tính

| Thuộc tính     | Kiểu dữ liệu | Giá trị măc định | Bắt buộc | Mô tả                                                                                                                          |
| -------------- | ------------ | ---------------- | :------: | ------------------------------------------------------------------------------------------------------------------------------ |
| api-key        | string       |                  |    ✓     | Key của google maps. Tham khảo cách tạo key [tại đây](https://developers.google.com/maps/documentation/javascript/get-api-key) |
| latitude       | number       |                  |    ✓     | Vĩ độ trung tâm (center latitude) của map                                                                                      |
| longitude      | number       |                  |    ✓     | Kinh độ trung tâm (center longitude) của map                                                                                   |
| zoom           | number       | 10               |          | Mức độ phóng to/ thu nhỏ                                                                                                       |
| markers        | object       |                  |          | Một marker để đánh dấu bản đồ. Tham khảo cấu hình bên dưới.                                                                    |
| polygon        | object       |                  |          | Một polygon (đa giác) để đánh dấu bản đồ. Xem chi tiết bên dưới.                                                               |
| polyline       | object       |                  |          | Một polyline (đường đa tuyến) để đánh dấu bản đồ. Xem chi tiết bên dưới                                                        |
| circles        | object       |                  |          | Một circle (hình tròn) để đánh dấu bản đồ. Xem chi tiết bên dưới.                                                              |
| onMarkerTap    | event        |                  |          | Sự kiện được kích hoạt khi touch vào marker. Thông tin trả về sẽ là `Marker ID`, `latitude` và `longitude`.                    |
| onTap          | event        |                  |          | Sự kiện được gọi khi bấm vào map                                                                                               |
| onRegionChange | event        |                  |          | Sự kiện được gọi khi người dùng kéo/thả làm thay đổi phạm vi của map. Có chứa các thông tin `{ latitude, longitude, zoom }`    |

### Marker

<img src="/img/Map_marker.png" width="80px" alt="Marker" style={{ margin: '0 auto', display: 'flex' }}/>

| Thuộc tính | Kiểu dữ liệu    | Bắt buộc | Mô tả                                                                                                                                                    |
| ---------- | --------------- | :------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id         | number          |    ✓     | Định danh duy nhất của marker.                                                                                                                           |
| latitude   | number          |    ✓     | Vĩ độ trung tâm (center latitude) của marker                                                                                                             |
| longitude  | number          |    ✓     | Kinh độ trung tâm (center longitude) của marker                                                                                                          |
| title      | string          |          | Tiêu đề của marker                                                                                                                                       |
| iconPath   | string          |          | Đường dẫn đến tập tin hình ảnh của icon tuỳ biến đại diện cho marker trường hợp bạn không muốn xài icon mặc định của Google Maps.                        |
| width      | number          |          | Chiều rộng của marker                                                                                                                                    |
| height     | number          |          | Chiều cao của marker                                                                                                                                     |
| label      | string / object |          | Nhãn cho marker. Bạn có thể truyền vào string hoặc một object `{ text: string, className: string, color: string, fontSize: string, fontWeight: string }` |
| alpha      | number          |          | Độ trong suốt của marker. Nhận giá trị trong khoảng từ  0 đến 1; 0: độ trong suốt tuyệt đối (100% transparency); 1: độ đục tuyệt đối (100% opacity).     |

### Polygon

<img src="/img/Map_polygon.png" width="450px" alt="Polygon" style={{ margin: '0 auto', display: 'flex' }}/>

<br/>

| Thuộc tính  | Kiểu dữ liệu     | Bắt buộc | Mô tả                                                    |
| ----------- | ---------------- | :------: | -------------------------------------------------------- |
| points      | Array of objects |    ✓     | Chứa tọa độ (latitude và longitude) các đỉnh của đa giác |
| fillColor   | string           |          | Màu nền của đa giác                                      |
| strokeColor | string           |          | Màu viền của đa giác                                     |
| strokeWidth | string           |          | Độ dày của viền đa giác                                  |

### Polyline

<img src="/img/Map_polyline.png" width="450px" alt="Polyline" style={{ margin: '0 auto', display: 'flex' }}/>

<br/>

| Thuộc tính  | Kiểu dữ liệu     | Bắt buộc | Mô tả                                                                      |
| ----------- | ---------------- | :------: | -------------------------------------------------------------------------- |
| points      | Array of objects |          | Chứa tọa độ (latitude và longitude) các điểm của polyline (đường đa tuyến) |
| strokeColor | string           |          | Màu viền của polyline                                                      |
| strokeWidth | number           |          | Độ dày của viền đa giác                                                    |

### Circle

<img src="/img/Map_circle.png" width="450px" alt="Circle" style={{ margin: '0 auto', display: 'flex' }}/>

<br/>

| Thuộc tính  | Kiểu dữ liệu | Bắt buộc | Mô tả                      |
| ----------- | ------------ | :------: | -------------------------- |
| latitude    | number       |    ✓     | Vĩ độ của tâm đường tròn   |
| longitude   | number       |    ✓     | Kinh độ của tâm đường tròn |
| radius      | number       |    ✓     | Bán kính đường tròn        |
| fillColor   | string       |          | Màu nền của đường tròn     |
| strokeColor | string       |          | Màu viền của đường tròn    |
| strokeWidth | number       |          | Độ dày viền của đường tròn |

***Lưu ý:*** Trong một số trường hợp map không hiển thị trên device. Bạn cần khai báo giá trị cụ thể width, height cho map mà không phải là %

## Sample Code

Một số component được sử dụng trong source [API Demo](https://github.com/tikivn/miniapp-getting-started/tree/main/api-demo).

**pages/component/basic/map/index.txml**

```xml
<view class="container">
  <view class="block">
    <map
      class="map"
      onTap="onTap"
      onMarkerTap="onMarkerTap"
      latitude="{{latitude}}"
      longitude="{{longitude}}"
      zoom="{{zoom}}"
      markers="{{markers}}"
      polyline="{{polyline}}"
      polygon="{{polygon}}"
      circles="{{circles}}"
      apiKey="{{apiKey}}" />
  </view>

  <view class="block">
    <view class="actions">
      <button onTap="resetMap">Reset Map</button>
      <button onTap="showMarker">Marker</button>
      <button onTap="showPolygon">Polygon</button>
      <button onTap="showPolyline">Polyline</button>
      <button onTap="showCircle">Circle</button>
    </view>
  </view>
</view>

```

**pages/component/basic/map/index.js**

```js
const init = () => ({
  latitude: 10.779693436530149,
  longitude: 106.67971686137946,
  markers: [],
  polygon: [],
  polyline: [],
  zoom: 10,
  circles: []
});

Page({
  data: {
    apiKey: 'YOUR_GOOGLE_MAP_API_KEY',
    ...init()
  },
  resetMap() {
    this.setData({ ...init() });
  },
  onMarkerTap(event) {
    console.log('onMarkerTap', event);
  },
  onTap(event) {
    console.log('onTap', event);
  },
  showPolyline() {
    this.setData({
      zoom: 3,
      latitude: 0,
      longitude: -180,
      polyline: [
        {
          strokeColor: '#FF0000',
          strokeWidth: 2,
          points: [
            { latitude: 37.772, longitude: -122.214 },
            { latitude: 21.291, longitude: -157.821 },
            { latitude: -18.142, longitude: 178.431 },
            { latitude: -27.467, longitude: 153.027 }
          ]
        }
      ]
    });
  },
  showPolygon() {
    this.setData({
      zoom: 5,
      latitude: 24.886,
      longitude: -70.268,
      polygon: [
        {
          strokeColor: '#FF0000',
          strokeWidth: 2,
          fillColor: '#FF0000',
          points: [
            { latitude: 25.774, longitude: -80.19 },
            { latitude: 18.466, longitude: -66.118 },
            { latitude: 32.321, longitude: -64.757 },
            { latitude: 25.774, longitude: -80.19 }
          ]
        }
      ]
    });
  },
  showCircle() {
    const citymap = {
      chicago: {
        latitude: 41.878,
        longitude: -87.629,
        population: 2714856
      },
      newyork: {
        latitude: 40.714,
        longitude: -74.005,
        population: 8405837
      },
      losangeles: {
        latitude: 34.052,
        longitude: -118.243,
        population: 3857799
      },
      vancouver: {
        latitude: 49.25,
        longitude: -123.1,
        population: 603502
      }
    };
    this.setData({
      zoom: 4,
      latitude: 41.878,
      longitude: -87.629,
      circles: Object.keys(citymap).map((key) => ({
        strokeColor: '#FF0000',
        strokeWidth: 2,
        fillColor: '#FF0000',
        latitude: citymap[key].latitude,
        longitude: citymap[key].longitude,
        radius: Math.sqrt(citymap[key].population) * 100
      }))
    });
  },
  showMarker() {
    this.setData({
      zoom: 4,
      latitude: -25.363,
      longitude: 131.044,
      markers: [
        {
          id: '1',
          latitude: -25.363,
          longitude: 131.044
        }
      ]
    });
  }
});
```

**pages/component/basic/map/index.tcss**

```css
.map {
  height: calc(var(--tf-window-height) / 2);
}

.container {
  min-height: 100%;
  background-color: var(--gray20);
  padding: 16px;
}

.block {
  background-color: white;
  margin: 8px 0;
  padding: 16px;
  border-radius: var(--border-radius-rounded-4px);
}

.actions {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4px;
}
```
