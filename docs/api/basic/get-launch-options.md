---
title: my.getLaunchOptionsSync
sidebar_custom_props:
  description: Lấy parameters để launch Tini App hiện tại
---

`my.getLaunchOptionsSync` là API dùng để lấy parameters để launch Tini App hiện tại.

**_Khả dụng_**: hỗ trợ từ version 1.89.5 trở lên.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/get-launch-options/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/get-launch-options/index" />

## Sample Code

```js
const options = my.getLaunchOptionsSync();
my.alert({ content: JSON.stringify(options) });
```

## Return value

Kết quả trả về của `my.getLaunchOptionsSync` sẽ giống với options của App.onLoad(options)

| Thuộc tính   | Kiểu dữ liệu | Mô tả                                                                                                                                                       |
| ------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pagePath     | String       | Đường dẫn của page sẽ được mở của miniapp tới.                                                                                                              |
| query        | String       | Query string ví dụ name=A&age=18                                                                                                                            |
| referrerInfo | Object       | Thông tin chứa extra data được truyền khi mở miniapp từ my.navigateToMiniapp hoặc từ deeplink ví dụ <br/> `referrerInfo : { extraData: { test: 'param' } }` |
