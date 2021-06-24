---
title: Tabs
---

## Giới thiệu

`tabs` được sử dụng khi bạn cần hiển thị nội dung với 2 thành phần là thanh tab bar ở trên đầu và tab content bên dưới

## Sử dụng

### Sample Code

**index.json**

```json
{
  "defaultTitle": "tabs",
  "titleBarColor": "#1A94FF",
  "titleColor": "#fff",
  "transparentTitle": "none",
  "usingComponents": {
    "block-header": "components/block-header/index",
    "tabs": "@tiki.vn/tini-ui/es/tabs/index",
    "tab-content": "@tiki.vn/tini-ui/es/tabs/tab-content/index"
  }
}
```

**index.txml**

```xml
<view>
  <block-header
    title="Usage"
    description="Tab bar is used as a graphical interface element that allows multiple panels to be contained within a single window, using tabs as a navigational element." />

  <view class="block-content gray10">
    <text class="title mb-8">Variants</text>

    <text class="subtitle mb-8">Text only</text>
    <tabs tabs="{{tabs1}}"
      tabsName="activeTab1"
      activeTab="{{activeTab1}}"
      onTabClick="onTabClick"
      swipeable="{{false}}">
      <block tiki:for="{{tabs1}}">
        <tab-content tabId="{{index}}">
          <view class="tab-item" />
        </tab-content>
      </block>
    </tabs>

    <text class="subtitle mb-8 mt-16">Text with icon</text>
    <tabs tabs="{{tabs2}}"
        tabsName="activeTab2"
        onTabClick="onTabClick"
        onChange="onChange"
        activeTab="{{activeTab2}}">
      <block tiki:for="{{tabs2}}">
        <tab-content tabId="{{index}}">
          <view class="tab-item" />
        </tab-content>
      </block>
    </tabs>
  </view>
</view>
```

**index.tcss**

```css
.tab-item {
  height: 104px;
  background-color: #fff;
}

.mb-8 {
  margin-bottom: 8px;
}

.mt-16 {
  margin-top: 16px;
}

.gray10 {
  background-color: var(--gray10);
}
```

**index.js**

```js
Page({
  data: {
    activeTab1: 0,
    activeTab2: 0,
    tabs1: [
      { title: 'Tab' },
      { title: 'Tab' },
      { title: 'Tab' },
      { title: 'Tab' }
    ],
    tabs2: [
      { title: 'Tab', icon: 'home' },
      { title: 'Tab', icon: 'home' },
      { title: 'Tab', icon: 'home' },
      { title: 'Tab', icon: 'home' }
    ]
  },
  onTabClick({ index, tabsName }) {
    this.setData({
      [tabsName]: index
    });
  },
  onChange({ index, tabsName }) {
    this.setData({
      [tabsName]: index
    });
  }
});
```

### Chi tiết

| Property                 | Type    | Default Value | Required | Description                                                               |
| ------------------------ | ------- | ------------- | -------- | ------------------------------------------------------------------------- |
| className                | string  |               |          | Custom class cho tabs                                                     |
| activeCls                | string  |               |          | Class cho tab đang được active                                            |
| tabBarCls                | string  |               |          | Custom class cho thanh tab bar                                            |
| tabBarUnderlineColor     | string  | #1A94FF       |          | Màu underline của tab khi được active                                     |
| tabBarActiveTextColor    | string  | #1A94FF       |          | Màu của text khi tab được active                                          |
| tabBarInactiveTextColor  | string  | #808089       |          | Màu của text khi tab không active                                         |
| tabBarSubTextColor       | string  |               |          | Màu của sub text khi không active                                         |
| tabBarActiveSubTextColor | string  | #1A94FF       |          | Màu của sub text khi active                                               |
| tabBarBackgroundColor    | string  | #FFFFFF       |          | Màu nền của tab bar                                                       |
| tabBarActiveIconColor    | string  | #1A94FF       |          | Màu của icon khi được active                                              |
| tabBarInactiveIconColor  | string  | #808089       |          | Màu của icon khi không active                                             |
| iconSize                 | number  | 24            |          | Kích thước của icon, dùng khi tab có icon                                 |
| swipeable                | boolean | true          |          | Cho phép tabs có thể swipe được                                           |
| tabs                     | array   |               | true     | Mảng các đối tượng `tab`, bạn có thể xem cấu hình của tab ở bên dưới      |
| activeTab                | number  | 0             | true     | Chỉ định tab được active theo index                                       |
| animation                | boolean | true          |          | Có animation khi đổi tab                                                  |
| duration                 | number  | 500           |          | Khoảng thời gian để đổi tab content, chỉ có hiệu lực khi `swipeable=true` |
| hasSubTitle              | boolean | false         |          | Hiển thị sub title                                                        |
| tabsName                 | string  |               | true     | Được dùng như là id của tabs                                              |
| tabBarUnderlineWidth     | string  | 100%          |          | Width của underline                                                       |
| tabBarUnderlineHeight    | string  | 1px           |          | Width của underline                                                       |
| tabContentHeight         | string  |               |          | Chiều cao của tab content, có hiệu lực khi `swipeable=true`               |
| stickyBar                | boolean | false         |          | Chỉ định position của tab bar là sticky                                   |
| onTabClick               | event   |               |          | Sự kiện được gọi khi bấm vào tab, `event.detail = { index, tabsName }`    |
| onChange                 | event   |               |          | Sự kiện được gọi khi đổi tab, `event.detail = { index, tabsName }`        |

