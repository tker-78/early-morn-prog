---
title: "デフォルト画像の設定"
description: "トップページへのデフォルトサムネイル画像の設定"
category: githubpages
---


# {{ page.description }}

ポストに紐づく画像が指定されている場合はその画像を、指定されていない場合は、カテゴリ毎のデフォルトの画像を表示する設定を行う.  



{% raw %}
_includes/desplay_posts.html
```html
<div class="menu-item-image has-meta-content">
  <img src="{{post.category}}.png" />
</div>


```

{% endraw %}