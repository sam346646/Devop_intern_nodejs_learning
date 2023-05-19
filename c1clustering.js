//To demonstrate single thread blocking of node

//In which if home page(first) and slowpage(second) is refreshed slow page will be blocked respectively 
//to avoid use clustering,pm2,worker thread 
// const http=require('node:http');
// const server=http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.writeHead(200,{"Content-Type":"text/plain"});
//         res.end("Homepage");
//     }
//     else if(req.url==="/slowpage"){
//         for(let i=0;i<6000000000;i++){}
//         res.writeHead(200,{"Content-Type":"text/plain"});
//         res.end("Slow page");
//     }
// });
// server.listen(3000,()=>console.log("Listening to port number 3000"));


//if we create only one worker is same as one master is working 
//so create atleast two workers
//it depend on cpu core-8

//To see the cpu cores
// const os=require("node:os");
// console.log(os.cpus()); //display each cpu core information
// console.log(os.cpus().length); //display number of cpu core



const cluster=require('node:cluster');

if(cluster.isMaster){
    console.log(`Master process ${process.pid} is running`);
    cluster.fork();
    cluster.fork();
}
else{
    console.log(`Worker ${process.pid} started`);
    const http=require('node:http');
    const server=http.createServer((req,res)=>{
        if(req.url==="/"){
            res.writeHead(200,{"Content-Type":"text/plain"});
            res.end("Homepage");
        }
        else if(req.url==="/slowpage"){
            for(let i=0;i<6000000000;i++){}
            res.writeHead(200,{"Content-Type":"text/plain"});
            res.end("Slow page");
        }
    });
    server.listen(3000,()=>console.log("Listening to port number 3000"));
}


//To create optimum number of worker without manually, we have to imstall pm2
//npm install -g pm2
//pm2 start cluster.js -i 0   (where cluster.js don't have manual creation of cluster)
//pm2 stop cluster.js  (To stop)