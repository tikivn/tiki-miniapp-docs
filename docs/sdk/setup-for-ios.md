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



### 1. Cài đặt CocoaPod 
TiniSDK có thể được cài đặt từ CocoaPod.
Nếu bạn đã cài đặt CocoaPod có thể bỏ qua bước này. 

Tham khảo về CocoaPod ở đây [Link](https://guides.cocoapods.org/using/getting-started.html#getting-started)

```bash
sudo gem install cocoapods
pod setup
```

#### 1.1. Tạo Podfile
Nếu đã có Podfile, bạn có thể bỏ qua step này
Tạo 1 Podfile, tham khảo cách tạo Podfile ở đây [Link](https://guides.cocoapods.org/using/the-podfile.html)

```pod
source 'https://github.com/CocoaPods/Specs.git'
platform :ios, '11.0'
target 'ExampleSDK' do
  # Comment the next line if you don't want to use dynamic frameworks
  use_frameworks!

  pod "TiniAppSDK"

end

post_install do |installer|  
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      config.build_settings.delete 'IPHONEOS_DEPLOYMENT_TARGET'
    end

    target.build_configurations.each do |config|
      config.build_settings['ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES'] = 'NO'
    end
    
    if target.respond_to?(:product_type) and target.product_type == "com.apple.product-type.bundle"
      target.build_configurations.each do |config|
          config.build_settings['CODE_SIGNING_ALLOWED'] = 'NO'
      end
    end
  end
end
```

#### 1.2. Thêm TiniAppSDK vào Podfile

```pod
# ...
pod 'TiniAppSDK'
# ...
```

#### 1.3. Install hoặc Update Pod
```
pod install
```
hoặc
```
pod update
```

### 2. Cấu hình Info.plist

TiniAppSDK cần 1 số quyền runtime để xin quyền từ user khi cần, nên app của bạn cần add các description cho các quyền tương ứng ở file Info.plist nếu chưa có.

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

| Quyền                      | Type     | JSAPI sử dụng                               |
| -------------------------- | -------- | ------------------------------------------- |
| NSCameraUsageDescription   | Camera   | my.chooseImage, my.chooseVideo my.scan |
| NSPhotoLibraryUsageDescription   | Camera   | my.chooseImage, my.chooseVideo, my.scan, my.saveImage |
| NSContactsUsageDescription   | Contact   | my.chooseContact, my.addPhoneContact |
| NSFaceIDUsageDescription   | Biometric   | my.bioMetrics.createKey, my.bioMetrics.createSignature, my.bioMetrics.deleteKey, my.bioMetrics.isSupported,  my.bioMetrics.keyExists, my.bioMetrics.localAuth my.getEncryptedStorage,  my.setEncryptedStorage |
| NSLocationAlwaysAndWhenInUseUsageDescription   | Location   | my.getLocation |
| NSLocationAlwaysUsageDescription   | Location   | my.getLocation |
| NSLocationWhenInUseUsageDescription   | Location   | my.getLocation |
| NSMicrophoneUsageDescription   | Microphone   | my.chooseVideo, my.scan |

### 3. Khởi tạo SDK

TiniAppSDK trước khi sử dụng, cần gọi phương thức config một lần duy nhất để khởi tạo SDK. `partnerCode` và `clientId` là thông tin đã lấy trước đó từ TiniConsole.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="objc" label="Objective-C">

  ```objectivec
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
  
  </TabItem>
  <TabItem value="swift" label="Swift">

  ```swift
  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    let config = TiniAppConfiguration()
    config.env = .prod
    config.clientId = "76e643c9-5239-444f-a3e0-c777fd0cec09"
    config.partnerCode = "app-demo"
    TiniAppSDK.config(with:config)
    // Override point for customization after application launch.
    return true
    }
  ```

  </TabItem>
</Tabs>


### 4. Mở 1 TiniApp

Để mở 1 tiniapp, chúng ta có thể dùng cách sau:
<Tabs>
  <TabItem value="objc" label="Objective-C">

  ```objectivec
  TiniAppViewController *vc = [[TiniAppSDK sharedInstance] openMiniAppWithAppId:@"com.tini.appstore" pathPath:nil params:nil];
  vc.modalPresentationStyle = UIModalPresentationFullScreen;
  [self presentViewController:vc animated:YES completion:nil];
  ```
  
  </TabItem>
  <TabItem value="swift" label="Swift">

```swift
  let vc = TiniAppSDK.shared.openMiniApp(appId: "com.tini.appstore", pathPath: nil, params: nil)
  vc.modalPresentationStyle = .fullScreen
  self.present(vc, animated: true)
```

  </TabItem>
</Tabs>


trong đó:

- **appId**: Required. Id của tiniapp cần mở
- **pagePath**: Optional. Đường dẫn của page cần mở ví dụ pages/home/index
- **params**: Optional. Các tham số cần truyền thêm. Các tham số này sẽ nhận ở lifecycle onLaunch của App hoặc onLoad của page

kết quả trả về:

- **TiniAppViewController**: Hàm openMiniapp trả về 1 view controller. Chúng ta có thể present hay push view controller này vào stack tuỳ theo mục đích sử dụng

### 5. Handle deeplink

Để có thể mở 1 tiniapp từ deeplink, chúng ta cần implement các phương thức sau ở application delegate
<Tabs>
  <TabItem value="objc" label="Objective-C">

  ```objectivec
- (BOOL)application:(UIApplication *)application
   openURL:(NSURL *)url
   options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
  return [[TiniApplicationDelegate sharedInstance] application:application openURL:url options:options];
}

- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(nullable NSString *)sourceApplication annotation:(id)annotation {
  return [[TiniApplicationDelegate sharedInstance] application:application openURL:url sourceApplication:sourceApplication annotation:annotation];
}
  ```
  
  </TabItem>
  <TabItem value="swift" label="Swift">

```swift
  func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
    return TiniAppApplicationDelegate.shared.application(app, open: url, options: options)
  }

  func application(_ application: UIApplication, open url: URL, sourceApplication: String?, annotation: Any) -> Bool {
    return TiniAppApplicationDelegate.shared.application(application, open: url, sourceApplication: sourceApplication, annotation: annotation)
  }
```

  </TabItem>
</Tabs>

Lưu ý:

- Deeplink cho tiniapp bắt buộc sẽ có định dạng: scheme://apps/appId/pagePath?params. Ví dụ: tikivn://apps/com.tini.appstore

### 6. Cài đặt delegate của TiniAppSDK

`TiniAppSDK` cung cấp 3 hàm delegate bạn cần implement trong Super App của mình. Bạn cần set delegate cho class được implement

<Tabs>
  <TabItem value="objc" label="Objective-C">

  ```objectivec
  TiniAppSDK.sharedInstance.delegate = self;

  //implement các hàm của TiniAppSDKDelegate
- (void)closeAppWithCompletedHandler:(void (NS_NOESCAPE ^)(void))completedHandler {
  dispatch_async(dispatch_get_main_queue(), ^{
    UIViewController *topController = [UIApplication sharedApplication].keyWindow.rootViewController;
    while (topController.presentedViewController) {
      topController = topController.presentedViewController;
    }
    [topController dismissViewControllerAnimated:YES completion:nil];
  });
}

- (void)getUserInfoWithCompletedHandler:(void (NS_NOESCAPE ^ _Nonnull)(TiniUser* _Nullable, NSError * _Nullable))completedHandler {
  TiniUser *user = [[TiniUser alloc] initWithId:@"1234" name:@"Test user" email:@"test@gmail.com"  phoneNumber:@"0123456789"];
  completedHandler(user, nil);
}


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
  
  </TabItem>
  <TabItem value="swift" label="Swift">

