### #11. 非同期処理⌛

<a href="../">戻る</a>

---

#### 目次

- 同期と非同期
- setTimeout
- API通信系
  - $.ajax() (jQuery)
  - fetch()
  - axios
- Promise
- async await

---

<h2 class="-center">同期処理と非同期処理の違い</h2>

同期処理は書いた順番に実行されるのに対し、非同期処理は処理が実行できるようになるのを待ち，実行できるようになってから実行するといった処理になります。

--

##### 同期処理

```js
const sum = (x, y) => x + y
console.log(sum(2, 3))
console.log(sum(4, 5))

// 5, // 9
// 書いた順番に上から出力される
```

<h4 class="-mt24">非同期処理</h4>

```js
const sum = (x, y) => x + y
setTimeout(() => {
  console.log(sum(2, 3)); //1秒後に5が出力される
}, 1000)
console.log(sum(4, 5));  //9

// 9, // 5 (1秒後に出力)
// 書いた順番とは異なる出力結果となった
```
setTimeoutであれば、1000ミリ秒後に実行されるという具合です。  
以上を踏まえて、様々な非同期処理のメソッドを紹介します。

---

<h2 class="-center">setTimeout()</h2>

<blockquote class="-small">指定された遅延の後に関数またはコードの断片を実行するタイマーを設定します。</blockquote>

<p class="-align-right"><a href="https://developer.mozilla.org/ja/docs/Web/API/WindowTimers/setTimeout">WindowOrWorkerGlobalScope.setTimeout()</a></p>

--

#### さっきの例

```js
const sum = (x, y) => x + y
setTimeout(() => {
  console.log(sum(2, 3)); //1秒後に5が出力される
}, 1000)
console.log(sum(4, 5));  //9
// 書いた順番とは異なる出力結果となった
```

setTimeout内に記述された関数はsetTimeoutが呼ばれてから、指定の遅延の後に実行されます。  
余談ですが、setTimeoutは実行のタイミングが曖昧で、実装としてあまり美しくないです。  
そのため、Promiseを始めとした意図した瞬間に関数を実行する仕組みを使って非同期処理を記述しましょう。  
やむを得ぬ事情がない限り、setTimeoutは非同期処理の動作確認用ぐらいの気持ちでいましょう。

---

#### 非同期処理の醍醐味、API通信系の処理をご紹介します。
  - $.ajax() (jQuery)
  - fetch()
  - axios

-- 

#### $.ajax()    (jQuery)

何パターンか書き方ありますが、最新の書き方は下記になります。  
第一引数にurl, 第二引数にパラメータを<span class="-b">オブジェクト</span>で渡しています。
```js
const googleBooksAPI = 'https://www.googleapis.com/books/v1/volumes?q=japan'
$.ajax(googleBooksAPI,{type: 'get', dataType: 'json'})
    .then(
      (data) => { //通信成功時の処理
        console.log(data)
      },
      (error) => {  //通信失敗時の処理
        console.log('ng')
      }
    )
```
この時点ではthen()というメソッドを生やすことで、APIの返却後に実行できると思ってください。他の書き方については<a href="https://qiita.com/tonkotsuboy_com/items/0722ad92f370ab0c411b">こちら</a>をご参照ください。

--

<h2 class="-center">fetch()</h2>

<blockquote class="-small">Fetch API には (ネットワーク越しの通信を含む) リソース取得のためのインターフェイスが定義されています。XMLHttpRequest と似たものではありますが、より強力で柔軟な操作が可能です。</blockquote>
<blockquote class="-small">fetch() メソッドは必須の引数を1つ取り、取得したいリソースのパスを指定します。成功か失敗かに関わらず、要求に対する Response に解決できる Promise を返します。第2引数は任意で、 init オプションオブジェクトを渡すことができます。（Request をご覧ください）。</blockquote>
<p class="-align-right"><a href="https://developer.mozilla.org/ja/docs/Web/API/Fetch_API">MDN | Fetch API</a></p>

--

#### fetchの使用例

```js
const googleBooksAPI = 'https://www.googleapis.com/books/v1/volumes?q=japan'
fetch(googleBooksAPI)
.then(res => {
  return res.json()
})
.then(text => {
  console.log(text) // APIを叩いた結果が表示される.
})
```

<p class="-mt24">Promiseは後ほど説明いたします。<br>fetch()はjavascriptの標準ライブラリなのですが、IE11,Android4.4で使用するには、polyfillというものを追加する必要があります。  また、fetch()はエラーハンドリングがわかりづらいため、axiosという外部ライブラリを利用することが一般的になっています。</p>

--

#### axiosの使用例

```shell
npm i axios
```
インストール後、test_transfer.jsに下記を貼り付け、実行してください。
```js
// npm i axios した後、import文で、axiosの使用を宣言できます。
import axios from 'axios'
const  googleBooksAPI = 'https://www.googleapis.com/books/v1/volumes?q=japan'
axios
    .get(googleBooksAPI)
    .then(res => {
      console.log(res.data)
    })
    .catch(error => error)
```
catch()でエラーを取得できますので、APIのurlを変更して確認してみましょう。

