---
order: 43
category:
  vi-VN: Component
  en-US: Component
title:
  vi-VN: Component Object
  en-US: Component Object
---

## Component Constructor

```js
// /components/index/index.js
Component({
  mixins: [{ didMount() {} }],
  data: { y: 2 },
  props: { x: 1 },
  didUpdate(prevProps, prevData) {},
  didUnmount() {},
  methods: {
    onMyClick(ev) {
      my.alert({});
      this.props.onXX({ ...ev, e2: 1 });
    },
  },
});
```
