---
order: 31
category:
  vi-VN: SJS
  en-US: SJS
title:
  vi-VN: Các biến trong SJS
  en-US: Variables
---

## Cú pháp

- Các biến trong SJS đều tham chiếu bằng giá trị (reference by value).
- Hỗ trợ việc sử dụng `const`, `let` giống như Javascript.
- Việc sử dụng `var` giống với Javascript.
- Nếu một biến được định nghĩa, nhưng không được assign giá trị, thì giá trị mặc định của biến đó sẽ là `undefined`.

```js
var num = 1;
var str = "hello tiki";
var undef; // undef === undefined
const n = 2;
let s = "string";
```

## Tên biến

### Quy tắc đặt tên

Tên biến trong SJS phải thoả mãn 2 điều kiện sau:

- Ký tự đầu tiền bắt buộc phải là một ký tự (az, AZ), hoặc là dấu gạch dưới (\_)
- Các ký tự khác ký tự đầu tiên có thể là a-z, A-Z, 0-9 hoặc là \_

### Các từ khoá

Các từ khoá sau không thể sử dụng cho tên biến

```
arguments
break
case
continue
default
delete
do
else
false
for
function
if
Infinity
NaN
null
require
return
switch
this
true
typeof
undefined
var
void
while
```
