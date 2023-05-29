// テストフラグを立てる
isTest = true;
const main = require("/workspaces/aoj-js/src/ITP1/2_D/main");

describe("長方形の中に円が内部に含まれるなら'Yes'、一部でもはみ出すなら'No'と出力する", () => {
  test.each([
    ["5 4 2 2 1", "Yes"],
    ["5 4 2 4 1", "No"],
    ["100 100 45 45 45", "Yes"],
  ])("'%s'が与えらると、'%s'と返す。", (input, expected) => {
    expect(main(input)).toBe(expected);
  });
});
