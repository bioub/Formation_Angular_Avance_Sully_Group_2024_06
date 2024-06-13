import { racineCarre } from "./racineCarre"

describe('racineCarre function', () => {
  it('should return sqrt value', () => {
    expect(racineCarre(4)).toBe(2)
  })
  it('should throw if value is negative', () => {
    expect(() => racineCarre(-1)).toThrow()
  })
})
