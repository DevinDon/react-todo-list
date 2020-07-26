function logFn() {
  console.log(this.name);
}

const logArrowFn = () => console.log(this.name);

const obj = {
  name: 'inner',
  fn: logFn,
  arrowFn: logArrowFn
};

obj.fn();
obj.arrowFn();
