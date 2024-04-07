/* The cumulative sum of an array at index i is defined as the sum of all elements of the array from index 0 to index i.

Examples:
Initial Array: [1, 2, 3, 4]
Cumulative Sum: [1, 3, 6, 10]

Initial Array: [1, 1, 1, 1, 1]
Cumulative Sum: [1, 2, 3, 4, 5]

Initial Array: [1, 3, 5, 7, 9]
Cumulative Sum: [1, 4, 9, 16, 25]

*/


/*
T --> O(N)
S --> O(1)
*/

function cumulative_sum(arr=[]) {
    let cummulativeSumArray = [];
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        cummulativeSumArray.push(sum);
    }

    return cummulativeSumArray;
}


console.log("1", cumulative_sum([1, 2, 3, 4]))
console.log("2", cumulative_sum([1, 1, 1, 1, 1]))
console.log("3", cumulative_sum([1, 3, 5, 7, 9]))