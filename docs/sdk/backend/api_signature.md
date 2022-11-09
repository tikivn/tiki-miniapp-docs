---
title: Cách Tính API Signature
---

Tài liệu mô tả cách tính API signature cho đối tác, đối tác sẽ dùng API signature khi gọi tới API của Tiki.

## Request header
Với mỗi request để được xác thực cần gửi những thông tin sau trong request header


| Header              | Description                                                                                                                                                |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| X-Tiniapp-Timestamp | Thời gian gọi request, tính bằng milliseconds. Timestamp này không được cũ hơn (time_now  - 1 phút). Với time_now là thời gian Tiki nhận được API request. |
| X-Tiniapp-Signature | Signature được tính dựa trên request body                                                                                                                  |
| X-Tiniapp-Client-Id | Client id mà đối tác được cấp                                                                                                                              |

## Signature Là Gì?

Trong các lệnh gọi API giữa backend của đối tác và backend của Tiki. Tiki sử dụng signature để có thể định danh backend nào đang thực hiện lệnh gọi đến backend của Tiki. Signature này được tính bằng cách lấy shasum của một số data và một API secret được cấp cho đối tác

## Cách Tính Như Thế Nào?
Pseudo code để tính signature sẽ như sau:

```javascript
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

## Code mẫu
Sau đây là code mẫu để tính signature với các ngôn ngữ khác nhau:

### Javascript
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
```golang
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
$encodePayload = preg_replace(['/=/', '/\+/', '/\//'], ['', '-', '_'], base64_encode($payload));
$sig = hash_hmac('sha256', $encodePayload, $secretKey);
```
