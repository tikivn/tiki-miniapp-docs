---
title: my.onCompassChange
---

`my.onCompassChange` là một API để theo dõi các sự kiện thay đổi dữ liệu compass. Sau khi giao diện được gọi, quá trình giám sát sẽ tự động bắt đầu và khoảng thời gian gọi lại là 200ms. Bạn có thể sử dụng my.offCompassChange() để dừng việc giám sát.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/compass/index" />

<!-- ## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/compass/index" /> -->

### Sample Code

```js
my.onCompassChange(function (res) {
  console.log(res.direction);
});
```

## Callback value

| Thuộc tính | Kiểu dữ liệu | Mô tả                                             |
| ---------- | ------------ | ------------------------------------------------- |
| direction  | number       | Độ của hướng đối diện với hướng bắc thực [0,360). |
| timestamp  | number       | Timestamp.                                        |
