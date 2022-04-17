---
title: my.checkNativePermissions
---

`my.checkNativePermissions` là API dùng để kiểm tra người dùng đã bật các quyền cho Tiki app hay chưa.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/check-native-permissions/index" />

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                                                            |
| ---------- | ------------ | ---------------------------------------------------------------------------------------------------------------- |
| scope      | Array        | Mảng các quyền người dùng muốn kiểm tra. Hãy xem danh sách phạm vi để biết chi tiết.<br/> Ví dụ: scope:["contacts"] |
| success    | Function     | Callback function khi việc kiểm tra thành công.                                                                  |
| fail       | Function     | Callback function khi việc kiểm tra bất thành.                                                                   |
| complete   | Function     | Callback function khi việc kiểm tra hoàn tất bất kể thành công hay thất bại.                                     |

## Callback function payload

| Thuộc tính  | Kiểu dữ liệu | Mô tả                                                                                                         |
| ----------- | ------------ | ------------------------------------------------------------------------------------------------------------- |
| permissions | object       | Kết quả người dùng đã bật quyền cho Tiki app, trong đó khoá là giá trị phạm vi và giá trị trả về là kiểu bool |

## Danh sách các phạm vi (Scope)

| Phạm vi     | Mô tả             |
| ----------- | ----------------- |
| location    | Vị trí            |
| camera      | Camera            |
| photo       | Thư viện ảnh      |
| contacts    | Danh sách liên hệ |
| notification | Thông báo         |

## Sample Code

```js title=index.js
Page({
  data: {
    permissions: [
      { key: 'contacts', value: false },
      { key: 'location', value: false },
      { key: 'notification', value: false },
      { key: 'camera', value: false },
      { key: 'photo', value: false }
    ]
  },
  onChange(e) {
    if (e.detail.value.length > 0) {
      const index = e.detail.value[0];
      this.data.permissions[index] = {
        ...this.data.permissions[index],
        value: !this.data.permissions[index].value
      };
      this.setData({
        permissions: this.data.permissions
      });
    }
  },
  onCheckPermissions() {
    const scope = this.data.permissions.reduce((arr, item) => {
      if (item.value) {
        arr.push(item.key);
      }
      return arr;
    }, []);
    my.checkNativePermissions({
      scope,
      success: (res) => {
        my.alert({ content: JSON.stringify(res) });
      },
      fail: (res) => {
        my.alert({ content: JSON.stringify(res) });
      }
    });
  }
});
```

```xml title=index.txml
<view>
  <block-header title="Usage" description="Check native permission on device" />
  <view class="block-content">
    <checkbox-group onChange="onChange" tiki:for="{{permissions}}" :key="index">
        <list-item>
          <label class="label-line">
            <checkbox class="label-line-checkbox" checked="{{item.value}}" value="{{index}}" />
            <view class="label-line-content">{{item.key}}</view>
          </label>
        </list-item>
    </checkbox-group>
    <button class="button-full" onTap="onCheckPermissions">Check Permission</button>
  </view>
</view>
```
