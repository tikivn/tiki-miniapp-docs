---
title: Why should we use Auth Code
---

### Vì Sao Cần Sử Dụng Auth Code
Ta có một luồng authentication không sử dụng **Auth Code** sẽ như sau:

<img style={{ margin: '0 auto', display: 'flex' }} src="/img/basic-oauth2.png" alt="Basic oauth2"/>

1. Tini App Frontend của bạn sẽ gọi API `my.getAccessToken` từ Tiki Tini App Framework
2. Tiki Tini App Framework sẽ trả về cho bạn `tiki_access_token`
3. Tini App Frontend tiếp tục gọi API loginWithTiki kèm theo `tiki_access_token` đến Tini App Backend
4. Tini App Backend sẽ dùng `tiki_access_token` nhận được từ Tini App Frontend ở bước 3 để giao tiếp với hệ thống của Tiki lấy về `tiki_user_id` tương ứng với `tiki_access_token`
5. Tini App Backend tiếp tục tìm kiếm trong cơ sở dữ liệu theo `tiki_user_id` nhận được từ hệ thống của Tiki để lấy ra thông tin user chính xác tương ứng với `tiki_user_id` đang được lưu trong cơ sở dữ liệu của bạn và trả về cho Tini App Frontend

Có thể thấy, điểm yếu bảo mật ở đây chính là ở **bước 4**. Hãy tưởng tượng, chúng ta có 2 app A và B không có một liên kết nào với nhau và không hề biết gì về nhau. Ta thực hiện luồng Authentication ở trên nhưng có một chút tuỳ biến:
- Tini App Frontend của app A thực hiện bước 1 và có được `tiki_access_token` ở bước 2.
- Sau đó Tini App Frontend của app A thực hiện bước 3 nhưng sẽ không gọi API tới Tini App Backend của app A mà lại gọi tới Tini App Backend của app B nào đó. Khi đó Tini App Frontend của A đã có được thông tin user đang được lưu ở trong app B.
  Điều này cực kì nguy hiểm nếu thông tin user ở app B có kèm theo các thông tin nhạy cảm như CMND / CCCD, tài khoản ngân hàng liên kết...

Có 2 cách để giải quyết vấn đề này:
- Cách 1: Tini App Frontend vẫn trực tiếp lấy được `tiki_access_token` để gửi cho Tini App Backend. Tini App Backend sẽ cần verify `tiki_access_token` mà Tini App Frontend gửi về có được gửi đúng từ Tini App Frontend của hệ thống mình hay không.
- Cách 2: Sử dụng thêm **Auth Code** ở luồng authentication. Khi đó, Tini App Frontend sẽ không trực lấy và gửi được `tiki_access_token` cho Tini App Backend và sẽ gửi `auth_code` cho TIni App Backend. Tini App Backend sẽ sử dụng `auth_code` này cùng với `signature` của mình để lấy `tiki_access_token` và giao tiếp với hệ thống của tiki bằng `tiki_access_token` này. Tini App Frontend sẽ chỉ biết `auth_code` mà không hề hay biết biết `tiki_access_token`.

Chi tiết luồng authentication ở cách 2 như sau:

<img style={{ margin: '0 auto', display: 'flex' }} src="/img/oauth2-with-auth-code.png" alt="Basic oauth2"/>

1. Tini App Frontend của bạn sẽ gọi API `my.getAuthCode` từ Tiki Tini App Framework
2. Tiki Tini App Framework sẽ trả về cho bạn `auth_code`
3. Tini App Frontend tiếp tục gọi API `loginWithTiki` kèm theo `auth_code` đến Tini App Backend
4. Tini App Backend sẽ gọi API để lấy `tiki_access_token` từ hệ thống của tiki thông qua việc gửi `auth_code` nhận được từ Tini App Frontend và signature của mình.
5. Tiki sẽ trả về cho Tini App Backend `tiki_access_token`
6. Tini App Backend sẽ dùng `tiki_access_token` nhận được trực tiếp từ Tiki ở bước 5 để giao tiếp với hệ thống của Tiki lấy về `tiki_user_id` tương ứng với `tiki_access_token`
7. Tini App Backend tiếp tục tìm kiếm trong cơ sở dữ liệu theo `tiki_user_id` nhận được từ hệ thống của Tiki để lấy ra thông tin user chính xác tương ứng với `tiki_user_id` đang được lưu trong cơ sở dữ liệu của bạn và trả về cho Tini App Frontend

Ta sẽ có một so sánh nhỏ ở 2 cách này như sau:
- Ở cách 1: Các developers cần phải làm nhiều việc hơn và cẩn thận hơn (verify sự hợp lệ của `tiki_access_token` thông qua so sánh claim aud của token chẳng hạn, viết documents và kiểm tra lỗi). Vì vậy developers vẫn sẽ có khả năng quên verify và độ bảo mật ứng dụng sẽ không tốt.
- Ở cách 2: Các developers ở Tini App Backend bắt buộc phải implement cơ chế exchange auth code thì mới lấy được `tiki_access_token` và việc developers quên verify sự hợp lệ của token như ở cách 1 là không thể xảy ra.
  Vì vậy, Tiki chọn sử dụng cách số 2 cho luồng authentication.
  Tuy nhiên, nếu bạn để lộ **app_id** và **app_secret** của mình thì kẻ xấu vẫn hoàn toàn có thể giả lập lại Tini App Backend và lấy đi thông tin users trong hệ thống của bạn. Không chia sẻ **app_id** và **app_secret** của bạn cho bất kỳ ai khác cũng là một điều cực kì quan trọng.

### References

- Tham khảo từ Cộng đồng Tini App developers ở [đây](https://community.tiki.vn/t/h-i-trao-d-i-ki-n-th-c-flow-l-y-access-token-c-a-tini-app/168/3)