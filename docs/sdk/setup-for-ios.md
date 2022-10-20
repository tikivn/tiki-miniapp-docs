---
title: Cài đặt cho iOS
---

Hướng dẫn cài đặt Tini App SDK cho dự án iOS

## Hướng dẫn

#### Thêm TiniAppSDK dependency vào Podfile

```pod
# ...
pod 'TiniAppSDK', :git => 'https://github.com/tikivn/tiniapp-sdk-ios.git', :tag => 'v1.0.0'
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
<string>TiniApp wants to access your camera</string>
<key>NSContactsUsageDescription</key>
<string>TiniApp wants to access your contacts</string>
<key>NSFaceIDUsageDescription</key>
<string>Sử dụng FaceID hoặc TouchID để xác thực</string>
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>This is the plist item for NSLocationAlwaysAndWhenInUseUsageDescription</string>
<key>NSLocationAlwaysUsageDescription</key>
<string>This is the plist item for NSLocationAlwaysUsageDescription</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>This is the plist item for NSLocationWhenInUseUsageDescription</string>
<key>NSMicrophoneUsageDescription</key>
<string>TiniApp wants to access your microphone</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>TiniApp wants to access your album</string>
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

<!-- ## Các vấn đề gặp phải

#### Vấn đề 1: Conflict thư viện

#### Vấn đề 2: Conflict thư viện -->

#### Ví dụ mẫu

Tini App SDK Example
