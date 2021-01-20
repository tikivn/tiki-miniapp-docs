---
order: 45
category:
  vi-VN: Component
  en-US: Component
title:
  vi-VN: Mixins
  en-US: Mixins
---

Khi implement nhiều Custom Component, và các Custom Component này có nhiều logic sử dụng chung, bạn có thể sử dụng mixins để sử dụng lại các code logic.

```js
// /mixins/lifecycle.js
export default {
  onInit() {
    console.log("init");
  },
  deriveDataFromProps(nextProps) {},
  didMount() {},
  didUpdate(prevProps, prevData) {},
  didUnmount() {},
};
```

```js
// /components/index/index.js
import lifecycle from "/mixins/lifecycle";

const initialState = {
  data: {
    isLogin: false,
  },
};

const defaultProps = {
  props: {
    age: 30,
  },
};

const methods = {
  methods: {
    onTapHandler() {},
  },
};

Component({
  mixins: [lifecycle, initialState, defaultProps, methods],
  data: {
    name: "alipay",
  },
});
```

```xml
<!-- /components/index/index.txml -->
<view>{{name}}: {{age}}</view>
```
