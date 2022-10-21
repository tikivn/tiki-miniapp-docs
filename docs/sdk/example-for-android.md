---
title: Xây dựng ứng dụng Android
---

Hướng dẫn xây dựng một ứng dụng Android cơ bản được tích hợp Tini App SDK

## Hướng dẫn

#### Tìm hiểu các tài liệu

Đọc kĩ các tài liệu sau để hiểu về các bước cài đặt, vận hành của Tini App SDK

- [Cài đặt cho Android](/docs/sdk/setup-for-android)
- [Các vấn đề gặp phải](/docs/sdk/troubleshooting)

#### Yêu cầu

- Android Studio

#### Tạo ứng dụng Android đơn giản

Sử dụng Android Studio tạo một dự án cho ứng dụng Android. Ở đây mình đang sử dụng kotlin language.

<img src="/img/sdk/example-android-1.png"  alt="Tini App SDK - Example Android 1"/>

#### Cấu hình gradle.build

- Thêm `jitpack.io` vào build.gradle hoặc settings.gradle ở rootProject

```groovy
repositories {
  google()
  mavenCentral()

  // ==== Tini App SDK ====
  maven { url "https://jitpack.io" }
}
```

- Thêm `android.enableJetifier` vào gradle.properties ở rootProject

```bash
# ==== Tini App SDK ====
android.enableJetifier=true
```

- Thêm dependencies vào build.gradle trong app

```groovy
dependencies {
  // Your libs

  // ==== Tini App SDK ====
  implementation 'com.facebook.conceal:conceal:1.1.3@aar'
  implementation('com.github.lamvd0101:tiniapp-sdk-android:v1.24.0') {
    exclude group: "androidx.lifecycle"
  }
}
```

- Sau đó chọn menu `File -> Sync Project with Gradle Files`.

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

#### Cấu hình lại file MainActivity

Chỉnh sửa lại MainActivity kế thừa TiniAppActivity

```kotlin
package com.company.example

import android.os.Bundle
import vn.tiki.TiniAppSDK.TiniAppActivity

class MainActivity : TiniAppActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
  }
}
```

#### Bấm build dự án

Nếu ứng dụng hiển thị trên emulator như hình là bạn đã tích hợp thành công Tini App SDK. Mọi thắc mắc nếu bạn không tìm thấy trong tài liệu, bạn có thể đặt câu hỏi cho chúng tôi tại [community.tiki.vn](https://community.tiki.vn).
<img src="/img/sdk/example-android-2.png" alt="Tini App SDK - Example Android 2"/>
