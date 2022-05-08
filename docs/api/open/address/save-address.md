---
title: my.saveAddress
---

- `my.saveAddress` là API dùng để lưu địa chỉ vào Sổ địa chỉ của Tiki. Yêu cầu người dùng phải đăng nhập trước
- Bạn bắt buộc phải truyền các thông số theo đúng yêu cầu format địa chỉ của Tiki, do đó bạn nên lấy địa chỉ từ component [address](/docs/component/advance/data-visualization/address) hoặc từ API [getAddress](/docs/api/open/address/get-address)
- `my.saveAddress` bao gồm cả tạo mới hoặc cập nhật Sổ địa chỉ tùy theo id bạn truyền vào

***Khả dụng***: Hỗ trợ từ version 1.77.14 trở lên

## API Params

| Thuộc tính | Kiểu dữ liệu     | Bắt buộc | Mô tả                                                                                                                      |
| ---------- | -------- | :------: | -------------------------------------------------------------------------------------------------------------------------------- |
| data       | Address  | ✓       | Thông tin địa chỉ được truyền vào.                                                                                               |
| success    | Function | No       | Callback function khi một địa chỉ từ Sổ địa chỉ được chọn                                                                        |
| fail       | Function | No       | Callback function khi user không chọn địa chỉ nào, hoặc có lỗi xảy ra trong quá trình chọn địa chỉ, argument sẽ là error message |
| complete   | Function | No       | Callback function khi việc mở màn hình kết thúc cho dù thành công hay thất bại.                                                  |

### Callback function payload

- success callback payload là thông tin địa chỉ được lưu thành công
- fail callback payload

| Thuộc tính   | Kiểu dữ liệu  | Mô tả            |
| ------------ | ------ | ----------------------- |
| error        | string | error title             |
| errorMessage | string | error message in detail |

### Thông tin địa chỉ

:::important Quan trọng

Lưu ý: Các thông số như city_id, ward_id và district_id cần phải được lấy từ component [address](/docs/advance) hoặc từ API [getAddress](/docs/api/open/address/get-address)

:::

| Thuộc tính            | Bắt buộc             | Mô tả                                                                                                                                                       | Kiểu dữ liệu          |
| --------------------- | :-------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| id                    |                    | Id của địa chỉ. Nếu bạn để trống thì sẽ tạo mới địa chỉ, ngược lại nếu bạn truyền id vào thì API sẽ cập nhật lại địa chỉ trong Sổ địa chỉ của user theo đúng id đó | number         |
| full_name             | ✓                   | Tên người nhận. Tối đa 50 ký tự                                                                                                                                    | string         |
| phone_number          | ✓                   | Số điện thoại người nhận. Bắt buộc chỉ là số                                                                                                                       | string         |
| city_id               | ✓                  | Mã thành phố                                                                                                                                                       | number         |
| district_id           | ✓                  | Mã quận/huyện                                                                                                                                                      | number         |
| ward_id               | ✓                   | Mã phường/xã                                                                                                                                                       | number         |
| street                | ✓                   | Tên đường                                                                                                                                                          | string         |
| is_default            |  | Có phải là địa chỉ mặc định trong Sổ địa chỉ hay không. Default là false                                                                                                             | boolean        |
| company               |                    | Tên công ty của người nhận                                                                                                                                         | string / null  |
| delivery_address_type |   | Loại địa chỉ: home hoặc company. Default là home                                                                                                                                  | home / company |


## Sample Code

Bạn cần phải cài đặt [tini-ui](/docs/component/advance/introduce) để có thể sử dụng [address component](/docs/component/advance/data-visualization/address)

```json title=index.json
{
  "usingComponents": {
    "address": "@tiki.vn/tini-ui/es/address/index"
  }
}
```

```xml title=index.txml
<address
  streetLabel="Địa chỉ nhận hàng"
  streetPlaceholder="Nhập số nhà, tên đường..."
  street="{{address.street}}"
  city="{{address.city_id}}"
  district="{{address.district_id}}"
  ward="{{address.ward_id}}"
  full_name="{{address.full_name}}"
  phone_number="{{address.phone_number}}"
  onChangeAddress="onChangeAddress" />

<button onTap="showAddress">Get Address</button>
<button onTap="create">Create Address</button>
<button onTap="update">Update Address</button>

```

```js title=index.js
Page({
  data: {
    address: {}
  },
  id: null,
  showAddress() {
    my.getAddress({
      success: (success) => {
        this.setData({ address: success });
        this.id = success.id;
      },
      fail: (fail) => {
        console.log('fail :>> ', fail);
      }
    });
  },
  onChangeAddress(address) {
    this.setData({ address });
  },
  getAddress() {
    const { address } = this.data;
    return {
      full_name: address.full_name,
      company: address.company,
      phone_number: address.phone_number,
      street: address.street,
      is_default: false,
      delivery_address_type:
        address.delivery_address_type || 'home',
      city_id: address.city.id || address.city,
      district_id: address.district.id || address.district,
      ward_id: address.ward.id || address.ward
    };
  },
  create() {
    my.saveAddress({
      data: this.getAddress(),
      success: (success) => {
        console.log('create success :>> ', success);
      },
      fail: (fail) => {
        console.log('save fail :>> ', fail);
      }
    });
  },
  update() {
    my.saveAddress({
      data: { ...this.getAddress(), id: this.id },
      success: (success) => {
        console.log('update success :>> ', success);
      },
      fail: (fail) => {
        console.log('save fail :>> ', fail);
      }
    });
  }
});
```

