function isInObject(prop, obj){
    return (prop in obj);
};

let obj1 = {a: 123, b: 345};

let obj2 = Object.create(obj1);
obj2.prop2 = 'object 2';

console.log(isInObject('e', obj2));
console.log(isInObject('a', obj2));
