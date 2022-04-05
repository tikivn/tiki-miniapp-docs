---
title: Cách Tính Signature

description: tạo chữ ký điện tử trong Tiki mini app
---

## Request header

Với mỗi request để được xác thực cần gửi những thông tin sau trong request header

| Header              | Description                                   |
| ------------------- | --------------------------------------------- |
| X-Tiniapp-Timestamp | Thời gian gọi request, tính bằng milliseconds |
| X-Tiniapp-Client-Id | Client **key** được cấp khi tạo app           |
| X-Tiniapp-Signature | Signature được tính dựa trên request body     |


## Signature Là Gì?

Trong các lệnh gọi API giữa backend của bạn và backend của Tiki. Tiki sử dụng signature để có thể định danh backend nào đang thực hiện lệnh gọi đến backend của Tiki. Signature này được tính bằng cách lấy shasum của một số data và một API secret được cấp cho Tini App của bạn.

## Cách Tính Như Thế Nào?

### Phương thức POST

Pseudocode để tính signature sẽ như sau:

```python
// request body
body = {
    "<field_name>": <field_value>,
    "<field_name>": <field_value>,
    "<field_name>": <field_value>,
}

payload = timestamp + "." + client_key + "." + json_stringify(data)
secret = "<client_secret>"
encoded_payload = base64_safeurl_encode_no_padding(payload)
signature = HMAC_SHA256(secret, payload)
```

## Code Mẫu

Sau đây là code mẫu để tính signature với các ngôn ngữ khác nhau:

### JavaScript

```javascript
const crypto = require("crypto");

const client_key = "RLCKb7Ae9kx4DXtXsCWjnDXtggFnM43W";
const client_secret = "EhjGcsUUuRSJTHiYPbW5fxzyaKEx0JuAZIKRQ4HnIfNFidB2kMg6locQbTIEz3Vf";
const body = {
  id: 123
};

const timestamp = 1620621619569;

function base64URLEncode(data) {
  const base64 = Buffer.from(data, "utf8").toString("base64");
  return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function sign(secret, payload) {
  const signature = crypto
    .createHmac("sha256", client_secret)
    .update(payload)
    .digest("hex");
  return signature;
}

const payload = timestamp + '.' + client_key + '.' + JSON.stringify(body);
console.log("payload: ", payload);
const encodedPayload = base64URLEncode(payload);
console.log("encoded_payload: ", encodedPayload);
const signature = sign(client_secret, encodedPayload);
console.log("signature: ", signature);

// payload:  1620621619569.RLCKb7Ae9kx4DXtXsCWjnDXtggFnM43W.{"id":123}
// encoded_payload:  MTYyMDYyMTYxOTU2OS5STENLYjdBZTlreDREWHRYc0NXam5EWHRnZ0ZuTTQzVy57ImlkIjoxMjN9
// signature:  8ebd092b9df2cf90e8ccbcab2ba87ee14f2abb25eb8f18b4d7286d42adcd45c2
```

### Golang

```go
package main

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/base64"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"strconv"
)

func Sign(secret string, payload string) (string, error) {
	h := hmac.New(sha256.New, []byte(secret))
	_, err := h.Write([]byte(payload))
	if err != nil {
		return "", err
	}
	signature := hex.EncodeToString(h.Sum(nil))
	return signature, nil
}

func main() {
	clientKey := "RLCKb7Ae9kx4DXtXsCWjnDXtggFnM43W"
	clientSecret := "EhjGcsUUuRSJTHiYPbW5fxzyaKEx0JuAZIKRQ4HnIfNFidB2kMg6locQbTIEz3Vf"
	body := map[string]interface{}{
		"id": 123,
	}

	timestamp := int64(1620621619569)
	jsonBody, _ := json.Marshal(body)
	payload := fmt.Sprintf("%s.%s.%s", strconv.FormatInt(timestamp, 10), clientKey, string(jsonBody))
	fmt.Println("payload: ", payload)
	encodedPayload := base64.RawURLEncoding.EncodeToString([]byte(payload))
	fmt.Println("encoded_payload: ", encodedPayload)
	signature, _ := Sign(clientSecret, encodedPayload)
	fmt.Println("signature: ", signature)
}

// payload:  1620621619569.RLCKb7Ae9kx4DXtXsCWjnDXtggFnM43W.{"id":123}
// encoded_payload:  MTYyMDYyMTYxOTU2OS5STENLYjdBZTlreDREWHRYc0NXam5EWHRnZ0ZuTTQzVy57ImlkIjoxMjN9
// signature:  8ebd092b9df2cf90e8ccbcab2ba87ee14f2abb25eb8f18b4d7286d42adcd45c2

```

### PHP
```php
<?php
$timestamp = '1648463110733';
$clientId = 'YOUR_CLIENT_ID';
$secretKey = 'YOUR_SECRET_KEY';
$body = '{"code":"AoVGh57xCxEq7so22ba6d6pbcEj2Kk2JcImCbHsMQlM.qt90czxRIQAHkQTDgM83tFfm-P9alm8Pd9ja8VVvhV0"}';
$payloadFormat = '%s.%s.%s'; 
$payload = sprintf($payloadFormat, $timestamp, $clientId, $body);
$encodePayload = strtr(base64_encode($payload), '=+/', " -_");
$sig = hash_hmac('sha256', $encodePayload, $secretKey);
```

