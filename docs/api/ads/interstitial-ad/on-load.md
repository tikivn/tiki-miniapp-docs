---
title: Interstitiad.onLoad
sidebar_custom_props:
  description: Lắng nghe sự kiện quảng cáo được load thành công
---

Lắng nghe sự kiện quảng cáo được load thành công.

## Sử dụng

```js
this.ad = my.createInterstitialAd();
this.ad.onLoad(() => {
  my.alert({ content: 'Ad loaded' });
});
ad.load();
```
