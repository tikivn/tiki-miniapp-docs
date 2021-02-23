---
order: 41
category:
  vi-VN: Điều hướng
  en-US: Navigator
title: 
  vi-VN: my.navigateBack
  en-US: my.navigateBack
---

## Giới thiệu

**my.navigateTo** là API dùng để đóng màn hình hiện tại và trở lại màn hình trước đó.

## Sử dụng

### Sample Code

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
  navigateBack() {
    my.navigateBack();
  },
})
```

### API Params

| Attributes | Type   | Required | Description                                                                                                                                                 |
| ---------- | ------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| delta      | Number | No       | Số lượng giữa page hiện tại với page muốn quay lại. Ví dụ bạn muốn bỏ qua page trước đó và quay lại page trước đó nữa thì `delta = 2`. Mặc định delta = 1. |
