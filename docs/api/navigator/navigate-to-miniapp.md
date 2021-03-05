---
order: 43
category:
  vi-VN: Điều hướng
  en-US: Navigator
title:
  vi-VN: my.navigateToMiniApp
  en-US: my.navigateToMiniApp
---

## Giới thiệu

**my.navigateToMiniApp** là API dùng để di chuyển giữa các app.

## Sử dụng

### Sample Code

```jsx
<View style={styles.page}>
  <View style={styles.page__section}>
    <View style={styles.button}>
      <Button title="Navigate To MiniApp" onPress={navigateToMiniApp} />
    </View>
    <View style={styles.button}>
      <Button title="Navigate back MiniApp" onPress={navigateBackMiniApp} />
    </View>
  </View>
</View>
```

```js
Page({
  navigateToMiniApp() {
    my.navigateToMiniApp({
      appId: "1234567890",
      path: "pages/tabBar/component/index",
      extraData: {
        from: "MiniApp Demo",
      },
      success() {},
      fail(err) {},
    });
  },
});
```

### API Params

| Attributes | Type     | Required | Description                                                                                                                      |
| ---------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| appId      | String   | Yes      | appId của miniapp muốn di chuyển tới.                                                                                            |
| path       | String   | No       | Đường dẫn tới màn hình muốn mở của app được chuyển tới. Nếu không được quy định thì màn hình đầu tiên sẽ được mở.                |
| extraData  | Object   | No       | Dữ liệu cần được truyền cho app được nhảy tới.<br> App được nhảy tới sẽ lấy thông tin qua hàm `App.onLaunch()` và `App.onShow()` |
| success    | Function | No       | Callback function khi thành công.                                                                                                |
| fail       | Function | No       | Callback function khi thất bại.                                                                                                  |
| complete   | Function | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại.                                                            |
