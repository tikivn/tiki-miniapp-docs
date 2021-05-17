---
title: Cách Tính Signature để gọi vào Backend
---

## Signature Là Gì?

Trong các lệnh gọi API giữa backend của bạn và backend của Tiki. Tiki sử dụng signature để có thể định danh backend nào đang thực hiện lệnh gọi đến backend của Tiki. Signature này được tính bằng cách lấy shasum của một số data và một API secret được cấp cho Tini App của bạn.

## Cách Tính Như Thế Nào?

Pseudocode để tính signature sẽ như sau:

```python
data = {
    "<field_name>": <field_value>
    "<field_name>": <field_value>
    "<field_name>": <field_value>
    ...
    "client_id": "<client_id>"
    "timestamp": "<timestamp>"
}

secret = "<client_secret>"
payload = base64_safeurl_encode_no_padding(json_stringify(data))
signature = HMAC_SHA256(secret, payload)
```

## Code Mẫu

Sau đây là code mẫu để tính signature với các ngôn ngữ khác nhau:

### JavaScript

```javascript
const crypto = require("crypto");

const client_id = "RLCKb7Ae9kx4DXtXsCWjnDXtggFnM43W"
const client_secret = "EhjGcsUUuRSJTHiYPbW5fxzyaKEx0JuAZIKRQ4HnIfNFidB2kMg6locQbTIEz3Vf"
const code = "Y24CwtKFz7aPXv8wmghwZpnqHhpHaeA0THJ0qIY3BXjwm744zZ0JY6SkhRiNFVJT"
const timestamp = 1620621619569;

function isObject(data) {
  return data === Object(data);
}

function sortKeys(data) {
  const keys = Object.keys(data).sort();
  sortedData = {};
  for (const key of keys) {
    if (isObject(data[key])) {
      sortedData[key] = sortKeys(data[key]);
    } else {
      sortedData[key] = data[key];
    }
  }
  return sortedData;
}

function base64URLEncode(data) {
  const json = JSON.stringify(data);
  const base64 = Buffer.from(json, "utf8").toString("base64");
  return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function preparePayload(data) {
  const sortedData = sortKeys(data);
  return base64URLEncode(sortedData);
}

function sign(secret, payload) {
  const signature = crypto
    .createHmac("sha256", client_secret)
    .update(payload)
    .digest("hex");
  return signature;
}

const payload = preparePayload({
  code: code,
  client_id: client_id,
  timestamp: timestamp,
});
console.log(payload);

const signature = sign(client_secret, payload);
console.log(signature);

> eyJjbGllbnRfaWQiOiJSTENLYjdBZTlreDREWHRYc0NXam5EWHRnZ0ZuTTQzVyIsImNvZGUiOiJZMjRDd3RLRno3YVBYdjh3bWdod1pwbnFIaHBIYWVBMFRISjBxSVkzQlhqd203NDR6WjBKWTZTa2hSaU5GVkpUIiwidGltZXN0YW1wIjoxNjIwNjIxNjE5NTY5fQ
> a68fefe3075e24204949eafa78567261498f4f805a3ed9278396b593bed75576
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
    "sort"
    "time"
)

func sortKeys(data map[string]interface{}) map[string]interface{} {
    keys := []string{}
    for k := range data {
        keys = append(keys, k)
    }
    sort.Strings(keys)
    sortedData := map[string]interface{}{}
    for _, key := range keys {
        switch val := data[key].(type) {
        case map[string]interface{}:
            sortedData[key] = sortKeys(val)
        case []map[string]interface{}:
            arr := []map[string]interface{}{}
            for _, v := range val {
                arr = append(arr, sortKeys(v))
            }
            sortedData[key] = arr
        default:
            sortedData[key] = data[key]
        }
    }
    return sortedData
}

func PreparePayload(data map[string]interface{}) string {
    sortedData := sortKeys(data)

    buffer, _ := json.Marshal(sortedData)
    payload := base64.RawURLEncoding.EncodeToString(buffer)

    return payload
}

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
    client_id := "<client_id>"
    client_secret := "<client_secret>"
    code := "<code>"
    timestamp := time.Now().UnixNano() / int64(time.Millisecond)

    payload := PreparePayload(map[string]interface{}{
        "code":      code,
        "client_id": client_id,
        "timestamp": timestamp,
    })
    fmt.Println(payload)

    signature, _ := Sign(client_secret, payload)
    fmt.Println(signature)
}
```

