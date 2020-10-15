# Examples of Composition

## Get Last In-Stock

```js
const carsArr = [
  { name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true },
  {
    name: "Spyker C12 Zagato",
    horsepower: 650,
    dollar_value: 648000,
    in_stock: false,
  },
  {
    name: "Jaguar XKR-S",
    horsepower: 550,
    dollar_value: 132000,
    in_stock: false,
  },
  { name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false },
  {
    name: "Aston Martin One-77",
    horsepower: 750,
    dollar_value: 1850000,
    in_stock: true,
  },
  {
    name: "Pagani Huayra",
    horsepower: 700,
    dollar_value: 1300000,
    in_stock: false,
  },
];
```

### With Currying

```js
const isInStock = (d) => d.in_stock === true;
const curry = (fn) => (p1) => (p2) => fn(p1, p2);
const curriedFilter = curry((filterFnParam, arr) => arr.filter(filterFnParam));
const getInStock = curriedFilter(isInStock);
const onlyInStock = getInStock(cars);
```

### With Composition

```js
const inStock = (d) => d.in_stock == true;
const onlyName = (o) => o["name"];
const filterOutOfStock = (arr) => arr.filter(inStock);
const getLast = (arr) => arr[arr.length - 1];
const comp3 = (f, g, h) => (x) => f(g(h(x)));
const getLastInStock = comp3(onlyName, getLast, filterOutOfStock);
const lastInStock = getLastInStock(carsArr);
console.log("lastInStock");
console.log(lastInStock);
```

## Get First Car Name

```js
// including previous fns
const firstItem = (arr) => arr[0];
const firstCarFn = comp2(onlyName, firstItem);
const firstCarName = firstCarFn(carsArr);
```
