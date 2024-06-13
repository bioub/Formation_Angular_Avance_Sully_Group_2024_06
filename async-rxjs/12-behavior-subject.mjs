import { BehaviorSubject } from "rxjs";
import { alphabet } from "./alphabet.mjs";

//      alphabet
//         |
//      subject
//      /     \
//   sub      sub

const alphabet$ = alphabet();
const subject$ = new BehaviorSubject('initial value');

alphabet$.subscribe(subject$);

subject$.subscribe((letter) => {
  console.log('sub1', letter);
})

setTimeout(() => {
  subject$.subscribe((letter) => {
    console.log('sub2', letter);
  });
}, 3500);