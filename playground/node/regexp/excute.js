import map from "./expression.js";

function excuteFn(fnName) {
  if (
    typeof this !== "object" &&
    !(this instanceof Map) &&
    !RegExp.prototype.hasOwnProperty(fnName)
  )
    return;

  for (let key of this.keys()) {
    const values = this.get(key);
    console.log(`RegExp expression: ${key}`);
    if (typeof values === "string") {
      console.log(` test string: '${values}', test result: `, key[fnName](values));
    } else if (Array.isArray(values)) {
      values.forEach((val) => {
        console.log(` test string: '${val}', test result: `, key[fnName](val));
      });
    }
  }
}

((data) => {
  const vFn = excuteFn.bind(data);

  vFn("exec");
})(map.strMap);
