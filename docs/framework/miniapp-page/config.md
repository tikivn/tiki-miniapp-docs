---
title: Cấu hình Page
---

Với mỗi màn hình sẽ tương ứng với một page trên framework. File `.json` cùng tên với file `.js` của page sẽ được dùng để cấu hình cách hiển thị và cấu hình của window chưa page. Khi không quy định, cấu hình `window` trong `app.json` sẽ được dùng cho page. Trường hợp khi page có quy định riêng thì những cấu hình đó sẽ overwite cấu hình quy định trong `app.json`

| Thuộc tính           | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                                                                                                                                                                                |
| -------------------- | ------------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaultTitle         | string       | ""               | Title mặc định của page.                                                                                                                                                                             |
| pullRefresh          | string       | "YES"            | Xác định xem có cho phép pull down to refresh hay không ? **Lưu ý**: cấu hình này chỉ có ý nghĩa khi `allowsBounceVertical` = `YES`                                                                  |
| allowsBounceVertical | string       | "YES"            | Xác định cho phép kéo màn hình vượt quá size của window hay không?                                                                                                                                   |
| transparentTitle     | string       | "none"           | Cấu hình thuộc tính trong suốt của navigation bar. Hỗ trợ 3 giá trị `none` - có màu. `always` - trong suốt. `auto` sẽ tự động chuyển giữa trong suốt và có màu tuỳ theo vị trí scroll trên màn hình. |
| titleBarColor        | HexColor     | "#FFFFFF"        | Quy định màu nền của navigation bar.                                                                                                                                                                 |
| backgroundColor      | HexColor     | "#FFFFFF"        | Quy định màu nền mặc định của page.                                                                                                                                                                  |
| usingComponents      | Object       | null             | Cấu hình những custom components được sử dụng trong page.                                                                                                                                            |
| titleBarBottomColor  | HexColor     | "#EBEBF0"        | Quy định màu cho border bottom của NavigationBar.                                                                                                                                                    |
| disableHardwareBack | string | "YES" | Xác định cho phép vuốt để quay lại trang trước đó hay không? |
| hideOptionMenuButton | string | "YES" | Xác định việc có ẩn đi button Option Menu hay không? Option này chỉ các ứng dụng được phát triển bởi Tiki được phép sử dụng |

Ví dụ:

```json
{
  "defaultTitle": "This is a page",
  "transparentTitle": "auto",
  "titleBarColor": "#1B6BFF",
  "titleColor": "#fff",
  "disableHardwareBack": "NO"
}
```
