# T.O.C
[A Function](#a-function)  
[Functional Assumptions](#functional-assumptions)
- [Total](#total)
- [Deterministic](#deterministic)
- [No Side-Effect](#no-side-effects)

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
const addOne => num => num + 1
```

## Deterministic
## No Side Effects