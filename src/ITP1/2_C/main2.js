const main2 = (stdin) => {
  const [a, b, c] = stdin.split(" ").map((x) => Number(x));

  const NumArr = [a, b, c];
  NumArr.sort((a, b) => a - b);
  return NumArr.join(" ");
};

if (typeof isTest === "undefined" || !isTest) {
  // テストフラグが立っていない場合は標準入力から出力まで実行
  console.log(main2(require("fs").readFileSync("/dev/stdin", "utf8")));
}

module.exports = main2;
