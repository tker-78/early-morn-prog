---
title: ブログポストの更新日の表示
category: githubpages
description: ブログポストを更新した際に、投稿日に加えて更新日を表示する. 
comment: true
thumbnail: true
---

ブログポストの更新日を表示する.  

## ブログ記事ページに表示

レイアウトファイル.  
{% raw %}
```html:aaa.html
      {% if page.updated %}
      <div>
        <!-- ポストの更新日の表示 -->
        <i class="fas fa-pen-fancy"></i>
        {{ page.updated | date_to_string | append: "  更新" }}
      </div>
      {% endif %
```

{% endraw %}


front matterに下記の記述をする.  
```
---
updated: 2022-08-05
...
---
```

以上で、ブログページに下記の表示が追加された.  
![]({{ "/images/githubpages/posts/2022-08-05-updated-date/image1.png" | relative_url }})

## インデックスページへの表示
同様にインデックスページにも導入して完了.  


