## Currying
One way to think about it: partial-application functions.
Another way: taking arguements 'one-at-a-time'.

### An Example
```js
const add = (a,b) => a + b;

const curried = fn => firstArg => secondArg => fn(firstArg, secondArg)

const curriedAdd = curried(add)
const incFour = curriedAdd(4)

const res = incFour(7)
```

### Whats happening here
 - **Add**
   - hopefully clear
 - **curriedAdd**
   - applies currying to the add fn, allowing...
     - curriedAdd to be a placeholder of the add fn
     - curriedAdd to take 2 params, through separate fn calls
 - **incFour**
   - passes 1 param to the curried version of add
   - THIS allows the NEXT call of 'add', which has gotten 'renamed' to 'incFour', to only take 1 param

### Another Example
```js
const curried = fn => firstArg => secondArg => fn(firstArg, secondArg)

// returns the remainder of a divison
const curriedModulo = curied((x,y) => y % x)

/*
	applies first arg to modulo to 2, 
	returning 1 or 0 for an even or odd number
	THIS IS THE FIRST EXAMPEL OF CURRYING IN ACTION HERE!
*/
const isOdd = curriedModulo(2)

```


### When to Curry?!
When I want to 'remember' an argument of a fn