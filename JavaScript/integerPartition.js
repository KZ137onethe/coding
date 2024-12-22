/**
 * 整数拆分
 * 将给出的数字个位数拆分，并将拆分后的数值相加，直到结果为个位数；
 * 例子：
 * -----
 * 输入：258
 * 输出：6
 * -----
 * 输入：111
 * 输出：3
 * -----
 */

function integerPartition(value) {
  if (!Number.isInteger(value) || value < 0) {
    return undefined
  }
  let valueArr = []
  valueArr = value
    .toString()
    .split("")
    .map((v) => Number(v))
  const result = valueArr.reduce((pre, cur) => pre + cur, 0)
  if (result === 0 || Math.floor(Math.log10(result)) === 0) {
    return result
  } else {
    return integerPartition(result)
  }
}

export { integerPartition }
