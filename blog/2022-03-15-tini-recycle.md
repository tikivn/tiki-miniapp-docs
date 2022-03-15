# Tini Recycle Lib (Phần 1)

Chào các bạn, mình là **YiYoYa** đây. Vậy là đã gần một năm kể từ khi mình bắt đầu dùng Tini App. Mình thấy Tini App tiết kiệm thời gian khá nhiều để bạn phát triển một ứng dụng, từ bước setup môi trường, code cho tới triển khai nó lên Tiki App. Tuy nhiên, do là một framework mới nên sẽ còn rất nhiều thiếu sót và các thư viện hỗ trợ cũng hạn chế. Vì vậy, hôm nay mình sẽ hướng dẫn các bạn thư viện `tini-recycle` để tăng tốc độ code của bạn cho một dự án lớn.

## I. Vì sao sử dụng `tini-recycle`
Bây giờ, các bạn xem 2 code mẫu bên dưới
```js
// page1/index.js
Page({
    data: { user: null, loading: true },
    async onLoad() {
        this.setData({ loading: true });
        let user = await getCurrentUser();
        if (!user) user = await this.login();
        this.setData({ user, loading: false });
    },
    async login() {
        // Logic To Login
    },
});
```
```js
// page2/index.js
Page({
    data: { user: null, loading: true },
    async onLoad() {
        this.setData({ loading: true });
        let user = await getCurrentUser();
        if (!user) user = await this.login();
        this.setData({ user, loading: false });
    },
    async login() {
        // Logic To Login
    },
});
```

Các bạn có thể thấy, 2 page không khác nhau lắm về flow login của user nhưng phải lặp lại 2 lần. Các bạn có thể tách các `function login` để sử dụng lại. Tuy nhiên, phần `onLoad` các bạn không có cách nào tách ra được vì có các method như `this.setData`.
> Vậy hướng giải quyết là gì? `Tini Recycle` sẽ giúp bạn giải quyết vấn đề này

## II. Sử dụng `Tini Recycle` như thế nào

**1. Cài đặt**
    
```sh
yarn add @yiyoya/tini-recycle
Hoặc
npm install --save @yiyoya/tini-recycle
```

**2. Basic Code**
```js
import { $page } from "@yiyoya/tini-recycle";

const authHook = () => [
    {
        data: { user: null, loading: true },
        async onLoad() {
            this.setData({ loading: true });
            let user = await getCurrentUser();
            if (!user) user = await this.login();
            this.setData({ user, loading: false });
        },
        async login() {
            // Logic To Login
        },
    },
];

$page(
    authHook(),
    {
        data: {
            // others state
        },
        onTap() {
            console.log(this.data.user, this.data.loading)
            // Return user and loading data
        }
    }
);
```
 
**3. Các method**

```ts
import { $page, $component, hooks } from "@yiyoya/tini-recycle"
$page(...hooks: Hook[])
$component(...hooks: Hook[])

type Config = TiniPageConfig | TiniComponentConfig;
type Hook = Config | [Hook] | (config: Config) => Hook
```

## III. Các hooks thường dùng

**Cài đặt**
```js
import { hooks } from "@yiyoya/tini-recycle"
```

**hooks.hookLoadMore**
*Chỉ support cho $page*
```ts
type Option = {
    throttleWait: number, // default 50 - Nhận sự kiện scroll mỗi {throttleWait} giây
    threshold: number, // default 1000 - Nhận sự kiện khi end of scroll trước {threshold}px
    disabled: boolean, // default fale - Stop sự kiện loadmore
    methodName: string, // default "onLoadMore" - Tên method được gọi khi cuộn xuống dưới cùng
}
hooks.hookLoadMore: (option: Option) => any
```

Ví dụ
```js
$page(
    hooks.hookLoadMore({ methodName: 'onLoadMore', throttleWait: 50, threshold: 300 }),
    {
        data: {
            items: [],
        },
        page: 1,
        async onLoadMore() {
            const { items, page } = await api.getItems({ page: this.page });
            this.page = page;
            this.setData({ items: [...this.data.items, ...items] });
        }
    }
)
```

**hooks.hookQueryParser**
Hook giúp chuyển giá trị `query` trong `onLoad` từ string sang `Object`
Chi tiết: https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle#onload

```ts
() => any
```
```js
$page(
    hooks.hookQueryParser(),
    {
        onLoad(query) {
            console.log(typeof query); // Object not string
        },
    }
);
```

**hooks.hookMapPropsToMethods**
```ts
(mapping: Record<[methodName: string],[propName: string]>) => any
```
Ví dụ
```js
$component(
    hooks.hookMapPropsToMethods(["handleLogin", "onLogin"]),
    {
        onTap() {
            this.handleTap(); // === this.props.onLogin()
        },
    }
);
```
**hooks.hookMapPropsToData**
```ts
type Data = Record<string,any>;
type Props = Record<string,any>;
((props: Props, data: Data) => [newData: Data]) => any
```
Ví dụ
```js
$component(
    hooks.hookMapPropsToData(function (props) {
        return { id: props.id.toString() };
    }),
    {
        onTap() {
            console.log(this.data.id);
        },
    }
);
```

## IV. Global Hooks
Ở trên các bạn sẽ sử dụng các hook cho từng page. Ví dụ `hooks.hookQueryParser()` gần như page nào cũng sử dụng. Vậy cách nào để apply nó  cho tất cả page
```js
// app.js
$page.addBeforeAll(hooks.hookQueryParser());
```
Ngoài ra `Tini Recycle` còn cung cấp các method global hook khác như
```js
// app.js
$page.addBeforeAll(hook: Hook);
$page.addAfterAll(hook: Hook);
$component.addBeforeAll(hook: Hook);
$component.addAfterAll(hook: Hook);
```

## V. Tổng kết
Ở trên **YiYoYa** đã giới thiệu qua về `Tini Recycle`, các hook cơ bản cho một dự án Tini App. Ở bài viết sau mình sẽ giới thiệu cho các bạn một số addvance hook để  các bạn có thể code pro hơn nhé. 
Ngoài ra các bạn có nhu cầu sử dụng hook nào khác thì đừng ngại để dưới comment nhé. **Yiyoya** sẽ hỗ trợ bạn hết mình 😘😘😘

Github: https://github.com/yiyoya/tini-recycle
