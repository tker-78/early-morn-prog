---
title : "トップページに投稿のサムネイルを表示する"
description: "各記事へのリンク先にサムネイル画像を自動的に表示する方法"
category: githubpages
dirname: 2022-07-27-thumbnail
comment: true
thumbnail: true
---

ブログ記事を投稿したら、トップページに記事の内容と記事のサムネイル画像を自動表示するように設定する.  
## ブログ記事の保存先
Jekyllで指定されている保存先である  
`root/_posts/<カテゴリ名>/<ポスト名>.md`  
に保存する.  


## ブログ用画像の保存先
画像は画像専用のディレクトリに記事とは分けて保存したいため、  
`root/images/posts/<カテゴリ名>/<ポスト名>/<画像名>`  
に保存する.  

また、ブログ記事固有の画像がない場合はカテゴリ別のデフォルト画像に設定するため、
front matterで  
`thumbnail: true`  
の指定をした記事のみ、固有の画像を設定する.  

{% raw %}
```html
{% if post.thumbnail == true %}
  <div class="menu-item-image has-meta-content">
    <img src="images/{{ post.path | replace: "_posts", "posts" | remove: ".md" }}/image1.png" />
  </div>    
{% else %}
  <div class="menu-item-image has-meta-content">
    <img src="images/{{ post.categories[0] }}.png" />
  </div>
{% endif %}
```
{% endraw %}

画像のフォルダの`posts`を`_posts`に変更すれば、Liquidのフィルタを外せるが、
Jekyllの仕様で、`_posts`は自動でパス変換が行われてしまうので、`images/posts`とせねばならず、
`replace`のフィルタは必須になっている.  

デフォルトの画像は、`categories[0]`を指定しているため、
カテゴリを複数指定している記事の場合は、先に指定しているカテゴリに紐づいた画像が反映されるため注意すること.  

以上.  




