---
title: Cài đặt cho iOS
---

Hướng dẫn cài đặt Tini App SDK cho dự án iOS

## Hướng dẫn

### Bước 1: Thêm TiniAppSDK dependency vào Podfile

```
...
pod 'TiniAppSDK', :git => 'https://github.com/lamvd0101/tiniapp-sdk-ios.git', :commit => 'e1a7b35'
...
```

### Bước 2: Cấu hình Info.plist

- Thêm thuộc tính `UIViewControllerBasedStatusBarAppearance`

```
...
<key>UIViewControllerBasedStatusBarAppearance</key>
<false/>
...
```

- Thêm các permissions

```
...
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
...
```

### Bước 3: Tạo ViewController

Tạo một `ViewController` được kế thừa từ `TiniAppViewController`

```
import TiniAppSDK

class ViewController: TiniAppViewController {
  // Do something
}
```

## Các vấn đề gặp phải

### Vấn đề 1: Conflict thư viện

### Vấn đề 2: Conflict thư viện
