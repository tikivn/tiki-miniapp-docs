---
title: Search Bar
---

## Giới thiệu

- `search-bar` là component trong [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui) với chức năng tương tự như thẻ [textfield](/docs/component/form/textfield) nhưng hỗ trợ thêm label, icon và một số tính năng mở rộng về giao diện.
- Để sử dụng `search-bar`, bạn cần phải cài [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui) từ version `0.1.2` trở lên.

## Sử dụng

<img src="/img/search-bar.svg" alt="search-bar" style={{ margin: '0 auto', display: 'flex' }}/>

### Cài đặt `tini-ui`:

```bash
$> yarn add @tiki.vn/tini-ui
```

### Sample Code

**index.json**

```json
{
  "defaultTitle": "Search Bar",
  "usingComponents": {
    "search-bar": "@tiki.vn/tini-ui/es/search-bar/index"
  }
}
```

**index.txml**

```xml
<view class="block-content">
  <text class="p-5">Variants</text>
  <text class="p-5">1. Format</text>
  <text class="p-5">Label and Input only.</text>
  <search-bar
    value="{{value}}"
    focus
    className="p-5"
    placeholder="Search..."
    shape="rounded"
    onInput="handleInput"
    labelText="Labeled Input"

    onTapCloseIcon="onTapCloseIcon"
    onTapSearchIcon="onTapSearchIcon"
  />
  <search-bar
    value="{{value}}"
    className="p-5"
    placeholder="Search..."
    onInput="handleInput"

    onTapCloseIcon="onTapCloseIcon"
    onTapSearchIcon="onTapSearchIcon"
  />
  <text class="p-5">2. Shape</text>
  <text class="p-5">Rounded, Pill.</text>
  <search-bar
    value="{{value}}"
    className="p-5"
    placeholder="Search..."
    shape="rounded"
    onInput="handleInput"
    labelText="Rounded Input"
    onTapCloseIcon="onTapCloseIcon"
    onTapSearchIcon="onTapSearchIcon"
  />
  <search-bar
    value="{{value}}"
    className="p-5"
    placeholder="Search..."
    shape="pill"
    onInput="handleInput"

    labelText="Pill Input"
    onTapCloseIcon="onTapCloseIcon"
    onTapSearchIcon="onTapSearchIcon"
    />
  <text class="p-5">3. State</text>
  <text class="p-5">Empty, Hover, Active, Filled, Disabled, Error, Skeleton loading.</text>
  <search-bar
    value="{{value}}"
    className="p-5"
    placeholder="Search..."
    onInput="handleInput"
    labelText="Empty, Hover, Active, Filled Input"
    onTapCloseIcon="onTapCloseIcon"
    onTapSearchIcon="onTapSearchIcon"
    />

    <search-bar
    value="Error value"
    className="p-5"
    hasError
    errorMsg="This is an error message"
    placeholder="Search..."
    labelText="Error Input"
    controlled
    />

  <search-bar
    value="{{value}}"
    className="p-5"
    placeholder="Search..."
    disabled
    onInput="handleInput"
    labelText="Disabled Input"
    onTapCloseIcon="onTapCloseIcon"
    onTapSearchIcon="onTapSearchIcon"

  />
  <search-bar
  className="p-5"
  value="{{value}}"
  placeholder="Search..."
  loading
  onInput="handleInput"
  labelText="Loading Input"
  onTapCloseIcon="onTapCloseIcon"
  onTapSearchIcon="onTapSearchIcon"
  />
</view>
```

**index.js**

```js
Page({
  data: {
    value: ''
  },
  handleInput(e) {
    this.setData({
      value: e.detail.value
    });
  },
  onTapCloseIcon() {
    this.setData({
      value: ''
    });
  },
  onTapSearchIcon() {
    my.alert({
      title: 'Search bar',
      content: 'Confirm search triggered'
    });
  }
});
```

**index.tcss**

```css
.p-5 {
  padding: 5px;
}
text.p-5 {
  display: block;
}
.block-content {
  padding: 20px;
}
```

### Chi tiết

| Property         | Type                | Default Value | Description                                                                                                                     |
| ---------------- | ------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| className        | string              |               | Custom class cho search-bar                                                                                                     |
| style            | string              |               | Custom inline style cho search-bar                                                                                              |
| shape            | 'pill' \| 'rounded' | rounded       | Kiểu border radius của search-bar. Hỗ trợ `rounded` hoặc `pill`. Mặc định là `rounded`                                          |
| value            | string              |               | Chứa chuỗi trên search-bar                                                                                                      |
| maxlength        | number              | 140           | Giới hạn số ký tự được nhập                                                                                                     |
| errorMsg         | string              |               | Hiển thị thông báo lỗi bên dưới search-bar input, cần khai báo thêm `hasError=true`                                             |
| placeholder      | string              |               | Nội dung hiển thị trước khi người dùng nhập giá trị của search-bar input                                                        |
| placeholderClass | string              |               | Class name cho placeholder                                                                                                      |
| placeholderStyle | css style           |               | Inline style cho placeholder                                                                                                    |
| labelText        | string              |               | Nội dung của label                                                                                                              |
| labelCls         | string              |               | Custom class cho label                                                                                                          |
| disabled         | boolean             | false         | Disable search-bar input                                                                                                        |
| controlled       | boolean             | false         | Khi giá trị là `true`, nội dung value của search-bar input sẽ được điều khiển hoàn toàn thông qua hàm `setData` trong file `js` |
| focus            | boolean             | false         | Tự động focus vào search-bar input                                                                                              |
| loading          | boolean             | false         | Hiển thị loading skeleton cho search-bar                                                                                        |
| hasError         | boolean             | false         | Khi giá trị là true, search-bar input sẽ có viền màu đỏ (mã #ff424f), và xuất hiện icon thông báo lỗi                           |
| onFocus          | EventHandle         |               | Sự kiện sẽ được gọi khi search-bar input được focus , `event.detail = { value: value }`                                         |
| onBlur           | EventHandle         |               | Sự kiện sẽ được gọi khi search-bar input không được focus nữa , `event.detail = { value: value }`                               |
| onConfirm        | EventHandle         |               | Sự kiện sẽ được gọi khi nhấn nút submit (return/Nhập/Enter) , `event.detail = { value: value }`                                 |
| onInput          | EventHandle         |               | Sự kiện sẽ được gọi khi nội dung của search-bar input bị thay đổi, `event.detail = { value: value }`                            |
| onTapCloseIcon   | EventHandle         |               | Sự kiện sẽ được gọi khi click icon close trên search-bar input , `event.detail = { value: value }`                              |
| onTapSearchIcon  | EventHandle         |               | Sự kiện sẽ được gọi khi click icon search trên search-bar input , `event.detail = { value: value }`                             |
