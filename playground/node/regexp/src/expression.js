// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions

// tag 基本类型 量词
const baseMap = new Map([
  // x* ,表示"x"匹配0次或者多次
  [/bro*/, ["brothers and sisters", "broom handle", "a bright room"]],
  // x+ ,表示"x"匹配一次或者多次
  [/po+[\w]*/, ["Lonely people", "powerful force", "a specious swimming pool"]],
  // x? ,表示"x"匹配0次或者1次
  [/e?le?/, ["element plus", "the length of the table"]],
  // x{n}	,n为一个非负整数,表示x至少匹配n次(不贪婪)
  [/a{4}/, ["aaa", "bbbaaaaa", "aaaaabbb"]],
  // x{n,} ,n为一个非负整数,表示x至少匹配n次(贪婪)
  [/a{4,}/, ["aaa", "bbbaaaaa", "aaaaabbb"]],
  // x{n,m|	,其中“n”和“m”为非负整数，并且 m >= n。与项“x”至少匹配“n”次，至多匹配“m”次。
  [/\d{1, 5}/, ["ewd 12312esaan21", "sdwqqc0x-1qw1e323215sa", "reklt324356dfs;j3d3132kfsa"]],
  // 不使用贪婪
  [/<[\w]+>.*?<\/[\w]+>/, ["<div>内容1</div><div>内容2</div>", "<span>123</span><h1>标题1</h1>"]],
]);

// tag 字符串类型
const strMap = new Map([
  // 一个字符类
  [/[abcd]/, ["brisket", "chop", "sql"]],
  [/[A-C]/, ["brisket", "Choop", "sql"]],
  // 一个否定的字符类
  [/[^a-t]/, ["kobe", "mary", "tom"]],
  [/./, [`\n`, "apple", 56123]],
  [/\d/, ["1213", 4567, "8as32", new Date().toLocaleDateString("fa-IR")]],
  [/\D/, ["abcde", 1231456, new Date().toLocaleString(), "Hello, world!"]],
  [/\w/, ["$el", "batch number", " production ", "__main__", "****2590****"]], // 匹配拉丁字母中的任何字母数字字符，包括下划线
  [/\W/, ["$el", "batch number", " production ", "__main__", "****2590****"]], // 匹配任何不是来自基本拉丁字母的单词字符
  [/\s/, ["Hello, sir.", "A beautiful day!", "Washing Machine", "apple"]],
  [/\S/, [" beer ", "func"]],
  [
    /[\t\r\n\v\f]/,
    ["水平制表符（也就是tab键）\t", "回车符\r", "下一行\n", "垂直制表符\v", "换页符\f"],
  ],
  [/\b/, ["he he \b"]],
  // 可以在这里搜索 unicode 字符: https://symbl.cc/cn/
  // 匹配与hh(两个十六进制数字)对应的字符
  [/\x70/, ["people"]], // unicode 字符 70 代表 p
  [/\x71/, ["query"]], // unicode 字符 71 代表 q
  // 匹配与 hhhh（四个十六进制数字）对应的 UTF-16 码元。
  [/\u4E2D/, ["中国", "太中二了"]], // 匹配 "中"
  [/\u25AD/, ["长方形▭", "菱形◇", "空心圆○"]], // 匹配 "▭"
  // 根据字符的 Unicode 字符属性匹配字符（例如，仅匹配表情符号字符、日文片假名字符、中文汉字字符或日文汉字字符等）。
  // 参考: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
  [/\p{Script=Common}/gu, ["○", "◌", "◈", "▣"]],
  [/\p{Script=Han}/gu, ["北京", "郑州", "青岛", "太原", "南京", "青岛", "长沙"]],
  [/\\t*/, ["\t hello", "	yes ", "Hi!\\t"]],
  [/a|b+/, ["apple", "blue", "about", "can"]],
]);

// tag: 断言类型
const affirmMap = new Map([
  [/^abc/, "abcd"], // 匹配开头
  [/bcd$/, ["haha bcde"]], // 匹配结尾
  [/llo\b/, ["Hello world!"]], // 匹配单词的边界
  [/\Bon/, ["moon", "on glass", "once"]], // 匹配非单词匹配
  [/ly\B/, ["only", "lying", "lonely patients"]],
  [/ab(?=out|ove)/, ["about", "above", "abcedfg", "acdab"]], // 先行断言
  [/a(?!pp)/, ["apple", "accout", "abcd"]], // 先行否定断言
  [/(?<=pear|peach)s/, ["pears", "peachs", "grapefruits"]], // 后行断言
  [/(?<!inflat|outdat)ed/, ["uneducated", "inflated", "outdated"]], // 后行否定断言
]);

// tag: 组和范围类型
const groupsAndRangeMap = new Map([
  [/x|y/, ["lonely", "How much?", "Are you ok?"]],
  [/[a-c]/i, ["fast", "through", "Potatos"]],
  [/[^a-m]/i, ["In contrast", "underscore", "Don't count the days.", "make the days count."]],
  // 捕获组：匹配 x 并记住匹配项(使用圆括号 ())。例如，/(foo)/匹配并记住“foo bar”中的“foo”
  [/(\d{4})[a-z](\d{2})/, ["1982*12", "4512a45"]],
  // \n, 其中n是一个正整数，对正则表达式中与 n 括号匹配的最后一个子字符串的反向引用 (计算左括号)
  [/[^\d]\d{4}(-)[a-z]{4}\1/gi, ["7890-abT-1234-qwUd-dadw-1235", "098-SDwq-31123-dQDd-qwe3"]],
  // 具名捕获组：匹配"x"并将其存储在返回的匹配项的 groups 属性中，该属性位于<Name>指定的名称下。尖括号 (< 和 >) 用于组名。语法：(?<Name>x)
  [/(?<id>\d{4,5})-(?<realname>[a-z]{3,8})/, ["3245-tom", "65231-mary"]],
  // 非捕获组
  [/work:\s(?:\w+)/, ["work: softwareDeveloper", "work: dustman"]],
]);

module.exports = {
  baseMap,
  strMap,
  affirmMap,
  groupsAndRangeMap,
};
