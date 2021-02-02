---
order: 34
category:
  vi-VN: SJS
  en-US: SJS
title:
  vi-VN: Statement
  en-US: Statement
---

## if statement

Trong các file `.sjs`, bạn có thể sử dụng lệnh `if` với các định dạng sau

- `if(expression) statement`: Nếu expression là true, thì thực thi statement
- `if(expression) statemen1 else statement2`: Nếu expression là true thì thực thi statement1, còn nếu không thực thi statement2
- `if ... else if ... else statementN`: Với cách này, bạn có thể chọn từ statement1 - statementN để thực thi tuỳ vào điều kiện.

```js
// if ...

if (Expression) Statement;

if (Expression)
  Statement;

if (Expression) {
  Code block;
}


// if ... else

if (Expression) Statement;
else Statement;

if (Expression)
  Statement;
else
  Statement;

if (Expression) {
  Code block;
} else {
  Code block;
}

// if ... else if ... else ...

if (Expression) {
  Code block;
} else if (Expression) {
  Code block;
} else if (Expression) {
  Code block;
} else {
  Code block;
}


```

## switch statement

```js
switch (Expression) {
  case Variable:
    Statement;
  case Number:
    Statement;
    break;
  case String:
    Statement;
  default:
    Statement;
}
```

- `default` có thể bỏ qua
- Sau từ khoá `case`, bạn có thể sử dụng một `variable`, `number` hoặc là `string`.

Sau đây là một đoạn code ví dụ

```js
var exp = 10;

switch (exp) {
  case "10":
    console.log("string 10");
    break;
  case 10:
    console.log("number 10");
    break;
  case exp:
    console.log("var exp");
    break;
  default:
    console.log("default");
}
```

Kết quả

```
number 10
```

## for statement

```js
for (Statement; Statement; Statement)
  Statement;

for (Statement; Statement; Statement) {
  Code block;
}
```

- SJS hỗ trợ việc sử dụng các từ khoá `break` và `continue`

Code ví dụ

```js
for (var i = 0; i < 3; ++i) {
  console.log(i);
  if (i >= 1) break;
}
```

Kết quả

```
0
1
```

## while statement

```js
while (Expression)
  Statement;

while (Expression){
  Code block;
}

do {
  Code block;
} while (Expression)
```

- Khi `Expression` bằng true, vòng lặp sẽ thực thi `statement` hoặc `code block`.
- SJS hỗ trợ các từ khoá `break` và `continue`.
