---
title: "ブログページに画像のリンクを貼る"
description: "ブログのポストにはMarkdown形式を使用しているが、Markdownの画像リンクの貼り方ではまったので、記録しておく. "
category: githubpages
comment: true
---



ブログのポストにはMarkdown形式を使用しているが、Markdownの画像リンクの貼り方ではまったので、記録しておく.  

通常、画像のリンクは、`![](相対パス)`で記述するが、Jekyllの場合は`![](絶対パス)`となる.  

しかし、いちいち`![](http://tker-78.github.io/early-morn-prog/images/…)`と記述していたら手間がかかってしょうがないので、

{% raw %}
```markdown
![]({{site.url}}/{{site.baseurl}}/imageパス)
```
{% endraw %}

の記述に簡略化する.  

_config.ymlにパスの記述は必要
```yaml
url: https://tker-78.github.io
baseurl: /early-morn-prog
```