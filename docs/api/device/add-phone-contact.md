---
title: my.addPhoneContact
---

`my.addPhoneContact` là API dùng để chọn ghi thông tin liên hệ vào sổ địa chỉ của điện thoại dưới dạng "tạo một liên hệ mới" hoặc "thêm vào một liên hệ hiện có".

**_Khả dụng_**: Hỗ trợ từ version 1.87.19 trở lên.

## API Params

| Thuộc tính            | Kiểu dữ liệu | Bắt buộc | Mô tả                                                                                       |
| --------------------- | ------------ | :------: | ------------------------------------------------------------------------------------------- |
| photoFilePath         | string       |          | Đường dẫn tệp hình đại diện                                                                 |
| nickName              | string       |          | Tên đại diện                                                                                |
| lastName              | string       |          | Họ                                                                                          |
| middleName            | string       |          | Tên đệm                                                                                     |
| firstName             | string       |          | Tên                                                                                         |
| remark                | string       |          | Ghi chú                                                                                     |
| mobilePhoneNumber     | string       |          | Số điện thoại                                                                               |
| addressCountry        | string       |          | Địa chỉ liên hệ                                                                             |
| addressState          | string       |          | Địa chỉ liên hệ tỉnh                                                                        |
| addressCity           | string       |          | Địa chỉ liên hệ thành phố                                                                   |
| addressStreet         | string       |          | Địa chỉ liên hệ đường                                                                       |
| addressPostalCode     | string       |          | Mã bưu điện                                                                                 |
| organization          | string       |          | Công ty                                                                                     |
| title                 | string       |          | Chức vụ                                                                                     |
| workFaxNumber         | string       |          | Số fax công ty                                                                              |
| workPhoneNumber       | string       |          | Số điện thoại công ty                                                                       |
| hostNumber            | string       |          | Điện thoại vănn phòng                                                                       |
| email                 | string       |          | Địa chỉ email                                                                               |
| url                   | string       |          | Đường dẫn tệp hình đại diện                                                                 |
| workAddressCountry    | string       |          | Địa chỉ công ty                                                                             |
| workAddressState      | string       |          | Địa chỉ công ty tỉnh                                                                        |
| workAddressCity       | string       |          | Địa chỉ công ty thành phố                                                                   |
| workAddressPostalCode | string       |          | Đường dẫn tệp hình đại diện                                                                 |
| homeFaxNumber         | string       |          | Số fax nơi cứ trú                                                                           |
| homePhoneNumber       | string       |          | Số diện thoại nơi cư trú                                                                    |
| homeAddressCountry    | string       |          | Địa chỉ nơi cư trú                                                                          |
| homeAddressState      | string       |          | Địa chỉ tỉnh cư trú                                                                         |
| homeAddressCity       | string       |          | Địa chỉ thành phố cư trú                                                                    |
| homeAddressStreet     | string       |          | Địa chỉ đường nơi cư trú                                                                    |
| homeAddressPostalCode | string       |          | Địa chỉ cư trú mã bưu điện                                                                  |
| success               | Function     |          | Callback function khi ghi thông tin liên hệ vào sổ địa chỉ thành công.                      |
| fail                  | Function     |          | Callback function khi việc ghi thông tin liên hệ vào sổ địa chỉ bất thành.                  |
| complete              | Function     |          | Callback function khi ghi thông tin liên hệ vào sổ địa chỉ bất kể thành công hay thất bại . |

## Giá trị trong success callback

Khi việc gọi API thành công, framework sẽ trả về thông tin về pin như sau:

| Thuộc tính | Kiểu dữ liệu | Mô tả |
| ---------- | ------------ | ----- |
| success    | bool         | true  |

## Sample Code

