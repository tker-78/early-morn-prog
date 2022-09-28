---
title: イベントリスナー
description: イベントリスナーとは、イベントにアクションをひも付ける仕組みのことです. onclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onloadのイベントを、あらゆるDOMオブジェクトにひもづけることができます. 
---

## イベントリスナーのひも付け
`addEventListener()`メソッドを使用します.  


## click

```js
  <div>
    <button id="plus">+</button>
    <span id="number">0</span>
    <button id="minus">-</button>
  </div>

  <script>
    let count = 0;

    const number = document.querySelector("#number");
    const plusBtn = document.querySelector("#plus");
    const minusBtn = document.querySelector("#minus");

    plusBtn.addEventListener("click", (e) => {
      count++;
      number.textContent = count;
    })

    minusBtn.addEventListener("click", (e) => {
      count--;
      number.textContent = count;
    })
  </script>
```


このように、ボタンをクリックすると数字が変化します.  

  <div>
    <button id="plus">+</button>
    <span id="number">0</span>
    <button id="minus">-</button>
  </div>

  <script>
    let count = 0;

    const number = document.querySelector("#number");
    const plusBtn = document.querySelector("#plus");
    const minusBtn = document.querySelector("#minus");

    plusBtn.addEventListener("click", (e) => {
      count++;
      number.textContent = count;
    })

    minusBtn.addEventListener("click", (e) => {
      count--;
      number.textContent = count;
    })
  </script>


## onclick
`onclick`を使うことで、インラインスクリプトとして呼び出すことができます.  

```js
  <div>
    <button onclick="plusBtn()">click me if you want add.</button>
    <button onclick="minusBtn()">click me if you want reduce.</button>
    <span id="number">0</span>
  </div>
  <script>
    let count = 0;
    const number = document.querySelector("#number");
    const plusBtn = () => {
      count++;
      number.textContent = count;
    }

    const minusBtn = () => {
      count--;
      number.textContent = count;
    }
  </script>
```

## keypress
いづれかのキーが押された際に呼び出されます.  
下記のコードでは、ブラウザ状での簡易的なテキストエディタを実装しています.  

```js
  <div>
    <span id="pressedKey">Press any key you want.</span>
  </div>

  <script>
    let pressedKey = document.querySelector("#pressedKey");
    document.body.addEventListener("keypress", (e) => {
      if (pressedKey.textContent == "Press something key you want.") {
        pressedKey.textContent = ""
        pressedKey.textContent += e.key
      }else{
        pressedKey.textContent += e.key
      }
    })
  </script>
```


## イベントの種類
主なイベント名と動作は下記の通りです.  

|イベント|動作のタイミング|
|---|---|
|click|エレメントがクリックされたとき|
|dbclick|エレメントがダブルクリックされたとき|
|mouseenter|マウスポインタがエレメントに入ったとき|
|mouseleave|マウスポインタがエレメントから出たとき|
|mouseover|マウスポインタがエレメント内で動いたとき|
|mouseout|マウスポインタがエレメントから出たとき|
|input|インプットフィールドに値が入力されたとき|
|change|インプットフィールドの値が変更されたとき|
|blur|エレメントがフォーカスされていないとき|
|keydown|キーが押されたとき|
|keyup|キーが離されたとき|
|keypress|いづれかのキーが押されたとき|
|onload|ブラウザがページの読み込みを終えたとき|



