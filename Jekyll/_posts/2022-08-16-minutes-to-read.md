---
title: Minutes to Readの実装
description: 記事のタイトル近くに、“この記事は約xx分で読めます”の表示をしたい.  
comment: true
thumbnail: true
---

{% raw %}
## ソースコード
_includes/minutes-to-read.html  

```liquid
<div class=“minutes-to-read”>
  {% if words < 500 %}
    <p>この記事は約1分で読めます</p>
  {% else %}
    <p>この記事は約{{ words | divided_by: 500 }}分で読めます</p>
  {% endif %}
</div>
```


_layouts/post.html  

```html
{% assign words = content | strip_html | strip_newlines | size %}
{% include minutes-to-read.html words=words %}
```

{% endraw %}

以上で実装完了.  

![](/images/{{ page.path | replace: "_posts", "posts" | remove: ".md" }}/image1.png)
