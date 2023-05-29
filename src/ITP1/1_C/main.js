const main = (stdin) => {
	const [a, b] = stdin.split(" ").map(x =>
Number(x));

  const area = a * b;

  const length = (a + b) * 2;

  return (`${area} ${length}`);
};

if (typeof isTest === "undefined" || !isTest) {
  // テストフラグが立っていない場合は標準入力から出力まで実行
  console.log(main(require("fs").readFileSync("/dev/stdin", "utf8")));
}

module.exports = main;
