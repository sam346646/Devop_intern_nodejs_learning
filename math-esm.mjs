//1st
// const add=(a,b)=>{return a+b};
// export default add;

//2nd
// export default (a,b)=>{return a+b}; //no eqaul after default

//3rd
const add=(a,b)=>{return a+b};
const sub=(a,b)=>{return a-b};
export default {
    add,sub //or add:add if property and value are same no need
};