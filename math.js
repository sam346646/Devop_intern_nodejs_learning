const add=(a,b)=>{return a+b};
const sub=(a,b)=>{return a-b};
module.exports={
    add,sub  //or property:function(add:add,sub:sub)  
};


//for 4th one directly refer index.js 4th pattern
// module.exports.add=(a,b)=>{return a+b};   //.add extra from 2nd one
// module.exports.sub=(a,b)=>{return a-b};

//for 5th one directly refer index.js 5th pattern  ('modules.' ommited) better use 4th pattern
// exports.add=(a,b)=>{return a+b};   //.add extra from 2nd one
// exports.sub=(a,b)=>{return a-b};