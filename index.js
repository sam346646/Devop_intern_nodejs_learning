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


const data=require("./data.json");
console.log(data);
console.log(data.name);
console.log(data['name']);


//Built in modules  1.path
const path=require("node:path");  //node: optional
console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename));   //last portion i.e index.js and last foldername
console.log(path.basename(__dirname));   

console.log(path.extname(__filename));   //extension .js and empty for folder
console.log(path.extname(__dirname));   

console.log(path.parse(__filename));   //dif properties like base,extension etc.
console.log(path.format(path.parse(__filename)));   

console.log(path.isAbsolute(__filename));  //is absolute path or not

console.log(path.join("folder1","folder2","index.html")); //from begining
console.log(path.join("/folder1","folder2","index.html"));
console.log(path.join("/folder1","//folder2","index.html"));
console.log(path.join("/folder1","//folder2","../index.html"));
console.log(path.join(__dirname,"data.json"));

console.log(path.resolve("folder1","folder2","index.html")); //absolute path from last folder of pwd
console.log(path.resolve("/folder1","folder2","index.html"));
console.log(path.resolve("/folder1","//folder2","index.html"));
console.log(path.resolve("/folder1","//folder2","../index.html"));
console.log(path.resolve(__dirname,"data.json"));


//2.Callbacks- function passed as argument to another function 
//function are first class objects
//function can be passed as an argument to function
//function can be returned as values from other function
function greet(name){
    console.log("Hello "+name);
}
function greetsam(greetfn){  //greenfn-->callback function , greetsam-->higher order function
    const name="sam";
    greetfn(name);
}

greetsam(greet);
//types--> synchronous:executed immediately above example 
//asynchronous: executed after particular time or event has occured

// Eg:function callback(){
//     document.getElementById("first").innerHTML="Hello";
// }
// document.getElementById("btn").addEventListener("click",callback);


console.clear();
const EventEmitter=require("node:events");
const emitter=new EventEmitter();
emitter.on("order-pizza",()=>{console.log("Order received! Baking pizza")}); //on event occured whtat to perform
emitter.emit("order-pizza"); //Event occured

emitter.on("order-pizza1",(size,flavour)=>{console.log(`Order received! Baking ${size} pizza with ${flavour}`)}); //use ` to print parameter
// emitter.emit("order-pizza1","large","mushroom");

emitter.on("order-pizza1",(size)=>{
    if(size==="large"){
        console.log("Serving complement drink");
    }
});

console.log("Do work before");
emitter.emit("order-pizza1","large","mushroom");