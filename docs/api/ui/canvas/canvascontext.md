---
title: my.createCanvasContext
sidebar_custom_props:
  description: Tạo ra canvas drawing context
---

my.createCanvasContext là API dùng để tạo ra canvas drawing context.

Canvas drawing context là một đối tượng với các thuộc tính và phương thức mà bạn có thể sử dụng để kết xuất hình ảnh trong component Canvas.

## Quét mã để trải nghiệm

import { QRCode } from '@site/src/components/QRCode';

<QRCode page="pages/api/canvas/index" />

## Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator page="pages/api/canvas/index" />

## Khái niệm Path

Path là tập hợp các điểm được nối với nhau bằng các đoạn. Những đoạn này có thể là đường thẳng hoặc đường cong, … , độ dày khác nhau, màu sắc khác nhau.
Path là cơ sở giúp để hình thành nên các hình trong canvas. Sau đây là các bước cơ bản dê vẽ một hình.

1. Tạo ra path bằng phương thức `beginPath()`.
2. Sau đó dùng các phương thức vẽ để tạo ra những hình vẽ mà bạn muốn.
3. Dùng `stroke()` để tạo ra đường viền cho hình hoặc `fill()` để tô màu cho hình nếu cân. Nếu vẽ text, không cần đến `stroke()` hoặc `fill()`.
4. Cuối cùng sử dụng `draw()` để kết xuất (render) hình vẽ trên canvas.

```js
// in the .js file
const ctx = my.createCanvasContext('canvas');
ctx.rect(20, 20, 150, 50);
ctx.setFillStyle('blue');
ctx.fill();
ctx.beginPath();
ctx.rect(20, 50, 150, 40);
ctx.setFillStyle('yellow');
ctx.fillRect(20, 170, 150, 40);
ctx.rect(10, 100, 100, 30);
ctx.setFillStyle('red');
ctx.fill();
ctx.Draw();
```

## Thuộc tính

| Thuộc tính               | Kiểu dữ liệu | Mô tả                                                                                                                                                                                                                                 |
| ------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fillStyle                | string       | Tô màu. Chức năng tương tự `CanvasContext.setFillStyle()`.                                                                                                                                                                            |
| strokeStyle              | string       | Màu đường viền. Chức năng tương tự `CanvasContext.setStrokeStyle()`.                                                                                                                                                                  |
| setStrokeStyle().        | number       | Độ dày đường. Chức năng tương tự `CanvasContext.setLineWidth().`                                                                                                                                                                      |
| lineCap                  | string       | Hình dạng của đầu đường thẳng. Nhận các giá trị = [square \|\| butt \|\| round]. Chức năng tương tự `CanvasContext.setLineCap().`                                                                                                     |
| lineJoin                 | string       | Hình dạng điểm cắt nhau giữa hai đường thẳng. Nhận các giá trị = [round \|\| bevel \|\| miter]. Chức năng tương tự `CanvasContext.setLineJoin()`.                                                                                     |
| miterLimit               | number       | Khoảng cách tối đa giữa góc trong và góc ngoài khi 2 đường kẻ gặp nhau. Chức năng tương tự `CanvasContext.setMiterLimit().`                                                                                                           |
| lineDashOffset           | number       | Vẽ nét đứt. Giá trị khởi tạo = 0 (nét liền mảnh).                                                                                                                                                                                     |
| textBaseline             | string       | Dùng để quy định vị trí text so với Baseline. Nhận các giá trị = [top \|\| hanging \|\| middle \|\| alphabetic \|\| ideographic \|\| bottom]. Giá trị mặc định = Alphabetic. Chức năng tương tự với `CanvasContext.setTextBaseline()` |
| font                     | string       | Giá trị mặc định = "10px Arial".                                                                                                                                                                                                      |
| fontSize                 | number       | Kích thước font chữ. Chức năng tương tự `CanvasContext.setFontSize`()                                                                                                                                                                 |
| textAlign                | string       | Canh lề theo chiều ngang. Nhận các giá trị = [left \|\| right \|\| center \|\| start \|\| end]. Chức năng tương tự `CanvasContext.setTextAlign()`.                                                                                    |
| globalAlpha              | number       | Độ trong suốt của marker. Nhận giá trị trong khoảng từ 0 đến 1; 0: độ trong suốt tuyệt đối (100% transparency); 1: độ đục tuyệt đối (100% opacity). Chức năng tương tự CanvasContext.setGlobalAlpha())                                |
| globalCompositeOperation | String       | Quy định cách thức một source shape (mới) sẽ được vẽ lên trên một destination shape (đã có sẵn) như thế nào. <br/> Khi một source shape (mới) sẽ được vẽ lên trên một destination shape (đã có sẵn) như thế nào, thuộc tính.          |

