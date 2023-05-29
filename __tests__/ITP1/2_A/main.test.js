// テストフラグを立てる
isTest = true;
const main = require("/workspaces/aoj-js/src/ITP1/2_A/main");

describe("与えられた２つの整数 a, b を、大小関係を出力する", () => {
  test.each([
    ["1 2", "a < b"],
    ["4 3", "a > b"],
    ["5 5", "a == b"],
  ])("'%s'が与えられると、大小関係を返す。", (input, expected) => {
    expect(main(input)).toBe(expected);
  });
});
