// T - O(n^2)
// S - O(1)
function twoSums(array=[], target) {
    for(let i=0; i<array.length; i++) {
      for(let j=i+1; j<array.length; j++) {
        if(array[i] + array[j] === target) {
          return true;
        }
      }
    }
  
    return false;
  }
  
  // console.log(twoSums([5, 8, 3, 4], 7));
  // console.log(twoSums([5, 8, 3, 4], 10));
  
  
  // T - O(N)
  // S - O(N)
  function twoSumsBestMap(array=[], target) {
    const requiredNumbers = {};
  
    for(let i=0; i<array.length; i++) {
      const currentElement = array[i];
  
      if(requiredNumbers[currentElement]) {
        return true;
      }
  
      const whatWeNeed = target - currentElement;
  
      requiredNumbers[whatWeNeed] = true;
    }
  
    return false;
  }
  
  // console.log(twoSumsBestMap([5, 8, 3, 4], 7));
  // console.log(twoSumsBestMap([5, 8, 3, 4], 10));
  // console.log(twoSumsBestMap([5, 8, 3, 4], 9));
  
  
  function twoSumsBestSet(array=[], target) {
    const requiredNumbers = new Set();
  
    for(let i=0; i<array.length; i++) {
      const currentElement = array[i];
  
      if(requiredNumbers.has(currentElement)) {
        return true;
      }
  
      const whatWeNeed = target - currentElement;
  
      requiredNumbers.add(whatWeNeed);
      
    }
  
    return false;
  }
  
  console.log(twoSumsBestSet([5, 8, 3, 4], 7));
  console.log(twoSumsBestSet([5, 8, 3, 4], 10));
  console.log(twoSumsBestSet([5, 8, 3, 4], 9));