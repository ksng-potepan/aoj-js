/**
 * 与えられた引数を 3 乗して返す。
 * @param {string} stdin 
 * @returns {string} 引数を 3 乗した値の文字列
 */
const main = (stdin) => {
  // 計算前に number 型にキャスト
  const x = Number(stdin);
  // 計算後に string 型にキャストしたものを return
  return String(x * x * x); // AOJ ではべき乗演算子 (**) が使えない
};

// テストフラグが立っていない場合は標準入力から出力まで実行
if (typeof isTest === "undefined" || !isTest) {
  console.log(main(require("fs").readFileSync("/dev/stdin", "utf8")));
}

module.exports = main;