```js title=index.js
Page({
  data: {
    photoFilePath: '/sdcard/DCIM/Camera/a.jpg',
    nickName: 'tinniapp',
    lastName: 'Last',
    middleName: 'Middle',
    firstName: 'First',
    remark: 'remark',
    mobilePhoneNumber: '13800000000',
    homePhoneNumber: '11111115',
    workPhoneNumber: '11111112',
    homeFaxNumber: '11111114',
    workFaxNumber: '11111111',
    hostNumber: '11111113',
    weChatNumber: 'liuhuo',
    alipayAccount: 'tiki.vn',
    addressCountry: 'Viet Name',
    addressState: 'Q.10',
    addressCity: 'HCM',
    addressStreet: 'CMT8',
    addressPostalCode: '94016',
    workAddressCountry: 'Viet Name',
    workAddressState: 'Q.10',
    workAddressCity: 'HCM',
    workAddressStreet: 'CMT8',
    workAddressPostalCode: '361005',
    homeAddressCountry: 'Viet Name',
    homeAddressState: 'Binh Duong',
    homeAddressCity: 'Thuan An',
    homeAddressStreet: 'Nguyen Huu Canh',
    homeAddressPostalCode: '123456',
    organization: 'Tiki',
    title: 'Developer',
    email: 'liuhuo01@tiki.vn',
    url: 'www.tiki.vn',
    success: (res) => {
      my.alert({
        title: 'Success',
        content:
          'addPhoneContact response: ' + JSON.stringify(res)
      });
    },
    fail: (res) => {
      my.alert({
        title: 'Fail',
        content:
          'addPhoneContact response: ' + JSON.stringify(res)
      });
    }
  },
  alert(message) {
    my.alert({
      title: 'response',
      content: JSON.stringify(message),
      buttonText: 'OK'
    });
  },

  onInput(e) {
    this.data[e.currentTarget.id] = e.detail.value;
  },

  choosePhoneContact() {
    my.choosePhoneContact({
      success: (success) => {
        this.alert(JSON.stringify(success));
      },
      fail: (fail) => {
        this.alert(JSON.stringify(fail));
      }
    });
  },
  addPhoneContact() {
    if (my.canIUse('addPhoneContact')) {
      my.addPhoneContact(this.data);
    }
  }
});
```

