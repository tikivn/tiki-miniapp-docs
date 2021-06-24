---
title: Modal
---

## Giới thiệu

Khi ứng dụng cần cảnh báo hoặc nhắc nhở hành người dùng, yêu cầu thao tác của người dùng mà không phải chuyển trang, bạn có thể sử dụng modal.
Người dùng cần thực hiện các thao tác trên modal trước khi đóng.

## Sử dụng

### Sample Code:

Khai báo components:

```json
{
  "defaultTitle": "Modal",
  "usingComponents": {
    "modal": "@tikivn/mini-ui/lib/modal/index"
  }
}
```

### Javascript Code

javascript code dưới đây được sử dụng cho tất cả các component demo,
_**lưu ý đây không phải là best practise, nên sử dụng để tham khảo.**_

```js
Page({
  data: {
    modal: {}
  },
  onLoad() {},
  closeModal() {
    this.setData({
      modal: {}
    });
  },
  onMaskClick() {
    this.setData({
      modal: {}
    });
  },
  onButtonClick(e) {
    if (e.target.dataset.index === 0) {
      my.alert({
        content: 'item' + JSON.stringify(e.target.dataset),
        success: () => this.setData({ modal: {} })
      });
    } else if (e.target.dataset.index === 1) {
      my.alert({
        content: 'item' + JSON.stringify(e.target.dataset),
        success: () => this.setData({ modal: {} })
      });
    } else {
      my.alert({
        content: 'unhandle',
        success: () => this.setData({ modal: {} })
      });
    }
  },
  onModalClick() {
    this.setData({
      modal: {}
    });
  },
  onModalClose() {
    this.setData({
      modal: {}
    });
  },
  onCancel() {
    this.setData({ modal: {} });
  },
  onTap(e) {
    this.setData(e.target.dataset);
  }
});
```

### Basic Modal

- **Khai báo modal component**

_index.txml_

```xml
  <modal
      show="{{modal.type==='basic'}}"
      showClose="{{modal.showClose}}"
      closeType="{{modal.closeType}}"
      mask="true"
      onModalClose="onModalClose"
      onMaskClick="onMaskClick"
    >
    <view slot="header">Header</view>
    <view style="
      display:flex;
      flex-direction: column;
      margin: 16px 0;
      min-width: 250px;
    ">
      <text>
          Component Props
      </text>
    </view>
    <view tiki:if="{{modal.footer}}" slot="footer">
      <view onTap="closeModal" style="
          border-top: 1px solid #ccc;
          color: #1677ff;
          cursor: pointer;
          text-align: center;
          padding: 8px 0;
        ">Close</view>
    </view>
  </modal>
```

- **Khai báo button with dataset**

```xml
  <view class="button-wrapper">
   <!-- for basic modal -->
    <button size="big" type="primary" data-modal="{{
      type: 'basic',
      showClose: true,
      footer: false,
    }}" onTap="onTap">Basic</button>
   <!-- for basic modal with footer + showClose button -->
    <button size="big" type="primary" data-modal="{{
      type: 'basic',
      showClose: true,
      footer: true
    }}" onTap="onTap">Footer,Close</button>
  </view>
```

- **Kết quả**

<div style={{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    widht:'100%',
    background:'#f2f4f5',
    padding:'24px',
    borderRadius:'4px'
  }}>
  <div>
      <h4>Basic modal</h4>
      <img style={{maxWidth: 300}} alt="modal" src="/img/modal-basic.png"/>
  </div>
  <div>
      <h4>Basic modal with footer,showClose</h4>
      <img style={{maxWidth: 300}} alt="modal" src="/img/modal-basic-footer.png"/>
  </div>
</div>

### Image Modal

- **Khai báo modal component**

_index.txml_

```xml
  <modal
      show="{{modal.type==='image'}}"
      showClose="{{modal.showClose}}"
      closeType="{{modal.closeType}}"
      mask="true"
      onModalClose="onModalClose"
      onMaskClick="onMaskClick"
      topImage:"{{modal.topImage}}",
      topImageSize:"{{modal.topImageSize}}",
    >
    <view slot="header">Header</view>
    <view style="
      display:flex;
      flex-direction: column;
      margin: 16px 0;
      min-width: 250px;
    ">
      <text>
          Component Props
      </text>
    </view>
    <view tiki:if="{{modal.footer}}" slot="footer">
      <view onTap="closeModal" style="
          border-top: 1px solid #ccc;
          color: #1677ff;
          cursor: pointer;
          text-align: center;
          padding: 8px 0;
        ">Close</view>
    </view>
  </modal>
```

- **Khai báo button with dataset**

```xml
  <view class="button-wrapper">
  <!-- for modal image medium -->
    <button size="big" type="primary" data-modal="{{
      type: 'image',
      showClose: true,
      footer: false,
      topImage:'http://placeimg.com/640/480',
      topImageSize:'md'
    }}" onTap="onTap">Basic</button>
  <!-- for modal image large -->
    <button size="big" type="primary" data-modal="{{
      type: 'image',
      showClose: false,
      footer: true,
      topImage:'http://placeimg.com/640/480',
      topImageSize:'lg'
    }}" onTap="onTap">Modal with footer</button>
  </view>
```

- **Kết quả**

<div style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        widht:'100%',
        background:'#f2f4f5',
        padding:'24px',
        borderRadius:'4px'
    }}>
    <div>
        <h4>Image size medium</h4>
        <img style={{maxWidth: 300}} alt="modal" src="/img/modal-image-md.png"/>
    </div>
    <div>
        <h4>Image size large</h4>
        <img style={{maxWidth: 300}} alt="modal" src="/img/modal-image-lg.png"/>
    </div>
