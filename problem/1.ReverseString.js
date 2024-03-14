// Input: Hello, world!
// Ouptut: !dlrow ,olleH


function reverseString(word) {
let reverseString='';
  for(let i=word.length-1; i >= 0; i--){
    reverseString += word[i];
  }
    return reverseString
};


//o(n) 
console.log(reverseString("Hello, world!"))

// Input: Hello, world!

// Ouptut: !dlrow ,olleH

// T - O(n/2) - O(n)
function reverseString(string) {
  const strArray = string.split('');

  let leftPointer = 0;
  let rightPointer = strArray.length - 1;

  let iterations = 0;

  while(leftPointer < rightPointer) {
    iterations += 1;

    const temp = strArray[leftPointer]
    strArray[leftPointer] = strArray[rightPointer];
    strArray[rightPointer] = temp;
  

    leftPointer += 1;
    rightPointer -= 1;
  }

  console.log(string.length, iterations);

  return strArray.join('');
}

console.log(reverseString('Hello') === 'olleH');
console.log(reverseString('Helo') === 'oleH');

console.log(reverseString('Hello world') === 'dlrow olleH');

reverseString('Helloewgnlwenlwenlwenlewnlwenewlhnlhnlewnglegn')

