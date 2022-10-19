---
title: Cài đặt cho Android
---

Hướng dẫn cài đặt Tini App SDK cho dự án Android

## Hướng dẫn

### Bước 1: Thêm TiniAppSDK dependency vào build.gradle

- Thêm `jitpack.io` vào build.gradle ở rootProject

```
allprojects {
    repositories {
        google()
        mavenCentral()

        // Add this line
        maven { url "https://jitpack.io" }
    }
}
```

- Thêm `android.enableJetifier` vào gradle.properties ở rootProject

```
android.enableJetifier=true
```

- Thêm dependencies vào build.gradle trong app

```
dependencies {
    // Add this line
    implementation 'com.facebook.conceal:conceal:1.1.3@aar'
    implementation 'com.github.lamvd0101:tiniapp-sdk-android:v1.24.0'
}
```

### Bước 2: Cấu hình AndroidManifest.xml

- Thêm các permissions

```
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
```

### Bước 3: Tạo Activity

Tạo một `Activity` được kế thừa từ `TiniAppActivity`

```
import vn.tiki.TiniAppSDK.TiniAppActivity;

public class SomeActivity extends TiniAppActivity {
  // Do something
}

```

## Các vấn đề gặp phải

### Vấn đề 1: Conflict thư viện

### Vấn đề 2: Conflict thư viện
