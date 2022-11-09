---
title: Tích hợp SDK trên iOS
---

## Requirements

TiniAppSDK là SDK cho ios để biến 1 ios app thành super app. SDK cung cấp các tính năng:

- Mở 1 Tiniapp bất kì
- Cấu hình deeplink/universal link để mở TiniApp

TiniAppSDK có thể tích hợp vào các ứng dụng iOS với các điều kiện

- iOS 9.0 trở lên
- CocoaPods 1.0 trở lên

Sau bước đăng ký, bạn sẽ nhận được các thông tin

- `partner_code`: là một chuỗi duy nhất gắn với từng Super App
- `client_id`: là một UUID gắn liền với Super App

`partner_code` và `client_id` phải sử dụng cùng cặp với nhau, các Tini App sẽ không mở được nếu bạn truyền sai `partner_code` và `client_id`.

Ngoài ra, cặp key `partner_code` và `client_id` chỉ có thể sử dụng với các app bundle id mà bạn đã đăng ký. Nếu sử dụng cặp key này trên một app bundle id chưa được đăng ký, các Tini App cũng không thể mở được.

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

Trong AppDelegate cần implement thêm phương thức application:handleOpenURL:sourceApplication:annotation:

```objc
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  TiniAppConfiguration *config = [[TiniAppConfiguration alloc] init];
  config.partnerCode = @"partner code you get when register";
  config.clientId = @"client id you get when register";
  config.env = TiniEnvProd;
  [TiniAppSDK configWith:config];
  TiniAppSDK.sharedInstance.delegate = self;
  return YES;
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

- **TiniAppViewController**: Hàm openMiniapp trả về 1 view controller. Chúng ta có thể present hay push view controller này vào stack tuỳ theo mục đích sử dụng

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

### 6. Cài đặt delegate của TiniAppSDK

`TiniAppSDK` cung cấp 3 hàm delegate bạn cần implement trong Super App của mình.

##### 6.1. Tích hợp đăng ký đăng nhập

Khi một Tini App cần lấy thông tin tài khoản đang đăng nhập từ Super App, `TiniAppSDK` sẽ gọi tới hàm delegate `getUserInfoWithCompletedHandler`

Bạn có thể cài đặt delegate này như sau

```objc
- (void)getUserInfoWithCompletedHandler:(void (NS_NOESCAPE ^ _Nonnull)(TiniUser* _Nullable, NSError * _Nullable))completedHandler {
  TiniUser *user = [[TiniUser alloc] initWithId:@"1234" name:@"Test user" email:@"test@gmail.com"  phoneNumber:@"0123456789"];
  completedHandler(user, nil);
}
```

##### 6.2. Tích hợp thanh toán

Khi một Tini App cần thanh toán một đơn hàng, `TiniAppSDK` sẽ gọi tới hàm delegate `openPaymentWithTransactionId:amount:completeHandler`

Bạn có thể implement delegate này như sau

```objc
- (void)openPaymentWithTransactionId:(NSString * _Nonnull)transactionId amount:(double)amount completedHandler:(void (^ _Nonnull)(NSDictionary<NSString *,id> * _Nullable, NSError * _Nullable))completedHandler {
    dispatch_async(dispatch_get_main_queue(), ^{
      UIViewController *topController = [UIApplication sharedApplication].keyWindow.rootViewController;
      while (topController.presentedViewController) {
        topController = topController.presentedViewController;
      }
      PaymentViewController *vc = [[PaymentViewController alloc] initWithNibName:@"PaymentViewController" bundle:nil];
      vc.transactionId = transactionId;
      vc.amount = amount;
      vc.completionBlock = ^(id  response, NSError * error) {
        completedHandler(response, error);
      };
      [topController presentViewController:vc animated:YES completion:nil];
    });
}
```

Ở màn hình thanh toán trên Super App của mình, sau khi thanh toán thành công, bạn cần gọi tới hàm `completeHandler` để báo cho TiniAppSDK biết rằng giao dịch đã được thực hiện thành công.

##### 6.3. Hàm gọi khi đóng toàn bộ Tini App

Sau khi toàn bộ Tini App được đóng, `TiniAppSDK` sẽ gọi tới hàm delegate `closeAppWithCompletedHandler`

```objc
- (void)closeAppWithCompletedHandler:(void (NS_NOESCAPE ^)(void))completedHandler {
  dispatch_async(dispatch_get_main_queue(), ^{
    UIViewController *topController = [UIApplication sharedApplication].keyWindow.rootViewController;
    while (topController.presentedViewController) {
      topController = topController.presentedViewController;
    }
    [topController dismissViewControllerAnimated:YES completion:nil];
  });
}
```

## Ứng dụng tích hợp mẫu

Bạn có thể xem một ứng dụng Android mẫu đã được tích hợp tại địa chỉ [TBD](https://github.com/tikivn/)

## API Interface

#### 1. TiniAppSDK

| Method          | description             |
| --------------- | ----------------------- |
| `openMiniApp()` | Mở 1 tiniapp bất kì     |
| `config()`      | Cấu hình cho TiniAppSDK |

#### 2. TiniAppSDK Delegate

| Method                                                | description                                       |
| ----------------------------------------------------- | ------------------------------------------------- |
| `getUserInfoWithCompletedHandler`                     | Delegate để lấy thông tin của users từ Super App  |
| `openPaymentWithTransactionId:amount:completeHandler` | Delegate để mở màn hình thanh toán của Super App  |
| `closeAppWithCompletedHandler`                        | Delegate để tắt Tini App và quay trở về Super App |

#### 3. TiniAppViewController

| Properties | Type       | description                                |
| ---------- | ---------- | ------------------------------------------ |
| `appId`    | String     | Id của tiniapp                             |
| `pagePath` | String     | Đường dẫn tới page của tiniapp             |
| `params`   | Dictionary | Params cần truyền thêm cho tiniapp nếu cần |