```xml title=index.txml
<view>
  <block-header title="Usage" description="Contact" />

  <view class="block-content">
    <button onTap="choosePhoneContact">Choose phone contact</button>
  </view>

  <view class="block-content">
  <view class="page-section">
    <view class="page-section-title">my.addPhoneContact</view>
    <view class="page-section-demo">
      <view style="font-size:18px;margin-top:18px;margin-bottom:18px">
        <text style="font-size:18px;margin-top:18px;margin-bottom:18px">Basic info</text>
      </view>
      <view class="form-row">
        <view class="form-row-label">nickName</view>
        <view class="form-row-content">
          <input id="nickName" onInput="onInput" class="input" value="tiniapp" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">Last name</view>
        <view class="form-row-content">
          <input id="lastName" onInput="onInput" class="input" value="Last" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">Middle name</view>
        <view class="form-row-content">
          <input id="middleName" onInput="onInput" class="input" value="Middle" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">First name</view>
        <view class="form-row-content">
          <input id="firstName" onInput="onInput" class="input" value="First" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">Remark</view>
        <view class="form-row-content">
          <input id="remark" onInput="onInput" class="input" value="this is remark" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">Mobile phone number</view>
        <view class="form-row-content">
          <input id="mobilePhoneNumber" onInput="onInput" class="input" value="13800000000" />
        </view>
      </view>
      <view style="font-size:18px;margin-top:18px;margin-bottom:18px">
        <text style="font-size:18px;margin-top:18px;margin-bottom:18px">Address</text>
      </view>
      <view class="form-row">
        <view class="form-row-label">Country address</view>
        <view class="form-row-content">
          <input id="addressCountry" onInput="onInput" class="input" value="US" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">State address</view>
        <view class="form-row-content">
          <input id="addressState" onInput="onInput" class="input" value="California" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">City address</view>
        <view class="form-row-content">
          <input id="addressCity" onInput="onInput" class="input" value="San Francisco" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">Street address</view>
        <view class="form-row-content">
          <input id="addressStreet" onInput="onInput" class="input" value="Mountain View" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">Postal Code address</view>
        <view class="form-row-content">
          <input id="addressPostalCode" onInput="onInput" class="input" value="94016" />
        </view>
      </view>
      <view style="font-size:18px;margin-top:18px;margin-bottom:18px">
        <text style="font-size:18px;margin-top:18px;margin-bottom:18px">Job</text>
      </view>
      <view class="form-row">
        <view class="form-row-label">Organization</view>
        <view class="form-row-content">
          <input id="organization" onInput="onInput" class="input" value="Tiki" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">Title</view>
        <view class="form-row-content">
          <input id="title" onInput="onInput" class="input" value="Developer" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">Work fax number</view>
        <view class="form-row-content">
          <input id="workFaxNumber" onInput="onInput" class="input" value="11111111" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">Work phone number</view>
        <view class="form-row-content">
          <input id="workPhoneNumber" onInput="onInput" class="input" value="11111112" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">Host number</view>
        <view class="form-row-content">
          <input id="hostNumber" onInput="onInput" class="input" value="11111113" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">Email</view>
        <view class="form-row-content">
          <input id="email" onInput="onInput" class="input" value="liuhuo01@tiki.vn" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">Url</view>
        <view class="form-row-content">
          <input id="url" onInput="onInput" class="input" value="www.tiki.vn'" />
        </view>
      </view>
      <view style="font-size:18px;margin-top:18px;margin-bottom:18px">
        <text style="font-size:18px;margin-top:18px;margin-bottom:18px">Work address</text>
      </view>
      <view class="form-row">
        <view class="form-row-label">Work country address</view>
        <view class="form-row-content">
          <input id="workAddressCountry" onInput="onInput" class="input" value="Viet Name" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">Work state address</view>
        <view class="form-row-content">
          <input id="workAddressState" onInput="onInput" class="input" value="Q.10" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">Work city address</view>
        <view class="form-row-content">
          <input id="workAddressCity" onInput="onInput" class="input" value="HCM" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">Work street address</view>
        <view class="form-row-content">
          <input id="workAddressStreet" onInput="onInput" class="input" value="CMT8" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">Postal Code office</view>
        <view class="form-row-content">
          <input id="workAddressPostalCode" onInput="onInput" class="input" value="361005" />
        </view>
      </view>
      <view style="font-size:18px;margin-top:18px;margin-bottom:18px">
        <text style="font-size:18px;margin-top:18px;margin-bottom:18px">Home</text>
      </view>
      <view class="form-row">
        <view class="form-row-label">Home fax number</view>
        <view class="form-row-content">
          <input id="homeFaxNumber" onInput="onInput" class="input" value="11111114" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">Home phone number</view>
        <view class="form-row-content">
          <input id="homePhoneNumber" onInput="onInput" class="input" value="11111115" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">Home county address</view>
        <view class="form-row-content">
          <input id="homeAddressCountry" onInput="onInput" class="input" value="Viet Name" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">Home state address</view>
        <view class="form-row-content">
          <input id="homeAddressState" onInput="onInput" class="input" value="Binh Duong" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">Home city address</view>
        <view class="form-row-content">
          <input id="homeAddressCity" onInput="onInput" class="input" value="Thuan An" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">Home street address</view>
        <view class="form-row-content">
          <input id="homeAddressStreet" onInput="onInput" class="input" value="Nguyen Huu Canh" />
        </view>
      </view>
      <view class="form-row">
        <view class="form-row-label">Postal code home</view>
        <view class="form-row-content">
          <input id="homeAddressPostalCode" onInput="onInput" class="input" value="123456" />
        </view>
      </view>
      <button type="primary" onTap="addPhoneContact">Add Phone Contact</button>
    </view>
  </view>
  </view>

</view>

```
