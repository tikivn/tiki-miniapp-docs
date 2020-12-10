---
order: 42
category:
  vi-VN: Điều hướng
  en-US: Navigator
title: 
  vi-VN: my.reLaunch
  en-US: my.reLaunch
---

# Giới thiệu

**my.reLaunch** là API dùng để đóng tất cả các pages hiện tại và nhảy tới một page nào đó trong ứng dụng.

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
  reLaunch() {
    my.reLaunch({ url: 'pages/tabBar/component/index' });
  }
})
```

## API Params

| Attributes | Type     | Required | Description |
| ---------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| url        | String   | Yes      | Đường dẫn (pagePath) của màn hình muốn nhảy tới. Nếu bạn chỉ định màn hình nằm trong tabbar thì màn hình đó sẽ được thêm vào stack thay việc thực hiện chuyển tab. <br><br> Để truyền dữ liệu giữa các màn hình bạn có thể truyền theo query string đằng sau dấu `?` của url. <br><br>**Ví dụ:** `pages/index/index?param1=value1&param2=value2` |
| success    | Function | No       | Callback function khi thành công.                                                                                                                                                                                                                                                                                               |
| fail       | Function | No       | Callback function khi thất bại.                                                                                                                                                                                                                                                                                                 |
| comlete    | Function | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại.                                                                                                            |
