### 演習1 ガイダンス

---

### もくじ

- 演習で制作するものについて
  - CSS課題
  - HTML課題
- エディタ環境について
  - prettier plugin
  - editorconfig

---

### 演習で制作するものについて

- CSS課題
- HTML課題

--

#### CSS課題について

課題ファイル: skilltrans-fe_201904_test/src/sass/module/_workCss.scss

この課題は css の理解度について足並みを揃える目的で実施します。  
すぐに終わってしまった場合、マークアップ課題を遂行して頂いて構いません。

--

#### CSS課題実施方法

- npm run dev で立ち上がったブラウザにて[workCss] css課題を選択してください。
- 問題はhtml内に記載されていますので、問題文に従って、module/_workCss.scss を編集し、保存してください。
- ブラウザを更新し、css が反映されたことを確認してください。
- それを繰り返し、課題を完了させてください。

--

#### マークアップ課題について

5 日目と 6 日目はデリバリープレミアムのとあるページを BEM と flex を用いてマークアップしていただきます。

- 課題の元ネタ
- https://delivery.gnavi.co.jp/premium/?utm_id=prederi_shimei2-161031_pc_g_lis&gclid=EAIaIQobChMItL3c5fTn4QIVgxsqCh3ZjQZiEAAYASAAEgKa7fD_BwE

css: skilltrans-fe_201904_test/src/sass/module/_workCss.scss  
html: skilltrans-fe_201904_test/src/ejs/pages/workHtml.ejs

--

#### マークアップ課題

##### 演習の目的
- cssを考慮したHTMLを記述できるようになること.
- BEMによるclass命名の習得すること.
- flexによるレイアウト方法の習得すること.
- メンテナンスを考慮したCSSを記述すること.

##### 演習の目的ではないこと
- ピクセルパーフェクトでデザインを再現すること.
- 完成させること.
- ただブラウザで崩れずに表示させること.

-- 

#### 課題1. CSSを考慮したHTMLの記述、及び、class属性の付与を実施してください。そのとき、命名にはBEMを用いてください。
課題のポイント：  
この課題ではcss(主にflex)を考慮してHTMLを記述することを期待しています。  
特に、flexは親子関係の認識が重要になります。  

__課題の元ネタをコピペすることは全く問題ではありません。ただし、モダンな要素で簡潔に構成できていなければ、適切なマークアップとは言えません。__  

__また、今回はJavaScriptの課題を課しませんので、ハンバーガーメニュー内の記述や、トグル・アコーディオン・スライダーによって展開する箇所はマークアップ不要になります。__

-- 

#### 課題2. Sass(Scss)を記述してください。
課題のポイント：  
この課題ではBEMを用いて記述したclass名の特徴を利用し、Sass(Scss)の「とある記法」を使って効率よく作業を進めることを期待しています。  
以下の点にも注意して、作業を進めて頂くことを期待しています。

- flexで中央揃えをするにはどのプロパティか。
- marginとpaddingのどちらが適切か。
- そのプロパティはそのHTML要素に記述することが適切か。
- 予測性・再利用性・拡張性・保守性を意識できているか。

この課題も元ネタのCSSをコピペすることは全く問題ではありません。ただし、元ネタのCSSを使い回すことが最適かどうか十分に検討の上、コピペをしてください。「なんとなくコピペ」はNGです。  

テキストや画像のurlはdevtoolsを使用してコピペするようにしてください。

---

### エディタ環境について

--

#### prettier plugin

--

#### prettier plugin について

他の分野でも同じだと思いますが、フロントエンドも生産効率を上げるために、エディタ環境について学習する必要があります。  
今回はプラグインを導入する練習として prettier のエディタ側のプラグインを導入してみたいと思います。

導入方法については 次の項 を参照してください

--

#### editorconfig

--

#### editorconfig について

<p class="-small">editorconfig は異なるエディタ・IDE 間でも一貫したコーディングスタイルを定義、維持するツールです。<br>editorconfig は、コーディングスタイルの定義をするファイルフォーマットとそのフォーマットを読みこみ、エディタに定義を結びつけるプラグインから成り立っています。</p>

<p class="-small">prettier plugin をインストールした要領で editorconfig のプラグインもインストールしてみてください。(任意)</p>

```yaml
# .editorconfigのSAMPLE
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

---

#### 各エディタにおける prettier のインストール

- https://prettier.io/docs/en/editors.html

-- 

#### atom における prettier-atom のインストール

- atom を インストールする.
  - https://atom.io/
- 起動する。
- `⌘ + ,` で setting を開く
- Install のタブで prettier と入力。一番上に出てくるものをインストール。
- Install 完了後、Settings というボタンがあるので、Format on Save のチェックを有効化する.

-- 

#### vscode における prettier のインストール

- vscode をインストールする
  - https://code.visualstudio.com/
- 左上から 5 番目のアイコンを押下し、prettier を検索。一番上に出てくる Prettier - Code formatter をインストール。
- `⌘ + ,` で setting を開き、検索ボックスに「Format On Save」と入力し、一番上に出てくるチェックボックスを有効化する。

-- 

#### Sublime Text における prettier のインストール

- Sublime Text をインストールする
  - https://www.sublimetext.com/
- View > show console でコンソールを表示させ、package Control のインストールコマンドを入力

  - インストールコマンドは以下の URL から参照してください
  - https://packagecontrol.io/installation

- `⌘ + shift + p` を同時押しし、文字入力欄に install と入力する。そして install package を選択.
- install package の文字入力欄にて `prettier` と入力し、一番上に出てくる `jsPrettier` を選択.
- `npm install -g prettier`
- Sublime Text>Package Settings> JsPrettier>Settings - User
- 以下を追記

```
{"auto_format_on_save": true,}
```

参考
- https://packagecontrol.io/packages/JsPrettier

-- 

#### vim における vim-prettier のインストール

以下の URL を参照して、必要に応じてインストールしてください

- https://github.com/prettier/vim-prettier


---

#### それでは、CSS課題から演習を開始してください。
