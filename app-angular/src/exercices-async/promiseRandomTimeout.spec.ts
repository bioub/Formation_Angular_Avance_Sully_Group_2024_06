import { promiseRandomTimeout } from "./promiseRandomTimeout"

it('should call callback', async () => {

  jasmine.clock().install();


  const promise = promiseRandomTimeout('ABC');

  jasmine.clock().tick(1000);

  const val = await promise;

  expect(val).toHaveBeenCalledOnceWith('ABC');
  jasmine.clock().uninstall();
})
