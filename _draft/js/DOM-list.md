---
title: リストの値の取得
description: DOM操作で、リストで選択された要素を取得する方法を解説します. 
---

## HTML

```html
    <select id="planet">
      <option value="none">--select planet</option>
      <option value="mercury">MERCURY</option>
      <option value="venus">VENUS</option>
      <option value="earth">EARTH</option>
      <option value="moon">MOON</option>
      <option value="mars">MARS</option>
      <option value="jupiter">JUPITER</option>
      <option value="saturn">SATURN</option>
      <option value="uranus">URANUS</option>
      <option value="neptune">NEPTUNE</option>
      <option value="pluto">PLUTO</option>
    </select>

    <button id="calculate">Caluculate weight</button>
```


    <select id="planet">
      <option value="none">--select planet</option>
      <option value="mercury">MERCURY</option>
      <option value="venus">VENUS</option>
      <option value="earth">EARTH</option>
      <option value="moon">MOON</option>
      <option value="mars">MARS</option>
      <option value="jupiter">JUPITER</option>
      <option value="saturn">SATURN</option>
      <option value="uranus">URANUS</option>
      <option value="neptune">NEPTUNE</option>
      <option value="pluto">PLUTO</option>
    </select>
    <button id="calculate">Caluculate weight</button>
    

## JavaScript

```js
document.addEventListener('DOMContentLoaded', function (){
  document.querySelector("#calculate").addEventListener('click', function() {
    let selectedPlanet = document.querySelector("#planet")
    console.log(selectedPlanet.value)
  })
})
```

<script>
document.addEventListener('DOMContentLoaded', function (){
  document.querySelector("#calculate").addEventListener('click', function() {
    let selectedPlanet = document.querySelector("#planet")
    console.log(selectedPlanet.value)
  })
})
</script>

