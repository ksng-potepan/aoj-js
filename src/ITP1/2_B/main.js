const main = (stdin) => {
  const [a, b, c] = stdin.split(" ").map((x) => Number(x));

  if (a < b && b < c) {
    return ("Yes");
  } else {
    return ("No");
  }
};

if (typeof isTest === "undefined" || !isTest) {
  // テストフラグが立っていない場合は標準入力から出力まで実行
  console.log(main(require("fs").readFileSync("/dev/stdin", "utf8")));
}

module.exports = main;
