import { alphabet } from "./alphabet.mjs";

//      alphabet
//      /     \
//   sub      sub

const alphabet$ = alphabet();

alphabet$.subscribe((letter) => {
  console.log('sub1', letter);
});

setTimeout(() => {
  alphabet$.subscribe((letter) => {
    console.log('sub2', letter);
  });
}, 3500);