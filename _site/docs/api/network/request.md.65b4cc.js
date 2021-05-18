(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{813:function(n,s){n.exports={content:["section",["h1","Giới thiệu"],["p",["strong","my.request"]," là API dùng để thực hiện các network request."],["p",["strong","Lưu ý:"]," ứng dụng của bạn sẽ được chạy trong môi trường cô lập thuần javascript nên sẽ không có các hàm gọi network thông thường như ",["code","fetch"]," hay ",["code","XMLHttpRequest"],". Để thực hiện gọi network bạn phải dùng qua ",["code","my.request"],". "],["h2","Lưu ý khi sử dụng"],["ul",["li",["p",["code","my.request"]," hiện chỉ hỗ trợ những request qua giao thức ",["strong","https"],"."]],["li",["p","Bạn cần phải cấu hình whitelist domain trước khi có thể gọi network tới domain đó. "]]],["h1","Sử dụng"],["h2","Sample Code"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>page<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>page__section<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>page__section__content<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>my<span class="token punctuation">.</span>request<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>JSON<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>page__section__buttons<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>loading <span class="token operator">?</span> <span class="token string">\'Loading...\'</span> <span class="token punctuation">:</span> <span class="token string">\'Query\'</span><span class="token punctuation">}</span></span> <span class="token attr-name">onPress</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>makeRequest<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Clear<span class="token punctuation">"</span></span> <span class="token attr-name">onPress</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>clear<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>   \n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>'},["code","<View style={styles.page}>\n  <View style={styles.page__section}>\n    <View style={styles.page__section__content}>\n      <Text>my.request</Text>\n      <Text>{JSON.stringify(data.response)}</Text>\n      <View style={styles.page__section__buttons}>\n        <Button title={data.loading ? 'Loading...' : 'Query'} onPress={makeRequest} />\n        <Button title=\"Clear\" onPress={clear} />\n      </View>\n    </View>   \n  </View>\n</View>"]],["pre",{lang:"js",highlighted:'<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  data<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    response<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    loading<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">makeRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    my<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      url<span class="token punctuation">:</span> <span class="token string">\'https://httpbin.org/post\'</span><span class="token punctuation">,</span>\n      method<span class="token punctuation">:</span> <span class="token string">\'POST\'</span><span class="token punctuation">,</span>\n      success<span class="token punctuation">:</span> <span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span> response<span class="token punctuation">,</span> loading<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span> response<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>'},["code","Page({\n  data: {\n    response: {},\n    loading: false,\n  },\n  makeRequest() {\n    this.setData({ loading: true });\n    my.request({\n      url: 'https://httpbin.org/post',\n      method: 'POST',\n      success: (response) => {\n        this.setData({ response, loading: false });\n      }\n    })\n  },\n  clear() {\n    this.setData({ response: {} })\n  }\n})"]]],meta:{order:30,category:{"vi-VN":"Network","en-US":"Network"},title:{"vi-VN":"my.request","en-US":"my.request"},filename:"docs/api/network/request.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h1",href:"#Giới-thiệu",title:"Giới thiệu"},"Giới thiệu"]],["li",["a",{className:"bisheng-toc-h2",href:"#Lưu-ý-khi-sử-dụng",title:"Lưu ý khi sử dụng"},"Lưu ý khi sử dụng"]],["li",["a",{className:"bisheng-toc-h1",href:"#Sử-dụng",title:"Sử dụng"},"Sử dụng"]],["li",["a",{className:"bisheng-toc-h2",href:"#Sample-Code",title:"Sample Code"},"Sample Code"]],["li",["a",{className:"bisheng-toc-h2",href:"#API-Params",title:"API Params"},"API Params"]],["li",["a",{className:"bisheng-toc-h2",href:"#Return-value",title:"Return value"},"Return value"]]],api:["section",["h2","API Params"],["p","Để cấu hình việc gọi network, bạn cần truyền object với các thuộc tính sau:"],["table",["thead",["tr",["th","Attributes"],["th","Type"],["th","Required"],["th","Description"]]],["tbody",["tr",["td","url"],["td","string"],["td","Yes"],["td","Đường dẫn muốn gọi tới."]],["tr",["td","headers"],["td","Object"],["td","No"],["td","Cấu hình headers khi thực hiện gọi network."]],["tr",["td","method"],["td","String"],["td","No"],["td","Phương thức gọi network. Mặc định sẽ là GET."]],["tr",["td","data"],["td","Object"],["td","No"],["td","Data kèm theo trong request."]],["tr",["td","timeout"],["td","Number"],["td","No"],["td","Request sẽ bị cancel sau khoảng thời gian timeout. Đơn vị là ms và mặc định là 30,000 (30s)"]],["tr",["td","dataType"],["td","String"],["td","No"],["td","Quy định format trả về sau request. Mặc định là JSON. Bạn có thể truyền text nếu muốn nhận raw data."]],["tr",["td","success"],["td","Function"],["td","No"],["td","Callback function khi việc gọi network thành công."]],["tr",["td","fail"],["td","Function"],["td","No"],["td","Callback function khi việc gọi network thất bại."]],["tr",["td","comlete"],["td","Function"],["td","No"],["td","Callback function khi việc gọi network kết thúc cho dù thành công hay thất bại."]]]],["h3","Callback function payload"],["p","TODO"],["h2","Return value"],["p","API trả về network request task. Bạn có thể thực hiện huỷ việc gọi network thông qua network request task."],["pre",{lang:"js",highlighted:'<span class="token keyword">const</span> task <span class="token operator">=</span> my<span class="token punctuation">.</span><span class="token function">reuqest</span><span class="token punctuation">(</span><span class="token punctuation">{</span> url<span class="token punctuation">:</span> <span class="token string">\'https://tiki.vn/api\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ntask<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","const task = my.reuqest({ url: 'https://tiki.vn/api' });\ntask.abort();"]]]}}}]);