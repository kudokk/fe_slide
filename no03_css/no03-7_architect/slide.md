## CSS 設計

<a href="../">戻る</a>

---

#### もくじ

- CSS 設計とは
  - CSS 設計はなぜ必要なのか
  - CSS 設計をせずに困る例
- CSS設計の紹介の前に
  - 詳細度の統一
- BEM
  - BEMとは
  - 具体的な BEM の書き方
  - デリバリープレミアム で考える BEM
- 代表的な CSS 設計手法
  - FLOCSS
    - FLOCSS とは
  - SMACSS
    - SMACSSとは
- まとめ

---

## CSS 設計とは

--

### CSS 設計とは

CSS 設計とは、CSS を記述する時のルールとなるものです。  
プロジェクト毎に適した CSS 設計を採用することで、「良い CSS※」にすることができます。

<p class="-mt36 -small">※良いCSS = </p>
<ul>
  <li>予測しやすい: <span class="fragment">クラス名を見ただけでなんとなくどんな使い方がされているかわかる</span></li>
  <li>再利用しやすい: <span class="fragment">既存のモジュールから新しいモジュールを簡単に作れる</span></li>
  <li>保守しやすい: <span class="fragment">あるモジュールを追加・更新しても他のモジュールに影響がない</span></li>
  <li>拡張しやすい: <span class="fragment">文字の大きさ違い、色違いなどのパターン違いを容易に作成できる</span></li>
</ul>

--

### CSS 設計はなぜ必要なのか

CSS 設計がないと、大規模なサイトを複数人で運用するときに、予測・再利用・保守・拡張が難しくなり、コード量が増大していきます。

また、<b class="-u">フロントエンドエンジニアが CSS を書くのに頭を悩ませ、時間を使っている部分は CSS 設計です。</b>
CSS 単体で書くことについては、そんなに時間を使いません。

---

#### CSS設計の紹介の前に
- 詳細度の統一
- BEM（クラス名の命名規則）

-- 

#### CSS設計の紹介の前に
- 詳細度の統一

<p>前章でお話しした、セレクタごとに詳細度（優先度）が違う点は保守性・拡張性などに大きく影響してしまいます。</p>

<p class="-mt24">よって、CSS設計は、classセレクタのみで設計を行なっていくことが多いです。</p>

--

#### CSS設計の紹介の前に
- BEM（クラス名の命名規則）

BEMは、正確に言うと<span class="-b">命名規則</span>です。  
更に、BEMを元にしたMindBEMdingという命名規則のことも含めて、BEMと呼ぶことが多いので、ここでも倣っていきます。


<p class="-mt36">名前にも使用されているように<span class="-b">Block</span>, <span class="-b">Element</span>, <span class="-b">Modifier</span>という概念を元に命名していきます。</p>

-- 

#### CSS設計の紹介の前に
- BEM（クラス名の命名規則）

Webページのモジュールを<span class="-b">Block</span>という単位で扱います。  
また、Blockの中の要素を<span class="-b">Element</span>とします。（ここら辺の粒度は特に決まってません）
<img src="./img/page_block.png" width="300">
<img src="./img/tab_element.png" width="300">

<a href="https://app.codegrid.net/entry/bem-basic-1">参考: BEMによるフロントエンドの設計(CodeGrid)</a>

--

### 具体的な BEM の書き方

web サイトによくある<span class="-b">カード</span>型のコンポーネントを BEM を用いて記述してみます。
<img src="./img/card.png" width="180">

https://jsbin.com/hereroxufe/1/edit?html,css,output

-- 

### 具体的な BEM の書き方

class名が、block名と<span class="-b">block__element</span>のみで構成されています。  
また、sassの&を使用することで、より効率的にセレクタの指定をしています。

```css
.card__img {
}
```

<br>
また、色違い、文字サイズ違いなどのパターン違いを<span class="-b">Modifier</span>として定義します。  

```css
.card__description--important {

}
```
<br>
このBEMを用いてた上で、チーム内のガイドラインを設けるか、これから紹介するCSS設計手法と組み合わせることが多いです。
-- 

一応、htmlとcssをスライドに貼っておきます。
html
```html
<div class="card">
  <div class="card__img-wrapper">
    <img class="card__img" src="https://dummyimage.com/400x300/ddf" />
  </div>
  <div class="card__description-wrapper">
    <p class="card__description">
      ここにカードの説明を挿入。ここにカードの説明を挿入。ここにカードの説明を挿入。
    </p>
    <p class="card__description card__description--important">
      ここに重要な説明を挿入。ここに重要な説明を挿入。ここに重要な説明を挿入。
    </p>
  </div>
</div>
```

--

scss は以下のようになります。

