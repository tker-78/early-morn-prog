---
title: グラデーションのボーダーを実装する
description: 見出しのスタイルに、グラデーションのボーダーを導入したい
thumbnail: true
---

## ソースコード

```css
h2 {
  padding-left: 10px;
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 1.6em;
  color: darkslategrey;
  border-bottom: solid 3px darkslategrey;
  border-image: linear-gradient(to right, skyblue, darkslategrey) 1;
}
```

以上でこのように表示される.  

![](/images/{{ page.path | replace: "_posts", "posts" | remove: ".md"  }}/image1.png)
