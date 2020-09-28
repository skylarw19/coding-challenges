//write functions to demonstate understanding of linkedlist. This is from GA's codepen exercise
// constructor for Node
// appendNode
// prependNode
// pop
// removeFromFront
// insertAt
// search
// sort

class Node{
    constructor(data){
      this.data = data;    // a Node starts with a given data property
      this.next = null;            // a Node also has a .next property initialized as null
    }
}

class LinkedList{
    constructor(){         // a Linked List starts with a "head" property intialized as null
      this.head = null;
    }

    appendNode(data){         // creates a new node with the given data and adds it to back of the list
      const newNode = new Node(data);                   //first create the node
      if (this.head === null) this.head = newNode;      //if the head is null, aka if(!this.head), make it the new Node
      else {                                            //if it's not the head, then go thru list until last one and append node to last one
        let walker = this.head;                         //start at head
        while (walker.next) {                           //while walker.next !== null
          walker = walker.next                          //set walker to next node
        }
        walker.next = newNode;                          //once walker is on last node where walker.next = null, set walker.next to newNode    
      }                    
    }

    prependNode(data){         // creates a new node with the given data and adds it to the front of the list
      const newNode = new Node(data);
      const oldHead = this.head;     //assign head of current list to oldHead variable
      this.head = newNode;           //set the new head to be the newNode
      newNode.next = oldHead;        //set the next value to be the oldlist
    }

    pop(){         // removes the last node from the list and returns it
      if (!this.head) return null;         //if head DNE, return null
      else if(!this.head.next) {           //if head is last node (b/c this.head.next will = null)
        const oldHead = this.head;         //old head = current head node
        this.head = null;                  //set the next of the current head to null       
        return oldHead;                    //return the node
      }
      else {
        let walker = this.head;
        while (walker.next.next){           //goes until i reach 2nd to last node
          walker = walker.next;             //sets walker to 2nd to last node
        }
        const lastNode = walker.next;         //right now walker is set to 2nd to last node, so walker.next points to last node
        walker.next = null;                 //removing last node from list
        return lastNode;
      }
    }

    removeFromFront(){
        // remove the head node from the list and return it
        // the next node in the list is the new head node
      if (!this.head) return null;    //if head DNE, return null
      const firstNode = this.head;    //get first node
      this.head = this.head.next;     //this.head for whole linked list is now changed to be the next node.      
      firstNode.next = null;          //set firstnode.next to null to take only the first node
      return firstNode;
    }
  
    insertAt(X, data){
        // insert a new node into the list with the given data
        // place it after X nodes in the list
        // if X exceeds the bounds of the list, put the node at the end
        // insertAt(0, 7) would add the new node as the head
        const newNode = new Node(data);
        if(X === 0){
            const oldHead = this.head;
            this.head = newNode;
            newNode.next = oldHead;
        }else{
          let count = 1;
          let walker = this.head;
          while(count < X && walker.next){   //while count < x and walker isn't last node
            walker = walker.next;            //set walker to next node
            count++;                         
          }
          newNode.next = walker.next;    //set the next prop of newNode to all the stuff following walker
          walker.next = newNode;              //set current node walker next prop to newNode 
        }
    }
  
    removeAt(X){
        // remove the Xth node from the list, considering 0 to be the first node
        // return the node that has been removed
      if (!this.head) return null;
      else if (X===0){
        const targetNode = this.head;
        this.head = this.head.next;
        targetNode.next = null;
        return targetNode;
      } else {
        let count = 1;
        let walker = this.head;
        while (count<X && walker.next) {  //to find node - while count<X and walker is not last node
          walker = walker.next;           //walker is set to node before X value
          count++;
        }
        const targetNode = walker.next;
        walker.next = walker.next.next;
        targetNode.next = null;
        return targetNode;
      }
    }
  
    search(data){
        // searches the list for a node with the given data
        // if it is found, return the "index" of the node, considering 0 to be the first node
        // if not, return false
      if(!this.head) return false;
      let walker = this.head;
      let index = 0;
      while (walker.next){
        if (walker.data === data) return index;
        else {
          walker = walker.next;
          index++;
        }
      } 
      return walker.data === data ? index : false;
    }
    
      // sort(){  // sort the Linked List in ascending order of data values
    //   if(!this.head) return this;
    //   let swapped = false;
    //   let walker = this.head;
    //   while (walker && walker.next){
    //     if (walker.data > walker.next.data){
    //       swapped = true;
    //       if (walker === this.head){
    //         let first = this.head;
    //         let second = this.head.next;
    //         first.next = second.next;
    //         second.next = first;
    //         this.head = second;
    //       } else {
    //         let first = walker;
    //         let second = walker.next;
    //         first.next = second.next;
    //         second.next = first;
    //       }
    //     }
    //     walker = walker.next;
    //   }
    //   if(!swapped) return this;
    //   else swapped = false;
    // }
    sort(){
        if(!this.head){
            return this;
        }
        let swapped = false;
        let walker;
        let preWalker;
        while(true){
            walker = this.head;
            while(walker && walker.next){
                if(walker.next.data < walker.data){
                    swapped = true;
                    if(walker == this.head){
                        let first = this.head;
                        let second = this.head.next;
                        first.next = second.next;
                        second.next = first;
                        this.head = second;
                    }else{
                        let first = walker;
                        let second = walker.next;
                        let third = walker.next.next;
                        first.next = third;
                        second.next = first;
                        preWalker.next = second;
                    }
                }
                preWalker = walker;
                walker = walker.next;
            }
            if(!swapped){
                return this;
            }else{
                swapped = false;
            }
        }
    }
}


