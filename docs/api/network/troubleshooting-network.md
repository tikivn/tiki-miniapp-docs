---
title: Troubleshooting 

---

#### Vấn đề

Bạn tạo một https request bằng my.request, my.uploadFile hay một websocket connection tới server domain của bạn nhưng gặp lỗi sau:

```bash
ErrorCode: Fetch Error
ErrorMessage: request to <URL> failed, reason: certificate has expired
```

#### Nguyên nhân

Lỗi này xảy ra là do server của bạn đang sử dụng TLS/SSL certificate hết hạn. Nó thường gặp với các server sử dụng [DST Root CA X3 Certificate](https://letsencrypt.org/docs/dst-root-ca-x3-expiration-september-2021/)

#### Giải pháp

Certificate đã hết hạn thì chỉ cần renew certificate cho server là xong. Tuy nhiên, khi chưa thể renew certificate, bạn có thể khắc phục tạm thời tình trạng này trong Tini Studio bằng cách đó là tắt cờ `NODE_TLS_REJECT_UNAUTHORIZED` của Node; sau đó restart lại Tini Studio.

Xem thêm  [NODE_EXTRA_CA_CERTS=file](https://nodejs.org/api/cli.html#node_tls_reject_unauthorizedvalue)

**on windows**:

```bash
setx NODE_TLS_REJECT_UNAUTHORIZED '0'
```

**on macOS**:

```bash
echo "export NODE_TLS_REJECT_UNAUTHORIZED='0'" >> ~/.zshenv
```
 
:::note Thận trọng
 
- Thiết lập này sẽ tắt việc kiểm tra các kết nối HTTPS / SSL / TLS trên toàn bộ môi trường Node.js trên máy của bạn. Bạn chỉ nên sử dụng trong quá trình phát triển và debug ứng dụng trên Tini Studio sau đó đặt lại NODE_TLS_REJECT_UNAUTHORIZED về 1.
- Trong môi trường Tiki app, tiện ích của bạn sẽ không thể kết nối tới các domain sử dụng TLS/SSL certificate hết hạn và sẽ bị bộ phận kiểm duyệt từ chối yêu cầu cập nhật hoặc các yêu cầu phát hành tiện ích.

:::