---

<h2 class="-center">Promise基礎 

--

<h2 class="-center">Promise基礎</h2>  

<blockquote class="-small">Promiseは非同期処理を抽象化したオブジェクトとそれを操作する仕組みのことをいいます。 詳しくはこれから学んでいくとして、PromiseはJavaScriptで発見された概念ではありません。<br>並列/並行処理におけるプログラミング言語のデザインの一種です。</blockquote>

<p class="-align-right"><a href="http://azu.github.io/promises-book/">JavaScript Promiseの本</a></p>

<p class="-mt24">…Promiseは非同期処理を抽象化したオブジェクトとそれを操作する仕組みということは抑えておきましょう！</p>

--

#### Promiseの導入前

昔は...
```js
const delaySum = (x, callback) => {
  setTimeout(() => {
    callback(x + 10)
  }, 1000)
}

console.log('実行!')
console.log('4から、1秒後に１０足して出力、更に1秒後に１０足して出力、更に1秒後に１０足して出力')

delaySum(4, function(value1) {
  console.log(value1); // 14
  delaySum(value1, function(value2) {
    console.log(value2); // 24
    delaySum(value2, function(value3) {
      console.log(value3); // 34
    })
  })
})
```
<p class="-small">非同期処理を続けて行う場合、<span class="-b">コールバック関数</span>を用いて実現していました。  
呼び出し側は、入れ子にして記述していく必要があり、通称: <span class="-b">コールバック地獄(callback hell)</span>と呼ばれるほどhateを集めてました。  </p>
<p>昔は非同期処理の結果を元に処理するのに、入れ子にしなきゃいけなかったんだなくらいの認識で問題ありません。</p>

--

#### Promiseの導入後(es5から)

```js
const delaySum = (x) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 引数のresolve関数を発火させると、次のthenに繋げられる
      resolve(x + 10)
    }, 1000)
  })
}

console.log('実行!')
console.log('4から、1秒後に１０足して出力、更に1秒後に１０足して出力, 更に1秒後に１０足して出力')


delaySum(4)
  .then((v1) => {
    console.log(v1)
    return delaySum(v1)
  })
  .then((v2) => {
    console.log(v2)
    return delaySum(v2)
  })
  .then((v3) => {
    console.log(v3)
    return delaySum(v3)
  })
```
Promiseオブジェクトを返却し、resolovesもしくはrejectメソッドを実行することによって、.then()により、非同期処理をつなげることができます。

--

#### 個別で調べておいてほしいPromise関連の便利メソッド

- Promise.all()
- Promise.prototype.finally()
- Promise.race()


---

<h2 class="-center">async, await <span class="tag -es201x"></span></h2>

--


<h4 class="-mb24">async</h4>
<blockquote class="-small">async function 宣言は、 AsyncFunction オブジェクトを返す 非同期関数 を定義します。非同期関数は非同期でイベントループを介して実行され、暗黙的にPromiseを返します。なおコードのシンタックス及び構造は通常の同期関数と非常に似たものになります。</blockquote>
<p class="-mb24 -align-right"><a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/async_function">async function | MDN</a></p>


<h4 class="-mt24">await</h4>
<blockquote class="-small">await 演算子は、async function によって promise が返されるのを待機するために使用します。</blockquote>
<p class="-align-right"><a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/await">await | MDN</a></p>

<p class="-mt36">非同期処理を「まるで同期処理」のように書けるようになる</p>

--

#### async, await 使用例

```js
const delaySum = (x) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 引数のresolve関数を発火させると、次のthenに繋げられる
      resolve(x + 10)
    }, 1000)
  });
};

console.log('実行!');
console.log('4から、1秒後に１０足して出力、更に1秒後に１０足して出力, 更に1秒後に１０足して出力');

const promiseSum = async () => {
  const v1 = await delaySum(4);  //ここのPromiseの結果が返却されるまで、以下の処理は停止される
  console.log(v1);
  const v2 = await delaySum(v1);
  console.log(v2);
  const v3 = await delaySum(v2);
  console.log(v3)
}

promiseSum()
```
<a href="https://jsconsole.com/">オンラインエディタ</a>  
async function内において、await宣言されたメソッドがあれば、Promiseの結果が帰ってくるまで処理が停止され、それ以下の処理が実行されません。
async, await を使うことで「まるで同期的処理のように」記述することができました。


---

#### 非同期処理まとめ

- 同期処理は書いた順番に実行されるのに対し、非同期処理は条件を元に関数を実行する
- Promiseは非同期処理を抽象化したオブジェクトとそれを操作する仕組み
- async, awaitは非同期処理を「まるで同期処理」のように書けるようになる宣言
