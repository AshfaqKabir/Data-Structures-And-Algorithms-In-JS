// Node for each Stack
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Our Stack
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Push Method - Adds an Item in the Stack
  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // Swap Variable Method
      let tempValue = this.first;
      this.first = newNode;
      this.first.next = tempValue;
    }
    return this.size++;
  }

  // Pop Method - Deletes the last item from Stack
  pop() {
    if (!this.first) return null;
    let tempNode = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;

    return tempNode.value;
  }

  // Peek Method - Peeks at the Top Node in the Stack
  peek() {
    if (!this.first) return null;
    return this.first.value;
  }

  // isEmpty Method - Returns if the Stack is Empty or Not
  isEmpty() {
    return this.size === 0;
  }

  // Size Method - Returns if the length of Stack
  length() {
    return this.size;
  }

  // Print Method - Lists all the Nodes
  print() {
    if (!this.first) return null;
    let currentNode = this.first;
    let strList = "";
    // return currentNode.next.next.next.value
    while (currentNode) {
      strList += currentNode.value + ", ";
      currentNode = currentNode.next;
    }
    return strList;
  }

  // clear Method - Empties the whole Stack
  clear() {
    if (!this.first) return null;
    this.first = null;
    this.last = null;
    this.size = 0;

    return null;
  }
}

let stack = new Stack();

stack.push(50);
stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);

console.log(`Peek: ${stack.peek()}`);
console.log(`Deleted: ${stack.pop()}`);
console.log(`Stack isEmpty: ${stack.isEmpty()}`);
console.log(`Stack Length: ${stack.length()}`);
console.log(`Stack List: ${stack.print()}`);
// Empties the Stack
// stack.clear()

console.log(stack);
