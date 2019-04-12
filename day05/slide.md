### 演習ガイダンス

---

### もくじ

- 演習で制作するものについて
  - チュートリアル
  - マークアップ課題
- エディタ環境について
  - prettier plugin
  - editorconfig

---

### 演習で制作するものについて

- チュートリアル
- マークアップ課題

--

#### チュートリアル

--

#### チュートリアルについて

課題ファイル: ./day05/practice/tutorial/no01.html

この課題は css の理解度について足並みを揃える目的で実施します。  
すぐに終わってしまった場合、マークアップ課題を遂行して頂いて構いません。

--

#### チュートリアル実施方法

- ./day05/practice/tutorial/no01.html を Chrome にドラッグアンドドロップしてください。
- エディタで./day05/practice/tutorial/css/style.css を編集し、保存してください
- ブラウザを更新し、css が反映されたことを確認してください。
- それを繰り返し、課題を完了させてください。

--

#### マークアップ課題

--

#### マークアップ課題について

5 日目と 6 日目はレッツエンジョイ東京のとあるページを BEM と flex を用いてマークアップしていただきます。

- 課題の元ネタ
- https://www.enjoytokyo.jp/phones/date/?sc_lid=top_sp_scn-prsn_1_scen-1

--

#### マークアップ課題の諸注意

- この課題では flex と BEM を現場で扱えるようになることが目的であるため、デザイン通り一言一句間違わずにマークアップすることは目的ではありません。
- その他の細かい諸注意は ./day05/practice/markup/README.md を参照してください。

---

### エディタ環境について

--

#### prettier plugin

--

#### prettier plugin について

他の分野でも同じだと思いますが、フロントエンドも生産効率を上げるために、エディタ環境について学習する必要があります。  
今回はプラグインを導入する練習として prettier のエディタ側のプラグインを導入してみたいと思います。

導入方法については ./day05/editor.md を参照してください。

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

#### それでは、チュートリアルから演習を開始してください。
