---
order: 23
category:
  vi-VN: Miniapp Page
  en-US: Miniapp Page
title:
  vi-VN: Life cycle
  en-US: Life cycle
---

Các hàm life cycle của Page được gọi bởi Framework tại những thời điểm nhất định.
Hình vẽ sau mô tả các thời điểm này

```__react
import image from '../../../theme/static/images/page-lifecycle.png'
ReactDOM.render(<img style={{width: '100%'}} alt="page-lifecycle" src={image}/>, mountNode);
```

| hàm                 | tham số               | mô tả                                                                           |
| ------------------- | --------------------- | ------------------------------------------------------------------------------- |
| onLoad              |  query                | được gọi khi Page được load                                                     |
| onShow              |                       | được gọi khi Page được show hoặc mở lại từ background                           |
| onHide              | (prevProps, prevData) | được gọi sau Page bị hide hoặc enter background                                 |
| onReady             |                       | được gọi sau khi page finish render lần đầu tiên                                |
| onUnload            |                       | được gọi khi page bị destroy                                                    |
| onPullDownRefresh   |                       | được gọi khi user pull to refresh hoặc gọi my.startPullDownRefresh                                              |

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


