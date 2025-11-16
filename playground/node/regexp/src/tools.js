const { default: chalk } = require("chalk");

// 在 JavaScript 中,使用正则表达式的api:
// RegExp: exec test
// String: match matchAll search repalce split

/**
 * @class 正则表达式测试
 * 可以指定某个正则表达式(通过索引或者正则表达式)执行
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
        val.forEach((v) => cb(key, v, console.log));
      } else if (Object.prototype.toString.call(val) === "[object String]") {
        cb(key, val, console.log);
      }
    }
  }

  toExec() {
    RegExpTest.excuteLog(this.data, (key, val, log) => {
      const str = val,
        reg = key;
      const output = [
        `${chalk.green("  Test string: ")} '${chalk.magenta(str)}' , result: `,
        RegExp.prototype.exec.call(reg, str),
      ];
      log(...output);
    });
  }

  toTest() {
    RegExpTest.excuteLog(this.data, (key, val, log) => {
      const str = val,
        reg = key;
      const output = [
        `${chalk.green("  Test string: ")} '${chalk.magenta(str)}' , result: `,
        RegExp.prototype.test.call(reg, str),
      ];
      log(...output);
    });
  }

  toMatch() {
    RegExpTest.excuteLog(this.data, (key, val, log) => {
      const str = val,
        reg = key;

      const output = [
        `${chalk.green("  Test string: ")} '${chalk.magenta(str)}' , result: `,
        String.prototype.match.call(str, reg),
      ];

      log(...output);
    });
  }

  toMatchAll() {}

  toSearch() {}

  toSplit() {}
}

module.exports = {
  RegExpTest,
};
