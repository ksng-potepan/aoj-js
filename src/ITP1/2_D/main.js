const main = (stdin) => {
  const [W, H, x, y, r] = stdin.split(" ").map((x) => Number(x));

  if (0 <= x - r && x + r <= W && 0 <= y - r && y + r <= H) {
    return "Yes";
  } else {
    return "No";
  }
};

if (typeof isTest === "undefined" || !isTest) {
  // テストフラグが立っていない場合は標準入力から出力まで実行
  console.log(main(require("fs").readFileSync("/dev/stdin", "utf8")));
}

module.exports = main;
