# Rally test challenge

## CS 
**a) Write a function that sorts 11 small numbers (<100) as fast as possible. Estimate how long it would take to execute that function 10 Billion (10^10) times on a normal machine?**

```
function insertionSortRecursive(listOfNumbers = [], n) {
    if (n > 0) {
        insertionSortRecursive(listOfNumbers, n - 1);
        const x = listOfNumbers[n];
        let j = n - 1;
        while (j >= 0 && listOfNumbers[j] > x)  {
          listOfNumbers[j + 1] = listOfNumbers[j];
          j--;
        }
        listOfNumbers[j + 1] = x;
    }
  }

  const arr = [3, 5, 89, 33, 1, 90, 23, 75, 11, 77, 88];
  console.time();
  insertionSortRecursive(arr, arr.length - 1);
  console.timeEnd();
  console.log(arr);
  // [1, 3, 5, 11, 23, 33, 75, 77, 88, 89, 90]
```
Based on info from several sources (for example, [from here](https://www.cpp.edu/~ftang/courses/CS241/notes/sorting.htm)), small sets of numbers (but more the 10) can handle fast the Insertion sorting.
As far I used a recursive variant and average single run time was `0.005` ms, 10 billion of runs could take `14` hours (on my machine, M1, MacBook Air).

**b) Write a function that sorts 10000 powers (a^b) where a and b are random numbers between 100 and 10000? Estimate how long it would take on your machine?**

```
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    
  function powList(num = 0) {
    const getRandomSet = getRandom.bind(this, 100, 10000);
    const result = [];
    for (let i = 0; i < num; i++) {
      const base = getRandomSet();
      const power = getRandomSet();
      result.push(BigInt(base) ** BigInt(power));
    }

    return result;
  }

  console.time()
  const arr = powList(10000);
  insertionSortRecursive(arr, arr.length - 1);
  console.timeEnd();
  console.log('end');
```

Average speed of the whole run is about `15` seconds (based on Safari and Firefox runs, those have larger call stack size then Chrome).