<div align="center"> ---oOo--- </div>

Hiểu thêm về một số thuộc tính

### Line Cap

<img src="/img/Line_Cap.jpg" alt="Line Cap" style={{ margin: '0 auto', display: 'flex' }}/>

### Miter length

<img src="/img/Miter_Length.jpg" alt="Miter Length" style={{ margin: '0 auto', display: 'flex' }}/>

### Baseline

<img src="/img/Baseline.jpg" alt="Baseline" style={{ margin: '0 auto', display: 'flex' }}/>

Thông thường nhắc đến Baseline, người ta sẽ liên tưởng đến đường (tưởng tượng) mà chân của các chữ cái hoa đều nằm trên nó. Đối với canvas, bạn có thể chọn baseline nằm ở top, hanging, bottom, … .

Nếu ideographic baseline (baseline của ký tự tượng hình) nằm ở vị trí thấp hơn alphabetic baseline (baseline của chữ cái Latin), thì ideographic baseline sẽ được tính là ideographic bottom luôn. Nói cách khác, baseline & bottom của ký tự tượng hình sẽ trùng nhau.

## Phương thức

| Phương thức                          | Mô tả                                                                                               |
| ------------------------------------ | --------------------------------------------------------------------------------------------------- |
| CanvasContext.arc                    | Vẽ cung tròn hoặc đường tròn.                                                                       |
| CanvasContext.arcTo                  | Vẽ cung tròn đi qua 2 điểm.                                                                         |
| CanvasContext.beginPath              | Tạo ra một path. Gọi phương thức này trước khi vẽ một hình nào đó.                                  |
| CanvasContext.bezierCurveTo          | Vẽ đường cong Bézier lập phương.                                                                    |
| CanvasContext.clearRect              | Xoá nội dung trong một vùng hình chữ trên canvas                                                    |
| CanvasContext.clip                   | Cắt (xén) một vùng có hình dạng bất kỳ từ canvas                                                    |
| CanvasContext.closePath              | Đóng lại một path.                                                                                  |
| CanvasContext.createCircularGradient | Tạo ra circular gradient. Điểm bắt đầu là tâm đường tròn; điểm kết thúc là vành đường tròn.         |
| CanvasContext.createLinearGradient   | Tạo ra linear gradient (chuyển màu tuyến tính).                                                     |
| CanvasContext.createRadialGradient   | Tạo ra radial gradient. Điểm bắt đầu là vành đường tròn thứ nhất; điểm kết thúc là vành đường tròn. |
| CanvasContext.createPattern          | Tạo ra một pattern cho một hình ảnh có thể lặp đi lặp lại theo một hướng nhất định.                 |
| CanvasContext.draw                   | Tiến hành vẽ hình trên canvas.                                                                      |
| CanvasContext.drawImage              | Vẽ hình ảnh với kích thước thực.                                                                    |
| CanvasContext.fill                   | Đổ màu cho hình ảnh đang vẽ của path. Màu mặc định: đen.                                            |
| CanvasContext.fillRect               | Vẽ và tô màu hình chữ nhật. Màu mặc định: đen.                                                      |
| CanvasContext.fillText               | Vẽ và màu màu text trên canvas. Màu mặc định: đen                                                   |
| CanvasContext.getImageData           | Sao chép (từng pixel) một vùng hình chữ nhật trên cavas. Dữ liệu trả về là một đối tượng ImageData. |
| CanvasContext.lineTo                 | Tạo ra một điểm mới. Dùng stroke() nối điểm vừa tạo với điểm trước đó sẽ tạo thành đường thẳng.     |
| CanvasContext.measureText            | Đo chiều rộng của text. Đơn vị tính: pixel                                                          |
| CanvasContext.moveTo                 | Di chuyển path đến một điểm mà không tạo ra đường thẳng.                                            |
| CanvasContext.putImageData           | Đem toàn bộ dữ liệu (pixel) của một đối tượng ImageData vẽ lên trên canvas.                         |
| CanvasContext.quadraticCurveTo       | Tạo ra đường cong Bézier toàn phương.                                                               |
| CanvasContext.rect                   | Tạo ra hình chữ nhật.                                                                               |
| CanvasContext.restore                | Khôi phục lại trạng thái gần nhất của canvas được lưu lại (save()).                                 |
| CanvasContext.rotate                 | Xoay hình vẽ đi một góc nhất định theo chiều kim đồng hồ                                            |
| CanvasContext.save                   | Lưu lại trạng thái của canvas                                                                       |
| CanvasContext.scale                  | Phóng to hay thu nhỏ hình vẽ theo chiều ngang và chiều dọc.                                         |
| CanvasContext.setFillStyle           | Chọn màu nền cho hình vẽ.                                                                           |
| CanvasContext.setFontSize            | Chọn cỡ chữ.                                                                                        |
| CanvasContext.setGlobalAlpha         | Chọn mức độ trong suốt của hình vẽ.                                                                 |
| CanvasContext.setLineCap             | Chọn hình dạng cho đầu đường thẳng.                                                                 |
| CanvasContext.setLineDash            | Chọn loại nét đứt.                                                                                  |
| CanvasContext.setLineJoin            | Chọn hình dạng cho điểm nơi 2 đường thẳng gặp nhau.                                                 |
| CanvasContext.setLineWidth           | Chọn đồ dày cho đường thẳng.                                                                        |
| CanvasContext.setMiterLimit          | Quy định khoảng cách tối đa giữa góc trong và giữa góc trong và góc ngoài khi 2 đường kẻ gặp nhau.  |
| CanvasContext.setShadow              | Chọn vị trí và màu đổ bóng.                                                                         |
| CanvasContext.setStrokeStyle         | Chọn màu cho đường viền.                                                                            |
| CanvasContext.setTextAlign           | Quy định cách căn lề (theo chiều ngang)                                                             |
| CanvasContext.setTextBaseline        | Quy định vị trí của text so với baseline                                                            |
| CanvasContext.setTransform           | Cho phép thay đổi thay đổi kích cỡ, xoay, di chuyển và làm nghiêng hình vẽ.                         |
| CanvasContext.stroke                 | Vẽ viền cho path hiện tại. Màu mặc định: đen.                                                       |
| CanvasContext.strokeRect             | Vẽ hình chữ nhật nhưng không tô màu.                                                                |
| CanvasContext.strokeText             | Vẽ text tại một vị trí cụ thể.                                                                      |
| CanvasContext.toDataURL              | Truy xuất URL data của một vùng trên canvas.                                                        |
| CanvasContext.toTempFilePath         | Xuất nội dung của canvas thành một tập tin hình ảnh, và trả về đường dẫn tập tin đó.                |
| CanvasContext.transform              | Cho phép thay đổi thay đổi kích cỡ, xoay, di chuyển và làm nghiêng hình vẽ.                         |
| CanvasContext.translate              | Dịch chuyển gốc toạ độ.                                                                             |

## Sample Code

Phương thức `save()` và `restore()`

```js
// .js file
const ctx = my.createCanvasContext('brown');
// save the default fill style
ctx.save();
ctx.setFillStyle('cyan');
ctx.fillRect(20, 20, 150, 100);
// restore to the previous saved state
ctx.restore();
ctx.fillRect(60, 60, 150, 100);
ctx.Draw();
```

Phương thức `fillText()` và `setFontSize()`

```js
const ctx = my.createCanvasContext('canvas');
ctx.setFontSize(42);
ctx.fillText('Hello', 30, 30);
ctx.fillText('Tiki', 200, 200);
ctx.Draw();
```

Phương thức `transform()`

```js
const ctx = my.createCanvasContext('canvas');
ctx.rotate((45 * Math.PI) / 180);
ctx.setFillStyle('red');
ctx.fillRect(70, 0, 100, 30);
ctx.transform(1, 1, 0, 1, 0, 0);
ctx.setFillStyle('#000');
ctx.fillRect(0, 0, 100, 100);
ctx.Draw();
```
