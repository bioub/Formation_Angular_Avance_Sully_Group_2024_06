import { timeoutUpper } from "./timeoutUpper"

it('should call callback', () => {

  jasmine.clock().install();
  const cb = jasmine.createSpy();

  timeoutUpper('abc', cb);

  jasmine.clock().tick(1000);

  expect(cb).toHaveBeenCalledOnceWith('ABC');
  jasmine.clock().uninstall();
})
