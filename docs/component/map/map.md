---
title: map
---

## Giới thiệu

- `map` component sử dụng google maps để phục vụ các tác vụ liên quan tới map
- Bạn phải sử dụng version từ `1.74.12` trở lên

## Sử dụng

### Sample Code

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
    apiKey: 'AIzaSyDY6f-OwKoI7g7VtWUcBhKKieXfyHKBHw8',
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

## Chi tiết

### Các thuộc tính

| Property       | Type           | Default | Require | Description                                                                                                                               |
| -------------- | -------------- | ------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| api-key        | string         |         | true    | Key của google maps, bạn có thể tham khảo cách tạo key [tại đây](https://developers.google.com/maps/documentation/javascript/get-api-key) |
| latitude       | number         |         | true    | Center latitude                                                                                                                           |
| longitude      | number         |         | true    | Center longitude                                                                                                                          |
| zoom           | number         | 10      |         | Zoom level                                                                                                                                |
| markers        | array marker   |         |         | Mảng các marker. Bạn có thể xem cấu hình marker bên dưới                                                                                  |
| polygon        | array polygon  |         |         | Mảng các polygon. Bạn có thể xem cấu hình polygon bên dưới                                                                                |
| polyline       | array polyline |         |         | Mảng các polyline. Bạn có thể xem cấu hình polyline bên dưới                                                                              |
| circles        | array circle   |         |         | Mảng các circle. Bạn có thể xem cấu hình circle bên dưới                                                                                  |
| onMarkerTap    | event          |         |         | Sự kiện được gọi khi bấm vào marker. Có chứa các thông tin: `{ markerId, latitude, longitude }`                                           |
| onTap          | event          |         |         | Sự kiện được gọi khi bấm vào map                                                                                                          |
| onRegionChange | event          |         |         | Sự kiện được gọi khi người dùng kéo/thả làm thay đổi phạm vi của map. Có chứa các thông tin `{ latitude, longitude, zoom }`               |

### Marker

| Property  | Type                 | Require | Description                                                                                                                                               |
| --------- | -------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id        | number               | true    | Id của marker, giúp bạn phân biệt các marker khi `onMarkerTap` được gọi                                                                                   |
| latitude  | number               | true    | Center latitude                                                                                                                                           |
| longitude | number               | true    | Center longitude                                                                                                                                          |
| title     | string               |         | Tiêu đề của marker                                                                                                                                        |
| iconPath  | string               |         | Đường dẫn tới file image cho icon của marker trong trường hợp bạn muốn custom lại icon cho marker. Mặc định sẽ dùng icon từ google maps                   |
| width     | number               |         | Width của marker                                                                                                                                          |
| height    | number               |         | Height của marker                                                                                                                                         |
| label     | string / MarkerLabel |         | Label cho marker. Bạn có thể truyền vào string hoặc một object `{ text: string, className: string, color: string, fontSize: string, fontWeight: string }` |
| alpha     | number               |         | Độ trong suốt cho marker                                                                                                                                  |

### Polygon

| Property    | Type                                           | Require | Description                                                          |
| ----------- | ---------------------------------------------- | ------- | -------------------------------------------------------------------- |
| points      | Array<{ latitude: number; longitude: number }> | true    | Mảng object chứa `latitude` và `longitude` của các điểm trên polygon |
| fillColor   | string                                         |         | Màu nền của polygon                                                  |
| strokeColor | string                                         |         | Màu viền của polygon                                                 |
| strokeWidth | string                                         |         | Width của viền polygon                                               |

### Polyline

| Property    | Type                                           | Require | Description                                                           |
| ----------- | ---------------------------------------------- | ------- | --------------------------------------------------------------------- |
| points      | Array<{ latitude: number; longitude: number }> | true    | Mảng object chứa `latitude` và `longitude` của các điểm trên polyline |
| strokeColor | string                                         |         | Màu của polyline                                                      |
| strokeWidth | string                                         |         | Width của polyline                                                    |

### Circle

| Property    | Type   | Require | Description                     |
| ----------- | ------ | ------- | ------------------------------- |
| latitude    | number | true    | Center latitude                 |
| longitude   | number | true    | Center longitude                |
| radius      | number | true    | Bán kính circle (đơn vị meters) |
| fillColor   | string |         | Màu nền của circle              |
| strokeColor | string |         | Màu viền của circle             |
| strokeWidth | string |         | Width của viền circle           |
