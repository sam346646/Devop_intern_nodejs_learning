console.log("Hello world");
require('./add');  //adds add.js to index.js (no need of .js in add.js,if other need to specify)

//each file is a module
//module exports
const s=require('./add1');
const sum1=s(2,5);
const sum2=s(2,6);
console.log(sum1);
console.log(sum2);

//module scope ----> each module has its own scope
require('./batman');
require('./superman');

//iife ---> immediately invoked function expression (each function has its own scope)
require('./iife');

//module caching
const hero=require('./superhero');
console.log(hero.getName());
hero.setName("supermen");
console.log(hero.getName());

const newhero=require('./superhero'); //It will doesn't come here because module is already cached
console.log(hero.getName());  //It will display supermen not batmen because of caching same as above object

//To solve caching not instantiate object in module.exports instead pass class
const newhero1=require('./superhero1');
const superman1=new newhero1("supermeen");
console.log(superman1);
console.log(superman1.getName());
superman1.setName("Bruce wayne");
console.log(superman1.getName());

const superman2=new newhero1("batmeen");
console.log(superman2);
console.log(superman2.getName());
superman2.setName("Bruce payne");
console.log(superman2.getName());


//function has (exports,require,module,__filename,__dirname)

//Different import and export patterns
//1. refer add1.js

//2. directly
const sum=require('./add2');
console.log(sum(5,8));

//3.more than one export or function in single module -> refer math.js
const math=require('./math');
console.log(math.add(5,2));
console.log(math.sub(5,2));
//or structuring
//const math=require('./math');
const {add,sub}=math;
console.log(add(5,2));
console.log(sub(5,2));

//4. 3rd one directly refer math.js 4th one

//5. only with exports.add in 4th instead module.exports.add


//Object reference or why to use module.exports instead of only exports
console.clear();
require('./obect_reference');