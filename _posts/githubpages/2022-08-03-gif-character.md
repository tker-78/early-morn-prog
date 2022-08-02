---
title: GIFでタイトル文字を表現する
description: GitHub Pagesのトップページ部分にCLI文字でブログタイトルを表示する方法を解説する
category: githubpages
comment: true
thumbnail: true
---

ブログのタイトルがCLI上で表示できたらちょっとハッカーっぽくないか?  
実装してみることにしたので、その方法を解説する.  

![完成形]()

## GIFイメージを作成する

[ezgif](https://ezgif.com/split)を使用してGIFアニメーションを作成する.  

Pagesを使用して表示したいテキストを拡大表示する.  
![]({{ "/images/posts/githubpages/2022-08-03-gif-character/image1.png" | relative_url }})

これを数ポイント(任意)ずつ横にずらしていき、10枚ほど画像ファイルとして保存する.  
![]({{ "/images/posts/githubpages/2022-08-03-gif-character/image2.png" | relative_url }})


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




