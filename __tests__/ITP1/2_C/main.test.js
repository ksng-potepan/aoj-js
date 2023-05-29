// テストフラグを立てる
isTest = true;
const main2 = require("/workspaces/aoj-js/src/ITP1/2_C/main2");

describe("与えられた３つの整数を、小さい順に並べて出力する。", () => {
  test.each([
    ["1 500 10000", "1 500 10000"],
    ["3 8 1", "1 3 8"],
    ["3 1 2", "1 2 3"],
  ])("'%s'が与えられると、小さい順に'%s'を出力する。", (input, expected) => {
    expect(main2(input)).toBe(expected);
  });
});
