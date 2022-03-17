---
title: Serverless Tini App's Auth Backend
---

## Trước khi bạn bắt đầu

1. Chọn hoặc tạo project mới trong Google Cloud Console - [Go to project selector](https://console.cloud.google.com/projectselector2/home/dashboard).
2. Xác nhận là project của bạn đã kích hoạt Billing [Xem cụ thể các bước ở đây](https://cloud.google.com/billing/docs/how-to/modify-project).
3. [Cài đặt và cấu hình Cloud SDK](https://cloud.google.com/sdk/docs/install).

## Cấu trúc của cây thư mục để dựng dịch vụ backend

```bash
tiniapp-auth-backend
├── auth_helper.py
├── Dockerfile
├── main.py
└── requirements.txt
```

## Các thư viện Python được sử dụng

```bash
# requirements.txt
Flask==2.0.1
gunicorn==20.1.0
requests==2.25.1
```

## Cấu hình routing theo đường dẫn URL path

```python
# main.py
from flask import Flask, request

app = Flask(__name__)

@app.route("/", methods=["GET"])
def hello_world():
    return "Hello World from Cloud Run!"

@app.route("/auth_exchange", methods=["POST"])
def auth_exchange_handler():
    data_dict = request.get_json()

    if not data_dict:
        msg = "No payload received"
        middleware.logger.error(f"error: {msg}")
        return f"Bad Request: {msg}", 400

    if not isinstance(data_dict, dict):
        msg = "Invalid payload data format"
        middleware.logger.error(f"error: {msg}")
        return f"Bad Request: {msg}", 400

    if not "code" in data_dict:
        msg = "Missing key 'code'"
        middleware.logger.error(f"error: {msg}")
        return f"Bad Request: {msg}", 400

    try:
        output = auth_helper.new_request_auth_exchange(data_dict)
        return output, 200
    except Exception as err:
        return f"Error: {err}", 500

    ...
    # Chuẩn bị 2 hàm tương tự cho các đường dẫn: /auth_refresh and /auth_info như mô tả trong bài: https://developers.tiki.vn/docs/backend-api/platform-api/exchange-auth-token
    ...

if __name__ == "__main__":
    PORT = int(os.getenv("PORT")) if os.getenv("PORT") else 8080
    app.run(host="0.0.0.0", port=PORT, debug=True)

```

## Nội dung trong file

```python
# auth_helper.py
import urllib.request
import json

import base64
import hmac
import hashlib

import time

###########################
# Cách tính signature bằng Python tương tự trong bài viết:
https://developers.tiki.vn/docs/backend-api/platform-api/calculate-signature
###########################

def base64URLEncode(data):
    message_bytes = data.encode()
    base64_bytes = base64.b64encode(message_bytes)
    base64_message = base64_bytes.decode()
    return base64_message.replace("=", "").replace("+", "-").replace("/", "_")

def sign(secret, payload):
    return hmac.new(secret.encode(), payload.encode(), hashlib.sha256).hexdigest()

###########################
# Chuẩn bị định dạng và thực hiện POST request theo yêu cầu hướng dẫn trong bài viết:
https://developers.tiki.vn/docs/backend-api/platform-api/exchange-auth-token
###########################

def new_request_auth_exchange(data_dict):
    # Chúng ta sẽ truyền thông tin cho các biến sau từ môi trường lúc khởi động container khi deploy Cloud Run
    CLIENT_KEY = os.environ.get("CLIENT_KEY")
    CLIENT_SECRET = os.environ.get("CLIENT_SECRET")
    AUTH_ENDPOINT = os.environ.get("AUTH_ENDPOINT")

    if not CLIENT_KEY:
        raise Exception("CLIENT_KEY missing")

    if not CLIENT_SECRET:
        raise Exception("CLIENT_SECRET missing")

    if not AUTH_ENDPOINT:
        raise Exception("AUTH_ENDPOINT missing")

    headers = {
        "Content-Type": "application/json",
    }

    data = json.dumps(data_dict, separators=(',', ':'))

    my_timestamp = str(time.time_ns() // 1_000_000 )
    payload = my_timestamp + '.' + CLIENT_KEY + '.' + data
    encodedPayload = base64URLEncode(payload)
    my_signature = sign(CLIENT_SECRET, encodedPayload)

    req = urllib.request.Request(AUTH_ENDPOINT, data.encode(), headers)
    req.add_header('X-Tiniapp-Client-Key', CLIENT_KEY)
    req.add_header('X-Tiniapp-Signature', my_signature)
    req.add_header('X-Tiniapp-Timestamp', my_timestamp)

    response = urllib.request.urlopen(req)
    res = response.read()

    return res
```

## Dockerfile

```Dockerfile
# Dockerfile
# Use the official Python image.
# https://hub.docker.com/_/python
FROM python:3.8-slim

# Allow statements and log messages to immediately appear in the Cloud Run logs
ENV PYTHONUNBUFFERED True

# Copy application dependency manifests to the container image.
# Copying this separately prevents re-running pip install on every code change.
COPY requirements.txt ./

# Install production dependencies.
RUN pip install -r requirements.txt

# Copy local code to the container image.
ENV APP_HOME /app
WORKDIR $APP_HOME
COPY . ./

# Run the web service on container startup.
# Use gunicorn webserver with one worker process and 8 threads.
# Timeout is set to 0 to disable the timeouts of the workers to allow Cloud Run to handle instance scaling.
CMD exec gunicorn --bind 0.0.0.0:8080 --workers 1 --threads 8 --timeout 0 main:app
```

## Xây dựng container image bằng Cloud Build

> Thay thế PROJECT_ID tương ứng của bạn vào câu lệnh

```bash
(terminal) $ gcloud builds submit --tag asia.gcr.io/PROJECT-ID/tiniapp-auth-backend
```

Sau khi build thành công thì container image sẽ được lưu trữ trong Container Registry trên Google Cloud. Bạn có thể tự tìm hiểu thêm về cách sử dụng và cấu hình [Cloud Build](https://cloud.google.com/build) và [Containter Registry](https://cloud.google.com/container-registry)

Một cách khác là bạn cũng có thể tự build bằng Docker trên môi trường local, và sau đó đẩy lên trên Container Registry hoặc Dockerhub:

```bash
(terminal) $ docker build -t asia.gcr.io/PROJECT-ID/tiniapp-auth-backend .
(terminal) $ docker push asia.gcr.io/my-spark-1/tiniapp-auth-backend
```

## Deploy Cloud Run

- Chúng ta sẽ deploy Cloud Run ở ==region Singapore (asia-southeast1)== với image mà bạn vừa build
- Tham số ==--set-env-vars== cho phép chúng ta truyền environment variables vào trong container
  > Thay thế PROJECT_ID tương ứng của bạn vào câu lệnh

```bash
(terminal) $ gcloud run deploy tiniapp-auth-backend --image asia.gcr.io/PROJECT-ID/tiniapp-auth-backend \
  --region asia-southeast1 \
  --set-env-vars CLIENT_KEY=<Client_Key được cung cấp> \
  --set-env-vars CLIENT_SECRET=<Client_secret được cung cấp> \
  --set-env-vars AUTH_ENDPOINT=https://api.tiki.vn/tiniapp-open-api/oauth/auth/token \
  --allow-unauthenticated
```

### Output của dòng lệnh phía trên như sau:

> Lưu ý Service URL ở cuối chính là đường dẫn endpoint chúng ta sẽ kết nối tới Cloud Run

```bash
Deploying container to Cloud Run service [tiniapp-auth-backend] in project [my-spark-1] region [asia-southeast1]
✓ Deploying... Done.
  ✓ Creating Revision...
  ✓ Routing traffic...
  ✓ Setting IAM Policy...
Done.
Service [tiniapp-auth-backend] revision [tiniapp-auth-backend-00011-cod] has been deployed and is serving 100 percent of traffic.
Service URL: https://tiniapp-auth-backend-mhmgjxm65a-as.a.run.app
```

## Cấu hình Tiniapp để sử dụng endpoint của Cloud Run

Sau khi đã có backend endpoint chạy trên Cloud Run. Các bạn có thể sử dụng endpoint này để exchange access token để gọi vào các platform API như sau nhé.

### Trên Tini App

Đoạn code mẫu dưới đây sẽ tự động `getAuthCode` khi page onLoad và gọi xuống cloud run backend để exchange token sau đó in kết quả ra console.

```javascript
Page({
  onLoad() {
    my.getAuthCode({
      success: (codeResp) => {
        my.request({
          url: '<your cloud run endpoint>,
          method: 'POST',
          data: { code: codeResp.authCode },
          headers: {
            'Content-Type': 'application/json'
          },
          success: (tokenResp) => {
            console.log(tokenResp.data.tiki_access_token)
          },
          fail: (err) => {
            console.log(err)
          }
        })
      },
      fail: (err) => {
        console.log(err)
      }
    })
  }
})
```

_Bài viết được đóng góp bới anh Ken Lý - Đại Diện Google Cloud Platform_
