---
title: Các vấn đề thường gặp
---

## Các lỗi có thể gặp với iOS

#### RuntimeError - [Xcodeproj] Unknown object version (56)

- **Mô tả:** Lỗi conflict version của CocoaPods với Xcode phiên bản mới
- **Giải pháp:** Chỉnh sửa Project Format thành Xcode 13.0 - compatible

## Các lỗi có thể gặp với Android

#### Duplicate class androidx.lifecycle.ViewModelLazy

- **Mô tả:** Lỗi conflict thư viện androidx có trong Tini App SDK với dự án của bạn
- **Giải pháp:** Thêm `exclude group: "androidx.lifecycle"` vào implementation Tini App SDK

#### Build release bị crash app
- App có sử dụng proguard để minify khi release thì thực hiện thêm đoạn cấu hình sau vào `proguard-rules.pro`
- `-keep public class vn.tiki.tiniappsdk.** { public *;}`
