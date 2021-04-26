---
title: my.getStorageInfo
---

## Giới thiệu

`my.getStorageInfo` là api để đọc ra thông tin storage của app như dung lượng sử dụng hiện tại, giới hạn, các keys đã được lưu

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
  onGetData() {
    my.getStorageInfo({
      success: function (res) {
        console.log(res.keys);
        console.log(res.currentSize);
        console.log(res.limitSize);
      }
    });
  }
});
```

### Chi tiết

| Thuộc tính | Kiểu dữ liệu | Required | Mô tả                                              |
| ---------- | ------------ | -------- | -------------------------------------------------- |
| success    | Function     | No       | Callback khi thông tin dữ liệu được đọc thành công |
| fail       | Function     | No       | Callback khi thông tin dữ liệu được đọc thất bại   |
| complete   | Function     | No       | Callback sau khi thực hiện việc đọc dữ liệu        |

Success callback

| Thuộc tính  | Kiểu dữ liệu | Mô tả                                       |
| ----------- | ------------ | ------------------------------------------- |
| keys        | String array | Chứa toàn bộ thông tin các keys đã được lưu |
| currentSize | Number       | Dung lượng đã sử dụng, đơn vị là KB         |
| limitSize   | Number       | Giới hạn dung lượng, đơn vị là KB           |
