### #12. ES5, ES201X, jQueryの選択

<a href="../">戻る</a>

---

#### 目次
- ES5とES201X
- jQuery
  - そもそもjQueryとは
  - jQueryのメリット
  - フレームワークの台頭

---

##### ES5とES201X

ES5の記述方法のままで良いのか、ES201Xの記述方法がよいのかについて

-- 

##### ES5とES201X

<span class="tag -es5"></span>
```javascript
var hoge = 'hoge'

function hoge(x, y) {
  return x + y
}
```
<span class="tag -es201x"></span>
```javascript
const hoge = 'hoge'
const hoge = () => x + y
```

今まで、何度かご説明してきましたが、ES201Xには便利な機能、構文が追加され、従来より簡潔な記述ができますので  
選べるなら、できる限りES201Xを選択する方が良いです。

---

##### + jQuery?

<p class="-mt24">jQueryは必要なのか</p>

<p class="-mt24">最近、１０年以上のシェアのあったjQueryを使用しない選択が増えています。<br>時には、<span class="-b">絶対抜いた方が良い</span>という声も聞きますが、<br>ここでは とりあえずjQuery という時代からは一歩進んだとしておきます。</p>

-- 

##### そもそもjQueryとは

そもそもjQueryは、javascriptの<span class="-b">ライブラリ</span>になります。

-- 

##### jQueryのメリット
- ①記述がシンプルになる
- ②ブラウザ間の差異を意識しなくて良くなる

```js
var hoges = document.querySelectorAll('.hoge');
var hoge = Array.prototype.slice.call(hoges,0);  //②
hoge.forEach(function(elm, index) {
  elm.innerText = 'テキストの変更'
})

$('.hoge').each(function(index, element){
  $(element).text('テキストの変更')
})
```
生のjavascript(ES5, ES201X)の進化によって、上記のメリットが薄れてきました。  
メリットが薄れ、上記を達成するためのblackbox状態への懸念が目立ってきました。  

--

##### フレームワークの台頭

<p>フレームワークには、<a href="https://qiita.com/mizchi/items/4d25bc26def1719d52e6">Virtual DOM</a>という概念が採用されています。  </p>
<p class="-mt36">Virtual DOMは、DOMと1対1に対応する単純な構造体のこと。  
フレームワークが、VDOMと生のDOMのデータ（状態）の違いに応じて、できるだけミニマムに自動的に生のDOMに反映してくれます。  
jQueryを使用して、自力で生のDOMを操作することが不要になりました。</p>

<p class="-mt36 fragment">個人的には、必要性の薄いライブラリなら入れずに、生(ES5, ES201X)で書いていた方が将来性ありそうなので生(ES5, ES201X)で書くようにしています。</p>

---

#### ES5, ES201X, jQueryの選択 まとめ

- できる限りES201Xを選択する
- とりあえず jQueryという時代からは一歩進んだ
