---
title: JSONの読取りエラーの解消
description: NEWS APIから取得したJSONデータを解析する際に、`control characters are not allowed at line 1 column 1`というエラーが表示されてビルドに失敗した. 解決法を解説する.  
---

## 何が起きているのか
[ここ](https://stackoverflow.com/questions/56461122/jekyll-build-error-control-characters-not-allowed-in-json-file)の情報によると、NON ASCIIデータがJSONに含まれることで起きているエラーの模様.  

## 解決法
エンコーディング時にオプションを指定する.  

```ruby
def encoding_options
    {
      :invalid           => :replace,  # Replace invalid byte sequences
      :undef             => :replace,  # Replace anything not defined in ASCII
      :replace           => '',        # Use a blank for those replacements
      :universal_newline => true       # Always break lines with \n
    }
 end
 ```


`lib/news.rb`に下記の記述を追記する.  

```ruby

def save
  ...
  encoded = response_body.encode(Encoding.find('ASCII'), encoding_options)
  ...
end


def encoding_options
  {
  		invalid: :replace,
  		undef: :replace,
  		replace: '',
  		universal_newline: true
  }
end

```


以上で、JSONファイルの保存時にNon-ASCII文字が取り除かれる.  

再度JSONファイルを生成して、無事にビルドも成功した.

