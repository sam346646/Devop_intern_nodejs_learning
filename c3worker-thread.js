//To pass the message to main
const { parentPort }=require("node:worker_threads");

let j=10;
for (let i = 0; i < 60000000; i++) {
    j++;
}
parentPort.postMessage(j.toString()); //to pass the message