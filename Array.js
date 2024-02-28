class RagavArray {
    data = {};
    length = 0;
  
    constructor(numberOfElements) {
      this.numberOfElements = numberOfElements;
    };

    // Get function to return a value of index
    get(index) {
        if(index >= this.numberOfElements) {
          throw new Error('Index out of bound!');
        }
        return this.data[index];
      }  
    // push function to add the value at last in array
    push(value) {
      if(this.length === this.numberOfElements) {
        throw new Error('Ragav array limit reached!');
      }
      this.data[this.length] = value;
      this.length += 1;
    }
    // pop function to remove the value at last in array
    pop() {
      if(this.length === 0) {
        throw new Error('No elements to pop');
      }
  
      const poppedValue = this.data[this.length-1];
      delete this.data[this.length-1];
      this.length -= 1;
  
      return poppedValue;
    }
  
    // insert function to add the value at particular place
    insert(index, value) {
      if(index >= this.numberOfElements) {
        throw new Error('Index out of bound!');
      }
  
      if(this.length >= this.numberOfElements) {
        throw new Error('Array is full!');
      }
  
      this.length += 1;
      
      let curIndex = index;
  
      let existingValue;
      let currentValue = value;
  
      while(curIndex < this.length) {
        existingValue = this.data[curIndex];
        this.data[curIndex] = currentValue;
        currentValue = existingValue;
  
        curIndex += 1;
      }
    }
  }
  
  const array = new RagavArray(4);
  array.push(10)
  array.push(15)
  array.push(5)
  // array.push(20)
  
  // array.push(25)
  
  // console.log(array.get(0))
  // console.log(array.get(1))
  // console.log(array.get(2))
  // console.log(array.get(3))
  
  // console.log(array.get(4))
  // console.log(array.get(5))
  
  // array.pop();
  // array.pop();
  // array.pop();
  // array.pop();
  
  // array.pop();
  
  array.insert(1, 80);
  array.insert(2, 25);
  
  // array.insert(3, 20)
  // array.insert(4, 20)
  
  
  console.log(array)
  
  
  // Tomorrow: Sort, remove, search
  
  // Task: Remove for Ragav