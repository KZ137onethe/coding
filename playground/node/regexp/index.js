const map = require("./src/expression.js");
const { RegExpTest } = require("@code/business");

((data) => {
  const test = new RegExpTest(data);

  test.toSplit([3, 4, 3, 2, 1]);
})(map.baseMap);

((data) => {
  const exp = new RegExpTest(data);
  exp.toSplit([3, 2]);
})(map.testMap);
