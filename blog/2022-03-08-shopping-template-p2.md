---
title: Xây dựng Shopping Template cùng Tini App (Phần 2)
---

# Xây dựng Shopping Template cùng Tini App (Phần 2)

![](https://i.imgur.com/jlbTD97.png)

## :checkered_flag: Recap

Ở [phần 1](https://developers.tiki.vn/blog/2022/03/07/shopping-template-p1), chúng ta đã tìm hiểu được:

- Shopping Template là gì
- Chức năng và cấu trúc dự án
- Cách khởi tạo project Tini App
- Xây dựng Home page:
  - Phân tích và break layout
  - Xây dựng các component
  - Data và gọi API

Ở phần 2 này, mình sẽ cùng các bạn tiếp tục xây dựng shopping template.

# Mục lục

### I. Xây dựng Search Page

1. Phân tích layout
2. Tái sử dụng components
3. Component search-bar
4. Component recent-search
5. Component filter
6. Component sort
7. Component filter-list
8. Empty

### II. Tạm kết

---

### I. Xây dựng Search Page

<img src="https://i.imgur.com/gQIjmam.gif" alt="Search Page" width="300"/>

#### 1. Phân tích layout

Break nhỏ layout này ta sẽ được các components:

![](https://i.imgur.com/QBm7KTL.jpg)

##

#### 2. Tái sử dụng components

<img src="https://i.imgur.com/AZhDryN.jpg" alt="category-section và product-section" width="500"/>

Hai components `product-section` và `category-section` được đã được sử dụng ở Home page. Tương tự ở home, `product-section` ở search page hoàn toàn không thay đổi, còn ở `category-section` thì chúng ta có thể overwrite css một chút để biến nó thành dạng row và có thể swipe (vuốt).

###### pages/search/index.txml

```xml
<category-section
  className="search-category-list"
  categories="{{categories}}"
  onTapCategory="goToCategoryDetail"
/>
```

###### pages/search/index.tcss

```css
.search-category-list .category-grid-layout {
  display: flex;
  overflow-x: auto;
  padding-left: 20px;
}
```

##

#### 3. Component search-bar

![](https://i.imgur.com/hBkdTcy.png)

Ở đây mình sẽ sử dụng component `search-bar` của `tini-ui`. Tuy nhiên để thuận tiện cho việc customize, mình đã wrap lại thành một component `search-bar` riêng của mình:

- Nhận vào `value` và hiển thị.
- Khi user nhập thì gọi `onInput()` ở page nhận biết để set lại giá trị mới cho `value`.
- Khi bấm vào nút Close (X) ở cuối thì set `value` về rỗng.
- Khi user nhấn "Enter" hoặc bấm vào icon kính lúp thì gọi `onConfirm` (Để lưu history)
- Khi user nhập và sau đó ngưng trong `400ms` thì gọi `onSearch` ở page để tiến hành gọi API tìm kiếm, nếu chưa ngưng đủ `400ms` mà user tiếp tục nhập thì reset lại từ đầu (Đây là kĩ thuật `debounce search` bạn có thể tìm hiểu thêm bằng cách search từ khoá này).

###### components/search-bar/index.json

```json
{
  "component": true,
  "usingComponents": {
    "search-bar": "@tiki.vn/tini-ui/es/search-bar/index"
  }
}
```

###### components/search-bar/index.js

```js
Component({
  props: {
    className: '',
    placeholder: 'Search products',
    value: '',
    onInput: () => {},
    onSearch: () => {},
    onConfirm: () => {}
  },

  methods: {
    isTyping: null,
    _onChangeSearchInput(event) {
      const { value } = event.detail;
      this.props.onInput(value);
    },
    _clearSearchInput() {
      this.props.onInput('');
    },
    _onSearch() {
      this.props.onSearch(this.props.value);
    },
    _onConfirm(event) {
      this.props.onConfirm(event.detail.value);
    }
  },

  // Life cycle
  didUpdate() {
    if (this.isTyping) {
      clearTimeout(this.isTyping);
    }
    this.isTyping = setTimeout(() => {
      this._onSearch();
    }, 400);
  }
});
```

###### components/search-bar/index.txml

```xml
<search-bar
  value="{{value}}"
  placeholder="{{placeholder}}"
  maxLength="{{100}}"
  onTapCloseIcon="_clearSearchInput"
  onInput="_onChangeSearchInput"
  onTapSearchIcon="_onConfirm"
/>
```

> :pushpin: [Xem souce code tại đây](https://github.com/tikivn/miniapp-getting-started/tree/main/shop/src/components/search-bar)

##

#### 4. Component recent-search

![](https://i.imgur.com/ciRhstv.png)

- Đây là component khá đơn giản, chúng ta sẽ nhận vào 1 array `recentKeys` là danh sách các từ khoá được tìm kiếm gần đây.
- Khi tap vào view item thì sẽ gọi `onClickItem`.
- Khi tap vào nút close thì sẽ gọi `onRemoveItem`.
- Vì nút close nằm trong item view - nơi đã sẵn lắng nghe 1 sự kiện `onTap` nên khi tiếp tục gắn `onTap` vào nút close thì khi tap cả 2 sự kiện sẽ được trigger (1 của nút close và 1 của item view). Để giải quyết vấn đề này ta sẽ sử dụng `catchTap` ở nút close thay vì `onTap`.

> :pushpin: Xem thêm [Event type](https://developers.tiki.vn/docs/framework/event/event-introduction#event-type)

###### components/recent-search/index.txml

```js
<view
  class="{{className}} flex justify-between items-center py-x-small {{index !== recentKeys.length - 1 ? 'border-bottom-gray' : ''}}"
  tiki:for="{{recentKeys}}"
  data-item="{{item}}"
  onTap="_onClickItem">
  <view>{{ item }}</view>
  <view
    class="flex items-center"
    data-item="{{item}}"
    catchTap="_onRemoveItem">
    <icon type="close" color="#808089" />
  </view>
</view>
```

![](https://i.imgur.com/I4FCiLN.png)

###### pages/search/index.js

```js
onConfirm(searchTerm) {
  this.onSearch(searchTerm);
  this.addNewRecentKey(searchTerm);
},
```

- Ý tưởng của `addNewRecentKey` là khi nhận được keyword, chúng ta sẽ lưu keyword đó vào `Storage`. `Storage` lưu trữ các các keyword dưới dạng mảng, tương tự local storage của browser, dữ liệu sẽ được lưu ở bộ nhớ của thiết bị và tồn tại qua những lần mở/tắt app.
- Vì mình chỉ muốn lưu tối đa `maxSearch` keywords nên trước khi lưu, mình sẽ dùng `slice` để loại bỏ đi các keywords cũ.

> :pushpin: Xem thêm [Storage](https://developers.tiki.vn/docs/api/storage/introduce#gi%E1%BB%9Bi-thi%E1%BB%87u)

```js
async addNewRecentKey(searchTerm) {
  if (!searchTerm || searchTerm.length === 0) return;

  const keysSearch = await getStorage('recent-search');
  let recentKeys = keysSearch ? keysSearch.slice(0, this.maxSearch) : [];
  if (recentKeys.includes(searchTerm)) {
    recentKeys = recentKeys.filter((k) => k !== searchTerm);
  }
  const newKeys = [searchTerm, ...recentKeys.slice(0, this.maxSearch - 1)];
  setStorage('recent-search', newKeys);
  this.setData({
    recentKeys: newKeys,
  });
},
```

- Và khi remove, hãy nhớ remove ở `Storage` luôn nhé

```js
async removeSearchKey(key) {
  const recentKeys = await getStorage('recent-search');
  const removedKeys = recentKeys.filter((k) => k !== key);
  setStorage('recent-search', removedKeys);
  this.setData({
    recentKeys: removedKeys,
  });
},
```

> :pushpin: [Xem souce code tại đây](https://github.com/tikivn/miniapp-getting-started/tree/main/shop/src/components/recent-search)

##

#### 5. Component filter

![](https://i.imgur.com/GN85Lm7.png)

##### 5a. Component filtered-button

![](https://i.imgur.com/uk1Gr3T.png)

Ta sẽ sử dụng component `chip` của `tini-ui`.

> :pushpin: Xem thêm [chip](https://developers.tiki.vn/docs/component/advance/form/chip)

###### components/filtered-button/index.txml

```xml
<chip
  active="{{totalFilters}}"
  content="Filter {{totalFilters ? `(${totalFilters})` : ''}}"
  prefixImage="{{totalFilters ? '/assets/icons/filter-active.svg' : '/assets/icons/filter.svg'}}"
  onClick="_onClick"
  onLeftClick="_onClick"
/>
```

> :pushpin: [Xem souce code tại đây](https://github.com/tikivn/miniapp-getting-started/tree/main/shop/src/components/filtered-button)

##

##### 5b. Filter bottom-sheet

![](https://i.imgur.com/4cXTdrj.png)

Để đơn giản, mình chỉ xin demo option price như hình.
Với UI trên, ta sẽ sử dụng component `bottom-sheet` và `chip` của `tini-ui`.

> :pushpin: Xem thêm [bottom-sheet](https://developers.tiki.vn/docs/component/advance/feedback/bottom-sheet)

###### components/filter/index.txml

```xml
  <block tiki:if="{{isShow}}">
    <bottom-sheet
      title="Filter"
      onClose="_onClose"
    >
      <view class="filter-content-section p-medium">
        <text class="font-bold">Price</text>
        <view class="filter-chip-list flex flex-wrap">
          <view
            tiki:for="{{filters.prices}}"
            tiki:key="value"
          >
            <chip
              active="{{_selectedFilters.priceOption.value === item.value}}"
              className="filter-chip mr-2x-small mt-small"
              content="{{item.label}}"
              data-item="{{item}}"
              onClick="onSelectPrice"
            />
          </view>
        </view>
      </view>
      <view slot="footer" class="filter-footer flex w-full px-medium py-2x-small">
        <button
          class="w-full mr-4x-small"
          shape="pill"
          type="outline"
          onTap="onReset"
        >
          Reset
        </button>
        <button
          class="w-full ml-4x-small"
          shape="pill"
          onTap="_onSelect"
        >
          Apply
        </button>
      </view>
    </bottom-sheet>
  </block>
```

> :pushpin: [Xem souce code tại đây](https://github.com/tikivn/miniapp-getting-started/tree/main/shop/src/components/filter)

##

#### 6. Component sort

![](https://i.imgur.com/TSq6H9F.png)

##### 6a. Button sort

![](https://i.imgur.com/SdbclE2.png)

Tương tự `filtered-button`, ta sẽ sử dụng component `chip` của `tini-ui`.

> :pushpin: Xem thêm [chip](https://developers.tiki.vn/docs/component/advance/form/chip)

###### components/sort/index.txml

```xml
<chip
  active
  content="{{selectedSort.label ? selectedSort.label : 'Sort'}}"
  prefixImage="/assets/icons/sort-active.svg"
  onClick="_onShow"
  onLeftClick="_onShow"
/>
```

##

##### 6b. Sort bottom-sheet

![](https://i.imgur.com/lBS9UDd.png)

Tương tự filter bottom-sheet, ta sẽ sử dụng component `bottom-sheet` và `chip` của `tini-ui`.

> :pushpin: Xem thêm [bottom-sheet](https://developers.tiki.vn/docs/component/advance/feedback/bottom-sheet)

###### components/filter/index.txml

```xml
<block tiki:if="{{isShow}}">
  <bottom-sheet
    title="Sort"
    onClose="_onClose"
  >
    <view class="padding-inset-bottom px-medium">
      <view
        tiki:for="{{sorts}}"
        tiki:key="value"
        class="sort-item flex justify-between items-center py-x-small {{item.value === selectedSort.value ? 'sort-item-active' : ''}}"
        data-item="{{item}}"
        onTap="_onSelect"
      >
        <text>{{item.label}}</text>
        <icon tiki:if="{{item.value === selectedSort.value}}" type="success_glyph" color="#00AB56" />
      </view>
    </view>
    <view slot="footer"/>
  </bottom-sheet>
</block>
```

> :pushpin: [Xem souce code tại đây](https://github.com/tikivn/miniapp-getting-started/tree/main/shop/src/components/sort)

##

#### 7. Component filter-list

![](https://i.imgur.com/m3VPfg6.png)

- Chúng ta sẽ có 1 array là danh sách các filters đã chọn.
- Khi tap vào nút Close (X) thì sẽ gọi `onRemoveFilter`.
- Tương tự như `recent-key`, ta sẽ gắn sự kiện `catchTap` cho nút Close (X) thay vì `onTap`

> :pushpin: Xem thêm [chip](https://developers.tiki.vn/docs/component/advance/form/chip)
> :pushpin: Xem thêm [Event type](https://developers.tiki.vn/docs/framework/event/event-introduction#event-type)

###### components/filter-list/index.txml

```xml
<view
  tiki:if="{{formattedSelectedFilters.length}}"
  class="category-detail-selected flex bg-gray10 py-small px-medium hide-scroll-bar">
  <view
    tiki:for="{{formattedSelectedFilters}}"
    tiki:key="key"
    class="category-detail-selected-item {{index === formattedSelectedFilters.length - 1 ? 'pr-medium' : 'pr-2x-small'}}"
  >
    <chip
      className="bg-white"
      content="{{item.value}}"
      suffixImage="/assets/icons/close.svg"
      data-item="{{item}}"
      onRightClick="_onRemoveFilter"
    />
  </view>
</view>
```

> :pushpin: [Xem souce code tại đây](https://github.com/tikivn/miniapp-getting-started/tree/main/shop/src/components/filtered-list)

##

#### 8. Component empty

![](https://i.imgur.com/bW8ruJp.png)

Đây có lẽ là component dễ nhất, ta chỉ cần một vài class của `tini-style` để hoàn thành UI này.

###### components/empty/index.txml

```xml
<view class="flex flex-col items-center {{className}}">
  <image
    class="empty-image mb-large"
    src="/assets/images/empty.png"
    mode="widthFix"
  />
  <text class="text-medium font-bold mb-5x-small">{{title}}</text>
  <text>{{description}}</text>
</view>
```

> :pushpin: [Xem souce code tại đây](https://github.com/tikivn/miniapp-getting-started/tree/main/shop/src/components/empty)

---

### :end: II. Tạm kết

Một lần nữa, cảm ơn các bạn đã đọc cuối bài, bài cũng đã dài nên hẹn các bạn ở phần 3, chúng ta sẽ cùng xây dựng page `Cart`
Hi vọng vài viết sẽ giúp ích cho bạn trong quá trình tìm hiểu và xây dựng ứng dụng trên nền tảng Tini App :tada:
