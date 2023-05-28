// テストフラグを立てる
isTest = true;
const main = require("../../../src/ITP1/1_B/main");

test.each([
  ['2', 8],
  ['3', 27],
])("'%s'を与えると、'%s'を返す", (input, expected) => {
    expect(main(input)).toBe(expected);
});
