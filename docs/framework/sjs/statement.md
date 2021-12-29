---
title: Statement
---

## if

Bạn có thể sử dụng mệnh đề if theo các format:

- if (expression) statement: khi expression là đúng, thực thi statement.

- if (expression) statement1 else statement2: When expression là đúng, thực thi statement1. Nếu không, thực thi statement2.

- if ... else if ... else statementN  Với format này, bạn có thể chọn một trong các câu lệnh 1 ~ statementN để thực thi

```js
// if ...
if (something) doSomething();

if (something)
  doSomething();

if (something) {
  doSomething();
}


// if ... else
if (something) doSomething();
else doOthers();

if (something)
  doSomething();
else
  doOthers();

if (something) {
  doSomething();
} else {
  doOthers();
}

// if ... else if ... else ...
if (a > 1) {
  console.log('a > 1');
} else if (a < 1) {
  console.log('a < 1');
} else {
  console.log('a === 1');
}
```

## switch

```js
switch (getDate().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
```
