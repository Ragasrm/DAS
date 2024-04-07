/* The cumulative sum of an array at index i is defined as the sum of all elements of the array from index 0 to index i.
Examples:
*********
Initial Array: [1, 2, 3, 4]
Cumulative Sum: [1, 3, 6, 10]
*************************************************************************************************************************
Initial Array: [1, 1, 1, 1, 1]
Cumulative Sum: [1, 2, 3, 4, 5]
*************************************************************************************************************************
Initial Array: [1, 3, 5, 7, 9]
Cumulative Sum: [1, 4, 9, 16, 25]
*/


/*
T --> O(N)
S --> O(1)
*/
function cumulative_sum(arr=[]) {
    return arr.reduce((acc, current, index) => {
        if (index === 0) {
            return [current];
        } else {
            return [...acc, acc[index - 1] + current]; 
        }
    }, []);
}


console.log("1 --> [1, 3, 6, 10]", cumulative_sum([1, 2, 3, 4]))
console.log("2 --> [1, 2, 3, 4, 5]", cumulative_sum([1, 1, 1, 1, 1]))
console.log("3 --> [1, 4, 9, 16, 25]", cumulative_sum([1, 3, 5, 7, 9]))


/*

The cumulative sum of an array at index i is defined as the sum of all elements of the array from index 0 to index i.

Examples
Initial Array: [1, -2, 3, 4, -6]
Cumulative Sum: [1, -1, 2, 6, 0]

Initial Array: [1, -1, -1, -1, 1]
Cumulative Sum: [1, 0, -1, -2, -1]

Initial Array: [1, 3, 5, 7]
Cumulative Sum: [1, 4, 9, 16]
*/

// console.log("4", cumulative_sum([1, -2, 3, 4, -6]))
// console.log("5", cumulative_sum([1, -1, -1, -1, 1]))
// console.log("6", cumulative_sum([1, 3, 5, 7]))

