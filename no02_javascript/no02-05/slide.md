### #05. 演算子と制御構文

<a href="../">戻る</a>

---

#### 目次

<ul>
  <li>演算子とは
    <ul>
      <li>算術演算子</li>
      <li>代入演算子</li>
      <li>比較演算子</li>
      <li>論理演算子</li>
      <li>その他の演算子</li>
    </ul>
  </li>
  <li>
    制御構文とは
    <ul>
      <li>各種制御構文</li>
    </ul>
  </li>
</ul>

---

<h2 class="-center">演算子</h2>

--

<h4 class="-small">算術演算子</h4>
<p class="-small">算術演算子は四則演算をはじめとした数学的な演算を行う演算子です。</p>
<table>
  <tr><th>演算子</th><th>概要</th><th>例</th></tr>
  <tr><td>+</td><td>数値の加算</td><td>1 + 2 // 3</td></tr>
  <tr><td>-</td><td>数値の減算</td><td>4 - 2 // 2</td></tr>
  <tr><td>`*`</td><td>数値の乗算</td><td>4 * 3 // 12</td></tr>
  <tr><td>/</td><td>数値の除算</td><td>99 / 11 // 9</td></tr>
  <tr><td>%</td><td>数値の余剰</td><td>10 % 3 // 1</td></tr>
  <tr><td>++</td><td>前置加算</td><td>x = 3; a = ++x; // aは4</td></tr>
  <tr><td>++</td><td>後置加算</td><td>x = 3; a = x++; // aは3</td></tr>
  <tr><td>--</td><td>前置減算</td><td>x = 3; a = --x; // aは2</td></tr>
  <tr><td>--</td><td>後置減算</td><td>x = 3; a = x--; // aは3</td></tr>
</table>

--

<h4 class="-small">代入演算子</h4>
<p class="-small">代入演算子は指定された変数に値を代入するための演算子です。</p>
<table>
  <tr><th>演算子</th><th>概要</th><th>例</th></tr>
  <tr><td>　=　</td><td>変数などに値を代入</td><td>x = 1</td></tr>
  <tr><td>　+=</td><td>左辺の値から右辺の値を加算したものを代入</td><td>x = 6; x += 2 // 8</td></tr>
  <tr><td>　-=</td><td>左辺の値から右辺の値を減算したものを代入</td><td>x = 4; x -= 2 // 2</td></tr>
  <tr><td>　`*`=</td><td>左辺の値から右辺の値を乗算したものを代入</td><td>x = 3; x *= 9 // 27</td></tr>
  <tr><td>　/=</td><td>左辺の値から右辺の値を除算したものを代入</td><td>x = 8; x /= 2 // 4</td></tr>
  <tr><td>　%=</td><td>左辺の値から右辺の値を除算した余りを代入</td><td>x = 8; x %= 3 // 2</td></tr>
  <tr><td>　&amp;=</td><td>左辺の値を右辺の値で論理積演算した結果を代入</td><td>x = 20; x &amp;= 2; // 22</td></tr>
  <tr><td>　|=</td><td>左辺の値を右辺の値で論理和演算した結果を代入</td><td>x = 10; x |= 5; // 15</td></tr>
  <tr><td>　^=</td><td>左辺の値を右辺の値で排他的論理和演算した結果を代入</td><td>x = 30; x ^= 2; // 28</td></tr>
</table>


--

<h4 class="-small">比較演算子</h4>
<p class="-small">比較演算子は指定された変数に値を代入するための演算子です。</p>
<table>
  <tr><th>演算子</th><th>概要</th><th>例</th></tr>
  <tr><td>　==　</td><td>左辺と右辺の値が等しい場合は true</td><td>4 == 4 // true</td></tr>
  <tr><td>　!=　</td><td>左辺と右辺の値が等しくない場合は true</td><td>3 != 4 // true</td></tr>
  <tr><td>　<　</td><td>左辺が右辺より小さい場合は true</td><td>4 < 4 // false</td></tr>
  <tr><td>　<=　</td><td>左辺が右辺以下の場合は true</td><td>4 <= 4 // true</td></tr>
  <tr><td>　>　</td><td>左辺が右辺より大きい場合は true</td><td>9 > 4 // true</td></tr>
  <tr><td>　>=　</td><td>左辺が右辺以上の場合は true</td><td>8 >= 4 // true</td></tr>
  <tr><td>　===　</td><td>左辺と右辺の値が等しくて、データ型も同じ場合は true</td><td>3 === 3 // true</td></tr>
  <tr><td>　!==　</td><td>左辺と右辺が等しくない場合、またはデータ型が異なる場合は true</td><td>4 !== 4</td></tr>
  <tr><td>　? ;</td><td>三項演算子</td><td>x === 99 ? 'hoge' : 'fuga' // xが99ならhoge, そうでなければfuga</td></tr>
</table>


--

<h4 class="-small">論理演算子</h4>

<p class="-small">論理演算子は複数の条件式を論理的に結合し、その結果をtrue / falseとして返却します。</p>
<table>
  <tr><th>演算子</th><th>概要</th><th>例</th></tr>
  <tr><td>&amp;&amp;</td><td>左右の式がともにtrueの場合はtrue</td><td>3 === 3 &amp;&amp; 2 === 2 // true</td></tr>
  <tr><td>||</td><td>左右の式がどちらかがtrueの場合はtrue</td><td>3 === 1 || 2 === 2 // true</td></tr>
  <tr><td>!</td><td>式がfalseの場合はtrue</td><td>!(99 === 98) // true</td></tr>
</table>

--

<h4 class="-small">その他演算子</h4>
<table>
  <tr><th>演算子</th><th>概要</th></tr>
  <tr><td>,(カンマ)</td><td>左右の式を続けて実行</td></tr>
  <tr><td>delete</td><td>オブジェクトのプロパティや配列の要素を削除</td></tr>
  <tr><td>new</td><td>新しいインスタンスを生成</td></tr>
  <tr><td>typeof</td><td>データ型を取得</td></tr>
</table>

```js
// カンマ演算子
const hoge = 'hoge',
fuga = 'fuga';

console.log(hoge) //hoge
console.log(fuga) //fuga
```

---

<h2 class="-center">制御構文</h2>

- if
- switch
- for
- while

-- 

#### 制御構文とは
- if

強いてご説明するならelseif　ではなく　else ifの違いのみになります。
```js
if (true) {
  console.log('true');
} else if () {
  console.log('false');
}
```

--

#### 制御構文とは

<p class="-mt24"><b class="-u">for文、while文は、再代入と可読性を行うので、</b>反復処理は基本的に配列やオブジェクトで実行することをオススメします。</p>

---

#### 演算子と制御構文まとめ

- 演算子は一通り覚えておこう。
  - 算術、代入、比較、論理、その他演算子
- 制御構文もphpと同じく存在します。
  - if文, switch文, for文, while文
- for文,while文は反復処理に使えるが、他の方法を用いたほうが良い。
