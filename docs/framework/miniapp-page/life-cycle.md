---
title: Life cycle
---

Các hàm life cycle của Page được gọi bởi Framework tại những thời điểm nhất định.
Hình vẽ sau mô tả các thời điểm này

<img style={{width: '100%'}} alt="page-lifecycle" src='/img/page-lifecycle.png'/>;

| Hàm               | Tham số               | Mô tả                                                                             |
| ----------------- | --------------------- | --------------------------------------------------------------------------------- |
| onLoad            | query                 | Được gọi khi Page được load                                                       |
| onShow            |                       | Được gọi khi Page được show hoặc mở lại từ background                             |
| onHide            | (prevProps, prevData) | Được gọi sau Page bị hide hoặc enter background                                   |
| onReady           |                       | Được gọi sau khi page finish render lần đầu tiên                                  |
| onUnload          |                       | Được gọi khi page bị destroy                                                      |
| onPullDownRefresh |                       | Được gọi khi user pull to refresh hoặc gọi my.startPullDownRefresh                |
| onShareAppMessage |                       | Được gọi khi user thực hiện tác vụ "Chia sẻ" trong options menu.                  |
| onCustomIconEvent | ({index})             | Được gọi khi user click vào custom icons khi sử dụng jsapi addIconToNavigationBar |

## onLoad

`onLoad` được gọi sau khi Page được khởi tạo.
Khi sử dụng `my.navigateTo`, `my.redirectTo`, params sẽ truyền vào trong `query`. Format của query: "parameterName=parameterValue&parameterName=parameterValue...".

## onShow

`onShow` được gọi sau khi Page được show hoặc mở lại từ background.

## onHide

`onShide` được gọi khi page bị hide do open page khác, hoặc app bị xuống background

## onReady

`onReady` được gọi khi page đã thực hiện xong việc render lần đầu tiên, nghĩa là từ lúc này, page đã ready để tương tác với view layer. Có thể sử dụng 1 số api thay đổi interface ví dụ `my.setNavigationBar` để update title bar

## onUnload

`onUnload` được gọi khi page bị destroy. Ví dụ sử dụng `my.redirectTo`,`my.navigateBack` sẽ unload page.

## onPullDownRefresh

`onPullDownRefresh` được gọi khi user pull to refresh hoặc gọi my.startPullDownRefresh. Sử dụng callback này để refresh lại data.

## onCustomIconEvent

`onCustomIconEvent` được gọi khi user click vào custom icon khi sử dụng jsapi addIconToNavigationBar.

```js
Page({
  onCustomIconEvent() {
    doSomething();
  }
});
```

## onSearchEvent

`onSearchEvent` được gọi khi user click vào khung search trong navigation bar khi sử dụng jsapi setNavigationBar.

```js
Page({
  onSearchEvent() {
    doSomething();
  }
});
```

## onShareAppMessage

Để cấu hình nội dung chia sẽ bạn cần implement `onShareAppMessage` trong Page với nội dung như sau:

```js
Page({
  onShareAppMessage(options) {
    return {
      title: 'Awesome App',
      desc: 'Awesome App',
      path: 'pages/index/index'
    };
  }
});
```

Khi user thực hiện tác vụ "Chia sẻ" trong option menus, hệ thống sẽ thực thi phương thức trên và lấy nội dung để điền vào thông tin chia sẻ. Trong trường hợp Page hiện tại không implement phương thức trên.
Hệ thống sẽ thực thi hàm `onShareAppMessage` của app.

```js
App({
  onShareAppMessage(options) {
    return {
      title: 'Awesome App',
      desc: 'Awesome App',
      path: 'pages/index/index'
    };
  }
});
```
