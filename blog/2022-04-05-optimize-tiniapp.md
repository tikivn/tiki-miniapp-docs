---
title: Tối ưu hoá Tini App
---

Tối ưu hoá luôn là một trong những vấn đề quan trọng nhất khi xây dựng bất kỳ ứng dụng nào. Nếu ứng dụng tải càng nhanh, sử dụng càng mượt, thì sẽ đem được trải nghiệm tốt cho người sử dụng, giúp ứng dụng của bạn sẽ thu hút và giữ chân được nhiều người dùng hơn.

Quá trình tối ưu hoá có thể tốn khá nhiều thời gian và công sức, bao gồm cả việc làm thế nào ứng dụng được tải nhanh nhất, UI/UX mang lại trải nghiệm tốt nhất cũng như đảm bảo ứng dụng không bị chậm trong quá trình sử dụng,...Trong quá trình xây dựng Tini App, đội ngũ phát triển đã cố gắng tối ưu các thành phần bên dưới như framework, jsAPI, components,... để đảm bảo các ứng dụng Tini App được tải và vận hành tốt nhất có thể. Tuy nhiên, việc tối ưu ứng dụng còn cần sự góp sức từ bản thân các nhà phát triển app. Trong phạm vi bài viết này, mình sẽ chia sẻ với các bạn một số kinh nghiệm để tăng tốc độ của Tini App. 🚀

### Giảm thiểu kích thước của App

