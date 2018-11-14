// @flow
import printMe from './plugins.js';
printMe();

function square(n: number): number {
  return n * n;
}

console.log(square('2')); // Error!
