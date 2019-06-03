### #10. CookieとStorage

<a href="../">戻る</a>

---

#### 目次
- Cookie
- localStorage
- sessionStorage
- まとめ


---

#### document.cookie
  - 特徴
  - 各属性について
  - Cookieの各操作

--

#### ブラウザにおけるCookie確認

<a href="https://www.gnavi.co.jp/">ぐるなび</a>にアクセスして実際のCookieを観察してみるのがわかりやすいと思います。
chromeDevTool > Applicationタブ ＞ Cookies で現在参照しているサイトのCookieが参照できるので、それを見てみましょう。

--

#### Cookieの特徴の確認

- Cookieは有効期限を設定することも可能です。
- Chromeの1クッキーのデータ量の上限は4kbです。
- Cookieはサーバへアクセスするたびに毎回自動で送信されます。

--

#### Cookieの各属性

<p class="-small">Cookieのデータは、基本的には「名前」とそれに対応する「値」、それと「属性」から構成されます。</p>

<table class="-ex-small">
  <thead>
    <tr>
      <th>項目</th>
      <th>内容</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><span><strong>＜名前＞</strong></span>=<span><strong>＜値＞</strong></span></th>
      <td>Cookieの<span><strong>＜名前＞</strong></span>と<span><strong>＜値＞</strong></span>は＝で結合して、Set-Cookie／Cookieヘッダフィールドの先頭にセットする</td>
    </tr>
  </tbody>
</table>
<br>
<table class="-ex-small">
  <thead>
    <tr>
      <th>属性名</th>
      <th>値</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Expires</th>
      <td>Cookieの有効期限（日時で指定）</td>
    </tr>
    <tr>
      <th>Max-Age</th>
      <td>Cookieの有効時間（秒単位で指定）。ExpiresもMax-Ageもない場合はWebブラウザのセッション終了まで有効（ブラウザを終了すると削除される）</td>
    </tr>
    <tr>
      <th>Domain</th>
      <td>クッキーが有効なドメイン。Domain=がない場合は、現在のホストでのみ有効</td>
    </tr>
    <tr>
      <th>Path</th>
      <td>クッキーが有効なパス。Path=がない場合は、現在のパス（URL）でのみ有効</td>
    </tr>
    <tr>
      <th>Secure</th>
      <td>HTTPS通信時にのみ有効。HTTPでの通信時には送信されない</td>
    </tr>
    <tr>
      <th>HttpOnly</th>
      <td>これを付けておくと、HTTPプロトコルのCookieヘッダフィールドでのみ参照可能になる（JavaScriptのdocument.cookieなどから参照できなくなる）。セキュリティのために使われる</td>
    </tr>
  </tbody>
</table>

<p class="-mt24 -align-right">引用：<a href="http://www.atmarkit.co.jp/ait/articles/1704/20/news024_2.html">HTTP Cookieとは (2/2)：超入門HTTP Cookie - ＠IT</a></p>

--

<h2>Cookieの操作</h2>
  - 追加
  - 削除
  - 取得

<p>それぞれのソースを開発者モードのconsole欄に貼り付け、enterを押して確かめていただきます。</p>

--

##### Cookieの追加
```js
document.cookie = 'foo=bar';
//属性を追加するときは、;, 半角スペースを入れて、続けて記述
document.cookie = 'foo=bar; expires=Sat, 06 Apr 2019 03:15:48 GMT'
```
<p>※クッキーの値にはセミコロン ( ; )、カンマ ( , ) や空白を含めてはならないため、書き込む値はencodeURIComponent()でエンコードするのが安全です。</p>
<br>

また、expiresの値はGMT形式に変換する必要があるため、<span class="-b">Date.prototype.toUTCString()</span>を使用します。
```js
//例えば、日数でcookieの期限を指定するなら

// 期間(日にち)を指定
const expiredays = 30;
//今の時間を秒数で取得
const extime = new Date().getTime();
//日付を秒数に変換して、今の時間と足す
const cltime = new Date(extime + 60 * 60 * 24 * 1000 * expiredays);
//GMT形式に変換
const exdate = cltime.toUTCString();
document.cookie = `hoge=fuga; expires=${exdate}`
```

-- 

<h5 class="-mt24">Cookieの削除</h5>

javascriptからcookieを削除するメソッドがないので、期限が過ぎると「cookie」のデータが自動的に削除される仕組みを利用します。
```js
// max-ageに過去の日付、またはゼロを指定するとcookieは消える
dTime = new Date();
dTime.setTime(0);
document.cookie = 'hoge=; expires=' + dTime.toUTCString();
```

