// テストフラグを立てる
isTest = true;
const main = require("/workspaces/aoj-js/src/ITP1/1_D/main");

describe("秒単位の時間sを渡すと、h:m:sへ変換して返す。", () => {
  test.each([
    [0, '0:0:0'],
    [86400, '24:0:0'],
    [46979, '13:2:59'],
  ])("'%s'が与えられると、'h:m:s'を返す。", (input, expected) => {
    expect(main(input)).toBe(expected);
  });
});
