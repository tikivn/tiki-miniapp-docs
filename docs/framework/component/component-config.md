---
title: Cấu hình Custom Component

description: cấu hình custom component của Tini App Framework
---

Khi tạo mới một Custom Component, chúng ta có thể cấu hình Custom Component bằng file `index.json` trong thư mục chứa code Custom Component.

File `index.json` có thể chứa nội dung như sau

```json
{
  "component": true, // định nghĩa đây là một Custom Component
  "usingComponents": {
    // chỉ thị rằng Custom Component này muốn sử dụng các Component khác
    "other": "../other/index" // tên và đường dẫn tương đối tới các Custom Component khác
  }
}
```

File `index.json` có các keys sau

| tên             | kiểu    | bắt buộc | mô tả                                                                                                                                                                                                                                                                |
| --------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| component       | boolean | có       | định nghĩa đây là một custom component                                                                                                                                                                                                                               |
| usingComponents | object  | không    | định nghĩa các custom component mà component hiện tại muốn sử dụng. key là tên của custom component, value là đường dẫn của component. Nếu đường dẫn là đường dẫn tuyệt đối của dự án thì nó cần bắt đầu bằng `/`, còn nếu không đường dẫn sẽ là đường dẫn tương đối |
