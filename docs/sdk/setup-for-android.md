---
title: Cài đặt cho Android
---

Hướng dẫn cài đặt Tini App SDK cho dự án Android

## Hướng dẫn

#### Thêm TiniAppSDK dependency vào build.gradle

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

#### Cấu hình AndroidManifest.xml

- Thêm các permissions

```xml
<!-- ... -->
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.VIBRATE" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="com.android.launcher.permission.INSTALL_SHORTCUT" />
<uses-permission android:name="android.permission.WRITE_CONTACTS" />
<uses-permission android:name="android.permission.READ_PROFILE" />
<uses-permission android:name="android.permission.READ_CONTACTS" />
<!-- ... -->
```

#### Tạo Application

Tạo một `Application` được kế thừa từ `TiniAppApplication`

```java
import vn.tiki.TiniAppSDK.TiniAppApplication;

public class SomeApplication extends TiniAppApplication {
  // Setup config
}

```

#### Tạo Activity

Tạo một `Activity` được kế thừa từ `TiniAppActivity`

```java
import vn.tiki.TiniAppSDK.TiniAppActivity;

public class SomeActivity extends TiniAppActivity {
  // Setup config
}

```

## Các phương thức

==== Các phương thức ====

## Thông tin thêm

- [Xây dựng ứng dụng Android](/docs/sdk/example-for-android)
- [Các vấn đề gặp phải](/docs/sdk/troubleshooting)
