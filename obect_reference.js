const obj1 = {
    name: "sam"
};

const obj2 = obj1;
obj2.name = "Kiran";
console.log(obj1.name); // It will change the name property to kiran since obj2=obj1 makes both objects address as same.

//Solution
const obj3 = {
    name: "sam"
};

let obj4 = obj3; //use let instead const
obj4={     //dont use . operator
    name : "Kiran"
};
console.log(obj3.name+" "+obj4.name);


