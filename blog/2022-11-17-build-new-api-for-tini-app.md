---
title: Mở rộng JS API trên Tini App
---

---

### Mở đầu

Tini App Platform đã cung cấp cho chúng ta khoảng 200 JS APIs, tuy nhiên trong quá trình phát triển, trong một số trường hợp chúng ta vẫn muốn tạo ra thêm các JS API mới,
hoặc chúng ta muốn sử dụng lại một phần JS API từ các ứng dụng đã có.

Ví dụ, bạn viết ra một Tini App A, ứng dụng này đã có chức năng cho phép người dụng upload ảnh, rồi xử lý tấm ảnh này bằng các filter.
Sau đó bạn viết thêm một Tini App B, Tini App B muốn sử dụng lại các tấm ảnh đã qua filter.
Thay vì phải code lại toàn bộ chức năng này trên Tini App B, Tini App Framework cho phép chúng ta sửa ứng dụng A để cung cấp API cho ứng dụng B sử dụng.

Hãy cũng tìm hiểu cách làm nhé :)

### Tổng quan các bước

![image](https://www.planttext.com/api/plantuml/svg/TP91Qm8n48NlyoiUFUd12ZqkfRYXB7WezA0_O5nJ6znDbcHMMuh_lPErLYts5kQzVFCUoIm9H-dRXhYNuFjsPIDHfpDNkuwzu6wPRBm39oolvmld7SgkWnbKSwrMaLkx3t4xYDK_Lyj1BObeYSaJJ86TIquWsS2PJIOBLO6QcmRbwnpjvxtddTkms4LuKQE2o0Un23iRzSOjm-YBa87pTQ7hCD1MN6z7qQQ-aJ6o3aodw6AeRKeu2Zezq65Crg-HTr2LuvG5JXiWuPosFDPGUHsGGclbtVaDWh-qL7YSJBBdLYEZcMwrAkcFwRAN_P38ponSd59hOZeUiNUwPMNHiPRIiAVcS1u6B4XYEpoS6veXNvLPqaT_GfgV1nfI_qBUUb-Bqu9d4CqKfJ_g6m00)

Điểm cơ bản để ứng dụng B có thể sử dụng một API được cung cấp từ ứng dựng A là ở 2 chỗ

- Ở ứng dụng B, khi muốn sử dụng API từ ứng dụng A, ứng dụng B cần sử dụng JS API `my.navigateToMiniApp` với tham số `callback`. Tham số `callback` này sẽ nhận được kết quả trả về từ ứng dụng A
- Ở ứng dụng A, khi muốn trả về dữ liệu cho ứng dụng B, ứng dụng A sẽ gọi tới JS API `my.navigateBackMiniApp` và truyền về kết quả thông qua tham số `extraData`.

### Ví dụ về việc tạo ra một API mới

Chúng ta hãy cùng xây dựng một API đơn giản. API này có chức năng lấy về IP address hiện tại của thiết bị sau khi users bấm vào một nút bất kỳ

![image](/img/integration-api/demo.gif)

Chúng ta sẽ tạo ra một ứng dụng với id là `vn.tiki.integration.example`

Ứng dung chỉ có duy nhất một page `pages/index/index`. Page này được tổ chức như sau

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="js" label="JS">

```js
async function sleep(second) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, second * 1000);
  });
}

async function getIp() {
  return new Promise((resolve, reject) => {
    my.request({
      url: 'https://api.ipify.org?format=json',
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
      dataType: 'json',
      success: function (res) {
        resolve(res.ip);
      },
      fail: function (res) {
        reject(res);
      }
    });
  });
}

Page({
  data: {},
  async onSuccess() {
    this.setData({
      message: 'fetching data'
    });
    try {
      const [_, ip] = await Promise.all([sleep(1), getIp()]);
      this.setData({
        message: `ip: ${ip}`
      });
      my.navigateBackMiniApp({
        extraData: {
          status: 'success',
          ip
        }
      });
    } catch (e) {
      this.setData({
        message: `error: ${e.errorMessage}`
      });
      my.navigateBackMiniApp({
        extraData: {
          status: 'failure',
          error: e.errorMessage
        }
      });
    }
  }
});
```

  </TabItem>
  <TabItem value="xml" label="TXML">

```xml
<view class="container">
  <view class="message">{{message}}</view>
  <view class="button-group">
    <button class="button" onTap="onSuccess">Get IP Address</button>
  </view>
</view>
```

  </TabItem>
  <TabItem value="css" label="TCSS">

```css
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.message {
  padding: 16px;
  text-align: center;
}

.button-group {
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  justify-content: center;
  padding: 16px 16px;
  margin-bottom: var(--safe-area-inset-bottom);
}

.button-group > * + * {
  margin-left: 10px;
}

.button {
  flex: 1;
  border-radius: 24px;
}
```

  </TabItem>
</Tabs>

Trên page này có một button với title là `Get IP Address`, khi users bấm vào button này, ứng dụng sẽ gọi một request tới
API server `https://api.ipify.org?format=json` và nhận về IP address hiện tại.

```js
async function getIp() {
  return new Promise((resolve, reject) => {
    my.request({
      url: 'https://api.ipify.org?format=json',
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
      dataType: 'json',
      success: function (res) {
        resolve(res.ip);
      },
      fail: function (res) {
        reject(res);
      }
    });
  });
}
```

Để mọi người có thể nhìn thấy rõ hơn quá trình này, tôi cố tình tạo thêm một delay 1s trong quá trình gọi API

```js
async function sleep(second) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, second * 1000);
  });
}
```

Việc xử lý sự kiện click sẽ được thực hiện như sau

```js
async onSuccess() {
    this.setData({
      message: 'fetching data'
    });
    try {
      const [_, ip] = await Promise.all([sleep(1), getIp()]);
      this.setData({
        message: `ip: ${ip}`
      });
      my.navigateBackMiniApp({
        extraData: {
          status: 'success',
          ip
        }
      });
    } catch (e) {
      this.setData({
        message: `error: ${e.errorMessage}`
      });
      my.navigateBackMiniApp({
        extraData: {
          status: 'failure',
          error: e.errorMessage
        }
      });
    }
  }
```

Sau khi nhận được IP từ server, chúng ta sẽ gọi tới hàm `my.navigateBackMiniApp` và truyền vào `extraData` là một object

```js
{
  status: 'success', ip;
}
```

Trong trường hợp thất bại, chúng ta trả về `extraData` với cấu trúc

```js
{
  status: 'failure',
  error: <message>
}
```

## Kiểm thử integration mà không cần publish app

Để kiểm thử một integration mà không publish app, bạn có thể sử dụng chức năng [Kiểm thử nhanh ứng dụng](/docs/development/testing/quick-test)

Sau khi mở bằng mã QR code, nếu integration của bạn có trả về kết quả, kết quả đó sẽ được hiển thị trên màn hình

![image](/img/integration-api/testing.png)

## Sử dụng JS API

Để sử dụng JS API vừa kể trên, chúng ta tạo ra một ứng dụng với id là `vn.tiki.integration.usageex`.

Ứng dụng chỉ có duy nhất một page `pages/page/index` với nội dung sau

<Tabs>
  <TabItem value="js" label="JS">

```js
async function getIp() {
  return new Promise((resolve) => {
    my.navigateToMiniApp({
      appId: 'vn.tiki.integration.example',
      path: 'pages/index/index',
      callback(data) {
        resolve(data);
      }
    });
  });
}

Page({
  data: {},
  async onGetIp() {
    this.setData({
      message: 'fetching data'
    });
    const data = await getIp();
    this.setData({
      message: `data: ${JSON.stringify(data)}`
    });
  }
});
```

  </TabItem>
  <TabItem value="xml" label="TXML">

```xml
<view class="container">
  <view class="message">{{message}}</view>
  <view class="button-group">
    <button class="button" onTap="onGetIp">Get IP Address</button>
  </view>
</view>
```

  </TabItem>
  <TabItem value="css" label="TCSS">

```css
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.message {
  padding: 16px;
  text-align: center;
}

.button-group {
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  justify-content: center;
  padding: 16px 16px;
  margin-bottom: var(--safe-area-inset-bottom);
}

.button-group > * + * {
  margin-left: 10px;
}

.button {
  flex: 1;
  background-color: #dd2222;
  border-color: #dd2222;
  border-radius: 24px;
}

.button:hover {
  background-color: #dd2222;
  border-color: #dd2222;
}
```

  </TabItem>
</Tabs>

Ở đây, thay vì gọi trực tiếp `my.navigateToMiniApp`, chúng ta sẽ wrap API này với một API promise

```js
async function getIp() {
  return new Promise((resolve) => {
    my.navigateToMiniApp({
      appId: 'vn.tiki.integration.example',
      path: 'pages/index/index',
      callback(data) {
        resolve(data);
      }
    });
  });
}
```

Sau đó, việc sử dụng Promise với async sẽ đơn giản hơn nhiều

```js
async onGetIp() {
  this.setData({
    message: 'fetching data'
  });
  const data = await getIp();
  this.setData({
    message: `data: ${JSON.stringify(data)}`
  });
}
```

### Kết luận

Thông qua bài viết này, tự bản thân chúng ta, các developers có thể cung cấp thêm các API để mở rộng khả năng của hệ sinh thái Tini App.

Vậy còn chờ gì nữa, hãy cùng nhau khám phá và tạo thêm nhiều API hữu ích nhé các bạn.

Một số ví dụ về các API mà tôi có thể nghĩ tới

- Tạo API để thay đổi profile của người dùng Tiki
- Tạo API để trading trên Tiki Exchange
- Tạo API để gia hạn thời gian gửi heo vàng
  ...

Hy vọng trong tương lai, chúng ta có thể thấy nhiều API được mở ra trên nền tảng của Tini App hơn :)
