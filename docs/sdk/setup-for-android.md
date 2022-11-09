---
title: Tích hợp SDK trên Android
---

## Requirements

TiniAppSDK là SDK cho android để biến 1 android app thành super app. SDK cung cấp các tính năng:

- Mở 1 Tiniapp bất kì
- Cấu hình deeplink/app link để mở TiniApp

TiniAppSDK có thể tích hợp vào các ứng dụng Android với các điều kiện

- Android 5 (SDK 21) trở lên

Sau bước đăng ký, bạn sẽ nhận được các thông tin

- `partner_code`: là một chuỗi duy nhất gắn với từng Super App
- `client_id`: là một UUID gắn liền với Super App

`partner_code` và `client_id` phải sử dụng cùng cặp với nhau, các Tini App sẽ không mở được nếu bạn truyền sai `partner_code` và `client_id`.

Ngoài ra, cặp key `partner_code` và `client_id` chỉ có thể sử dụng với các app bundle id mà bạn đã đăng ký. Nếu sử dụng cặp key này trên một app bundle id chưa được đăng ký, các Tini App cũng không thể mở được.

## Integration Steps

### 1. Thêm TiniAppSDK dependency vào build.gradle

- Thêm `jitpack.io` vào build.gradle hoặc settings.gradle ở rootProject

```groovy
allprojects {
  repositories {
    // ...
    maven { url "https://jitpack.io" }
    // ...
  }
}
```

- Thêm `android.enableJetifier` vào gradle.properties ở rootProject

```bash
# ...
android.enableJetifier=true
# ...
```

- Thêm dependencies vào build.gradle trong app

```groovy
dependencies {
  // ...
  implementation 'com.facebook.conceal:conceal:1.1.3@aar'
  implementation('vn.tiki:tiniapp-sdk:v1.0.0') {
    exclude group: "androidx.lifecycle"
  }
  // ...
}
```

### 2. Khởi tạo SDK

TiniAppSDK trước khi sử dụng, cần gọi phương thức sdkInit một lần duy nhất để khởi tạo SDK. hostId là ID của ứng dụng lấy từ trang TiniConsole.
Ví dụ, Có thể đặt hàm sdkInit ở onCreate của Application

```java
public class MainApplication extends Application {
  @Override
  public void onCreate() {
    super.onCreate();
    TiniAppConfiguration.Builder tiniAppConfigBuilder = new TiniAppConfiguration.Builder();
    tiniAppConfigBuilder.setHostId("miniapp-demo");
    tiniAppConfigBuilder.setEnv(TiniAppConfiguration.TiniSDKEnv.PROD);
    tiniAppConfigBuilder.registerTiniAppCallback(new TiniAppInterface() {
      @Override
      public void closeApp(Activity activity) {
        activity.finish();
      }

      @Override
      public void getUserInfo(TiniAppCallback callback) {
        Bundle bundle = new Bundle();
        bundle.putString("name", "Test user");
        bundle.putString("email", "Test user");
        callback.onSuccess(bundle);
      }

      @Override
      public void openPayment(String transactionId, TiniAppCallback callback) {
        Bundle bundle = new Bundle();
        bundle.putString("orderId", "1234");
        callback.onSuccess(bundle);
      }
    });
    TiniAppSDK.sdkInit(this.getApplicationContext(), tiniAppConfigBuilder.build());
  }
}
```

### 4. Mở 1 miniapp

Để mở 1 miniapp, chúng ta có thể dùng cách sau:

```java
    TiniAppSDK.getInstance().openMiniApp(MainActivity.this, "com.tini.appstore", null, null);
```

trong đó:

- **context**: Required. Context của activity hiện tại
- **appId**: Required. Id của tiniapp cần mở
- **pagePath**: Optional. Đường dẫn của page cần mở ví dụ pages/home/index
- **params**: Optional. Các tham số cần truyền thêm. Các tham số này sẽ nhận ở lifecycle onLaunch của App hoặc onLoad của page

### 5. Handle deeplink

- Deeplink cho tiniapp bắt buộc sẽ có định dạng: scheme://apps/appId/pagePath?params. Ví dụ: tikivn://apps/com.tini.appstore
- Sử dụng method TiniAppSDK.extractLink(url) để lấy thông tin appId, pagePath, params và sử dụng method openMiniApp để mở Tiniapp tương ứng

```java
    TiniAppLinkInfo linkInfo = TiniAppSDK.extractLink(deeplink);
```

TiniAppLinkInfo

- **appId**: App Id
- **pagePath**: Page path nếu có
- **params**: Params nếu có

### 6. Cài đặt delegate của TiniAppSDK

#### 6.1. Tích hợp đăng ký đăng nhập

TBD

#### 6.2. Tích hợp thanh toán

TBD

#### 6.3. Đóng toàn bộ Tini App

TBD

## Ứng dụng tích hợp mẫu

Bạn có thể xem một ứng dụng Android mẫu đã được tích hợp tại địa chỉ [TBD](https://github.com/tikivn/)

## API Interface

#### 1. TiniAppSDK

| Method          | description                   |
| --------------- | ----------------------------- |
| `openMiniApp()` | Mở 1 tiniapp bất kì           |
| `sdkInit()`     | Cấu hình cho TiniAppSDK       |
| `extractLink()` | Lấy thông tin app từ deeplink |

#### 2. TiniAppSDKConfiguration

Để tạo sdk configuration, ta sử dụng Builder

| Method                    | description                                  |
| ------------------------- | -------------------------------------------- |
| `setEnv()`                | Chỉ định môi trường test UAT hoặc Production |
| `setHostId`               | Host id từ TiniConsole                       |
| `registerTiniAppCallback` | Implement các phương thức mà TiniApp cần     |
