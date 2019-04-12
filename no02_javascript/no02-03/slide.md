### #03. データ型

<a href="../">戻る</a>

---

#### 目次

- データ型の紹介
- データ型の調べ方
- まとめ

---

## データ型

javascriptは、変数宣言時など、型の宣言を行いませんので、強く意識することはありませんが、
型を明示的にする(TypeScitpt)需要が高まってきているため、ご紹介します。
```javascript
var hoge
const fuga
```

--

#### JSの主なデータ型 基本型

- Number型
  - <span class="-small">整数や、浮動小数点数、+Infinity、-Infinity、NaN (not-a-number) といった記号的な値</span>
- String型
  - <span class="-small">シングル/ダブルクォートで囲まれた0個以上の文字の集合</span>
- Boolean型
  - <span class="-small">true(真) または false(偽)</span>
- Undefined型
  - <span class="-small">値が未定義であることを示す</span>
- Null型
  - <span class="-small">値が空であることを示す</span>
  - <span class="-small">typeof演算子ではobjectと返される</span>
- Symbol型 <span class="tag -es201x"></span>
  - <span class="-small">Symbol はユニークかつ不変なプリミティブ値で、オブジェクトのプロパティ識別子</span>

--

#### JSの主なデータ型 参照型

<ul>
  <li>配列(array)
    <ul>
      <li><span class="-small">データの集合(各要素にはインデックス番号でアクセス可能)</span></li>
      <li><span class="-small">typeof演算子ではobjectと返される</span></li>
    </ul>
  </li>
  <li>オブジェクト(object)
    <ul>
      <li><span class="-small">データの集合(各要素には名前でアクセス可能)</span></li>
    </ul>
  </li>
  <li>関数(function)
    <ul>
      <li><span class="-small">一連の処理(手続き)の集合</span></li>
    </ul>
  </li>
</ul>

---

## データ型の調べ方

--

#### データ型の調べ方

<p class="-mb24">データ型を調べるときは<b class="-u">typeof演算子</b>を使いましょう✨<br>ただし、<b class="-u">typeof演算子はNullをobjectと返す仕様がある</b>ので、気をつけましょう。それ以外は概ね想定通りの型がstringで返ってきます。</p>

```js
var hoge = 1
```
<p class="-ex-small -mb24">console.log(typeof hoge) // 返される値は…？→<b class="fragment">'number'</b></p>


```js
var fuga = 'aaa'
```
<p class="-ex-small -mb24">console.log(typeof fuga) // 返される値は…？→<b class="fragment">'string'</b></p>


```js
var bool = true
```

<p class="-ex-small -mb24">console.log(typeof bool) // 返される値は…？→<b class="fragment">'boolean'</b></p>

-- 


```js
var piyo = {key: 'val'}
```

<p class="-ex-small -mb24">console.log(typeof piyo) //  返される値は…？→<b class="fragment">'object'</b></p>


```js
var bar = function() {
  return 'aa'
}
```

<p class="-ex-small -mb24">console.log(typeof bar) //  返される値は…？→<b class="fragment">'function'</b></p>

```js
var foo = null
```

<p class="-ex-small -mb24">console.log(typeof foo) //  返される値は…？→<b class="fragment">'object'</b></p>

```js
var arr = ['aa', 'ii', 'uu']
```

<p class="-ex-small -mb24">console.log(typeof arr) //  返される値は…？→<b class="fragment">'object'</b></p>


<p class="fragment">nullと配列は、typeof演算子で<span class="-b">object</span>が返却されると覚えておきましょう。</p>

---

#### まとめ
- 型には、Number, String, Boolean, Undefined型, Null型がある
- typeof演算子でデータ型が返却されるが、nullと配列はobjectが返却される

