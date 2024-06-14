import { promiseRandomTimeout } from "./promiseRandomTimeout"

it('should call callback (v3)', async () => {

  jasmine.clock().install();


  const promise = promiseRandomTimeout('ABC');

  jasmine.clock().tick(1000);

  const val = await promise;

  expect(val).toBe('ABC');
  jasmine.clock().uninstall();
})
