// O(n)
function insert(array, index, value) {
    let curIndex = index;
  
    let existingValue;
    let currentValue = value;
  
    while(curIndex < array.length) {
      existingValue = array[curIndex];
      array[curIndex] = currentValue;
      currentValue = existingValue;
  
      curIndex += 1;
    }
  
    return array;
  }
  
  // T - O(K x N)
  function rotateArray(array=[], k) {
    for(let i=0; i<k; i++) { // O(k)
      const lastValue = array[array.length-1];
  
      array = insert(array, 0, lastValue);
    }
  
    return array
  }
  
  // console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3))
  
  
  function rotateArrayBetter(array=[], k) {
    const splitIndex = k % array.length; // O(1)
  
    console.log('splitIndex', splitIndex);
  
    const leftHalf = array.slice(0, splitIndex);
    const rightHalf = array.slice(splitIndex, array.length);
  
    console.log('>>>', rightHalf, leftHalf);
  
    
    console.log(rightHalf.concat(leftHalf)); // O(N)
  }
  
  // rotateArrayBetter([1, 2, 3, 4, 5, 6, 7], 3)
  console.log('\n')
  rotateArrayBetter([1, 2, 3, 4, 5, 6, 7], 12)
  // console.log([3, 4, 5, 6, 7, 1, 2])