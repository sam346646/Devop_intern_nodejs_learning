const http=require("http");

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello world");
});

const PORT=process.env.PORT || 3000;
server.listen(PORT,()=>console.log("Server is running on port 3000"));

//render->webservice->connect-github->only-select-repository->select-repository->
//new-webserrvice->connect->node-fundamenta:npm install->start:node index.js->
//advanced->add-enviroment-variable->key:PORT->value:3000->create-webservice->click-link