# Array Prototype Tools

### This package extends the Array and ReadonlyArray prototypes with a set of useful functions for working with arrays in JavaScript. The functions include:

- `sum`: Sums the values in the array
- `avg`: Calculates the average of the values in the array
- `max`: Finds the maximum value in the array
- `min`: Finds the minimum value in the array
- `isEmpty`: Checks if the array is empty
- `toReversed`: Returns a new array with the elements in reverse order
- `toSorted`: Returns a new array with the elements sorted
- `random`: Returns a random element from the array

### Installation

You can install this package using npm:

```bash
npm install array-prototype-utils
```

### Usage

To use the functions provided by this package, simply import the package and use them like so:

```js
import "array-prototype-utils";

const arr = [1, 2, 3, 4];

console.log(arr.sum()); // 10
console.log(arr.avg()); // 2.5
console.log(arr.max()); // 4
console.log(arr.min()); // 1
console.log(arr.isEmpty()); // false

const reversed = arr.toReversed();
console.log(reversed); // [4, 3, 2, 1]
console.log(reversed === arr); // false
console.log(reversed[0] === arr[0]); // false
console.log(reversed[1] === arr[1]); // false
console.log(reversed[2] === arr[2]); // false
console.log(reversed[3] === arr[3]); // false

const sorted = arr.toSorted();
console.log(sorted); // [1, 2, 3, 4]
console.log(sorted === arr); // false
console.log(sorted[0] === arr[0]); // false
console.log(sorted[1] === arr[1]); // false
console.log(sorted[2] === arr[2]); // false
console.log(sorted[3] === arr[3]); // false

console.log(arr.random()); // 1, 2, 3 or 4
```

Note that this package modifies the Array prototype, so the functions are available on all arrays in your codebase after the package is imported.
