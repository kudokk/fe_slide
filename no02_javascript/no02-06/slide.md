### #06. 配列とオブジェクト

<a href="../">戻る</a>

---

#### 目次

<ul>
  <li>配列とは
    <ul>
      <li>配列の作り方</li>
      <li>配列のアクセス</li>
    </ul>
  </li>
  <li>配列操作4大メソッド
    <ul>
      <li>forEach</li>
      <li>map</li>
      <li>filter</li>
      <li>reduce</li>
    </ul>
  </li>
  <li>オブジェクトとは
    <ul>
      <li>オブジェクトの作り方</li>
      <li>オブジェクトのアクセス</li>
    </ul>
  </li>
</ul>

---

<h2 class="-center">配列</h2>

--

#### 配列とは

ブラケット[]で囲まれていたら配列です。オブジェクトも配列の値として扱うこともできます。
```
// これが配列
['a', 'b', 'c', 'd'] 
[1, 2, 3, 4]
[{a: '1'}, {b: '2'}, {c: '3'}]
```
--

#### 配列の作り方

<p class="-small">配列の作成は、可読性などを考慮して、リテラル式での生成が一般的です。<br>具体的にはブラケット[]で囲い、valueを順に並べます。</p>

```js
// good
const goodArray1 = [];
const goodArray2 = ['a', 'i', 'u'];
const goodArray3 = [1, 2, 3];

// bad
const badArray = new Array(3);
console.log(badArray); //[undefined, undefined, undefind]
```
<p>new Arrayでは、枠の確保をした上で、値を入れていく必要があるため冗長的です。</p>

--

#### 配列のアクセス

<p class="-small">配列にアクセスする(要素を取得する)には、ブラケット演算子にNumberで指定します。<br>(index番号は0番目から)</p>

```js
const array = ['d','i','s','n','e','y']

array[3] // 'n'
```
---

#### 4大配列操作メソッド

- Array.prototype.map()
- Array.prototype.forEach()
- Array.prototype.filter()
- Array.prototype.reduce()

<p class="-mt24">制御構文のところで、for, whileは使用しないと言いましたが、代わりにこれらを使用します。</p>

--

<h2 class="-center">Array.prototype.map()</h2>

--

#### map()

<p class="-b -u">map() メソッドは、与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成します。</p>
<p class="tag -es5"></p>

```javascript
var oldArr = [1, 2, 3, 4]
var newArr = oldArr.map(function(item) {
  return item + 90
})
console.log(oldArr) // [1, 2, 3, 4]
console.log(newArr) // [91, 92, 93, 94]
```
<br>
<p class="tag -es201x"></p>

```javascript
const oldArr = [1, 2, 3, 4]
const newArr = oldArr.map(item => item + 90)

console.log(oldArr) // [1, 2, 3, 4]
console.log(newArr) // [91, 92, 93, 94]
```

<p class="-mt24">上記の例で分かるように、元の配列に影響を及ぼさずに、新しい配列を作れます。</p>

<p class="-ex-small -mt24">参考：<a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map">Array.prototype.map | MDN</a></p>

--

#### map()について詳しく

<p class="-mb24 -small">map()は3つの引数があります。<br><b class="-u">第一引数は「現在取り扱っている要素の値」</b>、<br><b class="-u">第二引数は「現在取り扱っている要素のindex番号」</b>、<br><b class="-u">第三引数は「現在取り扱っている配列全体」</b>です。</p>

<p class="tag -es201x"></p>

```js
const oldArr = [1, 2, 3]

const newArr = oldArr.map((currentValue, index, array)=> {
  console.log(currentValue, index, array)
  return currentValue + 90
})
// 1, 0 , [1, 2, 3]
// 2, 1 , [1, 2, 3]
// 3, 2 , [1, 2, 3]

// newArrは 91, 92, 93
```

<p class="-mt24">map()は再代入をしないようにプログラムを記述していると最も使うメソッドです。<b class="-u">十分に理解して使いこなせるようにしましょう。</b></p>

--

<h2 class="-center">Array.prototype.forEach()</h2>

--

#### forEach()

<p class="-b -u">与えられた関数を、配列の各要素に対して一度ずつ実行します。</p>
<p class="tag -es201x"></p>

```js
[1, 2, 3, 4].forEach(item => {
  const num = item + 10
  console.log(num)
})
// 11, 12, 13, 14 がconsole上に出力される
```
<p class="-mt24">先述したように、forEachは要素に対して一度ずつ実行をしますが、返り値はありません。<br>よって、実行した値を別の配列として使いたい場合はmapの方が適しています。</p>

<p class="-ex-small -mt16">参考：<a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">Array.prototype.forEach | MDN</a></p>

--

#### forEach()の使用例

配列の値をobjectに追加するなどの処理には向いています。
<p class="tag -es201x"></p>

