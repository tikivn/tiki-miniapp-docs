---
sidebar_position: 1
title: Giới thiệu
---

## Giới thiệu

Async Storage thiếu bảo mật. Điều này không lý tưởng hơn khi lưu trữ dữ liệu nhạy cảm như mã thông báo truy cập, thông tin thanh toán, v.v. Security Storage API này nhằm giải quyết vấn đề này bằng cách mã hoá thông tin lưu trữ. EncryptedSharedPreferences của Android và Keychain của iOS

## Danh sách JS API

| JS API                        | Mô tả                                                                   |
| ----------------------------- | ----------------------------------------------------------------------- |
| my.setEncryptedStorage        | Lưu trữ dữ liệu theo key; dữ liệu mới sẽ ghi đè dữ liệu cũ nếu cùng key |
| my.getEncryptedStorage        | Lấy dữ liệu theo key                                                    |
| my.removeEncryptedStorage     | Xoá dữ liệu được lưu theo key                                           |
| my.getAllKeysEncryptedStorage | Lấy tất cả các key                                                      |

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/security-storage/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/security-storage/index" />
