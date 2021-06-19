---
title: sidebar
---

## Giới thiệu

`sidebar`

## Sử dụng

### Sample Code

**index.json**

```json
{
  "defaultTitle": "sidebar",
  "titleBarColor": "#1A94FF",
  "titleColor": "#fff",
  "transparentTitle": "none",
  "usingComponents": {
    "block-header": "components/block-header/index",
    "sidebar": "@tiki.vn/tini-ui/es/sidebar/index",
    "sidebar-content": "@tiki.vn/tini-ui/es/sidebar/sidebar-content/index"
  }
}
```

**index.txml**

```xml
<view>
  <block-header
    title="Usage"
    description="Sidebar lets users navigate the entire content of a product or a section. These can be used for a single level or a multi-level navigation." />

  <view class="block-content gray10">
    <text class="title mb-8">Variants</text>

    <text class="subtitle mb-8">1. Type</text>
    <text class="description">Text only, Icon only, Top icon, Leading icon</text>
    <view class="line" />

    <view class="sidebar-container container-1">
      <sidebar
        width="80px"
        items="{{items1}}"
        activeItem="{{active1}}"
        onItemClick="onItem1Click">
        <block tiki:for="{{items1}}">
          <sidebar-content anchor="{{item.anchor}}">
            <view class="sidebar-content" />
          </sidebar-content>
        </block>
      </sidebar>
    </view>

    <view class="sidebar-container container-2">
      <sidebar
        items="{{items2}}"
        activeItem="{{active2}}"
        onItemClick="onItem2Click">
        <block tiki:for="{{items2}}">
          <sidebar-content anchor="{{item.anchor}}">
            <view class="sidebar-content" />
          </sidebar-content>
        </block>
      </sidebar>
    </view>

    <view class="sidebar-container container-3">
      <sidebar
        width="56px"
        items="{{items3}}"
        activeItem="{{active3}}"
        onItemClick="onItem3Click">
        <block tiki:for="{{items3}}">
          <sidebar-content anchor="{{item.anchor}}">
            <view class="sidebar-content" />
          </sidebar-content>
        </block>
      </sidebar>
    </view>

    <view class="sidebar-container container-4">
      <sidebar
        direction="vertical"
        items="{{items2}}"
        width="80px"
        activeItem="{{active4}}"
        onItemClick="onItem4Click">
        <block tiki:for="{{items2}}">
          <sidebar-content anchor="{{item.anchor}}">
            <view class="sidebar-content" />
          </sidebar-content>
        </block>
      </sidebar>
    </view>

    <text class="subtitle mb-8">2. Content</text>
    <text class="description">Expand, Badge</text>
    <view class="line" />

    <view class="sidebar-container container-5">
      <sidebar
        items="{{items5}}"
        activeItem="{{active5}}"
        activeChild="{{activeChild5}}"
        onChildClick="onChild5Click"
        onItemClick="onItem5Click">
        <block tiki:for="{{items5}}">
          <sidebar-content tiki:if="{{!item.children || !item.children.length}}" anchor="{{item.anchor}}">
            <view class="sidebar-content" />
          </sidebar-content>
          <block tiki:else tiki:for="{{item.children}}" tiki:for-item="child">
            <sidebar-content anchor="{{child.anchor}}">
              <view class="sidebar-content" />
            </sidebar-content>
          </block>
        </block>
      </sidebar>
    </view>
  </view>
</view>
```

**index.tcss**

```css
.tab-item {
  height: 104px;
  background-color: #fff;
}

.description {
  font-size: 12px;
  line-height: 16px;
  color: #808089;
  margin-bottom: 8px;
  display: block;
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

.sidebar-container {
  border-radius: 8px;
  border: 1px solid var(--gray20);
  overflow: hidden;
  margin-bottom: 8px;
}

.sidebar-content {
  background: var(--white);
  width: 100%;
}

.tm-sidebar {
  width: 100%;
}

.container-1,
.container-1 .tm-sidebar,
.container-1 .sidebar-content {
  height: 110px;
}

.container-2,
.container-2 .tm-sidebar,
.container-2 .sidebar-content {
  height: 122px;
}

.container-3,
.container-3 .tm-sidebar,
.container-3 .sidebar-content {
  height: 122px;
}

.container-4,
.container-4 .tm-sidebar,
.container-4 .sidebar-content {
  height: 156px;
}

.container-5,
.container-5 .tm-sidebar,
.container-5 .sidebar-content {
  height: 218px;
}
```

