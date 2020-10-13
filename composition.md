## Composing Functions

putting multiple functions together

### Composing 2 Functions together

```js
// 3 functions
const toUpper = (str) => str.toUpperCase();
const exclaim = (str) => `${str}!`;
const first = (itms) => itms[0];

/*
	COMPOSE!!
*/
const comp2 = (f, g) => (x) => f(g(x));

//...two composed functions
const shoutIt = comp2(exclaim, toUpper);
const composedWord = shoutIt("tears");
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
const comp3 = (f, g, h) => (x) => f(g(h(x)));

const extraShout = (str) => `${str}!!`;

//3 composed fns applied
const megaYell = comp3(extraShout, exclaim, toUpper);

const realLoud = megaYell("for fears");
console.log(realLoud); //logs 'FOR FEARS!!!'
```

#### Composing 3 functions AS 2 functions 2x

(_leveraging above js as well_)

```js
//  ALSO! same as...
const megaYellAsTwo = comp2(extraShout, shoutIt);
const realLoudAsTwo = megaYellAsTwo("for fears");
console.log(realLoudAsTwo); //logs 'FOR FEARS!!!'
```

### Comparing composition to other programming paradigms

- Composition

```js
const backwardString = compose(
	join(''),
	filter(x => x.length > 3),
	reverse,
	map(trim),
	split(' ')
	toLowerCase
)
```

- reads right-to-left
- "pipes" data through the compose functino in a linear fashion
- **very similar, almost identical, to dot chaining**
- Programmatic:

```js
const bakwardString = (str) => {
  const lower = str.toLowerCase();
  const words = lower.split();
  words.reverse();
  for (let i in words) {
    words[i] = words[i].trim;
  }
  let keepers = [];
  for (let i in words) {
    if (words[i].length > 3) {
      keepers.push(words[i]);
    }
  }
  return keepers.join("");
};
```

### Leveraging the Unary Function

- **Unary** functions take 1 args
- **Binary** functions take 2 args
  Leveraging Composition and currying create end-user unary functions.

#### Example

Rather than writing...

```js
const onlyShortPeople = allPeople.filter((p) => p.size === "short");
```

Leveraging currying and composition can result in...

```js
// These can be extracted into a library file && imported into the end-developers code
const curried = (fn) => (firstArg) => (secondArg) => fn(firstArg, secondArg);
const filterAnArray = (filterFnParam, arr) => arr.filter(filterFnParam);
const curriedFilter = curried(filterAnArray);
const onlySmalls = (x, y) => x.size === "S";
const getSmalls = curriedFilter(onlySmalls);

// Here is a developer-friendly unary function
const res = getSmalls(allSizesArray);
```

### Loggind during composition + Currying

```js
const logIt = (tag) => (itm) => (console.log(tag, itm), itm);

// used like...
const res = compose(fn1, log("here:"), fn2);
```

this...

- logs a string passed `tag`
- logs the value `itm`
- will not BREAK a chain of functions

Example to-do:
https://codepen.io/drboolean/pen/zYYPmZO
