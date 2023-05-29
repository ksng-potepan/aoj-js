/**
 * 与えられた引数を３乗にして返す。
 * @param {String} stdin 標準入力です。
 * @returns {Number} ３乗にした値を返します。
 */

const main = (stdin) => {
  const x = Number(stdin);
  return  (x * x * x);
};

if (typeof isTest === "undefined" || !isTest) {
  // テストフラグが立っていない場合は標準入力から出力まで実行
  console.log(main(require("fs").readFileSync("/dev/stdin", "utf8")));
}

module.exports = main;