**index.js**

```js
Page({
  data: {
    active1: 0,
    active2: 0,
    active3: 0,
    active4: 0,
    active5: 0,
    activeChild5: null,
    items1: [
      { title: "Page 1", anchor: "1-1" },
      { title: "Page 2", anchor: "1-2" },
      { title: "Page 3", anchor: "1-3" },
    ],
    items2: [
      { title: "Page 1", icon: "home", anchor: "2-1" },
      { title: "Page 2", icon: "home", anchor: "2-2" },
      { title: "Page 3", icon: "home", anchor: "2-3" },
    ],
    items3: [
      { title: "", icon: "home", anchor: "3-1" },
      { title: "", icon: "home", anchor: "3-2" },
      { title: "", icon: "home", anchor: "3-3" },
    ],
    items5: [
      { title: "Page 1", anchor: "5-1" },
      {
        title: "Page 2",
        anchor: "5-2",
        expandChildren: false,
        children: [
          { title: "Page 2.1", anchor: "2-1-1" },
          { title: "Page 2.2", anchor: "2-2-2" },
        ],
      },
      { title: "Page 3", anchor: "5-3", showBadge: true },
      { title: "Page 4", anchor: "5-4", showBadge: true, badgeText: "MỚI" },
    ],
  },
  onItem1Click(index) {
    this.setData({ active1: index });
  },
  onItem2Click(index) {
    this.setData({ active2: index });
  },
  onItem3Click(index) {
    this.setData({ active3: index });
  },
  onItem4Click(index) {
    this.setData({ active4: index });
  },
  onItem5Click(index) {
    const activeItem = this.data.items5[index];
    if (activeItem.children && activeItem.children.length > 0) {
      this.setData({
        items5: this.data.items5.map((item, itemIndex) =>
          itemIndex === index
            ? { ...item, expandChildren: !activeItem.expandChildren }
            : item
        ),
      });
    } else {
      this.setData({
        active5: index,
      });
    }
  },
  onChild5Click(parentIndex, index) {
    this.setData({
      activeChild5: index,
      active5: parentIndex,
    });
  },
});
```

### Chi tiết

| Property                 | Type    | Default Value | Required | Description                                                                                              |
| ------------------------ | ------- | ------------- | -------- | -------------------------------------------------------------------------------------------------------- |
| activeItem               | number  | 0             | true     | Chỉ định item được active theo index                                                                     |
| activeChild              | number  | 0             |          | Chỉ định item con được active theo index, chỉ được khai báo khi item có `children`                       |
| width                    | string  | 124px         |          | Width của sidebar                                                                                        |
| className                | string  |               |          | Custom class cho sidebar                                                                                 |
| items                    | array   |               | true     | Mảng các đối tượng, bạn có thể xem cấu hình của items ở bên dưới                                         |
| direction                | string  | horizontal    |          | Chỉ định direction cho các phần tử bên trong tab (title, image, icon). Hỗ trợ `horizontal` và `vertical` |
| animated                 | boolean | false         |          | Có animation khi đổi content                                                                             |
| swipeable                | boolean | true          |          | Cho phép sidebar có thể swipe dọc được                                                                   |
| sidebarActiveTextColor   | string  | #1A94FF       |          | Màu của text khi sidebar item được active                                                                |
| sidebarInactiveTextColor | string  | #808089       |          | Màu của text khi sidebar item không active                                                               |
| sidebarActiveBgColor     | string  | #1A94FF       |          | Màu nền của item khi sidebar item được active                                                            |
| sidebarInactiveBgColor   | string  | #f5f5f5       |          | Màu nền của item khi sidebar item không active                                                           |
| sidebarActiveIconColor   | string  | #1A94FF       |          | Màu của icon khi được active                                                                             |
| sidebarInactiveIconColor | string  | #c4c4cf       |          | Màu của icon khi không active                                                                            |
| sidebarlineColor         | string  | #1A94FF       |          | Màu của sidebar line khi item đó được active và `sidebarlineShow=true`                                   |
| sidebarlineShow          | boolean | #1A94FF       |          | Hiển thị line bên trái cho item được active                                                              |
| onItemClick              | event   |               |          | Sự kiện được gọi khi bấm vào item, với data có dạng: `(index: number) => void`                           |
| onChildClick             | event   |               |          | Sự kiện được gọi khi bấm vào child, với data có dạng: `(parentIndex: number, index: number) => void`     |

