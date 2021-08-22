function getObjectProperties(obj){
    let properties = Object.getOwnPropertyNames(obj);
    properties.forEach(element => {
        console.log(`${element}: ${obj[element]}`);
    });
};

let obj1 = {a: 123, b: 345};

let obj2 = Object.create(obj1);
obj2.prop2 = 'object 2';

getObjectProperties(obj2);
