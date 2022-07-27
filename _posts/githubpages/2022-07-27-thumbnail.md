---
title : "トップページに投稿のサムネイルを表示する"
description: "各記事へのリンク先にサムネイル画像を自動的に表示する方法"
category: githubpages
dirname: 2022-07-27-thumbnail

---


# トップページに画像のポストのサムネイル画像を表示する

```html
  <img src="http://tker-78.github.io/early-morn-prog/images/posts/{{ post.category}}/{{ post.dirname}}/image1.png" />
```

各ポストで`category`と`dirname`は確実に指定すること.  
