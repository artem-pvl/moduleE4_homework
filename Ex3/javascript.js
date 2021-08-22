function getNewNullObject () {
  return Object.create(null)
};

const obj1 = getNewNullObject()
obj1.prop1 = 'my new prop!'
console.log(obj1)
