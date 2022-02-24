---
title: A simple setup for Unit Testing in the Tiki Tini App

image: https://raw.githubusercontent.com/cute-me-on-repos/tiki-tiniapp-with-unit-tests/main/passed-tests.png
slug: 2022-01-21-a-simple-setup-for-unit-testing
date: 2022-01-21
description: Một ví dụ đơn giản về việc viết unit test cho Tiki Tini App
---


# A simple setup for Unit Testing in the Tiki Tini App

[![Show off status badge -.-](https://camo.githubusercontent.com/c7836469d64d0cfb5952438321c47847ef635d2880291d795c3d52747b762a81/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374617274253230776974682d7768792533462d627269676874677265656e2e7376673f7374796c653d666c6174)](developer.tiki.vn)

## Introduction

Mục đích của bài viết này là đưa ra một ví dụ đơn giản mà tôi đã sử dụng để viết unit test cho [Tiki Tini App](developer.tiki.vn). Hi vọng bài viết giúp các bạn phần nào trong việc tìm tài liệu tham khảo, chọn lựa một đáp án phù hợp với quá trình kiểm thử và phát triển ứng dụng của các bạn.

> _Bài viết mang tính chia sẻ, hi vọng các bạn có thể đóng góp ý kiến của mình phía dưới phần bình luận._

---
## Table of contents

- [Introduction](#introduction)
- [Table of contents](#table-of-contents)
- [About unit test in Tiki Tini App](#about-unit-test-in-tiki-tini-app)
- [Environment setup](#environment-setup)
	- [Source code structure](#source-code-structure)
	- [Setup test dependencies](#setup-test-dependencies)
- [Example tests](#example-tests)
	- [Mocking](#mocking)
	- [Test](#test) 
- [Source code](#source-code)
- [Conclusion](#conclusion)
---
## About unit test in Tiki Tini App

[Unit testing](https://en.wikipedia.org/wiki/Unit_testing#:~:text=In%20computer%20programming%2C%20unit%20testing,they%20are%20fit%20for%20use.) là phương pháp kiểm thử trên từng đơn vị của source code (class, function,..) và được coi là phương pháp cơ bản nhất mà một developer cần biết. Vì vậy sự có mặt của unit test trong dự án phần mềm của bạn thường là một điều hiển nhiên và khá quan trọng.

Đối với các Tini App, tại phía Tiki chưa cung cấp cụ thể một lựa chọn nào để tích hợp Unit testing vào quá trình phát triển Tini app. Bạn cần tự setup phương án sử dụng unit test phù hợp với ứng dụng của bạn.

---
## Environment setup

```ts
// jest.config.js file
module.exports = () => {
	return {
		verbose: true,
		transformIgnorePatterns: ["node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"],
		automock: false,
		setupFiles: ["./mocking/setupJestMock.js"],
		testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
		collectCoverageFrom: ["app/**/*.{js,ts}"],
	};
};
```

### Source code structure

Cấu trúc dự án được sắp đặt đơn giản như sau:

```bash 
├── __tests__
│ ├── component.the-button.test.ts
│ └── page.home.test.ts
├── app # Tini App source code
│ ├── package.json
│ # các dependencies phục vụ cho product development
│ ├── src
│ │ ├── app.js
│ │ ├── app.json
│ │ ├── app.tcss
│ │ ├── components
│ │ │ └── the-button
│ │ │ ├── index.js
│ │ │ ├── index.json
│ │ │ ├── index.tcss
│ │ │ └── index.txml
│ │ ├── home
│ │	│ └── index.js
│ │	│ ├── index.json
│ │	│ ├── index.tcss
│ │	│ └── index.txml
│ └── yarn.lock
├── babel.config.js
├── jest.config.js
├── mocking
│ └── setupJestMock.js
├── package.json
│ # các dependencies phục vụ cho local development
└── yarn.lock

```
	
### Setup test dependencies

Trong bài chia sẻ này tôi sẽ dùng jest và babel. Các bạn có thể tham khảo dev dependencies dưới đây mà tôi sử dụng:

```json
// dev dependencies in ./packages.json
{
	"@babel/core": "^7.15.8",
	"@babel/preset-env": "^7.15.8",
	"@babel/preset-typescript": "^7.15.0",
	"@types/jest": "^27.0.2",
	"babel-jest": "^27.2.5",
	"husky": "^7.0.2",
	"jest": "^27.2.5",
	"jest-canvas-mock": "^2.3.1",
	"typescript": "^4.4.4"
}

```

---
## Example tests
### Mocking
Ý tưởng ở đây là khi mocking, chúng ta sẽ intercept global function `Component` hay `Page` để lấy các config, init data, methods và lifecycle methods sau đó map lại binding và trigger các unit mà ta cần test. Thông qua việc này ta có thể lấy được out put cần test.

Các JSAPI global đơn giản là api của Tini App cung cấp nên chúng ta không cần test lại chúng, haỹ giả định out put của chúng luôn đúng và chỉ tập trung phần code của bạn. 

Với use case của tôi ở example này, tôi cần mock các api liên quan đến canvas nên tôi sẽ sử dụng canvas từ dom, hỗ trợ bởi package `jest-canvas-mock` để thực hiện nghiệm vụ này. Phần code dưới đây khá đơn giản nên tôi không muốn diễn giải lại. 
Và _good code documents itself_:

[![Good code documents itself](https://i.pinimg.com/736x/b7/53/cd/b753cdb7c2a89a462aff61f8b514abb5.jpg)](https://github.com/cute-me-on-repos/tiki-tiniapp-with-unit-tests)



Previews code:

```ts
import 'jest-canvas-mock';
import createComponent from "../app/src/components/the-button";

// typings
type AsyncReturnType<T extends (...args: any) => any> =
  T extends (...args: any) => Promise<infer U> ? U :
  T extends (...args: any) => infer U ? U :
  any
type PureConfig = AsyncReturnType<typeof createComponent>;
type ComponentMethodsType = Pick<PureConfig, 'methods'>
type ComponentType = Omit<PureConfig, 'methods'> & ComponentMethodsType["methods"]
let Instance: ComponentType = {} as unknown as ComponentType;


// mocking 
const componentTargetMocker = {
  async handler(ConfigObj) {
    Instance = this;
    // intercept setData to get the render's data
    Instance.data = ConfigObj.data;
    Instance.setData = async (data, cb) => new Promise((resolve) => {
      Object.assign(Instance.data, data)
      resolve(Instance.data);
      cb(Instance.data)
      if (ConfigObj.didUpdate) ConfigObj.didUpdate();
    });
    // mocking life cycle and do binding
    Instance.onInit = ConfigObj.onInit.bind(Instance);
    if (ConfigObj.didMount) Instance.didMount = ConfigObj.didMount.bind(Instance);
    if (ConfigObj.didUpdate) Instance.didUpdate = ConfigObj.didUpdate.bind(Instance);
    if (ConfigObj.methods) Object.entries(ConfigObj.methods).forEach(([key, method]) => {
      if (typeof method === 'function') {
        ConfigObj.methods[key] = ConfigObj.methods[key].bind(Instance);
        Instance[key] = method;
      }
    })
    // trigger life cycle
    await Instance.onInit();
    await Instance?.didMount?.();
  }
}
componentTargetMocker.handler = componentTargetMocker.handler.bind({});
const mockComponentCreator = jest.fn(componentTargetMocker.handler);


globalThis.my.createCanvasContext = (id) => {
  const canvas = document.createElement('CANVAS') as HTMLCanvasElement;
  canvas.id = id;
  const ctx = canvas.getContext('2d');
  const _getImgData = ctx.getImageData;
  ctx.getImageData = (opt: any) => {
    return opt.success(_getImgData(0, 0, opt.width, opt.height))
  }
  return ctx
}
globalThis.Component = mockComponentCreator;


```
### Tests
Dựa vào phần mocking ở phía trên, chúng ta đã có thể thêm và pass các bài test cơ bản hay gặp mà không gặp quá nhiều khó khăn:
ht

[![passed tests](https://raw.githubusercontent.com/cute-me-on-repos/tiki-tiniapp-with-unit-tests/main/passed-tests.png)](https://github.com/cute-me-on-repos/tiki-tiniapp-with-unit-tests)



```ts
// stupid tests

describe("Myapp: common stupid test cases:", () => {

  beforeAll(() => {
    createComponent();
  })

  test("Component() has been called", (done) => {
    expect(mockComponentCreator).toHaveBeenCalledTimes(1)
    done();
  });
  test("tab generate QR with expected size", (done) => {
    Instance.generateQR("https://developers.tiki.diferent-here");
    expect((Instance.data.size)).toEqual(148)
    done();
  });

  test("component data matches snapshot", (done) => {
    Instance.tapButton()
    expect((JSON.stringify(Instance.data, null, 2))).toMatchSnapshot()
    done();
  });
});

```
---

## Source code


Các bạn có thể xem source code từ bài viết này tại [github.com/cute-me-on-repo/tiki-tiniapp-with-unit-tests](https://github.com/cute-me-on-repo/tiki-tiniapp-with-unit-tests)

---
## Conclusion

Tuân thủ nguyên tắc của unit test là test theo đơn vị, các phần còn thiếu thì chúng ta có thể sử dụng mocks. Cá nhân tôi thấy nhiều bạn thường muốn test quá nhiều thứ trong unit test và đôi khi nhầm lẫn với [integration testing](https://en.wikipedia.org/wiki/Integration_testing). Việc có nên tách biệt hai khái niệm này hay không không quá quan trọng, và việc quyết định mức độ test coverage bao nhiêu là đến từ developer với những use cases được chính developer đó định đoạt chứ không phải hoàn toàn dựa vào những thứ như `jest --coverage`. Phía reactjs cũng có đọan ghi chú sau vào ngay trang chủ của họ về tài liệu kiểm thử:

> _With components, the distinction between a “unit” and “integration” test can be blurry_. If you’re testing a form, should its test also test the buttons inside of it? Or should a button component have its own test suite? Should refactoring a button ever break the form test?
> [( * ⓘ - reactjs/docs/testing)](https://reactjs.org/docs/testing.html#tradeoffs#:~:text=With%20components,%20the%20distinction%20between%20a%20%E2%80%9Cunit%E2%80%9D%20and%20%E2%80%9Cintegration%E2%80%9D%20test%20can%20be%20blurry)



Hi vọng bài viết giúp bạn có thêm tài liệu tham khảo khi áp dụng unit test cho dự án Tini App của bạn. 

---
 
 *[thien.ly](https://community.tiki.vn/u/thien.ly/summary) from the [cute me on repo](https://github.com/cute-me-on-repos) team*

