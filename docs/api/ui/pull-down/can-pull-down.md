---
title: my.setCanPullDown
sidebar_custom_props:
  description: Set lại việc có hỗ trợ kéo xuống để refresh hay ko. Mặc định thì page hỗ trợ kéo xuống để refresh
---

`my.setCanPullDown` là API để set lại việc có hỗ trợ kéo xuống để refresh hay ko. Mặc định thì page hỗ trợ kéo xuống để refresh.

## API Params

| Thuộc tính  | Kiểu dữ liệu | Bắt buộc | Mô tả                          |
| ----------- | ------------ | :------: | ------------------------------ |
| canPullDown | Boolean      |    ✓     | Có hỗ trợ kéo xuống hay không. |

## Sample Code

```js
my.setCanPullDown({
  canPullDown: true
});
```
