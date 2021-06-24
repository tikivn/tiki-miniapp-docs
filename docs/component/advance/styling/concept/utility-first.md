---
title: Utitlity First
---

Xây dựng các component dựa vào một tập các primitive utilities

Thông thường, khi muốn style một component, bạn có thể viết CSS dựa theo [BEM (block-element-modify)](http://getbem.com/introduction/)

![image](https://salt.tikicdn.com/ts/miniapp/c9/be/01/eb14aa1dd509c53dc9b1ae015e81ae8a.png)

```xml
<view class="item">
  <view class="item-wrapper">
    <view class="item-prefix">
      <icon type="location" color="var(--gray60)" />
    </view>
    <view class="item-content">
      <view class="item-thumb">
        <image class="item-thumb-img"
          src="https://salt.tikicdn.com/ts/miniapp/15/9a/49/fb366a4200277a059e8960e0eeca88fc.png" />
      </view>
      <view class="item-main-content">
        <view class="item-content-title">Label</view>
        <view class="item-content-subtitle">Description</view>
      </view>
    </view>
    <view class="item-suffix">
      <view class="item-suffix-text">CTA</view>
    </view>
    <view class="item-arrow">
      <icon type="arrow_right" color="var(--gray60)" />
    </view>
  </view>
</view>
```

```css
.item {
  display: flex;
  padding: 8px 16px 0 16px;
  background-color: white;
}

.item-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--gray20);
}

.item-prefix {
  display: flex;
  align-items: flex-start;
  margin-right: 8px;
}

.item-thumb-img {
  width: 40px;
  height: 40px;
  margin-right: 8px;
}

.item-content {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  margin-right: 8px;
}

.item-main-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
}

.item-content-title {
  font-style: var(--font-style-normal);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-base);
  line-height: calc(var(--font-size-base) * var(--font-line-height, 1.5));
  color: var(--gray100);
  margin-bottom: 4px;
}

.item-content-subtitle {
  font-style: var(--font-style-normal);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-small);
  line-height: calc(var(--font-size-small) * var(--font-line-height, 1.5));
  color: var(--gray60);
}

.item-suffix {
  display: flex;
  align-items: center;
}

.item-suffix-text {
  font-style: var(--font-style-normal);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-base);
  line-height: calc(var(--font-height-base) * var(--font-line-height, 1.5));
  color: var(--gray60);
}

.item-arrow {
  display: flex;
  align-items: center;
}
```

Bằng cách sử dụng `tini-style`, bạn co thể áp dụng một tập các class đã được `tini-style` định nghĩa từ trước như sau

```xml
<view class="flex pl-medium pr-medium pt-2x-small bg-white">
  <view class="flex flex-grow flex-row border-0 border-solid border-bottom border-gray20 pb-2x-small spacex-2x-small">
    <view class="flex flex-col">
      <icon type="location" color="var(--gray60)" />
    </view>
    <view class="flex flex-row flex-grow spacex-2x-small">
      <view>
        <image style="width: 40px; height: 40px;"
          src="https://salt.tikicdn.com/ts/miniapp/15/9a/49/fb366a4200277a059e8960e0eeca88fc.png" />
      </view>
      <view class="flex flex-col flex-grow spacey-4x-small">
        <view class="font-bold text-base text-gray100">Label</view>
        <view class="font-regular text-small text-gray60">Description</view>
      </view>
    </view>
    <view class="flex items-center" style="align-items: center;">
      <view class="font-regular text-base text-gray60">CTA</view>
    </view>
    <view class="flex flex-row items-center">
      <icon type="arrow_right" color="var(--gray60)" />
    </view>
  </view>
</view>
```

Trong ví dụ trên, chúng ta đã sử dụng

- `flex` và `padding` để set layout dạng cột và dạng hàng cho UI

- để set khoảng cách giữa các item trong một flex, thay vì sử dụng `margin`, chúng ta sử dụng `spacex-` và `spacey-`. Bằng cách này khoảng cách giữa các items của một container, sẽ được quyết định bởi container cha chứ không phải từng items con.

- để set font size cho từng đoạn text, chúng ta cũng sử dụng các utility về typography có sẵn (`text-bold`, `text-base`)

Với việc sử dụng `tini-style` với TXML, việc build UI cho một component sẽ trở nên đơn giản hơn rất nhiều.

Ngoài ra, các component được build với tini-style cũng sẽ thống nhất.