Link https://play.golang.org/p/n2WFwbAJFVW

### Python

```python
import base64
import hmac
import hashlib
import json
import urllib

data = {
    "code": "Y24CwtKFz7aPXv8wmghwZpnqHhpHaeA0THJ0qIY3BXjwm744zZ0JY6SkhRiNFVJT",
    "client_id": "RLCKb7Ae9kx4DXtXsCWjnDXtggFnM43W",
    "timestamp": 1620621619569,
}

def to_json(data):
    buffer = json.dumps(data, indent=None, separators=(",", ":"), sort_keys=True)
    return buffer.encode("utf-8")

def base64_url_encode(data):
    buffer = base64.urlsafe_b64encode(to_json(data))
    return str(buffer, "utf-8").rstrip("=")

payload = base64_url_encode(data)
print(payload)

client_secret = "EhjGcsUUuRSJTHiYPbW5fxzyaKEx0JuAZIKRQ4HnIfNFidB2kMg6locQbTIEz3Vf"
signature = hmac.new(
    bytes(client_secret, "utf-8"), msg=bytes(payload, "utf-8"), digestmod=hashlib.sha256
).hexdigest()
print(signature)

> eyJjbGllbnRfaWQiOiJSTENLYjdBZTlreDREWHRYc0NXam5EWHRnZ0ZuTTQzVyIsImNvZGUiOiJZMjRDd3RLRno3YVBYdjh3bWdod1pwbnFIaHBIYWVBMFRISjBxSVkzQlhqd203NDR6WjBKWTZTa2hSaU5GVkpUIiwidGltZXN0YW1wIjoxNjIwNjIxNjE5NTY5fQ
> a68fefe3075e24204949eafa78567261498f4f805a3ed9278396b593bed75576
```

### Ruby

```ruby
require "base64"
require "json"
require 'openssl'

data = {
  "client_id": "RLCKb7Ae9kx4DXtXsCWjnDXtggFnM43W",
  "code": "Y24CwtKFz7aPXv8wmghwZpnqHhpHaeA0THJ0qIY3BXjwm744zZ0JY6SkhRiNFVJT",
  "timestamp": 1620621619569
}

def sort_keys(data)
  {}.tap do |tmp|
    data.sort.each do |k,v|
      tmp[k] = v.is_a?(Hash) ? sort_keys(v) : v
    end
  end
end

payload = Base64.urlsafe_encode64(sort_keys(data).to_json, padding: false)
puts payload

client_secret = 'EhjGcsUUuRSJTHiYPbW5fxzyaKEx0JuAZIKRQ4HnIfNFidB2kMg6locQbTIEz3Vf'
digest = OpenSSL::Digest.new('sha256')
signature = OpenSSL::HMAC.hexdigest(digest, client_secret, payload)
puts signature

> eyJjbGllbnRfaWQiOiJSTENLYjdBZTlreDREWHRYc0NXam5EWHRnZ0ZuTTQzVyIsImNvZGUiOiJZMjRDd3RLRno3YVBYdjh3bWdod1pwbnFIaHBIYWVBMFRISjBxSVkzQlhqd203NDR6WjBKWTZTa2hSaU5GVkpUIiwidGltZXN0YW1wIjoxNjIwNjIxNjE5NTY5fQ
> a68fefe3075e24204949eafa78567261498f4f805a3ed9278396b593bed75576
```
