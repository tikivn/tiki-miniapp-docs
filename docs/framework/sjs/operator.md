---
order: 33
category:
  vi-VN: SJS
  en-US: SJS
title:
  vi-VN: Toán tử
  en-US: Operator
---

## Toán tử số học

```js
let a = 10,
  b = 20;
console.log(30 === a + b); //true
console.log(-10 === a - b); //true
console.log(200 === a * b); //true
console.log(0.5 === a / b); //true
console.log(10 === a % b); //true
```

Toán tử `+` có thể sử dụng để nối chuỗi

```js
let a = "hello",
  b = " tiki";
console.log("hello tiki" === a + b); //true
```

## Toán tử so sánh

```js
var a = 10,
  b = 20;
console.log(true === a < b); //true
console.log(false === a > b); //true
console.log(true === a <= b); //true
console.log(false === a >= b); //true
console.log(false === (a == b)); //true
console.log(true === (a != b)); //true
console.log(false === (a === b)); //true
console.log(true === (a !== b)); //true
```

## Toán tử nhị phân

```js
var a = 10,
  b = 20;
console.log(20 === (a && b)); //true
console.log(10 === (a || b)); //true
console.log(false === !a); //true
```

## Toán tử với bit

```js
var a = 10,
  b = 20;

console.log(80 === a << 3); //true
console.log(2 === a >> 2); //true
console.log(2 === a >>> 2); //true
console.log(2 === (a & 3)); //true
console.log(9 === (a ^ 3)); //true
console.log(11 === (a | 3)); //true
```

## Toán tử assign

```js
var a = 10;
a = 10;
a *= 10;
console.log(100 === a); //true
a = 10;
a /= 5;
console.log(2 === a); //true
a = 10;
a %= 7;
console.log(3 === a); //true
a = 10;
a += 5;
console.log(15 === a); //true
a = 10;
a -= 11;
console.log(-1 === a); //true
a = 10;
a <<= 10;
console.log(10240 === a); //true
a = 10;
a >>= 2;
console.log(2 === a); //true
a = 10;
a >>>= 2;
console.log(2 === a); //true
a = 10;
a &= 3;
console.log(2 === a); //true
a = 10;
a ^= 3;
console.log(9 === a); //true
a = 10;
a |= 3;
console.log(11 === a); //true
```

## Toán tử một ngôi

```js
var a = 10,
  b = 20;
console.log(10 === a++); //true
console.log(12 === ++a); //true
console.log(12 === a--); //true
console.log(10 === --a); //true
console.log(10 === +a); //true
console.log(0 - 10 === -a); //true
console.log(-11 === ~a); //true
console.log(false === !a); //true
console.log(true === delete a.fake); //true
console.log(undefined === void a); //true
console.log("number" === typeof a); //true
```

## Toán tử 3 ngôi

```js
var a = 10,
  b = 20;
console.log(20 === (a >= 10 ? a + 10 : b + 10)); //true
```

## Dấu phảy

```js
var a = 10,
  b = 20;
console.log(20 === (a, b)); //true
```

## Thứ tự các toán tử

Thứ tự các toán tử trong SJS là giống như thứ tự các toán tử trong JS
