import { HTMLDataV1 } from "../../htmlLanguageTypes";
export const htmlData: HTMLDataV1 = {
  "version": "1.0.0",
  "tags": [
    {
      "name": "icon",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\nicon\n\n"
      },
      "attributes": [
        {
          "name": "type",
          "description": "Loại icon hiển thị. Giá trị hợp lệ bao gồm: home, search, calendar, location, setting, contact, chat, info, warning, success, plus, minus, geometry, close, close_circle, more, arrow_right, arrow_left, arrow_down, arrow_up, bookmark, app_home, phone_home, share, warning_glyph, success_glyph, close_glyph",
          "type": "string"
        },
        {
          "name": "size",
          "description": "Kích thước của icon",
          "type": "number"
        },
        {
          "name": "color",
          "description": "Màu của icon, sử dụng mã màu như trong css",
          "type": "string"
        }
      ],
      "references": [
        {
          "name": "icon - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/basic/icon"
        }
      ]
    },
    {
      "name": "progress",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\nThanh tiến trình\n\n"
      },
      "attributes": [
        {
          "name": "percent",
          "description": "Hiển thị phần trăm progress. Giá trị từ 0 tới 100",
          "type": "number"
        },
        {
          "name": "show-info",
          "description": "Hiển thị phần trăm ở bên phải thanh progress",
          "type": "boolean"
        },
        {
          "name": "stroke-width",
          "description": "Kích thước thanh progress",
          "type": "number"
        },
        {
          "name": "active-color",
          "description": "Màu của thanh phần trăm hiển thị",
          "type": "string"
        },
        {
          "name": "background-color",
          "description": "Màu của toàn bộ thanh progress",
          "type": "string"
        },
        {
          "name": "active",
          "description": "Sử dụng animation cho thanh progress",
          "type": "boolean"
        }
      ],
      "references": [
        {
          "name": "progress - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/basic/progress"
        }
      ]
    },
    {
      "name": "text",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\nThẻ text tương đồng với thẻ span trong html, giúp để trình bày một nội dung văn bản. Hai thẻ text mặc định sẽ được trình bày trên cùng một dòng nếu đứng gần nhau. Khi muốn xuống dòng bạn có thể sử dụng \\n.\n\n"
      },
      "attributes": [
        {
          "name": "selectable",
          "description": "Cho phép nội dung có thể được chọn hay không, nếu là true thì có thể chọn và sao chép nội dung",
          "type": "boolean"
        },
        {
          "name": "number-of-lines",
          "description": "Số dòng tối đa mà nội dung trong text được hiển thị, nếu quá số dòng sẽ hiển thị ... ở cuối",
          "type": "number"
        }
      ],
      "references": [
        {
          "name": "text - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/basic/text"
        }
      ]
    },
    {
      "name": "button",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\nbutton\n\n"
      },
      "attributes": [
        {
          "name": "size",
          "description": "Kích thước của button (large/medium/small)",
          "type": "string"
        },
        {
          "name": "type",
          "description": "Loại button (solid/outline/ghost)",
          "type": "string"
        },
        {
          "name": "loading",
          "description": "Hiển thị icon loading. Khi hiển thị loading, button không thể tap được",
          "type": "boolean"
        },
        {
          "name": "disabled",
          "description": "Disabled button, bạn không thể tap khi disabled là true",
          "type": "boolean"
        },
        {
          "name": "form-type",
          "description": "Giá trị là submit hoặc reset. Sử dụng với , khi tap vào button sẽ gọi sự kiện onSubmit hoặc onReset của form",
          "type": "string"
        },
        {
          "name": "onTap",
          "description": "Sự kiện khi tap vào button",
          "type": "event"
        }
      ],
      "references": [
        {
          "name": "button - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/form/button"
        }
      ]
    },
    {
      "name": "checkbox-group",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\n- `checkbox-group` dùng để nhóm các [checkbox](/docs/component/form/checkbox) lại với nhau, value của `checkbox-group` sẽ là một mảng chứa value của các `checkbox` được chọn\n- Các thẻ `checkbox` bên trong `checkbox-group` cần được khai báo thuộc tính `value`\n\n"
      },
      "attributes": [
        {
          "name": "name",
          "description": "Khai báo name khi được sử dụng trong , được sử dụng để lấy value cho form",
          "type": "string"
        },
        {
          "name": "onChange",
          "description": "Sự kiện được gọi khi giá trị của các checkbox bên trong bị thay đổi, event.detail = { value: value }, giá trị của value là một mảng các value của các checkbox được chọn",
          "type": "function"
        }
      ],
      "references": [
        {
          "name": "checkbox-group - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/form/checkbox-group"
        }
      ]
    },
    {
      "name": "checkbox",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\n`checkbox` là một component cho phép người dùng chọn một hoặt nhiều phương án\n\n"
      },
      "attributes": [
        {
          "name": "name",
          "description": "Khai báo name khi được sử dụng trong , được sử dụng để lấy value cho form",
          "type": "string"
        },
        {
          "name": "value",
          "description": "Giá trị của checkbox. Cần được khai báo khi sử dụng bên trong ",
          "type": "string"
        },
        {
          "name": "checked",
          "description": "Chỉ định checkbox có được chọn hay không",
          "type": "boolean"
        },
        {
          "name": "disabled",
          "description": "Disable checkbox, khi giá trị là true bạn sẽ không thay đổi giá trị của checkbox khi tap được",
          "type": "boolean"
        },
        {
          "name": "color",
          "description": "Màu của component, sử dụng mã màu như trong css",
          "type": "string"
        },
        {
          "name": "icon",
          "description": "Loại icon hiển thị khi checkbox được chọn. Chỉ hỗ trợ 2 loại icon là success và minus (). Giá trị mặc định là success",
          "type": "string"
        },
        {
          "name": "onChange",
          "description": "Sự kiện được gọi khi giá trị bị thay đổi, event.detail = { value: value }. Giá trị của value là true/false tùy vào checkbox được chọn hay không",
          "type": "event"
        }
      ],
      "references": [
        {
          "name": "checkbox - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/form/checkbox"
        }
      ]
    },
    {
      "name": "form",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\n- Form dùng để lưu trữ giá trị của các components [input](/docs/component/basic/form/input), [switch](/docs/component/form/basic/switch), [checkbox](/docs/component/basic/form/checkbox), [radio](/docs/component/basic/form/radio), [picker](/docs/component/basic/form/picker).\n- Các component bên trong form cần khai báo thuộc tính `name`\n- Giá trị của form chỉ có thể được lấy thông qua hàm `onSubmit` và chỉ được gọi thông qua sự kiện tap của [button](/docs/component/basic/form/button) với `form-type=\"submit\"`\n\n"
      },
      "attributes": [
        {
          "name": "onSubmit",
          "description": "Sự kiện được gọi khi button bên trong form với form-type=\"submit\" được tap vào, event.detail = { value }, trong đó value là một object chứa các giá trị của các component bên trong form",
          "type": "event"
        },
        {
          "name": "onReset",
          "description": "Sự kiện được gọi khi button bên trong form với form-type=\"reset\" được tap vào, khi đó giá trị của các component trong form sẽ bị đưa về giá trị ban đầu",
          "type": "event"
        }
      ],
      "references": [
        {
          "name": "form - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/form/form"
        }
      ]
    },
    {
      "name": "input",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\nThẻ input hiển thị một vùng input box cho phép người dùng nhập giá trị\n\n"
      },
      "attributes": [
        {
          "name": "type",
          "description": "Loại input. Hỗ trợ các giá trị text/email/number/decimal/tel/search/url. Lưu ý: một số type sẽ không có hiệu lực trên Simulator của Studio mà bạn phải chạy trên device thật.",
          "type": "string"
        },
        {
          "name": "password",
          "description": "Chỉ định loại input là password",
          "type": "boolean"
        },
        {
          "name": "name",
          "description": "Khai báo name khi được sử dụng trong , được sử dụng để lấy value cho form",
          "type": "string"
        },
        {
          "name": "value",
          "description": "Giá trị khởi tạo",
          "type": "string"
        },
        {
          "name": "placeholder",
          "description": "Nội dung hiển thị trước khi người dùng nhập giá trị của input",
          "type": "string"
        },
        {
          "name": "placeholder-class",
          "description": "Class name cho placeholder",
          "type": "string"
        },
        {
          "name": "placeholder-style",
          "description": "Inline style cho placeholder",
          "type": "css style"
        },
        {
          "name": "disabled",
          "description": "Disable input",
          "type": "boolean"
        },
        {
          "name": "maxlength",
          "description": "Giới hạn số ký tự được nhập",
          "type": "number"
        },
        {
          "name": "focus",
          "description": "Tự động focus vào input",
          "type": "boolean"
        },
        {
          "name": "confirm-type",
          "description": "Nội dung hiển thị cho phím return (Nhập) trên bàn phím (Keyboard). <br />Hỗ trợ các giá trị enter/done/go/next/previous/search/send",
          "type": "string"
        },
        {
          "name": "selection-start",
          "description": "Vị trí bắt đầu của con trỏ. Chỉ có hiệu lực trong khi focus là true",
          "type": "number"
        },
        {
          "name": "selection-end",
          "description": "Vị trí kết thúc của con trỏ. Chỉ có hiệu lực khi focus là true và cần được sử dụng chung với selection-start",
          "type": "number"
        },
        {
          "name": "cursor",
          "description": "Vị trí bắt đầu của con trỏ khi focus là true",
          "type": "number"
        },
        {
          "name": "controlled",
          "description": "Khi giá trị là true, nội dung value của input sẽ được điều khiển hoàn toàn thông qua hàm setData trong file js",
          "type": "boolean"
        },
        {
          "name": "onInput",
          "description": "Sự kiện sẽ được gọi khi nội dung của input bị thay đổi, event.detail = { value: value }",
          "type": "event"
        },
        {
          "name": "onConfirm",
          "description": "Sự kiện sẽ được gọi khi nhấn nút submit (return/Nhập) , event.detail = { value: value }",
          "type": "event"
        },
        {
          "name": "onFocus",
          "description": "Sự kiện sẽ được gọi khi input được focus , event.detail = { value: value }",
          "type": "event"
        },
        {
          "name": "onBlur",
          "description": "Sự kiện sẽ được gọi khi input không được focus nữa , event.detail = { value: value }",
          "type": "event"
        }
      ],
      "references": [
        {
          "name": "input - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/form/input"
        }
      ]
    },
    {
      "name": "label",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\nĐể tăng trải nghiệm với các form component, các thành phần bên trong `label` sẽ được focus khi bấm vào phạm vi của `label`. Hỗ trợ các component `radio`, `checkbox`, `input` và `switch`, nếu có nhiều component trong `label`, chỉ component đầu tiên được focus\n\n"
      },
      "attributes": [],
      "references": [
        {
          "name": "label - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/form/label"
        }
      ]
    },
    {
      "name": "picker-view",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\n`picker-view` hiển thị một vùng chọn dạng scroll trong page. Các thành phần con bên trong `picker-view` cần được bọc bởi thẻ `picker-view-column`. Giá trị của `picker-view` được thiết lập hoặc lấy từ `index` của các phần tử trong mảng\n\n"
      },
      "attributes": [
        {
          "name": "value",
          "description": "Chỉ định giá trị được chọn trong các picker-view-column (bắt đầu từ 0), số lượng phần tử trong mảng nên trùng với số picker-view-column đang hiển thị. Ví dụ bản có 2 picker-view-column trong picker-view, bạn muốn ở picker-view-column đầu tiên chọn index thứ 1, ở picker-view-column thứ 2 chọn index đầu tiên, bạn khai báo value=\"{{[1, 0]}}\".<br /> Nếu bạn không khai báo thì mặc định sẽ là index đầu tiên được chọn",
          "type": "number array"
        },
        {
          "name": "indicator-style",
          "description": "Inline style cho indicator, là phần nằm giữa chỗ index đang được chọn",
          "type": "string"
        },
        {
          "name": "indicator-class",
          "description": "Class name cho indicator",
          "type": "string"
        },
        {
          "name": "mask-style",
          "description": "Inline style cho mask",
          "type": "string"
        },
        {
          "name": "mask-class",
          "description": "Class name cho mask",
          "type": "string"
        },
        {
          "name": "onChange",
          "description": "Sự kiện được gọi khi giá trị bị thay đổi, event.detail = { value: value }, trong đó value là mảng các index đang được chọn trong picker-column",
          "type": "event"
        }
      ],
      "references": [
        {
          "name": "picker-view - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/form/picker-view"
        }
      ]
    },
    {
      "name": "picker",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\n`picker` tương tự với `picker-view`, cho phép người dùng chọn một phần tử trong một mảng dưới dạng scroll, tuy nhiên nó sẽ được hiển thị bên trong popup ở dưới page.\n\n"
      },
      "attributes": [
        {
          "name": "title",
          "description": "Title của picker",
          "type": "string"
        },
        {
          "name": "range",
          "description": "Mảng các phần tử hiển thị trong picker, nếu bạn khai báo một mảng các đối tượng, bạn cần khai báo thêm range-key",
          "type": "array string / array object"
        },
        {
          "name": "confirm-button-text",
          "description": "Nội dung của button dưới footer, mặc định là OK. Chỉ support framework version từ 1.73.5 trở lên",
          "type": "string"
        },
        {
          "name": "confirm-button-class",
          "description": "Class của button dưới footer. Chỉ support framework version từ 1.73.5 trở lên",
          "type": "string"
        },
        {
          "name": "rang-key",
          "description": "Chỉ định key nào trong object sẽ được hiển thị, được dùng khi range là mảng đối tượng",
          "type": "string"
        },
        {
          "name": "value",
          "description": "Chỉ định index nào được chọn, bắt đầu từ 0",
          "type": "string"
        },
        {
          "name": "onChange",
          "description": "Sự kiện được gọi khi giá trị bị thay đổi, event.detail = { value: value }, trong đó value là index của item được chọn",
          "type": "event"
        },
        {
          "name": "disabled",
          "description": "Nếu giá trị là true, khi bạn bấm vào picker thì sẽ không hiển thị",
          "type": "boolean"
        }
      ],
      "references": [
        {
          "name": "picker - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/form/picker"
        }
      ]
    },
    {
      "name": "radio-group",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\n`radio-group` dùng để nhóm các [radio](/docs/component/basic/form/radio) lại với nhau. Bên trong `radio-group` có thể chứa nhiều `radio`, nhưng tại một thời điểm chỉ có một `radio` có thể được chọn, các `radio` cần khai báo thuộc tính `value`\n\n"
      },
      "attributes": [
        {
          "name": "onChange",
          "description": "Sự kiện được gọi khi giá trị của các radio bị thay đổi, event.detail = { value: value }, value chính là giá trị của radio đang được chọn",
          "type": "function"
        },
        {
          "name": "name",
          "description": "Khai báo name khi được sử dụng trong , được sử dụng để lấy value cho form",
          "type": "string"
        }
      ],
      "references": [
        {
          "name": "radio-group - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/form/radio-group"
        }
      ]
    },
    {
      "name": "radio",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\n`radio` dùng để chọn một giá trị. Để nhóm nhiều `radio` lại với nhau, bạn cần sử dụng [radio-group](/docs/component/basic/form/radio-group)\n\n"
      },
      "attributes": [
        {
          "name": "value",
          "description": "Giá trị của radio",
          "type": "string"
        },
        {
          "name": "checked",
          "description": "Chỉ định radio có được chọn hay không. Mặc định là false",
          "type": "boolean"
        },
        {
          "name": "disabled",
          "description": "Disable radio component",
          "type": "boolean"
        },
        {
          "name": "color",
          "description": "Màu của component, sử dụng mã màu như trong css",
          "type": "string"
        }
      ],
      "references": [
        {
          "name": "radio - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/form/radio"
        }
      ]
    },
    {
      "name": "slider",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\n- `slider` component cho phép bạn chọn giá trị bằng việc kéo thả trong một phạm vi nhất định\n- Để sử dụng `slider` component, bạn cần sử dụng framework version từ `1.73.13` trở lên\n\n"
      },
      "attributes": [
        {
          "name": "name",
          "description": "Khai báo name khi được sử dụng trong , được sử dụng để lấy value cho form",
          "type": "string"
        },
        {
          "name": "value",
          "description": "Giá trị hiện tại của slider",
          "type": "number"
        },
        {
          "name": "min",
          "description": "Giá trị nhỏ nhất của slider",
          "type": "number"
        },
        {
          "name": "max",
          "description": "Giá trị lớn nhất của slider",
          "type": "number"
        },
        {
          "name": "step",
          "description": "Chỉ định mỗi lần tăng/giảm bao nhiêu đơn vị, step phải lớn hơn 0 và là số được chia hết bởi max và min",
          "type": "number"
        },
        {
          "name": "disabled",
          "description": "Disable slider",
          "type": "boolean"
        },
        {
          "name": "show-tooltip",
          "description": "Hiển thị tooltip hay không",
          "type": "boolean"
        },
        {
          "name": "active-color",
          "description": "Màu của thanh giá trị đang được active",
          "type": "string"
        },
        {
          "name": "background-color",
          "description": "Màu của nền của slider",
          "type": "string"
        },
        {
          "name": "handle-color",
          "description": "Màu của nền của vòng tròn toggle",
          "type": "string"
        },
        {
          "name": "track-size",
          "description": "Kích thước của thanh đang được active",
          "type": "number"
        },
        {
          "name": "handle-size",
          "description": "Kích thước của vòng tròn toggle",
          "type": "number"
        },
        {
          "name": "rail-size",
          "description": "Kích thước của vòng thanh slider",
          "type": "number"
        },
        {
          "name": "controlled",
          "description": "Khi giá trị là true, giá trị của slider sẽ được điều khiển hoàn toàn thông qua hàm setData trong file js",
          "type": "boolean"
        },
        {
          "name": "onChange",
          "description": "Sự kiện được gọi khi giá trị bị thay đổi và người dùng đã không còn chạm vào slider, event.detail = { value: value }",
          "type": "event"
        },
        {
          "name": "onChanging",
          "description": "Sự kiện được gọi khi giá trị bị thay đổi và người dùng vẫn còn chạm vào slider, event.detail = { value: value }",
          "type": "event"
        }
      ],
      "references": [
        {
          "name": "slider - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/form/slider"
        }
      ]
    },
    {
      "name": "switch",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\n`switch` dùng để chọn một giá trị\n\n"
      },
      "attributes": [
        {
          "name": "name",
          "description": "Khai báo name khi được sử dụng trong , được sử dụng để lấy value cho form",
          "type": "string"
        },
        {
          "name": "controlled",
          "description": "Khi giá trị là true, giá trị của switch sẽ được điều khiển hoàn toàn thông qua hàm setData trong file js",
          "type": "boolean"
        },
        {
          "name": "checked",
          "description": "Chỉ định giá trị của switch có được chọn hay không",
          "type": "boolean"
        },
        {
          "name": "disabled",
          "description": "Disable switch component",
          "type": "boolean"
        },
        {
          "name": "color",
          "description": "Màu của component, sử dụng mã màu như trong css",
          "type": "string"
        },
        {
          "name": "onChange",
          "description": "Sự kiện được gọi khi giá trị bị thay đổi, event.detail = { checked: checked }",
          "type": "event"
        },
        {
          "name": "controlled",
          "description": "Nếu giá trị là true, giá trị của component chỉ thay đổi thông qua setData",
          "type": "boolean"
        }
      ],
      "references": [
        {
          "name": "switch - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/form/switch"
        }
      ]
    },
    {
      "name": "textarea",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\nTương tự với thẻ `textarea` trên web, `textarea` component là một dạng text box cho phép bạn có thể nhập nhiều dòng vào.\n\n"
      },
      "attributes": [
        {
          "name": "name",
          "description": "Khai báo name khi được sử dụng trong , được sử dụng để lấy value cho form",
          "type": "string"
        },
        {
          "name": "value",
          "description": "Giá trị khởi tạo",
          "type": "string"
        },
        {
          "name": "placeholder",
          "description": "Nội dung hiển thị trước khi người dùng nhập giá trị của textarea",
          "type": "string"
        },
        {
          "name": "placeholder-class",
          "description": "Class name cho placeholder",
          "type": "string"
        },
        {
          "name": "placeholder-style",
          "description": "Inline style cho placeholder",
          "type": "css style"
        },
        {
          "name": "disabled",
          "description": "Disable textarea",
          "type": "boolean"
        },
        {
          "name": "maxlength",
          "description": "Giới hạn số ký tự được nhập",
          "type": "number"
        },
        {
          "name": "focus",
          "description": "Tự động focus vào textarea",
          "type": "boolean"
        },
        {
          "name": "auto-height",
          "description": "Tự động tăng chiều cao. (Bạn không nên set max-height và min-height cho textarea nếu giá trị của thuộc tính này là true)",
          "type": "boolean"
        },
        {
          "name": "show-count",
          "description": "Hiển thị số ký tự đang có của textarea",
          "type": "boolean"
        },
        {
          "name": "controlled",
          "description": "Khi giá trị là true, nội dung value của textarea sẽ được điều khiển hoàn toàn thông qua hàm setData trong file js",
          "type": "boolean"
        },
        {
          "name": "onInput",
          "description": "Sự kiện sẽ được gọi khi nội dung của textarea bị thay đổi, event.detail = { value: value }",
          "type": "event"
        },
        {
          "name": "onConfirm",
          "description": "Sự kiện sẽ được gọi khi nhấn nút submit (return/Nhập) , event.detail = { value: value }",
          "type": "event"
        },
        {
          "name": "onFocus",
          "description": "Sự kiện sẽ được gọi khi textarea được focus , event.detail = { value: value }",
          "type": "event"
        },
        {
          "name": "onBlur",
          "description": "Sự kiện sẽ được gọi khi textarea không được focus nữa , event.detail = { value: value }",
          "type": "event"
        }
      ],
      "references": [
        {
          "name": "textarea - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/form/textarea"
        }
      ]
    },
    {
      "name": "canvas",
      "description": {
        "kind": "markdown",
        "value": "## Thuộc tính\n\n| Thuộc tính     | Kiểu dữ liệu | Giá trị mặc định | Mô tả                                                                                 |\n| -------------- | ------------ | ---------------- | ------------------------------------------------------------------------------------- |\n| id             | string       |                  | Định danh duy nhất của canvas                                                         |\n| style          | string       |                  |                                                                                       |\n| class          | string       |                  |                                                                                       |\n| width          | number       | 300              | Chiều rộng của canvas                                                                 |\n| height         | number       | 225              | Chiều cao của canvas                                                                  |\n| disable-scroll | boolean      | false            | Không cho canvas scroll                                                               |\n| type           | string       |                  | Kiểu render đồ hoạ - 2d hay webgl.                                                    |\n| onTap          | event        |                  | Sự kiện được kích hoạt khi touch vào canvas                                           |\n| onTouchStart   | event        |                  | Sự kiện được kích hoạt khi ngón tay bắt đầu touch vào canvas.                         |\n| onTouchMove    | event        |                  | Sự kiện được kích hoạt khi ngón tay di chuyển trên canvas.                            |\n| onTouchEnd     | event        |                  | Sự kiện được kích hoạt khi ngón tay rút khỏi canvas.                                  |\n| onTouchCancel  | event        |                  | Sự kiện được hoạt khi hành động touch bị gián đoạn bởi một cuộc gọi hay popup window. |\n| onLongTap      | event        |                  | Sự kiện được kích hoạt khi thời gian ngón tay nhấn vào canvas lâu hơn 500 mili giây.  |\n| onReady        | event        |                  | Sự kiện được kích hoạt khi canvas được khởi tạo thành công và sẵn sàng hoạt động.     |\n\n"
      },
      "attributes": [
        {
          "name": "id",
          "description": "string",
          "type": "Định danh duy nhất của canvas"
        },
        {
          "name": "style",
          "description": "string",
          "type": ""
        },
        {
          "name": "class",
          "description": "string",
          "type": ""
        },
        {
          "name": "width",
          "description": "number",
          "type": "Chiều rộng của canvas"
        },
        {
          "name": "height",
          "description": "number",
          "type": "Chiều cao của canvas"
        },
        {
          "name": "disable-scroll",
          "description": "boolean",
          "type": "Không cho canvas scroll"
        },
        {
          "name": "type",
          "description": "string",
          "type": "Kiểu render đồ hoạ - 2d hay webgl."
        },
        {
          "name": "onTap",
          "description": "event",
          "type": "Sự kiện được kích hoạt khi touch vào canvas"
        },
        {
          "name": "onTouchStart",
          "description": "event",
          "type": "Sự kiện được kích hoạt khi ngón tay bắt đầu touch vào canvas."
        },
        {
          "name": "onTouchMove",
          "description": "event",
          "type": "Sự kiện được kích hoạt khi ngón tay di chuyển trên canvas."
        },
        {
          "name": "onTouchEnd",
          "description": "event",
          "type": "Sự kiện được kích hoạt khi ngón tay rút khỏi canvas."
        },
        {
          "name": "onTouchCancel",
          "description": "event",
          "type": "Sự kiện được hoạt khi hành động touch bị gián đoạn bởi một cuộc gọi hay popup window."
        },
        {
          "name": "onLongTap",
          "description": "event",
          "type": "Sự kiện được kích hoạt khi thời gian ngón tay nhấn vào canvas lâu hơn 500 mili giây."
        },
        {
          "name": "onReady",
          "description": "event",
          "type": "Sự kiện được kích hoạt khi canvas được khởi tạo thành công và sẵn sàng hoạt động."
        }
      ],
      "references": [
        {
          "name": "canvas - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/graphics/canvas"
        }
      ]
    },
    {
      "name": "map",
      "description": {
        "kind": "markdown",
        "value": "## Các thuộc tính\n\n| Thuộc tính     | Kiểu dữ liệu | Giá trị măc định | Bắt buộc | Mô tả                                                                                                                          |\n| -------------- | ------------ | ---------------- | :------: | ------------------------------------------------------------------------------------------------------------------------------ |\n| api-key        | string       |                  |    ✓     | Key của google maps. Tham khảo cách tạo key [tại đây](https://developers.google.com/maps/documentation/javascript/get-api-key) |\n| latitude       | number       |                  |    ✓     | Vĩ độ trung tâm (center latitude) của map                                                                                      |\n| longitude      | number       |                  |    ✓     | Kinh độ trung tâm (center longitude) của map                                                                                   |\n| zoom           | number       | 10               |          | Mức độ phóng to/ thu nhỏ                                                                                                       |\n| markers        | object       |                  |          | Một marker để đánh dấu bản đồ. Tham khảo cấu hình bên dưới.                                                                    |\n| polygon        | object       |                  |          | Một polygon (đa giác) để đánh dấu bản đồ. Xem chi tiết bên dưới.                                                               |\n| polyline       | object       |                  |          | Một polyline (đường đa tuyến) để đánh dấu bản đồ. Xem chi tiết bên dưới                                                        |\n| circles        | object       |                  |          | Một circle (hình tròn) để đánh dấu bản đồ. Xem chi tiết bên dưới.                                                              |\n| onMarkerTap    | event        |                  |          | Sự kiện được kích hoạt khi touch vào marker. Thông tin trả về sẽ là `Marker ID`, `latitude` và `longitude`.                    |\n| onTap          | event        |                  |          | Sự kiện được gọi khi bấm vào map                                                                                               |\n| onRegionChange | event        |                  |          | Sự kiện được gọi khi người dùng kéo/thả làm thay đổi phạm vi của map. Có chứa các thông tin `{ latitude, longitude, zoom }`    |\n\n"
      },
      "attributes": [
        {
          "name": "api-key",
          "description": "string",
          "type": "✓"
        },
        {
          "name": "latitude",
          "description": "number",
          "type": "✓"
        },
        {
          "name": "longitude",
          "description": "number",
          "type": "✓"
        },
        {
          "name": "zoom",
          "description": "number",
          "type": ""
        },
        {
          "name": "markers",
          "description": "object",
          "type": ""
        },
        {
          "name": "polygon",
          "description": "object",
          "type": ""
        },
        {
          "name": "polyline",
          "description": "object",
          "type": ""
        },
        {
          "name": "circles",
          "description": "object",
          "type": ""
        },
        {
          "name": "onMarkerTap",
          "description": "event",
          "type": ""
        },
        {
          "name": "onTap",
          "description": "event",
          "type": ""
        },
        {
          "name": "onRegionChange",
          "description": "event",
          "type": ""
        }
      ],
      "references": [
        {
          "name": "map - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/map/map"
        }
      ]
    },
    {
      "name": "audio",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\n`audio` là component cho phép người dùng có thể play nội dung âm thanh trên tini-app. Bạn có thể tham khảo thêm api liên quan [my.createAudioContext](/docs/api/media/create-audio-context).\n\n"
      },
      "attributes": [
        {
          "name": "src",
          "description": "Đường dẫn tới nội dung âm thanh.",
          "type": "string"
        },
        {
          "name": "loop",
          "description": "Khi được chỉ định, audio player sẽ tự động phát lại khi phát tới cuối nội dung.",
          "type": "boolean"
        },
        {
          "name": "controls",
          "description": "Cho phép tuỳ chỉnh sử dụng hay không sử dụng controls mặc định của Audio Player.",
          "type": "boolean"
        },
        {
          "name": "name",
          "description": "Khi cho phép hiển thị controls, name sẽ được hiển thị trên phần tên của nội dung.",
          "type": "string"
        },
        {
          "name": "author",
          "description": "Khi cho phép hiển thị controls, control sẽ được hiển thị trên phần tác giả của nội dung.",
          "type": "string"
        },
        {
          "name": "onPlay",
          "description": "Sự kiện được gọi khi nội dung bắt được được play.",
          "type": "event"
        },
        {
          "name": "onPause",
          "description": "Sự kiện được gọi khi nội dung được tạm dừng.",
          "type": "event"
        },
        {
          "name": "onEnded",
          "description": "Sự kiện được gọi khi nội dung kết thúc.",
          "type": "event"
        },
        {
          "name": "onTimeUpdate",
          "description": "Sự kiện được gọi để cập nhật vị trí hiện tại của nội dung theo thời gian.",
          "type": "event"
        },
        {
          "name": "onError",
          "description": "Sự kiện được gọi khi có lỗi khi play nội dung. event.detail = { errMsg: 'MEDIA_ERR_NETWORK' }",
          "type": "event"
        }
      ],
      "references": [
        {
          "name": "audio - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/media/audio"
        }
      ]
    },
    {
      "name": "image",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\nimage component để hiển thị hình ảnh\n\n"
      },
      "attributes": [
        {
          "name": "src",
          "description": "Đường dẫn hoặc data base 64 của hình ảnh.",
          "type": "string"
        },
        {
          "name": "class",
          "description": "Css class",
          "type": "string"
        },
        {
          "name": "style",
          "description": "Inline style",
          "type": "string"
        },
        {
          "name": "lazy-load",
          "description": "Hỗ trợ lazy load hình ảnh",
          "type": "boolean"
        },
        {
          "name": "default-source",
          "description": "Hình ảnh mặc định. Nếu giá trị được thiết lập, hình ảnh trong default-source sẽ được hiển thị trước, sau đó sẽ hiển thị hình ảnh trong src sau khi đã được tải thành công. Ngoài ra, hình ảnh này còn được dùng khi hình ảnh không load được (Khi đó onError sẽ được gọi)",
          "type": "string"
        },
        {
          "name": "mode",
          "description": "Chế độ hiển thị của hình ảnh. Mặc định là scaleToFill. Bạn có thể xem các mode được hỗ trợ bên dưới. Chỉ hỗ trợ version từ 1.76.5 trở lên",
          "type": "string"
        },
        {
          "name": "onTap",
          "description": "Sự kiện được gọi khi tap vào image. Chỉ hỗ trợ version >= 1.74.22",
          "type": "event"
        },
        {
          "name": "catchTap",
          "description": "Sự kiện được gọi khi tap vào image, tuy nhiên event sẽ không buble lên parent. Chỉ hỗ trợ version >= 1.74.22",
          "type": "event"
        },
        {
          "name": "onLoad",
          "description": "Sự kiện được gọi khi hình ảnh được tải về thành công, event.detail = { width, height }",
          "type": "event"
        },
        {
          "name": "onError",
          "description": "Sự kiện được gọi khi hình ảnh tải về thất bại, event.detail = { errMsg: 'Error message' }",
          "type": "event"
        }
      ],
      "references": [
        {
          "name": "image - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/media/image"
        }
      ]
    },
    {
      "name": "lottie",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\n- Lottie là thư viện cho phép chạy các hoạt ảnh kết xuất từ After Effects và có thể chạy trên ứng dụng mobile và web. Bạn có thể hiểu về lottie [tại đây](https://airbnb.io/lottie)\n- Bạn có thể sử dụng lottie component cùng với [my.createLottieContext](/docs/api/media/create-lottie-context)\n- Lottie component chỉ hỗ trợ từ phiên bản 17.5.2 trở lên\n\n"
      },
      "attributes": [
        {
          "name": "path",
          "description": "Đường dẫn tới nội dung của file json. Hỗ trợ các file local hoặc remote",
          "type": "string"
        },
        {
          "name": "autoplay",
          "description": "Autoplay lottie. Mặc định là false",
          "type": "boolean"
        },
        {
          "name": "speed",
          "description": "Tốc độc animation của lottie. Mặc định là 1",
          "type": "number"
        },
        {
          "name": "onComplete",
          "description": "Sự kiện được gọi khi kết thúc animation",
          "type": "event"
        },
        {
          "name": "onDataFailed",
          "description": "Sự kiện được gọi nội dung của lottie tải không thành công",
          "type": "event"
        },
        {
          "name": "onDataReady",
          "description": "Sự kiện được gọi khi nội dung của lottie được load xong",
          "type": "event"
        },
        {
          "name": "onLoopComplete",
          "description": "Sự kiện được gọi khi loop hoàn tất",
          "type": "event"
        }
      ],
      "references": [
        {
          "name": "lottie - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/media/lottie"
        }
      ]
    },
    {
      "name": "video",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\n`video` là component cho phép người dùng có thể play nội dung hình ảnh trên tini-app. Bạn có thể tham khảo thêm api liên quan [my.createVideoContext](/docs/api/media/create-video-context).\n\n"
      },
      "attributes": [
        {
          "name": "src",
          "description": "Đường dẫn tới nội dung hình ảnh.",
          "type": "string"
        },
        {
          "name": "loop",
          "description": "Khi được chỉ định, video player sẽ tự động phát lại khi phát tới cuối nội dung.",
          "type": "boolean"
        },
        {
          "name": "autoplay",
          "description": "Khi được chỉ định, video player sẽ tự động phát.",
          "type": "boolean"
        },
        {
          "name": "controls",
          "description": "Cho phép tuỳ chỉnh sử dụng hay không sử dụng controls mặc định củas Video Player.",
          "type": "boolean"
        },
        {
          "name": "object-fit",
          "description": "Cách thể hiện của video khi kích thước của video khác với video container. Các giá trị bao gồm: 'fill', 'contain', 'cover', 'none' và 'scale-down'. Giá trị mặc định là 'contain'.",
          "type": "string"
        },
        {
          "name": "plays-inline",
          "description": "Mặc định video sẽ được mở fullscreen khi phát, quy định thuộc tính này cho phép phát video tại chỗ.",
          "type": "boolean"
        },
        {
          "name": "poster",
          "description": "Hình đại diện của video trước khi nội dung được load.",
          "type": "string"
        },
        {
          "name": "onPlay",
          "description": "Sự kiện được gọi khi nội dung bắt được được play.",
          "type": "event"
        },
        {
          "name": "onPause",
          "description": "Sự kiện được gọi khi nội dung được tạm dừng.",
          "type": "event"
        },
        {
          "name": "onEnded",
          "description": "Sự kiện được gọi khi nội dung kết thúc.",
          "type": "event"
        },
        {
          "name": "onTimeUpdate",
          "description": "Sự kiện được gọi để cập nhật vị trí hiện tại của nội dung theo thời gian.",
          "type": "event"
        },
        {
          "name": "onError",
          "description": "Sự kiện được gọi khi có lỗi khi play nội dung. event.detail = { errMsg: 'MEDIA_ERR_NETWORK' }",
          "type": "event"
        }
      ],
      "references": [
        {
          "name": "video - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/media/video"
        }
      ]
    },
    {
      "name": "carousel",
      "description": {
        "kind": "markdown",
        "value": "## Cú pháp\n\nThẻ `<carousel>` định nghĩa một carousel.\n\nThẻ `<carousel-item>` định nghĩa item (phần tử) của carousel đó. `<carousel-item>` phải là thẻ con của `<carousel>`.\n\n\n"
      },
      "attributes": [
        {
          "name": "indicator-dots",
          "description": "Cho phép hiển thị dot indicator",
          "type": "boolean"
        },
        {
          "name": "indicator-color",
          "description": "Màu sắc của dot indicator",
          "type": "string"
        },
        {
          "name": "indicator-active-color",
          "description": "Màu sắc của dot đang được active",
          "type": "string"
        },
        {
          "name": "active-class",
          "description": "Thuộc tính này sẽ thêm một lớp (được định nghĩa trong TCSS) cho item đang active",
          "type": "string"
        },
        {
          "name": "current",
          "description": "Cho biết item thứ mấy của carousel đang active (được hiển thị). Các item được đánh số bắt đầu từ 0",
          "type": "number"
        },
        {
          "name": "autoplay",
          "description": "Tự động trượt qua các phần tử.",
          "type": "boolean"
        },
        {
          "name": "interval",
          "description": "(Đơn vị tính mili giây - ms) Thời gian hiển thị một item trước carousel khi trượt qua item tiếp theo.",
          "type": "number"
        },
        {
          "name": "duration",
          "description": "(Đơn vị tính mili giây - ms) Thời gian diễn ra hiệu ứng đổi item.",
          "type": "number"
        },
        {
          "name": "vertical",
          "description": "Carousel đứng, trượt theo chiều dọc. Bạn cần khai báo chiều cao cho carousel thông qua thuộc tính height ở style hoặc class",
          "type": "number"
        },
        {
          "name": "circular",
          "description": "Quy định carousel trượt xoay vòng. Ví dụ carousel có 10 item và circular=\"true\". Nếu trượt theo chiều xuôi, hết item 9, sẽ quay lại item 0. Nếu trượt theo chiều ngược, hết item 0 sẽ chuyển đến item 9.",
          "type": "boolean"
        },
        {
          "name": "disable-touch",
          "description": "Cho phép user có thể touch được vào carousel để lướt hay không",
          "type": "boolean"
        },
        {
          "name": "spacing",
          "description": "Khoảng cách giữa các item (đơn vị tính pixel). Chỉ hỗ trợ từ version 1.74.23",
          "type": "number"
        },
        {
          "name": "onChange",
          "description": "Sự kiện được kích hoạt khi trượt từ item này sang item khác., event.detail = { current }",
          "type": "function"
        }
      ],
      "references": [
        {
          "name": "carousel - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/view-container/carousel"
        }
      ]
    },
    {
      "name": "movable-area",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\nmovable-area là thành phần quy định phạm di chuyển của các [movable-view](/docs/component/view-container/movable-view) nằm trong nó.\n\n"
      },
      "attributes": [
        {
          "name": "scale-area",
          "description": "Khi các movable-view cho phép scaling. Bạn có thể dùng thuộc tính này để tắt việc scaling của tất cả component ở trong area.",
          "type": "boolean"
        }
      ],
      "references": [
        {
          "name": "movable-area - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/view-container/movable-area"
        }
      ]
    },
    {
      "name": "movable-view",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\nmovable-view là thành phần cho phép kéo và thả chính nó và các thành phần con trong nó trên page. movable-view bắt buộc phải nằm trong [movable-area](/docs/component/view-container/movable-area). Nếu không, movable-view không thể di chuyển được.\n\n"
      },
      "attributes": [
        {
          "name": "direction",
          "description": "Các hướng mà thành phần có thể di chuyển được. Giá trị của direction bao gồm \"all\", \"vertical\", \"horizontal\" và \"none\".",
          "type": "string"
        },
        {
          "name": "inertia",
          "description": "Khi thuộc tính này xác định, movable-view sẽ có quán tính sau khi thả ra.",
          "type": "boolean"
        },
        {
          "name": "out-of-bounds",
          "description": "Khi thuốc tính này xác định, movable-view có thể di chuyển ra ngoài movable-area.",
          "type": "boolean"
        },
        {
          "name": "x",
          "description": "Vị trí mặc định theo x-axis của view. Khi giá tị x nằm ngoài movable area vị trí biên sẽ được sử dụng.",
          "type": "number"
        },
        {
          "name": "y",
          "description": "Vị trí mặc định theo y-axis của view. Khi giá tị y nằm ngoài movable area vị trí biên sẽ được sử dụng",
          "type": "number"
        },
        {
          "name": "damping",
          "description": "Khi thuộc tính out-of-bounds được bật, sau khi di chuyển ra ngoài movable area view sẽ có hiệu ứng bật ngược lại.",
          "type": "number"
        },
        {
          "name": "friction",
          "description": "Khi inertia được bật, thuộc tính này dùng để quy định gia tốc của view tiếp tục di chuyển sau khi thả ra.",
          "type": "number"
        },
        {
          "name": "disabled",
          "description": "Tắt không cho view di chuyển.",
          "type": "boolean"
        },
        {
          "name": "scale",
          "description": "Xác định cho phép view scale bằng 2 ngón tay được không.",
          "type": "boolean"
        },
        {
          "name": "scale-min",
          "description": "Giá trị tối thiểu được scale.",
          "type": "number"
        },
        {
          "name": "scale-max",
          "description": "Giá trị cực đại được scale.",
          "type": "number"
        },
        {
          "name": "scale-value",
          "description": "Giá trị scale ban đầu.",
          "type": "number"
        },
        {
          "name": "animation",
          "description": "Cho phép tắt mở animation khi di chuyển.",
          "type": "boolean"
        },
        {
          "name": "onChange",
          "description": "Sự kiện được kích hoạt khi view được di chuyển. event.detail = { x, y source }",
          "type": "EventHandle"
        },
        {
          "name": "onScale",
          "description": "Sự kiện được kích hoạt khi view được scale. event.detail = { x, y, scale }",
          "type": "EventHandle"
        }
      ],
      "references": [
        {
          "name": "movable-view - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/view-container/movable-view"
        }
      ]
    },
    {
      "name": "scroll-view",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\n`scroll-view` là một container component có thể scroll được. Thanh scroll ngoài cùng không ảnh hưởng gì đến thanh scroll của `scroll-view`.\n\n"
      },
      "attributes": [
        {
          "name": "class",
          "description": "Tên của class",
          "type": "string"
        },
        {
          "name": "style",
          "description": "Inline style",
          "type": "string"
        },
        {
          "name": "scroll-x",
          "description": "Cho phép scroll theo chiều ngang",
          "type": "boolean"
        },
        {
          "name": "scroll-y",
          "description": "Cho phép scroll theo chiều dọc",
          "type": "boolean"
        },
        {
          "name": "scroll-top",
          "description": "Giá trị khởi tạo vị trí của thanh scroll dọc",
          "type": "number"
        },
        {
          "name": "scroll-left",
          "description": "Giá trị khởi tạo vị trí của thanh scroll ngang",
          "type": "number"
        },
        {
          "name": "scroll-into-view",
          "description": "Scroll tới phần tử con với id bằng với giá trị của scroll-into-view. Giá trị của scroll-into-view được ưu tiên hơn scroll-top và scroll-left. scroll-into-view chỉ áp dụng cho thẻ view",
          "type": "string"
        },
        {
          "name": "scroll-with-animation",
          "description": "Sử dụng animation khi scroll",
          "type": "boolean"
        },
        {
          "name": "trap-scroll",
          "description": "Khi thanh scroll đang ở trên cùng hoặc ở dưới cùng, thì hàm onScroll sẽ không được gọi. Thiết lập giá trị trap-scroll là true nếu bạn vẫn muốn onScroll được gọi",
          "type": "boolean"
        },
        {
          "name": "upper-threshold",
          "description": "Khoảng cách từ top/left của scroll-view để kích hoạt hàm onScroll",
          "type": "number"
        },
        {
          "name": "lower-threshold",
          "description": "Khoảng cách từ bottom/right của scroll-view để kích hoạt hàm onScroll",
          "type": "number"
        },
        {
          "name": "trap-scroll",
          "description": "Khi thanh scroll đang ở trên cùng hoặc ở dưới cùng, thì hàm onScroll sẽ không được gọi. Thiết lập giá trị trap-scroll là true nếu bạn vẫn muốn onScroll được gọi",
          "type": "boolean"
        },
        {
          "name": "onScrollToUpper",
          "description": "Sự kiện được gọi khi thanh scroll tới vị trí trên đầu hoặc ngoài cùng bên trái của scroll-view",
          "type": "event"
        },
        {
          "name": "onScrollToLower",
          "description": "Sự kiện được gọi khi thanh scroll tới vị trí dưới cùng hoặc ngoài cùng bên phải của scroll-view",
          "type": "event"
        },
        {
          "name": "onScroll",
          "description": "Sự kiện được gọi khi đang scroll, event.detail = { scrollLeft, scrollTop, scrollHeight, scrollWidth }",
          "type": "event"
        },
        {
          "name": "onTouchStart",
          "description": "Sự kiện được gọi khi bắt đầu chạm vào scroll-view. ",
          "type": "event"
        },
        {
          "name": "onTouchmove",
          "description": "Sự kiện được gọi khi bạn di chuyển trong lúc chạm vào scroll-view. ",
          "type": "event"
        },
        {
          "name": "onTouchEnd",
          "description": "Sự kiện được gọi khi dừng chạm vào scroll-view. ",
          "type": "event"
        }
      ],
      "references": [
        {
          "name": "scroll-view - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/view-container/scroll-view"
        }
      ]
    },
    {
      "name": "view",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\nTương tự như thể div của HTMLElement, thẻ view là thành phần container dùng để chứa các thành phần khác. Thẻ view sẽ không tác động gì trình bày của các thành phần con đến khi nó được style bằng thuộc tính style hoặc tcss.\n\n"
      },
      "attributes": [
        {
          "name": "hidden",
          "description": "Hiện thị hay không thẻ view.",
          "type": "boolean"
        },
        {
          "name": "class",
          "description": "custom class cho thẻ view",
          "type": "string"
        },
        {
          "name": "style",
          "description": "custom style cho thẻ view",
          "type": "string"
        },
        {
          "name": "animation",
          "description": "Dùng để kiểm soát animation của thẻ view - chi tiết xem .",
          "type": "object"
        },
        {
          "name": "onTap",
          "description": "Khi có sự kiện touch vào vùng hiển thị của thẻ view.",
          "type": "EventHandle"
        },
        {
          "name": "onTouchStart",
          "description": "Khi có sự kiện touch vào vùng hiển thị của thẻ view.",
          "type": "EventHandle"
        },
        {
          "name": "onTouchMove",
          "description": "Khi có sự di chuyển sau khi touch.",
          "type": "EventHandle"
        },
        {
          "name": "onTouchEnd",
          "description": "Khi có sự kiện kết thúc di chuyển.",
          "type": "EventHandle"
        },
        {
          "name": "onTouchCancel",
          "description": "Khi sự kiện touch bị đứt quãng (ví dụ như có điện thoại, có popup hiển thị).",
          "type": "EventHandle"
        },
        {
          "name": "onLongTap",
          "description": "Sự kiện được trigger khi giữ nhấn trên màn hình lâu hơn 500ms.",
          "type": "EventHandle"
        },
        {
          "name": "onTransitionEnd",
          "description": "Sự kiện được trigger sau khi hoàn thành 1 CSS Transition.",
          "type": "EventHandle"
        },
        {
          "name": "onAnimationStart",
          "description": "Sự kiện được trigger khi bắt đầu CSS Animation.",
          "type": "EventHandle"
        },
        {
          "name": "onAnimationEnd",
          "description": "Sự kiện được trigger khi kết thúc CSS Animation.",
          "type": "EventHandle"
        },
        {
          "name": "onAnimationIteration",
          "description": "Sự kiện được trigger khi kết thúc 1 vòng lặp CSS Animation.",
          "type": "EventHandle"
        }
      ],
      "references": [
        {
          "name": "view - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/view-container/view"
        }
      ]
    },
    {
      "name": "web-view",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\n`web-view` là một container componet dùng để hiển thị nội dung html trong một miniapp. Vì miniapp không thể nhảy qua một trang web ngoài tiki, thế nên để hiện thị nội dung trang đó\nbạn có thể dùng web-view để hiển thị.\n\n"
      },
      "attributes": [
        {
          "name": "my.navigateTo",
          "description": "Dùng để di chuyển từ màn hình hiện tại tới màn hình mong muốn trong ứng dụng. Xem thêm .",
          "type": ""
        },
        {
          "name": "my.navigateBack",
          "description": "Dùng để đóng màn hình hiện tại và trở lại màn hình trước đó. Xem thêm .",
          "type": ""
        },
        {
          "name": "my.getSystemInfo",
          "description": "Dùng để lấy thông tin của hệ thống. .",
          "type": ""
        },
        {
          "name": "my.getUserInfo",
          "description": "Dùng để lấy các thông tin cơ bản của users (tên, ảnh). .",
          "type": ""
        },
        {
          "name": "my.request",
          "description": "Dùng để thực hiện các network request. .",
          "type": ""
        },
        {
          "name": "my.postMessage",
          "description": "Dùng để gửi message tới webview. Message sẽ được gửi tới listener của window.onmessage hay window.addEventListener('message', listener).",
          "type": ""
        }
      ],
      "references": [
        {
          "name": "web-view - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/basic/view-container/webview"
        }
      ]
    },
    {
      "name": "button",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\n[Tini Button](https://www.figma.com/file/C2Nq0TcxMbe0vvuVpLY4Gh/?node-id=549%3A6274) là một button component được xây dựng dựa trên Design System của Tiki.\n\n<img alt=\"Tiki Tini Button - Tini UI Design System Community\" src=\"https://i.imgur.com/O4p4xQG.png\"/>\n\n"
      },
      "attributes": [
        {
          "name": "onTap",
          "description": "Hàm xử lý được gọi khi người dùng nhấn vào nút.",
          "type": "function()"
        },
        {
          "name": "size",
          "description": "Kích thước của button.",
          "type": "enum('large', 'medium', 'small')"
        },
        {
          "name": "type",
          "description": "Kiểu định sẵn của button.",
          "type": "enum('solid', 'outline', 'ghost')"
        },
        {
          "name": "shape",
          "description": "Hình dạng định sẵn của button.",
          "type": "enum('pill', 'rounded', 'circle', 'square')"
        },
        {
          "name": "disabled",
          "description": "Nếu set về true, tắt tất cả interactions cho button.",
          "type": "bool"
        },
        {
          "name": "skeleton",
          "description": "Nếu set về true, tắt tất cả interactions cho button và hiển thị default skeleton.",
          "type": "bool"
        },
        {
          "name": "loading",
          "description": "Nếu set về true, tắt tất cả interactions cho button, hiển thị loading indicator.",
          "type": "bool"
        },
        {
          "name": "iconName",
          "description": "Hiển thị một icon ở vị trí mặc định, icon sẽ bị ẩn nếu loading được đặt về true. Xem danh sách icon .",
          "type": "enum()"
        },
        {
          "name": "formType",
          "description": "Xem .",
          "type": ""
        },
        {
          "name": "class",
          "description": "Class của button.",
          "type": "string"
        },
        {
          "name": "style",
          "description": "Inline styles cho button.",
          "type": "string"
        }
      ],
      "references": [
        {
          "name": "button - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/advance/actions/button"
        }
      ]
    },
    {
      "name": "address",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\n- `address` là component trong [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui). Cho phép bạn thực hiện các thao tác liên quan tới địa chỉ của tiki, như lấy thông tin thành phố, quận huyện, phường xã,...\n- Để sử dụng `address`, bạn cần phải cài [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui) từ version `0.0.19` trở lên.\n\n"
      },
      "attributes": [
        {
          "name": "firstCities",
          "description": "Chỉ định các tỉnh/thành phố được hiển thị đầu tiên trong danh sách",
          "type": "array string"
        },
        {
          "name": "street",
          "description": "Tên đường",
          "type": "string"
        },
        {
          "name": "city",
          "description": "Mã của tỉnh/thành phố hoặc là một address object. Bạn có thể xem thông tin của address object bên dưới",
          "type": "number/Address"
        },
        {
          "name": "district",
          "description": "Mã của quận/huyện hoặc là một address object",
          "type": "number/Address"
        },
        {
          "name": "ward",
          "description": "Mã của phường/xã hoặc là một address object",
          "type": "number/Address"
        },
        {
          "name": "full_name",
          "description": "Họ và tên",
          "type": "string"
        },
        {
          "name": "phone_number",
          "description": "Số điện thoại, chỉ hỗ trợ số",
          "type": "string"
        },
        {
          "name": "streetLabel",
          "description": "Label cho street",
          "type": "string"
        },
        {
          "name": "streetPlaceholder",
          "description": "Placeholder cho street",
          "type": "string"
        },
        {
          "name": "cityPlaceLabel",
          "description": "Label cho city",
          "type": "string"
        },
        {
          "name": "cityPlaceholder",
          "description": "Placeholder cho city",
          "type": "string"
        },
        {
          "name": "districtPlaceLabel",
          "description": "Label cho district",
          "type": "string"
        },
        {
          "name": "districttPlaceholder",
          "description": "Placeholder cho district",
          "type": "string"
        },
        {
          "name": "wardPlaceLabel",
          "description": "Label cho ward",
          "type": "string"
        },
        {
          "name": "wardPlaceholder",
          "description": "Placeholder cho ward",
          "type": "string"
        },
        {
          "name": "namePlaceLabel",
          "description": "Label cho name",
          "type": "string"
        },
        {
          "name": "namePlaceholder",
          "description": "Placeholder cho name",
          "type": "string"
        },
        {
          "name": "phonePlaceLabel",
          "description": "Label cho phone",
          "type": "string"
        },
        {
          "name": "phonePlaceholder",
          "description": "Placeholder cho phone",
          "type": "string"
        },
        {
          "name": "streetErrorMsg",
          "description": "Error message cho street",
          "type": "string"
        },
        {
          "name": "cityErrorMsg",
          "description": "Error message cho city",
          "type": "string"
        },
        {
          "name": "districtErrorMsg",
          "description": "Error message cho district",
          "type": "string"
        },
        {
          "name": "wardErrorMsg",
          "description": "Error message cho ward",
          "type": "string"
        },
        {
          "name": "nameErrorMsg",
          "description": "Error message cho name",
          "type": "string"
        },
        {
          "name": "phoneErrorMsg",
          "description": "Error message cho phone",
          "type": "string"
        },
        {
          "name": "showName",
          "description": "Hiển thị field name",
          "type": "boolean"
        },
        {
          "name": "showPhone",
          "description": "Hiển thị field phone",
          "type": "boolean"
        },
        {
          "name": "onChangeStreet",
          "description": "Sự kiện được gọi khi street thay đổi",
          "type": "event"
        },
        {
          "name": "onChangeName",
          "description": "Sự kiện được gọi khi name thay đổi",
          "type": "event"
        },
        {
          "name": "onChangePhone",
          "description": "Sự kiện được gọi khi phone thay đổi",
          "type": "event"
        },
        {
          "name": "onChangeCity",
          "description": "Sự kiện được gọi khi city thay đổi",
          "type": "event"
        },
        {
          "name": "onChangeDistrict",
          "description": "Sự kiện được gọi khi district thay đổi",
          "type": "event"
        },
        {
          "name": "onChangeWard",
          "description": "Sự kiện được gọi khi ward thay đổi",
          "type": "event"
        },
        {
          "name": "onChangeAddress",
          "description": "Sự kiện được gọi khi address thay đổi",
          "type": "event"
        },
        {
          "name": "onFullAddress",
          "description": "Sự kiện được gọi khi các thông tin address được điền đầy đủ",
          "type": "event"
        }
      ],
      "references": [
        {
          "name": "address - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/advance/data-visualization/address"
        }
      ]
    },
    {
      "name": "list-item",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\nList item là component được sử dụng để hiển thị một item trong list.\n\n"
      },
      "attributes": [
        {
          "name": "padding",
          "description": "Nếu cờ được bật, list-item sẽ được bao ngoài bởi một phần padding. Chi tiết phần padding này vui lòng xem file Figma của Design System",
          "type": "boolean"
        },
        {
          "name": "class",
          "description": "custom class để thay đổi thuộc tính cho list-item",
          "type": "string"
        },
        {
          "name": "thumb",
          "description": "url cuả thumb image. Nếu thumb không được truyền vào, thumb image sẽ không hiển thị.",
          "type": "URL"
        },
        {
          "name": "thumbSize",
          "description": "size của image. Trường này bắt buộc phải truyền nếu như truyền vào thumb",
          "type": "number"
        },
        {
          "name": "upperSubtitle",
          "description": "Giá trị của upperSubtitle",
          "type": "string"
        },
        {
          "name": "lowerSubtitle",
          "description": "Giá trị của lowerSubtitle",
          "type": "string"
        },
        {
          "name": "titlePosition",
          "description": "Vị trí của title. Nếu là 'top' thì slot <default> sẽ được render trên đầu của upperSubtitle. Nếu là middle thì <default> được render ở giữa upperSubtitle và lowerSubtitle. Nếu là bottom thì <default> được render ở dưới lowerSubtitle",
          "type": "enum('top', 'middle', 'bottom')"
        },
        {
          "name": "arrow",
          "description": "Nếu cờ được bật, thì sẽ render arrow icon ở bên phải của <list-item>.",
          "type": "boolean"
        },
        {
          "name": "iconSize",
          "description": "size của icon",
          "type": "number"
        },
        {
          "name": "disabled",
          "description": "Nếu cờ được bật, <list-item> là không thể click vào",
          "type": "boolean"
        },
        {
          "name": "onClick",
          "description": "Hàm để xử lý sự kiện click vào",
          "type": "event"
        }
      ],
      "references": [
        {
          "name": "list-item - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/advance/data-visualization/list-item"
        }
      ]
    },
    {
      "name": "bottom-sheet",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\nBottom là component được sử dụng để hiển thị modal show từ dưới lên.\n\n![image](https://salt.tikicdn.com/ts/miniapp/17/39/96/0a7ed3934129953b1038012a51e6158f.png)\n\n"
      },
      "attributes": [
        {
          "name": "title",
          "description": "header title",
          "type": "string"
        },
        {
          "name": "buttonTitle",
          "description": "title của footer button",
          "type": "string"
        },
        {
          "name": "mark",
          "description": "Giống thuộc tính mark của popup",
          "type": "boolean"
        },
        {
          "name": "animation",
          "description": "Giống thuộc tính animation của popup",
          "type": "boolean"
        },
        {
          "name": "show",
          "description": "Giống thuộc tính show của popup",
          "type": "boolean"
        },
        {
          "name": "disableScroll",
          "description": "Giống thuộc tính disableScroll của popup",
          "type": "boolean"
        },
        {
          "name": "zIndex",
          "description": "Giống thuộc tính zIndex của popup",
          "type": "number"
        },
        {
          "name": "disableFromTop",
          "description": "Khoảng cách từ navigation title tới bottom sheet",
          "type": "number"
        },
        {
          "name": "onClose",
          "description": "Xử lý sự kiện close bottom sheet",
          "type": "event"
        },
        {
          "name": "onClick",
          "description": "Xử lý sự kiện click vào button ở footer",
          "type": "event"
        }
      ],
      "references": [
        {
          "name": "bottom-sheet - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/advance/feedback/bottom-sheet"
        }
      ]
    },
    {
      "name": "modal",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\nKhi ứng dụng cần cảnh báo hoặc nhắc nhở hành người dùng, yêu cầu thao tác của người dùng mà không phải chuyển trang, bạn có thể sử dụng modal.\nNgười dùng cần thực hiện các thao tác trên modal trước khi đóng.\n\n"
      },
      "attributes": [
        {
          "name": "show",
          "description": "Hiện/ẩn modal",
          "type": "boolean"
        },
        {
          "name": "showClose",
          "description": "Hiển thị button đóng modal, Cần implement props ",
          "type": "boolean"
        },
        {
          "name": "className",
          "description": "Thêm class cho modal",
          "type": "string"
        },
        {
          "name": "mask",
          "description": "Hiển thị mask",
          "type": "boolean"
        },
        {
          "name": "topImage",
          "description": "Hiển thị hình ảnh ở trên top của modal",
          "type": "string"
        },
        {
          "name": "topImageSize",
          "description": "Quyết định size render của topImage",
          "type": "'lg', 'md', 'sm'"
        },
        {
          "name": "buttons",
          "description": "Custom bottom buttons, implement props  bind function vào button",
          "type": "Button[]"
        },
        {
          "name": "buttonsLayout",
          "description": "Mask=true, khi click vào mask sẽ trigger function onClose",
          "type": "'horizontal','vertical'"
        },
        {
          "name": "advice",
          "description": "Close button ở bottom",
          "type": "boolean"
        },
        {
          "name": "onModalClick",
          "description": "Trigger function này khi click vào footer slot",
          "type": "event"
        },
        {
          "name": "onMaskClick",
          "description": "Trigger function này khi click vào mask",
          "type": "event"
        },
        {
          "name": "onModalClose",
          "description": "Function này sẽ được trigger khi click vào close button",
          "type": "event"
        },
        {
          "name": "onButtonClick",
          "description": "Function sẽ được bind và trigger khi click vào custom button",
          "type": "event"
        }
      ],
      "references": [
        {
          "name": "modal - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/advance/feedback/modal"
        }
      ]
    },
    {
      "name": "popup",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\nHiển thị popup menu\n\n"
      },
      "attributes": [
        {
          "name": "show",
          "description": "Hiển thị popup hay không",
          "type": "boolean"
        },
        {
          "name": "className",
          "description": "Thêm class cho popup",
          "type": "string"
        },
        {
          "name": "animation",
          "description": "Popup show với animation",
          "type": "boolean"
        },
        {
          "name": "mask",
          "description": "Hiển thị mask, sử dụng với props onClose để đóng popup khi click vào mask",
          "type": "boolean"
        },
        {
          "name": "position",
          "description": "Vị trí hiển thị popup",
          "type": "string"
        },
        {
          "name": "onClose",
          "description": "Mask=true, khi click vào mask sẽ trigger function onClose",
          "type": "event"
        }
      ],
      "references": [
        {
          "name": "popup - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/advance/feedback/popup"
        }
      ]
    },
    {
      "name": "dropdown",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\n- `dropdown` là component trong [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui). Với giao diện gần giống với `textfield`, nhưng có hỗ trợ bottom sheet khi bấm vào cho phép hiển thị và chọn data\n- Để sử dụng `dropdown`, bạn cần phải cài [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui) từ version `0.0.19` trở lên.\n\n"
      },
      "attributes": [
        {
          "name": "placeholder",
          "description": "Placeholder cho dropdown",
          "type": "string"
        },
        {
          "name": "disabled",
          "description": "Disable dropdown",
          "type": "boolean"
        },
        {
          "name": "shape",
          "description": "Kiểu border radius của dropdown. Hỗ trợ rounded hoặc pill. Mặc định là rounded",
          "type": "string"
        },
        {
          "name": "loading",
          "description": "Hiển thị loading skeleton cho dropdown",
          "type": "boolean"
        },
        {
          "name": "className",
          "description": "Class cho dropdown",
          "type": "string"
        },
        {
          "name": "items",
          "description": "Mảng dữ liệu để hiển thị trên bottom sheet",
          "type": "array string hoặc array object"
        },
        {
          "name": "labelKey",
          "description": "Label key để hiển thị trên bottom sheet, không cần truyền nếu items là mảng string. Ví dụ bạn có mảng [{value: 'Content 1', key: 1}] thì set labelKey=\"Content 1\" thì bottom sheet sẽ hiển thị text",
          "type": "string"
        },
        {
          "name": "idKey",
          "description": "Id key để phân biệt các item trên bottom sheet, ví dụ bạn có mảng [{name: 'Content 1', customKey: 1}], thì bạn cần truyền idKey=\"customKey\"",
          "type": "string"
        },
        {
          "name": "showSearch",
          "description": "Hiển thị search input trên bottom sheet hay không",
          "type": "boolean"
        },
        {
          "name": "closeAfterSelect",
          "description": "Tự động đóng bottom sheet sau khi một item được chọn",
          "type": "boolean"
        },
        {
          "name": "searchPlaceholder",
          "description": "Placeholder cho input search, chỉ có hiệu lực khi showSearch=true",
          "type": "string"
        },
        {
          "name": "labelText",
          "description": "Label text cho dropdown",
          "type": "string"
        },
        {
          "name": "useBottomSheet",
          "description": "Cho phép dùng bottom sheet hay không",
          "type": "boolean"
        },
        {
          "name": "bottomSheetHeight",
          "description": "Chiều cao của bottom sheet",
          "type": "number"
        },
        {
          "name": "bottomSheetTitle",
          "description": "Title của bottom sheet",
          "type": "string"
        },
        {
          "name": "bottomSheetButton",
          "description": "Text cho button dưới footer của bottom sheet",
          "type": "string"
        },
        {
          "name": "maskClose",
          "description": "Cho phép đóng bottom sheet khi bấm vào mask hay không",
          "type": "string"
        },
        {
          "name": "value",
          "description": "Value cho item được chọn trong bottom sheet",
          "type": "string/object"
        },
        {
          "name": "errorMsg",
          "description": "Lỗi hiển thị dưới dropdown",
          "type": "string"
        },
        {
          "name": "hasError",
          "description": "Hiển thị trạng thái có lỗi của dropdown",
          "type": "string"
        },
        {
          "name": "showCheck",
          "description": "Hiển thị icon check cho item được chọn trong bottom sheet. Sẽ tự động ẩn nếu multiple=true",
          "type": "string"
        },
        {
          "name": "multiple",
          "description": "Cho phép chọn nhiều item trên bottom sheet",
          "type": "string"
        },
        {
          "name": "onTap",
          "description": "Sự kiện được gọi khi một item trên bottom sheet được chọn",
          "type": "event"
        },
        {
          "name": "onSelect",
          "description": "Sự kiện được gọi khi chọn một item trên bottom sheet",
          "type": "event"
        },
        {
          "name": "onSearch",
          "description": "Sự kiện được gọi khi input search thay đổi",
          "type": "event"
        }
      ],
      "references": [
        {
          "name": "dropdown - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/advance/form/dropdown"
        }
      ]
    },
    {
      "name": "stepper",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\n`stepper` dùng để tăng hoặc giảm giá trị hiện tại.\n\n"
      },
      "attributes": [
        {
          "name": "className",
          "description": "custom class cho component",
          "type": "string"
        },
        {
          "name": "min",
          "description": "giá trị nhỏ nhất",
          "type": "number"
        },
        {
          "name": "max",
          "description": "giá trị lớn nhất",
          "type": "number"
        },
        {
          "name": "value",
          "description": "giá trị khởi tạo",
          "type": "number"
        },
        {
          "name": "step",
          "description": "giá trị mỗi lần tăng hoặc giảm, step có thể nhận giá trị kiểu double",
          "type": "number"
        },
        {
          "name": "disabled",
          "description": "disable stepper component",
          "type": "boolean"
        },
        {
          "name": "readOnly",
          "description": "nếu cờ được bật lên, users không thể thay đổi giá trị của stepper",
          "type": "boolean"
        },
        {
          "name": "showNumber",
          "description": "nếu cờ được bật lên, hiển thị giá trị trên stepper",
          "type": "boolean"
        },
        {
          "name": "inputWidth",
          "description": "độ rộng của phần input trong stepper",
          "type": "number"
        },
        {
          "name": "vertical",
          "description": "nếu cờ này được bật, stepper sẽ được hiện thị theo chiều dọc thay vì chiều ngang",
          "type": "boolean"
        },
        {
          "name": "onChange",
          "description": "sự kiện được gọi khi giá trị thay đổi, với data có dạng (value: Number, mode: String) => void",
          "type": "event"
        }
      ],
      "references": [
        {
          "name": "stepper - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/advance/form/stepper"
        }
      ]
    },
    {
      "name": "steps",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\nComponent `steps` dùng để tạo các bước trên multi-step form.\n\n"
      },
      "attributes": [
        {
          "name": "className",
          "description": "Custom class cho component",
          "type": "string"
        },
        {
          "name": "style",
          "description": "Custom inline style cho component",
          "type": "string"
        },
        {
          "name": "direction",
          "description": "Hướng của steps menu",
          "type": "'horizontal' | 'vertical'"
        },
        {
          "name": "activeIndex",
          "description": "Index của step hiện tại",
          "type": "number | null"
        },
        {
          "name": "failIndex",
          "description": "Index của step bị bỏ qua, step chưa hoàn thành hoặc lỗi",
          "type": "number | null"
        },
        {
          "name": "items",
          "description": "Danh sách các step. Bạn có thể truyền title hoặc description rỗng và sử dụng custom slot để chỉnh sửa item như ví dụ trên",
          "type": "Array<{ title?: string; description?:string }>"
        },
        {
          "name": "inactiveColor",
          "description": "Màu của line và dot khi step inactive",
          "type": "string"
        },
        {
          "name": "activeColor",
          "description": "Màu của line và dot khi step active",
          "type": "string"
        },
        {
          "name": "dotErrorColor",
          "description": "Màu của dot khi step được đánh dấu error(index === failIndex)",
          "type": "string"
        },
        {
          "name": "dotSize",
          "description": "Size của dot",
          "type": "string"
        },
        {
          "name": "reverseVertical",
          "description": "Đảo ngược hướng của các vertical steps theo chiều bắt đầu từ dưới lên trên",
          "type": "boolean"
        }
      ],
      "references": [
        {
          "name": "steps - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/advance/form/steps"
        }
      ]
    },
    {
      "name": "textfield",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\n- `textfield` là component trong [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui) với chức năng tương tự như thẻ [input](/docs/component/form/input) nhưng hỗ trợ thêm label, icon và một số tính năng mở rộng về giao diện.\n- Để sử dụng `textfield`, bạn cần phải cài [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui) từ version `0.0.18` trở lên.\n\n"
      },
      "attributes": [
        {
          "name": "labelCls",
          "description": "Custom class cho thẻ label",
          "type": "string"
        },
        {
          "name": "labelShowBadge",
          "description": "Hiển thị badge trên label",
          "type": "boolean"
        },
        {
          "name": "labelIcon",
          "description": "Icon type hiển thị trên label, bạn có thể tim thêm các icon type tại ",
          "type": "string"
        },
        {
          "name": "labelIconColor",
          "description": "Mã màu cho icon trên label",
          "type": "string"
        },
        {
          "name": "labelHelperText",
          "description": "Helper text hiển thị bên dưới labelText",
          "type": "string"
        },
        {
          "name": "labelText",
          "description": "Nội dung của label",
          "type": "string"
        },
        {
          "name": "iconRight",
          "description": "Type của icon hiển thị bên phải input",
          "type": "string"
        },
        {
          "name": "iconLeft",
          "description": "Type của icon hiển thị bên trái input",
          "type": "string"
        },
        {
          "name": "iconColor",
          "description": "Mã màu cho icon trên input",
          "type": "string"
        },
        {
          "name": "shape",
          "description": "Kiểu border radius của input. Hỗ trợ rounded hoặc pill. Mặc định là rounded",
          "type": "string"
        },
        {
          "name": "loading",
          "description": "Hiển thị loading skeleton cho textfield",
          "type": "boolean"
        },
        {
          "name": "hasError",
          "description": "Khi giá trị là true, input sẽ có viền màu đỏ (mã #ff424f), và xuất hiện icon thông báo lỗi",
          "type": "boolean"
        },
        {
          "name": "errorMsg",
          "description": "Hiển thị thông báo lỗi bên dưới input, cần khai báo thêm hasError=true",
          "type": "string"
        },
        {
          "name": "errorIconColor",
          "description": "Màu của icon lỗi",
          "type": "string"
        },
        {
          "name": "inputCls",
          "description": "Custom class cho input",
          "type": "string"
        },
        {
          "name": "className",
          "description": "Custom class cho textfield",
          "type": "string"
        },
        {
          "name": "type",
          "description": "Loại input. Hỗ trợ các giá trị tương tự thẻ ",
          "type": "string"
        },
        {
          "name": "password",
          "description": "Chỉ định loại input là password",
          "type": "boolean"
        },
        {
          "name": "name",
          "description": "Khai báo name khi được sử dụng trong , được sử dụng để lấy value cho form",
          "type": "string"
        },
        {
          "name": "value",
          "description": "Giá trị khởi tạo",
          "type": "string"
        },
        {
          "name": "placeholder",
          "description": "Nội dung hiển thị trước khi người dùng nhập giá trị của input",
          "type": "string"
        },
        {
          "name": "placeholderClass",
          "description": "Class name cho placeholder",
          "type": "string"
        },
        {
          "name": "placeholderStyle",
          "description": "Inline style cho placeholder",
          "type": "css style"
        },
        {
          "name": "disabled",
          "description": "Disable input",
          "type": "boolean"
        },
        {
          "name": "maxlength",
          "description": "Giới hạn số ký tự được nhập",
          "type": "number"
        },
        {
          "name": "focus",
          "description": "Tự động focus vào input",
          "type": "boolean"
        },
        {
          "name": "controlled",
          "description": "Khi giá trị là true, nội dung value của input sẽ được điều khiển hoàn toàn thông qua hàm setData trong file js",
          "type": "boolean"
        },
        {
          "name": "onInput",
          "description": "Sự kiện sẽ được gọi khi nội dung của input bị thay đổi, event.detail = { value: value }",
          "type": "event"
        },
        {
          "name": "onConfirm",
          "description": "Sự kiện sẽ được gọi khi nhấn nút submit (return/Nhập) , event.detail = { value: value }",
          "type": "event"
        },
        {
          "name": "onFocus",
          "description": "Sự kiện sẽ được gọi khi input được focus , event.detail = { value: value }",
          "type": "event"
        },
        {
          "name": "onBlur",
          "description": "Sự kiện sẽ được gọi khi input không được focus nữa , event.detail = { value: value }",
          "type": "event"
        }
      ],
      "references": [
        {
          "name": "textfield - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/advance/form/textfield"
        }
      ]
    },
    {
      "name": "avatar",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\nCompnent avatar dùng để hiển thị hình ảnh của user, tên, hoặc text giới thiệu.\n\n"
      },
      "attributes": [
        {
          "name": "size",
          "description": "Kích thước avatar (lg/md/xs)",
          "type": "string"
        },
        {
          "name": "shape",
          "description": "Các giá trị: \"circle\",\"standard\"",
          "type": "string"
        },
        {
          "name": "src",
          "description": "source hình ảnh",
          "type": "string"
        },
        {
          "name": "style",
          "description": "Disabled button",
          "type": "string"
        }
      ],
      "references": [
        {
          "name": "avatar - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/advance/navigation/avatar"
        }
      ]
    },
    {
      "name": "badge",
      "description": {
        "kind": "markdown",
        "value": "## Component đang được cập nhật. Vẫn chưa sẵn sàng để sử dụng\n\n"
      },
      "attributes": [
        {
          "name": "text",
          "description": "Nội dung bên trong badge.",
          "type": "string"
        },
        {
          "name": "dot",
          "description": "Hiển thị badge như là dot. (require: dot=true)",
          "type": "boolean"
        },
        {
          "name": "overflowCount",
          "description": "khi giá trị text là kiểu số và lớn hơn overflowCount, thì sẽ hiển thị ..., ngược lại hiển thị giá trị text",
          "type": "number"
        },
        {
          "name": "withArrow",
          "description": "hiển thị arrow cho badge",
          "type": "boolean"
        },
        {
          "name": "direction",
          "description": "điều hướng arrow (left,middle,right)",
          "type": "'left','middle','right'"
        },
        {
          "name": "stroke",
          "description": "hiển thị stroke cho badge",
          "type": "boolean"
        }
      ],
      "references": [
        {
          "name": "badge - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/advance/navigation/badge"
        }
      ]
    },
    {
      "name": "sidebar",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\n`sidebar`\n\n"
      },
      "attributes": [
        {
          "name": "activeItem",
          "description": "Chỉ định item được active theo index",
          "type": "number"
        },
        {
          "name": "activeChild",
          "description": "Chỉ định item con được active theo index, chỉ được khai báo khi item có children",
          "type": "number"
        },
        {
          "name": "width",
          "description": "Width của sidebar",
          "type": "string"
        },
        {
          "name": "className",
          "description": "Custom class cho sidebar",
          "type": "string"
        },
        {
          "name": "items",
          "description": "Mảng các đối tượng, bạn có thể xem cấu hình của items ở bên dưới",
          "type": "array"
        },
        {
          "name": "direction",
          "description": "Chỉ định direction cho các phần tử bên trong tab (title, image, icon). Hỗ trợ horizontal và vertical",
          "type": "string"
        },
        {
          "name": "animated",
          "description": "Có animation khi đổi content",
          "type": "boolean"
        },
        {
          "name": "swipeable",
          "description": "Cho phép sidebar có thể swipe dọc được",
          "type": "boolean"
        },
        {
          "name": "sidebarActiveTextColor",
          "description": "Màu của text khi sidebar item được active",
          "type": "string"
        },
        {
          "name": "sidebarInactiveTextColor",
          "description": "Màu của text khi sidebar item không active",
          "type": "string"
        },
        {
          "name": "sidebarActiveBgColor",
          "description": "Màu nền của item khi sidebar item được active",
          "type": "string"
        },
        {
          "name": "sidebarInactiveBgColor",
          "description": "Màu nền của item khi sidebar item không active",
          "type": "string"
        },
        {
          "name": "sidebarActiveIconColor",
          "description": "Màu của icon khi được active",
          "type": "string"
        },
        {
          "name": "sidebarInactiveIconColor",
          "description": "Màu của icon khi không active",
          "type": "string"
        },
        {
          "name": "sidebarlineColor",
          "description": "Màu của sidebar line khi item đó được active và sidebarlineShow=true",
          "type": "string"
        },
        {
          "name": "sidebarlineShow",
          "description": "Hiển thị line bên trái cho item được active",
          "type": "boolean"
        },
        {
          "name": "onItemClick",
          "description": "Sự kiện được gọi khi bấm vào item, với data có dạng: (index: number) => void",
          "type": "event"
        },
        {
          "name": "onChildClick",
          "description": "Sự kiện được gọi khi bấm vào child, với data có dạng: (parentIndex: number, index: number) => void",
          "type": "event"
        }
      ],
      "references": [
        {
          "name": "sidebar - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/advance/navigation/sidebar"
        }
      ]
    },
    {
      "name": "tabs",
      "description": {
        "kind": "markdown",
        "value": "## Giới thiệu\n\n`tabs` được sử dụng khi bạn cần hiển thị nội dung với 2 thành phần là thanh tab bar ở trên đầu và tab content bên dưới\n\n"
      },
      "attributes": [
        {
          "name": "className",
          "description": "Custom class cho tabs",
          "type": "string"
        },
        {
          "name": "activeCls",
          "description": "Class cho tab đang được active",
          "type": "string"
        },
        {
          "name": "tabBarCls",
          "description": "Custom class cho thanh tab bar",
          "type": "string"
        },
        {
          "name": "tabBarUnderlineColor",
          "description": "Màu underline của tab khi được active",
          "type": "string"
        },
        {
          "name": "tabBarActiveTextColor",
          "description": "Màu của text khi tab được active",
          "type": "string"
        },
        {
          "name": "tabBarInactiveTextColor",
          "description": "Màu của text khi tab không active",
          "type": "string"
        },
        {
          "name": "tabBarSubTextColor",
          "description": "Màu của sub text khi không active",
          "type": "string"
        },
        {
          "name": "tabBarActiveSubTextColor",
          "description": "Màu của sub text khi active",
          "type": "string"
        },
        {
          "name": "tabBarBackgroundColor",
          "description": "Màu nền của tab bar",
          "type": "string"
        },
        {
          "name": "tabBarActiveIconColor",
          "description": "Màu của icon khi được active",
          "type": "string"
        },
        {
          "name": "tabBarInactiveIconColor",
          "description": "Màu của icon khi không active",
          "type": "string"
        },
        {
          "name": "iconSize",
          "description": "Kích thước của icon, dùng khi tab có icon",
          "type": "number"
        },
        {
          "name": "swipeable",
          "description": "Cho phép tabs có thể swipe được",
          "type": "boolean"
        },
        {
          "name": "tabs",
          "description": "Mảng các đối tượng tab, bạn có thể xem cấu hình của tab ở bên dưới",
          "type": "array"
        },
        {
          "name": "activeTab",
          "description": "Chỉ định tab được active theo index",
          "type": "number"
        },
        {
          "name": "animation",
          "description": "Có animation khi đổi tab",
          "type": "boolean"
        },
        {
          "name": "duration",
          "description": "Khoảng thời gian để đổi tab content, chỉ có hiệu lực khi swipeable=true",
          "type": "number"
        },
        {
          "name": "hasSubTitle",
          "description": "Hiển thị sub title",
          "type": "boolean"
        },
        {
          "name": "tabsName",
          "description": "Được dùng như là id của tabs",
          "type": "string"
        },
        {
          "name": "tabBarUnderlineWidth",
          "description": "Width của underline",
          "type": "string"
        },
        {
          "name": "tabBarUnderlineHeight",
          "description": "Width của underline",
          "type": "string"
        },
        {
          "name": "tabContentHeight",
          "description": "Chiều cao của tab content, có hiệu lực khi swipeable=true",
          "type": "string"
        },
        {
          "name": "stickyBar",
          "description": "Chỉ định position của tab bar là sticky",
          "type": "boolean"
        },
        {
          "name": "onTabClick",
          "description": "Sự kiện được gọi khi bấm vào tab, event.detail = { index, tabsName }",
          "type": "event"
        },
        {
          "name": "onChange",
          "description": "Sự kiện được gọi khi đổi tab, event.detail = { index, tabsName }",
          "type": "event"
        }
      ],
      "references": [
        {
          "name": "tabs - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/advance/navigation/tabs"
        }
      ]
    },
    {
      "name": "hiệu",
      "description": {
        "kind": "markdown",
        "value": "## Cài đặt\n\nĐể cài đặt Tini UI, bạn sử dụng lệnh:\n\n```bash title=\"Với npm\"\n$ npm install @tiki.vn/tini-ui --save\n```\n\n```bash title=\"Hoặc yarn\"\n$ yarn add @tiki.vn/tini-ui\n```\n\nKhi bạn cài `tini-ui` thì đã bao gồm `tini-style` trong đó, tuy nhiên bạn hoàn toàn có thể cài tini-style độc lập, chi tiết bạn có thể xem [tại đây](/docs/component/advance/styling/concept/install)\n\n\n"
      },
      "attributes": [],
      "references": [
        {
          "name": "hiệu - Tiki Developers Reference",
          "url": "https://developers.tiki.vn/docs/component/advance/introduce"
        }
      ]
    }
  ]
}