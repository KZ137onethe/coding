import map from "./expression.js";
import chalk from "chalk";

class RegExpTest {
  /**
   * 构造器
   * @param {Map<RegExp, string | string[]>} data 正则表达式数据
   */
  constructor(data) {
    this.data = data;
  }

  #cb({ isArr, isStr }) {
    for (let [key, val] of this.data.entries()) {
      if (Object.prototype.toString.call(val) === "[object Array]") {
        val.forEach((v) => {
          isArr(key, v);
        });
      } else if (Object.prototype.toString.call(val) === "[object String]") {
        isStr(key, v);
      }
    }
  }

  toExec() {
    this.#cb({
      isArr: (key, v) => {
        console.log(` test string: '${v}', test result: `, RegExp.prototype.exec.call(key, v));
      },
      isStr: (key, val) => {
        console.log(` test string: '${val}', test result: `, RegExp.prototype.exec.call(key, val));
      },
    });
  }

  toTest() {
    this.#cb({
      isArr: (key, v) => {
        console.log(` test string: '${v}', test result: `, RegExp.prototype.test.call(key, v));
      },
      isStr: (key, val) => {
        console.log(` test string: '${val}', test result: `, RegExp.prototype.test.call(key, val));
      },
    });
  }

  toMatch() {
    this.#cb({
      isArr: (key, v) => {
        console.log(` test string: '${v}', test result: `, String.prototype.match.call(v, key));
      },
      isStr: (key, val) => {
        console.log(` test string: '${val}', test result: `, String.prototype.match.call(key, val));
      },
    });
  }
}

((data) => {
  const test = new RegExpTest(data);

  test.toExec();
})(map.strMap);
