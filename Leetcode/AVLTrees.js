// AVL tree = self balance tree. 
// code from youtube: https://www.youtube.com/watch?v=rbg7Qf8GkQ4&&ab_channel=TusharRoy-CodingMadeSimple

class BinaryNode {
    constructor(data){
      this.data = data;
      this.left = null;
      this.right = null;
    }
}

class AVLTree {
    constructor(){
        this.root = null;
    }

    //PSUEDO CODE
    rotateRight(node){
        let newRoot = node.left;    //set newRoot to node 15
        node.root.left = newRoot.right; // node.root is still 20. set left to 18
        newRoot.right = node.root; //set right of newRoot to branch of 20. the left side is already set.
        // set new heights after rotation
        node.root.height = max(root.left, root.right)+1;   //take max heigh of left or right sides and add 1
        newRoot.height= max(newRoot.left, newRoot.right)+1;
        return newRoot;
    }
}

// think of a tree that looks like this:
//             20
//            /  \
//         15    25  
//         / \
//       10   18
//     /
//    2
// the tree is unbalanced at node 20 b/c height of 3 on left, 1 on right. difference = 2 > 1 -> unbalanced
// so this is left left unbalanced, solution is to rotate right so that 15 becomes the root node:
//             15
//            /  \
//         10    20  
//         /    /  \
//       2    18   25 
