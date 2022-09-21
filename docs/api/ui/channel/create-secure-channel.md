---
title: my.createSecureChannel
sidebar_custom_props:
  description: Dùng để tạo ra một channel mà các pages hoặc các ứng dụng khác có thểcommunicate với page hiện tại
---

:::note Lưu ý
API đang trong quá trình phát triển, chỉ ready từ version 1.104
:::


## Giới thiệu

Tini App cung cấp khả năng để các pages có thể truyền dữ liệu với nhau. Các API về `secure channel` được sinh ra nhằm mục đích như vậy.

Các page trong cùng một Tini App có thể truyền dữ liệu thông qua việc sử dụng App, hoặc Event Emitter. Tuy nhiên các page giữa các ứng dụng khác nhau, thì việc này khó khăn hơn rất nhiều. 

Hãy cùng xem xét một ví dụ: Tini App A có chức năng cho phép users có thể upload và chỉnh sửa ảnh. Giờ đây, ứng dụng B, muốn sử dụng lại chức năng này của ứng dụng A.
Với các làm thông thường ứng dụng B sẽ phải tự implement lại các chức năng mà ứng dụng A đã cung cấp. 

Vậy nếu như ứng dụng A muốn cung cấp một API để các ứng dụng khác có thể sử dụng thì sao? Các API về `secure channel` được sinh ra nhằm mục đích như vậy. 

Cách sử dụng secure channel có thể được mô tả như sequence diagram dưới đây 

![img](https://www.planttext.com/api/plantuml/svg/TLBBQiCm4BphAvQSutv0A2LMUoaX46h_W2flOe4i6KcsoTztPTUF61jq43kpixCZdNqGBZILPepLT5DIrS84EEJAA4Zh6lW1X0U-XTvka7rTUZpRwKvxD2LrnY7vWEm4KcXDlTzGFT-aGn4mGzau_2o5CQY9zvuaaUXGeceH1CW10bN0femHhNgGK6wlD3ZE3HR6OhpFVfYnLB8jEjgfAz7iy8xGqMJjIGUnY9X7KooTKAaM3oJ924HPbaLlwGdkrdN2hTaB4rjBT4A57_ID3gzvB0t_FliMPHuGIkLZwt7MvK2bA1Dnrql1tTbgENdoclvx7LEUlKvGGKlRYcAGGLa3TEB20xmo7yEvelU4vtRdFSTKge7t4WaV8k6pdv6rNc3ahSnrAfIKoTJ7s9aiqSV-0m00)


## API Params

| Thuộc tính | Kiểu dữ liệu | Mô tả                                                                                                               |
| ---------- | ------------ | ------------------------------------------------------------------------------------------------------------------- |
| success    | Function     | Callback function khi thành công.                                                                                   |
| fail       | Function     | Callback function khi thất bại.                                                                                     |
| complete   | Function     | Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại.                                               |

## Sample Code

Ở đây, page A là page cung cấp một dịch vụ, và page B là page muốn sử dụng dịch vụ của page A 

Ở page B, chúng ta cần tạo ra một channel, rồi gửi channel đó sang page A

```js
import myx from 'tiki-miniapp-tnx/src/myx';

Page({
  data: {},
  async onTap() {
    const channel = await myx.createSecureChannel();
    const { id } = channel;
    await myx.navigateTo({
      url: `pages/api/secure-channel/plugin/index?channel=${id}`,
    });
    const message = await myx.waitResultSecureChannel({ id });
    this.setData({
      message: JSON.stringify(message),
    });
    await myx.navigateBack();
  },
});

```

Sau khi tạo ra một secure channel, chúng ta sử dụng API `navigateTo` để gửi channel id sang page A (trong ví dụ này, page A có đường dẫn là `pages/api/secure-channel/plugin/index`)

Sau khi gửi `channelId` sang page A, page B sẽ chờ kết quả từ page A bằng cách gọi API `waitResultSecureChannel`

Ở page A, khi nhận được channel, chúng ta sẽ cần lưu lại channel vào state của page A.

```js
import queryString from 'query-string';
import myx from 'tiki-miniapp-tnx/src/myx';

Page({
  data: {},
  onLoad(query) {
    const { channel } = queryString.parse(query);
    this.setData({
      channel,
    });
  },
  textChange(e) {
    this.setData({
      text: e.detail.value,
    });
  },
  async onTap() {
    const { channel, text } = this.data;
    const message = {
      text,
    };
    await myx.sendMessageToSecureChannel({
      id: channel,
      message,
    });
  },
});
```

Trong ví dụ của chúng ta, chỉ khi nào user bấm vào nút submit, page A mới gửi message tới channel thông qua API `sendMessageToSecureChannel`,
từ đó message này sẽ được gửi tới page B.

