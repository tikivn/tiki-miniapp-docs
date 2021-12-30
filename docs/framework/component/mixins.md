---
title: Mixins
---

Khi implement nhiều Custom Component, và các Custom Component này có nhiều logic sử dụng chung, bạn có thể dùng mixins để sử dụng lại các code logic.

```js title=/mixins/lifecycle.js
export default {
  onInit() {
    console.log('init');
  },
  deriveDataFromProps(nextProps) {},
  didMount() {},
  didUpdate(prevProps, prevData) {},
  didUnmount() {}
};
```

```js title=/components/index/index.js
import lifecycle from '/mixins/lifecycle';

const initialState = {
  data: {
    isLogin: false
  }
};

const defaultProps = {
  props: {
    age: 30
  }
};

const methods = {
  methods: {
    onTapHandler() {}
  }
};

Component({
  mixins: [lifecycle, initialState, defaultProps, methods],
  data: {
    name: 'tiki'
  }
});
```

```xml title=/components/index/index.txml
<view>{{name}}: {{age}}</view>
```
