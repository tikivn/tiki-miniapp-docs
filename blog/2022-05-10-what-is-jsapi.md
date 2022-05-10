---
title: Tìm hiểu về JS API trong MiniApp
---

# Quá trình xây dựng IDE cho Tini App (Phần 2)

![JS API](https://salt.tikicdn.com/ts/upload/ae/e8/b1/57dfb9ee4391bac8079f01dab282a531.png)

<br/>

**Nội dung bao gồm:**

1. Giới thiệu.
2. JS API là gì?
3. Các nhóm JS API.
4. Cơ chế hoạt động của JS API.
5. Developer có thể tự viết JS API cho Tini App không?

## Giới thiệu

Chắc hẳn các bạn developer đã rất quen thuộc với Tini App. Tini App được phát triển bởi Tiki, Tini App cung cấp rất nhiều công cụ để build 1 ứng dụng native app như components, JS API, Server Side API, Tini UI,… Ít hay nhiều các bạn developer đã từng tương tác với JS API, nhưng liệu rằng tất cả chúng ta đã hiểu rõ nó như thế nào và nó hoạt động ra sao? Bài viết này sẽ giúp các bạn developer có thể nắm rõ hơn JS API trong Tini App.

## JS API là gì?

Để đơn giản hoá trong việc phát triển app trên Tiki, Tini App Framework cung cấp đa dạng các JS API cần thiết để truy cập tới thiết bị, giao diện cũng như open services của Tiki. Các developer có thể dễ dàng và nhanh chóng gọi các JS API này để hoàn thành các tác vụ liên quan. JS API chính là API.

Ví dụ dưới đây là một JS API dùng để get location của thiết bị, chúng ta chỉ cần gọi `my.getLocation` và truyền vào giá trị `cacheTimeout = 1` .

```js
my.getLocation({
  cacheTimeout: 1,
  success: (res) => {
    console.log('location: ', res);
  },
  fail: (e) => {
    console.log(e);
  },
  complete: (e) => {
    console.log(e);
  }
});
```

- Hàm callback **success** sẽ được thực thi khi được gọi JS API thành công và trả về location hiện tại.
- Hàm callback **fail** sẽ được thực thi khi gọi không thành công.
- Hàm callback **complete** được thực thi dù kết quả thành công hay không.

## Các nhóm JS API

JS API giải quyết rất nhiều vấn đề và được chia thành các nhóm chính theo chức năng như sau:

![JS API](https://salt.tikicdn.com/ts/upload/28/ba/cf/f7b52f219163059b7f3f3a5979556465.png)

- Nhóm chuyên xử lý về giao diện như hiển thị thông báo, hiển thị prompt nhập thông tin. Các hiển thị về app như get title, set background. Các công cụ hỗ trợ nhập liệu như Option Menu, Date Picker…
- Nhóm truy cập thiết bị người dùng như contact, open app setting, compass, gia tốc cảm biến…
- Nhóm open services Tiki như lấy user token, user info, address…
- Nhóm media cho phép phát video, nhạc, làm game.
- Nhóm network giúp kết nối thông qua socket
- Nhóm còn lại như Storage, File, Ads…

## Cơ chế hoạt động của JS API

Để giải thích về cơ chế hoạt động, xin phép được lấy JS API my.getLocation ở trên làm ví dụ cho các bạn dễ hình dung.

![JS API](https://salt.tikicdn.com/ts/upload/3f/d6/b9/92a114bd52f571c093ba08853bb63468.png)

Trong sơ đồ trên, trước hết kể đến là **Worker**:

- Tất cả các JS API được đăng ký ở đây và được alias qua `my` nên sau khi chúng ta gọi my.getLocation thì sẽ trigger qua hàm getLocation ở worker này.

Kế tiếp là **Core**:

- Core sẽ trigger handler và khi nhận được event từ worker bao gồm `name = getLocation` và `param` kèm theo, nó sẽ tiến hành kiểm tra xem plugin nào được đăng ký là LocationBridgePlugin. Sau đó sử dụng plugin này để kiểm tra xem nếu App có quyền getLocation thì sẽ call qua App host (Tiki App) và lấy kết quả trả về cho worker, ngược lại sẽ trả về lỗi cho worker. Vì với một số JS API yêu cầu phải được cấp phát quyền mới có thể sử dụng.

Cuối cùng là **App host**:

- Chính là Tiki App và Tiki Web, nó cung cấp implement cho các JS API. Theo ví dụ ở trên app host sẽ cung cấp 1 implement là LocationImplement, vì vậy việc lấy location trả về cho core phải được để ở app host.

Vậy tiến trình theo trình tự là **_Worker → Core → Tiki App_**, và cả 3 processor này giao tiếp với nhau thông qua bridge.

Với cơ chế hoạt động như thế thì worker sẽ không có cách nào gọi trực tiếp qua Tiki App để get location mà phải gọi qua core. **Nên JS API không thể nào truy cập trực tiếp tới những tính năng của Native App Tiki, do đó đảm bảo được tính security của Tini App.**

## Developer có thể tự viết JS API không?

- Hiện tại Tini App chưa cung cấp cơ chế cho các developer tự viết JS API, nhưng với mong muốn phát triển rộng rãi, trong tương lai gần, nhóm phát triển sẽ support các bạn developer viết JS API thông qua cơ chế plugin.

Cảm ơn các bạn đã theo dõi bài viết.

\*\*\*

TINI APP - Nền tảng xây dựng ứng dụng tối ưu

- Website: https://developers.tiki.vn/
- Tham gia cùng cộng đồng: https://community.tiki.vn/
- Kênh trao đổi, thảo luận: https://bit.ly/TiniSlack
- Trải nghiệm Tini App: https://tiki.vn/thong-tin/kho-tien-ich
