#### #03-1. CSS概要

<a href="../">戻る</a>

---

#### もくじ 📝

* CSSとは
* CSSのバージョン
* リセット系CSS
* CSSの表現（ピックアップ）
* ブラウザにおけるCSSの見方

---

#### CSS とは

--

#### CSS とは

CSSはCascading Style Sheets<br>（カスケーディング・スタイル・シート)の略です。

<blockquote class="-small">Cascading とは、「階段状の滝のような」「連鎖的に伝わる」という意味ですが、 様々なレベルで定義されたスタイルは、上流で定義されたものが下流へ引き継がれて文書に適用されます。 このようにスタイル指定が段階的に引き継がれて文書に適用されるのが CSS の大きな特徴です。</blockquote>

引用：http://www.htmq.com/csskihon/006.shtml

<br>
<span class="-mt36">CSS は、web ページの見た目（スタイル）を調整する宣言的な言語</span>
<p>「上流から下流に引き継がれて適用される」というイメージをお持ちいただければ問題ありません。</p>

--

#### CSSは、CSSファイルに

<span>HTML5 以前は font タグや,marquee タグがなどが存在し、見た目も HTML で宣言することができました。</span>

<pre><code><font size="1" color="#0000ff">懐かしのフォントタグ</font>
<marquee>デフォルト</marquee>
</code></pre>


<p class="-mt36 fragment">しかし、見た目の宣言を HTML を実施してしまうと<b class="-u">文章構造が複雑</b>になってしまい、サイトにどのような情報があるのか分かりにくくなってしまいます。<br>その他にも、HTMLタグでの装飾はデザインの変更が実施し難くなるなどのデメリットがあります。</p><br>
<p class="fragment">これらの背景から、<b class="-u">文章構造</b>と<b class="-u">表現の分離</b>のために CSS は誕生しました。</p>

---

#### CSS のバージョン

--

#### CSS のバージョン

javascript にバージョンがあるように、<br>CSS も少しずつバージョンアップをして今日に至ります。

<img src="./img/cssVersion.png" width="500">

<p class="-ex-small">出典：<a href="https://developer.mozilla.org/ja/docs/Web/CSS/CSS3">CSS3 | MDN</a></p>

<p class="-mt12">・大事なのは日々バージョンアップしているので、弊社の対象ブラウザすべてで、<br>全てのCSSが適用できるわけではないということです。</p>
<p class="-mt12">・余談ですが、実は、CSS3という表現は正しくありません。CSS2以降は、モジュールごとに仕様が策定されています。</p>

---

#### リセット系CSS

各ブラウザにはデフォルトで、スタイルが適用されています。  
これらを統一させる役割もったCSSのことです。

--

#### リセット系CSS

- Reset.css: すべてリセットするタイプ
- Normalize.css: 一部デフォルトのスタイルを利用する

個人的には、全てのブラウザで同様の表示を目指すので、Reset.cssを推してます。  
例えば、<a href="https://cssreset.com/scripts/eric-meyer-reset-css/">こちら</a>です。

---

#### ちなみに、CSS だけでこんなことができます
- ①簡単なアイコン
- ②状態変化時の表現
- ③動的な表現も少し

紹介していきますが、こんな表現もできるのかくらいの認識で問題ありません。

-- 

##### ①簡単なアイコン

<p>いくつかのアイコンはCSSでいけそうだと感じます。</p>
<img src="./img/arrow.png" width="250">

<a href="https://cssicon.space/#/" class="-mt36">CSSによるiconについてまとめているサイト</a>でわかるように表現範囲は広いです。

-- 

##### ②状態変化時の表現
<p>まずは、「日本全国繁盛店」下の画像をマウスホバーしてみてください。</p>
<a href="https://pro.gnavi.co.jp/" class="-small">ぐるなびPRO</a>  
<p>このようにその要素の状態に応じて、スタイルを表現できます。</p>  

- visited擬似クラス: 訪問済のリンクにスタイルを適用する
- hover擬似クラス: カーソルが乗っている要素にスタイルを適用する
- focus擬似クラス: フォーカスされた要素にスタイルを適用する <a href="http://www.htmq.com/selector/link.shtml">など</a>

<img src="./img/hover.png" width ="300">
<p class="-mt12">ちなみに、開発者モードのelements欄で<span class="-b">#contents a</span>を選択状態にして、Stylesの<span class="-b">:hov</span>をクリックすると状態を変更できます。</p>

-- 

##### ③動的な表現も少し

Apple WWDC2015 のロゴ(のアーカイブ)
https://cssanimation.rocks/demo/wwdc15/

CSSプロパティとしては下記を使用しています。
- transition
- animation
- keyframes

---

#### ブラウザにおけるCSSのデバッグ
- 特定の要素に適用されているCSSプロパティの見方
- ブラウザ上でのデバッグ

--

#### ブラウザにおけるCSSのデバッグ
- 特定の要素に適用されているCSSプロパティの見方  
<a href="https://pro.gnavi.co.jp/" class="-small">ぐるなびPRO</a>  
<p class="-mt36">Styles欄を見ていただくと、CSSプロパティがいくつかに区切られて出てきます。  
上にあるほど優先され、上で上書きされているものは取り消し線がついています。  </p>
<img src="./img/devtool_css.png" width="300">

--

#### ブラウザにおけるCSSのデバッグ
- ブラウザ上でのデバッグ

<img src="./img/devtool_back.png" width="500">
<p>element.style欄は空ですが、ここをクリックして、CSSプロパティを入力すると、ブラウザ上でデバッグできます。<br> あくまでブラウザ上なので、リロードすると消えます。</p>

---

### まとめ

* CSS は見た目を表現する言語
* CSSはCSSファイルに
* CSS にもバージョンが有る
* 簡単なアイコン、hoverなどの状態変化時、アニメーションも表現できる
* ブラウザでCSSのデバッグが可能
