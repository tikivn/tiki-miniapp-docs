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
  implementation 'com.github.tikivn:tiniapp-sdk-android:v1.3.5'
}
```

### 2. Các quyền truy cập mà SDK sử dụng

Khi sử dụng các jsapi truy cập tới các dữ liêụ riêng tư, SDK cần sự cho phép của người dùng. Do đó các quyền dưới đây đã được thêm vào SDK

| Quyền                                     | Type       | JSAPI sử dụng                                                         |
| ----------------------------------------- | ---------- | --------------------------------------------------------------------- |
| android.permission.CAMERA                 | Camera     | my.chooseImage, my.chooseVideo, my.scan                               |
| android.permission.READ_EXTERNAL_STORAGE  | Storage    | my.chooseImage, my.chooseVideo, my.scan, my.getStorage, my.uploadFile |
| android.permission.WRITE_EXTERNAL_STORAGE | Storage    | my.saveImage, my.saveFile, my.setStorage, my.downloadFile             |
| android.permission.ACCESS_FINE_LOCATION   | Location   | my.getLocation                                                        |
| android.permission.RECORD_AUDIO           | Microphone | my.chooseVideo, my.scan                                               |
| android.permission.WRITE_CONTACTS"        | Contact    | my.addContact                                                         |
| android.permission.READ_CONTACTS          | Contact    | my.getContact                                                         |
| android.permission.READ_PROFILE           | Contact    | my.getContact                                                         |

### 3. Khởi tạo SDK

TiniAppSDK trước khi sử dụng, cần gọi phương thức sdkInit một lần duy nhất để khởi tạo SDK. hostId là ID của ứng dụng lấy từ trang TiniConsole.
Ví dụ, Có thể đặt hàm sdkInit ở onCreate của Application

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="java" label="Java">

```java
public class MainApplication extends Application {
  @Override
  public void onCreate() {
    super.onCreate();
    TiniAppConfiguration.Builder tiniAppConfigBuilder = new TiniAppConfiguration.Builder();
    tiniAppConfigBuilder.setClientId("76e643c9-5239-444f-a3e0-c777fd0cec09");
    tiniAppConfigBuilder.setPartnerCode("app-demo");
    tiniAppConfigBuilder.setEnv(TiniAppConfiguration.TiniSDKEnv.PROD);
    tiniAppConfigBuilder.registerTiniAppCallback(new TiniAppInterface() {
      @Override
      public void closeApp(Activity activity) {
        activity.finish();
      }

      @Override
      public void getUserInfo(TiniAppCallback<Bundle> callback) {
        Bundle bundle = new Bundle();
        bundle.putString("name", "Test user");
        bundle.putString("email", "Test user");
        callback.onSuccess(bundle);
      }

      @Override
      public void openPayment(String transactionId, double amount, TiniAppCallback<Bundle> callback) {
        Bundle bundle = new Bundle();
        bundle.putString("transactionId", transactionId);
        callback.onSuccess(bundle);
      }
    });
    TiniAppSDK.sdkInit(this.getApplicationContext(), tiniAppConfigBuilder.build());
  }
}
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin">

```java
val tiniAppConfigBuilder = TiniAppConfiguration.Builder()
tiniAppConfigBuilder.setClientId("76e643c9-5239-444f-a3e0-c777fd0cec09")
tiniAppConfigBuilder.setPartnerCode("app-demo")
tiniAppConfigBuilder.setEnv(TiniAppConfiguration.TiniSDKEnv.UAT)
tiniAppConfigBuilder.registerTiniAppCallback(object : TiniAppInterface {
    override fun closeApp(activity: Activity) {
        activity.finish()
    }

    override fun openPayment(
        transactionId: String,
        amount: Double,
        callback: TiniAppCallback<Bundle>
    ) {
        val bundle = Bundle()
        bundle.putString("transactionId", transactionId)
        callback?.onSuccess(bundle)
    }

    override fun getUserInfo(callback: TiniAppCallback<Bundle>?) {
        val bundle = Bundle()
        bundle.putString("name", "Test user")
        bundle.putString("email", "Test user")
        callback?.onSuccess(bundle)
    }
})
TiniAppSDK.sdkInit(this.applicationContext, tiniAppConfigBuilder.build())
```

  </TabItem>
</Tabs>

### 4. Mở 1 miniapp

Để mở 1 miniapp, chúng ta có thể dùng cách sau:

<Tabs>
  <TabItem value="java" label="Java">

```java
TiniAppSDK.getInstance().openMiniApp(this, "vn.tiki.vip", null, null);
```

```java
Bundle bundle = new Bundle();
bundle.putString("code_order", "111111");
bundle.putString("status", "false");
bundle.putString("order_id", "111111");

TiniAppSDK.getInstance().openMiniApp(this, "vn.tiki.vip", "pages/home/index", bundle);
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin">

```java
TiniAppSDK.getInstance().openMiniApp(this, "vn.tiki.vip", null, null)
```

```java
var bundle = Bundle()
bundle.putString("code_order", "111111")
bundle.putString("status", "false")
bundle.putString("order_id", "111111")

