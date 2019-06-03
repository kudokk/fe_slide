### #09. よく使うES201Xで追加された文法

<a href="../">戻る</a>

---

#### 目次

- class構文
- アロー関数
  - その前に普通のthisの話
  - アロー関数におけるthis
- スプレッド構文
- 分割代入
- テンプレート文字列
- Array.prototype.includes()
- import/export

---

<h2 class="-center">class構文　<span class="tag -es201x"></span></h2>

--

#### class構文とは？
<blockquote class="-small">ECMAScript 6 で導入された JavaScript クラスは、JavaScript にすでにあるプロトタイプベース継承の糖衣構文です。クラス構文は、新しいオブジェクト指向継承モデルを JavaScript に導入しているわけではありません。JavaScript クラスは、オブジェクトを作成して継承を扱うためのシンプルで明確な構文を用意します。</blockquote>

<p class="-align-right">引用：<a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes">MDN | クラス</a></p>

#### つまり？
- class構文はES2015(通称ES6)で追加された
- class構文は糖衣構文(既存のものを書きやすくしただけ。)

--

#### class構文の例

```js
class Human {
  constructor(arg1) {
    this.name = arg1
  }
  getName() {
    return `${this.name}`
  }
}
const human1 = new Human('taro')

console.log(human1.name) //
console.log(human1.getName()) //taro
human1.getName = () => 'kudo'
console.log(human1.getName()) //kudo

```
jsの特徴でもお話ししましたが、あくまでプロトタイプベースで、オブジェクト指向風に記述していることになります。

--

#### 継承

また、継承もextendsを使用して記述できるようになりました。
```js
class User extends Human {
  constructor(arg1,arg2) {
    super(arg1)
    this.loginId = arg2
  }
  getLoginId() {
    return this.loginId
  }
}

const user1 = new User('taro', 1111)

console.log(user1.name) //taro
console.log(user1.loginId) //1111
console.log(user1.getName()) //taro
console.log(user1.getLoginId()) //1111

```

---

<h2 class="-center">アロー関数　<span class="tag -es201x"></span></h2>

<blockquote class="-small">アロー関数式 は、その名のとおり矢印を使って記述し、function 式より短い構文で同様な内容を記述することができます。なおthis, arguments, super, new.target を束縛しません。</blockquote>

--

#### アロー関数の前に、そもそもJSにおけるthisって？

--

#### thisとは

<blockquote class="-small">thisキーワードは、コンストラクターによって生成されるインスタンス(つまり、自分自身)を表すものです。</blockquote>

<p class="-mt24 -align-right">by, 改訂新版 javascript本格入門 P.226</p>

<h4 class="-mt24">つまり？</h4>
- thisは変数であり、thisの参照先はthisを使った場所自身を指す。  
もちろん、どんな参照先が入っているかは使った場所によって異なる。

--
#### thisの参照先

<table>
  <tr>
    <th>使った場所</th>
    <th>thisの参照先</th>
  </tr>
  <tr>
    <td>トップレベル<br>(関数の外での使用)</td>
    <td>グローバルオブジェクト<br>(ブラウザならwindowオブジェクト)</td>
  </tr>
  <tr>
    <td>関数</td>
    <td>Strictモードならundefined<br>(そうでなければグローバルオブジェクト)</td>
  </tr>
  <tr>
    <td>call, applyメソッド</td>
    <td>引数で指定されたオブジェクト</td>
  </tr>
  <tr>
    <td>イベントリスナー</td>
    <td>イベントの発生元</td>
  </tr>
  <tr>
    <td>コンストラクター</td>
    <td>生成したインスタンス</td>
  </tr>
  <tr>
    <td>メソッド</td>
    <td>呼び出し元のオブジェクト</td>
  </tr>
</table>

<p class="-mt24 -align-right">by, 改訂新版 javascript本格入門 P.229</p>

--

#### thisの例 その1

トップレベル
```js
console.log(this) // window
// windowオブジェクトで使っているので、window自身を参照した。
```

Strictモードにおける関数内でのthis
```js
'use strict'
function func() {
  console.log(this)
}
console.log(func()) // undefined
// strictモードなのでundefinedになった。ちなみに、babelではuse strictが自動で追加される
```

--

#### thisの例 その2

メソッドにおけるthis
```js
const obj = {
  hoge: function() {
    console.log(this)
  }
}

obj.hoge() // obj自体を参照する
```

--

#### thisの例 その3

classにおけるthis

```js
class Human {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  func() {
    console.log(this)
  }
}

const human1 = new Human('taro', 23)
const human2 = new Human('jiro', 24)

human1.func() // 'taro' インスタンスを参照する
human2.func() // 'jiro' インスタンスを参照する

```

