---
order: 68
category:
  vi-VN: Interactive Feedback
  en-US: Interactive Feedback
title: 
  vi-VN: my.showActionSheet
  en-US: my.showActionSheet
---

# Gới thiệu
my.showActionSheet là api để hiển thị bottom popup để user có thể chọn option.
## Sample Code

index.txml
```xml
<view class="page">
  <view class="page-description">Confirm API</view>
  <view class="page-section">
    <view class="page-section-title">my.confirm</view>
    <view class="page-section-demo">
      <button type="primary" onTap="onActionSheet">Show action sheet</button>
    </view>
  </view>
</view>
```

index.js
```js
Page({
  onActionSheet() {
    my.showActionSheet({
      title: "Action Sheet",
      items: ["Button 1", "Button 2", "Button 3"],
      destructiveBtnIndex: 2,
      success: (res) => {
        const btn = res.index === -1 ? "Cancel" : "at index " + res.index;
        my.alert({
          title: `Clicked button ${btn}`,
        });
      },
    });
  },
})
```

## Chi tiết
| Thuộc tính     | Kiểu dữ liệu  | Required | Mô tả |
| ------- | --------------- | ------- | --------------- |
| title | String | No | Title của action sheet |
| items | Array String | Yes | Các options hiển thị ra cho user |
| destructiveBtnIndex | Number | No | Chỉ ra index của option mà muốn hiển thị kiểu destructive |
| cancelButtonText | String | No | Text của button cancel, mặc định là Cancel |
| success | Function | No | Callback khi action sheet show success |
| fail | Function | No | Callback khi action sheetshow fail |
| complete | Function | No | Callback khi action sheet đã được show |