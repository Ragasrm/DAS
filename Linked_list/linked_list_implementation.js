class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {

  constructor(initialValue) {
    this.head = new Node(initialValue);
    this.tail = this.head;
    this.length = 1;
  }

  // T - O(N)
  _append(value) {
    let currentNode = this.head;

    while(currentNode !== null && currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = new Node(value);

    this.length += 1;
  }

  // T - O(1)
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;

    this.length += 1;
  }

  // T - O(N)
  pop() {
    let currentNode = this.head;

    while(currentNode !== null && currentNode.next !== null && currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
    this.tail = currentNode;

    this.length -= 1;
  }

  // T - O(1)
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  // T - (N)
  remove(index) {

    if((index + 1) > this.length) {
      throw "Out of bounds";
    }

    if(index === 0) {
      this.head = this.head.next;
      return false;
    }

    let currentIndex = 0;
    let currentNode = this.head;

    while(currentNode !== null && (currentIndex + 1) < index) {
      currentNode = currentNode.next;
      currentIndex += 1;
    }

    currentNode.next = currentNode.next.next;

    if(currentNode.next === null) {
      this.tail = currentNode;
    }

    this.length -= 1;
  }

  // T - O(N)
  find(value) {
    let currentNode = this.head;
    let currentIndex = 0;

    while(currentNode !== null) {
      if(currentNode.data === value) {
        return currentIndex;
      }

      currentIndex += 1;
      currentNode = currentNode.next;
    }

    return -1;
  }

  // T - O(N)
  get(index) {
    if((index + 1) > this.length) {
      throw "Out of bounds";
    }

    let currentIndex = 0;
    let currentNode = this.head;

    while(currentNode !== null) {
      if(currentIndex === index) {
        return currentNode.data;
      }

      currentNode = currentNode.next;
      currentIndex += 1;
    }
  }

  // T - O(N)
  insert(index, data) {
    if(index === 0) {
      this.prepend(data);
      return;
    }

    if((index+1) === this.length) {
      this.append(data);
      return;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while(currentIndex < (index - 1)) {
      currentNode = currentNode.next;
      currentIndex += 1;
    }

    const node = new Node(data);
    node.next = currentNode.next;
    currentNode.next = node;
  }
}


const list = new LinkedList(5);

list.append(6)
list.append(10)

list.pop()
list.append(12)


list.prepend(2)

list.remove(2)
// list.remove(10)

// console.log(JSON.stringify(list, null, 2));

// console.log(list.find(5))
// console.log(list.find(2))
// console.log(list.find(12))
// console.log(list.find(13))

// console.log(list.get(0))
// console.log(list.get(1))
// console.log(list.get(2))
// console.log(list.get(10))


console.log(JSON.stringify(list, null, 2));
// list.insert(2, 8)
list.insert(0, 8)
list.insert(4, 18)
console.log(JSON.stringify(list, null, 2));