const EventEmitter=require('node:events');
class Pizzashop extends EventEmitter{
    constructor()
    {
        super();
        this.id=0;
    }
    order(size,flavour){
        this.id++;
        this.emit("order",size,flavour);
    }
    displayid(){
        console.log("Order number is "+this.id);
    }
}
module.exports=Pizzashop;