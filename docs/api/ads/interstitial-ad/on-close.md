---
title: Interstitiad.onClose
sidebar_custom_props:
  description: Lắng nghe sự kiện quảng cáo bị đóng
---

Lắng nghe sự kiện quảng cáo bị đóng.

## Sử dụng

```js
this.ad = my.createInterstitialAd();
this.ad.onClose(() => {
  my.alert({ content: 'Ad closed' });
});
ad.load();
```
