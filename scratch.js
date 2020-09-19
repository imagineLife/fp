// const add = (a,b) => a + b
// const addLess = ([a,b]) => a + b

// console.log('add 3 + 2');
// const added = add(3,2)
// console.log(added);

// console.log('addLess 3 + 2');
// const addedLess = addLess([3,2])
// console.log(addedLess);



// playing with args
// const add = (a,b) => a + b
// const convertToAPairFromAFn = func => ([x,y]) => func(x,y)

// let res = convertToAPairFromAFn(add)([3,5])

// console.log('res')
// console.log(res)






// currying
const add = (a,b) => a + b;

const curried = fn => firstArg => secondArg => fn(firstArg, secondArg)

const curriedAdd = curried(add)
const incFour = curriedAdd(4)

const res = incFour(7)
console.log('res')
console.log(res)
