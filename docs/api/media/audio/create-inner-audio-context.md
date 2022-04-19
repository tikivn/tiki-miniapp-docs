---
title: my.createInnerAudioContext
--- 

`my.createInnerAudioContext` là API dùng để tạo ra InnerAudioContext - đối tượng cung cấp cho bạn các phương thức và thuộc tính để phát audio nền (background audio) trên Tini App.

## Thuộc tính

| Thuộc tính     | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                                                                                       |
| -------------- | ------------ | ---------------- | ----------------------------------------------------------------------------------------------------------- |
| src            | string       |                  | Đường dẫn đến tập tin chứa audio.                                                                           |
| startTime      | number       | 0                | Thời điểm bắt đầu phát audio. Đơn vị tính: giây.                                                            |
| autoplay       | boolean      | false            | Tự động phát audio.                                                                                         |
| loop           | boolean      | false            | Tự động phát lại audio một khi kết thúc.                                                                    |
| obeyMuteSwitch | boolean      | true             | Cho phép tắt tiếng audio hay ko. Nếu obeyMuteSwitch = true, dẫu có bật Mute thì audio vẫn phát ra âm thanh. |
| volumne        | number       | 1                | Điều chỉnh âm lượng. Nhận giá trị từ 0 đến 1.                                                               |
| duration       | number       |                  | Độ dài audio. Đơn vị tính: giây. Read only.                                                                  |
| currentTime    | number       |                  | Đang phát đến thời điểm nào trong Audio. Đơn vị tính giây                                                   |
| paused         | boolean      |                  | Audio bị pause hoặc stop                                                                                    |
| buffered       | number       |                  | Audio được buffer (lưu trữ tạm thời) đến thời điểm nào.                                                     |

## Phương thức

| Phương thức                     | Mô tả                                                                                                                                       |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| InnerAudioContext.play          | Phát một tập tin audio.                                                                                                                     |
| InnerAudioContext.pause         | Tạm ngưng (pause) phát audio. Nếu phát tiếp, sẽ bắt đầu từ thời điểm bị tam ngưng.                                                          |
| InnerAudioContext.stop          | Dừng (stop) phát audio. Nếu phát tiếp, sẽ bắt đầu lại từ đầu.                                                                               |
| InnerAudioContext.seek          | Nhảy đến một thời điểm cụ thể trong audio.                                                                                                  |
| InnerAudioContext.destroy       | Loại bỏ chính đối tượng đó.                                                                                                                 |
| InnerAudioContext.onCanplay     | (callback function) Lắng nghe sự kiện tập tin audio sẵn sàng phát.                                                                          |
| InnerAudioContext.offCanplay    | (callback function) Huỷ bỏ lắng nghe sự kiện tập tin audio sẵn sàng phát.                                                                   |
| InnerAudioContext.onPlay        | (callback function) Lắng nghe sự kiện audio bắt đầu được phát hoặc đuợc phát tiếp sau khi tạm dừng (pause).                                 |
| InnerAudioContext.offPlay       | (callback function) Huỷ bỏ lắng nghe sự kiện audio bắt đầu được phát hoặc đuợc phát tiếp sau khi tạm dừng (pause).                          |
| InnerAudioContext.onPause       | (callback function) Lắng nghe sự kiện audio bị tạm dừng (pause).                                                                            |
| InnerAudioContext.offPause      | (callback function) Huỷ bỏ lắng nghe sự kiện audio bị tạm dừng (pause).                                                                     |
| InnerAudioContext.onStop        | (callback function) Lắng nghe sự kiện audio bị ngưng (stop).                                                                                |
| InnerAudioContext.offStop       | (callback function) Huỷ bỏ lắng nghe sự kiện audio bị ngưng (stop).                                                                         |
| InnerAudioContext.onEnded       | (callback function) Lắng nghe sự kiện audio phát đến hết.                                                                                   |
| InnerAudioContext.offEnded      | (callback function) Huỷ bỏ lắng nghe sự kiện audio phát đến hết.                                                                            |
| InnerAudioContext.onTimeUpdate  | (callback function) Lắng nghe sự kiện currentTime của audio bị thay đổi.                                                                    |
| InnerAudioContext.offTimeUpdate | (callback function) Huỷ bỏ lắng nghe sự kiện currentTime của audio bị thay đổi.                                                             |
| InnerAudioContext.onError       | (callback function) Lắng nghe sự kiện lỗi xuất hiện trong quá trình phát audio.                                                             |
| InnerAudioContext.offError      | (callback function) Huỷ bỏ lắng nghe sự kiện lỗi xuất hiện trong quá trình phát audio.                                                      |
| InnerAudioContext.onWaiting     | (callback function) Lắng nghe sự kiện load audio. Sự kiện được kích hoạt khi việc phát audio phải dừng lại để load bởi vì không đủ dữ liệu. |
| InnerAudioContext.offWaiting    | (callback function) Huỷ bỏ lắng nghe sự kiện load audio.                                                                                    |
| InnerAudioContext.onSeeking     | (callback function) Lắng nghe sự kiện nhảy đến một thời điểm của audio.                                                                     |
| InnerAudioContext.offSeeking    | (callback function) Huỷ bỏ lắng nghe sự kiện nhảy đến một thời điểm trong audio.                                                            |
| InnerAudioContext.onSeeked      | (callback function) Lắng nghe sự kiện hoàn thành nhảy đến một thời điểm trong audio.                                                        |
| InnerAudioContext.offSeeked     | (callback function) Huỷ bỏ lắng nghe sự kiện hoàn thành nhảy đến một thời điểm trong video.                                                 |

## Sample Code

```js
const innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.autoplay = true
innerAudioContext.src = 'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3'
innerAudioContext.onPlay(() => {
  console.log('Start playback')
})
innerAudioContext.onError((res) => {
  console.log(res.errMsg)
  console.log(res.errCode)
})
```
