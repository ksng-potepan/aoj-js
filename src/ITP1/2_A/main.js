const main = (stdin) => {
  const [a, b] = stdin.split(" ").map(x => Number(x));

  if (a < b) {
    return ("a < b");
  } else if (a > b) {
    return ("a > b");
  } else {
    return ("a == b");
  }
};

if (typeof isTest === "undefined" || !isTest) {
  // テストフラグが立っていない場合は標準入力から出力まで実行
  console.log(main(require("fs").readFileSync("/dev/stdin", "utf8")));
}

module.exports = main;