```js
const obj = {a: 'aaa'}
const arr = [1, 2, 3, 4]

arr.forEach((item, index) => {
  obj['property' + index] = item + 90
})

console.log(obj); // {property0: 91, property1: 92, property2: 93, property3: 94, a: "aaa"}
```

DOM操作関連にも使うことがしばしばあります。  
<b class="-u">map()には劣りますが、使用頻度は高めなので必ず覚えましょう。</b>

--

<h2 class="-center">Array.prototype.filter()</h2>

--

#### filter()

<p class="-b -u">filter()は引数として与えられたテスト関数を各配列要素に対して実行し、それに合格したすべての配列要素からなる新しい配列を生成します。</p>
<p class="tag -es201x"></p>

```javascript
const targetArr = [1,2,3,4]

// 2で割って余りが0の要素のみ、抽出する。
const resultArr = targetArr.filter(item => item % 2 === 0)

console.log(resultArr) // [2,4]
```

<p class="-ex-small">参考：<a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">Array.prototype.filter | MDN</a></p>

--

#### filter()はどんなときに使うの？

例えば、APIから取得したデータから欲しいものを取り出すときなどに利用します。
<p class="tag -es201x"></p>

```js
const targetArr = [
  { id: '01', date: '20170701', num: 2 },
  { id: '02', date: '20180702', num: 3 },
  { id: '03', date: '20180703', num: 3 },
  { id: '04', date: '20180801', num: 4 },
  { id: '05', date: '20190801', num: 5 }
]

// 2018年かつ、人数が2人以上の配列を抽出する
const resultArr = targetArr.filter(item => {
  return item.date.indexOf('2018') !== -1 && item.num >= 2
})

console.log(resultArr) // オブジェクトのidでいうと'02', '03', '04'のojectが格納された配列が返却される。
```

<b class="-u">filter()は便利なので絶対に覚えましょう！</b>

--

<h2 class="-center">Array.prototype.reduce()</h2>

--

#### reduce()

<p class="-b -u">reduce() はアキュムレータと配列の各要素に対して（左から右へ）関数を適用し、単一の値にします。</p>
<p class="tag -es201x"></p>

```
const targetArr = [1,2,3,4]

const totalVal = targetArr.reduce((acc, current) => acc + current)

console.log(totalVal) // 10
```

<p class="-mt16">最終的には、targetArrの値の合計値を出力していますが、何が起こっているかピンとこないかも知れないので、次のスライドで解説します。</p>

- <a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce">Array.prototype.reduce | MDN</a>
- <a href="https://css-tricks.com/understanding-the-almighty-reducer/">Understanding the Almighty Reducer | CSS-Tricks</a>

--

#### reduce()のしくみ

<p class="tag -es201x"></p>

```js
const targetArr = [1,2,3,4]
const totalVal = targetArr.reduce((acc, current) => acc + current)
console.log(totalVal) // 10
```

<div class="-mt24">
  <table>
  <thead>
    <tr>
      <th scope="col" class="-small">callback</th>
      <th scope="col" class="-small">accumulator(蓄積値)</th>
      <th scope="col" class="-small">currentValue(現在値)</th>
      <th scope="col" class="-small">currentIndex</th>
      <th scope="col" class="-small">array</th>
      <th scope="col" class="-small">戻り値</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" class="-small">1 回目の呼出し</th>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td class="-small">[0, 1, 2, 3, 4]</td>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row" class="-small">2 回目の呼出し</th>
      <td>1</td>
      <td>2</td>
      <td>2</td>
      <td class="-small">[0, 1, 2, 3, 4]</td>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row" class="-small">3 回目の呼出し</th>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td class="-small">[0, 1, 2, 3, 4]</td>
      <td>6</td>
    </tr>
    <tr>
      <th scope="row" class="-small">4 回目の呼出し</th>
      <td>6</td>
      <td>4</td>
      <td>4</td>
      <td class="-small">[0, 1, 2, 3, 4]</td>
      <td>10</td>
    </tr>
  </tbody>
  </table>
</div>

単純な足し算の場合、値が蓄積されていくと考えるとイメージしやすいです💡

---

<h2 class="-center">オブジェクト</h2>

--

#### オブジェクトとは

##### ちょっと認識合わせ

ここで言う「オブジェクト」とは、Object(グローバルスコープ内にあるオブジェクトの一つ)の事では無く、JavaScrpt内で一般利用される、リテラル式{}で定義される↓の事を指します。  

<br>
```javascript
const kudo = {
  name: 'kudo',
  age: 24
}
```

<a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object">Object | MDN</a>

--

#### オブジェクトの作り方

オブジェクトはリテラル式での生成が一般的です。  
具体的には中括弧{}で囲って、keyとvalueのペアを並べます。  

```
// good
const goodObject = {};

// bad
const badObject = new Object();
```

<p class="-mt24">以下のように作り出します。</p>

