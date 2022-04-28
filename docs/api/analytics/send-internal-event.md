---
title: my.sendInternalEvent
---

`my.sendInternalEvent` là API dùng để ghi nhận dữ liệu lên hệ thống Trackity hoặc Amplitude của Tiki

## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                        |
| ---------- | ------------ | ---------------------------------------------------------------------------- |
| provider   | String       | `trackity`| `amplitude`                                                      |
| params     | Object       | Params cho event muốn track lên hệ thống.                                    |
| success    | Function     | Callback function khi việc send dữ liệu thành công.                          |
| fail       | Function     | Callback function khi việc send dữ liệu bất thành.                               |
| complete   | Function     | Callback function khi việc send dữ liệu hoàn tất bất kể thành công hay thất bại. |


:::note Lưu ý

Do đặc thù track lên trackity và amplitude params khác nhau, nên chú ý ở params của amplitude phải wrap params thêm 1 cấp.

:::

## Sample Code

Ví dụ sau dùng để send event lên Trackity:

```js
my.sendInternalEvent({provider: 'trackity', params: {appId: 1}});
```

Send event lên Amplitude:

```js
my.sendInternalEvent({provider: 'amplitude', params: {name: 'test', params: {appId: 1}}});
```

