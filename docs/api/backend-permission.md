---
title: Quyền sử dụng API
---

Tini App cung cấp một số API mà khi muốn sử dụng sẽ cần phải xin quyền ở [Tini Console](https://developer.tiki.vn/apps).

Tài liệu này mô tả danh sách các quyền cũng như ý nghĩa của các quyền này

## Danh sách các quyền

Sau đây là danh sách các quyền mà hiện tại Tini App hỗ trợ

| Tên Quyền                    | Ý nghĩa                                                                                                                                               |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| getAuthCode                  | Quyền này chỉ sử dụng cho các app internal của Tiki. Khi có quyền này, app không cần hỏi lại users khi gọi các API `my.getAuthCode`, `my.getUserInfo` |
| openDeeplink                 | Khi app có quyền này, app có thể goi API `my.openDeeplink`                                                                                            |
| sendInternalEvent            | Khi app có quyền này, app có thể goi API `my.sendInternalEvent`                                                                                       |
| shareAppMessageWithCustomUrl | Khi app có quyền này, app có thể goi API `my.shareAppMessageWithCustomUrl`                                                                            |
| getUserPhoneAndEmail         | Khi app có quyền này, API `my.getUserInfo` sẽ trả về thêm thông tin email và số điện thoại của users.                                                 |
| choosePhoneContact           | Khi app có quyền này, app có thể gọi `my.choosePhoneContact`                                                                                          |
| getAddress                   | Khi app có quyền này, app có thể gọi `my.getAddress`                                                                                                  |
| saveAddress                  | Khi app có quyền này, app có thể gọi `my.saveAddress`                                                                                                 |

## Giả lập các quyền trên Studio

Để giả lập các quyền này trên Tini Studio, bạn có thể sửa file `package.json` và thêm các permission cần thiết vào mục `permissions` trong mục `tiki.metadata`.

Chú ý là việc thêm các permissions vào file package.json chỉ nhằm mục đích giả lập trên Studio mà thôi, ứng dụng muốn có các quyền này sẽ phải request ở trên Tini Console.

Ví dụ, nếu muốn thêm các quyền `getAuthCode`, `openDeeplink`, chúng ta có thể sửa file `package.json` với nội dung như sau

```diff
{
   "name": "my applicaton",
   "tiki": {
      "appIdentifier": "my.app.id",
      "buildNumber": 1,
+     "metadata": {
+       "permissions": ["getAuthCode", "openDeeplink"]
+     }
   }
}
```
