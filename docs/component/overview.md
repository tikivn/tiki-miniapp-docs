---
title: Tổng quan về Component

description: Giới thiệu & phân loại component trong Tini App Framework
---

Component là tập hợp các thành phần bao gồm giao diện, các thuộc tính và các hàm nhằm hỗ trợ các nhà phát triển xây dựng giao diện của ứng dụng.

Tini App cung cấp 2 loại components:

- Basic components: các component cơ bản được cung cấp sẵn trong framework, nhà phát triển có thể sử dụng mà không cần cài đặt gì thêm
- Advanced components: là bộ components được xây dựng từ Basic components, cung cấp thêm nhiều loại components hơn giúp nhà phát triển xây dựng ứng dụng nhanh chóng và thuận tiện hơn. Chi tiết về advanced components bạn có thể xem [tại đây](/docs/component/advance/introduce)

# Demo

import { Simulator } from '@site/src/components/Simulator';

<Simulator />

import { Overview } from '@site/src/components/Overview';

<Overview excludes={['Styling']} />
