import { test, expect, describe } from "vitest"
import { integerPartition } from "../integerPartition"

describe("整数拆分 测试", () => {
  test("整数测试", () => {
    expect(integerPartition(258)).toBe(6)
    expect(integerPartition(111)).toBe(3)
  })

  test("界限测试", () => {
    expect(integerPartition(0)).toBe(0)
    expect(integerPartition(-1000)).toBe(undefined)
    expect(integerPartition(1.00000000001)).toBe(undefined)
    expect(integerPartition(Number.MAX_SAFE_INTEGER)).toBe(4)
  })
})
