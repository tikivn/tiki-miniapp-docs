---
title: my.canIUse
sidebar_custom_props:
  description: Kiểm tra xem liệu Runtime của Tiki App Framework cài trên Tiki App có hỗ trợ hay không
---

`my.canIUse` là API dùng để kiểm tra xem liệu Runtime của Tiki App Framework cài trên Tiki App có hỗ trợ:

- Một API cụ thể, hoặc một input parameter cụ thể của một API cùng giá trị của parameter đó.
- Một component cụ thể, hoặc một thuộc tính cụ thể của một component cùng giá trị của thuộc tính đó.

**_Khả dụng_**: Từ runtime version 1.73.11 trở lên.

## API Params

Input của `canIUse` có định dạng `${API}.${type}.${param}.${option}`, hoặc `${component}.${attribute}.${option}`

- `API`: tên của API. Ví dụ API `my.SDKVersion` thì tên của API ở đây sẽ là `SDKVersion`.
- `type`: nhận các giá trị `object`, `return`, hoặc `callback`.
- `param`: input parameter của API.
- `option`: giá trị của parameter đó.

- `component`: tên của component.
- `attribute`: thuộc tính của component đó.
- `option`: giá trị của thuộc tính đó.

## Return value

`my.canIUse` sẽ trả về `true` nếu như có hỗ trợ.

## Sample code

```js
my.canIUse('getFileInfo');
my.canIUse('button.open-type.share');
```
