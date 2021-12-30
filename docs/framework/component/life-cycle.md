---
title: Life cycle

sidebar_position: 3
---

Các hàm life cycle của Custom Component được gọi bởi Framework tại những thời điểm nhất định.
Hình vẽ sau mô tả các thời điểm này

![component life cycle](https://salt.tikicdn.com/ts/upload/ca/9a/64/bb457e44059821f804b5ef3853ae2c41.png)

| Hàm                 | Tham số               | Mô tả                                                                           |
| ------------------- | --------------------- | ------------------------------------------------------------------------------- |
| onInit              |                       | được gọi khi Component được khởi tạo                                            |
| deriveDataFromProps | nextProps             | được gọi sau khi Component được khởi tạo, hoặc khi Component nhận các props mới |
| didMount            |                       | được gọi khi Component đã được mount                                            |
| didUpdate           | (prevProps, prevData) | được gọi sau khi Component updated                                              |
| didUnmount          |                       | được gọi sau khi Component bị unmount                                           |
| onError             | Error                 | được gọi khi code logic của Component throws Error                              |

## onInit

`onInit` được gọi sau khi Component được khởi tạo. Trong hàm `onInit`, bạn có thể

- Truy cập vào `this.is`, `this.$id`, `this.$page` và các thuộc tính khác
- Truy cập vào `this.data`, `this.props`
- Truy cập vào custom properties và methods
- Gọi các hàm `this.setData` và `this.$spliceData` để thay đổi data

Ví dụ 1

```js title:/components/index/index.js
Component({
  data: {
    counter: 0
  },
  onInit() {
    this.setData({
      counter: 1,
      is: this.is
    });
  }
});
```

```xml title=/components/index/index.txml
<view>{{counter}}</view>
<view>{{is}}</view>
```

Khi component được render, chúng ta sẽ nhận được output

```
1
/components/index/index
```

Ví dụ 2

```js title=/components/index/index.js
// 
Component({
  onInit() {
    this.xxx = 2;
    this.data = { counter: 0 };
  }
});
```

```xml title=/components/index/index.txml
<view>{{counter}}</view>
```

Khi component được render, chúng ta sẽ nhận được output

```
0
```

## deriveDataFromProps

Hàm này được gọi sau khi Component nhận các `data` và `props` mới. Trong `deriveDataFromProps` bạn có thể

- Truy cập vào `this.is`, `this.$id`, `this.$page` và các thuộc tính khác
- Truy cập vào `this.data`, `this.props`
- Truy cập vào custom properties và methods
- Gọi các hàm `this.setData` và `this.$spliceData` để thay đổi data
- Sử dụng `nextProps` để lấy ra các thuộc tính mới sẽ được update

```js title=/components/index/index.js
Component({
  data: {
    counter: 5
  },
  deriveDataFromProps(nextProps) {
    if (this.data.counter < nextProps.pCounter) {
      this.setData({
        counter: nextProps.pCounter
      });
    }
  }
});
```

```xml title=/components/index/index.txml
<view>{{counter}}</view>
```

```js title=/pages/index/index.js
Page({
  data: {
    counter: 1
  },
  plus() {
    this.setData({ counter: this.data.counter + 1 });
  }
});
```

```xml title=/pages/index/index.txml
<my-component pCounter="{{counter}}" />
<button onTap="plus">+</button>
```

Hàm `deriveDataFromProps` được gọi khi props hoặc data của Component thay đổi.

Chú ý rằng, nếu trong hàm `deriveDataFromProps` bạn tiếp tục sử dụng hàm `this.setData` để
thay đổi data của Component, thì việc thay đổi data này sẽ không gọi tới `deriveDataFromProps` lần nữa.

## didMount

`didMount` được gọi sau khi Custom Component được render lần đầu tiên. Chúng ta có thể sử dụng hàm này để trigger việc load data từ server

```js
Component({
  data: {},
  didMount() {
    let that = this;
    my.httpRequest({
      url: 'http://httpbin.org/post',
      success: function (res) {
        console.log(res);
        that.setData({ name: 'hello tiki' });
      }
    });
  }
});
```

## didUpdate

`didUpdate` được gọi sau khi data của Component được update. Hàm này được gọi mõi khi data trong Component thay đổi

```js
Component({
  data: {},
  didUpdate(prevProps, prevData) {
    console.log(prevProps, this.props, prevData, this.data);
  }
});
```

***Lưu ý***:

> - Khi gọi `didUpdate`, sẽ trigger gọi `this.setData`
> - External callers call `this.setData` sẽ trigger `didUpdate`

## didUnmount

`didUnmount` được gọi khi Component được unmount.

```js
Component({
  data: {},
  didUnmount() {
    console.log(this);
  }
});
```

## onError

`onError` được gọi khi code logic của Component throws exception

```js
Component({
  didMount() {
    this.triggerError(); // giả sử rằng triggerError sẽ throws Exception
  },
  onError(error) {
    console.log(error); // error là error do triggerError tạo ra
  },
  methods: {
    triggerError() {
      throw new Error('i am custom error');
    }
  }
});
```

## Async Life Cycle

Tini App hỗ trợ việc gọi các Component Life Cycle dưới dạng async.

Tuy nhiên, thứ tự gọi các Life Cycle chỉ được đảm bảo khi chạy dưới dạng sync mà thôi.
