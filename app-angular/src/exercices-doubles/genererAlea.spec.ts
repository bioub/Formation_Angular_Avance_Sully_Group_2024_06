import { genererAlea } from "./genererAlea";

it('should return random number with Math.random mocked', () => {
  const inputMin = 10;
  const inputMax = 20;

  spyOn(Math, 'random').and.returnValue(0.5);

  expect(genererAlea(inputMin, inputMax)).toBe(15);
});

it('should return random number with Math.random mocked to 0', () => {
  const inputMin = 10;
  const inputMax = 20;

  spyOn(Math, 'random').and.returnValue(0);

  expect(genererAlea(inputMin, inputMax)).toBe(10);
});

it('should return random number with Math.random mocked to 0.999999', () => {
  const inputMin = 10;
  const inputMax = 20;

  spyOn(Math, 'random').and.returnValue(0.999999);

  expect(genererAlea(inputMin, inputMax)).toBe(20);
});
