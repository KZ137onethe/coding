const map = require("./src/expression.js");
const { RegExpTest } = require("./src/tools.js");

((data) => {
  const test = new RegExpTest(data);

  test.toExec();
})(map.baseMap);
