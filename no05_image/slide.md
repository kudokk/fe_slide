## #07. 画像の最適化

<a href="../">戻る</a>

---

### もくじ 📝

- 画像は重い（再確認）
- 画像の最適化 🔨
  - ファイル形式
  - 圧縮
  - sprite画像
  - アイコンをCSSで表現する
  - base64
  - 画像の遅延表示

---

### 画像は重い（再確認）

- ①小さい画像でもかなりのバイト数になる
- ②画像１枚、１リクエスト

---

## 画像の最適化 🔨
- ファイル形式
- 圧縮
- sprite画像
- base64
- 画像の遅延表示
- アイコンをCSSで表現する

--

## 画像の最適化 🔨
- ファイル形式

<p class="-mt24">例えばこのような選択があります</p>
<ul>
  <li class="-u"><strong>写真：jpg</strong></li>
  <li class="-u"><strong>透過も含めた画像：png</strong></li>
  <li>彩りの少ないイラスト：gif（非推奨）</li>
</ul>

--

<p>下記の特徴を元に使い分けていきます。</p>

<p class="align-left">拡張子比較</p>
<table class="small-text">
  <tbody>
    <tr><th></th><th>画像形式</th><th>色数</th><th>圧縮</th><th>透過</th></tr>
    <tr><td class="-u"><b>png-8</b></td><td>ラスター</td><td>256色</td><td>可逆</td><td>○</td></tr>
    <tr><td class="-u"><b>png-24</b></td><td>ラスター</td><td>1670万色</td><td>可逆</td><td>○</td></tr>
    <tr><td class="-u"><b>jpg</b></td><td>ラスター</td><td>1670万色</td><td>非可逆</td><td>✕</td></tr>
    <tr><td class="-u"><b>gif</b></td><td>ラスター</td><td>256万色</td><td>可逆</td><td>○</td></tr>
    <tr><td class="-u"><b>svg</b></td><td>ベクター</td><td>1670万色</td><td>非可逆</td><td>○</td></tr>
    <tr><td class="-u"><b>webp(可逆)</b></td><td>ラスター</td><td>1670万色</td><td>可逆</td><td>○</td></tr>
    <tr><td class="-u"><b>webp(非可逆)</b></td><td>ラスター</td><td>1670万色</td><td>非可逆</td><td>○</td></tr>
  </tbody>
</table>

<p class="-mt24">用語説明</p>
<table class="small-text">
  <tbody>
    <tr><td><strong class="-u">色数</strong></td><td>1px に選択できる色の種類数</td></tr>
    <tr><td><strong class="-u">圧縮</strong></td><td>非可逆の場合、保存しなおすだけで劣化します</td></tr>
  </tbody>
</table>

--

## 画像の最適化 🔨
- 圧縮

<a href="https://www.npmjs.com/package/imagemin">imagemin</a>というnpm moduleを使用して画像の圧縮を行います。  

<span class="-b">圧縮</span>とはいえ、解像度の変更はしていません。不要なメタデータの削除を行なっています。

-- 

## 画像の最適化 🔨
- sprite画像

<p><img src="./img/sprite_common.png" width="200"></p>  
<p>複数の画像を1つの画像ファイルとしてまとめ、CSSのbackgroundプロパティで部分的に表示します。</p>
```css
  background-image: url(../img/sprite_common.png?201810241907);
  background-position: -167px -72px;
  background-size: 236px 195px;
  width: 34px;
  height: 31px;
```

<a href="https://www.npmjs.com/package/spritesmith">spritesmith</a>というnpm moduleを使用すると、スプライト画像の自動生成と、それを表示するCSSのmixinの自動生成をすることができます。

-- 

## 画像の最適化 🔨
- base64

<span class="align-left">base64 はすべてのデータをアルファベット(a~z, A~z)と数字(0~9)、一部の記号(+,/)の64文字で表すエンコード方式です。</span>

<img src="./img/gu.png" width="180">
<p><span class="base64">data:image/png;base64,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</span><br>↑base64の例</p>


<p class="-mt12">画像を文字でやり取りすることができるため、リクエストせずに済みます。</p>
<p class="-mt12">とはいえ、一定量、容量が増えてしまうため、小さい画像にのみ適用するのが一般的です。また、最近は http2の到来によって、リクエスト数の減少 の必要性も薄れてきました。</p>

-- 

## 画像の最適化 🔨
- 画像の遅延表示

画像の読み込みを遅延させ、ユーザーのスクロール状況によって、画像の読み込みを開始します。  
<a href="https://r.gnavi.co.jp/area/tokyo/rs/?pf=13">検索sp</a>の店舗サムネイルも、<a href="https://www.npmjs.com/package/lazysizes">lazysizes</a>というnpm moduleを利用して実装しています。

-- 

## 画像の最適化 🔨
- CSSでアイコンを作成する

<img src="./img/arrow.png">

<a href="https://cssicon.space/#/" class="-mt36">CSSによるiconについてまとめているサイト</a>

---

**まとめ**

画像の最適化方法として、下記の6つがある  
- 適切なファイル形式の選択
- 圧縮
- sprite画像
- base64
- 画像の遅延表示
- アイコンをCSSで表現する
