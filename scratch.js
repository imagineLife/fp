
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
// const curried = fn => firstArg => secondArg => fn(firstArg, secondArg)

// // returns the remainder of a divison
// const curriedModulo = curried((x,y) => y % x)

// /*
// 	applies first arg to modulo to 2, 
// 	returning 1 or 0 for an even or odd number
// 	THIS IS THE FIRST EXAMPEL OF CURRYING IN ACTION HERE!
// */
// const isOdd = curriedModulo(2)

// /*
// 	applies a fn to an arr, 
// 	 but allows for 2 fn calls 
// 	  to make this happen via the curried fn
// */ 
// const curriedFilter = curried((filterFnParam, arr) => arr.filter(filterFnParam))

// const getOddNumbers = curriedFilter(isOdd)

// const res = getOddNumbers([1,2,3,4,5,6,7,8,9])






// Currying part 3, splitting a string
// const curried = fn => firstArg => secondArg => fn(firstArg, secondArg)

// const uncurrieWords = str => str.split(' ');
// const testingString = 'something wicked this way comes'
// const res = uncurrieWords(testingString);
// console.log('uncurriedres')
// console.log(res)

// const curriedWords = splitParam => str => str.split(splitParam);
// const splitAtSpaces = curriedWords(' ')

// const curRes = splitAtSpaces(testingString)
// console.log('curRes')
// console.log(curRes)




// Currying pt 4, curriedSlice
// const curriedSlice = start => end => arr => arr.slice(start,end)
// let startArr = [2,4,6,8,10,12,14,16];
// const res = curriedSlice(1)(3)(startArr)

// // Currying pt 5, extending above curry
// const skipFirst = curriedSlice(1)

// const lessFirst = skipFirst(5)(startArr)
// console.log('lessFirst')
// console.log(lessFirst)






// Compose
const toUpper = str => str.toUpperCase();
const exclaim = str => `${str}!`
const first = itms => itms[0];


/*
	COMPOSE!!
*/ 
const comp2 = (f,g) => x => f(g(x));
const comp3 = (f,g,h) => x => f(g(h(x)));


//...two composed functions
const shoutIt = comp2(exclaim, toUpper);
const composedWord = shoutIt('tears');				// returns "TEARS!"
// console.log(composedWord)

// ...three composed functions
const extraShout = str => `${str}!!`
const megaYell = comp3(extraShout, exclaim, toUpper);
const realLoud = megaYell('for fears')
// console.log(realLoud);

//  ALSO! same as...
const megaYellAsTwo = comp2(extraShout, shoutIt);
const realLoudAsTwo = megaYell('for fears')
console.log(realLoudAsTwo);
