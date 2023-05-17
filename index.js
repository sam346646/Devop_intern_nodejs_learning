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


//Extending from eventemitter
const p=require('./pizza-shop');
const p1=new p();
// p1.on("order",(size,flavour)=>{    //comment for inherting drink-machine
//     console.log(`Order received! Bakina a ${size} pizza with ${flavour}`)
// });
// p1.order("large","mushroom");
// p1.displayid();

const d=require('./drink-machine');
const d1=new d();
p1.on("order",(size,flavour)=>{
    console.log(`Order received! Bakina a ${size} pizza with ${flavour}`);
    d1.servedrink(size);
});
p1.order("large","mushroom");
p1.displayid();

console.log("A".charCodeAt());
console.log("a".charCodeAt());
console.log("0".charCodeAt());

//buffer is a queue 
const buffer=new Buffer.from("Sam");
buffer.write("CODE");
console.log(buffer);
console.log(buffer.toJSON());
console.log(buffer.toString());


//fs module for file operation
//Reading
const fs=require('node:fs');
const fileread=fs.readFileSync("./temp.txt","utf-8");  //2nd parameter utf-8 to human readable 8-bits format
console.log(fileread);

fs.readFile("./temp.txt","utf-8",(error,data)=>{ //access file asynchronously using readFile() above synchronous
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(data);
    }});
console.log("It will execute first till readfilesync() finsished to demonstrate async")


//Write
fs.writeFileSync("./temp1.txt","Hello world");  //2nd What to write 

//It will create a new file if not exists
//It will override content i.e, Previous content is deleted and replavced with new 
//To avoid 2 refer next section
fs.writeFile("./temp1.txt","Hello world1",(err)=>{ 
if(err){
    console.log(err);
}
else{
    console.log("File written");
}}); 

//It will append the content
fs.writeFile("./temp2.txt","Hello world1",{flag:"a"},(err)=>{ 
    if(err){
        console.log(err);
    }
    else{
        console.log("File written");
    }}); 
    

const fs1=require('node:fs/promises');
fs1.readFile("temp.txt","utf-8")
.then((data)=>console.log(data))
.catch((error)=>console.log(error));
console.log("second");


//ASYNC
const fs2=require('node:fs/promises');
async function readFile(){
    try{
        const data=await fs2.readFile("temp.txt","utf-8");
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
readFile();



//Streams
const fs3=require('node:fs');
const readablestream=fs3.createReadStream("./temp1.txt",{encoding:"utf-8",highWaterMark:2}); //highWaterMark:2 makes chunk of 2 bytes at a time

const writablestream=fs3.createWriteStream("./temp.txt");

readablestream.on("data",(chunk)=>{
    console.log(chunk);
    writablestream.write(chunk);
});


//Pipe-->Simpler way to stream in one line of pipe read is connected to write as similiar to pipe from tank to sink
const fs4=require('node:fs');
const readablestream1=fs4.createReadStream("./temp1.txt",{encoding:"utf-8",highWaterMark:2}); 
const writablestream1=fs4.createWriteStream("./temp.txt");
readablestream1.pipe(writablestream1);

//To create gz zip file
const zlib=require("node:zlib");
const gzip=zlib.createGzip();
const readablestream2=fs4.createReadStream("./temp1.txt",{encoding:"utf-8",highWaterMark:2});
readablestream2.pipe(gzip).pipe(fs4.WriteStream("./temp.txt.gz"))




//http module

// const http=require("node:http");

// const server=http.createServer((req,res)=>{
//     const superhero={
//         "firstname":"sam",
//         "lastname":"manasseh"
//     }
//     res.writeHead(200,{"Content-Type":"text/html"});
//     // res.end("Hello server created"); //text/plain
//     //res.end(JSON.stringify(superhero)); //application/json
//     res.end("<h1>Hello world</h1>")
// });

// server.listen(3000,()=>{
//     console.log("Server running on port 3000");
// });







//including html file

// const http=require("node:http");
// const fs5=require("node:fs");

// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/html"});
//     const html=fs5.readFileSync("./index.html","utf-8");
//     res.end(html);
// });

// server.listen(3000,()=>{
//     console.log("Server running on port 3000");
// });







//using buffer

// const http=require("node:http");
// const fs5=require("node:fs");

// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/html"});
//     // const html=fs5.readFileSync("./index.html","utf-8");
//     // res.end(html);
//     fs.createReadStream(__dirname+"./index.html").pipe(res);
// });

// server.listen(3000,()=>{
//     console.log("Server running on port 3000");
// });




// //dynamic webpage

// const http=require("node:http");
// const fs5=require("node:fs");

// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/html"});
//     const name="sam";
//     let html=fs5.readFileSync("./index.html","utf-8");
//     html=html.replace("{{name}}",name);
//     res.end(html);
// });

// server.listen(3000,()=>{
//     console.log("Server running on port 3000");
// });





//http routing  -->  if we type localhost:3000/about index page only loaded to make it different do the following
console.clear();
const http=require("node:http");
const fs5=require("node:fs");

const server=http.createServer((req,res)=>{
    // res.end(req.url); //   / will be url
    // req.method to handle GET,POST,PUT

    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("index page");
    }
    else if(req.url==="/about"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("about page");
    }
    else if(req.url==="/api"){
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify({
            "firstname":"sam",
            "lastname":"manasseh"
        }));
    }
    else{
        res.writeHead(404);
        res.end("Page not found");
    }
});

server.listen(3000,()=>{
    console.log("Listening to 3000");
})

























