## Currying
One way to think about it: partial-application functions.
Another way: taking arguements 'one-at-a-time'.

```js
const add = (a,b) => a + b;

const curried = fn => firstArg => secondArg => fn(firstArg, secondArg)

const curriedAdd = curried(add)
const incFour = curriedAdd(4)

const res = incFour(7)
```
