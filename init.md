# T.O.C
[A Function](#a-function)  
[Functional Assumptions](#functional-assumptions)
- [Total](#total)
- [Deterministic](#deterministic)
- [No Side-Effect](#no-side-effects)


## Why Functional Programming?!  
- Reliable  
  - we can expect things from them
- Portable
- Re-usable
  - NOT buried in a specific use-case
- Testable
- Composable
  - put some functions together!
 
## A Function 
from set theory
- a single-value collection of pairs
- i.e. input && output
- input returns same output everytime

## Functional assumptions
1. Total
2. Deterministic
3. No Observable side-effects

### Total
A total fn (_unlike a partial fn_) has 1 output for every input.  
**NOT TOTAL**  
```js
const addOne => num => {
	if(num === 0) return 1;
	if(num === 2) return 3;
}
```

**TOTAL**  
```js
const addOne = num => num + 1
```

## Deterministic  
A fn that ALWAYS gets the SAME output for every input  
**NOT deterministic**  
```js
const getTimeGap => item => {
	const now = new Date()
	const itemTime = new Date(item.createdAt)
	return now - itemTime 
}
```
This always changes when running the fn, as the `now` time always changes.

**Deterministic**  
```js
const getTimeGap = (dateStart, dateEnd) => dateEnd - dateStart
```
This will always return the same result with the same input.

## No Side Effects
A fn that has no observable functionality beyond computing a value from inputs.
**WITH side-effects**  
```js
const add => (a,b) => {
	console.log('Heres a side-effect');
	return a + b
}
```
The `console.log` is a side-effect, doing more than returning a value basaed on the inputs.

**WITHOUT side-effects**  
```js
const add => (a,b) => {
	console.log('Heres a side-effect');
	return a + b
}
```