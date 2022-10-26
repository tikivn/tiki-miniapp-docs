---
title: Cài đặt cho iOS
---

## OVERVIEW
TiniAppSDK là SDK cho ios để biến 1 ios app thành super app. SDK cung cấp các tính năng:

- Mở 1 Tiniapp bất kì
- Cấu hình deeplink/universal link để mở TiniApp


## Specifications
- iOS 9.0 trở lên
- CocoaPods 1.0 trở lên

## Table Of Contents
- [OVERVIEW](#overview)
- [Specifications](#specifications)
- [Table Of Contents](#table-of-contents)
- [Example Project](#example-project)
- [Integration Steps](#integration-steps)
  - [1. Thêm TiniAppSDK dependency vào Podfile](#1-thêm-tiniappsdk-dependency-vào-podfile)
  - [2. Cấu hình Info.plist](#2-cấu-hình-infoplist)
  - [3. Khởi tạo SDK](#3-khởi-tạo-sdk)
  - [4. Mở 1 miniapp](#4-mở-1-miniapp)
  - [5. Handle deeplink](#5-handle-deeplink)
- [API Interface](#api-interface)
    - [1. TiniAppSDK](#1-tiniappsdk)
    - [2. TiniAppViewController](#2-tiniappviewcontroller)
- [Thông tin thêm](#thông-tin-thêm)




## Example Project
- [Example](/docs/sdk/example-for-ios)

```objc
TiniAppSDK.openMiniApp(appId: appId, pagePath: pagePath, params: params);
```

## Integration Steps
### 1. Thêm TiniAppSDK dependency vào Podfile

```pod
# ...
pod 'TiniAppSDK', '1.7.1'
# ...
```

### 2. Cấu hình Info.plist

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
		 
### 3. Khởi tạo SDK
TiniAppSDK trước khi sử dụng, cần gọi phương thức config:hostId một lần duy nhất để khởi tạo SDK. hostId là ID của ứng dụng lấy từ trang TiniConsole.

Trong AppDelegate cần implement thêm  phương thức application:handleOpenURL:sourceApplication:annotation:
 
```swift
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        TiniAppSDK.shared.config(with: TiniAppConfiguration(hostId: "miniapp-demo"))
        // Override point for customization after application launch.
        return true
    }
```

### 4. Mở 1 miniapp
Để mở 1 miniapp, chúng ta có thể dùng cách sau:

```swift
    let vc = TiniAppSDK.shared.openMiniApp(appId: "com.tini.appstore", pathPath: nil, params: nil)
    vc.modalPresentationStyle = .fullScreen
    self.present(vc, animated: true)
```
trong đó: 

  - **appId**: Required. Id của tiniapp cần mở
  - **pagePath**: Optional. Đường dẫn của page cần mở ví dụ pages/home/index
  - **params**: Optional. Các tham số cần truyền thêm. Các tham số này sẽ nhận ở lifecycle onLaunch của App hoặc onLoad của page

kết quả trả về:
  - **TiniAppViewController**: Hàm openMiniapp trả về 1 view controller. Chúng ta có thể present hay push view controller này vào stack  tuỳ theo mục đích sử dụng
  - 
### 5. Handle deeplink
Để có thể mở 1 tiniapp từ deeplink, chúng ta cần implement các phương thức sau ở application delegate

```swift
    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
        TiniAppApplicationDelegate.shared.application(app, open: url, options: options)
        
    }
    
    func application(_ application: UIApplication, open url: URL, sourceApplication: String?, annotation: Any) -> Bool {
        TiniAppApplicationDelegate.shared.application(application, open: url, sourceApplication: sourceApplication, annotation: annotation)
    }
```
Lưu ý:
  - Deeplink cho tiniapp bắt buộc sẽ có định dạng: scheme://apps/appId/pagePath?params. Ví dụ: tikivn://apps/com.tini.appstore

## API Interface

#### 1. TiniAppSDK

| Method | description                                                       |
|--------|------|-------------------------------------------------------------------|
| `openMiniApp()` | Mở 1 tiniapp bất kì |
| `config()` | Cấu hình cho TiniAppSDK |


#### 2. TiniAppViewController

| Properties | Type | description                                                       |
|--------|------|-------------------------------------------------------------------|
| `appId`| String | Id của tiniapp |
| `pagePath`| String | Đường dẫn tới page của tiniapp |
| `params`| Dictionary | Params cần truyền thêm cho tiniapp nếu cần |
**Info**

## Thông tin thêm

- [Xây dựng ứng dụng iOS](/docs/sdk/example-for-ios)
- [Các vấn đề gặp phải](/docs/sdk/troubleshooting)