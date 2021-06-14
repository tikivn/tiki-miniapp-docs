# Kiểu dữ liệu
SJS hỗ trợ các kiểu dữ liệu sau:
* string
* boolean
* number
* object
* function
* array
* date
* regexp


## Xác định kiểu dữ liệu
SJS cung cấp hai cách để xác định kiểu dữ liệu: constructor và typeof.

### Contructor
```js
const number = 10;
console.log(number.constructor); // "Number"
const string = "str";
console.log(string.constructor); // "String"
const boolean = true;
console.log(boolean.constructor); // "Boolean"
const object = {};
console.log(object.constructor); // "Object"
const func = function(){};
console.log(func.constructor); // "Function"
const array = [];
console.log(array.constructor); // "Array"
const date = getDate();
console.log(date.constructor); // "Date"
const regexp = getRegExp();
console.log(regexp.constructor); // "RegExp"
```

### typeof
```js
const num = 100;
const bool = false;
const obj = {};
const func = function(){};
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
### Syntax
```js
const a = 'hello';
const str = `${a} world`;
```

### Thuộc tính
* constructor：giá trị là "String"。
* length
### Phương thức
* toString
* valueOf
* charAt
* charCodeAt
* concat
* indexOf
* lastIndexOf
* localeCompare
* match
* replace
* search
* slice
* split
* substring
* toLowerCase
* toLocaleLowerCase
* toUpperCase
* toLocaleUpperCase
* trim

Lưu ý: Vui lòng tham khảo tiêu chuẩn ES5 để biết cách sử dụng cụ thể.

## number
### Syntax
```
const num = 10;
const PI = 3.141592653589793;
```

### Thuộc tính
* constructor: Giá trị là `Number`

### Phương thức
* toString
* toLocaleString
* valueOf
* toFixed
* toExponential
* toPrecision

Lưu ý: Vui lòng tham khảo tiêu chuẩn ES5 để biết cách sử dụng cụ thể.

## boolean
### Systax
Chỉ có 2 giá trị true hoặc false
```
const a = true;
```

### Thuộc tính
* constructor: Giá trị là `Boolean`

### Phương thức
* toString
* valueOf

Lưu ý: Vui lòng tham khảo tiêu chuẩn ES5 để biết cách sử dụng cụ thể.

## object

### Syntax
```js
var o = {}; tạo ra 1 object rỗng
// Gán giá trị cho object
o = {
  'str': "str",
  constVar: 2, 
  val: {},
};
console.log(1 === o['string']);
console.log(2 === o.constVar);

o['string']++;
o['string'] += 10;
o.constVar++;
o.constVar += 10;

console.log(12 === o['string']);
console.log(13 === o.constVar);
```
ES6 syntax
```js
let a = 2;
o = { 
  a,
  b() {},
};
const { a, b, c: d, e = 'default'} = {a: 1, b: 2, c: 3}; 
const {a, ...other} = {a: 1, b: 2, c: 3}; 
const f = {...others}; 
```
### Thuộc tính
* constructor: Giá trị là `Object`

### Phương thức
* toString


## function

### Syntax
```js
// Cách 1: khai báo function
function a (x) {
  return x;
}
// Cách 2: dùng function expression gán vào 1 biến
var b = function (x) { 
  return x;
};
// Cách 3: arrow function
const double = x => x * 2;
function f(x = 2){} // tham số hàm mặc định
function g({name: n = 'xiaoming', ...other} = {}) {} // destructure params
function h([a, b] = []) {} // destructure params
// Anonymous function
var c = function (x) {
  return function () { return x;}
};
var d = c(25);
console.log(25 === d());
```

Từ khoá `arguments` có thể sử dụng trong function
```js
var a = function(){
    console.log(2 === arguments.length);
    console.log(1 === arguments[0]);
    console.log(2 === arguments[1]);
};
a(1,2);
```
Output
```
true
true
true
```
### Thuộc tính
* constructor: Giá trị là `Function`.
* length: Trả về số lượng tham số chính thức của hàm.

### Phương thức
* toString: giá trị là `[function Function]`

## array

### Syntax
```js
var a = [];      // tạo mảng rỗng
a = [5,"5",{},function(){}];  // Các phần tử mảng có nhiều kiểu dữ liệu khác nhau
const [b, , c, d = 5] = [1,2,3]; // Destructure mảng và set giá trị mặc định
const [e, ...other] = [1,2,3]; // Destructure  mảng 
const f = [...other]; // Destructure  mảng
```

### Thuộc tính
* constructor: Giá trị là `Array`
* length: Số phần tử trong mảng.

### Phương thức
* toString
* concat
* join
* pop
* push
* reverse
* shift
* slice
* sort
* splice
* unshift
* indexOf
* lastIndexOf
* every
* some
* forEach
* map
* filter
* reduce
* reduceRight

Lưu ý: Vui lòng tham khảo tiêu chuẩn ES5 để biết cách sử dụng cụ thể.

## date

### Syntax
Để tạo ra 1 date object, bạn phải sử dụng hàm getDate(). Tham số giống như hàm `new Date()`
```js
getDate()
getDate(milliseconds)
getDate(datestring)
getDate(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]])
```

### Thuộc tính
* constructor: giá trị là `Date`

### Phương thức
* toString
* toDateString
* toTimeString
* toLocaleString
* toLocaleDateString
* toLocaleTimeString
* valueOf
* getTime
* getFullYear
* getUTCFullYear
* getMonth
* getUTCMonth
* getDate
* getUTCDate
* getDay
* getUTCDay
* getHours
* getUTCHours
* getMinutes
* getUTCMinutes
* getSeconds
* getUTCSeconds
* getMilliseconds
* getUTCMilliseconds
* getTimezoneOffset
* setTime
* setMilliseconds
* setUTCMilliseconds
* setSeconds
* setUTCSeconds
* setMinutes
* setUTCMinutes
* setHours
* setUTCHours
* setDate
* setUTCDate
* setMonth
* setUTCMonth
* setFullYear
* setUTCFullYear
* toUTCString
* toISOString
* toJSON
  
Lưu ý: Vui lòng tham khảo tiêu chuẩn ES5 để biết cách sử dụng cụ thể.

### Ví dụ
```js
let date = getDate(); 
date = getDate(1500000000000);
date = getDate('2016-6-29');)
date = getDate(2017, 6, 14, 10, 40, 0, 0);
```

## regex

### Syntax
Để tạo ra 1 regex object, bạn phải sử dụng hàm getRegExp(). Tham số giống như hàm `new Date()`
```js
getRegExp(pattern[, flags])
```

### Thuộc tính
* constructor: giá trị là `Date`
* global
* ignoreCase
* lastIndex
* multiline
* source

### Phương thức
* exec
* test
* toString
  
Lưu ý: Vui lòng tham khảo tiêu chuẩn ES5 để biết cách sử dụng cụ thể.

### Ví dụ
```js
var reg = getRegExp("name", "img");
console.log("name" === reg.source);
console.log(true === reg.global);
console.log(true === reg.ignoreCase);
console.log(true === reg.multiline);
```