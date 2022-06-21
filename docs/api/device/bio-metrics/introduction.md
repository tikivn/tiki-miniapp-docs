---
title: Giới thiệu
---

Biometrics hay còn gọi là xác thực sinh trắc học, là tính năng của thiết bị dùng để bảo mật quyền riêng tư bao gồm vân tay (TouchID), nhận diện gương mặt (FaceID), nhận diện móng mắt (Iris Recognition)...

`my.biometrics` là tập JSAPI sử dụng biometrics của device để giúp developer có thể sử dụng để xác thực người dùng, bảo mật dữ liệu người dùng.
Có 2 cách để sử dụng xác thực sinh trắc hoặc.

- Local authentication: Nghĩa là việc xác thực chỉ đơn giản sử dụng biometrics của device và trả về kết quả có thành công hay không. Tham khảo tại [đây](./local-auth)
- Server authentication: Việc xác thực này sẽ cần phía developer xây dựng hệ thống backend để verify dữ liệu. Tham khảo tại [đây](./an-introduction)

**_Khả dụng_**: Hỗ trợ từ version 1.96.7 trở lên.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/bio-metrics/local/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/bio-metrics/local/index" />
