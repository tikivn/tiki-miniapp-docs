--- title: Address
---

## Giới thiệu

- `address` là component trong [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui). Cho phép bạn thực hiện các thao tác liên quan tới địa chỉ của tiki, như lấy thông tin thành phố, quận huyện, phường xã,...
- Để sử dụng `address`, bạn cần phải cài [tini-ui](https://www.npmjs.com/package/@tiki.vn/tini-ui) từ version `0.0.19` trở lên.

## Sử dụng

### Cài đặt `tini-ui`:

```bash
$> yarn add @tiki.vn/tini-ui
```

### Sample Code

```json title=index.json
{
  "usingComponents": {
    "address": "@tiki.vn/tini-ui/es/address/index"
  }
}
```

```xml title=index.txml
<address
  streetErrorMsg="{{streetErrorMsg}}"
  cityErrorMsg="{{cityErrorMsg}}"
  districtErrorMsg="{{districtErrorMsg}}"
  wardErrorMsg="{{wardErrorMsg}}"
  streetLabel="Địa chỉ nhận hàng"
  streetPlaceholder="Nhập số nhà, tên đường..."
  street="{{street}}"
  city="{{city}}"
  district="{{district}}"
  ward="{{ward}}"
  full_name="{{full_name}}"
  phone_number="{{phone_number}}"
  onChangeAddress="onChangeAddress"
  onFullAddress="onFullAddress" />
```

**index.js**

```js
Page({
  data: {
    street: '',
    city: null,
    district: null,
    ward: null,
    full_name: '',
    phone_number: ''
    // streetErrorMsg: 'Vui lòng nhập đủ địa chỉ',
    // cityErrorMsg: 'Vui lòng nhập thành phố',
    // districtErrorMsg: 'Vui lòng nhập quận',
    // wardErrorMsg: 'Vui lòng nhập phường',
  },
  onChangeAddress(address) {
    console.log('address :', address);
  },
  onFullAddress(address) {
    console.log('full address :', address);
  }
});
```

### Chi tiết

| Property             | Type           | Default Value             | Description                                                                                            |
| -------------------- | -------------- | ------------------------- | ------------------------------------------------------------------------------------------------------ |
| firstCities          | array string   | ['Hồ Chí Minh', 'Hà Nội'] | Chỉ định các tỉnh/thành phố được hiển thị đầu tiên trong danh sách                                     |
| street               | string         |                           | Tên đường                                                                                              |
| city                 | number/Address |                           | Mã của tỉnh/thành phố hoặc là một address object. Bạn có thể xem thông tin của address object bên dưới |
| district             | number/Address |                           | Mã của quận/huyện hoặc là một address object                                                           |
| ward                 | number/Address |                           | Mã của phường/xã hoặc là một address object                                                            |
| full_name            | string         |                           | Họ và tên                                                                                              |
| phone_number         | string         |                           | Số điện thoại, chỉ hỗ trợ số                                                                           |
| streetLabel          | string         |                           | Label cho street                                                                                       |
| streetPlaceholder    | string         |                           | Placeholder cho street                                                                                 |
| cityPlaceLabel       | string         |                           | Label cho city                                                                                         |
| cityPlaceholder      | string         |                           | Placeholder cho city                                                                                   |
| districtPlaceLabel   | string         |                           | Label cho district                                                                                     |
| districttPlaceholder | string         |                           | Placeholder cho district                                                                               |
| wardPlaceLabel       | string         |                           | Label cho ward                                                                                         |
| wardPlaceholder      | string         |                           | Placeholder cho ward                                                                                   |
| namePlaceLabel       | string         |                           | Label cho name                                                                                         |
| namePlaceholder      | string         |                           | Placeholder cho name                                                                                   |
| phonePlaceLabel      | string         |                           | Label cho phone                                                                                        |
| phonePlaceholder     | string         |                           | Placeholder cho phone                                                                                  |
| streetErrorMsg       | string         |                           | Error message cho street                                                                               |
| cityErrorMsg         | string         |                           | Error message cho city                                                                                 |
| districtErrorMsg     | string         |                           | Error message cho district                                                                             |
| wardErrorMsg         | string         |                           | Error message cho ward                                                                                 |
| nameErrorMsg         | string         |                           | Error message cho name                                                                                 |
| phoneErrorMsg        | string         |                           | Error message cho phone                                                                                |
| showName             | boolean        | true                      | Hiển thị field name                                                                                    |
| showPhone            | boolean        | true                      | Hiển thị field phone                                                                                   |
| onChangeStreet       | event          |                           | Sự kiện được gọi khi street thay đổi                                                                   |
| onChangeName         | event          |                           | Sự kiện được gọi khi name thay đổi                                                                     |
| onChangePhone        | event          |                           | Sự kiện được gọi khi phone thay đổi                                                                    |
| onChangeCity         | event          |                           | Sự kiện được gọi khi city thay đổi                                                                     |
| onChangeDistrict     | event          |                           | Sự kiện được gọi khi district thay đổi                                                                 |
| onChangeWard         | event          |                           | Sự kiện được gọi khi ward thay đổi                                                                     |
| onChangeAddress      | event          |                           | Sự kiện được gọi khi address thay đổi                                                                  |
| onFullAddress        | event          |                           | Sự kiện được gọi khi các thông tin address được điền đầy đủ                                            |

### Address object

| Attributes | Description                         | Type   |
| ---------- | ----------------------------------- | ------ |
| id         | Id của city/district/ward           | number |
| name       | Tên hiển thị của city/district/ward | string |