</div>

### Custom Button

- **Khai báo modal component**

_index.txml_

```xml
    <modal
      show="{{modal.type==='customFooter'}}"
      mask="true"
      showClose="false"
      onModalClose="onModalClose"
      onMaskClick="onMaskClick"
      topImage="{{modal.topImage}}"
      topImageSize="{{modal.topImageSize}}"
      buttons="{{modal.buttons}}"
      buttonsLayout="{{modal.buttonsLayout}}"
      onButtonClick="onButtonClick"
    >
    <view slot="header">Header</view>
    <view style="
      display:flex;
      flex-direction: column;
      margin: 16px 0;
      min-width: 250px;
    ">
      <text>
          Component Props
      </text>
    </view>
  </modal>

```

- **Khai báo button with dataset**

```xml
    <view class="button-wrapper">
        <!-- buttonLayouts=vertical -->
        <button size="big" type="primary" data-modal="{{
          type: 'customFooter',
          showClose: true,
          footer: false,
          buttonsLayout:'vertical',
          topImage:'http://placeimg.com/640/480',
          topImageSize:'lg',
          buttons:[{
                text:'Cancel',
            },
            {
                text:'Ok',
            }
          ]
        }}" onTap="onTap">Vertical</button>
        <!-- buttonLayouts=horizontal -->
        <button size="big" type="primary" data-modal="{{
          type: 'customFooter',
          buttonsLayout:'horizontal',
          showClose: true,
          footer: false,
          topImage:'http://placeimg.com/640/480',
          topImageSize:'lg',
          buttons:[{
            text:'Cancel',
            extStyle:'border-top: 1px solid #ccc;border-right:1px solid #ccc'
          },
          {
            text:'Ok',
            extStyle:'border-top: 1px solid #ccc'
          }]
        }}" onTap="onTap">Horizontal</button>
    </view>

```

- **Kết quả**

<div style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        widht:'100%',
        background:'#f2f4f5',
        padding:'24px',
        borderRadius:'4px'
    }}>
    <div>
        <h4>Vertical buttons layout</h4>
        <img style={{maxWidth: 300}} alt="modal" src="/img/modal-custom-footer.png"/>
    </div>
    <div>
        <h4>Horizontal buttons layout</h4>
        <img style={{maxWidth: 300}} alt="modal" src="/img/modal-custom-footer-horizontal.png"/>
    </div>
</div>

### Advance

- **Khai báo modal component**

_index.txml_

```xml
    <modal
      show="{{modal.type==='advance'}}"
      mask="true"
      showClose="false"
      onModalClose="onModalClose"
      onMaskClick="onMaskClick"
      topImage="{{modal.topImage}}"
      topImageSize="{{modal.topImageSize}}"
      advance="true"
      onButtonClick="onButtonClick"
    />

```

- **Khai báo button with dataset**

```xml
    <view class="button-wrapper">
        <button size="big" type="primary" data-modal="{{
          type: 'advice',
          showClose: true,
          footer: false,
          topImage:'http://placeimg.com/640/480',
          topImageSize:'lg',
        }}" onTap="onTap">Show image only</button>
    </view>

```

- **Kết quả**

<div style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        widht:'100%',
        background:'#f2f4f5',
        padding:'24px',
        borderRadius:'4px'
    }}>
    <div>
        <h4>Image only</h4>
        <img style={{maxWidth: 300}} alt="modal" src="/img/modal-image.png"/>
    </div>
</div>

### Chi tiết props

| Property      | Type                    | Default Value      | Description                                                                       |
| ------------- | ----------------------- | ------------------ | --------------------------------------------------------------------------------- |
| show          | boolean                 | false              | Hiện/ẩn modal                                                                     |
| showClose     | boolean                 | true               | Hiển thị button đóng modal, Cần implement props **onModalClose**                  |
| className     | string                  |                    | Thêm class cho modal                                                              |
| mask          | boolean                 | true               | Hiển thị mask                                                                     |
| topImage      | string                  | undefined          | Hiển thị hình ảnh ở trên top của modal                                            |
| topImageSize  | 'lg', 'md', 'sm'        | md                 | Quyết định size render của topImage                                               |
| buttons       | Button[]                | undefined          | Custom bottom buttons, implement props **onButtonClick** bind function vào button |
| buttonsLayout | 'horizontal','vertical' | 'horizontal'       | Mask=true, khi click vào mask sẽ trigger function onClose                         |
| advice        | boolean                 | false              | Close button ở bottom                                                             |
| onModalClick  | event                   | () => void         | Trigger function này khi click vào footer slot                                    |
| onMaskClick   | event                   | () => void         | Trigger function này khi click vào mask                                           |
| onModalClose  | event                   | () => void         | Function này sẽ được trigger khi click vào close button                           |
| onButtonClick | event                   | (e:Object) => void | Function sẽ được bind và trigger khi click vào custom button                      |

### buttons

| Property | Type   | Default Value | Description          |
| -------- | ------ | ------------- | -------------------- |
| text     | string | ''            | Hiển thị text button |
| extClass | string | ''            | Class cho button     |

### slots

| Property | Type    | Default Value | Description                       |
| -------- | ------- | ------------- | --------------------------------- |
| header   | boolean | false         | Render component ở section header |
| footer   | boolean | true          | Render component ở section footer |
