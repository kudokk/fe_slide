### #03-2. Sass

<a href="../">戻る</a>

---

#### もくじ 📝

* Sassとは
* Sassの機能・構文
---

#### Sassとは

Sassは CSSのメタ言語などと呼ばれている、<br><strong class="-u">「CSSをより構造的に整理して記述することができるCSS」</strong>です。  
<p class="-mt36">CSSに限らず、ある処理に対して、データ入力やデータ整形などの準備的な処理を行うことをプリプロセッサと呼びますので、<span class="-b">SassはCSSのプリプロセッサ</span>という立ち位置になります。  
他にも<strong class="-u">less, PostCSS </strong>がCSSのプリプロセッサです。</p>

--

#### Q. 構造的に整理して記述するとは

CSS
```css
#contents a {
  text-decoration: none;
}
#contents a:hover {
  text-decoration: underline;
}
```
Sass
```css
#contents {
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
```

<p>同じ名前を<span class="-b">&</span>や<span class="-b">ネスト構造</span>を使用して省略できます。</p>
<p>最終的には Sass記法から通常のCSSにコンパイルされます。</p>

---

#### Q. 他によく使用されるSassの機能・構文
- ①import
- ②変数
- ③mixin

import, 変数は、skilltrans-fe_201904_testリポジトリのsrc/sassを見てください。

-- 

##### ①import
src/sass/lp.scssを見てみると大量にあります。

```css
@import "filePath";
```
モジュールごとに分割したscssファイルを１つのscssに集約しています。

-- 

##### ②変数

実は、CSSプロパティごとに変数を定義することができます。  
src/sass/base/_var.scss

```css
$font-size-xxxl: 1.57143rem; /* 22px */
$font-size-xxl: 1.35714rem; /* 19px */
$font-size-xl: 1.21429rem; /* 17px */
$font-size-l: 1.14286rem; /* 16px */
$font-size-m: 1.07142rem; /* 15px */

.text1 {
  font-size: $font-size-l;
}
```
-- 

##### ③mixin

--

CSS
```css
.text1 {
  color: black;
  font-size: 20px;
}
.text2 {
  color: black;
  font-size: 20px;
  font-weight: bold;
}
```
Sass
```css
@mixin hoge() {  // <- cssプロパティをまとめて一つのモジュールとして管理
  color: black;
  font-size: 20px;
}
.text1 {
  @include hoge();
}
.text2 {
  @include hoge();  // <- includeで吐き出される
  font-weight: bold;
}
```

-- 

他にもSassにはfor文などの多くの機能が備わっていますが、可読性などを考慮して使用されることはあまりありません。

---

#### まとめ

* CSS プリプロセッサは<strong class="-u">「凄い構文が使える CSS」</strong>
* Sassを使うと、<strong class="-u">少ないコード量で書きたいことが簡潔に書ける</strong>
* Sassには、ネスと構造, import, 変数, mixinなどの機能がある
