// 基本类型 base
const baseMap = new Map([[]]);

// 字符串类型
const strMap = new Map([
  // 一个字符类
  [/[abcd]/, ["brisket", "chop", "sql"]],
  [/[A-C]/, ["brisket", "Choop", "sql"]],
  // 一个否定的字符类
  [/[^a-t]/, ["kobe", "mary", "tom"]],
  [/./, [`\n`, "apple", 56123]],
]);

// 断言类型 affirm
const affirmMap = new Map([
  [/^abc/, "abcd"],
  [/bcd$/, ["haha bcde"]],
  [/llo\b/, ["Hello world!"]],
  [/\Bon/, ["moon", "on glass", "once"]],
  [/ly\B/, ["only", "lying", "lonely patients"]],
  [/ab(?=out|ove)/, ["about", "above", "abcedfg", "acdab"]], // 先行断言
  [/a(?!pp)/, ["apple", "accout", "abcd"]], // 先行否定断言
  [/(?<=pear|peach)s/, ["pears", "peachs", "grapefruits"]], // 后行断言
  [/(?<!inflat|outdat)ed/, ["uneducated", "inflated", "outdated"]], // 后行否定断言
]);

export default { baseMap, strMap, affirmMap };