--

#### アロー関数におけるthis

まずはこの例を見てみましょう。

```js
// この値はあえてvarを使ってwindowのプロパティにする
var val = 'globalval'

const arrowFunc = () => {
  console.log(this.val)
}

function nomalFunc() {
  console.log(this.val)
}

const obj = {
  val: 'objVal',
  funcArrow: arrowFunc,
  funcNomal: nomalFunc,
}

obj.funcArrow() // globalval
obj.funcNomal() // objVal

```

アロー関数はthisの値を束縛します。  
<b class="-u">この例から分かるように、アロー関数は、アロー関数を記述した時点でthisの参照を確定しており、どんなコンテキストで呼ばれてもその参照が変わることはありません。これがthisを束縛しない(thisの値を固定する)ということです。</b>

---

<h2 class="-center">スプレッド構文　<span class="tag -es201x"></span></h2>

--

#### スプレッド構文とは？

<blockquote class="-small">スプレッド構文を使うと、関数呼び出しでは 0 個以上の引数として、Array リテラルでは 0 個以上の要素として、Object リテラルでは 0 個以上の key-value のペアとして、Array や String などの iterable オブジェクトをその場で展開します。</blockquote>

<ul class="-mb24">
<li>引用：<a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax">MDN | スプレッド構文</a></li>
</ul>

<h4 class="-mt24">つまり？</h4>
- オブジェクトや配列に対してスプレッド構文を使うと、使った場所で中身が展開される！

--

#### スプレッド構文を使った例 ~配列の場合~

```js
const threeItemSum = (x, y, z) => x + y + z

const numbers = [1, 2, 3]

console.log(threeItemSum(...numbers))

```

上記の例だと、「3つの値を受け取る<b class="-u">threeItemSum(x, y, z)</b>にnumbers配列がスプレッド構文を用いて引数として渡され、渡された瞬間に配列は展開されて、x,y,zという引数に配置された」という状態になります。  

--

#### スプレッド構文を使った例 ~オブジェクトの場合~

```js
const obj1 = {
  item1: 1,
  item2: 2,
}

const obj2 = {
  item3: 3,
  item4: 4,
}

const obj3 = {
  ...obj1,
  ...obj2
}
console.log(obj3)

```

上記の例だと、「普通に定義されたobj1とobj2はobj3の中でスプレッド構文を用いて展開され、obj1とobj2がマージされた状態がobj3に格納された」という状態になります。  
このように、オブジェクト同士のマージによく使用されるので、覚えておきましょう✨


---

<h2 class="-center">分割代入　<span class="tag -es201x"></span></h2>

--

#### 分割代入とは？

<blockquote class="-small">分割代入 (Destructuring assignment) 構文は、配列から値を取り出して、あるいはオブジェクトからプロパティを取り出して別個の変数に代入することを可能にする JavaScript の式です。</blockquote>

<ul class="-mb24">
<li>引用：<a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">MDN | 分割代入</a></li>
</ul>

<h4 class="-mt24">つまり？</h4>
- 元のオブジェクトや配列の中身を指定して、欲しい値だけを取り出して変数に格納できる式のこと！

--

#### 分割代入の例 ~配列の場合~

```js
const testArr = [123, 456]
const [val1, val2] = testArr

console.log(val1) //123
console.log(val2) //456

```

上記の例だと、<b class="-u">testArr</b>から<b class="-u">123, 456</b>中身だけを取り出し、<b class="-u">val1, val2という変数にそれぞれ「val1 = 123, val2 = 456」のように割り当てた</b>という記述になります。

--

#### 分割代入の例 ~オブジェクトの場合~

```js
const originalObject = {
  foo: 'おはよう',
  bar: 'こんにちは',
  baz: 'こんばんは'
}
const { foo } = originalObject

console.log(foo) // おはよう
```

上記の例だと、<b class="-u">originalObject</b>から<b class="-u">foo</b>という中身(keyとvalue)だけを取り出し、<b class="-u">fooという変数に「おはよう」というvalueを割り当てた</b>という記述になります。

--

#### 分割代入の例 ~引数で使う場合~

```js
const testObject = {
  foo: 1,
  bar: 2,
  baz: 3,   
}

const sum = (x, {bar}) => x + bar

console.log(sum(99, testObject)) // 101

```

上記の例だと、<b class="-u">sum関数の第二引数は、barというkeyを持ったオブジェクトを渡されることを期待しています。</b>  
そして、その期待通りbarというkeyを保有しているtestObjectを第二引数に割り当ててあげた結果、第一引数の99に第二引数の2が加算され、101を返却するという結果になりました。  
このように、引数に分割代入を使うこともできます。覚えておきましょう✨


