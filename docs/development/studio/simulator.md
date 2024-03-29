---
title: Trình giả lập

description: trình giả lập của Tini Studio để chạy Tiki mini app trên máy tính
---

## Giả lập thao tác trên màn hình cảm ứng

Vì đây là trên máy tính, bạn sẽ sử dụng chuột thay cho ngón tay trong các thao tác với trình giả lập.

| **Thao tác ngón tay** | **Mô phỏng bằng chuột**                                                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tap                   | Click chuột (trái)                                                                                                                                |
| Double tap            | Double click                                                                                                                                      |
| Touch and hold        | Click và giữ chuột                                                                                                                                |
| Swipe                 | Click chuột (trái) vào vị trí bắt đầu. Giữ chuột trong quá trình di chuyển chuột theo hướng swipe. Cuối cùng, nhả ngón tay ra khỏi nút chuột.     |
| Drag                  | Click chuột (trái) vào đối tượng cần di chuyển và giữ. Kéo chuột để di chuyển đối tượng đến vị trí mới. Sau cùng, nhả ngón tay ra khỏi nút chuột. |

## Giả lập các thao tác phần cứng

<img src="/img/Simulator_Simulation_Widget.png" width="300px" alt="Simulation Widget" style={{ margin: '0 auto', display: 'flex' }}/>

Bấm vào icon Simulation Widget trên thanh công cụ của Trình giả lập. Danh sách các thao tác giả lập sẽ hiện ra.

- **Home**: tương đương bấm vào nút Home của điện thoại.
- **Location**: vị trí của bạn. Khi bấm vào nút này, hộp thoại sẽ xuất hiện cho phép bạn nhập vào tọa độ.
- **Scan**: giả lập camera trên điện thoại quét QR code. Khi bấm vào nút này, hộp thoại sẽ xuất hiện để bạn nhập tập tin hình ảnh QR code.
- **Shake**: giả lập hành động lắc điện thoại

## Chọn thiết bị cần được giả lập

<img src="/img/Simulator_Choose_Device.png" width="300px" alt="Choose Simulated Device" style={{ margin: '0 auto', display: 'flex' }}/>

Trên thanh công cụ của Trình giả lập, chọn thiết bị mà bạn muốn giả lập từ danh sách thả xuống (ngoài cùng bên trái).

## Phóng to/thu nhỏ màn hình thiết bị giả lập

<img src="/img/Simulator_Choose_ZoomRatio.png" width="300px" alt="Zoom Ratio" style={{ margin: '0 auto', display: 'flex' }}/>

Trên thanh công cụ của Trình giả lập, chọn tỷ lệ phóng to hay thu nhỏ mong muốn từ danh sách thả xuống (chính giữa)

## Recompile

Trình giả lập của Tini Studio áp dụng cơ chế Live Preview. Tức là hễ xuất hiện sự thay đổi trong code, thì code sẽ tự động được biên dịch lại và những thay đổi đó sẽ được thể hiện trên trình giả lập theo thời gian thực.

Tuy nhiên, trường hợp lỗi phát sinh từ cơ chế biên dịch tự động dẫn đến code mới không được thể hiện trên trình giả lập hoặc trường hợp code gặp lỗi (được sửa lại sau đó), bạn sẽ cần thực hiện "Compile" bằng tay.

Có 2 cách thực hiện compile bằng tay: 

- Cách 1: menu >> **Tools** >> **Compile**.
- Cách 2: Trên thanh công cụ của Trình giả lập, bấm vào icon Recompile.
  
<img src="/img/Simulator_Recompile.png" width="300px" alt="Recompile" style={{ margin: '0 auto', display: 'flex' }}/>


## Di chuyển Trình giả lập

Trình giả lập mặc định được đặt cố định ở bên phải cửa sổ Tini Studio. Tuy vậy, bạn có thể di chuyển Trình giả lập một cách tự do trên màn hình bằng cách:

<img src="/img/Simulator_Undock.png" width="300px" alt="Undock Simulator" style={{ margin: '0 auto', display: 'flex' }}/>

1. Trên thanh công cụ của Trình giả lập, bấm vào icon Undock. Trình giả lập tách thành cửa sổ riêng. 
2. Kéo rê thanh tiêu đề của cửa sổ Trình giả lập để di chuyển Trình giả lập.

Để dock Trình giả lập trở lại vào cửa sổ Tini Studio, bạn chỉ việc bấm icon này một lần nữa.
