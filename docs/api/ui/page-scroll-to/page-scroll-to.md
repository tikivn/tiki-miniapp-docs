---
title: my.pageScrollTo
---

`my.pageScrollTo` là API dùng để scroll đến vị trí bất kỳ trong trang.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/option-selector/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                  |
| ---------- | ------------ | :------: | ---------------------------------------------------------------------- |
| scrollTop  | number       |          | Vị trí mong muốn scroll đến trong trang, tính bằng px.                 |
| duration   | number       |          | Tổng thời gian scroll, tính bằng ms. Giá trị mặc định là 0.            |
| selector   | String       |          | Đối tượng mong muốn scroll tới.                                        |
| success    | Function     |          | Callback function khi chọn thành công.                                 |
| fail       | Function     |          | Callback function khi việc thay đổi bất thành.                         |
| complete   | Function     |          | Callback function khi gọi API hoàn tất bất kể thành công hay thất bại. |

### Selector syntax

Khi tham số selector được truyền vào, MiniApp sẽ thực thi document.querySelector(selector).

## Sample Code

```xml title=index.txml
<view>
<block-header
      title="Usage"
      description="my.pageScrollTo" />
  <view class="block-content">
    <view>
      <input style="width:100%" type="text" placeholder="key" name="key" value="{{scrollTop}}" onInput="scrollTopChange"></input>
    </view>
    <view>
      <button class="button-full" onTap="scrollTo">Scroll</button>
    </view>
    <view style="height:1000px"></view>
  </view>
</view>
```

```js title=index.js
Page({
  data: {
    scrollTop: 0
  },
  scrollTopChange(e) {
    this.setData({
      scrollTop: e.detail.value
    });
  },
  onPageScroll({ scrollTop }) {
    console.log('onPageScroll', scrollTop);
  },
  scrollTo() {
    my.pageScrollTo({
      scrollTop: parseInt(this.data.scrollTop)
    });
  }
});
```