--

##### Cookieの取得

特定のCookie値のみ取得することができませんので、一度すべて取得した中で探索します。  
一度、<a href="https://www.gnavi.co.jp/">ぐるなび</a>にて、開発者モードのConsole欄で下記を実行してみてください。
```js
// 参照中のサイトのCookieを文字列ですべて取得する
const allCookie = document.cookie
console.log(allCookie) //key=value; key=value; key=value; key=...
```
<br>
```js
// Cookieはセミコロンによって１つ１つ区切られているので、それを利用しながら探索する
let result;
const cookieName = 'foo=';
const allCookies = document.cookie;
const position = allCookies.indexOf(cookieName);
if (position !== -1) {
  const startIndex = position + cookieName.length;
  let endIndex = allCookies.indexOf(';', startIndex);
  if (endIndex === -1) {
    endIndex = allCookies.length;
  }
  result = decodeURIComponent(allCookies.substring(startIndex, endIndex));
}
console.log(result);


```

---

<h2 class="-center">window.localstorage</h2>

--

<h2 class="-center">window.localstorage</h2>

localstorageはブラウザの記憶領域の一つです。別ウィンドウでもデータ共有が可能で、<span class="-b">データは永続的に有効</span>です。  
Cookieと違って毎回サーバに自動送信されないのも特徴です。  
近年ではCookieよりlocalstorageを使うことが多くなってきました。  
その背景としてはcookieにはドメイン毎に容量の上限があることなどが挙げられます。  

--

<h2 class="-center">localStorageの操作</h2>

--

##### localstorageの追加
```js
// string
localStorage.setItem('key', 'value')

// object (一回JSON文字列にしてから埋める)
localStorage.setItem('key2', JSON.stringify({ hoge: 'fuga' }))
```

<h5 class="-mt24">localstorageの削除</h5>
```js
localStorage.removeItem('key')
```

--

##### localstorageの取得
```js

// ここから取得
const result = localStorage.getItem('key2')
console.log(result) // VALUE

// オブジェクトの場合

const tmp = localStorage.getItem('key2') // JSON文字列は一度tmpに入れる。
const result2 = JSON.parse(tmp) // オブジェクトに変換する
console.log(result2)  // ちゃんとオブジェクトとして出力される

```

---

<h2 class="-center">window.sessionStorage</h2>

--

<h2 class="-center">window.sessionStorage</h2>

sessionStorageとは、セッション中に有効の記憶領域です。  
sessionStorageに格納したデータはウィンドウやタブを閉じるまで有効です。  
それ以外の特徴はlocalStorageと一緒です。


--


##### sessionStorageの追加
```
// string
sessionStorage.setItem('key', 'value')

// object (一回JSON文字列にしてから埋める)
sessionStorage.setItem('key2', JSON.stringify({ hoge: 'fuga' }))
```

<h5 class="-mt24">sessionStorageの削除</h5>
```js
sessionStorage.removeItem('key')
```

--

##### sessionStorageの取得
```js
// (一旦セットする)
sessionStorage.setItem('key3', 'VALUE')

// ここから取得
const result = sessionStorage.getItem('key2')
console.log(result) // VALUE

// オブジェクトの場合

// (一旦セットする)
const tmp = sessionStorage.getItem('key2') // JSON文字列は一度tmpに入れる。
const result2 = JSON.parse(tmp) // オブジェクトに変換する
console.log(result2)  // ちゃんとオブジェクトとして出力される

```

---

#### まとめ

<table class="-mb24">
  <thead>
    <tr>
      <th></th>
      <th>有効期限</th>
      <th>データ量</th>
      <th>サーバへのデータ送信　</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><em>localStorage</em></td>
      <td>永続的に有効</td>
      <td>5MB</td>
      <td>データ利用時のみ</td>
    </tr>
    <tr>
      <td><em>sessionStorage</em></td>
      <td>ウィンドウ・タブを閉じるまで</td>
      <td>5MB</td>
      <td>データ利用時のみ</td>
    </tr>
    <tr>
      <td>Cookie</td>
      <td>指定期限まで</td>
      <td>4KB</td>
      <td>リクエスト毎に自動送信</td>
    </tr>
  </tbody>
</table>

- cookie, localStorage, sessionStorageの特徴は覚えよう
- それぞれの特徴を知った上で使い分ける必要がある

