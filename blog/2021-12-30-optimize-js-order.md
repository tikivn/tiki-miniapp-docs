---
title: Tối ưu việc load Javascript trên Main Thread và Web Worker
---

## 1. Bài toán của Tini App

Khi page đầu tiên của Tini App được mở lên, Tini App Core sẽ khởi động một WebView.

WebView này sẽ đóng vai trò là Render của Tini App, và có nhiệm vụ load 2 file Javascripts lên

- file render framework chứa các code của framework để khởi tạo các kết nối
- file render app chứa code mà developers viết cho ứng dụng của họ.

Hai file này sẽ được load lần lượt theo thứ tự ở trên, file framework được load trước, sau đó tới file app.

Sau khi 2 file này được load xong, Render sẽ khởi tạo ra một Web Worker. Tương tự như Render, Worker cũng cần phải load 2 files

- file worker framework chứa các code của framework để khởi tạo kết nối từ Worker tới Render, và từ Worker tới Core
- file worker app chứa toàn bộ logic để điểu khiển app - file này được sinh ra từ code của developer

Với các yêu cầu như trên, chúng ta nên sắp xếp để load các file Javascript như nào để cho tốc độ load file là tốt nhất?

## 2. Chuẩn bị môi trường

Để giả lập được thời gian load các file JS, chúng ta sẽ tạo ra một file `server.js` có nội dung như sau

```js
const express = require('express');
const app = express();
const port = 3000;

app.use(function (req, res, next) {
  const timeout = req.query.timeout || 0;
  setTimeout(next, timeout);
});

app.get('/index.js', (req, res) => {
  const env = req.query.env || 'web';
  const timeout = req.query.timeout || 0;
  res.header('Content-type', 'text/javascript');
  res.header('cache-control', 'max-age=604800');
  res.send(
    `console.log("hello world ${timeout} from ${env} at", Date.now() - self.START_TIME);`
  );
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});
```

Trong đoạn code kể trên, chúng ta tạo ra một server chạy ở cổng 3000.

Server này cho phép chúng ta query vào file `index.js`. File `index.js` nhận vào 2 tham số

- `timeout` là thời gian giả lập để server có thể trả về nội dung của file, `timeout` được tính bằng giây. VD: `timeout=1`, tức là server sẽ mất 1s để trả về nội dung file
- `env` là môi trường mà script này sẽ được chạy, mặc định là `web`. Tuỳ vào giá trị của `env` mà file `index.js` sẽ được trả về với nội dung như sau

```js
console.log(
  'hello world ${timeout} from ${env}',
  Date.now() - self.START_TIME
);
```

Ví dụ: khi request vào `http:/localhost:3000/index.js?timeout=1&env=web`, server sẽ trả về nội dung

```js
console.log(
  'hello world 1 from web',
  Date.now() - self.START_TIME
);
```

Ở đây, chúng ta giả thiết rằng các script trước đó đã khởi tạo sẵn một biến global tên là `START_TIME`.
Vì vậy, khi script trên được chạy, script có thể cho chúng ta biết, thời gian mà script được browser evaluate

## 3. Load Javascript trên Main Thread

Để giả lập việc load file trên Main Thread, chúng ta sẽ tạo ra file index.html như sau

```html
<head>
  <script>
    var START_TIME = Date.now();
  </script>
</head>
<body>
  <div>hello</div>
  <script src="http://localhost:3000/index.js?timeout=2"></script>
  <script src="http://localhost:3000/index.js?timeout=1"></script>
</body
```

Trong thẻ `head`, chúng ta chạy một đoạn script để khởi tạo biến `START_TIME`.
Sau đó, chúng ta đặt các thẻ `script` ở cuối thẻ `body`, mục đích là để browser khi load các thẻ script này sẽ không block nội dung của `body` trả về.

Ở đây, chúng ta load 2 scripts, script đầu tiên tốn 2s để load, còn script tiếp theo chỉ tốn duy nhất 1s.