```swift
TiniAppSDK.shared.delegate = self
//Implement các hàm của TiniAppSDKDelegate
extension ViewController: TiniAppSDKDelegate {
  func openPayment(transactionId: String, amount: Double, completedHandler: @escaping ([String : Any]?, Error?) -> Void) {
  }
  
  func getUserInfo(completedHandler: (TiniUser?, Error?) -> Void) {
      let tiniUser = TiniUser(id: "1", name: "Test user")
      completedHandler(tiniUser, nil)
  }
  
  func closeApp(completedHandler:() -> Void) {
      DispatchQueue.main.async {
          let controller = UIApplication.topViewController()
          controller?.dismiss(animated: true)
      }
  }
}
```

  </TabItem>
</Tabs>


##### 6.1. Tích hợp đăng ký đăng nhập

Khi một Tini App cần lấy thông tin tài khoản đang đăng nhập từ Super App, `TiniAppSDK` sẽ gọi tới hàm delegate `getUserInfoWithCompletedHandler`

Bạn có thể cài đặt delegate này như sau

<Tabs>
  <TabItem value="objc" label="Objective-C">

```objectivec
- (void)getUserInfoWithCompletedHandler:(void (NS_NOESCAPE ^ _Nonnull)(TiniUser* _Nullable, NSError * _Nullable))completedHandler {
  TiniUser *user = [[TiniUser alloc] initWithId:@"1234" name:@"Test user" email:@"test@gmail.com"  phoneNumber:@"0123456789"];
  completedHandler(user, nil);
}
```
  
  </TabItem>
  <TabItem value="swift" label="Swift">

  ```swift
  func getUserInfo(completedHandler: (TiniUser?, Error?) -> Void) {
    let tiniUser = TiniUser(id: "1", name: "Test user")
    completedHandler(tiniUser, nil)
  }
  ```

  </TabItem>
</Tabs>
##### 6.2. Tích hợp thanh toán

Khi một Tini App cần thanh toán một đơn hàng, `TiniAppSDK` sẽ gọi tới hàm delegate `openPaymentWithTransactionId:amount:completeHandler`

Bạn có thể implement delegate này như sau. 

<Tabs>
  <TabItem value="objc" label="Objective-C">

```objctivec
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
  
  </TabItem>
  <TabItem value="swift" label="Swift">

  ```swift
    func openPayment(transactionId: String, amount: Double, completedHandler: @escaping ([String : Any]?, Error?) -> Void) {
      //mở flow thanh toán và gọi completedHander bên dưới
      completedHandler(["transactionId": transactionId], nil)
    }
  ```

  </TabItem>
</Tabs>

Ở màn hình thanh toán trên Super App của mình, sau khi thanh toán thành công, bạn cần gọi tới hàm `completeHandler` để báo cho TiniAppSDK biết rằng giao dịch đã được thực hiện thành công.

##### 6.3. Hàm gọi khi đóng toàn bộ Tini App

Sau khi toàn bộ Tini App được đóng, `TiniAppSDK` sẽ gọi tới hàm delegate `closeAppWithCompletedHandler`

<Tabs>
  <TabItem value="objc" label="Objective-C">

```objectivec
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
  
  </TabItem>
  <TabItem value="swift" label="Swift">

  ```swift
  func closeApp(completedHandler:() -> Void) {
    DispatchQueue.main.async {
        let controller = UIApplication.topViewController()
        controller?.dismiss(animated: true)
    }
  }
  ```

  </TabItem>
</Tabs>

Đoạn code trên để tham khảo cách đóng TiniApp đang được mở.

## Ứng dụng tích hợp mẫu

Bạn có thể xem một ứng dụng IOS mẫu đã được tích hợp tại địa chỉ [Link](https://github.com/tikivn/tiniapp-sdk-ios)
- Download Example, mở terminator và cd tới folder Example, chạy `pod install`

```bash
cd Example
pod install
```

- Mở file ExampleSDK.xcworkspace, bấm build và chạy thử trên simulator


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
