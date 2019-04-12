### #04. 関数

<a href="../">戻る</a>

---

#### 目次

- 引数
  - デフォルト引数<span class="tag -es201x"></span>
- 関数の定義方法
  - function式(関数式)
  - アロー関数(Arrow Function)<span class="tag -es201x"></span>
  - 関数コンストラクタ(deprecated)
  - これからはアロー関数で

---

<h2 class="-center">引数</h2>

-- 

#### デフォルト引数 <span class="tag -es201x"></span>

<p class="-mb16">デフォルト引数とは、呼び出し元に引数の指定がなかったときに予め指定しておく引数のことです。<br>これは<span class="tag -es201x"></span>で追加された要素のため、<span class="tag -es5"></span>では使用できません。</p>

```js
// もし、nに引数の指定がなかったら1,mに引数の指定がなかったら2が自動的に代入される.
function sum(x = 1, y = 2) {
  return x + y
}

console.log(sum()); // 3
console.log(sum(5)) // 7

```

<p class="-mt16">ちなみに、<span class="tag -es5"></span>では以下のように実装していました。</p>

```js
function sum(x, y) {
  x = x || 1
  y = y || 2 
  return x + y
}

console.log(sum()); // 3
console.log(sum(5)) // 7
```
---

## 具体的な関数の定義方法

--

#### 関数定義1. function式

--
#### 関数定義1. function式

function式とは関数を定義するときの、最も基本的なアプローチです。<br><span class="tag -es5"></span>でも<span class="tag -es201x"></span>でも使用することが出来ます。

```javascript
// function式の構文
function 関数名(引数, ...) {
  ...任意の処理...
  return 返り値
}
```

--

#### 関数定義2. アロー関数 <span class="tag -es201x"></span>

--

#### 関数定義2. アロー関数 <span class="tag -es201x"></span>

アロー関数とはES2015で新たに追加された記法です。  
function式とは異なり、this, arguments, super, new.target を束縛しません。(いつか詳しく説明します。)  

アロー関数を利用すると、関数をよりシンプルに記述することができます。  

```js
const division = (n, m) => {
  return n / m
}
console.log(division(10, 2)) //5
```
<br>さらに、１行に収めることで、{}, returnを省略した書き方も可能です。  
```js
const sum = (x, y) => x + y
console.log(sum(10, 2)) //12
```
ミニマムに書けるので積極的に使用していきますが、複雑な処理を無理やり１行に収めるのは、可読性が下がるので避けましょう。

--

#### 関数定義3. 関数コンストラクタ(deprecated)

--

#### 関数定義3. 関数コンストラクタ(deprecated)

```js
var makeSushi = new Function('sakana', 'return sakana + "の寿司"');
var maguro = makeSushi('まぐろ') // まぐろの寿司
```

<br>
ほぼメリットがなく、歴史的にも非推奨と言われてきた構文なので、こんな書き方もあるんだなー程度に留めて頂いてもらえれば大丈夫です。

--

#### 関数定義のおまけ. 即時関数

即時関数という、関数を定義した瞬間に即利用する書き方があります。
<br><span class="tag -es201x"></span>になって、きちんとスコープの概念ができたので、あまり利用されなくなりましたが、<span class="tag -es5"></span>ではスコープを作成する目的で使用されることがあります。

```js
// function式の即時関数
(function() {
  var hoge = 'hoge'
  console.log('スコープを持つ')
})()

console.log(hoge) //hoge is not defined
```

<br>
```js
// 即時関数実行に、引数を渡すことも可能です。
(function(x, y) {
  return x + y
})(100, 200); // 300
```

-- 

#### 関数定義のおまけ. 即時関数のおまけ

この即時関数の形式は、jQuery使用時にもよく見かけるかもしれません
```js
// function式の即時関数
(function($) {
  
})(jQuery)
```

---

<p class="-ex-mb24">いろいろ書きましたが…</p>
##### これからは基本的にアロー関数で書きましょう！

アロー関数の方が読みやすいので、アロー関数を使用することをオススメします。  
いちいちfunctionと書くのも面倒ですし。  
アロー関数における細かいthisの挙動については、一旦保留します。

---

## 関数まとめ

- <span class="tag -es201x"></span>ですと、デフォルト引数が使える
- function式とアロー関数という関数定義の方法がある。
- <span class="tag -es201x"></span>ですと、極力アロー関数で！
