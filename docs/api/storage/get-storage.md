---
order: 111
category:
  vi-VN: Storage
  en-US: Storage
title: 
  vi-VN: my.getStorage
  en-US: my.getStorage
---

# Giới thiệu

`my.getStorage` là api để dọc ra dữ liệu đã được lưu theo key
  
# Lưu ý:
- Mỗi app chỉ được lưu trữ không quá 6MB.
- Dữ liệu của mỗi app đã được tách biệt, ứng dụng này không thể đọc được thông tin của ứng dụng khác.
- Dữ liệu chỉ bị mất khi ứng dụng bị xoá hoặc reset devices. Việc cài đè ứng dụng ko làm mất dữ liệu được lưu trữ.
- Trên ios, storage có hỗ trợ Itunes backup.

# Sử dụng

## Sample Code

**index.js**

```js
Page({
  onReadData() {
    my.getStorage({
      key: 'test',
      success: function(res) {
        my.alert({content: 'Title' + res.data.title});
      },
      fail: function(res){
        my.alert({content: res.errorMessage});
      }
    });
  },  
})
```

### Chi tiết

| Thuộc tính     | Kiểu dữ liệu  | Required | Mô tả |
| ------- | --------------- | ------- | --------------- |
| key | String | Yes | Key của dữ liệu |
| success | Function | No | Callback khi dữ liệu được đọc thành công. Trong cấu trúc của response, `data` là field chứa dữ liêu. |
| fail | Function | No | Callback khi đọc dữ liệu thất bại |
| complete | Function | No | Callback sau khi thực hiện việc lưu dữ liệu  |


Success callback

| Thuộc tính     | Kiểu dữ liệu  | Mô tả |
| ------- | --------------- |  --------------- |
| data | Object/String  | Giá trị của dữ liệu được lấy ra |
