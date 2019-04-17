### #02. 変数📦

<a href="../">戻る</a>

---

#### 目次

- 変数の宣言方法
  - ES5における変数宣言
  - ES201Xにおける変数宣言
- ブロックスコープ
- 変数の巻き上げ
- まとめ

---

## 変数の宣言方法

--

#### 変数の宣言方法

変数を宣言するには、<b class="-u">ES5であれば1種類</b>の方法が、<b class="-u">ES201xであれば、2種類の方法</b>が選べます。<br>具体的なコードは以下のとおりです。

<p class="-mt24"><span class="tag -es5"></span></p>

```js
var hoge = 1
```

<p class="-mt24"><span class="tag -es201x"></span></p>

```js
let fuga = 2
const piyo = 3
```

<p class="-mt24 -small">次のスライドで各宣言方法について一つ一つ見ていきましょう。</p>

--

#### ES5の変数宣言

<p class="-mt24"><span class="tag -es5"></span></p>

```js
var hoge = 1
```

<p class="-mt24">ES5では、<b class="-u">var</b>という命令を用います。<br>
<b class="-u">var命令</b>には、<b class="-u">ブロックスコープが存在せず、再代入可能、再定義可能</b>という特徴があります。<br>
ちなみに、<b class="-u">ES5ではvar以外の変数を宣言する方法はありません。</b></p>

--

#### ES201xの変数宣言

<p class="-mt24"><span class="tag -es201x"></span></p>

```
let fuga = 2
const piyo = 3
```

<p class="-mt24">ES201xから<b class="-u">let命令</b>と<b class="-u">const命令</b>が使えるようになりました。<br>
<b class="-u -mt24">let命令</b>には<b class="-u">ブロックスコープが存在し、再代入可能、再定義不可能</b>という特徴があります。</p>

<p>また、<b class="-u">const命令</b>には<b class="-u">ブロックスコープが存在し、再代入不可能、再定義不可能</b>という特徴があります。<br>ちなみに、ここでは<b class="-u">const</b>を変数宣言の一員のように扱っていますが、本来、 <b>const</b> は <b>定数</b> を定義するために存在しています。</p>

---

## …どの宣言使えばいいのか？

--

#### どの宣言を使うべきか？
<p class="-b -small">結論：<br><span class="tag -es5"></span>ではvar、<br><span class="tag -es201x"></span>では基本的にconst、再代入が必要なときだけletを使いましょう！</p>

<p class="-mt24"><span class="tag -es5"></span>はvarしか無いため、理由は考える必要がありません。</p>

<span class="tag -es201x"></span>には<b class="-u">let</b>と<b class="-u">const</b>の二種類の選択しがあるため、迷うかもしれません。<br>ですが、<b class="-u">基本的にconstを使う</b>ことによって、<b class="-u">「この変数には再代入しない」ことがわかり可読性が上がります。</b><br>そのため、<b class="-u">letよりconstを優先</b>してご使用いただきたいです。

--- 

## ブロックスコープ

--

#### ブロックスコープとは？

ブロックスコープがない例

```
if(true) {
  var hoge = 123
}

console.log(hoge)  // 123 スコープがないため参照できてしまう.
```

<p class="-mt16">ブロックスコープがある例</p>

```
if(true) {
  let fuga = 321
}

console.log(fuga) // fuga is not defined.
```

<p class="-mt24">上記の例は、letを使うことで <b class="-u">{}</b>をブロックとして認識するという例です。<br>{}をブロックとして認識することによって、変数の有効範囲が区切られました。<br>この有効範囲が区切られているのが<b>let, const</b>です。<br>有効範囲が区切られていると、読みやすいですね👍</p>

---

## 変数の巻き上げ(hoisting)

--

#### 変数の巻き上げ(hoisting)とは？

変数の巻き上げとは、主に<span class="tag -es5"></span>で発生する、<b class="-u">変数と関数定義がコードの最上部に移動する</b>現象のことです。

```
console.log(orange);
var orange = 'ORANGE';
```

本来このコードは未定義でエラーになる事を期待しますが(CやGo等)、JavaScriptはエラーにならず、undefined(後述)を出力します。<br>
この挙動は、下記のように変数の宣言はコードを実行する前に処理されるという事で説明できます。

```
var orange;
console.log(orange);
orange = 'ORANGE';
```
これを変数の巻き上げと呼んでいます。

--

#### 変数の巻き上げ(hoisting)とは？

```javascript
var color = 'red';
function consoleColor(){
  console.log(color);  //①
  var color = 'green';
  console.log(color);  //②
}
consoleColor();

```

<ul>
  <li>①: <span class="fragment">undefined</span></li>
  <li>②: <span class="fragment">green</span></li>
</ul>
<p>consoleColor関数内の最上部に <span>var color;</span> が定義されているのと同様の挙動をするためです。</p>

--

#### 変数の巻き上げ(hoisting)の例

```js
foo()
function foo() {
  console.log('foooooo')
}
```

上記コードは、関数が巻き上がるため、エラーは発生せず、関数が無事に実行されてしまい、'foooooo'がconsole上に表示されます。<br>この挙動を使用していたコードも過去にありますが、バグの原因になりやすく、可読性が下がるため、<b class="-u">巻き上げ現象を利用したコードは絶対に書かないでください。</b>

---

#### 変数📦まとめ

- 変数宣言は<span class="tag -es5"></span>では<b class="-u">var</b>
- 変数宣言は<span class="tag -es201x"></span>では基本<b class="-u">const</b>
- ブロックスコープとはブロック内{}に限定されたスコープ(変数の有効範囲)のこと
- 変数の巻き上げは頭の片隅に入れておいて、利用はしないようにしよう。
