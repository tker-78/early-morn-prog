---
title: Run Jekyll on your computer to speed up testing. 
---

## Rubyのバージョン
Rubyのバージョンは2.x系を使用する.  
Ruby3では`webrick`が標準ライブラリから外れてしまったので、別途インストールが必要になり面倒なので、バージョンは`2.6.8`を使用する.  

```bash
$ rbenv install 2.6.8
$ rbenv local 2.6.8
```

## bundlerのインストール
bundler gemをインストールする.  
```zsh
$ gem install bundler
$ bundler -v
Bundler version 2.3.18
```

Gemfileを作成する.  
```zsh
$ bundle init
```

```Ruby:Gemfile
gem ‘jekyll’
gem ‘jekyll-theme-minimal’
gem ‘github-pages’, group: :jekyll_plugins
```

```zsh
$ bundle install
$ bundle exec jekyll serve
```

`localhost:4000`に接続する.  


