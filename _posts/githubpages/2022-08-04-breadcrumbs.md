---
title: パンくずリストの作成
category: githubpages
comment: true
thumbnail: true
---

ブログ記事の上部にパンくずリスト(現在ページのナビゲーション)を導入する.  

## ソースコード
{% raw %}
```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
     <li class="breadcrumb-item"><i class="fa-solid fa-house"></i><a href={{"/" | relative_url }}>Home</a></li>
    <li class="breadcrumb-item active" aria-current="page"><a href="{{"/#" | append: page.category | relative_url }}">{{ page.category }}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{ page.title }}</li>
  </ol>
</nav>
```
{% endraw %}

このようにパンくずリストが表示される.  
![]({{ "images/posts/githubpages/2022-08-04-breadcrumbs/image1.png" | relative_url }})

