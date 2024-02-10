// Recursion Basic
function count(num) {
  // Base case
  if (num === 4) return num;

  // what do u want the funciton to do
  return count(num - 1);
}
// console.log(count(10))

// Binary Search Tree Node
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// Insert Method - Insert a BST Node Recursively
BST.prototype.insert = function (value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value);
  } else if (value > this.value) {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
};

// Contain Method - Search an Element in the Tree Recursively
BST.prototype.contains = function (value) {
  if (value === this.value) return true;
  else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  } else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

// Depth First Traversal Method - Traverse/Search thorugh whole BST
BST.prototype.depthFirstTraversal = function (iteratorFunc, order) {
  if (order === "pre-order") iteratorFunc(this.value);
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
  if (order === "in-order") iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  if (order === "post-order") iteratorFunc(this.value);
};

// Breadth First Traversal Method - Traverse/Search thorugh whole BST
BST.prototype.breadthFirstTraversal = function (iteratorFunc) {
  let nodeQueue = [this];
  while (nodeQueue.length) {
    let treeNode = nodeQueue.shift();
    iteratorFunc(treeNode);
    if (treeNode.left) nodeQueue.push(treeNode.left);
    if (treeNode.right) nodeQueue.push(treeNode.right);
  }
};

// getMinVal Method - Get Node with Minimum Value
BST.prototype.getMinVal = function () {
  if (this.left) return this.left.getMinVal();
  else return this.value;
};

// getMaxVal Method - Get Node with Maximum Value
BST.prototype.getMaxVal = function () {
  if (this.right) return this.right.getMaxVal();
  else return this.value;
};

// Iterator Func
function log(value) {
  console.log(value.value);
}

const bst = new BST(50);

bst.insert(20);
bst.insert(30);
bst.insert(60);
bst.insert(70);
bst.insert(10);
bst.insert(90);
console.log(`BST Contains: ${bst.contains(70)}`);
// bst.depthFirstTraversal(log, "in-order");
// bst.depthFirstTraversal(log, "post-order");
bst.breadthFirstTraversal(log);
console.log(`Max Val: ${bst.getMaxVal()}`);
console.log(`Min Val: ${bst.getMinVal()}`);
console.log(bst);