Câu hỏi là, thời gian để browser download 2 scripts trên sẽ là bao nhiêu? Là 2s hay là 3s?

Chúc mừng bạn, nếu câu trả lời của bạn là 2s. Bạn đã rất hiểu cách mà browser load các script đó.
Trong giai đoạn parse HTML, browser sẽ phát hiện ra trang web này cần phải load 2 scripts. Và browser sẽ thực hiện download 2 scripts này song song với nhau. Sau khi download xong, browser mới thực hiện evaluate các scripts theo thứ tự mà chúng được sắp xếp. Trong trường hợp này, mặc dù script với `timeout=1` dù được download xong trước script với `timeout=2`, tuy nhiên, do script với `timeout=2` được sắp xếp trước, nên code của script với `timeout=2` vẫn được chạy trước.

Browser sẽ in ra console nội dung như sau

```
hello world 2 from web at 2005
hello world 1 from web at 2006
```

Chú ý: để kiểm tra đúng behaviour của browser, chúng ta cần đảm bảo là load file index.html trên môi trường incognito chưa có cache các requests, vì sau khi các requests đã được cache lại rồi, thời gian download các requests sẽ không còn đúng nữa.

## 4. Load Javascript trên Worker

Trên Main Thread, browser sẽ load các scripts song song với, vậy khi load các scripts tron Web Worker thì sao?

Để load scripts trên Web Worker, chúng ta có 2 tình huống:

- khởi tạo script cho một Web Worker. Đây là script dùng để khởi tạo Web Worker, chúng ta sẽ load các script này thông qua việc sử dụng hàm `new Worker(url, options)`
- sau khi Web Worker được tạo ra, Web Worker có thể có nhu cầu muốn load thêm các scripts khác

2 tình huống này sẽ có những cách hành xử khác nhau.

### 4.1. Load scripts để khởi tạo Web Worker

Để khởi tạo một Web Worker, chúng ta sẽ sử dụng hàm

```js
new Worker(url, options);
```

Để kiểm tra xem browser sẽ thực hiện việc load script url của Web Worker như nào, chúng ta chuẩn bị đoạn code như sau

```html
<head>
  <script>
    var START_TIME = Date.now();
  </script>
</head>
<body>
  <div>hello</div>
  <script src="http://localhost:3000/index.js?timeout=2000"></script>
  <script src="http://localhost:3000/index.js?timeout=1000"></script>
  <script>
    console.log(
      'main thread start worker at',
      Date.now() - START_TIME
    );
    const worker = new Worker(`/worker.js?timeout=1000`);
    worker.postMessage({
      type: 'init',
      startTime: START_TIME
    });
  </script>
</body>
```

Ở đây, chúng ta giả lập load một file worker.js ở cuối cùng, sau khi đã load được các file js ở trên Main Thread. File worker này tốn 1s để download.
Sau khi Web Worker được khởi tạo, Main Thread sẽ gửi một message tới Worker để gửi thời gian mà Main Thread start.
Trên Worker, chúng ta sẽ kiểm tra thời gian mà Web Worker bắt đầu được chạy, từ thời gian này chúng ta có thể biết được browser thực hiện việc download Worker scripts ra sao

File `worker.js` có nội dung như sau

```js
self.onmessage = (e) => {
  if (e.data.type === 'init') {
    self.START_TIME = e.data.startTime;
    console.log(
      'worker receive init message at',
      Date.now() - self.START_TIME
    );
  }
};
```

Nếu nhìn vào console của browser chúng ta sẽ thấy nội dung như sau

```
hello world 2000 from web at 2005
hello world 1000 from web at 2005
main thread start worker at 2006
worker receive init message at 3006
```

Điều này có nghĩa là: tại thời điểm browser nhận được chỉ thị `new Worker('/worker.js?timeout=1000')`, browser mới bắt đầu thực hiện việc download script `worker.js?timeout=1000`.

