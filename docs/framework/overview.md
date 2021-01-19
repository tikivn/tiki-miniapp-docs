---
order: 0
title:
  vi-VN: Tổng quan về framework
  en-US: Framework Overview
---

Tiki MiniApp Framework được thiết kế để cho phép các nhà phát triển xây dựng ứng dụng của mình với trải nghiệm native app trên nền tàng Tiki một cách dễ dàng và đa dạng tính năng nhất có thể.

Một ứng dụng MiniApp bao gồm 2 thành phần chính đó là `app` và `page`. Trong đó `app` là thể hiện của toàn ứng dụng (tương đương với `UIApplicationDelegate` của iOS hoặc `Application` của android). `Page` là đại diện của một màn hình trong ứng dụng và trong một ứng dụng sẽ có thể bao gồm một hoặc nhiều pages.

Cấu trúc thư mục của một MiniApp đơn giản sẽ bao gồm:

```
- miniapp-project/
 |- src/
   |- pages/
     |- index/
     |  index.js
     |  index.json
     |  index.txml
     |  index.tcss
   |  app.js
   |  app.json
   |  app.tcss
 |  package.json
```

Đại diện của `app` bao gồm 3 files và phải được đặt ở thư
mục gốc của dự án:

| File     | Required | Description                  |
| -------- | -------- | ---------------------------- |
| app.js   | yes      | Logic của ứng dụng           |
| app.json | yes      | Cấu hình cho ứng dụng        |
| app.tcss | no       | StyleSheet cho toàn ứng dụng |

Mỗi `page` trong app bao gồm các files sau và được đặt trong thư mục bất kỳ từ thư mục gốc của dự án:

| File       | Required | Description                             |
| ---------- | -------- | --------------------------------------- |
| index.js   | yes      | Logic của page                          |
| index.txml | yes      | Thể hiện UI của page sử dụng jsx syntax |
| index.tcss | no       | StyleSheet áp dụng cho page             |
| index.json | no       | Cấu hình của page                       |

**Note:** Tên file có thể là bất kỳ và tất cả các loại file cần có cùng tên và phải cùng đặt chung thư mục.

## Reactive Data Binding

Mỗi màn hình trên MiniApp được phân tách thành 2 layers riêng biệt là `Logic Layer` và `View Layer`.
Việc phát triển `View Layer` sử dụng syntax [txml](/docs/framework/txml/introduction).
`Logic Layer` thì được phát triển sử sử dụng ngôn ngữ Javascript. Và việc trao đổi thông tin giữa 2 layers này dựa trên hệ thống reactive data binding.

Nói một cách khác 2 layers dù tách biệt nhưng vẫn luôn được đồng bộ. Một khi dữ liệu thay đổi từ logic layer sẽ được update lập tức tương ứng trên view layer.

```xml
<view>
  <text>Hello {data.name}</text>
</view>;
```

```js
Page({
  data: {
    name: "Guest",
  },
  onLoad() {
    // set data để thay đổi view
    this.setData({
      name: "Nguyen Van A",
    });
  },
});
```

Trong ví dụ trên biến `name` trong object `data` ở logic layer sẽ được bind với biết `data.name` ở view layer (Tương tự như biến `state` ở reactjs).

Khi ứng dụng được chạy, hàm `onLoad` sẽ được chạy và việc `setData({ name })` sẽ lập tứng cập nhật biến `name` ở trong data ở view layer.

## Quản lý Page

Việc chuyển đổi giữa các màn hình hoàn toàn được quản lý bởi framework và cung cấp rất nhiều cơ chế mở để nhà phát triển có thể chuyển đổi giữa các page một cách dễ dàng.

Ngoài ra framework cũng cung cấp rất đa dạng lifecycle của một page, để nhà phát triển có thể tuỳ biến theo mọi nhu cầu của việc phát triển một ứng dụng.

Tất cả các hoạt động phức tạp đều được xử lý bởi framework, nhờ đó nhà phát triển có thể tập trung vào business logic của mình thông qua việc thay đổi data hoặc handle các page lifecycle methods. Việc này sẽ giúp rút ngắn rất nhiều quy trình phát triển một ứng dụng.

```js
// Ví dụ 1 page logic với các lifecycle methods
Page({
  data: {},
  onLoad(query) {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
});
```

## Components

Framework cung cấp nhiều nhất có thể các UI Components từ đơn giản tới phức tạp theo design system của Tiki. Bằng cách kết hợp các thành phần đó lại, nhà phát triển có thể xây dựng các ứng dụng với những trải nghiệm tốt nhất cho khách hàng với thới gian ngắn nhất.

## JSAPIs

Bên cạnh các UI Components thì framework còn cung cấp đa dạng các JSAPIs giúp nhà phát triển dễ dàng sử dụng các tính năng của thiết bị cũng như các dịch vụ của Tiki.