```js
const person = {
  name: 'kudo',
  age: 24,
};
```

<p class="-ex-small">※ 配列でもそうですが、上記のように行末のカンマを最終列にも記述(ケツカンマ)すると、IE8以前で実行時にエラーになるので注意です。<br>
しかし、Chromeなどのモダンブラウザではケツカンマは許容されており、コーディングのルールとしてケツカンマを必須にする所もあります。</p>


--

#### オブジェクトのアクセス

オブジェクトのアクセスには2パターンあり、　　
* ドット演算子の後ろにプロパティ名(key名)を記述することによって値を読み出す。
* ブラケット演算子[]を使い、[]の中にプロパティ名(key名)を示す文字列値を指定し値を読み出す。

```js
const person = {
  name: 'kudo',
  age: 24
};

console.log(person.name) // kudo
console.log(person['name']) // kudo

```

--

#### オブジェクトのアクセス

ドット演算子とブラケット演算子の特徴的な違い<br>
記述の単純さから、基本はドット演算子によるアクセスが多いですが、アクセスするプロパティ名(key名)を変数で扱う場合にブラケット演算子が便利です。
```javascript
const person = {
  name: 'kudo',
  age: 24
}

console.log(person.name) // kudo
console.log(person['name']) // kudo

// プロパティ名(key名)を変数で扱う場合
const hoge = 'name'
console.log(person.hoge) // undefined
console.log(person[hoge]) // kudo
```

--

#### オブジェクトに値を追加する

オブジェクトに値を追加するには、以下のように記述します。
```
追加される元オブジェクト.追加したいkey名 = 値
```

具体例は以下のとおりです。
```js
const person = {
  name: 'kudo',
  age: 24
};

person.hobby = 'Foreign dramas'
console.log(person)
```

--

#### オブジェクトの値を削除する

delete演算子を使用します！
```js
const person = {
  name: 'kudo',
  age: 24
};

delete person.name
console.log(person)
// {
//   name: 'kudo',
//   age: 24
// };

```
-- 

### オブジェクト同士をマージする
- マージする方法1. Object.assign() <span class="tag -es201x"></span>
- マージする方法2. スプレッド構文 <span class="tag -es201x"></span>

--

#### マージする方法1. Object.assign() <span class="tag -es201x"></span>

Object.assign()は一つ以上の ソース オブジェクトから、列挙可能なすべてのプロパティの値を、ターゲット オブジェクトへコピーします。戻り値はターゲットオブジェクトです。

```js
const sushi = {
  maguro: 500,
  ika: 400,
  ikura: 500,
}
const sideMenu = {
  beer: 500,
  cake: 400,
}

const kaitenSushi = Object.assign(sushi, sideMenu)

console.log(kaitenSushi)  // sushi, sideMenuオブジェクトの全てが１つになったオブジェクトが出力されます。
```
--

#### マージする方法2. スプレッド構文 <span class="tag -es201x"></span>

スプレッド構文を使うと、Object リテラルでは 0 個以上の key-value のペアとして、Array や String などの iterable オブジェクトをその場で展開します。


```js
const sushi = {
  maguro: 500,
  ika: 400,
  ikura: 500,
}
const sideMenu = {
  beer: 500,
  cake: 400,
}

const kaitenSushi = {
  ...sushi,
  ...sideMenu
}

console.log(kaitenSushi)  // sushi, sideMenuオブジェクトの全てが１つになったオブジェクトが出力されます。
```
<p>※スプレッド構文は、オブジェクトの展開だけでなく、関数呼び出し時の引数, 配列に対しても使用できます。</p>

--

#### Object.assign()とスプレッド構文どっちがいい？

簡潔で読みやすいため、スプレッド構文を利用しましょう。

---

### オブジェクトのkey,valueを<br>1つずつ処理する

オブジェクトが連想配列っぽい構造なので、全てのkey,valueに処理したいと場面があります。

--

#### Object.keys() と forEach()の組み合わせ✨

Object.keys() メソッドは、与えられたオブジェクト自身に存在する列挙可能なプロパティの<b class="-u">配列</b>を返します。

```js
const sushi = {
  maguro: 500,
  ika: 400,
  ikura: 500,
}
Object.keys(sushi) //["maguro", "ika", "ikura"]

Object.keys(sushi).forEach((key, index) => {
  console.log(index)
  console.log(key)
  console.log(sushi[key])
})
```

Object.keys()で返ってきたkey配列をforEach()で使うという手法です。  
よく使うので、覚えておくと良いです

---


## 配列とオブジェクトまとめ

- 配列・オブジェクトの作成, アクセス
- 配列の4つのメソッド, forEach(), map(), filter(), reduce() 
- オブジェクトにforEachしたいなら Object.keys() を使用する
- オブジェクトの結合は、スプレッド構文, Object.assign() でできる
