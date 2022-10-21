---
title: Các vấn đề gặp phải
---

## Các lỗi có thể gặp với iOS

#### RuntimeError - [Xcodeproj] Unknown object version (56)

- **Mô tả:** Lỗi conflict version của CocoaPods với Xcode phiên bản mới
- **Giải pháp:** Chỉnh sửa Project Format thành Xcode 13.0 - compatible

## Các lỗi có thể gặp với Android

#### Duplicate class androidx.lifecycle.ViewModelLazy

- **Mô tả:** Lỗi conflict thư viện androidx có trong Tini App SDK với dự án của bạn
- **Giải pháp:** Thêm `exclude group: "androidx.lifecycle"` vào implementation Tini App SDK
