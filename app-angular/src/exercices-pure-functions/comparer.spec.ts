import { comparer } from "./comparer";

describe('comparer function', () => {
  it('should return Trop petit', () => {
    expect(comparer(1, 2)).toBe('Trop petit');
  });
});
