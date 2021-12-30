---
title: Biến
---

Các biến trong SJS đều là tham chiếu đến các giá trị.

## Cú pháp

* Có thể sử dụng var, let, const giống như Javascript.
* Nếu chỉ define mà không assign value thì giá trị value default sẽ là `undefined`

```js
var num = 1;
var str = "hello tiki";
var undef; // undef === undefined
const n = 2;
let s = 'string';
```

## Quy tắc đặt tên biến

Tên của biến phải tuân theo những quy tắc sau:

- Kí tự đầu tiên phải là: chữ cái (az, AZ), gạch dưới (_).
- Các kí tự còn lại có thể là: chữ cái (az, AZ), gạch dưới (_), số (0-9).
  
## Reserved identifier

Giống như Javascript, không được đặt tên trùng với tập các tên sau:

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