// Test Script below for codepen, DO NOT TOUCH 

// mocha.setup('bdd');
// const expect = chai.expect;

// describe('Node', ()=>{
//     it('should start with a given data property', ()=>{
//         let node = new Node(5);
//         expect(node.data).to.equal(5);
//     });
//     it('should initialize with a null next', ()=>{
//         let node = new Node(5);
//         expect(node.next).to.equal(null);
//         expect(node.next).to.not.be.undefined;
//     });
// })

// describe('Linked List', ()=>{
//     it('should initialize with a null head', ()=>{
//         let list = new LinkedList();
//         expect(list.head).to.equal(null);
//         expect(list.head).to.not.be.undefined;
//     });
//     it('should append nodes to the back', ()=>{
//         let list = new LinkedList();
//         list.appendNode(1);
//         expect(list.head.data).to.equal(1);
//         list.appendNode(2);
//         expect(list.head.next.data).to.equal(2);
//         expect(list.head.data).to.equal(1);
//         expect(list.head.next.next).to.equal(null);
//     });
//     it('should prepend nodes to the front', ()=>{
//         let list = new LinkedList();
//         list.appendNode(2);
//         expect(list.head.data).to.equal(2);
//         list.prependNode(1);
//         expect(list.head.data).to.equal(1);
//         expect(list.head.next.data).to.equal(2);
//     });
//     it('should pop nodes from the back', ()=>{
//         let list = new LinkedList();
//         list.appendNode(1);
//         list.appendNode(2);
//         let removedNode = list.pop();
//         expect(removedNode.data).to.equal(2);
//         let secondRemovedNode = list.pop();
//         expect(secondRemovedNode.data).to.equal(1);
//         expect(list.head).to.equal(null);
//     });
//     it('should remove nodes from the front with removeFromFront', ()=>{
//         let list = new LinkedList();
//         list.appendNode(1);
//         list.appendNode(2);
//         list.appendNode(3);
//         let removedNode = list.removeFromFront();
//         expect(removedNode.data).to.equal(1);
//         expect(list.head.data).to.equal(2);
//         let secondRemovedNode = list.removeFromFront();
//         expect(secondRemovedNode.data).to.equal(2);
//         expect(list.head.data).to.equal(3);
//         let thirdRemovedNode = list.removeFromFront();
//         expect(thirdRemovedNode.data).to.equal(3);
//         expect(list.head).to.equal(null);
//     });
//     it('should insert nodes at a given index with insertAt', ()=>{
//         let list = new  LinkedList();
//         list.appendNode(1);
//         list.appendNode(3);
//         list.insertAt(1, 2);
//         expect(list.head.next.data).to.equal(2);
//         expect(list.head.data).to.equal(1);
//         list.insertAt(0, -99);
//         expect(list.head.data).to.equal(-99);
//         expect(list.head.next.data).to.equal(1);
//     })
//     it('should be able to search for data', ()=>{
//         let list = new LinkedList();
//         list.appendNode(1);
//         list.appendNode(2);
//         list.appendNode(3);
//         let foundNode = list.search(3);
//         expect(foundNode).to.equal(2);
//         let unFoundNode = list.search(42);
//         expect(unFoundNode).to.equal(false);
//     });
//     it('should be able to delete a node', ()=>{
//         let list = new LinkedList();
//         list.appendNode(1);
//         list.appendNode(2);
//         list.appendNode(3);
//         let removedNode = list.removeAt(1);
//         expect(list.head.next.data).to.equal(3);
//         expect(list.head.data).to.equal(1);
//         expect(removedNode.data).to.equal(2);
//         let secondRemovedNode = list.removeAt(0);
//         expect(secondRemovedNode.data).to.equal(1);
//         expect(list.head.data).to.equal(3);
//     });
//     it('should be able to sort itself', ()=>{
//         let list = new LinkedList();
//         list.appendNode(2);
//         list.appendNode(3);
//         list.appendNode(1);
//         list.appendNode(5);
//         list.appendNode(4);
//         list.sort();
//         expect(list.head.data).to.equal(1);
//         expect(list.head.next.data).to.equal(2);
//         expect(list.head.next.next.data).to.equal(3);
//         expect(list.head.next.next.next.data).to.equal(4);
//         expect(list.head.next.next.next.next.data).to.equal(5);
//     });
// })

// mocha.run()