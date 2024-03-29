---
title: Component Object
---


:::Important

Các hàm xử lý sự kiện của một component (ví dụ như `onTap`) không được hỗ trợ mặc định, các Custom Component phải cài đặt các hàm này.

:::

## Component Constructor

```js
// /components/index/index.js
Component({
  mixins: [{}],
  data: { y: 2 },
  props: { x: 1 },
  onInit() {},
  didMount() {},
  didUpdate(prevProps, prevData) {},
  didUnmount() {},
  deriveDataFromProps() {},
  methods: {
    onMyClick(ev) {
      my.alert({});
      this.props.onXX({ ...ev, e2: 1 });
    }
  }
});
```

| Thuộc tính          | Kiểu dữ liệu | Mô tả                                                               |
| ------------------- | ------------ | ------------------------------------------------------------------- |
| data                | Object       | Các trạng thái nội tại của Component                                |
| props               | Object       | Các giá trị mặc định cho external data                              |
| onInit              | Function     | Hàm này được gọi khi component được khởi tạo                        |
| deriveDataFromProps | Function     | Hàm được gọi khi comment được khởi tạo, và trước khi nó được update |
| didMount            | Function     | Hàm được gọi sau khi Component được mount                           |
| didUpdate           | Function     | Hàm được gọi sau khi Component được update                          |
| didUnmount          | Function     | Hàm được gọi sau khi Component được unmount                         |
| mixins              | Array        | Cơ chế để sử dụng lại code giữa các Component                       |
| methods             | Object       | Các hàm xử lý sự kiện hoặc bất kỳ method nào được thêm mới          |
| ref                 | Function     | Xác định giá trị được trả về khi Component được tham chiếu bởi ref  |

## Phương thức

Custom Component không chỉ render các data tĩnh, nó cũng hỗ trợ việc xử lý các sự kiện như user click.
Khác với `Page`, các hàm xử lý sự kiện của Custom Component cần đặt trong biến `methods`.

```xml title=/components/index/index.txml
<view>{{counter}}</view>
<button onTap="plusOne">+1</button>
```

```js title=/components/index/index.js
Component({
  data: { counter: 0 },
  methods: {
    plusOne(e) {
      console.log(e);
      this.setData({ counter: this.data.counter + 1 });
    }
  }
});
```

Component ở trên sẽ render một button, số đếm trên component sẽ được tăng lên 1 mỗi khi bạn click vào button.

## props

Custom Component có thể nhận data từ bên ngoài, và sau khi xử lý xong, nó có thể thông báo lại cho bên ngoài sau khi xử lý xong.
Tiki Mini App Framework hỗ trợ điều đó bằng cách sử dụng `props` của Component

:::note Chú ý

- Props là các thuộc tính được truyền từ bên ngoài, những thuộc tính này có thể được xác định giá trị mặc định bởi trường `props` của Component
- Component có thể truy cập vào trường `props` để thông qua biến `props`.
- Component không thể thay đổi các giá trị của trường `props`
- Để thông báo với external callers sau khi xử lý xong, Component có thể định nghĩa các callback để gọi sau khi thực hiện xong việc xử lý. External callers có thể override lại các callback này.
 
:::

```xml title=/components/index/index.txml
<view>{{counter}}</view>
<view>extra: {{extra}}</view>
<button onTap="plusOne">+1</button>
```

```js title=/components/index/index.js
Component({
  data: { counter: 0 },
  props: {
    onCounterPlusOneFinish: (data) => console.log(data),
    extra: 'default extra'
  },
  methods: {
    plusOne(e) {
      console.log(e);
      const counter = this.data.counter + 1;
      this.setData({ counter });
      this.props.onCounterPlusOneFinish(counter);
    }
  }
});
```

Trong ví dụ trên, chúng ta define một Custom Component với hàm xử lý plusOne, sau khi thực hiện xong hàm này,
Component sẽ gọi tới hàm `onCounterPlusOneFinish`.

Chúng ta có thể sử dụng Component như sau

```xml title=/pages/index/index.txml
<my-component extra="external extra" onCounterPlusOne="onCounterPlusOne" />
```

```js title=/pages/index/index.js
Page({
  onCounterPlusOne(data) {
    console.log(data);
  }
});
```

Kết quả nhận được sẽ là

```
0
extra: external extra
+1
```

## Component instance properties

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                 |
| ---------- | ------------ | ----------------------------------------------------- |
| data       | Object       | Component internal data                               |
| props      | Object       | Properites được truyền vào Component                  |
| is         | String       | Đường dẫn tuyệt đối của Component                     |
| $page      | Object       | Instance của page mà trong đó Component được sử dụng  |
| $id        | Number       | Component ID được dùng để render Component trong TXML |

```js title=/components/index/index.js
Component({
  didMount() {
    this.$page.xxCom = this;
    console.log(this.is);
    console.log(this.$page);
    console.log(this.$id);
  }
});
```

```xml title=/components/index/index.txml
<view>{{$id}}</view>
```

```js title=/pages/index/index.js
Page({
  onReady() {
    console.log(this.xxCom);
  }
});
```

Sau khi component được render, chúng ta sẽ nhận được kết quả sau trong console

```
/components/index/index
{$viewId: 51, route: "pages/index/index"}
1
```

## Component instance method

| Hàm     | Parameter types | Mô tả                         |
| ------- | --------------- | ----------------------------- |
| setData | Object          | Set data để trigger rendering |
