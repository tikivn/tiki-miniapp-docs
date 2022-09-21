---
title: Remote Debugging
image: https://global.discourse-cdn.com/standard14/uploads/tiki/original/2X/d/dace50ba90a7713ba920b5106f7d7ec6dcb4a066.png
description: Operation guide for Remote Debug Tini App on Tiki IDE - Tini Studio 
--- 


![Remote Debugging](https://global.discourse-cdn.com/standard14/uploads/tiki/original/2X/d/dace50ba90a7713ba920b5106f7d7ec6dcb4a066.png)
<br/>

> Tính năng Remote Debug được hỗ trợ kể từ Tini Studio version 1.30.0 và Tini App Framework version 1.101.0
 

## 📡 Overview


Nhằm hỗ trợ debug Tini App trên các thiết bị di động một cách dễ dàng và kiểm thử nhanh chóng ứng dụng trên môi trường testing gần với production nhất, Tini Studio cung cấp giải pháp Remote Debug.

## 🎨 Features

Các chức năng dưới đây được Tini Studio cung cấp khi developer sử dụng Remote Debug:

* Cung cấp console tab thông qua devtools panel, phục vụ logging và inject debug code directly.
* Môi trường debug gần với production mode.
* Cung cấp sandbox api tương tự khi [test app thông qua Dev Assistant](https://developers.tiki.vn/docs/development/testing/quick-test) nhưng không cần upload app qua đó giảm thời gian chờ đợi build new version từ server TIKI.

## 🛠️ Operation guide

1. Chuyển Simulator sang Remote Debug mode bằng cách click icon debug trên Simulator:
![icon debug trên Simulator|172x128](https://global.discourse-cdn.com/standard14/uploads/tiki/original/2X/f/f4094364532c48e35382b5590f1066bcbdb865f6.png) 
2. Start “Generate Debug QR-Code”, chọn App Id từ menu, đợi Tini Studio build và upload remote app
![Generate Debug QR-Code|690x431](https://global.discourse-cdn.com/standard14/uploads/tiki/original/2X/d/d9bf03b54599779dc3ac923e1c276ee1ed865afb.jpeg) 

3. Sau khi build thành công, dùng camera Scan QR và mở link bằng app TIKI trên thiết bị di động. Đợi Dev Assistant load app và connect trực tiếp với Tini Studio.
![Scan QR|690x431](https://global.discourse-cdn.com/standard14/uploads/tiki/original/2X/d/d6bcee419935c8d068aad699085945eb22a0bfe0.jpeg) 

Để xác nhận kết nối thành công, ứng dụng Tiki sẽ có thông báo “Open app in remote debug mode”. Sau khi kết nối, bật tab devtools trên Tini Studio và bắt đầu debug.

Khi có cập nhật về code. Thực hiện build lại từ bước 1.

![kết nối thành công|690x431](https://global.discourse-cdn.com/standard14/uploads/tiki/original/2X/1/15cda881163f6f6483026d1b1809af0247789212.jpeg) 

> 🔴 *Lưu ý:*
>
>
>
> * Debug trên ứng dụng Tiki cần Tini App sử dụng các api với chuẩn HTTPS, domain name whitelist phải được cài đặt trên Tini Console.
> * Khi sử dụng tính năng remote debugging, sau khi có update source code, bạn cần disconnect remote debugging session, và ấn “Re-generate QR” và scan lại code để run lại app.

## ✋ Support

Nếu gặp bất kỳ issue nào trong quá trình sử dụng Remote Debugging trên Tini Studio, vui lòng liên hệ hỗ trợ qua [Tini App Slack Community](http://tini-apps.slack.com/).


