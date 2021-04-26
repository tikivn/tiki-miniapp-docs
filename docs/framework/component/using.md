# Sử dụng Custom Component

Các Custom Component được sử dụng như những Component thông thường

1. Xác định Custom Component được sử dụng trong file `index.json`

```json
// /pages/index/index.json
{
  "usingComponents": {
    "my-component": "/components/index/index"
  }
}
```

Các Custom Component có thể được tham chiếu bằng các đường dẫn tuyệt đối của project, hoặc đường dẫn tương đối của file hiện tại

```json
{
  "usingComponents": {
    "your-custom-component": "mini-tiki-ui/es/list/index",
    "your-custom-component2": "/components/card/index",
    "your-custom-component3": "./result/index",
    "your-custom-component4": "../result/index"
  }
}
```

2. Sử dụng Custom Component trong TXML giống như sử dụng Basic Component

```xml
<!-- /pages/index/index.txml -->
<view>
  <my-component name="tom" age="{{23}}"/>
</view
```

**Chú ý**

- Các Custom Component chỉ được sử dụng trong file TXML của các Page và các Custom Component, bạn không thể `import` hoặc `include` các file này.

Ví dụ sau đây là cách dùng sai

```xml
<!-- /pages/index/index.txml -->
<include src="./template.txml" />

<!-- /pages/index/template.txml -->
<view>
  HI, template
</view>
```

Cách dùng đúng là

```xml
<!-- /pages/index/index.txml -->
<my-component /
```
