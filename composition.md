## Composing Functions
putting multiple functions together  

```js

// 3 functions
const toUpper = str => str.toUpperCase();
const exclaim = str => `${str}!`
const first = itms => itms[0];


/*
	COMPOSE!!
*/ 
const composeTwo = (f,g) => x => f(g(x));


//...two composed functions
const shoutIt = composeTwo(exclaim, toUpper);
const composedWord = shoutIt('tears');
```