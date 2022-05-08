---
title: my.createSelectorQuery
---

`my.createSelectorQuery` API dùng để tạo SelectorQuery object. Với SelectorObject bạn có thể truy cập một số thông tin cơ bản của một node trên UI sử dụng css selector.

## Selector Query

Để truy cập thông tin của một thành phần trên UI nhằm mục tính tính toán cho việc hiện thị, bạn có thể sử dụng SelectorQuery để select và lấy thông tin. Methods SelectorQuery sẽ bao gồm nhóm các phương thức selector và actions.

### Selector

- **select(selector)**: dùng để truy xuất thông tin node đầu tiên khớp với selector. selector có thể là class hoặc là id selector.
-* **selectAll(selector)**: dùng để truy xuất thông tin của tất cả các nodes khớp với selector.
- **selectViewport()**: dùng để truy xuất thông tin trong window.

### Action

Tiếp sau các selector là các action truy xuất thông tin. Ví dụ để lấy chiều cao rộng của một UI có id = target bạn sẽ cần kết hợp giữa selector và action như sau: `my.createSelectorQuery().select('#target').boundingClientRect()`.

Các action sau được hỗ trợ trên tini framework:

- **boundingClientRect()**: tương tự như hàm getBoundingClientRect DOM. action này hỗ trợ lấy thông tin vị trí và kích thước của một thành phần trên UI. Thông tin hỗ trợ trả về bao gồm: width, height, left, top, bottom, and right. Nếu node hiện tại là window (trước đó sử dụng selector selectViewport) thì chỉ width với height sẽ được trả ra.
- **scrollOffset()**: action hỗ trợ lấy `scrollTop` và `scrollLeft` của node hiện được chọn.
- **exec()**: sau khi hoàn tất việc select và thiết lập action cần thiết, bạn sử dụng `exec` ở cuối command chain để lấy các thông tin dựa trên selectors và actions trước đó.

## Sample Code

```xml
<view id="target-id" />
<view class="target-class" />
<view class="all" />
<button onTap="createSelectorQuery">Query info</button>
```

```js
Page({
  createSelectorQuery() {
    my.createSelectorQuery()
      .select('#target-id').boundingClientRect()
      .select('.target-class').boundingClientRect()
      .selectAll('.all').boundingClientRect()
      .selectViewport().boundingClientRect()
      .selectViewport().scrollOffset()
      .exec((ret) => {
        console.log(ret);
        my.alert({
          content: JSON.stringify(ret, null, 2),
        });
      })
  }
})
```

