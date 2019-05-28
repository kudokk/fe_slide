### 演習1 ガイダンス

<a href="../">戻る</a>

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

- skilltrans-fe_201904_testにて[workCss] css課題を選択してください。
- この課題は css の理解度について足並みを揃える目的で実施します。  
- 問題はhtml内に記載されていますので、問題文に従って、skilltrans-fe_201904_test/src/sass/module/_workCss.scss を編集してください。
- すぐに終わってしまった場合、マークアップ課題に進んでも問題ありません

--

#### マークアップ課題について

5 日目と 6 日目はデリバリープレミアムのとあるページを BEM と flex を用いてマークアップしていただきます。

- skilltrans-fe_201904_testにて[workHtml] html課題を選択してください。
- 課題の元ネタ(sp)
- https://delivery.gnavi.co.jp/premium/?utm_id=prederi_shimei2-161031_pc_g_lis&gclid=EAIaIQobChMItL3c5fTn4QIVgxsqCh3ZjQZiEAAYASAAEgKa7fD_BwE

css: skilltrans-fe_201904_test/src/sass/module/_workHtml.scss  
html: skilltrans-fe_201904_test/src/ejs/pages/workHtml.ejs

--

#### マークアップ課題

##### 演習の目的
- cssを考慮したHTMLを記述できるようになること.
- BEMによるclass命名を習得すること.
- Sass記法を習得すること
- flexによるレイアウト方法の習得すること.
- メンテナンスを考慮したCSSを記述すること.

##### 演習の目的ではないこと
- ピクセルパーフェクトでデザインを再現すること.
- 完成させること.
- ただブラウザで崩れずに表示させること.

-- 

#### 注意点
・今回はJavaScriptの課題を課しませんので、ハンバーガーメニュー内の記述や、トグル・アコーディオン・スライダーによって展開する箇所はマークアップ不要になります。

__・課題の元ネタをコピペすることは全く問題ではありません。ただし、モダンな要素で簡潔に構成できていなければ、適切なマークアップとは言えません。__  

-- 

#### 注意点
以下の点にも注意して、作業を進めて頂くことを期待しています。

- flexで中央揃えをするにはどのプロパティか。
- marginとpaddingのどちらが適切か。
- そのプロパティはそのHTML要素に記述することが適切か。
- 予測性・再利用性・拡張性・保守性を意識できているか。

テキストや画像のurlはdevtoolsを使用してコピペするようにしてください。
<p class="-small">(ただし、本番環境のCSSプロパティが最適解とは限りません。不適切な記述の場合もあります)</p>

---

### エディタ環境について
- .editorconfig
- prettier plugin

--

#### .editorconfig について

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


--

#### prettier plugin について

他の分野でも同じだと思いますが、フロントエンドも生産効率を上げるために、エディタ環境について学習する必要があります。  
今回はプラグインを導入する練習として prettier のエディタ側のプラグインを導入していただきたいと思います。

導入方法については 次の項 を参照してください

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
