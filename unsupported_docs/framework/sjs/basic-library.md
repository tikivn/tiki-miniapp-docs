---
order: 36
category:
  vi-VN: SJS
  en-US: SJS
title:
  vi-VN: Basic Library
  en-US: Basic Library
---

## Global

SJS không hỗ trợ tất cả các thuộc tính và các hàm global của Javascripts.

Thuộc tính

- Infinity
- NaN
- undefined

Vui lòng tham khảo chuẩn ES5 để biết cách sử dụng

Các hàm

- decodes - decodeURIComponent
- encodeURI
- encodeURIComponent
- isNaN
- isFinite
- parseFloat
- parseInt

Vui lòng tham khảo chuẩn ES5 để biết cách sử dụng

## console

Hàm `console.log` sẽ in các ohông tin ra console

## Date

Các hàm

- now
- parse
- UTC

Vui lòng tham khảo chuẩn ES5 để biết cách sử dụng

## Number

Thuộc tính

- MAX_VALUE
- MIN_VALUE
- NEGATIVE_INFINITY
- POSITIVE_INFINITY

Vui lòng tham khảo chuẩn ES5 để biết cách sử dụng

## JSON

Các hàm

- stringify(object): Convert the object into a JSON string and return the string.
- parse(string): Convert the JSON string into an object and return the object.

Vui lòng tham khảo chuẩn ES5 để biết cách sử dụng

```js
console.log(undefined === JSON.stringify());
console.log(undefined === JSON.stringify(undefined));
console.log("null" === JSON.stringify(null));
console.log("222" === JSON.stringify(222));
console.log('"222"' === JSON.stringify("222"));
console.log("true" === JSON.stringify(true));
console.log(undefined === JSON.stringify(function() {}));
console.log(undefined === JSON.parse(JSON.stringify()));
console.log(undefined === JSON.parse(JSON.stringify(undefined)));
console.log(null === JSON.parse(JSON.stringify(null)));
console.log(222 === JSON.parse(JSON.stringify(222)));
console.log("222" === JSON.parse(JSON.stringify("222")));
console.log(true === JSON.parse(JSON.stringify(true)));
console.log(undefined === JSON.parse(JSON.stringify(function() {})));
```

## Math

Thuộc tính

- E
- LN10
- LN2
- LOG2E
- LOG10E
- PI
- SQRT1_2
- SQRT2

Vui lòng tham khảo chuẩn ES5 để biết cách sử dụng

Các hàm

- abs
- acos
- asin
- beating
- atan2
- ceil
- cos
- exp
- floor
- log
- max
- min
- pow
- random
- round
- without
- sqrt
- tan

Vui lòng tham khảo chuẩn ES5 để biết cách sử dụng
