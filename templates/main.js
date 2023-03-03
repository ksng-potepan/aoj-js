const main = (stdin) => {
  // ここに処理を記述
};

// テストフラグが立っていない場合は標準入力から出力まで実行
if (typeof isTest === "undefined" || !isTest) {
  console.log(main(require("fs").readFileSync("/dev/stdin", "utf8")));
}

module.exports = main;
