import map from "./expression.js";
import chalk from "chalk";

/**
 * @class 正则表达式测试
 */
class RegExpTest {
  /**
   * @constructor 初始化构造器
   * @param {Map.<RegExp, string | string[]>} data - 正则表达式数据
   */
  constructor(data) {
    this.data = data;
  }

  /**
   *
   * @param {Map<RegExp, string | string[]>} map
   * @callback cb 执行回调函数
   * @param { RegExp } key - 正则表达式
   * @param { string | string[] } - 测试正则表达式的字符串/字符串数组
   */
  static excuteLog(map, cb) {
    for (let [key, val] of map.entries()) {
      console.log(chalk.bold("RegExp expression: "), chalk.blue(key));
      if (Object.prototype.toString.call(val) === "[object Array]") {
        val.forEach((v) => cb(key, v));
      } else if (Object.prototype.toString.call(val) === "[object String]") {
        cb(key, val);
      }
    }
  }

  toExec() {
    RegExpTest.excuteLog(this.data, (key, val) => {
      console.log(
        `${chalk.green("  Test string: ")} '${chalk.magenta(val)}' , result: `,
        RegExp.prototype.exec.call(key, val),
      );
    });
  }

  toTest() {
    RegExpTest.excuteLog(this.data, (key, val) => {
      console.log(
        `${chalk.green("  Test string: ")} '${chalk.magenta(val)}' , result: `,
        RegExp.prototype.test.call(key, val),
      );
    });
  }

  toMatch() {
    RegExpTest.excuteLog(this.data, (key, val) => {
      console.log(
        `${chalk.green("  Test string: ")} '${chalk.magenta(val)}' , result: `,
        String.prototype.match.call(key, val),
      );
    });
  }
}

((data) => {
  const test = new RegExpTest(data);

  test.toTest();
})(map.strMap);