#### Cấu hình của tab

| Property       | Type    | Default Value | Required | Description                                                                                                                                                                                                                                                                                                        |
| -------------- | ------- | ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| title          | string  |               |          | Text của item                                                                                                                                                                                                                                                                                                      |
| badgeText      | string  |               |          | Nội dung của badge, chỉ có hiệu lực khi `showBadge=true`                                                                                                                                                                                                                                                           |
| showBadge      | boolean | false         |          | Hiển thị badge                                                                                                                                                                                                                                                                                                     |
| icon           | string  |               |          | Icon name, bạn có thể xem các `icon` được hỗ trợ [tại đây](https://miniapp.tiki.vn/docs/component/basic/icon)                                                                                                                                                                                                      |
| iconActive     | string  |               |          | Icon name khi tab được active, nếu không khai báo thì sẽ sử dụng biến `icon`                                                                                                                                                                                                                                       |
| image          | string  |               |          | Link hình của icon, hiện tại chỉ hỗ trợ hình với remote url hoặc hình đi từ root, ví dụ: _/images/image.png_                                                                                                                                                                                                       |
| imageActive    | string  |               |          | Link hình của icon khi tab được active, nếu không khai báo sẽ sử dụng biên `image`, hiện tại chỉ hỗ trợ hình với remote url hoặc hình đi từ root, ví dụ: _/images/image.png_                                                                                                                                       |
| badge          | object  |               |          | Cấu hình của badge, là một object có dạng `badge={ arrow: boolean, arrow: boolean }`. Trong đó: <br /> - arrow: hiển thị arrow left bên dưới tab<br/> - stroke: hiển thị stroke cho badge <br/>Nếu bạn chỉ muốn hiển thị badge dạng dot, bạn chỉ cần khai báo `showBadge=true` và không cần khai báo thêm biến này |
| children       | array   |               |          | Mảng các phần tử con bên trong item, là một object `{ title: string, anchor: string }`, với anchor cũng là duy nhất                                                                                                                                                                                                |
| expandChildren | boolean |               |          | Hiển thị danh sách các item con, được dùng khi length của `children` > 0                                                                                                                                                                                                                                           |
| anchor         | string  |               | true     | Được dùng như là id của item, các `anchor` không được trùng nhau                                                                                                                                                                                                                                                   |

#### Cấu hình sidebar-content

Mỗi content bên trong item cần được bao bởi `sidebar-content`

| Property | Type   | Default Value | Required | Description                                                      |
| -------- | ------ | ------------- | -------- | ---------------------------------------------------------------- |
| anchor   | string |               | true     | Được dùng như là id của item, các `anchor` không được trùng nhau |

### Lưu ý

- Các `icon` trong `tabs` bạn có thể tìm thấy ở [đây](https://miniapp.tiki.vn/docs/component/basic/icon)
- Số lượng các phần tử trong biến `sidebar` và số component trong thẻ `sidebar>` nên bằng nhau
- Nếu số lượng items nhiều dẫn đến xuất hiện thanh scroll trên sidebar, có thể sẽ xuất hiện hiện tượng khi bấm vào 2 item cách xa nhau, thanh scroll sẽ bị thay đổi vị trí 2 lần
