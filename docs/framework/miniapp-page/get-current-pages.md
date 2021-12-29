---
title: Phương thức getCurrentPages
---

**getCurrentPages()** là global method được sử dụng để lấy stack của page hiện tại. Kết quả trả về là array các pages với phần tử đầu tiên là home, phần từ cuối cùng là page hiện tại.

Trong 1 miniapp, việc routing diễn ra như sau

| Route                      | Mô tả                                                                |
| -------------------------- | -------------------------------------------------------------------- |
| initialization             | App start và page đầu tiên được add vào stack                        |
| Open new page (navigateTo) | Page mới được add vào stack                                          |
| Page back                  | Page bị pop khỏi stack                                               |
| Page redirect              | Page bị pop khỏi stack và page mới được add vào stack                |
| Switch Tab                 | Tất cả các pages bị pop khỏi stack, và page của tab mới được add vào |

Việc sử dụng hàm `getCurrentPages()` sẽ giúp chúng ta lấy ra và kiểm soát được route stack hiện tại.

ví dụ đoạn code dưới đây sẽ kiểm tra việc routing dưa vào độ dài của stack.

```js
if (getCurrentPages().length === 5) {
  my.redirectTo({
    url: '/pages/logs/logs'
  });
} else {
  my.navigateTo({
    url: '/pages/index/index'
  });
}
```

Ngoài ra, mỗi phần tử của stack chính là 1 page instance nên có thể sử dụng để lấy access data của các pages trong cùng 1 stack.
