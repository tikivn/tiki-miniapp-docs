---
title: my.onAcceleronmeterChange
---

`my.onAcceleronmeterChange` là một API để theo dõi các sự kiện thay đổi dữ liệu cảm biến gia tốc. Sau khi giao diện được gọi, quá trình giám sát sẽ tự động bắt đầu và khoảng thời gian gọi lại là 500ms. Bạn có thể sử dụng my.offAcceleronmeterChange() để dừng việc giám sát.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/acceleronmeter/index" />

### Sample Code

```js
my.onAcceleronmeterChange(function (res) {
  console.log(res);
});
```

## Callback value

| Thuộc tính | Kiểu dữ liệu | Mô tả          |
| ---------- | ------------ | -------------- |
| x          | Number       | Giá trị crục x |
| y          | Number       | Giá trị crục y |
| z          | Number       | Giá trị crục z |
| timestamp  | Number       | Timestamp.     |
