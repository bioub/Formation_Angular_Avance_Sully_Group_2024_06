export function asyncCallback(cb) {
  setTimeout(() => {
    cb()
  }, 1000);
}
