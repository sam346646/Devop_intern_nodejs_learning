//diffrebce between cluser and worker thead
//to execute outside the main thread

const http=require('node:http');
const { Worker }=require("node:worker_threads");  //{ Worker } -->restructuring constructor

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Homepage");
    }
    else if(req.url==="/slowpage"){
        const worker=new Worker("./c3worker-thread.js");
        let j=0;
        worker.on("message",(j)=>{
            res.writeHead(200,{"Content-Type":"text/plain"});
            res.end(`Slow page ${j}`);
        });
    }
});
server.listen(3000,()=>console.log("Listening to port number 3000"));

