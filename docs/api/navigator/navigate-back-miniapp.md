---
order: 44
category:
  vi-VN: Điều hướng
  en-US: Navigator
title:
  vi-VN: my.navigateBackMiniApp
  en-US: my.navigateBackMiniApp
---

## Giới thiệu

**my.navigateBackMiniApp** là API dùng để quay lại app trước đó. API chỉ gọi thành công khi app hiện tại được mở từ một app khác trước đó.

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
  navigateBackMiniApp() {
    my.navigateBackMiniApp({
      extraData: {
        paymentStatus: "success",
      },
      success() {
        alert("DONE");
      },
    });
  },
});
```

### API Params

| Attributes | Type     | Required | Description                                                                                                                      |
| ---------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| extraData  | Object   | No       | Dữ liệu cần được truyền cho app được nhảy tới.<br> App được nhảy tới sẽ lấy thông tin qua hàm `App.onLaunch()` và `App.onShow()` |
| success    | Function | No       | Callback function khi thành công.                                                                                                |
| fail       | Function | No       | Callback function khi thất bại.                                                                                                  |
| complete   | Function | No       | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại.                                                            |
