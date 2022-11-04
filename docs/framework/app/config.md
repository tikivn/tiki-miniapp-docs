---
title: Cấu hình chung

description: cấu trúc dự án Tiki mini app
---

Trong một dự án, file `app.json` sẽ được dùng để cấu hình cho một ứng dụng Tini App. Nội dung cấu hình sẽ được áp dụng cho việc quản lý các pages và path tới các page trong ứng dụng, hay cấu hình giao diện cho app như title, tabBar, ...

Dưới đây là ví dụ của một `app.json` với một vài cấu hình thông dụng:

```json
{
  "pages": [
    "pages/tabBar/API/index",
    "pages/tabBar/component/index",
    "pages/component/view/index",
    "pages/component/scrollview/index"
  ],
  "window": {
    "defaultTitle": "My App",
    "titleBarColor": "#fff",
    "theme": "reverse",
    "backgroundColor": "#F5F7FC",
    "allowsBounceVertical": "NO"
  },
  "tabBar": {
    "items": [
      {
        "name": "API",
        "pagePath": "pages/tabBar/API/index",
        "icon": "images/icon_API.png",
        "activeIcon": "images/icon_API_HL.png"
      },
      {
        "name": "Components",
        "pagePath": "pages/tabBar/component/index",
        "icon": "images/icon_component.png",
        "activeIcon": "images/icon_component_HL.png"
      }
    ]
  }
}
```

## Cấu hình app.json

| Thuộc tính | Kiểu dữ liệu     | Bắt buộc | Mô tả                                 |
| ---------- | ---------------- | :------: | ------------------------------------- |
| pages      | array of strings |    ✓     | Đường dẫn tương đối tới các pages     |
| window     | Object           |    ✕     | Cấu hình hành vi của window chưa page |
| tabBar     | Object           |    ✕     | Cấu hình TabBar ở dưới của một page   |

### pages

Đây là cấu hình giúp cho Tini App Framework xác định được các pages và đường dẫn tới các files của page. Khi định nghĩa không cần xác định đuôi của file, framework sẽ tự động tìm kiếm file .json, .js, .jsx và .style dựa trên page path được quy định.

**_Lưu ý:_**

> - Các pages không được quy định ở đây sẽ không được bundle khi app được build. Việc chuyển tới một page thường bị lỗi có thể do quên trong việc quy định page ở đây.
> - Item đầu tiên trong array sẽ được chọn làm trang khởi tạo khi app được mở lên. Nên cần lưu ý khi thay đổi thứ tự của item đầu tiên.

Giả sử project có cấu trúc thư mục như sau:

```bash
- miniapp-project/
 |- src/
   |- pages/
     |- index/
     |  index.js
     |  index.json
     |  index.jsx
     |  index.style
   |  app.js
   |  app.json
   |  app.style
 |  package.json
```

Cấu hình để framework có thể load được `page/index/index` như sau:

```json
{
  "pages": ["pages/index/index"]
}
```

### window

Đây là cấu hình dùng để quy định cách hiển thị và hành vi của StatusBar, NavigationBar, Titles và window background colors.

| Thuộc tính           | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                                                                                                                                                                                |
| -------------------- | ------------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaultTitle         | string       | ""               | Title mặc định của page.                                                                                                                                                                             |
| pullRefresh          | string       | "YES"            | Xác định xem có cho phép pull down to refresh hay không ? **Lưu ý**: cấu hình này chỉ có ý nghĩa khi `allowsBounceVertical` = `YES`                                                                  |
| allowsBounceVertical | string       | "YES"            | Xác định cho phép kéo màn hình vượt quá size của window hay không?                                                                                                                                   |
| transparentTitle     | string       | "none"           | Cấu hình thuộc tính trong suốt của navigation bar. Hỗ trợ 3 giá trị `none` - có màu. `always` - trong suốt. `auto` sẽ tự động chuyển giữa trong suốt và có màu tuỳ theo vị trí scroll trên màn hình. |
| titleBarColor        | HexColor     | "#FFFFFF"        | Quy định màu nền của navigation bar.                                                                                                                                                                 |
| theme                | string       | "default"        | Quy định theme của navigation bar. Giá trị là `reverse` hoặc `default`.                                                                                                                              |
| backgroundColor      | HexColor     | "#FFFFFF"        | Quy định màu nền mặc định của page.                                                                                                                                                                  |
| titleBarBottomColor  | HexColor     | "#EBEBF0"        | Quy định màu cho border bottom của NavigationBar.                                                                                                                                                    |
| disableHardwareBack  | string       | "YES"            | Xác định cho phép vuốt để quay lại trang trước đó hay không?                                                                                                                                         |

Ví dụ:

```json
{
  "window": {
    "defaultTitle": "My App",
    "titleBarColor": "#fff",
    "theme": "reverse",
    "backgroundColor": "#F5F7FC",
    "allowsBounceVertical": "NO",
    "disableHardwareBack": "NO"
  }
}
```

### tabBar

Nếu ứng dụng có sử dụng Tab Bar, bạn có thể dùng cấu hình này để quy định cách hiển thị cũng như hành vi của Tab Bar.

| Thuộc tính           | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                                  |
| -------------------- | ------------ | ---------------- | ------------------------------------------------------ |
| textColor            | HexColor     | "#000000"        | Màu sắc của text trong tab bar item.                   |
| selectedColor        | HexColor     | "#000000"        | Màu sắc của text trong tab bar item khi được lựa chọn. |
| backgroundColor      | HexColor     | "#FFFFFF"        | Màu nền của tab bar.                                   |
| borderTopActiveColor | HexColor     | "#EBEBF0"        | Màu border top của tab bar đối với tab được chọn.      |
| borderTopColor       | HexColor     | "#EBEBF0"        | Màu border top của tab bar.                            |
| items                | Array        | required         | Cấu hình từng item trong tab bar.                      |

Với mỗi tab bar item có thể cấu hình với các thuộc tính sau:

| Thuộc tính | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                       |
| ---------- | ------------ | ---------------- | ------------------------------------------- |
| pagePath   | String       | required         | Đường dẫn tới page.                         |
| name       | String       | required         | Tên hiển thị của item.                      |
| icon       | String       | null             | Đường dẫn tới icon khi item chưa được chọn. |
| activeIcon | String       | null             | Đường dẫn tới icon khi item được chọn.      |

Để hiển thị tối ưu, bạn nên chọn hình cho icon với kích cỡ 60x60 px.

Ví dụ cấu hình `tabBar` trong `app.json`:

```json
{
  "tabBar": {
    "items": [
      {
        "name": "API",
        "pagePath": "pages/tabBar/API/index",
        "icon": "images/icon_API.png",
        "activeIcon": "images/icon_API_HL.png"
      },
      {
        "name": "Components",
        "pagePath": "pages/tabBar/component/index",
        "icon": "images/icon_component.png",
        "activeIcon": "images/icon_component_HL.png"
      }
    ]
  }
}
```
