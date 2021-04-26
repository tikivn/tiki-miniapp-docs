---
sidebar_position: 1
title: Giới thiệu
---

## Giới thiệu

Storage API là bộ api để lưu trữ và sử dụng dữ liệu từ local storage.
Mỗi app sẽ được sử dụng tối đa 6MB cho việc lưu trữ dữ liệu

### Chi tiết

Các apis

| API      | JSAPI             | Mô tả                                                                             |
| -------- | ----------------- | --------------------------------------------------------------------------------- |
| Write    | my.setStorage     | API để lưu trữ dữ liệu theo key, dữ liệu mới sẽ override dữ liệu cũ nếu chung key |
| Read     | my.getStorage     | API để đọc dữ liệu theo key                                                       |
| Clear    | my.clearStorage   | API để xoá toàn bộ dữ liệu được lưu trữ của app                                   |
| Delete   | my.removeStorage  | API để xoá dữ liệu được lưu theo key                                              |
| Get info | my.getStorageInfo | API để lấy thông tin về dung lượng, giới hạn của storage hiện tại                 |
