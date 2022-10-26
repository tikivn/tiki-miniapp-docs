---
title: Cài đặt cho Android
---

## OVERVIEW
TiniAppSDK là SDK cho android để biến 1 android app thành super app. SDK cung cấp các tính năng:

- Mở 1 Tiniapp bất kì
- Cấu hình deeplink/app link để mở TiniApp


## Specifications
- Android 5 (SDK 21) trở lên

## Table Of Contents
- [OVERVIEW](#overview)
- [Specifications](#specifications)
- [Table Of Contents](#table-of-contents)
- [Example Project](#example-project)
- [Integration Steps](#integration-steps)
  - [1. Thêm TiniAppSDK dependency vào build.gradle](#1-thêm-tiniappsdk-dependency-vào-buildgradle)
  - [2. Khởi tạo SDK](#2-khởi-tạo-sdk)
  - [4. Mở 1 miniapp](#4-mở-1-miniapp)
  - [5. Handle deeplink](#5-handle-deeplink)
- [API Interface](#api-interface)
    - [1. TiniAppSDK](#1-tiniappsdk)
    - [1. TiniAppSDKConfiguration](#1-tiniappsdkconfiguration)
- [Thông tin thêm](#thông-tin-thêm)




## Example Project
- [Example](/docs/sdk/example-for-android)

```java
TiniAppSDK.getInstance().openMiniApp(appId, pagePath, params);
```

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
## API Interface

#### 1. TiniAppSDK

| Method | description                                                       |
|--------|------|-------------------------------------------------------------------|
| `openMiniApp()` | Mở 1 tiniapp bất kì |
| `sdkInit()` | Cấu hình cho TiniAppSDK |
| `extractLink()` | Lấy thông tin app từ deeplink |

#### 1. TiniAppSDKConfiguration
Để tạo sdk configuration, ta sử dụng Builder

| Method | description                                                       |
|--------|------|-------------------------------------------------------------------|
| `setEnv()` | Chỉ định môi trường test UAT hoặc Production |
| `setHostId` | Host id từ TiniConsole |
| `registerTiniAppCallback` | Implement các phương thức mà TiniApp cần |

## Thông tin thêm

- [Xây dựng ứng dụng Android](/docs/sdk/example-for-android)
- [Các vấn đề gặp phải](/docs/sdk/troubleshooting)