// @flow

function foo(x: ?number): number | string{
  if (x) {
    return x;
  }
  return 'hi';
}

export default foo;
