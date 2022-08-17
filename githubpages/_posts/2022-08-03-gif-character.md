---
title: GIFでタイトル文字を表現する
description: GitHub Pagesのトップページ部分にCLI文字でブログタイトルを表示する方法を解説する
comment: true
thumbnail: true
---

ブログのタイトルがCLI上で表示できたらちょっとハッカーっぽくないか?  
実装してみることにしたので、その方法を解説する.  

## 完成形
<script id="asciicast-eskeUH2K4i7WLsggkkZzhvDqS" src="https://asciinema.org/a/eskeUH2K4i7WLsggkkZzhvDqS.js" async data-autoplay="true" data-size="big" autoplay="true"></script>

## GIFイメージを作成する 

Pagesを使用して表示したいテキストを拡大表示する.  
![]({{ "/images/githubpages/_posts/2022-08-03-gif-character/image1.png" | relative_url }})

これを数ポイント(任意)ずつ横にずらしていき、10枚ほど画像ファイルとして保存する.   


## 画像をASCII文字に変換する
[このページ](https://www.text-image.com/convert/ascii.html)を使用して画像をASCII文字に変換する.  

このようなテキストが表示されるので、テキストファイルとして保存する. 
```
                                                                    :!.                             
                                       ^GP5555555555555PP.     .:...?@!...: ^BP55555BY              
                                       ^@J ............G&.     75YYYG@PYY55:^@J ...:&P     ^GPPPPPPP
                                       ^@GJJJJJJJJJJJJJ#&.      .:^:J@!:^:. ^@? .. .&P     .^^^^^^^^
                                       ^@Y^^^^^^^^^^^^^G&.      J@YJJYJJY@7 ~@B5555P@P              
                                       ^@P!!!!!!!!!!!!!B@.      J@?!!!!!?@7 ~@?    .&P              
                                       :?777777#@?7777777.      J@7!!!!!?@7 !@7 ...:&P              
                                     ^^:::::::.G&^::::::::^:    J@YJJYJJY@7 ?@P55555@P              
                                    :P555555555#@P55555555PY    .:^:J@!:^:. G#.    .&P              
                                               P&.             Y5555G@P555?~@J     .&P          .~JG
                                               P&.             .....?@~...!&G  .^:.^@P        7G##P?
                                               P&:                  7@^  :G5.  :PPPPP~        .!^.  
                                               ::                   .:.                             

```

## コマンドラインで文字を表示する

```ruby
for i in 0..6 do
  num = i.to_s
  File.open("./gif#{num}.txt", "r") { |f|
    puts f.readlines
    sleep 0.5
    system 'clear'
  }
end
```

## CLIのレコーディングを行う
### asciinemaのインストール
`asciinema`とは、CLIの内容をレコーディングしてくれるパッケージ.  
homebrewで管理されているので、下記のコマンドでインストールする.  
```bash
$ brew install asciinema
```

### asciinemaの実行
下記のコマンドでレコーディングを開始する.  
```bash
$ asciinema rec [filename]
```

レコーディングが完了したら`ctrl+D`でレコーディングを停止する.  

レコーディングのアップロード
```bash
$ asciinema upload [filename]
```

アップロード先のリンクが表示されるので、リンク先を確認して、shareボタンを押し、
表示されている`Embed the player`のリンクを, `.js`, `.css`ファイルをソースファイルに貼り付ける.　　

![]({{ "/images/githubpages/_posts/2022-08-03-gif-character/image3.png" | relative_url }})


<script id="asciicast-eskeUH2K4i7WLsggkkZzhvDqS" src="https://asciinema.org/a/eskeUH2K4i7WLsggkkZzhvDqS.js" async data-autoplay="true" data-size="big" autoplay="true"></script>


このように動くタイトル文字が完成.  

ページを開いた時またはリロード時に自動再生したい場合は、
`<script>`に`data-autoplay="true"`を追記する.  






