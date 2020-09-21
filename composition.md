## Composing Functions
putting multiple functions together  


### Composing 2 Functions together
```js

// 3 functions
const toUpper = str => str.toUpperCase();
const exclaim = str => `${str}!`
const first = itms => itms[0];


/*
	COMPOSE!!
*/ 
const comp2 = (f,g) => x => f(g(x));


//...two composed functions
const shoutIt = comp2(exclaim, toUpper);
const composedWord = shoutIt('tears');
```
Here...
 - **comp2** is a function that returns a function
   - this fn takes 2 functions and a value as parameters
   - the first 2 params, the functions, get assembled
 - **shoutIt** STORES...
   - comp2, called on 2 functions
     - toUpper (_called first, reading from right-to-left_)
     - exclaim (_called 2nd, reading from right-to-left_)
 - **composedWord** stores...
   - the applied "shoutIt" to a variable

... looks like this code leverages a version of `currying`


### Composing 3 Functions
(_leveraging above js as well_)
```js
// ...three composed functions
const comp3 = (f,g,h) => x => f(g(h(x)));

const extraShout = str => `${str}!!`

//3 composed fns applied
const megaYell = comp3(extraShout, exclaim, toUpper);

const realLoud = megaYell('for fears')
console.log(realLoud);					//logs 'FOR FEARS!!!'

```

#### Composing 3 functions AS 2 functions 2x
(_leveraging above js as well_)
```js
//  ALSO! same as...
const megaYellAsTwo = comp2(extraShout, shoutIt);
const realLoudAsTwo = megaYellAsTwo('for fears')
console.log(realLoudAsTwo);				//logs 'FOR FEARS!!!'

```