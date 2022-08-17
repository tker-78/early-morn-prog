---
title: パンくずリストの作成
category: githubpages
comment: true
thumbnail: true
updated: 2022-08-09
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
![]({{ "images/githubpages/posts/2022-08-04-breadcrumbs/image1.png" | relative_url }})


## エイリアスを表示する

### データの登録
_data/categories.yml

```yaml
- category: githubpages
  alias: GitHub Pages
```

カテゴリが増えたらここに`category`と`alias`を追記する.  

## コード

{% raw %}  

```html
{% for cat in site.data.categories %}
  {% if cat.category == page.category %}
     {% assign alias_cat =  cat.alias %}
<!—ここにbreadcrumbs.htmlの全コードを挿入する—>
     {% break %}
  {% endif %}
{% endfor %}
```

breadcrumbs.html

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
     <li class="breadcrumb-item"><i class="fa-solid fa-house"></i><a href={{"/" | relative_url }}>Home</a></li>
    <li class="breadcrumb-item active" aria-current="page"><a href="{{"/#" | append: page.category | relative_url }}">{{ alias_cat }}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{ page.title }}</li>
  </ol>
</nav>
```
{% endraw %}

実装完了.  
![]({{ "/images/githubpages/posts/2022-08-04-breadcrumbs/image2.png" }})
