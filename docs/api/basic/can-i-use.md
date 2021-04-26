---
title: my.canIUse (chưa ready)
---

## Giới thiệu

**my.canIUse** là API dùng để kiểm tra xem Runtime của Mini App hiện tại có hỗ trợ một API cụ thể hay không

## Sử dụng

### Sample code

```js
my.canIUse('getFileInfo');
my.canIUse('button.open-type.share');
```

### API Param

Input của `canIUse` có định dạnh `${API}.${type}.${param}.${option}`, hoặc `${component}.${attribute}.${option}`

- `API`: tên của API. Ví dụ API `my.SDKVersion` thì tên của API là `SDKVersion`.
- `type`: nhận các giá trị `object`, `return`, hoặc `callback`
- `param`: tên của input param cho API
- `option`: giá trị cụ thể của một param
- `component`: tên của component
- `attribute`: tên của attribute
- `option`: giá trị của attribute option

### Return value

API sẽ trả về true nếu như API được hỗ trợ.
