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
// const add = (a,b) => a + b;

// const curried = fn => firstArg => secondArg => fn(firstArg, secondArg)

// const curriedAdd = curried(add)
// const incFour = curriedAdd(4)

// const res = incFour(7)
// console.log('res')
// console.log(res)


// Currying part 2
const curried = fn => firstArg => secondArg => fn(firstArg, secondArg)

// returns the remainder of a divison
const curriedModulo = curried((x,y) => y % x)

/*
	applies first arg to modulo to 2, 
	returning 1 or 0 for an even or odd number
	THIS IS THE FIRST EXAMPEL OF CURRYING IN ACTION HERE!
*/
const isOdd = curriedModulo(2)

/*
	applies a fn to an arr, 
	 but allows for 2 fn calls 
	  to make this happen via the curried fn
*/ 
const curriedFilter = curried((filterFnParam, arr) => arr.filter(filterFnParam))

const getOddNumbers = curriedFilter(isOdd)

const res = getOddNumbers([1,2,3,4,5,6,7,8,9])
console.log('res')
console.log(res)