```scss
.card {
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px #222;
  padding: 16px;

  &__img-wrapper {
    width: 100%;
    height: 150px;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__description-wrapper {
    padding-top: 16px;
  }

  &__description {
    color: #444;
    &--important {
      color: #e22;
    }
  }
}
```

BEM を使用することで上記のように、グローバルな名前空間を `card` のみ使用して記述することができました。

--

### デリバリープレミアム で考える BEM

<img src="./img/media.png" width="200">
あくまで１例になりますが、デリバリープレミアムのモジュールをBEMで実装してみました。  
これで似たものに再利用しやすくなるのではないでしょうか  
https://jsbin.com/kikawoxado/1/edit?html,css,output

-- 

html
```html
<section class="ranking">
  <h3 class="ranking__titleWrap">
    <span class="ranking__title">2,000円台商品の売れ筋ランキング</span>
  </h3>
  <ul class="ranking__list">
    <li class="ranking__item">
      <a href="#" class="ranking__link">
      <div class="ranking__numberWrap">
        <img src="https://delivery.gnavi.co.jp/premium/assets/images/top/icon_rank01.png?201902010000" alt="" class="ranking__number">
      </div>
      <div class="ranking__thumbWrap">
        <img src="https://delivery-biz.gnavi.co.jp/img_item_big/6839711800002920519_1_prem.jpg?20180605102001" alt="商品画像" class="ranking__img">
      </div>
      <div class="ranking__textWrap">
        <div class="ranking__shopTitle">築地うな重『極』</div>
        <div class="ranking__shopDesc">築地うなぎ食堂</div>
        <div class="ranking__priceWrap">2,880円<span class="ranking__price">(税込)</span></div>
      </div>
     </a>
    </li>
    <li class="ranking__item">
      <a href="#" class="ranking__link">
      <div class="ranking__numberWrap">
        <img src="https://delivery.gnavi.co.jp/premium/assets/images/top/icon_rank02.png?201902010000" alt="" class="ranking__number">
      </div>
      <div class="ranking__thumbWrap">
        <img src="https://delivery-biz.gnavi.co.jp/img_item_big/6839711800002925999_1_prem.jpg?20190130134001" alt="商品画像" class="ranking__img">
      </div>
      <div class="ranking__textWrap">
        <div class="ranking__shopTitle">本さわら西京漬け</div>
        <div class="ranking__shopDesc">銀座 十石</div>
        <div class="ranking__priceWrap">2,160円<span class="ranking__price">(税込)</span></div>
      </div>
     </a>
    </li>
    <li class="ranking__item">
      <a href="#" class="ranking__link">
      <div class="ranking__numberWrap">
        <img src="https://delivery.gnavi.co.jp/premium/assets/images/top/icon_rank03.png?201902010000" alt="" class="ranking__number">
      </div>
      <div class="ranking__thumbWrap">
        <img src="https://delivery-biz.gnavi.co.jp/img_item_big/6839711800002931426_1_prem.jpg?20181214184001" alt="商品画像" class="ranking__img">
      </div>
      <div class="ranking__textWrap">
        <div class="ranking__shopTitle">頑固オヤジの特上握り</div>
        <div class="ranking__shopDesc">鮨・割烹 幸太鮨</div>
        <div class="ranking__priceWrap">2,160円<span class="ranking__price">(税込)</span></div>
      </div>
     </a>
    </li>
  </ul>
  <div class="moreButton">
    <a href="https://delivery.gnavi.co.jp/premium/area/pr13/bento/rank/prc3/" class="moreButton__link">以降のランキングを見る</a>
  </div>
</section>
```

--

CSS
```scss
* {
  margin: 0;
  padding: 0;
  font-family: "游ゴシック", YuGothic, "ヒラギノ角ゴPro W3", "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "MS PGothic", "メイリオ", Meiryo, sans-serif;
}

ol, ul {
  list-style: none;
}

.ranking {
  &__titleWrap {
    text-align: center;
    position: relative;
    margin: 0 0 10px;
    
    &::after {
      position: absolute;
      top: 18px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #a98423;
      content: "";
      display: block;
      z-index: -1;
    }
  }
  
  &__title {
    font-size: 1.4px;
    font-weight: bold;
    display: inline-block;
    background-color: #fff;
    padding: 0 8px;
  }

  &__item {
    padding: 20px 0 20px;
    position: relative;
    
    &:nth-of-type(n + 2) {
      border-top: 1px solid gray;
    }
  }

  &__link {
    display: flex;
    text-decoration: none;
    padding: 10px 15px;
  }
  
  &__numberWrap {
    width: 15px;
    position: absolute;
    top: 30px;
    left: 20px;
  }
  
  &__number {
    width: 100%;
  }
  
  &__thumbWrap {
    display: table-cell;
    width: 156px;
    vertical-align: top;
  }
  
  &__img {
    width: 100%;
  }
  
  &__textWrap {
    padding-left: 10px;
  }
  
  &__shopTitle {
    font-size: 14px;
    font-weight: bold;
    color: #a98423;
    text-decoration: underline;
    line-height: 1.43;
    padding: 0 0 10px;
  }
  
  &__shopDesc {
    font-size: 12px;
    color: #666;
    line-height: 1.43;
    padding: 0 0 5px;
  }
  
  &__priceWrap {
    font-size: 14px;
    color: #c12828;
  }
}

.moreButton {
  &__link {
    display: block;
    text-align: center;
    width: 100%;
    border: 1px solid #eaddba;
    color: #a98423;
    border-radius: 4px;
    font-size: 1.2rem;
    padding: 15px 0;
  }
}
```