TiniAppSDK.getInstance().openMiniApp(this, "vn.tiki.vip", "pages/home/index", bundle)
```

  </TabItem>
</Tabs>

trong đó:

- **context**: Required. Context của activity hiện tại
- **appId**: Required. Id của tiniapp cần mở
- **pagePath**: Optional. Đường dẫn của page cần mở ví dụ pages/home/index
- **params**: Optional. Các tham số cần truyền thêm. Các tham số này sẽ nhận ở lifecycle onLaunch của App hoặc onLoad của page

### 5. Handle deeplink

- Deeplink cho tiniapp bắt buộc sẽ có định dạng: scheme://apps/appId/pagePath?params. Ví dụ: tikivn://apps/vn.tiki.vip
- Sử dụng method TiniAppSDK.extractLink(url) để lấy thông tin appId, pagePath, params và sử dụng method openMiniApp để mở Tiniapp tương ứng

```java
TiniAppLinkInfo linkInfo = TiniAppSDK.extractLink(deeplink);
```

TiniAppLinkInfo

- **appId**: App Id
- **pagePath**: Page path nếu có
- **params**: Params nếu có

### 6. Cài đặt delegate của TiniAppSDK

`TiniAppSDK` cung cấp 3 hàm delegate bạn cần implement trong Super App của mình. Bạn cần set delegate cho class được implement

<Tabs>
  <TabItem value="java" label="Java">

```java
tiniAppConfigBuilder.registerTiniAppCallback(new TiniAppInterface() {
  @Override
  public void closeApp(Activity activity) {
    activity.finish();
  }

  @Override
  public void getUserInfo(TiniAppCallback<Bundle> callback) {
    Bundle bundle = new Bundle();
    bundle.putString("name", "Test user");
    bundle.putString("email", "Test user");
    callback.onSuccess(bundle);
  }

  @Override
  public void openPayment(String transactionId, double amount, TiniAppCallback<Bundle> callback) {
    Bundle bundle = new Bundle();
    bundle.putString("transactionId", transactionId);
    callback.onSuccess(bundle);
  }
});
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin">

```java
tiniAppConfigBuilder.registerTiniAppCallback(object : TiniAppInterface {
  override fun closeApp(activity: Activity) {
  }

  override fun openPayment(
      transactionId: String,
      amount: Double,
      callback: TiniAppCallback<Bundle>
  ) {
  }

  override fun getUserInfo(callback: TiniAppCallback<Bundle>?) {
  }
})
```

  </TabItem>
</Tabs>

#### 6.1. Tích hợp đăng ký đăng nhập

Khi một Tini App cần lấy thông tin tài khoản đang đăng nhập từ Super App, `TiniAppSDK` sẽ gọi tới hàm implement `getUserInfo`

Bạn có thể cài đặt implementation này như sau
<Tabs>
<TabItem value="java" label="Java">

```java
tiniAppConfigBuilder.registerTiniAppCallback(new TiniAppInterface() {
    @Override
    public void getUserInfo(TiniAppCallback<Bundle> callback) {
      Bundle bundle = new Bundle()
      bundle.putString("name", "Test user")
      bundle.putString("email", "test@gmail.com")
      bundle.putString("phone", "1234")
      callback?.onSuccess(bundle)
    }
});
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin">

```java
tiniAppConfigBuilder.registerTiniAppCallback(object : TiniAppInterface {
  override fun getUserInfo(callback: TiniAppCallback<Bundle>?) {
    val bundle = Bundle()
    bundle.putString("name", "Test user")
    bundle.putString("email", "Test user")
    callback?.onSuccess(bundle)
  }
})
```

  </TabItem>
</Tabs>

#### 6.2. Tích hợp thanh toán

Khi một Tini App cần thanh toán một đơn hàng, `TiniAppSDK` sẽ gọi tới hàm implement `openPayment`

Bạn có thể implement như sau.
<Tabs>
<TabItem value="java" label="Java">

```java
tiniAppConfigBuilder.registerTiniAppCallback(new TiniAppInterface() {
  @Override
  public void openPayment(String transactionId, double amount, TiniAppCallback<Bundle> callback) {
    Bundle bundle = new Bundle();
    bundle.putString("transactionId", transactionId);

    // Trường hợp thanh toán thành công
    // và thực hiện thông báo lại cho TiniApp SDK thì thực hiện đoạn code sau:
    callback.onSuccess(bundle);

    // Trường hợp thanh toán thất bại
    // và thực hiện thông báo lại cho TiniApp SDK thì thực hiện đoạn code sau:
    callback.onError("{\"action\":\"goto_home\",\"msg_err\":\"Something's wrong\"}");
  }
});
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin">

```java
tiniAppConfigBuilder.registerTiniAppCallback(object : TiniAppInterface {
  override fun openPayment(
      transactionId: String,
      amount: Double,
      callback: TiniAppCallback<Bundle>
  ) {
    val bundle = Bundle()
    bundle.putString("transactionId", transactionId)
    // Trường hợp thanh toán thành công
    // và thực hiện thông báo lại cho TiniApp SDK thì thực hiện đoạn code sau:
    callback?.onSuccess(bundle)

    // Trường hợp thanh toán thất bại
    // và thực hiện thông báo lại cho TiniApp SDK thì thực hiện đoạn code sau:
    callback?.onError("{\"action\":\"goto_home\",\"msg_err\":\"Something's wrong\"}")
  }
})
```

  </TabItem>
</Tabs>

#### 6.3. Đóng toàn bộ Tini App

<Tabs>
  <TabItem value="java" label="Java">

```java
tiniAppConfigBuilder.registerTiniAppCallback(new TiniAppInterface() {
  @Override
  public void closeApp(Activity activity) {
    activity.finish();
  }
});
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin">

```java
tiniAppConfigBuilder.registerTiniAppCallback(object : TiniAppInterface {
  override fun closeApp(activity: Activity) {
    activity.finish()
  }
})
```

  </TabItem>
</Tabs>

## Ứng dụng tích hợp mẫu

Bạn có thể xem một ứng dụng Android mẫu đã được tích hợp tại địa chỉ [Link](https://github.com/tikivn/tiniapp-sdk-android)

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
| `setPartnerCode`          | Partner Code từ TiniConsole                  |
| `setClientId`             | Client ID từ TiniConsole                     |
| `registerTiniAppCallback` | Implement các phương thức mà TiniApp cần     |
