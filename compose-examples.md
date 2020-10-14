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

const isInStock = (d) => d.in_stock === true;
const curry = (fn) => (p1) => (p2) => fn(p1, p2);
const curriedFilter = curry((filterFnParam, arr) => arr.filter(filterFnParam));
const getInStock = curriedFilter(isInStock);
const onlyInStock = getInStock(cars);
```
