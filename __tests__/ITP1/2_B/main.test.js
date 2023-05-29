// テストフラグを立てる
isTest = true;
const main = require("/workspaces/aoj-js/src/ITP1/2_B/main");

describe("与えられた３つの整数が'a < b < c'なら'Yes'を返し、満たさないなら'No'を返す。", () => {
  test.each([
    ['0 50 100', 'Yes'],
    ['1 3 8', 'Yes'],
    ['3 8 1', 'No'],
])("３つの'%s'が与えられると、'Yes'か'No'を返す。", (input, expected) => {
    expect(main(input)).toBe(expected);
  })
});
