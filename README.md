# aoj-js

## 使い方

1. `ctrl(cmd) + shift + P` または画面上部の `表示` からコマンドパレットを開く
1. `make file PROBLEM=<問題>` で解答用のファイルを作成する (例: ITP1 1_B を解く場合 `make file PROBLEM=ITP1/1_B`)
1. src/ 以下に問題番号のディレクトリとその直下に解答用ファイルの main.js が作成されているので、そこにコードを書いていく
1. `make run PROBLEM=<問題>` でファイルを実行する
1. `shift + alt + F` または `make fmt PROBLEM=<問題>` でファイルを整形できるので、まめに行っておく
1. 期待する動作になれば AOJ にコピペして提出する
1. AOJ での実行結果が `AC` であった場合は git に commit & push する

## 標準入力について

例えば以下のようなコードで標準入力を受け取ることができる。(入力を終了するには `ctrl(cmd) + D` を二回押下する。)

```js
const main = (input) => {
  console.log(` → "${input}" が入力されました。`);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
```
