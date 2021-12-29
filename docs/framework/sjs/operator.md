---
title: Toán tử

description: các toán tử trong ngôn ngữ SJS
---

## Số học

```js
var a = 10, b = 20;
console.log(30 === a + b);   //true
console.log(-10 === a - b);  //true
console.log(200 === a * b);  //true
console.log(0.5 === a / b);  //true
console.log(10 === a % b);   //true
```

Có thể dùng toán tử `+` để nối chuỗi

```js
var a = 'hello', b = ' world';
console.log('hello world' === a + b);    //true
```

## So sánh

```js
var a = 10, b = 20;
console.log(true === (a < b));    //true 
console.log(false === (a > b));   //true
console.log(true === (a <= b));   //true
console.log(false === (a >= b));   //true
console.log(false === (a == b));   //true
console.log(true === (a != b));     //true
console.log(false === (a === b));   //true
console.log(true === (a !== b));   //true
```

## Toán tử logic

```js
var a = 10, b = 20;
console.log(20 === (a && b));  //true
console.log(10 === (a || b));  //true
console.log(false === !a);    //true
```

## Toán tử Bit

```js
var a = 10, b = 20;
console.log(80 === (a << 3));   //true
console.log(2 === (a >> 2));   //true
console.log(2 === (a >>> 2));   //true
console.log(2 === (a & 3));   //true
console.log(9 === (a ^ 3));   //true
console.log(11 === (a | 3));   //true
```

## Gán giá trị

```js
var a = 10;
a = 10; a *= 10;
console.log(100 === a);   //true
a = 10; a /= 5;
console.log(2 === a);   //true
a = 10; a %= 7;
console.log(3 === a);   //true
a = 10; a += 5;
console.log(15 === a);   //true
a = 10; a -= 11;
console.log(-1 === a);   //true
a = 10; a <<= 10;
console.log(10240 === a);   //true
a = 10; a >>= 2;
console.log(2 === a);   //true
a = 10; a >>>= 2;
console.log(2 === a);   //true
a = 10; a &= 3;
console.log(2 === a);   //true
a = 10; a ^= 3;
console.log(9 === a);   //true
a = 10; a |= 3;
console.log(11 === a);   //true
```

## Phép toán 1 ngôi

```js
var a = 10, b = 20;
console.log(10 === a++);   //true
console.log(12 === ++a);   //true
console.log(12 === a--);   //true
console.log(10 === --a);   //true
console.log(10 === +a);   //true
console.log(0-10 === -a);   //true
console.log(-11 === ~a);   //true
console.log(false === !a);   //true
console.log(true === delete a.fake);   //true
console.log(undefined === void a);   //true
console.log("number" === typeof a);   //true
```

## Phép toán ba ngôi

```js
var a = 10, b = 20;
console.log(20 === (a >= 10 ? a + 10 : b + 10));   //true
```

## Toán tử dấu phẩy

```js
var a = 10, b = 20;
console.log(20 === (a, b));   //true
```