---
title: my.multiLevelSelect
---

`my.multiLevelSelect` là API dùng để tạo component select đa cấp.

## API Params

| Thuộc tính | Kiểu dữ liệu     | Bắt buộc | Mô tả                                                                             |
| ---------- | ---------------- | :------: | --------------------------------------------------------------------------------- |
| title      | string           |          | Tiêu đề.                                                                          |
| list       | Array of objects |    ✓     | Danh sách các mục tùy chọn. Vui lòng tham khảo bảng đối tượng danh sách bên dưới. |
| suggest    | string           |          | Text gợi ý lựa chọn, Mặc định là "Vui lòng chọn".                                 |
| success    | Function         |          | Callback function khi chọn thành công.                                            |
| fail       | Function         |          | Callback function khi thất bại.                                                   |
| complete   | Function         |          | Callback function khi gọi API hoàn tất bất kể thành công hay thất bại.            |

### Giá trị trong list

| Thuộc tính | Kiểu dữ liệu             | Mô tả                |
| ---------- | ---------------- | ------------------------- |
| name       | String           | Tên của mục nhập.         |
| subList    | Array of objects | Danh sách các subentries. |

### Giá trị trong success callback

| Thuộc tính | Kiểu dữ liệu     | Mô tả                                                                                      |
| ---------- | ------- | ----------------------------------------------------------------------------------------------- |
| success    | boolean | True hoặc False                                                                                 |
| result     | string  | Kết quả trả về. Ví dụ [{"name":"HCM City"},{"name":"District 3"},{"name":"Vo Van Tan Street"}]. |

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/multi-level-select/index" />

## Sample Code

```xml title=index.txml
<view>
  <block-header title="Usage" description="my.multiLevelSelect" />
  <view class="block-content">
    <button class="button-full" onTap="onShowMultiLevelSelect">Show Cascade selection</button>
  </view>
</view>


```

```js title=index.js
Page({
  onShowMultiLevelSelect() {
    my.multiLevelSelect({
      title: 'Place of birth',
      suggest: 'Please chosse',
      list: [
        {
          name: 'Hangzhou City',
          subList: [
            {
              name: 'West Lake District',
              subList: [
                {
                  name: 'Gucui Street'
                },
                {
                  name: 'Wenxin Street'
                }
              ]
            },
            {
              name: 'Uptown',
              subList: [
                {
                  name: "Yan'an Street"
                },
                {
                  name: 'Longxiangqiao Street',
                  subList: [
                    {
                      name: 'Longxiangqiao Street 1'
                    },
                    {
                      name: 'Longxiangqiao Street 2'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'Shanghai City'
        },
        {
          name: 'HCM City',
          subList: [
            {
              name: 'District 1'
            },
            {
              name: 'District 3'
            }
          ]
        }
      ],
      success: (res) => {
        my.alert({
          title: `Result: ${JSON.stringify(res)}`
        });
      }
    });
  }
});
```


