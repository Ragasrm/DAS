class RagavArray {
  data = {};
  length = 0;

  constructor(numberOfElements) {
    this.numberOfElements = numberOfElements;
  }

  // let a = [];
  // let b = new Arrya()

  // O(1)
  push(value) {
    if(this.length === this.numberOfElements) { // 1
      throw new Error('Ragav array limit reached!'); // 1
    }
    this.data[this.length] = value; // 1
    this.length += 1; // 1
  }

  // O(1)
  get(index) {
    if(index >= this.numberOfElements) {
      throw new Error('Index out of bound!');
    }

    return this.data[index];
  }

  // O(1)
  pop() {
    if(this.length === 0) {
      throw new Error('No elements to pop');
    }

    const poppedValue = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length -= 1;

    return poppedValue;
  }

  // O(n)
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

  sort() {
    // TODO: Implement while learning sorting algorithms
  }

  // O(n)
  search(value) {
    // Linear search
    for(let i=0; i < (this.length); i++) {
      if(this.data[i] === value) {
        return i;
      }
    }

    return undefined;
  }

  // Optional task
  split() {
  };


  // remove by index
  remove(indexToRemove) {
    if(indexToRemove >= this.numberOfElements) {
        throw new Error('Index out of bound!');
    }

    let removedValue = this.data[indexToRemove];

    for(let i = indexToRemove; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
    }
    return removedValue;
}

}



const array = new RagavArray(4);
array.push(10)
array.push(15)
array.push(5)
// array.push(20)
console.log(array)
array.remove(1)

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

//array.insert(1, 80);
// array.insert(2, 25);

// array.insert(3, 20)
// array.insert(4, 20)

// console.log('result search(15) => ', array.search(15))
// console.log('result search(99) => ', array.search(99))

console.log(array)


// Tomorrow: Sort, remove, search

// Task: Remove for Ragav