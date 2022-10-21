---
title: Xây dựng ứng dụng iOS
---

Hướng dẫn xây dựng một ứng dụng iOS cơ bản được tích hợp Tini App SDK

## Hướng dẫn

#### Tìm hiểu các tài liệu

Đọc kĩ các tài liệu sau để hiểu về các bước cài đặt, vận hành của Tini App SDK

- [Cài đặt cho iOS](/docs/sdk/setup-for-ios)
- [Các vấn đề gặp phải](/docs/sdk/troubleshooting)

#### Yêu cầu

- Xcode
- CocoaPods

#### Tạo ứng dụng iOS đơn giản

Sử dụng Xcode tạo một dự án cho ứng dụng iOS. Ở đây mình đang sử dụng interface là storyboard và swift language.

<img src="/img/sdk/example-ios-1.png"  alt="Tini App SDK - Example iOS 1"/>

#### Tạo và cấu hình Podfile

- Tạo một file với tên Podfile ở rootDir của dự án với nội dụng sau:

```pod
platform :ios, '11.0'

target 'Example' do
  # Your libs

  # ==== TiniAppSDK ====
  pod 'TiniAppSDK', :git => 'https://github.com/lamvd0101/tiniapp-sdk-ios.git', :tag => 'v1.24.0'
end
```

- Mở terminal truy cập vào đường dẫn rootDir của dự án. Chạy lệnh:

```bash
pod install
```

- Cài khi cài đặt xong, mở lại dự án với file có tên `Example.xcworkspace`.

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

#### Cấu hình lại file ViewController

Chỉnh sửa lại ViewController kế thừa TiniAppViewController

```swift
import TiniAppSDK

class ViewController: TiniAppViewController {
  override func viewDidLoad() {
    super.viewDidLoad()
    // Do any additional setup after loading the view.
  }
}
```

#### Bấm build dự án

Nếu ứng dụng hiển thị trên simulator như hình là bạn đã tích hợp thành công Tini App SDK. Mọi thắc mắc nếu bạn không tìm thấy trong tài liệu, bạn có thể đặt câu hỏi cho chúng tôi tại [community.tiki.vn](https://community.tiki.vn).

<img src="/img/sdk/example-ios-2.png" width="300px" alt="Tini App SDK - Example iOS 2"/>
