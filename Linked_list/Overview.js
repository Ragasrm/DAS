class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }




const head = new Node(2);
const node2 = new Node(4);
const node3 = new Node(7);
const node4 = new Node(21);

head.next = node2;
node2.next = node3;
node3.next = node4;

console.log(JSON.stringify(head, null, 2));

let currNode = head;

while (currNode !== null) {
  console.log(currNode.data);

  currNode = currNode.next;
}