Link https://play.golang.org/p/HEMA2yZFl-W


### Phương thức GET

Pseudocode để tính signature sẽ như sau:

```python
// request body
base_url = https://api.tiki.vn/tiniapp-open-api
location=Hà Nội
order_id=88062110977884170
path = /order?location=url_encode(location)&order_id=url_encode(88062110977884170)
// path == /order?location=H%C3%A0+N%E1%BB%99i&order_id=88062110977884170

payload = timestamp + "." + client_key + "." + path
secret = "<client_secret>"
encoded_payload = base64_safeurl_encode_no_padding(payload)
signature = HMAC_SHA256(secret, payload)
```
#### Chú ý:
+ Phần path dùng để tạo chữ ký không bao gồm base URL
+ Giá trị của query parameters cần được url_encode theo HTML 2.0 Specification [RFC1866](https://datatracker.ietf.org/doc/html/rfc3986)
## Code Mẫu

Sau đây là code mẫu để tính signature với các ngôn ngữ khác nhau:

### JavaScript

```javascript
const crypto = require("crypto");

const client_key = "RLCKb7Ae9kx4DXtXsCWjnDXtggFnM43W";
const client_secret = "EhjGcsUUuRSJTHiYPbW5fxzyaKEx0JuAZIKRQ4HnIfNFidB2kMg6locQbTIEz3Vf";
const timestamp = 1620621619569;

function base64URLEncode(data) {
  const base64 = Buffer.from(data, "utf8").toString("base64");
  return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function sign(secret, payload) {
  const signature = crypto
    .createHmac("sha256", client_secret)
    .update(payload)
    .digest("hex");
  return signature;
}

const location = "Hà Nội"
const order_id = "88062110977884170"
const encodedPath = `/order?location=${encodeURIComponent(location)}&order_id=${encodeURIComponent(order_id)}`;

const payload = timestamp + '.' + client_key + '.' + encodedPath;
console.log("payload: ", payload);
const encodedPayload = base64URLEncode(payload);
console.log("encoded_payload: ", encodedPayload);
const signature = sign(client_secret, encodedPayload);
console.log("signature: ", signature);

// payload:  1620621619569.RLCKb7Ae9kx4DXtXsCWjnDXtggFnM43W./order?location=H%C3%A0%20N%E1%BB%99i&order_id=88062110977884170
// encoded_payload:  MTYyMDYyMTYxOTU2OS5STENLYjdBZTlreDREWHRYc0NXam5EWHRnZ0ZuTTQzVy4vb3JkZXI_bG9jYXRpb249SCVDMyVBMCUyME4lRTElQkIlOTlpJm9yZGVyX2lkPTg4MDYyMTEwOTc3ODg0MTcw
// signature:  e1e0d63f7f8296dd31b2c082e611351a6c41a3bc0309a9299832f70b693722c8
```

### Golang

```go
package main

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/base64"
	"encoding/hex"
	"fmt"
	"net/url"
	"strconv"
)

func Sign(secret string, payload string) (string, error) {
	h := hmac.New(sha256.New, []byte(secret))
	_, err := h.Write([]byte(payload))
	if err != nil {
		return "", err
	}
	signature := hex.EncodeToString(h.Sum(nil))
	return signature, nil
}

func main() {
	clientKey := "RLCKb7Ae9kx4DXtXsCWjnDXtggFnM43W"
	clientSecret := "EhjGcsUUuRSJTHiYPbW5fxzyaKEx0JuAZIKRQ4HnIfNFidB2kMg6locQbTIEz3Vf"
	location := "Hà Nội"
	orderID := "88062110977884170"
	path := fmt.Sprintf("/order?location=%s&order_id=%s", url.PathEscape(location), url.PathEscape(orderID))

	timestamp := int64(1620621619569)
	payload := fmt.Sprintf("%s.%s.%s", strconv.FormatInt(timestamp, 10), clientKey, path)
	fmt.Println("payload: ", payload)
	encodedPayload := base64.RawURLEncoding.EncodeToString([]byte(payload))
	fmt.Println("encoded_payload: ", encodedPayload)
	signature, _ := Sign(clientSecret, encodedPayload)
	fmt.Println("signature: ", signature)
}


// payload:  1620621619569.RLCKb7Ae9kx4DXtXsCWjnDXtggFnM43W./order?location=H%C3%A0%20N%E1%BB%99i&order_id=88062110977884170
// encoded_payload:  MTYyMDYyMTYxOTU2OS5STENLYjdBZTlreDREWHRYc0NXam5EWHRnZ0ZuTTQzVy4vb3JkZXI_bG9jYXRpb249SCVDMyVBMCUyME4lRTElQkIlOTlpJm9yZGVyX2lkPTg4MDYyMTEwOTc3ODg0MTcw
// signature:  e1e0d63f7f8296dd31b2c082e611351a6c41a3bc0309a9299832f70b693722c8
```

Link https://play.golang.org/p/PcGmo-j-1XC
