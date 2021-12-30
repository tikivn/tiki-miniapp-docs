---
title: Cấu trúc Tini Game

description: Cấu trúc dự án Tiki mini-app game
---

Một dự án Tini Game điển hình sẽ có cấu trúc như sau: 

``` bash
- src/
 |- pages/
  |- index/
   |  index.js
   |  index.json
   |  index.tcss
   |  index.txml
 |- public/
  |+ assets/
  |+ src/
 |  app.js
 |  app.json
 |  app.tcss
  .gitignore
  package.json
  README.md
```

Xét cho cùng Tini Game cũng là một Tini App. Ví lẽ đó, nó có cấu framework: thư mục pages, tập tin app.js, app.json.

Thư mục public dùng để chứa entry file và các tài nguyên (assets) liên quan  tới H5 game. 
