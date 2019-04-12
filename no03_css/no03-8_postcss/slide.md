## PostCSS

<a href="../">戻る</a>

---

### もくじ

- PostCSS とは
- sass との比較
- まとめ

---

## PostCSS とは

<div><img src="./img/postcss.png" width="150"></div>
Sassの代用として名前を聞くことも多いかと思いますので、少しだけご紹介します。

--

### PostCSS とは

SassはCSSのプリプロセッサで、PostCSSも同様というお話をしたのですが、PostCSSはCSSのプリプロセッサであり、ポストプロセッサに当たります。  

<p class="-mt24">PostCSS製 のツールとして、<br>ベンダープレックスを自動で付与する<span class="-b">「Autoprefixer」</span>や<br>未来の CSS の構文の一部を今のブラウザで解釈できるようにする「<span class="-b">cssnext」</span>、<br>カスタマイズ性に富んでいる CSS の静的検証ツールである<span class="-b">「stylelint」</span>などが有名です。</p>

--

### PostCSSとは

ちなみに、当初、「Autoprefixer」等のポストプロセッサを開発していたので、CSSのポストプロセッサからPostCSSという名前になりましたが、後々、PostCSSチームは「ポストプロセッサ」という単語を使用しないことにしました。  
https://twitter.com/PostCSS/status/626046993006239744?ref_src=twsrc%5Etfw

---

## PostCSS と sass の比較

--

### PostCSS と sass の比較

<table>
  <tr><th>-</th><th>PostCSS</th><th>Sass</th></tr>
  <tr><td>ビルド速度</td><td>sassより早い</td><td>ふつう</td></tr>
  <tr><td>ベンダープレフィックス付与</td><td>カスタマイズすれば付与できる</td><td>できない</td></tr>
  <tr><td>静的検証</td><td>stylelintで簡単にできる</td><td>ひと手間かかるができる</td></tr>
  <tr><td>入れ子記法</td><td>カスタマイズすればできる</td><td>標準でできる</td></tr>
  <tr><td>変数</td><td>カスタマイズすればできる</td><td>標準でできる</td></tr>
</table>

PostCSS は sass と比較すると大差はありません。
ただ、ベンダープレフィックス付与が簡単にできることは大きなメリットであると考えられます。  
そのため、現環境を今すぐに PostCSS に置き換えるというよりは、新規開発時に導入することをおすすめします。

---

### まとめ

- PostCSS はプリプロセッサであり、ポストプロセッサでもある。
- PostCSS は sass よりカスタマイズ性が高く、ビルド速度が速いです。
- PostCSS は sass 環境を今すぐ置き換えるべきものというより、新しく開発するときに選択するのにおすすめです。
