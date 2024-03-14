// T - O(N)
function containsDuplicate(array = []) {
  const seenNumbers = new Set();

  for (let i = 0; i < array.length; i++) {
    const number = array[i];

    if (seenNumbers.has(number)) {
      return true;
    }

    seenNumbers.add(number);
  }

  return false;
}

// console.log(containsDuplicate([1, 2, 3, 2, 7]))
// console.log(containsDuplicate([1, 2, 3]))
// console.log(containsDuplicate([1, 2, 3, 7, 1]))

// T - O(3N) = O(N)
function numberOfDuplicates(array = []) {
  const map = {};

  for (let i = 0; i < array.length; i++) {
    const number = array[i];

    if (map[number]) {
      map[number]++;
    } else {
      map[number] = 1;
    }
  }

  const keys = Object.keys(map);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (map[key] <= 1) {
      delete map[key];
    }
  }

  return map;
}
// console.log(numberOfDuplicates([1, 2, 2, 4, 5, 4]));

// Reduced three loop to two;

function numberOfDuplicatesBetterSolution(array = []) {
    const map = {};
 
   // Build the map object
   for (let i = 0; i < array.length; i++) {
     const number = array[i];
 
     if (map[number]) {
       map[number]++;
     } else {
       map[number] = 1;
     }
   }
 
   // Filter out entries with counts <= 1
   for (const key in map) {
     if (map.hasOwnProperty(key) && map[key] <= 1) {
       delete map[key];
     }
   }
 
   return map;
 }
 
 console.log(numberOfDuplicatesBetterSolution([1, 2, 2, 4, 5, 4]));
