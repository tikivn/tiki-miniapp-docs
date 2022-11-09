---
title: Tích hợp Thanh Toán ở Backend cho app TikiVIP
---

## Điều kiện

Để có thể tích hợp với Backend của Tini App, sau khi đăng ký tài khoản tích hợp, bạn cần sử dụng cặp key `api_key` và `api_secret`.

Chú ý rằng cặp key này cần gắn với cặp `partner_code` và `client_id` bạn đã sử dụng khi tích hợp ở client. Việc sử dụng sai các key sẽ dẫn tới dữ liệu sai và tích hợp bị sai.

Mọi request gọi tới backend của Tiki đều cần phải có signature.
Chi tiết việc tính signature được mô tả trong tài liệu [tính signature](/docs/sdk/backend/api_signature)

## Luồng tích hợp thanh toán

![image](https://www.planttext.com/api/plantuml/png/fLG_RzD07DtlK_pK5ShGqKAeDQWB0v6IpjNbOdAdsdUHVQxQiUh0q2ap0ucYge2e118Iaa-8mLM_ntqJtjbDiGijI6I8a_kztx_ttdcxi3otPPOoNbgZosoSv8nnOKrEUqMI4ozeZys0KKBDkBOqKbhjp6R35oz3RCZOs1pHnW08dUGRFUZwb7PpessY9uJ4ZP0ssFqpCERY0BWM4xEGWlAi3nwf0zL3ZcB6zcZp6GqZihvQ6hgQNoyroNgXfyI68JJOZKZ8yjYxKqq5ntc6A22Vj2GhUVWsDPA4TnUSrWCnRMn2vX0_CRDtxv4uyUuSZpvG-Ee2oVL2eRclljdGFQD9aYPJZX9CIDFXxWdHSwd8Ab_zi7IKPEJTEvh9fegjBuKawTrgHcn7JtAZ9dHOBqYz0jyZRAXeVFtPkxU2TBquVepa3_SDLlZgEsaKljI15cIj1B4jx5n_1TWg7R57P7Ek2yYkZDv7Cvpmp9HWkz4WaD0o76YqcEoB8AcyUwDxtDcy_gWV6WRMIc6XRaeGIOAuC0nZX0vh9NDVhUZGknCIF4t749oAKeYaAAXF9Y5jU9CLfZhLpOndzqdSwnbAbN1wGRVD1t54K-yk5KqLDs6JCo53D0xHKHojoHlNy5e7SsSReevxOlnzNYz5X_WRqpIj48KASFP-Nug8KWYVrQjU7on6OV6MtUP2e00-L_E0R6PlJFw05hRdewrsW7_etLQ1oTqS1WuR_PRQUYU2zzmyUDoThEzLdz1RRpNSFjtSRCdz9Jnah9Q1B5bZrYwxZ2LfaTonag_EBOsRlVvgfTTSfVJVHkfqx1cfkJQCRUE1b-jF)

Để tích hợp thanh toán, bạn cần thực hiện 2 bước

- Bước 2: Cài đặt hàm Delegate trên ứng dụng Android / iOS của bạn. Chi tiết xem tại phần cài đặt cho [Android](/docs/sdk/setup-for-android#62-tích-hợp-thanh-toán) và [iOS](/docs/sdk/setup-for-ios#62-t%C3%ADch-h%E1%BB%A3p-thanh-to%C3%A1n)

- Bước 4: Cài đặt một webhook IPN để gọi sang backend của Tiki. Mục đích của IPN này nhằm báo cho Backend của Tiki biết giao dịch đã được thực hiện thành công, chi tiết xem tại [IPN](/docs/sdk/backend/ipn#1-api-nhận-ipn-từ-đối-tác)
