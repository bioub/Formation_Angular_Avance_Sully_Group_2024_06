import { asyncLetter } from "./asyncLetter"

it('should resolve A', async () => {
  const letter = await asyncLetter();
  expect(letter).toBe('A');
})


it('should resolve A with fake timer', async () => {

  jasmine.clock().install();

  const promise = asyncLetter();

  jasmine.clock().tick(1000);

  const letter = await promise;
  expect(letter).toBe('A');


  jasmine.clock().uninstall();
})
