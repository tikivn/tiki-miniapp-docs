---
order: 21
category:
  vi-VN: Miniapp Page
  en-US: Miniapp Page
title: 
  vi-VN: Cấu hình page
  en-US: Page Configuration
---

Với mỗi màn hình sẽ tương ứng với một page trên framework. File `.json` cùng tên với file `.js` của page sẽ được dùng để cấu hình cách hiển thị và cấu hình của window chưa page. Khi không quy định, cấu hình `window` trong `app.json` sẽ được dùng cho page. Trường hợp khi page có quy định riêng thì những cấu hình đó sẽ overwite cấu hình quy định trong `app.json`


| Property             | Type     | Default Value | Description                                                                                                                                                                                          |
| -------------------- | -------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaultTitle         | string   | ""            | Title mặc định của page.                                                                                                                                                                             |
| pullRefresh          | string   | "YES"         | Xác định xem có cho phép pull down to refresh hay không ? **Lưu ý**: cấu hình này chỉ có ý nghĩa khi `allowsBounceVertical` = `YES`                                                                  |
| allowsBounceVertical | string   | "YES"         | Xác định cho phép kéo màn hình vượt quá size của window hay không?                                                                                                                                   |
| transparentTitle     | string   | "none"        | Cấu hình thuộc tính trong suốt của navigation bar. Hỗ trợ 3 giá trị `none` - có màu. `always` - trong suốt. `auto` sẽ tự động chuyển giữa trong suốt và có màu tuỳ theo vị trí scroll trên màn hình. |
| titleBarColor        | HexColor | "#FFFFFF"     | Quy định màu nền của navigation bar.                                                                                                                                                                 |
| backgroundColor      | HexColor | "#FFFFFF"     | Quy định màu nền mặc định của page.                                                                                                                                                                  |
| usingComponents | Object | null | Cấu hình những custom components được sử dụng trong page.

Ví dụ:

```json
{
  "defaultTitle": "This is a page",
  "transparentTitle": "auto",
  "titleBarColor": "#1B6BFF",
  "titleColor": "#fff"
}
```