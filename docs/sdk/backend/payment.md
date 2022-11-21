---
title: Tích hợp Thanh Toán ở Backend cho app TikiVIP
---

## 1. Điều kiện

Để có thể tích hợp với Backend của Tini App, sau khi đăng ký tài khoản tích hợp, bạn cần sử dụng cặp key `api_key` và `api_secret`.

Chú ý rằng cặp key này cần gắn với cặp `partner_code` và `client_id` bạn đã sử dụng khi tích hợp ở client. Việc sử dụng sai các key sẽ dẫn tới dữ liệu sai và tích hợp bị sai.

Mọi request gọi tới backend của Tiki đều cần phải có signature.
Chi tiết việc tính signature được mô tả trong tài liệu [tính signature](/docs/sdk/backend/api_signature)

## 2. Luồng tích hợp thanh toán

![image](https://www.planttext.com/api/plantuml/png/fLLDInmn6BxdLxnuRUt1uz0jEXPfwQ4BEvubcvtk16UIxKn6z2WUUl2qvnwwoo9QgT12eJ13wI7Y_yW_wPl4jHE_MgW7NVC-xzVpFCckLugMgYvoGcibHLqCqv8GofGiORjAIw0LR9C9OZZZ4oeK95pmZSbayFADZGq86SfzMEaZGgJbIW1Tdi9MAOLAnGWmSSMczRVk1yQKxIBEOs9YKx0y2S49t-K1Cea9wVKWoQZ8G4az5t0vlSBVcPw9CVHwP1jMNy0W0cMQkGo2P613_Qq8M5OVcFP8G4NnlC0eGhxOYfswpBId59RZ4Y5L2d8FF-96fZt3n95fJ_1F26IcESLaFUFOt3G_bErUm2ZDqp754eHbiiFiCu3DZ8FYflcbO3yjmBIVO9AvAafVi0moqoucG3R4g9Hy17jw1lmjgf7WXXo6LrzD-v61qBE3fvZy-Q71AjFy1865BnndcBLWGDPmP_qTmOgBY3m1LL9HeIcu53lO34ze8MlKmYbaIV0CMneLJlQDGSPD-q44tAbIdul7Xa7ZvIgGKLcHCYJE3aC8O8UbagLf5h1dsaDWDC-7Q0UeQiRIgeAGJC2qmNMMdUf8k1cF7v8uw6bBrNWFAhXfteyZ69lsWiEOKsatEMQPZSOsciJHahoXHgzrCBUs0UYu9yP_D_MSTOY_DerhXL5K0Ns_4qeHGOx25teHzC75m2xksNNN1GlWp-NK8jtipkIFQA427wtv0VwXjw-29c-dQ62xqPrKxvq8lTTEhSVRm-Mz2WczyPRZzldggYVtZ_0eOpEtP6KQP-soIqYQL-ajAvdcHC7GxVLNAxsZF8V_DbAdOs0aTstSc_LAsjp4au0FLHA75ZlGvxKpGWsPWtg-EWyFFdxT1z7VQ9-ygyyAv2Dq5RdNI7SkERbFCpmiKrf9uJwyhzDATIF-07Dlb4kyRlrRkfLTtRpq6_tNXAnZ8duN_GO0)

Để tích hợp thanh toán, Partner cần thực hiện các bước sau (số thứ tự của các bước được tính mô tả trên sơ đồ luồng ở trên):

- Bước 2: Cài đặt hàm Delegate trên ứng dụng Android / iOS của bạn. Chi tiết xem tại phần cài đặt cho [Android](/docs/sdk/setup-for-android#62-tích-hợp-thanh-toán) và [iOS](/docs/sdk/setup-for-ios#62-t%C3%ADch-h%E1%BB%A3p-thanh-to%C3%A1n)

- Bước 4: Cài đặt một webhook IPN để gọi sang backend của Tiki. Mục đích của IPN này nhằm báo cho Backend của Tiki biết giao dịch đã được thực hiện thành công, chi tiết xem tại [IPN](/docs/sdk/backend/ref#1-api-nhận-ipn-từ-đối-tác)

Trong trường hợp đối tác gọi tới IPN của Tiki mà bị lỗi, đối tác nên retry gọi lại IPN này ít nhất 3 lần.
Sau 3 lần gọi, đối tác cũng có thể gọi API để [kiểm tra trạng thái đơn giao dịch](/docs/sdk/backend/ref#2-api-%C4%91%E1%BB%83-l%E1%BA%A5y-th%C3%B4ng-tin-tr%E1%BA%A1ng-th%C3%A1i-c%E1%BB%A7a-transaction-tr%C3%AAn-tiki)

- Bước 12: Cài đặt API để nhận về request hoàn tiền của Tiki. Trong trường hợp cần hoàn tiền, Tiki Backend sẽ gửi tới backend của đối tác chi tiết [hoàn tiền cho từng giao dịch](/docs/sdk/backend/ref#3-refund-api)

## 3. Luồng đối soát

Chi tiết của luồng đối soát sẽ được bàn bạn cụ thể với từng đối tác, tạm thời ở đây chúng tôi mô tả một luồng chuẩn về đối soát theo định dạng giao dịch của Tiki.

Luồng đối soát

![image](https://www.planttext.com/api/plantuml/svg/RLAnJiCm4Dtz5QVEm0Sme0uLMwKCMHXTDoId94wLE1KTKGU4EdLYw40gX2g1a2frguKOKl4V_XFERWefuCavl_VklRjq2yLpLQO9uwNAP9aEWfon4TLGu8XB1HsFFcIGTu0Nu1q_-HYZg_l0w7XmUW7-EOH6lo5SOnA0ACQmcnizHoYoUgaWgLyaNFeU2ADN7Am2avaA81i7EUcBUYdsr2EQjBJT_7Djz9De6aHr9KEGOLrDc6CuaAWtZZgJ4GpDTacGAphzVgztHcwOY10Kcks7Wh7Hjx-nVrkpco05LLS82HfzLyB0jXbQAmi45iWXs03CRzAhd1-oaYH2Y3mZTJqJqJT6Kl_IMMsz4bu_u0aKPliEYhXPe-0yjO7flZNDUozto10RlR6Svya_EPJHhvGyHbUUGanffgcrUxG0enzXuC896cWrEOWeknWH6NrFgzkkP8lVsBIhOssR8lfSSuY9inX1MrVbTeG_esEiItVw2xy0)

### 3.1. Chi tiết file đối soát

File đối soát của đối tác là một file CSV trong đó cần có chứa các trường

| tên trường          | ý nghĩa                              |
| ------------------- | ------------------------------------ |
| tiki_transaction_id | id giao dịch do Tiki gửi cho đối tác |
| transaction_id      | id giao dịch của đối tác             |
| transaction_amount  | số tiền của giao dịch                |
| status              | trạng thái của giao dịch             |
| created_at          | ngày tạo giao dịch                   |
| updated_at          | ngày cập nhật của giao dịch          |
