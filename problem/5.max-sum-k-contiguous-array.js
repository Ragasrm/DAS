// T - O(N)
// S - O(2) -> O(1)

function maxSum(array=[], k) {
    let maxSum = -Infinity;
  
    let sum = 0;
  
    for(let i=0; i<array.length; i++) {
      if(i < k) {
        sum += array[i];
      } else {
        console.log(array[i-k],  array[i])
        sum = sum - array[i-k] + array[i];
      }
  
      if(sum > maxSum) {
        maxSum = sum;
      }
    }
  
    return maxSum;
  }
  
  // console.log(maxSum([2, 5, 7, 1, 9, 6], 3));
  // console.log(maxSum([-2, -5, -7, -1, -9, -6], 3));
  // console.log(maxSum([2, 5, 7, 1, 9, 6], 5));
  // console.log(maxSum([2, 5, 7, 1, 9, 6], 0));

  function maxSUMValueArray(array=[],k){
    let value = 0;

    for(i = 0; i < array.length; i++) {
      let sum = 0;
      for(j=i; j<i+k; j++) {
          sum+=array[j]
      }
      if(value < sum ) {
        value = sum
      }
    }


    return value;
  };


  console.log(maxSUMValueArray([2, 5, 7, 1, 9, 6], 3))