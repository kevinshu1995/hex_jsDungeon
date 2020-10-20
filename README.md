# _Hexschool-JS Dungeon JS 地下城_

###### javascript, JSDungeon, HexSchool

> 歡迎指教

> Language
>
> -   HTML/PUG (Bark!
> -   CSS/SCSS
> -   JavaScript

## Multiplication-Chart 九九乘法表 - 001 - <a href="https://kevinshu1995.github.io/hex_jsDungeon/jsDun-001.html" target="_blank">Demo 網頁連結</a>

![demo](https://raw.githubusercontent.com/kevinshu1995/hex_jsDungeon/gh-pages/assets/images/cover001.jpg)

## Clock 時鐘 - 002 - <a href="https://kevinshu1995.github.io/hex_jsDungeon/jsDun-002.html" target="_blank">Demo | 網頁連結</a>

![demo](https://raw.githubusercontent.com/kevinshu1995/hex_jsDungeon/gh-pages/assets/images/cover002.jpg)

## Clock 計算機 - 003 - <a href="https://kevinshu1995.github.io/hex_jsDungeon/jsDun-003.html" target="_blank">Demo | 網頁連結</a>

![demo](https://raw.githubusercontent.com/kevinshu1995/hex_jsDungeon/gh-pages/assets/images/cover003.jpg)

> 1. 指令列表
>
> -   `gulp` - 執行開發模式(會開啟模擬瀏覽器並監聽相關檔案)
> -   `gulp build` - 執行編譯模式(不會開啟瀏覽器)
> -   `gulp clean` - 清除 dist 資料夾
> -   `gulp deploy` - 將 dist 資料夾部署至 GitHub Pages
>     <br>

> 2. ~~不編譯 vendor 與 concat js~~
> 3. 各種~~插劍~~ 插件
>
>     1. CSS 框架 : 使用 foundation-sites ^6.6.3
>     2. 各別練習頁面依檔案引入.js 檔
>     3. vendor.js 包含 jquery.min.js, foundation.min.js, popmotion.min.js

> 3. 初始設定
>
>     1. 在終端機安裝 gulp，繼續輸入指令 npm i gulp@4 -g 按 Enter 安裝，輸入 gulp -v 查詢是否有回報版本號。
>     2. 輸入指令 npm install 安裝插件


###### gulp-gh-pages 可能會有的問題
- 問題
`[14:43:06] TypeError: Cannot read property '0' of null`
- 解決
```
cd node_modules/gulp-gh-pages/
npm install --save gift@0.10.2 // 安裝指定版本
cd ../../ // 移動返回到根目錄
gulp deploy // 重新執行 deploy
```