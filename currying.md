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
