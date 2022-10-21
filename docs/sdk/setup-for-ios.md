---
title: Cài đặt cho iOS
---

Hướng dẫn cài đặt Tini App SDK cho dự án iOS

## Hướng dẫn

#### Thêm TiniAppSDK dependency vào Podfile

```pod
# ...
pod 'TiniAppSDK', '1.0.0'
# ...
```

#### Cấu hình Info.plist

- Thêm thuộc tính `UIViewControllerBasedStatusBarAppearance`

```xml
<!-- ... -->
<key>UIViewControllerBasedStatusBarAppearance</key>
<false/>
<!-- ... -->
```

- Thêm các permissions

```xml
<!-- ... -->
<key>NSCameraUsageDescription</key>
<string>Tini App muốn truy cập camera của bạn</string>
<key>NSContactsUsageDescription</key>
<string>Tini App muốn truy cập danh bạ của bạn</string>
<key>NSFaceIDUsageDescription</key>
<string>Sử dụng FaceID hoặc TouchID để xác thực</string>
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>Tini App muốn sử dụng vị trí của bạn</string>
<key>NSLocationAlwaysUsageDescription</key>
<string>Tini App muốn sử dụng vị trí của bạn</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>Tini App muốn sử dụng vị trí của bạn</string>
<key>NSMicrophoneUsageDescription</key>
<string>Tini App muốn truy cập ghi âm của bạn</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>Tini App muốn truy cập thư viện ảnh của bạn</string>
<!-- ... -->
```

#### Tạo ViewController

Tạo một `ViewController` được kế thừa từ `TiniAppViewController`

```swift
import TiniAppSDK

class ViewController: TiniAppViewController {
  // Setup config
}
```

## Các phương thức

==== Các phương thức ====

## Thông tin thêm

- [Xây dựng ứng dụng iOS](/docs/sdk/example-for-ios)
- [Các vấn đề gặp phải](/docs/sdk/troubleshooting)
