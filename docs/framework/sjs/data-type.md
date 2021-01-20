---
order: 35
category:
  vi-VN: SJS
  en-US: SJS
title:
  vi-VN: Data Type
  en-US: Data Type
---

SJS hỗ trợ các kiểu dữ liệu sau

- string
- boolean
- number
- object
- function
- array
- date
- regexp

## Xác định kiểu dữ liệu

Bằng cách sử dụng hàm `constructor`, hoặc hàm `typeof`, chúng ta có thể kiểm tra kiểu dữ liệu của một biến

```js
const number = 10;
console.log(number.constructor); // "Number"
const string = "str";
console.log(string.constructor); // "String"
const boolean = true;
console.log(boolean.constructor); // "Boolean"
const object = {};
console.log(object.constructor); // "Object"
const func = function() {};
console.log(func.constructor); // "Function"
const array = [];
console.log(array.constructor); // "Array"
const date = getDate();
console.log(date.constructor); // "Date"
const regexp = getRegExp();
console.log(regexp.constructor); // "RegExp"
```

```js
const num = 100;
const bool = false;
const obj = {};
const func = function() {};
const array = [];
const date = getDate();
const regexp = getRegExp();
console.log(typeof num); // 'number'
console.log(typeof bool); // 'boolean'
console.log(typeof obj); // 'object'
console.log(typeof func); // 'function'
console.log(typeof array); // 'object'
console.log(typeof date); // 'object'
console.log(typeof regexp); // 'object'
console.log(typeof undefined); // 'undefined'
console.log(typeof null); // 'object'
```

## string

Có 2 cách để định nghĩa một string

```js
"hello mini app";
"hello tiki";
```

SJS cũng hỗ trợ sử dụng cú pháp của ES6

```js
const a = "hello";
const str = `${a} tiki`;
```

Các hàm của string gồm có

- toString
- valueOf
- charAt
- charCodeAt
- concat
- indexOf
- lastIndexOf
- localeCompare
- match
- replace
- search
- slice
- split
- substring
- toLowerCase
- toLocaleLowerCase
- toUpperCase
- toLocaleUpperCase
- trim

## number

```js
const num = 10;
const PI = 3.141592653589793;
```

Các hàm

- toString
- toLocaleString
- valueOf
- toFixed
- toExponential
- toPrecision

## boolean

```js
const a = true;
```

Các hàm

- toString
- valueOf

## object

```js
var o = {};
o = {
  str: "str",
  constVar: 2,
  val: {},
};
console.log(1 === o["string"]);
console.log(2 === o.constVar);
o["string"]++;
o["string"] += 10;
o.constVar++;
o.constVar += 10;
console.log(12 === o["string"]);
console.log(13 === o.constVar);
```

ES6

```js
let a = 2;
o = {
  a,
  b() {},
};
const { a, b, c: d, e = "default" } = { a: 1, b: 2, c: 3 };
const { a, ...other } = { a: 1, b: 2, c: 3 };
const f = { ...others };
```

Các hàm

- toString trả về `[object Object]`

## function

```js
function a(x) {
  return x;
}

var b = function(x) {
  return x;
};

const double = (x) => x * 2;
function f(x = 2) {}
function g({ name: n = "tiki mini app", ...other } = {}) {}
function h([a, b] = []) {}

var c = function(x) {
  return function() {
    return x;
  };
};
var d = c(25);
console.log(25 === d());
```

Các hàm

- toString: trả về `[function Function]`

## array

```js
var a = [];
a = [5, "5", {}, function() {}];
const [b, , c, d = 5] = [1, 2, 3];
const [e, ...other] = [1, 2, 3];
const f = [...other];
```

Các hàm

- toString
- concat
- join
- pop
- push
- reverse
- shift
- slice
- sort
- splice
- unshift
- indexOf
- lastIndexOf
- every
- some
- forEach
- map
- filter
- reduce
- reduceRight

## date

```js
getDate()
getDate(milliseconds)
getDate(datestring)
getDate(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]])
```

Các hàm

- toString
- toDateString
- toTimeString
- toLocaleString
- toLocaleDateString
- toLocaleTimeString
- valueOf
- getTime
- getFullYear
- getUTCFullYear
- getMonth
- getUTCMonth
- getDate
- getUTCDate
- getDay
- getUTCDay
- getHours
- getUTCHours
- getMinutes
- getUTCMinutes
- getSeconds
- getUTCSeconds
- getMilliseconds
- getUTCMilliseconds
- getTimezoneOffset
- setTime
- setMilliseconds
- setUTCMilliseconds
- setSeconds
- setUTCSeconds
- setMinutes
- setUTCMinutes
- setHours
- setUTCHours
- setDate
- setUTCDate
- setMonth
- setUTCMonth
- setFullYear
- setUTCFullYear
- toUTCString
- toISOString
- toJSON

## regex

```js
getRegExp(pattern[, flags])
```

Các thuộc tính

- global
- ignoreCase
- lastIndex
- multiline
- source

Các hàm

- exec
- test
- toString
