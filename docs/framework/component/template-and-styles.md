# Template và styles

Giống như Page, một Custom Component cũng có các file template và style riêng của nó, lần lượt nằm ở file `index.txml` và `index.tcss` tương ứng.

## txml

Một Custom Component bắt buộc phải định nghĩa file txml

```xml
<!-- /components/index/index.txml -->
<view onTap="onMyClick" id="c-{{$id}}"/>
```

```js
// /components/index/index.js
Component({
  methods: {
    onMyClick(e) {
      console.log(this.is, this.$id);
    }
  }
});
```

**Chú ý**:

Không giống như `Page`, các hàm xử lý event được định nghĩa bởi users sẽ cần đặt trong `methods`.

### slot

Bằng việc hỗ trợ `props`, các Custom Component có thể tương tác / nhận dữ liệu, và thậm chí là gọi tới các hàm từ các external callers để báo cho external callers về những thay đổi trong Custom Component

Với slot, Custom Component còn cho phép các external callers thay đổi nội dung của các template txml của Custom Component.

External callers có thể truyền các txml mới vào Custom Component, sau đó Custom Component sẽ sử dụng những template này để tạo ra template cuối cùng để render.

#### Slot mặc định

```xml
<!-- /components/index/index.txml -->
<view>
  <slot>
    <view>default slot & default value</view>
  </slot>
  <view>other</view>
</view>
```

Caller có thể không truyền vào txml mới, ví dụ

```json
// /pages/index/index.json
{
  "usingComponents": {
    "my-component": "/components/index/index"
  }
}
```

```xml
<!-- /pages/index/index.txml -->
<my-component />
```

Kết quả

```
default slot & default value
other
```

Caller cũng có thể truyền vào txml như sau

```xml
<!-- /pages/index/index.txml -->
<my-component>
  <view>header</view>
  <view>footer</view>
</my-component>
```

Kết quả

```
header
footer
other
```

#### named slot

Các Component phức tạp cần render các txml khác nhau tại những vị trí khác nhau, do vậy nhiều txml sẽ cần được truyền vào tại những vị trí và thời điểm khác nhau. Tiki Mini App Framework hỗ trợ tính năng này bằng cách cho phép bạn định nghĩa các named slot.

Bằng việc sử dụng named slot, external caller có thể xác định phần nào của txml nên được đặt vào trong một slot với tên cụ thể.

Ví dụ

```xml
<!-- /components/index/index.txml -->
<view>
  <slot>
    <view>default slot /& default value</view>
  </slot>
  <slot name="header"/>
  <view>body</view>
  <slot name="footer"/>
</view>
```

Component ở trên định nghĩa 3 slots:

- default slot `<slot><view>default slot & default value</view></slot>`
- slot với tên là `header`
- slot với tên là `footer`

Khi sử dụng, Page có thể xác định muốn thay đổi slot nào

```xml
<!-- /pages/index/index.txml -->
<my-component>
  <view slot="header">header</view>
  <view slot="footer">footer</view>
</my-component>
```

Ở đây, chúng ta thay đổi

- slot `header` với đoạn code `header`
- slot `footer` với đoạn code `footer`

Do vậy, kết quả sau khi render sẽ là

```
default slot & default value
header
body
footer
```

Chúng ta cũng có thể truyền vào default slot và named slot cùng lúc

```xml
<!-- /pages/index/index.txml -->
<my-component>
  <view>this is to default slot</view>
  <view slot="header">header</view>
  <view slot="footer">footer</view>
</my-component>
```

Kết quả được render ra sẽ là

```
this is to default slot
header
body
footer
```

#### slot scope

Bằng cách sử dụng named slot, Custom Component có thể sử dụng xml của chính nó, hoặc của external callers.

Nếu muốn truy cập vào các data trong Component, bạn sử dụng trường `data`, còn nếu muốn truy cập vào data của external, bạn sử dụng trường `props`

Ví dụ:

```js
// /components/index/index.js
Component({
  data: {
    x: 1
  },
  props: {
    y: ''
  }
});
```

```xml
<!-- /components/index/index.txml -->
<view>component data: {{x}}</view>
<view>page data: {{y}}</view>
```

```js
// /pages/index/index.js
Page({
  data: { y: 2 }
});
```

```xml
<!-- /pages/index/index.txml -->
<my-component y="{{y}}" />
```

Kết quả render ra sẽ là

```
component data: 1
page data: 2
```

Khi một Custom Component sử dụng txml của một external caller thông qua slot, nó chỉ có thể truy cập vào data của external allers.

Ví dụ

```xml
<!-- /components/index/index.txml -->
<view>
  <slot>
    <view>default slot & default value</view>
  </slot>
  <view>body</view>
</view>
```

```js
// /pages/index/index.js
Page({
  data: { y: 2 }
});
```

```xml
<!-- /pages/index/index.txml -->
<my-component>
  <view>page data: {{y}}</view>
</my-component>
```

Kết quả là

```
page data: 2
body
```

Slot scope cho phép nội dung của slot được access vào data bên trong component. Ví dụ

```js
// /components/index/index.js
Component({
  data: {
    x: 1
  }
});
```

```xml
<!-- /components/index/index.txml -->
<view>
  <slot x="{{x}}">
    <view>default slot & default value</view>
  </slot>
  <view>body</view>
</view>
```

Chúng ta định nghĩa một Custom Component với prop `x` nhận giá trị được bind với `data.x` trong file `index.js`

Khi một Page sử dụng Component này, để truy cập vào prop của component, Page cần định nghĩa một `slot-scope` gắn với slot.
Trong đoạn code dưới đây, chúng ta gắn `slot-scope` bằng `props`.

```js
// /pages/index/index.js
Page({
  data: { y: 2 }
});
```

```xml
<!-- /pages/index/index.txml -->
<my-component>
  <view slot-scope="props">
    <view>component data: {{props.x}}</view>
    <view>page data: {{y}}</view>
  </view>
</my-component>
```

Sau khi gán `slot-scope` bằng `props`, chúng ta có thể truy cập vào thuộc tính `x` của slot thông qua việc access vào `props.x`.

Kết quả cuối cùng sẽ là

```
component data: 1
page data: 2
body
```

## tcss

Giống như Page, Custom Component cũng có thể định nghĩa các style trong file `.tcss`.