Khi một ứng dụng Tini App được phát hành trên [Kho ứng dụng](https://tiki.vn/apps/com.tini.appstore) của Tiki. Mặc định sẽ không được đính kèm vào trong app của Tiki, mà chỉ được tải về khi người dùng truy cập vào ứng dụng đó, việc này sẽ đảm bảo được kích thước của app Tiki sẽ nhẹ hơn vì ứng dụng chỉ được tải khi thực sự cần thiết. Do đó, việc app của bạn có kích thước càng nhẹ, thì sẽ tải càng nhanh.

Một Tini App có giới hạn dung lượng là 5Mb, bạn có thể yêu cầu tăng kích thước lên nếu cần thiết, tuy nhiên sẽ thông qua quá trình kiểm định của team để được duyệt. Nhưng như mình nói từ trước, Tini App có kích thước càng nhẹ, thì sẽ được load càng nhanh.

Các thành phần được tải về trong một Tini App mình sẽ chia thành 2 thành phần cơ bản: Code để chạy và Tài nguyên của ứng dụng.

- Code để chạy bao gồm: code trong file js, txml, tcss, sjs và các thư viện trong node_modules (nếu có)

  Để tối ưu hoá dung lượng code để chạy, bạn chỉ cần tuân theo nguyên tắc: chỉ dùng nếu thực sự cần thiết, không dùng thì xoá những phần thừa đi.
  Ví dụ: sẽ không cần phải cài package [momentjs](https://momentjs.com/) chỉ để format ngày tháng, hay chỉ sử dụng các hàm như isEmpty mà phải cài cả package [lodash](https://lodash.com/) vào. Đây là những hàm mà bạn hoàn toàn có thể tự viết hoặc tham khảo trên mạng, việc loại bỏ các thư viện/code không cần thiết không chỉ giúp code bạn nhẹ hơn mà còn giúp bạn hiểu rõ hơn về code và cách làm của hàm đó. Tất nhiên bù lại nó sẽ tốn thời gian hơn để bạn phải tự làm điều đó, nhưng đối với mình, đó là sự đánh đổi đáng giá. Hãy nhớ: càng nhẹ càng tốt 😄

  Phía framework Tini App cũng sẽ đảm bảo quá trình minify source code để làm giảm dung lượng code của các bạn lại, và trong tương lai, có thể bọn mình sẽ hỗ trợ thêm các cách để lazy load các page để làm giảm dung lượng file đầu tiên được load tới mức nhanh nhất có thể.

- Các tài nguyên bao gồm: hình ảnh, video, audio, json, font,...

  Trong các tài nguyên trên, có vẻ hình ảnh là tài nguyên thường được sử dụng nhiều nhất. Nếu bạn nào đã làm qua với component [image](/docs/component/basic/media/image) thì sẽ biết có 3 cách để khai báo src cho hình: dùng đường dẫn trong app, dùng base 64 và dùng link CDN. Trong đó mình khuyến khích không nên dùng ảnh base 64 cho các hình có dung lượng lớn, ngoài ra, nếu trong app bạn sử dụng một hình mà hầu như có rất ít sự thay đổi dù có nâng lên version và app của bạn thường xuyên có sự thay đổi version, thì bạn nên dùng một CDN riêng để lưu hình ảnh đó. Bởi vì các tài nguyên trong Tini App sẽ được lưu trữ trong CDN của Tiki, và mỗi lần app của bạn thay đổi version thì đường dẫn của file hình đó sẽ bị thay đổi theo version mới, điều đó dẫn đến không tối ưu về phía cache của app. Vì vậy, nếu bên bạn không có CDN, hoặc với những hình ảnh nhỏ gọn thì có thể bỏ vào app, còn không thì bạn nên tải ảnh đó lên CDN và dùng một link cố định.

  Đối với font, mặc định Tini App sẽ sử dụng font [Inter](/docs/design/styles/font) cho toàn bộ app. Việc thay đổi một font khác sẽ ảnh hưởng tới trả nghiệm tải app cũng như tăng dung lượng của app lên nếu các file font được đính kèm trong app. Nếu bạn có nhu cầu dùng font khác, bạn có thể xem jsAPI [loadFontFace](/docs/api/ui/font/load-font-face)

  Với các tài nguyên khác như video, audio, json,... bạn cũng nên cân nhắc về dung lượng của chúng để có thể dùng CDN hay bỏ vào app một cách hợp lý

### Tối ưu hình ảnh

Mình sẽ dành cả một phần để nói về tối ưu hình ảnh trong app, bởi vì hầu như hình ảnh xuất hiện rất nhiều chỗ và hầu như page nào cũng sẽ có hình. Việc tối ưu được hình ảnh sẽ mang đến những trải nghiệm đáng giá cho app của bạn.

#### Giảm dung lượng hình ảnh

Vâng, lại là giảm dung lượng. Mình lại phải nhắc đi nhắc lại từ này vì nó thật sự rất cần thiết. Hình ảnh và các tài nguyên càng nhẹ thì nó hiển thị càng nhanh, ngoài ra nó sẽ giúp tiết kiệm ...4G của người dùng :)

Có nhiều cách để giảm dung lượng của hình, bạn có thể giảm từ lúc xuất hình ra từ các công cụ như Photoshop, Illustrator hoặc sử dụng các công cụ miễn phí trên mạng như https://tinypng.com/ đối với các hình có định dạng jpeg, png hoặc webp. Phải nói là mình cực kỳ thích trang này, bởi nó cực kỳ hữu ích, bạn chỉ việc quăng hình của mình lên và bùm... dung lượng hình của bạn sẽ giảm đi một cách đáng kể 🔥 Nếu hình ảnh bạn không đòi hỏi sự trong suốt (transparent), bạn nên dùng ảnh dạng jpeg thay vì png, với định dạng webp, hiện tại phía Tini App chưa hỗ trợ tuy nhiên bọn mình sẽ cố gắng hỗ trợ trong thời gian tới. Đối với hình svg, bạn cũng có thể dùng trang này để giảm dung lượng: https://jakearchibald.github.io/svgomg/

#### Sử dụng CDN xịn xò

Như mình nói ở trên, các tài nguyên trong Tini App sẽ được lưu trữ trên CDN của Tiki, và phía Tiki CDN sẽ đảm bảo tài nguyên của bạn được cache và được nén với [gzip](https://developers.google.com/speed/docs/insights/EnableCompression). Tuy nhiên đối với các tài nguyên riêng của bạn, hãy nên dùng một CDN hỗ trợ cả cache và nén như gzip nhé

#### Sử dụng lazyload

Hãy lazyload hình nếu có thể, nó không chỉ giúp app bạn được load nhanh hơn, tiết kiệm dung lượng mạng mà có giảm thiểu số lượng bộ nhớ (memory) mà thiết bị phải dùng. Trong component image của Tini App đã hỗ trợ thuộc tính lazy-load, bạn có thể xem thêm [tại đây](/docs/component/basic/media/image#thu%E1%BB%99c-t%C3%ADnh). Tuy nhiên trong quá trình lazyload, khu vực hiển thị hình ảnh của bạn có thể sẽ bị trống mất một chỗ, điều này sẽ không thực sự tốt về mặt giao diện. Bạn có thể giải quyết bằng cách làm một skeleton hình ảnh với lazyload

```html
<image
  src="https://LINK_IMAGE"
  lazy-load="{{true}}"
  default-source="https://salt.tikicdn.com/ts/tiniapp/53/55/7f/61855c8b38d161f172616efc27783cdc.png"
/>
```

Cách làm ở đây là mình sẽ dùng một hình có dung lượng cực nhỏ để làm hình mặc định trong `default-source`, bạn có thể xem hình đó ở đây https://salt.tikicdn.com/ts/tiniapp/53/55/7f/61855c8b38d161f172616efc27783cdc.png. Với kích thước chỉ ~200B, nó hầu như sẽ được load ngay lập tức, và ngay khi hình trong `src` được tải xong, nó sẽ thay thế hình trong default-source, như vậy có thể đảm bảo cả việc lazyload hình và tránh tình trạng bị trống ở vùng hình ảnh chưa được tải xong

Một cách khác để bạn có thể làm với lazyload là kiểm tra tình trạng mạng của người dùng, nếu mạng chậm bạn có thể sử dụng các hình ảnh dung lượng nhỏ để thay thế, bạn có thể xem jsAPI getNetworkType [tại đây](/docs/api/device/network/get-network-type)

#### Giảm thiểu số lượng hình ảnh được tải cùng lúc

Quá nhiều hình ảnh được tải cùng lúc sẽ ảnh hưởng đến tốc độ tải app của bạn. Bạn có thể sử dụng cách thức lazyload mình nói ở trên để giảm thiểu hình ảnh được tải cùng lúc. Tuy nhiên vì một lý do nào đó mà bạn không muốn lazyload, thì bạn có thể sử dụng các phương pháp như infinite scroll để khi trang của bạn được cuộn xuống dưới thì mới tải thêm. Sẽ rất tốt nếu bạn có thể kết hợp cả infinite scroll và lazyload

### setData

setData là phương thức dùng để thay đổi dữ liệu (data) từ tầng logic (page/component) sang tới tầng view (txml) để giao diện có thể cập nhật lại. Việt setData không hợp lý có thể gây ra những lỗi không muốn về performance của app. Các lỗi dễ gặp nhất đối với setData là gửi quá nhiều dữ liệu xuống hoặc gọi nhiều setData cùng lúc.

#### Giảm thiểu dữ liệu truyền vào setData

Khi hàm setData được gọi, sẽ diễn ra quá trình serialize dữ liệu và một số xử lý bên dưới, do đó nếu dữ liệu quá lớn được truyền vào setData, có thể sẽ gây nghẽn quá trình truyền dữ liệu, làm ảnh hưởng đến quá trình render view.

Bạn nên hạn chế truyền dữ liệu quá lớn vào setData, đặc biệt là với các dữ liệu dạng danh sách (list), khi đó bạn có thể sử dụng các thủ thuật như lazyload, infinite scroll để lấy các data cần thiết thay vì một lượng lớn dữ liệu ngay từ đầu.

Ngoài ra, bạn có thể hàm `$spliceData` để có thể giảm số dữ liệu được truyền xuống. Thay vì truyền toàn bộ data, bạn chỉ cần truyền những dữ liệu bị thay đổi.

`$spliceData` nhận vào giá trị là `key: value`, trong đó `key` là một giá trị linh động, bạn có thể truyền vào vị trí của mảng, hoặc thuộc tính (property) của một đối tượng (object). Bạn có thể xem ở đoạn code bên dưới

```js
Page({
  data: {
    array: [1, 2, 3]
  },
  async loadMore() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([4, 5, 6]);
      }, 1000);
    });
  },
  async onLoad() {
    const newArray = await this.loadMore();

    // Không nên
    this.setData({ array: this.data.array.concat(newArray) });

    // Sử dụng với $spliceData
    this.$spliceData({
      [`array.${this.data.array.length - 1}`]: newArray
    });
  }
});
```

Ở ví dụ trên, ban đầu mình khởi tạo giá trị `data.array` là một mảng đơn giản với 3 phần tử, sau đó trong onLoad mình sẽ gọi thêm một async function loadMore để lấy thêm 3 phần tử nữa. Bạn có thể làm cách đơn giản là bỏ thêm data vào array ban đầu sau đó set toàn bộ data đó xuống, tuy nhiên nếu đây là một mảng phức tạp với rất nhiều phần tử và nhiều thuộc tính trong đó, kích thước dữ liệu truyền xuống sẽ tăng dần nếu bạn gọi loadMore nhiều lần. Với cách làm bên dưới, bạn sử dụng `$spliceData`, rồi truyền tên dữ liệu trong data, ở đây là `array`, kèm theo vị trí mà bạn muốn thay đổi, trong trường hợp này là mình muốn thay đổi biến array ở vị trí thứ 2 (bắt đầu từ 0), như vậy giá trị mới sẽ được thay đổi thành `array.2 = [4, 5, 6]`. Sau khi gọi xong, giá trị của `array` sẽ thành `[1, 2, 3, 4, 5, 6]`

Nếu chỉ có nhu cầu thay đổi một thuộc trong đối tượng, hoặc một phần tử nào đó trong mảng, bạn cũng có thể sử dụng setData theo cách sau:

```js
Page({
  data: {
    app: {
      name: 'Tini App',
      company: 'Tiki'
    },
    array: [
      {
        value: 0
      },
      {
        value: 1
      }
    ]
  },
  onLoad() {
    // 1. Đổi giá trị thuộc tính của đối tượng
    // Không nên
    this.setData({
      app: { ...this.data.app, country: 'Vietnam' }
    });
    // Chỉ thay đổi thuộc tính cần thiết
    this.setData({ 'app.country': 'Vietnam' });

    // 2. Đổi giá trị phần tử trong mảng
    // Không nên
    this.setData({
      array: this.data.array.map((item, index) =>
        index === 1 ? { value: 2 } : item
      )
    });
    // Chỉ đổi đúng vị trí của phần tử trong mảng
    this.setData({ 'array[1]': { value: 2 } });
  }
});
```

#### Giảm thiểu số lần gọi setData

Nếu bạn gọi setData quá nhiều lần cùng lúc, sẽ dẫn đến bị nghẽn khi truyền dữ liệu, đồng thời có thể gây ra tình trạng UI bị render nhiều lần, hoặc tệ hơn nữa là UI bị block lại, dẫn đến người dùng không thể tương tác trên app của bạn. Tình trạng này rất dễ xảy ra nếu bạn gọi setData trong các sự kiện page scroll hoặc swipe, khi đó sự phản hồi từ giao diện tới người có thể bị chậm trễ, gây ra những trải nghiệm không tốt.

Cách làm đơn giản là bạn hãy xử lý hết các logic trong một hàm rồi hãy gọi setData.
Dưới đây là một trường hợp bạn nên tránh khi phải gọi setData tới 2 lần

```js
Page({
  data: {
    counter1: 0,
    counter2: 0
  },
  onLoad() {
    const newCounter1 = this.data.counter1 + 1;
    this.setData({ counter1: newCounter1 });

    const newCounter2 = this.data.counter2 + 1;
    this.setData({ counter2: newCounter2 });
  }
});
```

Thay vào đó hãy gọi khi xử lý tất cả logic xong:

```js
Page({
  data: {
    counter1: 0,
    counter2: 0
  },
  onLoad() {
    const newCounter1 = this.data.counter1 + 1;
    const newCounter2 = this.data.counter2 + 1;
    this.setData({
      counter1: newCounter1,
      counter2: newCounter2
    });
  }
});
```

Trong trường hợp bạn cần gọi nhiều setData cùng lúc, hãy sử dụng `$batchedUpdates`

```js
Page({
  data: {
    counter: 0
  },
  plus() {
    setTimeout(() => {
      this.$batchedUpdates(() => {
        this.setData({
          counter: this.data.counter + 1
        });
        this.setData({
          counter: this.data.counter + 1
        });
      });
    }, 200);
  }
});
```

```html
<!-- pages/index/index.txml -->
<view> {{counter}} </view>
<button onTap="plus">+2</button>
```

Trong ví dụ trên, mỗi lần bấm vào button, giá trị counter sẽ tăng lên 2. Bởi vì `$batchedUpdates` sẽ kết hợp các setData thành một lần gọi duy nhất, tránh trường hợp setData bị gọi nhiều lần và UI không phải bị re-render quá nhiều

Ngoài việc giảm thiểu số lượng dữ liệu khi gọi setData hoặc tránh việc gọi setData liên tục nhiều lần, nếu page của bạn chứa nhiều component, và mỗi component thực hiện một logic riêng, khi việc setData chỉ dẫn đến sự thay đổi một component mà không phải toàn bộ, hãy cân nhắc mang setData và dữ liệu đó vào component, như vậy việc trigger re-render chỉ xảy ra ở trong component cần sự thay đổi đó. Bạn có thể sử dụng cách sau nếu cần gọi setData từ page tới component

```js title=component/index/index
Component({
  didMount() {
    this.$page.xxcomponent = this;
  }
});
```

```js title=page/index/index
Page({
  onPageScroll(e) {
    if (this.xxcomponent) {
      this.xxcomponent.setData({
        scrollTop: e.scrollTop
      });
    }
  }
});
```

Với cách làm trên, bạn chỉ việc gán component của bạn vào `$page` (page hiện tại) với giá trị là `this`, vậy là bạn có thể gọi các phương thức của component đó từ trong page, ví dụ ở trên là mình gọi setData vào component khi page scroll. Bạn có thể xem thêm về component object [ở đây](/docs/framework/component/object#component-instance-properties).
