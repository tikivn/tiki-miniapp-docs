---
order: 11
category:
    vi-VN: Thành phần nâng cao
    en-US: Advance components
title:
    vi-VN: popup
    en-US: popup
---

## Giới thiệu

Hiển thị popup menu

## Sử dụng

### Sample Code:

Khai báo components:

```json
{
    "defaultTitle": "Popup",
    "usingComponents": {
        "popup": "@tikivn/mini-ui/lib/popup/index"
    }
}
```

#### Shape: circle

_index.txml_

```xml
<view>
   <popup
      position="{{position}}"
      show="{{show}}"
      mask="{{mask}}"
      disableScroll
      zIndex="10"
      onClose="onCancel"
    >
    <view style="
      background:#fff,
      display:flex;
      width:{{(position==='right'||position=='left') ?  '250px': '100%' }};
      height:{{(position==='right'||position=='left') ?  '100%': '200px' }};
      justify-content:center;
      flex-direction:column;
      align-items:center
    ">
        <view style="padding:0 16px;text-align:center">{{title}}</view>
        <view style="
          display:flex;
          flex-direction:row;
          justify-content:space-between;
          aligh-items:center;
          margin-top:32px;
        ">
          <button
            onTap="onCancel"
            size="big"
            style="
              width:150px;
            "
            type="primary">Close</button>
        </view>
      </view>
    </popup>
</view>
```

Khai báo các button để mở các loại popup khác nhau

```xml
    <view class="button-wrapper">
      <button size="big" type="primary" data-popup="{{
        show:true,
        position:'top',
        mask:true,
        title: 'Click on mask to close popup',
        disableScroll:true
      }}"
        onTap="onTap"
      >OpenTop</button>
      <button size="big" type="primary" data-popup="{{
        show:true,
        position:'right',
        mask:true,
        disableScroll: false,
        title:'With mask, click on mask to close popup',
      }}"
        onTap="onTap"
      >OpenRight</button>
      <button
        onTap="onTap"
        size="big" type="primary" data-popup="{{
        show:true,
        position:'bottom',
      }}">OpenBottom</button>

      <button
        onTap="onTap"
        size="big" type="primary" data-popup="{{
        show:true,
        mask:true,
        title:'With mask, click on mask to close popup',
        disableScroll:true,
        position:'left',
      }}">OpenLeft</button>
    </view>
```

_index.js_

```js
Page({
    data: {
        show: false,
        position: "top",
        animation: true,
        mask: true,
        zIndex: 10,
        disableScroll: true,
    },
    onLoad() {},
    onOk() {
        this.setData({ show: false });
    },
    onCancel() {
        this.setData({ show: false });
    },
    onTap(e) {
        this.setData({ ...e.target.dataset.popup });
    },
});
```

_Result: With mask_

```__react
import top from '../../../theme/static/images/popup-top.png'
import bottom from '../../../theme/static/images/popup-bottom.png'
import right from '../../../theme/static/images/popup-right.png'
import left from '../../../theme/static/images/popup-left.png'

const RenderImage=()=>
    <div style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            widht:'100%',
            background:'#ccc',
            padding:'24px',
            borderRadius:'4px'
        }}>
        <img style={{maxWidth: 300}} alt="popup" src={top}/>
        <img style={{maxWidth: 300}} alt="popup" src={bottom}/>
        <img style={{maxWidth: 300}} alt="popup" src={right}/>
        <img style={{maxWidth: 300}} alt="popup" src={left}/>
    </div>
ReactDOM.render(<RenderImage />, mountNode);
```

_Result: Without mask_

```__react
import top from '../../../theme/static/images/popup-top-nomask.png'
import bottom from '../../../theme/static/images/popup-bottom-nomask.png'
import right from '../../../theme/static/images/popup-right-nomask.png'
import left from '../../../theme/static/images/popup-left-nomask.png'

const RenderImage=()=>
    <div style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            widht:'100%',
            background:'#ccc',
            padding:'24px',
            borderRadius:'4px'
        }}>
        <img style={{maxWidth: 300}} alt="popup" src={top}/>
        <img style={{maxWidth: 300}} alt="popup" src={bottom}/>
        <img style={{maxWidth: 300}} alt="popup" src={right}/>
        <img style={{maxWidth: 300}} alt="popup" src={left}/>
    </div>
ReactDOM.render(<RenderImage />, mountNode);
```

### Chi tiết

| Property  | Type    | Default Value                 | Description                                                               |
| --------- | ------- | ----------------------------- | ------------------------------------------------------------------------- |
| show      | boolean | false                         | hiển thị popup hay không                                                  |
| animation | boolean | true                          | popup show với animation                                                  |
| mask      | boolean | true                          | hiển thị mask, sử dụng với props onClose để đóng popup khi click vào mask |
| position  | string  | "top","right","bottom","left" | vị trí hiển thị popup                                                     |
| zIndex    | number  | 0                             | zIndex của popup                                                          |
| onClose   | event   |                               | mask=true, khi click vào mask sẽ trigger function onClose                 |