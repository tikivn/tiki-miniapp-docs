---
title: Interstitiad.onError
sidebar_custom_props:
  description: Lắng nghe sự kiện hiển thị quảng cáo bị lỗi
---

Lắng nghe sự kiện hiển thị quảng cáo bị lỗi.

## Sử dụng

```js
this.ad = my.createInterstitialAd();
this.ad.onError((e) => {
  my.alert({ title: 'Ad error', content: JSON.stringify(e) });
});
ad.load();
```
