---
title: Sitemap & SEO
---

## Overview

Sitemap là gì?

- Sơ đồ ứng dụng (sitemap) là một tệp (file) nơi bạn cung cấp thông tin về các trang trên app của mình.
- Các công cụ tìm kiếm như TiniApp Crawler sẽ đọc tệp này để thu thập dữ liệu trên app của bạn hiệu quả hơn.
- Sơ đồ ứng dụng cho TiniApp Crawler biết những trang nào bạn cho là quan trọng trong app của mình, đồng thời cung cấp thông tin có giá trị về những trang này. Ví dụ: khi trang được cập nhật lần cuối và bất kỳ phiên bản ngôn ngữ thay thế nào của trang.

## Định dạng sitemap cho ứng dụng

- TiniApp Crawler hỗ trợ sitemap dưới dạng XML có dạng [standard sitemap protocol](https://www.sitemaps.org/protocol.html):

- Một sitemap sẽ có dạng như sau:

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.example.com/foo.html</loc>
    <lastmod>2022-09-27T10:01:36.385Z</lastmod>
  </url>
  <url>
    <loc>https://www.example.com/bar.html</loc>
    <lastmod>2022-09-27T10:01:36.385Z</lastmod>
  </url>
</urlset>
```

- Ví dụ:

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tiki.vn/apps/vn.tiki.miki/pages/book-detail/index?id=1</loc>
    <lastmod>2022-09-27T10:01:36.385Z</lastmod>
  </url>
  <url>
    <loc>https://tiki.vn/apps/vn.tiki.miki/pages/book-detail/index?id=2</loc>
    <lastmod>2022-09-27T10:01:36.385Z</lastmod>
  </url>
  <url>
    <loc>https://tiki.vn/apps/vn.tiki.miki/pages/book-detail/index?id=3</loc>
    <lastmod>2022-09-27T10:01:36.385Z</lastmod>
  </url>
</urlset>
```

- Ví dụ:

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tiki.vn/apps/vn.tiki.miki/pages/book-detail/index?id=1</loc>
    <lastmod>2022-09-26</lastmod>
  </url>
  <url>
    <loc>https://tiki.vn/apps/vn.tiki.miki/pages/book-detail/index?id=2</loc>
    <lastmod>2022-09-26</lastmod>
  </url>
  <url>
    <loc>https://tiki.vn/apps/vn.tiki.miki/pages/book-detail/index?id=3</loc>
    <lastmod>2022-09-26</lastmod>
  </url>
</urlset>
```

- Lưu ý:
  - TiniApp Crawler chỉ hỗ trợ các url sử dụng https
  - TiniApp Crawler chỉ hỗ trợ các url là đường dẫn của ứng dụng

## Đăng tải sitemap cho ứng dụng

1. Truy cập vào [Tini Console](https://developer.tiki.vn/apps).
2. Sidebar menu >> **Tiện ích của bạn**.
3. Mở ứng dụng bạn muốn cung cấp sitemap.
4. Sidebar menu >> **Quản lý tìm kiếm** >> **Sitemap**.
5. Submit sitemap mà bạn muốn đăng tải.

- Lưu ý:
  - TiniApp Crawler chỉ sử dụng sitemap được tải lên thành công gần nhất.

## Các trạng thái của sitemap sau khi đăng tải

- Active: đang hoạt động
- Pending: đang chờ xử lý
- Expired: không khả dụng
