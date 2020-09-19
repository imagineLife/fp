## Playing with Arguments + Orders

### using 1 instead of 2 args
```js
// Takes 2 args
const add = (a,b) => a + b

//SAME AS taking 1 arg...
const addOneArg = ([a,b]) => a + b
```

### Provide a transformation to/from a function
```js
/*
	Takes a FUNCTION!
	This...
	- takes the fn as a param
	- takes a ARRAY of args
	- converts the fn + ARRAY of args into...
	  ... the same function being passed as a param BUT passing a PAIR of args instead of an arr
*/
const convertToAPairFromAFn = func => ([x,y] => f(x,y))

/*
	Call using...
*/ 

let res = convertToAPairFromAFn(add)([3,5])