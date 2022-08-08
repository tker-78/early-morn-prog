——-
title: next-previousボタンの実装
description: ポストのページで、関連する記事に遷移したいときに、いちいち親ページに戻るとめんどくさいので、ポストのページに、next(次の記事), previous(前のページ)を実装して、同じカテゴリ内の記事に遷移できるようにする.  
category: githupages
comment: true
———

## いいプラグインはなさそう
[ここ](https://gist.github.com/stravid/4078840)のソースコードを参考にする.  

それと[ここ](https://talk.jekyllrb.com/t/how-to-link-to-next-and-previous-posts-for-same-blog-category/629)も参考にする.  

## ソースコード

`_include/next_previous.html`を作成  

 ```html
<div class="next-previous">
  {% assign cat = page.categories[0] %}
{% assign cat_list = site.categories[cat] %}
{% for post in cat_list %}
  {% if post.url == page.url %}
  	{% assign pOffset = forloop.index0 | minus: 1 %}
  	{% assign nOffset = pOffset | plus: 2 %}

  	{% if forloop.last == false %}
  	  {% assign previous_post = cat_list[nOffset] %}
      <a href="{{ previous_post.url }}" >{{ previous_post.title }}<< </a>
  	{% endif %}
  	{% if forloop.first == false %}
  	  {% assign next_post = cat_list[pOffset] %}
      <a href="{{ next_post.url }}" style="padding-left: 15px;"> >>{{ next_post.title }}</a>
  	{% endif %}

  	{% break %}
  {% endif %}
{% endfor %}
</div>
```

これでナビゲーションが表示される.  
![]({{ "images/posts/githubpages/2022-08-09-next-previous-navigation/image1.png" | relative_url }})

## デザインの調整




