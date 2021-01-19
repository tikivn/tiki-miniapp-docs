---
order: 37
category:
  vi-VN: SJS
  en-US: SJS
title:
  vi-VN: esnext
  en-US: esnext
---

SJS hỗ trợ một vài cú pháp của ES6

## let & const

```js
function test() {
  let a = 5;
  if (true) {
    let b = 6;
  }
  console.log(a);
  console.log(b);
}
```

## Arrow function

```js
const a = [1, 2, 3];
const double = (x) => x * 2;
console.log(a.map(double));

var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach((f) => console.log(this._name + " knows " + f));
  },
};
console.log(bob.printFriends());
```

## Object literal

```js
var handler = 1;
var obj = {
  handler,
  toString() {
    return "string";
  },
};
```

Chú ý: Từ khoá `super` không được hỗ trợ, do vậy `super` không thể sử dụng trong một hàm của object

## Template string

```js
const h = "hello";
const msg = `${h} tiki`;
```

## Destructuring

```js
var [a, , b] = [1, 2, 3];
a === 1;
b === 3;

var {
  op: a,
  lhs: { op: b },
  rhs: c,
} = getASTNode();

var { op, lhs, rhs } = getASTNode();
function g({ name: x }) {
  console.log(x);
}
g({ name: 5 });

var [a = 1] = [];
a === 1;

function r({ x, y, w = 10, h = 10 }) {
  return x + y + w + h;
}
r({ x: 1, y: 2 }) === 23;
```
