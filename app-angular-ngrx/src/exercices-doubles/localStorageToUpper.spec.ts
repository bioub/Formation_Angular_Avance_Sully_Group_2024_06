import { localStorageToUpper } from "./localStorageToUpper";

describe('localStorageToUpper function', () => {

  afterEach(() => {
    localStorage.clear();
  });

  it('should value from storage in uppercase', () => {
    localStorage.setItem('my-key', 'my-value');
    expect(localStorageToUpper('my-key')).toBe('MY-VALUE');
  });

});
