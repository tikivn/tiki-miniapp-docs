---
title: my.setStorage
---

## Giới thiệu

`my.setStorage` là api để lưu trữ dữ liệu theo key, dữ liệu mới sẽ override dữ liệu cũ nếu chung key.

## Lưu ý:

- Mỗi app chỉ được lưu trữ không quá 6MB.
- Dữ liệu của mỗi app đã được tách biệt, ứng dụng này không thể đọc được thông tin của ứng dụng khác.
- Dữ liệu chỉ bị mất khi ứng dụng bị xoá hoặc reset devices. Việc cài đè ứng dụng ko làm mất dữ liệu được lưu trữ.
- Trên ios, storage có hỗ trợ Itunes backup.

## Sử dụng

### Sample Code

**index.js**

```js
Page({
  onSaveData() {
    my.setStorage({
      key: 'test',
      data: {
        title: 'Run',
        description: 'Run 5km daily'
      },
      success: function () {
        my.alert({ content: 'Saved successfully' });
      }
    });
  }
});
```

### Chi tiết

| Thuộc tính | Kiểu dữ liệu  | Required | Mô tả                                       |
| ---------- | ------------- | -------- | ------------------------------------------- |
| key        | String        | Yes      | Key của dữ liệu                             |
| data       | Object/String | Yes      | Giá trị của dữ liệu                         |
| success    | Function      | No       | Callback khi dữ liệu được lưu thành công    |
| fail       | Function      | No       | Callback khi dữ liệu được lưu thất bại      |
| complete   | Function      | No       | Callback sau khi thực hiện việc lưu dữ liệu |
