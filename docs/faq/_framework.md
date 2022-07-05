## Framework

### Vì sao các thư viện tôi dùng với biến window đều bị lỗi ?

Kiến trúc của TiniApp là dual thread, phần giao diện như txml và tcss sẽ được load trên Process của Render, còn phần logic như file js sẽ được load ở Worker.

Việc phân chia 2 process như vậy sẽ giúp phần code của developer sẽ clean hơn, và phần render sẽ ko bị block nếu có 1 heavy task chạy ở worker.

Ở trên worker ko có dom object hay window, vì vậy các thư viện sử dụng window sẽ không dùng được trên tiniapp.

> :pushpin: [Xem thêm](/blog/2021/12/30/optimize-js-order)

### Tôi có thể cài các npm package được không ?

Bạn có thể cài đặt npm package cho TiniApp, tuy nhiên các thư viện sử dụng window, dom, fetch... sẽ không work trên Tiniapp.

Bạn có thể tự build npm package cho Tiniapp.

> :pushpin: [Xem thêm](/blog/2022/06/16/build-lib-for-tini-app)

### Tôi muốn build một thư viện cho Tini App, thì cần làm gì ?

Bạn hoàn toàn có thể xây dựng một thư viện cho Tini App để sử dụng cho ứng dụng của bạn hoặc public cho cộng động đồng dùng thông qua npm.

> :pushpin: [Xem thêm](/blog/2022/06/16/build-lib-for-tini-app)
