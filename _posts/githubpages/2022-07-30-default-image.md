---
title: "デフォルト画像の設定"
description: "トップページへのデフォルトサムネイル画像の設定"
category: githubpages
comment: true
---


ポストのカテゴリに紐づくサムネイル画像を自動表示する.  


{% raw %}
_includes/desplay_posts.html
```html
<div class="menu-item-image has-meta-content">
  <img src="{{post.categories[0] }}.png" />
</div>

```

{% endraw %}