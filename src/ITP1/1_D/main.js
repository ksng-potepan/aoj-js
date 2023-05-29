const main = (stdin) => {
  const s = parseInt(stdin);

  const hour = Math.floor(s / 3600);
  const min = Math.floor((s % 3600) / 60);
  const sec = s % 60;

  return `${hour}:${min}:${sec}`;
};

if (typeof isTest === "undefined" || !isTest) {
  // テストフラグが立っていない場合は標準入力から出力まで実行
  console.log(main(require("fs").readFileSync("/dev/stdin", "utf8")));
}

module.exports = main;