---

## 代表的な CSS 設計手法
- FLOCSS
- SMACSS

---

## FLOCSS

--

### FLOCSS とは

<p class="-mb24">３つのレイヤーと、Objectの子レイヤーによって構成されています。</p>
<ul>
  <li>Foundation : <span class="-mini">ブラウザスタイルの初期化, ページ全体の背景や基本的なタイポグラフィなど</span></li>
  <li>Layout : <span class="-mini">ページを構成するヘッダー、メイン、サイドバーなどのページ全体のレイアウトなど</span></li>
  <li>Object 
    <ul>
      <li>Component : <span class="-mini">最小限の機能を持ったものなど</span></li>
      <li>Project <span class="-mini">記事一覧や画像ギャラリーなどコンテンツを構成する具体的な要素など</span></li>
      <li>Utility :<span class="-mini"> 微細なスタイル調整など</span></li>
    </ul>
  </li>
</ul>


<p class="-mt24">命名</p>

```css
.c-dialog{}, .p-comments{}, .u-pt10{}
```
<p>component, project, utilsはクラス名に接頭辞をつけることが推奨されています</p>

--

<p class="-mt24">考案者が日本人ということも有り、日本では知名度が高いです。<br>詳しくは<a href="https://github.com/hiloki/flocss">こちら</a>をみてください。</p>

---

## SMACSS

--

### SMACSSとは

SMACSSはCSSを以下の5つにカテゴライズし、命名規則を設定することで、書きやすいCSS環境を目指しています。  

* Base : <span class="-mini">FLOCSSのFoundationと同じく、ブラウザスタイルの初期化, ページ全体の背景や基本的なタイポグラフィなど</span>
* Layout : <span class="-mini">FLOCSSのLayoutと同じく、ページを構成するヘッダー、メイン、サイドバーなどのページ全体のレイアウトなど</span>
* Module : あわゆる再利用できるオブジェクト
* State : JS制御などによって切り替わる状態を表す
* Theme : 広い範囲でスタイルを変更する

<p class="-mt24">命名</p>

```css
.l-grid{}, .is-active
```

詳しいルールは公式の<a href="https://smacss.com/files/smacss-ja.pdf">https://smacss.com/files/smacss-ja.pdf</a>を見た方が良いのですが、長いので、...

---

CSS設計の詳細に関しては、この緑の本に勝るものはございませんので、ぜひ一読ください。  
フロントエンドの書籍棚にもあります。  

<img src ="./img/green.png" width="300">
<a href="https://www.amazon.co.jp/Web%E5%88%B6%E4%BD%9C%E8%80%85%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AECSS%E8%A8%AD%E8%A8%88%E3%81%AE%E6%95%99%E7%A7%91%E6%9B%B8-%E3%83%A2%E3%83%80%E3%83%B3Web%E9%96%8B%E7%99%BA%E3%81%AB%E6%AC%A0%E3%81%8B%E3%81%9B%E3%81%AA%E3%81%84%E3%80%8C%E4%BF%AE%E6%AD%A3%E3%81%97%E3%82%84%E3%81%99%E3%81%84CSS%E3%80%8D%E3%81%AE%E8%A8%AD%E8%A8%88%E6%89%8B%E6%B3%95-%E8%B0%B7-%E6%8B%93%E6%A8%B9/dp/4844336355/ref=pd_lpo_sbs_14_img_0?_encoding=UTF8&psc=1&refRID=X7Q9EPWGGJ5M99N8KHMW">Web制作者のためのCSS設計の教科書</a>

---

## まとめ

- CSS 設計は良い CSS を書くためのルールのこと
- 良い CSS = <b>拡張・保守・予測しやすい CSS</b>のこと
- BEM は命名規則、FLOCSS, SMACSS は設計手法
- 緑本をご一読いただきたいです。
