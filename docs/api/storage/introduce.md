---
sidebar_position: 1
title: Giới thiệu
---

## Giới thiệu

Storage API là bộ api dùng để xử lý dữ liệu trong local storage.

Mỗi tiện ích sẽ được sử dụng tối đa 6MB cho việc lưu trữ dữ liệu.

## Danh sách JS API

| JS API             | Mô tả                                                                             |
| ----------------- | --------------------------------------------------------------------------------- |
| my.setStorage     | Lưu trữ dữ liệu theo key; dữ liệu mới sẽ ghi đè dữ liệu cũ nếu cùng key |
| my.getStorage     | Lấy dữ liệu theo key                                                       |
| my.clearStorage   | Xoá toàn bộ dữ liệu được lưu trữ của tiện ích                                   |
| my.removeStorage  | Xoá dữ liệu được lưu theo key                                              |
| my.getStorageInfo | Lấy thông tin dung lượng, giới hạn của storage hiện tại                 |
