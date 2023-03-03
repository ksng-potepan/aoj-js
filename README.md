# aoj-js

## 使い方

1. `ctrl(cmd) + shift + P` または画面上部の `表示` からコマンドパレットを開く
1. `Dev Containers: Reopen in Container` を実行 (VSCode で aoj-js を開いたときに画面右下にでてくる以下のポップアップをクリックして開いても OK)

    ![Reopen in Container ポップアップ](./images/devcontainer_popup.png)

1. 画面上部の `ターミナル` から `新しいターミナル` または再度コマンドパレットを開き、`Terminal: Create New Terminal` を実行 (以下で出てくる make コマンドは開いたターミナルで実行する)
1. `make file PROBLEM=<問題>` で解答用のファイルを作成する (例: ITP1 1_B を解く場合 `make file PROBLEM=ITP1/1_B`)
1. src/ 以下に問題番号のディレクトリとその直下に解答用ファイルの main.js が作成されているので、そこにコードを書いていく
1. `make run PROBLEM=<問題>` でファイルを実行する
1. `shift + alt(⌥) + F` または `make fmt PROBLEM=<問題>` でファイルを整形できるので、まめに行っておく
1. 期待する動作になれば AOJ にコピペして提出する
1. AOJ での実行結果が `AC` であった場合は git に commit & push する
1. 終了する場合は VSCode ごと閉じて OK

## 標準入力・出力について

* 例えば以下のようなコードで標準入力を受け取り、処理してから出力することができる。(入力を終了するには `ctrl + D` を二回押下する。)
* main では「文字列を受け取り、問題に応じた処理を行い、結果として出力する文字列を返す」というように、[I/O とは分離](#io-と処理の分離)したほうが良い
  * I/O: Input/Output
  * [サンプルコード](./sample/main.js)は実際にそのように実装している

```js
const main = (stdin) => {

  // 空白区切りの一行での入力 a, b を受け取る(空白 " " で文字列を split)
  const [a, b] = stdin.split(" ");
  // a, b を数値型として受け取る場合
  const [a, b] = stdin.split(" ").map(x => Number(x));

  // 入力を複数行受け取って配列にする(改行コード "\n" で文字列を split)
  const inputs = stdin.split("\n");

}

console.log(main(require("fs").readFileSync("/dev/stdin", "utf8")));
```

## I/O と処理の分離

* main 関数の中では I/O は行わないほうが良い
* 以下にそれぞれの例を記載している。

### (OK) main 関数が I/O とは分離されている例

```js
const main = (stdin) => {
  const res = `答えは ${stdin} です。`
  return res;
}

// ここで入力
const stdin = require("fs").readFileSync("/dev/stdin", "utf8");
// 入力した文字列を引数に main 関数を実行し、結果を res に代入
const res = main(stdin);
// 結果を出力
console.log(res);
```

ちなみに main 関数より下の部分 (`const stdin` ～ `console.log` の行まで) は一行で以下のように記述できる。

`console.log(main(require("fs").readFileSync("/dev/stdin", "utf8")));`

### (NG) main 関数内で Input も行ってしまっている例

```js
const main = () => {
  // ここで入力してしまっている
  const stdin = require("fs").readFileSync("/dev/stdin", "utf8");
  const res = `答えは ${stdin} です。`
  return res;
}

console.log(main());
```

### (NG) main 関数内で Output も行ってしまっている例

```js
const main = (stdin) => {
  const res = `答えは ${stdin} です。`
  // ここで出力してしまっている
  console.log(res);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
```

### (NG) main 関数内で I/O の両方を行ってしまっている例

```js
const main = (stdin) => {
  // ここで入力してしまっている
  const stdin = require("fs").readFileSync("/dev/stdin", "utf8");
  const res = `答えは ${stdin} です。`
  // ここで出力もしてしまっている
  console.log(res);
}

main();
```

## git の設定

* ターミナルで `git --version` を実行し、git が使用できることを確認 (devcontainer を利用する場合、デフォルトで使用できるはず)
* `git config user.name` でユーザ名が設定されていることを確認
  * 設定されていなければ `git config --local user.name "<ユーザ名>"` で設定する
* `git config user.email` でメールアドレスが設定されていることを確認
  * 設定されていなければ `git config --local user.email "<メールアドレス>"` で設定する

## jest でのテスト

* `make test-file PROBLEM=<問題>` でテスト用ファイル (`main.test.js`) が作成される
  * 先に `make file PROBLEM=<問題>` で解答用ファイルが作成されている必要がある
  * 作成される場所は解答用ファイルと同階層
* `make sample-test` でサンプルとして用意したテストを実行できる
* 参考資料
  * [公式ドキュメント](https://jestjs.io/ja/docs/getting-started)
  * <https://qiita.com/jintz/items/61af86a12b53b24ef121>
