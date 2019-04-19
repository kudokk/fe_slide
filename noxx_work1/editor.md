# 各エディタにおける prettier のインストール

- https://prettier.io/docs/en/editors.html

## atom における prettier-atom のインストール

- atom を インストールする.
  - https://atom.io/
- 起動する。
- `⌘ + ,` で setting を開く
- Install のタブで prettier と入力。一番上に出てくるものをインストール。
- Install 完了後、Settings というボタンがあるので、Format on Save のチェックを有効化する.

## vscode における prettier のインストール

- vscode をインストールする
  - https://code.visualstudio.com/
- 左上から 5 番目のアイコンを押下し、prettier を検索。一番上に出てくる Prettier - Code formatter をインストール。
- `⌘ + ,` で setting を開き、検索ボックスに「Format On Save」と入力し、一番上に出てくるチェックボックスを有効化する。

## Sublime Text における prettier のインストール

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
{
	"auto_format_on_save": true,
}
```

- 参考
- https://packagecontrol.io/packages/JsPrettier

## vim における vim-prettier のインストール

以下の URL を参照して、必要に応じてインストールしてください

- https://github.com/prettier/vim-prettier
