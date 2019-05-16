### 演習2 ガイダンス

<a href="../">戻る</a>

---

### もくじ
- 全体
  - 作業開始方法
  - cssとjsの分離
  - cssアニメーション
- 演習で制作するものについて
  - アコーディオン
  - モーダル
  - 非同期によるデータ取得
  - イメージスライダー

---

#### 全体

###### 作業開始方法

- skilltrans-fe_201904_testのnoxx_work2へ移動してください。
- npmモジュールのインストールをしてからブラウザを立ち上げてください。

```shell
cd noxx_work2
npm i
npm run dev
```

あとは、問題文に従って、開発してください。  

--

#### 全体

###### cssとjsの分離

html
```html
<button class="btn js-btn"></button>
```

css
```scss
.btn {
  width: 100px;

  &.is-active {
    color: red;
  }
}
```

js
```js
/* js-*クラスで要素を取得 */
const btn = document.querySelector('.js-btn')
btn.addEventListener('click', () => {
  btn.classList.add('is-active') /* is-activeクラスの付与 */
})
```

--

#### 全体

###### cssアニメーション

html
```html
<button class="btn js-btn"></button>
```

css
```scss
.btn {
  opacity: 1;
  transition: opacity .5s ease 0s; /* opacityの変化を.5秒かける */
  width: 100px;

  &.is-active {
    opacity: 0;
    color: red;
  }
}
```

js
```js
/* js-*クラスで要素を取得 */
const btn = document.querySelector('.js-btn')
btn.addEventListener('click', () => {
  btn.classList.add('is-active') /* is-activeクラスの付与 */
})
```

