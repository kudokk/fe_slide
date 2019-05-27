# フロントエンド検証環境
https://frontend.gnavi.co.jp/skilltrans-fe_slide/

# jenkins
http://172.30.80.25:9050/jenkins/job/skilltrans-fe_slide_deploy/

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
- 開発環境テンプレート(gurunavi creators)
  - gnavi-npm-scripts-boiler-pug
  - gulp-boilerplate-switchTask
- ビルドツール
  - タスクランナー
    - Grunt, gulp
  - モジュールバンドラー
      - browserify, webpack
- HTML(テンプレートエンジン)
  - よく見かけるディレクトリ構成
  - hbs
    - 記法（使用例）
  - ejs
    - 記法（使用例）
  - pug, jade
    - 記法（使用例）
- CSS
  - sass
  - cssMqpacker
  - autoprefixer
  - cssnano
- js
  - babel
  - uglify
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
  - 関数型であり、オブジェクト指向風に記述も可能
  - バージョン
    - ES5
    - ES201X
    - caniuse.com
  - 開発者モード(dev-tools)でのデバッグ(console.log)
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
  - データ型の紹介
    - 基本型: Number, String, Boolean, Symbol, Undefined, Null
    - 参照型: array, object, function
  - データ型の調べ方(typeof演算子)
    - null, arrayがobject
- 関数
  - 引数
    - デフォルト引数(ES201X)
  - 関数の定義方法
    - function式
    - アロー関数(ES201X)
    - 関数コンストラクタ(deprecated)
    - 即時関数
  - 関数の特徴
    - 引数の数と型は区別しない
    - 同名関数の場合
- 演算子と制御構文
  - 演算子
    - 算術演算子
    - 代入演算子
    - 比較演算子
    - 論理演算子
    - その他の演算子
  - 制御構文
- 配列とオブジェクト
  - 配列
    - 宣言方法
    - アクセス方法
    - 4大メソッド: map, filter, reduce, forEach
  - オブジェクト
    - オブジェクトとは
    - 宣言方法
    - アクセス方法
    - オブジェクト同士のマージ
      - Object.assign() (ES201X)
    - オブジェクトのforEach(Object.keys())
      - スプレッド構文 (ES201X)
- JavaScript の書き方
  - 静的検証ツール(eslint)
    - eslintとは
    - メリット
    - eslint-config
    - 設定方法
  - フォーマッタ(prettier)
    - メリット
    - インストールと設定
- DOM操作とイベントリスナー
  - DOMとは
  - DOM取得用のメソッド
    - getElementById(), getElementsByClassName(), getElementsByTagName(), querySelector(), querySelectorAll()
    - document.getElementsByClassName() vs document.querySelectorAll()
    - $(element) (jQuery)
  - 配列っぽい操作
  - イベントリスナー
    - イベントリスナーとは
      - .addEventListener(event, function(){})
      - .on(event, function(){}) (jQuery)
    - イベント
      - load, click, focus, change...
    - イベント制御
      - event.stopPropagation()
      - event.preventDefault()

### 2日目終了

---

### 3日目
(2日目の振り返り)
  - DOM操作課題
    - 課題1: イベントリスナーの付与
    - 課題2: イベント制御
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
- CookieとStorage
  - cookie, localStorage, sessionStorage
    - 特徴, 属性, jsによる操作
- 非同期処理
  - 同期と非同期
  - setTimeout
    - 非推奨
  - fetch
    - $.ajax({}) (jQuery)
    - fetch
    - axios
  - Promise
    - Promiseのない時代(コールバック地獄)
    - all, finaly, race
  - async, await
- ES5, ES201X, jQueryの選択
  - 未来の記法
  - 脱jQuery論

# CSS(Sass)

> 目的: cssの開発環境を理解し、効率よくCSS開発できるようになってもらう
- CSS
  - CSSとは
    - webページの見た目（スタイル）を調整する宣言的な言語, カスケード式
    - CSSは、CSSファイルに
  - バージョン
    - 使用できないCSSプロパティも
  - リセット系CSS
    - reset.css
    - normalize.css
  - 表現できること
    - アイコン
    - 状態変化
    - アニメーション
  - 開発者モード(dev-tools)でのデバッグ
    - 特定の要素で、有効になっているCSSプロパティを確認・変更
    - ブラウザ上でのデバッグであること
- Sass
  - Sassとは
    - 構造的に整理して記述する
    - CSSのプリプロセッサ
  - Sassの機能・構文
    - import
    - 変数
    - mixin
- 主に使用するcssプロパティ
  - padding, margin
    - padding, marginの違い
    - box-sizing: border-box;
    - 上下marginの相殺
    - ショートハンド
  - position
    - relative
    - absolute
    - 上下中央, 左右中央
  - display
    - block
    - inline
    - flex
      - floatに代わるレイアウト手法
      - ブラウザによって挙動が異なることも
      - justify-content, align-items
- ベンダープレフィックス
  - ベンダープレフィックスとは
  - autoprefixerの対象ブラウザ・OS設定

### 3日目終了

---

### 4日目
(3日目の振り返り)

- セレクタ・擬似クラス・擬似要素
  - セレクタとは
  - idセレクタ, classセレクタ, 要素型セレクタ
  - 擬似クラス
    - link, visited, hover, active, focus, lang
    - first-child, nth-child(n)
    - 擬似クラス課題
  - 擬似要素: after, before, first-lin, first-letter
  - その他のセレクタ: 全称, 属性, 複数, 子孫, 子, 隣接
- 詳細度
  - カスケード式であること
  - 詳細度の計算
- CSS設計
  - CSS設計とは
    - 予測性・再利用性・保守性・拡張性
    - 必要性
  - CSS設計の紹介の前に
    - 詳細度の統一(classセレクタの使用)
    - BEM(MindBEMding)
  - 有名な設計方法
    - FLOCSS
    - SMACSS
- PostCSS
  - postCSSとは
    - プリプロセッサ & ポストプロセッサ
  - sassと比較してのメリット
    - 自分でカスタムしていく
      - ビルド速度
      - 未来の記法を採用できる

# HTML

> 目的: HTMLの理解を深め、より最適なHTMLを書いてもらう

- HTMLとは
- HTML タグを正しく書く必要性
  - SEO
  - アクセシビリティ
    - 視覚的ハンディと音声読み上げ
- 正しい書き方とは
  - よく使用するタグの意味
    - hx, p, a, img, ul, li, ol, strong, header, main, footer, nav, section, aside, article
  - アウトライン
- 覚えておくと役立つ html のルール・セオリー
- 開発者モード(dev-tools)でのデバッグ
  - elements確認, 検索, 削除

# 画像の最適化

> 目的: パフォーマンスを考慮した画像の最適化をできるようになってもらう

- 画像は重い(再確認)
  - 容量
  - 画像1枚,1リクエスト
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

- CSS課題
- HTML課題

### 4日目終了

---

### 5日目
(4日目の振り返り)

## 課題:
- CSS課題
- HTML課題


### 5日目終了

---

### 6日目
(5日目の振り返り)

## 課題:
- CSS課題
- HTML課題

### 6日目終了

---

### 7日目
(6日目の振り返り)

## 課題:
- アコーディオン課題
- モーダル課題
- 非同期課題
- イメージスライダー課題


### 7日目終了

---

### 8日目
(7日目の振り返り)

## 課題:
- アコーディオン課題
- モーダル課題
- 非同期課題
- イメージスライダー課題

### 8日目終了