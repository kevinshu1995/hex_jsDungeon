# _Hexschool-JS Dungeon JS 地下城_

## 最近改版了一下~ 使用 TailwindCss，真的很好用，會回不去。

###### javascript, JSDungeon, HexSchool

> 歡迎指教

> 使用語言或技術
>
> -   HTML/PUG (Bark!
> -   CSS/SCSS/TailwindCss
> -   Pure JavaScript
> -   Gulp

## Multiplication-Chart 九九乘法表 - 001 - <a href="https://kevinshu1995.github.io/hex_jsDungeon/jsDun-001.html" target="_blank">Demo 網頁連結</a>

![demo](https://raw.githubusercontent.com/kevinshu1995/hex_jsDungeon/gh-pages/assets/images/dungeon/001-MultiplicationChart.jpg)

## Clock 時鐘 - 002 - <a href="https://kevinshu1995.github.io/hex_jsDungeon/jsDun-002.html" target="_blank">Demo | 網頁連結</a>

![demo](https://raw.githubusercontent.com/kevinshu1995/hex_jsDungeon/gh-pages/assets/images/dungeon/002-clock.jpg)

## Calculator 計算機 - 003 - <a href="https://kevinshu1995.github.io/hex_jsDungeon/jsDun-003.html" target="_blank">Demo | 網頁連結</a>

![demo](https://raw.githubusercontent.com/kevinshu1995/hex_jsDungeon/gh-pages/assets/images/dungeon/003-calculator.jpg)

## World Clock 世界時鐘 - 004 - <a href="https://kevinshu1995.github.io/hex_jsDungeon/jsDun-004.html" target="_blank">Demo | 網頁連結</a>

![demo](https://raw.githubusercontent.com/kevinshu1995/hex_jsDungeon/gh-pages/assets/images/dungeon/004-worldClock.png)

## AQI 全台空氣指標儀表板 - 005 - <a href="https://kevinshu1995.github.io/hex_jsDungeon/jsDun-005.html" target="_blank">Demo | 網頁連結</a>

![demo](https://raw.githubusercontent.com/kevinshu1995/hex_jsDungeon/gh-pages/assets/images/dungeon/005-aqi.jpg)

## 部落格 Blog

每一個頁面都有寫一篇文章簡單解釋我的思考方向與實作方式，歡迎來看看

<a href="https://kevinshu1995.github.io/blog" target="_blank">部落格 - Blog</a>

###### gulp-gh-pages 可能會有的問題

> -   問題
>     `[14:43:06] TypeError: Cannot read property '0' of null`
> -   解決
>
> ```
> cd node_modules/gulp-gh-pages/
> npm install --save gift@0.10.2 // 安裝指定版本
> cd ../../ // 移動返回到根目錄
> gulp deploy // 重新執行 deploy
> ```
