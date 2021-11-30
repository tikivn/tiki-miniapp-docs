---
title: Introduction
---

InterstitialAd là 1 component để hiển thị quảng cáo dạng popup. Khi sử dụng jsapi [my.createInterstitialAd](../create-interstitial-ad.md), 1 instance InterstitialAd sẽ được tạo ra. Mặc định quảng cáo sẽ hide đi, bạn phải gọi bàm `show` để hiển thị quảng cáo.

***Khả dụng***: hỗ trợ từ version 1.82.1 trở lên.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';
<QRCode page="pages/component/advance/ads/interstitial-ad/index" />

## Sử dụng:
##### [InterstitialAd.show](./show.md)
Hiển thị quảng cáo
##### [InterstitialAd.load](./load.md)
Thực hiện tải quảng cáo
##### [InterstitialAd.destroy](./destroy.md)
Đóng quảng cáo
##### [InterstitialAd.onLoad(function callback)](./on-load.md)
Lắng nghe sự kiện quảng cáo được load thành công
##### [InterstitialAd.offLoad(function callback)](./off-load.md)
Huỷ việc lắng nghe sự kiện onLoad
##### [InterstitialAd.onError(function callback)](./on-error.md)
Lắng nghe sự kiện hiển thị quảng cáo bị lỗi
##### [InterstitialAd.offError(function callback)](./off-error.md)
Huỷ việc lắng nghe sự kiện onError
##### [InterstitialAd.onClose(function callback)](./on-close.md)
Lắng nghe sự kiện quảng cáo bị đóng.
##### [InterstitialAd.offClose(function callback)](./off-close.md)
Huỷ việc lắng nghe sự kiện onClose