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

