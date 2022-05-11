---
title: navigator
---

`navigator` là component hỗ trợ điều hướng (routing) một cách trực tiếp trong txml.

Lưu ý: `navigator` không hỗ trợ sự kiện `onTap`

<img src="https://salt.tikicdn.com/ts/tiniapp/b7/4f/54/39db5e5146046a4e79a8492a92a0593d.png" width="360px" alt="navigator-demo"/>

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/component/basic/navigator/index" />

## Thuộc tính

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                              |
| ---------- | ------------ | ------------------------------------------------------------------ |
| class      | string       | Class name                                                         |
| style      | string       | Inline style                                                       |
| open-type  | string       | Navigation method. Mặc định là `navigate` (Xem chi tiết bảng dưới) |
| url        | string       | Đường dẫn tới page chỉ định                                        |

## open-type

| Thuộc tính   | Mô tả                                                                                                                                                     |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| navigate     | Di chuyển từ màn hình hiện tại tới màn hình mong muốn trong ứng dụng. Tương tự [my.navigateTo](https://developers.tiki.vn/docs/api/ui/route/navigate-to)  |
| redirect     | Thay thế màn hình hiện tại bằng màn hình mong muốn trong ứng dụng. Tương tự [my.redirectTo](https://developers.tiki.vn/docs/api/ui/route/redirect-to)     |
| switchTab    | Nhảy tới một tab chỉ định. Tương tự [my.switchTab](https://developers.tiki.vn/docs/api/ui/route/switch-tab)                                               |
| navigateBack | Đóng màn hình hiện tại và trở lại màn hình trước đó. Tương tự [my.navigateBack](https://developers.tiki.vn/docs/api/ui/route/navigate-back)               |
| reLaunch     | Đóng tất cả các pages hiện tại và nhảy tới một page nào đó trong ứng dụng. Tương tự [my.reLaunch](https://developers.tiki.vn/docs/api/ui/route/re-launch) |
| exit         | Thoát app. Tương tự [my.exitMiniApp](https://developers.tiki.vn/docs/api/basic/exit-miniapp)                                                              |

## Sample Code

**index.txml**

```xml
<navigator open-type="navigate" url="pages/component/advance/modal/index">
  Navigate to modal page
</navigator>

<navigator open-type="redirect" url="pages/component/advance/modal/index">
  Redirect to modal page
</navigator>

<navigator open-type="switchTab" url="pages/api/index">
  Switch to js api tab
</navigator>

<navigator open-type="navigateBack">
  Navigate back
</navigator>

<navigator open-type="reLaunch" url="pages/component/advance/modal/index">
  Relaunch to modal page
</navigator>

<navigator open-type="exit">
  Exit app
</navigator>
```
