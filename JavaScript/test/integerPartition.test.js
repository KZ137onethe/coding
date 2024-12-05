const { integerPartition } = require('../integerPartition')

test('整数拆分-整数测试', () => {
    expect(integerPartition(258)).toBe(6)
    expect(integerPartition(111)).toBe(3)
})

test('整数拆分-界限测试', () => {
    expect(integerPartition(0)).toBe(0)
    expect(integerPartition(-1000)).toBe(undefined)
    expect(integerPartition(1.00000000001)).toBe(undefined)
    expect(integerPartition(Number.MAX_SAFE_INTEGER)).toBe(4)
})