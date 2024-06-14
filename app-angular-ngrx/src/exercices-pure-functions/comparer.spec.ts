import { comparer } from "./comparer";

describe('comparer function', () => {
  it('should return Trop petit', () => {
    expect(comparer(1, 2)).toBe('Trop petit');
  });
  it('should return Trop grand', () => {
    expect(comparer(2, 1)).toBe('Trop grand');
  });
  it('should return Gagné', () => {
    expect(comparer(1, 1)).toBe('Gagné');
  });
});
