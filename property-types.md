## Function Properties && Types
Here are a few ways that functions can work...
 - associativie
 - commutative
 - identity
 - distributive

### Associative
No matter how the 'parenthesis' of the guts of a fn are ordered, the result will not change. Here, the repeatative use of 'add' illustrates the associative principle:    
```js
const add = (a,b) => a + b

const res = add(add(3,5), 5)
const resSame = add(5, add(3,5))
```

### Commutative
No matter the order of inputs, the output is the same. Here, `add` works the same regardless the order of the args `a` or `b`  
```js
add(a,b) === add(b,a)
```