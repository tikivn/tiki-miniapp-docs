(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{829:function(n,a){n.exports={content:["article",["p","Trong một dự án, file ",["code","app.json"]," sẽ được dùng để cấu hình cho một ứng dụng Tiki MiniApp. Nội dung cấu hình sẽ được áp dụng cho việc quản lý các pages và path tới các page trong ứng dụng, hay cấu hình giao diện cho app như title, tabBar, ..."],["p","Dưới đây là ví dụ của một ",["code","app.json"]," với một vài cấu hình thông dụng:"],["pre",{lang:"json",highlighted:'<span class="token punctuation">{</span>\n  <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">"pages/tabBar/API/index"</span><span class="token punctuation">,</span>\n    <span class="token string">"pages/tabBar/component/index"</span><span class="token punctuation">,</span>\n    <span class="token string">"pages/component/view/index"</span><span class="token punctuation">,</span>\n    <span class="token string">"pages/component/scrollview/index"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">"window"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"defaultTitle"</span><span class="token operator">:</span> <span class="token string">"My App"</span><span class="token punctuation">,</span>\n    <span class="token property">"titleBarColor"</span><span class="token operator">:</span> <span class="token string">"#fff"</span><span class="token punctuation">,</span>\n    <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#F5F7FC"</span><span class="token punctuation">,</span>\n    <span class="token property">"allowsBounceVertical"</span><span class="token operator">:</span> <span class="token string">"NO"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">"tabBar"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"items"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> \n        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"API"</span><span class="token punctuation">,</span> \n        <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/tabBar/API/index"</span><span class="token punctuation">,</span>\n        <span class="token property">"icon"</span><span class="token operator">:</span> <span class="token string">"images/icon_API.png"</span><span class="token punctuation">,</span>\n        <span class="token property">"activeIcon"</span><span class="token operator">:</span> <span class="token string">"images/icon_API_HL.png"</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> \n        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Components"</span><span class="token punctuation">,</span> \n        <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/tabBar/component/index"</span><span class="token punctuation">,</span>\n        <span class="token property">"icon"</span><span class="token operator">:</span> <span class="token string">"images/icon_component.png"</span><span class="token punctuation">,</span>\n        <span class="token property">"activeIcon"</span><span class="token operator">:</span> <span class="token string">"images/icon_component_HL.png"</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code",'{\n  "pages": [\n    "pages/tabBar/API/index",\n    "pages/tabBar/component/index",\n    "pages/component/view/index",\n    "pages/component/scrollview/index",\n  ],\n  "window": {\n    "defaultTitle": "My App",\n    "titleBarColor": "#fff",\n    "backgroundColor": "#F5F7FC",\n    "allowsBounceVertical": "NO"\n  },\n  "tabBar": {\n    "items": [\n      { \n        "name": "API", \n        "pagePath": "pages/tabBar/API/index",\n        "icon": "images/icon_API.png",\n        "activeIcon": "images/icon_API_HL.png"\n      },\n      { \n        "name": "Components", \n        "pagePath": "pages/tabBar/component/index",\n        "icon": "images/icon_component.png",\n        "activeIcon": "images/icon_component_HL.png"\n      }\n    ]\n  }\n}']],["h1","Cấu hình app.json"],["table",["thead",["tr",["th","Property"],["th","Type"],["th","Required"],["th","Description"]]],["tbody",["tr",["td","pages"],["td","string[]"],["td","Yes"],["td","Đường dẫn tương đối tới các pages"]],["tr",["td","window"],["td","Object"],["td","No"],["td","Cấu hình hành vi của window chưa page"]],["tr",["td","tabBar"],["td","Object"],["td","No"],["td","Cấu hình TabBar ở dưới của một page"]]]],["h2","pages"],["p","Đây là cấu hình giúp cho MiniApp Framework xác định được các pages và đường dẫn tới các files của page. Khi định nghĩa không cần xác định đuôi của file, framework sẽ tự động tìm kiếm file .json, .js, .jsx và .style dựa trên page path được quy định."],["p",["strong","Lưu ý:"]," "],["ul",["li",["p","Các pages không được quy định ở đây sẽ không được bundle khi app được build. Việc chuyển tới một page thường bị lỗi có thể do quên trong việc quy định page ở đây."]],["li",["p","Item đầu tiên trong array sẽ được chọn làm trang khởi tạo khi app được mở lên. Nên cần lưu ý khi thay đổi thứ tự của item đầu tiên."]]],["p","Giả sử project có cấu trúc thư mục như sau:"],["pre",{lang:"bash",highlighted:'- miniapp-project/                      \n <span class="token operator">|</span>- src/                      \n   <span class="token operator">|</span>- pages/                   \n     <span class="token operator">|</span>- index/                  \n     <span class="token operator">|</span>  index.js               \n     <span class="token operator">|</span>  index.json             \n     <span class="token operator">|</span>  index.jsx              \n     <span class="token operator">|</span>  index.style              \n   <span class="token operator">|</span>  app.js                   \n   <span class="token operator">|</span>  app.json                 \n   <span class="token operator">|</span>  app.style                 \n <span class="token operator">|</span>  package.json              '},["code","- miniapp-project/                      \n |- src/                      \n   |- pages/                   \n     |- index/                  \n     |  index.js               \n     |  index.json             \n     |  index.jsx              \n     |  index.style              \n   |  app.js                   \n   |  app.json                 \n   |  app.style                 \n |  package.json              "]],["p","Cấu hình để framework có thể load được ",["code","page/index/index"]," như sau:"],["pre",{lang:"json",highlighted:'<span class="token punctuation">{</span>\n  <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">"pages/index/index"</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>'},["code",'{\n  "pages": [\n    "pages/index/index"\n  ]\n}']],["h2","window"],["p","Đây là cấu hình dùng để quy định cách hiển thị và hành vi của StatusBar, NavigationBar, Titles và window background colors."],["table",["thead",["tr",["th","Property"],["th","Type"],["th","Default Value"],["th","Description"]]],["tbody",["tr",["td","defaultTitle"],["td","string"],["td",'""'],["td","Title mặc định của page."]],["tr",["td","pullRefresh"],["td","string"],["td",'"YES"'],["td","Xác định xem có cho phép pull down to refrehs hay không ? ",["strong","Lưu ý"],": cấu hình này chỉ có ý nghĩa khi ",["code","allowsBounceVertical"]," = ",["code","YES"]]],["tr",["td","allowsBounceVertical"],["td","string"],["td",'"YES"'],["td","Xác định cho phép kéo màn hình vượt quá size của window hay không?"]],["tr",["td","transparentTitle"],["td","string"],["td",'"none"'],["td","Cấu hình thuộc tính trong suốt của navigation bar. Hỗ trợ 3 giá trị ",["code","none"]," - có màu. ",["code","always"]," - trong suốt. ",["code","auto"]," sẽ tự động chuyển giữa trong suốt và có màu tuỳ theo vị trí scroll trên màn hình."]],["tr",["td","titleBarColor"],["td","HexColor"],["td",'"#FFFFFF"'],["td","Quy định màu nền của navigation bar."]],["tr",["td","backgroundColor"],["td","HexColor"],["td",'"#FFFFFF"'],["td","Quy định màu nền mặc định của page."]]]],["p","Ví dụ:"],["pre",{lang:"json",highlighted:'<span class="token punctuation">{</span>\n  <span class="token property">"window"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"defaultTitle"</span><span class="token operator">:</span> <span class="token string">"My App"</span><span class="token punctuation">,</span>\n    <span class="token property">"titleBarColor"</span><span class="token operator">:</span> <span class="token string">"#fff"</span><span class="token punctuation">,</span>\n    <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#F5F7FC"</span><span class="token punctuation">,</span>\n    <span class="token property">"allowsBounceVertical"</span><span class="token operator">:</span> <span class="token string">"NO"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code",'{\n  "window": {\n    "defaultTitle": "My App",\n    "titleBarColor": "#fff",\n    "backgroundColor": "#F5F7FC",\n    "allowsBounceVertical": "NO"\n  }\n}']],["h2","tabBar"],["p","Nếu ứng dụng có sử dụng Tab Bar, bạn có thể dùng cấu hình này để quy định cách hiển thị cũng như hành vi của Tab Bar."],["table",["thead",["tr",["th","Property"],["th","Type"],["th","Default Value"],["th","Description"]]],["tbody",["tr",["td","textColor"],["td","HexColor"],["td",'"#000000"'],["td","Quy định màu sắc của text trong tab bar item."]],["tr",["td","selectedColor"],["td","HexColor"],["td",'"#000000"'],["td","Màu sắc của text trong tab bar item khi được lựa chọn."]],["tr",["td","backgroundColor"],["td","HexColor"],["td",'"#FFFFFF"'],["td","Màu nền của tab bar."]],["tr",["td","items"],["td","Array"],["td","required"],["td","Cấu hình từng item trong tab bar."]]]],["p","Với mỗi tab bar item có thể cấu hình với các thuộc tính sau:"],["table",["thead",["tr",["th","Property"],["th","Type"],["th","Default Value"],["th","Description"]]],["tbody",["tr",["td","pagePath"],["td","String"],["td","required"],["td","Đường dẫn tới page."]],["tr",["td","name"],["td","String"],["td","required"],["td","Tên hiển thị của item."]],["tr",["td","icon"],["td","String"],["td","null"],["td","Đường dẫn tới icon khi item chưa được chọn."]],["tr",["td","activeIcon"],["td","String"],["td","null"],["td","Đường dẫn tới icon khi item được chọn."]]]],["p","Để hiển thị tối ưu, bạn nên chọn hình cho icon với kích cỡ 60x60 px."],["p","Ví dụ cấu hình ",["code","tabBar"]," trong ",["code","app.json"],":"],["pre",{lang:"json",highlighted:'<span class="token punctuation">{</span>\n  <span class="token property">"tabBar"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"items"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> \n        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"API"</span><span class="token punctuation">,</span> \n        <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/tabBar/API/index"</span><span class="token punctuation">,</span>\n        <span class="token property">"icon"</span><span class="token operator">:</span> <span class="token string">"images/icon_API.png"</span><span class="token punctuation">,</span>\n        <span class="token property">"activeIcon"</span><span class="token operator">:</span> <span class="token string">"images/icon_API_HL.png"</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> \n        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Components"</span><span class="token punctuation">,</span> \n        <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/tabBar/component/index"</span><span class="token punctuation">,</span>\n        <span class="token property">"icon"</span><span class="token operator">:</span> <span class="token string">"images/icon_component.png"</span><span class="token punctuation">,</span>\n        <span class="token property">"activeIcon"</span><span class="token operator">:</span> <span class="token string">"images/icon_component_HL.png"</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code",'{\n  "tabBar": {\n    "items": [\n      { \n        "name": "API", \n        "pagePath": "pages/tabBar/API/index",\n        "icon": "images/icon_API.png",\n        "activeIcon": "images/icon_API_HL.png"\n      },\n      { \n        "name": "Components", \n        "pagePath": "pages/tabBar/component/index",\n        "icon": "images/icon_component.png",\n        "activeIcon": "images/icon_component_HL.png"\n      }\n    ]\n  }\n}']]],meta:{order:10,category:{"vi-VN":"Cấu hình ứng dụng","en-US":"Configuring MiniApp"},title:{"vi-VN":"Cấu hình chung","en-US":"Global Configuration"},filename:"docs/framework/config/app.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h1",href:"#Cấu-hình-app.json",title:"Cấu hình app.json"},"Cấu hình app.json"]],["li",["a",{className:"bisheng-toc-h2",href:"#pages",title:"pages"},"pages"]],["li",["a",{className:"bisheng-toc-h2",href:"#window",title:"window"},"window"]],["li",["a",{className:"bisheng-toc-h2",href:"#tabBar",title:"tabBar"},"tabBar"]]]}}}]);