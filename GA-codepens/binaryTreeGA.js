// GA codepen for binary tree

class BinaryNode {
    constructor(data){
      this.data = data;
      this.left = null;
      this.right = null;
    }
}
class BinaryTree {
    constructor(){
      this.root = null;
    }
  
    insert(data){
      const newNode = new BinaryNode(data);
      if (!this.root) {
        this.root = newNode;
        return this;
      }
      let walker = this.root;
      while (walker){
        if (data <= walker.data){
          if (!walker.left) {
            walker.left = newNode;
            return this;
          } else walker = walker.left;
        } else {
          if (!walker.right) {
            walker.right = newNode;
            return this;
          } else walker = walker.right;
        }
      }
    }
  
    search(val){ // search the Tree for a node with the given value, if the node exists, return it, if the node doesn't exist, return false
      if(!this.root) return false;
      let walker = this.root;
      while (walker) {
        if (walker.data === val) return walker;
        if (val < walker){
          if (walker.left) {
            walker = walker.left;
          } else return false;
        } else {
          if (walker.right) {
            walker = walker.right;
          } else return false;
        }
      }
      
      // ALT SOLUTION:
      // if(!this.root) return false;
      // let walker = this.root;
      // while (walker){
      //   if (val < walker.data) walker = walker.left;
      //   else if (val > walker.data) walker = walker.right;
      //   else return walker;
      // } return false;
    }
  
    size(node){  // calculate the number of nodes in the tree, starting from the given node
      if (!this.root) return 0;
      let walker = this.root;
      while (walker !== node){
        if (node.data < walker.data) walker = walker.left;
        else if (node.data > walker.data) walker = walker.right;
      }
      
      //not sure if this helper function is correct
      function helper(node){
        if (node) {
          return 1 + helper(node.left) + helper(node.right)
        } 
        return 0;
      }
      
      return helper(walker);
    }
  
    getMax(){ // return the maximum value stored in the tree
      if(!this.root) return null;
      let walker = this.root;
      while (walker){
        walker = walker.right
      }
      return walker.data;
    }
  
    height(node){ // calculate the maximum amount of nodes in any one path from the given node
      if(!this.root) return null;
      let walker = this.root;
      while (walker !== node){
        if (node.data < walker.data) walker = walker.left;
        else if (node.data > walker.data) walker = walker.right;
      }
      
      let maxHeight = 0;
      ///not sure if this helper function is correct
      function helper(node, height=1){
        if (node){
          if (height > maxHeight) maxHeight = height;
          helper(node.left, height+1);
          helper(node.right, height+1);
        }
        return maxHeight;
      }
      return helper(walker);
    }
  
    isBalanced(node){
        // return true or false based on whether the sub-tree starting at the given node is balanced
        // A tree is imbalanced if the height of one branch exceeds the other side by more than one level
        // A tree is balanced if all branches end within one level of each other.      
    }
}
// Test Script below, DO NOT TOUCH 

mocha.setup('bdd');
const expect = chai.expect;

describe('BinaryNode', ()=>{
    it('should initialize with null left and right pointers', ()=>{
        let newNode = new BinaryNode(5);
        expect(newNode.left).to.equal(null);
        expect(newNode.right).to.equal(null);
    })
})

describe('BinaryTree', ()=>{
    it('should initialize with a null root', ()=>{
        let tree = new BinaryTree();
        expect(tree.root).to.equal(null);
        expect(tree.root).to.not.be.undefined;
    });
    it('should place the first node as the root', ()=>{
        let tree = new BinaryTree();
        tree.insert(5);
        expect(tree.root.data).to.equal(5);
        expect(tree.root.left).to.equal(null);
        expect(tree.root.right).to.equal(null);
    });
    it('should place new nodes according to Binary Tree rules', ()=>{
        let tree = new BinaryTree();
        tree.insert(5);
        tree.insert(7);
        expect(tree.root.right.data).to.equal(7);
        expect(tree.root.left).to.equal(null);
        tree.insert(3);
        expect(tree.root.left.data).to.equal(3);
        tree.insert(1);
        expect(tree.root.left.left.data).to.equal(1);
        tree.insert(4);
        expect(tree.root.left.right.data).to.equal(4);
        tree.insert(9);
        expect(tree.root.right.right.data).to.equal(9);
        tree.insert(6);
        expect(tree.root.right.left.data).to.equal(6);
    });
});

mocha.run()