---

<h2 class="-center">テンプレート文字列　<span class="tag -es201x"></span></h2>

--


#### テンプレート文字列とは？


<blockquote class="-small">Template literal は組み込み式を扱うことができる文字列リテラルです。複数行文字列や文字列内挿機能を使用できます。</blockquote>
<p class="-align-right"><a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/template_strings">MDN | テンプレート文字列</a></p>

<h4 class="-mt24">つまり？</h4>
- 改行も変数展開もできるのがテンプレート文字列！

--


#### テンプレート文字列を使った例

シングルクオートの代わりにバッククオート(`)を使用することでテンプレート文字列として扱えます  
<p class="-mt24">文字列中に変数を展開する例</p>

```js
// このように、文字列 + 変数 + 文字列としていたものを
const tmp = '<p><a href="' + URL + '">google</a></p>';
// ${}を使用するだけで感覚的に使用できます。
const URL = 'https://www.google.co.jp/'
const template =`<p><a href="${URL}">google</a></p>`
console.log(template) 

```

改行ができる例
```js
const URL = 'https://www.google.co.jp/'
const templateHTML = `
<div class="hoge">
  <p><a href="${URL}">google</a></p>
</div>
`
console.log(templateHTML)
// 普通のシングルクォートで囲ったHTMLより、読みやすいHTMLをJS内に記述することができた。

```

---

<h2 class="-center">Array.prototype.includes()　<span class="tag -es201x"></span></h2>

--

#### Array.prototype.includes()とは？

<blockquote class="-small">includes() メソッドは、特定の要素が配列に含まれているかどうかを true または false で返します。 与えられた要素が見つかるかどうかを計算するために、SameValueZero(ゼロの同値)アルゴリズムを使用します。</blockquote>
<p class="-align-right"><a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes">MDN | Array.prototype.includes()</a></p>

<h4 class="-mt24">つまり？</h4>
- 配列に特定の要素が含まれているかどうかboolで返す便利メソッド！

--

#### Array.prototype.includes()を使った例

```js
const testArr = [
  'taro',
  'jiro',
  'saburo'
]

console.log(testArr.includes('jiro')) // true

if (testArr.includes('taro') === true) {
  console.log('配列の中にtaroがいます')
}

```
---

<h2 class="-center">import/export　<span class="tag -es201x"></span></h2>

言葉だけでは説明が難しいので、skilltrans-fe_201904_testのsrc/js/test_transfer.js, src/js/module/test_transferModule.jsを使用していきます。

--

#### importとは？

<blockquote class="-small">import文は、他のモジュールからエクスポートされたバインディング（関数、オブジェクト、プリミティブ）をインポートするために用います。インポートされたモジュールは宣言のあるなしにかかわらずstrict modeで動作します。import文は、埋め込まれたスクリプトでは使えません。</blockquote>
<p class="-align-right"><a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/import">MDN | import</a></p>


#### exportとは？

<blockquote class="-small">export 文は、モジュールから関数、オブジェクト、プリミティブな値をエクスポートするための JavaScript モジュールを作成するときに使用します。これらは別のブログラムで、 import 文で使用できます。エクスポートされたモジュールは宣言のあるなしにかかわらず strict mode で動作します。エクスポートされた文は、埋め込まれたスクリプトでは使えません。</blockquote>
<p class="-align-right"><a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/export">MDN | export</a></p>

<p>別jsファイルでexport宣言しておいたものをimport宣言することで使用できるということになります。</p>

--

#### importの例

src/js/test_transfer.js
```js
// defaultとしてexportするとimport時に自由に名前を決めれます。
import hoge from './module/test_transferModule'
// 特定のメソッドのみimport
import { fuga } from './module/test_transferModule'
// 特定のメソッドを名前を決めてimportできます。
import { fuga as foo } from './module/test_transferModule'

hoge()
fuga()
foo()

```

その他のインポート方法は<a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/import">MDN | import</a>を参照してください。  

--

#### exportの例

export defaultの例  
src/js/module/test_transferModule.js
```js
export default () => {
  console.log('defaultとしてexportするとimport時に自由に名前を決めれます。');
}

export const fuga = () => {
  console.log('fugafuga')
}

```
また、src/js/lp.jsのModalは、src/js/module/Modal.jsのModal classをimportしています。  

少し自由度が高いので、その他のエクスポート方法は<a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/export">MDN | export</a>を参照してください。  

---

#### まとめ

- 一通り紹介したものは覚えておきましょう。
- 特に、thisの挙動は把握しておきましょう。
- ただし、thisは本当に必要なときだけ使いましょう。

