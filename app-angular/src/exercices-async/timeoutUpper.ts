export function timeoutUpper(val, cb) {
  setTimeout(() => {
    cb(val.toUpperCase());
  }, 1000);
}
