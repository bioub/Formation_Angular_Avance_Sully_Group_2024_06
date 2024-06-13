export function asyncLetter() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('A')
    }, 1000);
  });
}