Do vậy browser sẽ phải mất 3s để download tất cả 3 scripts (bao gồm 2 scripts `index.js?timeout=1`, `index.js?timeout=2` và `worker.js?timeout=1`).

Vậy có cách nào để chúng ta báo cho browser download file `worker.js` trước khi chúng ta khởi tạo Web Worker không?

Ở đây chúng ta có thể nghĩ tới 2 giải pháp, sử dụng thẻ [`<link rel='preload'>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload#what_types_of_content_can_be_preloaded) để báo cho browser rằng chúng ta cần load (download + parse) file `worker.js` trước, hoặc sử dụng thẻ `<link rel='prefetch'>` để báo browser rằng chúng ta cần download file `worker.js` trước.

Do `preload` không có hỗ trợ load file type cho file khởi tạo worker, nên chúng ta sử dụng thẻ `prefetch`.

Chúng ta sửa lại đoạn code html như sau

```html
<head>
  <link
    rel="prefetch"
    href="http://localhost:3000/worker.js?timeout=1000"
  />
  <script>
    var START_TIME = Date.now();
  </script>
</head>
<body>
  <div>hello</div>
  <script src="http://localhost:3000/index.js?timeout=2000"></script>
  <script src="http://localhost:3000/index.js?timeout=1000"></script>
  <script>
    console.log(
      'main thread start worker at',
      Date.now() - START_TIME
    );
    const worker = new Worker(`worker.js?timeout=1000`);
    worker.postMessage({
      type: 'init',
      startTime: START_TIME
    });
  </script>
</body>
```

Sau khi chạy xong, chúng ta có thể thấy console có nội dung như sau

```
hello world 2000 from web at 2005
hello world 1000 from web at 2005
main thread start worker at 2006
worker receive init message at 2007
```

Tuy nhiên, đáng buồn là khi sử dụng `prefetch` và `preload` để load worker, thì cách làm này chỉ work với Chrome, còn không works với iOS. Trên iOS tôi cũng chưa biết có cách làm nào tốt hơn để load các file worker không. Nếu các bạn biết vui lòng chia sẻ cho tôi với nhé.

Một điểm rất hay của Chrome khi sử dụng `prefetch` đó là Chrome đủ thông minh để tận dụng lại các request. Ví dụ, nếu thời gian để download `worker.js` thay vì chỉ tốn 1s, mà thành tốn 4s, thì tại thời điểm browser nhận được chỉ thị `new Worker('http://localhost:3000/worker.js?timeout=4')`, request `prefetch` vẫn chưa thực hiên xong. Dù vậy, Chrome sẽ không tạo mới request nữa, mà chờ cho request `prefetch` thực hiện xong rồi sử dụng kết quả của request này để chạy tiếp.

Do vậy, bằng cách sử dụng `prefetch`, chúng ta có thể đảm bảo các JS file được download song song với nhau trên Main Thread (tuy nhiên Browser vẫn giới hạn số lượng các requests có thể download song song cùng nhau, mặc định Chrome chỉ hỗ trợ 6 concurrent requests per domain).

**Do vậy, nhìn chung để Web Worker có thể bắt đầu nhanh nhất có thể trên cả Android và iOS, cách làm tốt nhất vẫn nên khởi tạo Web Worker càng sớm càng tốt**

### 4.2. Load scripts trong Web Worker

Trong Web Worker, để có thể import được một script, chúng ta sử dụng hàm `importScripts`.

Ví dụ, với file `worker.js` ở trên, chúng ta muốn load 2 files `index.js?timeout=300` và `index.js?timeout=400`, chúng ta sẽ làm như sau

```js
// worker.js
self.onmessage = (e) => {
  if (e.data.type === 'init') {
    self.START_TIME = e.data.startTime;
    console.log(
      'worker receive init message at',
      Date.now() - self.START_TIME
    );
    importScripts(
      'http://localhost:3000/index.js?timeout=400&env=worker'
    );
    importScripts(
      'http://localhost:3000/index.js?timeout=300&env=worker'
    );
  }
};
```

Ở đây chúng ta thực hiện việc load scripts sau khi nhận được message từ Main Thead.

Chú ý rằng hàm `importScripts` là hàm đồng bộ, tức là khi hàm này chạy, browser phải chờ cho scripts được download xong thì mới tiếp tục chạy các lệnh tiếp theo. Vì vậy với đoạn code ở trên, chúng ta sẽ phải mất 700ms để download hết các scripts.

Đoạn code sẽ in ra màn hình nội dung như sau

```
hello world 2000 from web at 2011
hello world 1000 from web at 2011
main thread start worker at 2011
worker receive init message at 2020
hello world 400 from worker at 2423
hello world 300 from worker at 2726
```

Để giảm thời gian download, chúng ta có thể tiếp tục sử dụng `prefetch`

```html
<head>
  <link
    rel="prefetch"
    href="http://localhost:3000/worker.js?timeout=1000"
  />
  <link
    rel="prefetch"
    href="http://localhost:3000/index.js?timeout=300&env=worker"
  />
  <link
    rel="prefetch"
    href="http://localhost:3000/index.js?timeout=400&env=worker"
  />
  <script>
    var START_TIME = Date.now();
  </script>
</head>
<body>
  <div>hello</div>
  <script src="http://localhost:3000/index.js?timeout=2000"></script>
  <script src="http://localhost:3000/index.js?timeout=1000"></script>
  <script>
    console.log(
      'main thread start worker at',
      Date.now() - START_TIME
    );
    const worker = new Worker(
      'http://localhost:3000/worker.js?timeout=1000'
    );
    worker.postMessage({
      type: 'init',
      startTime: START_TIME
    });
  </script>
</body>
```

Sau khi sử dụng `prefetch`, console sẽ có nội dung như sau

```
hello world 2000 from web at 2006
hello world 1000 from web at 2007
main thread start worker at 2007
worker receive init message at 2019
hello world 400 from worker at 2021
hello world 300 from worker at 2023
```

Tuy nhiên, cũng giống như ở phần 4.1, `prefetch` không có tác dụng với iOS. Vì thế cách tốt hơn để import script trong Worker đó là chúng ta tự viết một hàm import riêng

```js
function getScriptContent(url) {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function (e) {
      resolve(e.currentTarget.responseText);
    };
    xhr.send();
  });
}

