function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// const LL = new LinkedList()
// const userList = new LinkedList()
// const taskList = new LinkedList()
// console.log(taskList)

// const taskNode = new Node({id: 1, task: "this is my task"}, "node2", null)
// console.log(taskNode)

// addToHead Method
LinkedList.prototype.addToHead = function (value) {
  const newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;

  this.head = newNode;
};

// addToTail Method
LinkedList.prototype.addToTail = function (value) {
  const newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;

  this.tail = newNode;
};

// removeHead Method
LinkedList.prototype.removeHead = function () {
  if (!this.head) return null;
  let val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};

// removeTail Method
LinkedList.prototype.removeTail = function () {
  if (!this.tail) return null;
  let val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
};

// search specific item Method
LinkedList.prototype.search = function (val) {
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.value == val) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
};

// find IndexOf Element Method
LinkedList.prototype.indexOf = function (val) {
  let currentNode = this.head;
  let indexList = [];
  let count = 0;

  while (currentNode) {
    if (currentNode.value === val) indexList.push(count);
    count++;
    currentNode = currentNode.next;
  }

  return indexList.length === 0 ? "Not Found" : indexList;
};

const LL = new LinkedList();
LL.addToHead(100);
LL.addToHead(200);
LL.addToHead(300);
LL.addToTail(50);
LL.addToTail(200);
LL.addToTail(25);
// console.log("Head Removed", LL.removeHead())
// console.log("Tail Removed", LL.removeTail())
console.log("found", LL.search(300));
console.log(LL.indexOf(200));
console.log(LL);
