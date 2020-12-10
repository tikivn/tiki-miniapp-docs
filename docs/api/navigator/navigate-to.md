---
order: 40
category:
  vi-VN: Điều hướng
  en-US: Navigator
title: 
  vi-VN: my.navigateTo
  en-US: my.navigateTo
---

# Giới thiệu

**my.navigateTo** là API dùng để di chuyển từ màn hình hiện tại tới màn hình mong muốn trong ứng dụng.

## Lưu ý khi sử dụng

- Bạn có thể dùng `my.navigateBack` để quay về màn hình trước đó.
- `my.navigateTo` không dùng để chuyển đổi trang giữa các tab trong TabBar. Để thực hiện tác vụ đó bạn cần dùng `my.switchTab`.

# Sử dụng

## Sample Code

```jsx
<View style={styles.page}>
  <View style={styles.page__section}>
    <View style={styles.button}>
      <Button title="Navigate To" onPress={navigateTo} />
    </View>
    <View style={styles.button}>
      <Button title="Navigate Back" onPress={navigateBack}  />
    </View>
    <View style={styles.button}>
      <Button title="Switch Tab" onPress={switchTab}  />
    </View>
    <View style={styles.button}>
      <Button title="reLaunch" onPress={reLaunch}  />
    </View>
  </View>
</View>
```

```js
Page({
  navigateTo() {
    my.navigateTo({ url: 'pages/component/view/index' })
  }
})
```

## API Params

| Attributes | Type     | Required | Description |
| ---------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| url        | String   | Yes      | Đường dẫn (pagePath) của màn hình muốn nhảy tới. Nếu bạn chỉ định màn hình nằm trong tabbar thì màn hình đó sẽ được thêm vào stack thay việc thực hiện chuyển tab. <br><br> Để truyền dữ liệu giữa các màn hình bạn có thể truyền theo query string đằng sau dấu `?` của url. <br><br>**Ví dụ:** `pages/index/index?param1=value1&param2=value2` |
| success    | Function | No       | Callback function khi thành công.                                                                                                                                                                                                                                                                                               |
| fail       | Function | No       | Callback function khi thất bại.                                                                                                                                                                                                                                                                                                 |
| comlete    | Function | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại.                                                                                                                                                                                                                                                                  |