function fasterImportScripts(urls) {
  return Promise.all(urls.map(getScriptContent)).then(
    (contents) => {
      contents.forEach((content) => {
        eval(content);
      });
    }
  );
}
```

Ở đây, chúng ta thực hiện download các script song song với nhau bằng cách khởi tạo các XHR request riêng biệt. Sau khi download các script xong, chúng ta mới evaluation các scripts này.
Bằng cách này, chúng ta có thể đảm bảo rằng trong một Web Worker, các scripts có thể có thời gian download nhanh nhất có thể.

## Kết luận

Thông qua bài viết này, chúng ta đã xem xét một số phương án để làm sao có thể load các file Javascript trong Main Thread và trong Web Worker nhanh nhất có thể.

Chúng ta cũng đã bàn tới một số phương án để có thể by-pass một số hạn chế của Safari trên iOS.

Nhìn chung, khi website có sử dụng Web Worker chúng ta có thể để ý tới các tips:

- Sử dụng `preload` để load các scripts trên Main Thread
- Sử dụng `prefetch` để load các scripts trên Web Worker
- Khởi tạo Web Worker càng sớm càng tốt, nếu được nên khởi tạo Web Worker ngay lập tức nếu như thời gian downlod Worker scripts là lâu
- Khi load các scripts trong Web Worker, có thể sử dụng XHR để đảm bảo các scripts là được download song song