#### Cấu hình của tab

| Property    | Type    | Default Value | Required | Description                                                                                                                                                                                                                                                                                                        |
| ----------- | ------- | ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| title       | string  |               |          | Text của tab                                                                                                                                                                                                                                                                                                       |
| badgeText   | string  |               |          | Nội dung của badge, chỉ có hiệu lực khi `showBadge=true`                                                                                                                                                                                                                                                           |
| showBadge   | boolean | false         |          | Hiển thị badge                                                                                                                                                                                                                                                                                                     |
| subTitle    | string  |               |          | Sub text của tab                                                                                                                                                                                                                                                                                                   |
| icon        | string  |               |          | Icon name, bạn có thể xem các `icon` được hỗ trợ [tại đây](https://miniapp.tiki.vn/docs/component/basic/icon)                                                                                                                                                                                                      |
| iconActive  | string  |               |          | Icon name khi tab được active, nếu không khai báo thì sẽ sử dụng biến `icon`                                                                                                                                                                                                                                       |
| image       | string  |               |          | Link hình của icon, hiện tại chỉ hỗ trợ hình với remote url hoặc hình đi từ root, ví dụ: _/images/image.png_                                                                                                                                                                                                       |
| imageActive | string  |               |          | Link hình của icon khi tab được active, nếu không khai báo sẽ sử dụng biên `image`, hiện tại chỉ hỗ trợ hình với remote url hoặc hình đi từ root, ví dụ: _/images/image.png_                                                                                                                                       |
| badge       | object  |               |          | Cấu hình của badge, là một object có dạng `badge={ arrow: boolean, arrow: boolean }`. Trong đó: <br /> - arrow: hiển thị arrow left bên dưới tab<br/> - stroke: hiển thị stroke cho badge <br/>Nếu bạn chỉ muốn hiển thị badge dạng dot, bạn chỉ cần khai báo `showBadge=true` và không cần khai báo thêm biến này |

#### Cấu hình tab-content

Mỗi content bên trong tab cần được bao bởi `tab-content`

- Nếu bạn có khai báo `tabId` và `activeTab` cho `tab-content`, thì `tab-content` sẽ điều chỉnh height=auto khi `tabId` bằng với `activeTab`, ngược lại, height của content sẽ bằng 0
- Nếu bạn muốn tự mình control height của content, bạn có thể khai báo thêm thuộc tính `style` cho tab-content

| Property  | Type   | Default Value | Required | Description                                                                                                                                                                                                           |
| --------- | ------ | ------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tabId     | number |               |          | `tabId` với giá trị chính là index của tab đó, bạn không cần khai báo `tabId` nếu bạn đã khai báo thêm `style` cho tab-content, khi đó bạn cần tự control height của tab-content đó                                   |
| activeTab | number |               |          | `activeTab` của `tab-content` với giá trị bằng với `activeTab` trong `tabs`, bạn không cần khai báo `activeTab` nếu bạn đã khai báo thêm `style` cho tab-content, khi đó bạn cần tự control height của tab-content đó |
| style     | number |               |          | Inline style cho tab-content                                                                                                                                                                                          |

### Lưu ý

- Các `icon` trong `tabs` bạn có thể tìm thấy ở [đây](https://miniapp.tiki.vn/docs/component/basic/icon)
- Số lượng các phần tử trong biến `tabs` và số component trong thẻ `<tabs>` nên bằng nhau
- Nếu số lượng tabs nhiều dẫn đến xuất hiện thanh scroll trên tab bar, có thể sẽ xuất hiện hiện tượng khi bấm vào 2 tab cách xa nhau, thanh scroll sẽ bị thay đổi vị trí 2 lần
- Nếu trong tab item có image/ icon và badge, thì vị trí của badge sẽ thành position absolute và hiển thị ở trên đầu của image/ icon
- `tabsName` dùng để chỉ định tên của biến được dùng trong `activeTab` được khai báo trong file js, ví dụ bạn khai báo `activeTab="{{activeTab1}}"` trong txml, thì `tabsName="activeTab1"`
