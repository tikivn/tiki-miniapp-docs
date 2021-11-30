---
title: Interstitiad.onClose
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