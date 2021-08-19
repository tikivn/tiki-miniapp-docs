# Giới thiệu

Advanced component hay [Tini UI](https://github.com/tikivn/tini-ui) là bộ các components được build từ các components được cung cấp từ framework, với thiết kế dựa trên bộ [Design System](/docs/design/overview) của Tini App Team.

Trong Tini UI gồm 2 packages chính:
- tini-ui: cung cấp nhiều components giúp nhà phát triển có thể làm app được nhanh hơn
- tini-style: sử dụng các Design Token từ Tini UI Design System để xây dựng nên các class giúp bạn sử dụng tcss một các nhanh chóng và thuận tiện

## Cài đặt

Để cài đặt Tini UI, bạn sử dụng lệnh:

```bash title="Với npm"
$ npm install @tiki.vn/tini-ui --save
```

```bash title="Hoặc yarn"
$ yarn add @tiki.vn/tini-ui
```

Khi bạn cài `tini-ui` thì đã bao gồm `tini-style` trong đó, tuy nhiên bạn hoàn toàn có thể cài tini-style độc lập, chi tiết bạn có thể xem [tại đây](/docs/component/advance/styling/concept/install)


## Cách sử dụng

Sau khi cài đặt package tini-ui. Bạn cần khai báo trong file config `.json` của page hoặc component

```json title=index.json
{
  "usingComponents": {
    "avatar": "@tiki.vn/tini-ui/es/avatar/index"
  }
}
```

Sau đó bạn sử dụng tini-ui component như một component bình thường

```xml title=index.txml
<avatar name="Tini UI" size="lg" shape="circle" src="https://salt.tikicdn.com/ts/miniapp/d6/21/86/89cc2b8a2f930bb5f0f269c0374a3230.png"/>
/>
```
