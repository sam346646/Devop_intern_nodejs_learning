//1,2 same
// import add from './math-esm.mjs';

// console.log(add(10,2));

//3
// import math from './math-esm.mjs';

// console.log(math.add(10,2));
// console.log(math.sub(10,2));

import math from './math-esm.mjs';  //math is object
//import * as math from './math-esm.mjs';
//import {add,sub} from './math-esm.mjs'; //where const {add,sub}=math no need

const {add,sub}=math;  //add and sub should match the function
console.log(add(10,2));
console.log(sub(10,2));

console.clear();
