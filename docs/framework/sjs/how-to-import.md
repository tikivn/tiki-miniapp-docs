# Cách import sjs
Sử dụng tag `<import-sjs>` để import sjs vào file txml

# Ví dụ
```js
// pages/index/index.js
Page({
  data: {
    msg: 'hello tiki',
  },
});
```

Tạo 2 file sjs index.sjs và namedExport.sjs
```js
// pages/index/index.sjs
function bar(prefix) {
  return prefix;
}
export default {
  foo: 'foo',
  bar: bar,
};
```

```js
// pages/index/namedExport.sjs
export const x = 3;
export const y = 4;
```

```xml
<!-- pages/index/index.axml -->
<import-sjs from="./index.sjs" name="test"></import-sjs>
<view> {{test.bar(test.foo)}} </view>
<view> {{test.bar(msg)}} </view>

<import-sjs from="./namedExport.sjs" name="{x, y: z}" />
<view>{{x}}</view>
<view>{{z}}</view>
```

Output ta có được như sau:
```
foo
hello tiki
3
4
```

| Thuộc tính    | Kiểu dữ liệu | Require | Mô tả                                           |
| ------------- | ------------ | ------- | ----------------------------------------------- |
| name          | String       | Yes     | Tên của module                                  |
| from          | String       | Yes     | Đường dẫn của modile                            |

## Mô tả chi tiết

* name chỉ định của thẻ `<import-sjs>` cần import. Trong một file AXML, bạn nên đặt tên là giá trị duy nhất. Nếu có tên module trùng lặp, chúng sẽ bị ghi đè theo thứ tự (cái sau ghi đè cái trước). Giữa các file TXML khác nhau cùng import sjs, thì tên của module sẽ không ghi đè lẫn nhau.
* Giống như ECMAScript, name có thể là 1 chuỗi string được import default, hoặc có thể xài {x} để import x được export từ sjs như ví dụ trên.

## Lưu ý:
* Khi xài `<import-sjs>`, đường dẫn phải có suffix `.sjs`
* Nếu 1 sjs module được import nhưng không sử dụng, thì module đó sẽ không được parse và thực thi.