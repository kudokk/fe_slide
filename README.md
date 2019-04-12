# 実施目的
- 外注コストの削減
- フロントエンドグループと相談するための共通言語を作る

# フロントエンドを学ぶメリット


# これからやる主なこと
- フロントエンドの開発環境
- JavaScript
- CSS設計
- HTMLの正しい書き方
- 画像の最適化

# やらないこと
- SEOの詳細
- JSフレームワーク

# フロントエンドの世界観
- floatの時代
- jQueryの時代
- JSフレームワークの時代(今ここ)

### 1日目

# 開発環境を整える

> 目的: フロントエンドの開発環境を理解し、運用できるようになってもらう

- nodenv, node
  - nodeとは
  - インストール
  - バージョンの設定
- npm
  - npmとは
  - html, css, jsをそのまま開発しない
  - npmの初め方
  - package.json
    - 役割
      - チーム内の開発環境の統一
      - module間の依存関係
    - scripts
    - dependicies, devDependicies
  - package-lock.json
- ディレクトリ構造
  - srcとdist
- 開発環境テンプレート(gurunavi creators)
  - gnavi-npm-scripts-boiler-pug
  - gulp-boilerplate-switchTask
- ビルドツール
  - モジュールバンドラーとタスクランナー
  - webpack
  - gulp
- html(テンプレートエンジン)
  - hbs
    - 記法（使用例）
  - ejs
    - 記法（使用例）
  - pug, jade
    - 記法（使用例）
- css
  - sass
- 自動リロード
  - watch
  - browserSync

### 1日目終了

---

### 2日目
(1日目の振り返り)

# JavaScript(ES5)

> 目的: JavaScriptの開発環境を理解し、どの開発環境でもDOM操作等の最低限の開発をできるようになってもらう

- jsの特徴
  - 動的型付け言語
  - プロトタイプベース
  - 関数型,手続き型であり、オブジェクト指向風に記述も可能
  - バージョン
    - ES5
    - ES201X
      - 未来の記法を採用できる
      - トランスパイルとその方法
  - デバッグ(console.log)
    - 開発者モード(dev-tools)
- 変数
  - 宣言方法
    - ES5
    - ES201X
  - ブロックスコープ
  - 変数の巻き上げ
    - 例
    - デメリット
- データ型
  - Number, String, Boolean, Symbol, Undefined, Null
  - 参照型
    - array, object, function
  - typeof演算子
    - null, arrayがobject
- 関数
  - 引数
    - 型の宣言なし
    - 引数の数が異なっても呼び出す
    - デフォルト引数(ES201X)
  - 関数の定義方法
    - function式
    - 関数コンストラクタ
    - 即時関数
    - アロー関数(ES201X)
- 演算子と制御構文
  - 代入演算子
  - 比較演算子
  - 論理演算子
  - if, for, switch, while
- 配列とオブジェクト
  - map, filter, reduce, forEach
  - オブジェクトのforEach(Object.keys())
  - オブジェクト同士のマージ
    - Object.assign() (ES201X)
    - スプレッド構文 (ES201X)
- 静的検証ツール(eslint)とフォーマッタ(prettier)
  - メリット
  - インストールと設定
- DOM操作とイベントリスナー
  - DOMとは
  - DOM取得用のメソッド
    - getElementById(), getElementsByClassName(), getElementsByTagName(), querySelector(), querySelectorAll()
    - $(element) (jQuery)
  - イベントリスナー
    - イベント
      - load, click, focus, change...
    - .addEventListener(event, function(){})
    - .on(event, function(){}) (jQuery)
    - イベント伝搬
      - aタグ内の要素に対するclickイベント付与
      - preventDefault, stopPropagation
        - イベントリスナー内での記述方法

### 2日目終了

---

### 3日目
(2日目の振り返り)
- よく使うES201Xで追加された文法
  - class構文
  - アロー関数
    - その前に普通のthisの話
    - アロー関数におけるthis
  - スプレッド構文
  - 分割代入
  - テンプレート文字列
  - Array.prototype.includes()
  - import/export
- Storage
  - cookie, localStorage, sessionStorage
- 非同期処理
  - setTimeout
    - 非推奨
  - fetch
    - fetch
      - caniuse.com
    - axios
    - $.ajax({}) (jQuery)
  - Promise
    - all, finaly, race
  - async, await
- ES5, ES201X, jQueryの選択
  - 未来の記法
  - 脱jQuery論

# CSS(Sass)

> 目的: cssの開発環境を理解し、効率よくCSS開発できるようになってもらう
- CSS
  - CSSとは
  - CSSは、CSSファイルに
  - バージョン
  - 表現できること
    - アイコン
    - 状態変化
  - 開発者モード(dev-tools)でのデバッグ
    - 特定の要素で、有効になっているCSSプロパティを確認する
- Sass
  - 概要
  - 主に使用する他のsass構文
- 主に使用するcssプロパティ
  - padding, margin
  - position
  - display
    - block
    - inline
    - flex
- ベンダープレフィックス
  - ベンダープレフィックスとは
  - autoprefixerのインストール・設定

### 3日目終了

---

### 4日目
(3日目の振り返り)

- セレクタ・擬似クラス・擬似要素
  - セレクタとは
  - classセレクタ, 要素セレクタ, idセレクタ
  - link, visited, hover, active, focus, lang
  - first-child, nth-child(n)
  - after, before, first-lin, first-letter
  - その他のセレクタ
- 詳細度
  - カスケード式であること
  - idセレクタ, classセレクタ, 擬似クラス, 擬似要素
- CSS設計
  - BEM(MindBEMding)
  - FLOCSS
- postCSS
  - sassと比較してのメリット
    - 自分でカスタムしていく
      - ビルド速度
      - 未来の記法を採用できる

# HTML

> 目的: HTMLの理解を深め、より最適なHTMLを書いてもらう

- HTMLはなぜ存在するのか
  - HTMLとは
- HTML タグを正しく書く必要性
  - アクセシビリティ
    - 視覚的ハンディと音声読み上げ
- 正しい書き方とは
  - よく使用するタグの意味
    - hx, p, a, img, ul, li, ol, strong, header, main, footer, nav, section, aside, article
  - アウトライン
- 開発者モード(dev-tools)でのデバッグ
  - elements確認, 検索, 削除

# 画像の最適化

> 目的: パフォーマンスを考慮した画像の最適化をできるようになってもらう

- 画像は重い
  - 画像1枚,1リクエスト
  - 容量
- 画像の最適化
  - ファイル形式
    - jpg, png, gif, webp
  - 圧縮
    - imagemin
  - sprite画像
    - 概要
    - sprite画像生成方法
      - spritesmith
  - base64
  - 画像の遅延表示
    - 概要
    - lazyload
  - アイコンをCSSで表現する

## 課題:

### 4日目終了

---

### 5日目
(4日目の振り返り)



## 課題:



### 5日目終了

---

### 6日目
(5日目の振り返り)



## 課題:

### 6日目終了

---

### 7日目
(6日目の振り返り)

## 課題:


### 7日目終了

---

### 8日目
(7日目の振り返り)


### 8日目終了