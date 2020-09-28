//GA codepen exercise for hash tables
class Node {
    constructor(key, value) {
      // should have a property called "data" that stores key and value in an array: [key, value]
      // should have a reference to the next node called "next", initialized to null
      this.data = [key,value];
      this.next = null;
    }
    get key() {     // return the actual key from the data property
      return this.data[0];
    }
    get value() {     // return the actual value from the data property
      return this.data[1];
    }
  }
  
  // note: this is a simpler LinkedList class than in the Linked List lesson
  class LinkedList {
    constructor(){  // initialize a "head" property to null
      this.head = null;
    }
    add(key, value){
      // create a new Node with the given data as its data property 
      // if this list's head is null make that node the head, 
      // otherwise add it to end of the list
      const newNode = new Node(key, value)
      if(!this.head) {
        this.head = newNode;
      } else {
        let walker = this.head;
        while(walker.next){
          walker = walker.next;
        }
        walker.next = newNode;
      }
      
    }
    
    delete(key){
      // search the list for a node whose data has a key that matches the key parameter
      // remove it from the list and return it
      // if no such node exists, return false
      if(!this.head) return false;
      else if (this.head.key === key){  //if head equals key. b/c while(walker.next) doesn't account for if the head is the only node
        let targetNode = this.head;
        this.head = this.head.next;
        targetNode.next = null;
        return targetNode;
      }
      let walker = this.head;
      while (walker.next){
        // walker will be the one before the target node that we wanna remove
        if (walker.next.key === key){
          let targetNode = walker.next;
          walker.next = targetNode.next;
          targetNode.next = null;
          return targetNode;
        }
        walker = walker.next;
      }
      return false;
    }
    
    search(key){
      // searches the list for a given key. if it is found, return it, if not, return false
      if (!this.head) return false;
      let walker = this.head;
      while (walker){
        if (walker.key === key){
          walker.next = null;
          return walker;
        }
        walker = walker.next;
      }
      return false;
    }  
  }
  
  class HashTable {
    constructor(size) {
      // initialize table size - prime number size is recommended to avoid clustering
      // intialize the table to have "size" number of elements, set to null
      // the table will be an array named "table"
      this.table = [];
      for(let i=0; i<size; i++){
        this.table.push(null);
      }
    }
  
    hash(key) {
      // calculate and return an integer value based key, like in the lesson
      // remember, if you are using modulus, it is recommended to use a prime number to avoid clustering
      let hashCode = 0;
      for (let i=0; i<key.length; i++){
        hashCode += key.charCodeAt(i);
      }
      return hashCode % this.table.length;
    }
  
    insert(key, value) {  /// NOT 100% SURE THIS IS CORRECT
      const idx = this.hash(key);             // hash the key to get an integer index
      if(!this.table[idx]){                   //if idx at table is empty
        let newList = new LinkedList();       //make new list
        newList.add(key, value)               //make sure key value is a node on the list
        this.table[idx] = newList;            //add to table array
      } else {                                //if idx at table is not empty
        let LinkedList = this.table[idx];   
        if (LinkedList.search(key)){                //if LL at table idx has the key
          LinkedList.search(key).data[1] = value;   //search func should return a walker node. so walker.data[1] = value
        } else {                                    //if LL at table idx does not have the key
          LinkedList.add(key, value)                //add to end of list.
        }
      }
      
       // if there's no linked list at that index in the table 
        // create one and add it
        // and insert this key value pair into the new Linked list
      
      // if there's a linked list at that index
        // if a node already exists with the key, update it the data in that node to store the new value
      
      // otherwise
        // add a new node with the given value to the end of the linked list
  
      // for the convenience of the user, you might wish to return the node, or you can just return true
    }
  
    delete(key) {
      // lookup the key (i.e. hash it to get an index)
      // if the key is, in fact, in the linked list, delete that Node and return it
      // if the key wasn't found return -1
      const index = this.hash(key);
      if(this.table[index] !== null){
          const deleted = this.table[index].delete(key);
          if(!deleted){
            return -1;
          }else{
            return deleted;
          }
      }
      return -1;    
    }
  
    search(key) {
      // hash key to get index
      // search the linked list at the index, if the key is found, return the Node. if not, return -1
      const idx = this.hash(key);
      if(this.table[idx] !== null){
        if(this.table[idx].search(key)){
          return this.table[idx].search(key);
        } else return -1;
      } else return -1;
    }
  
  }
  // Test Script below, DO NOT TOUCH 
  
  mocha.setup('bdd');
  const expect = chai.expect;
  
  describe('hash table', ()=>{
      it('should initialize with a given table size', ()=>{
          let hashTable = new HashTable(5);
          expect(hashTable.table.length).to.equal(5);
      });
      it('should intialize a table full of null values', ()=>{
          let hashTable = new HashTable(3);
          hashTable.table.forEach((tableIndex)=>{
              expect(tableIndex).to.be.null;
          })
      });
      it('should return an integer key from hashing', ()=>{
          let hashTable = new HashTable(7);
          let hashResult = hashTable.hash("marmalade");
          expect(typeof hashResult).to.equal("number");
      });
      it("should create Linked Lists for inserting elements", ()=>{
          let hashTable = new HashTable(3);
          hashTable.insert("hashing time", "now");
          let found = false;
          hashTable.table.forEach((tableEntry)=>{
              if(tableEntry){
                  expect(tableEntry.head.key).to.equal("hashing time");
                  expect(tableEntry.head.value).to.equal("now")
                  if(tableEntry.head.key === "hashing time" && tableEntry.head.value === "now"){
                      found = true;
                  }
              }else{
                  expect(tableEntry).to.be.null;
              }
          });
          expect(found).to.be.true;
      });
      it("should be able to successfully search for inserted elements", ()=>{
          let hashTable = new HashTable(3);
          hashTable.insert("hashing time", "now");
          const foundNode = hashTable.search("hashing time");
          expect(foundNode.value).to.equal("now");
      });
      it("should return -1 on unfound elements with search", ()=>{
          let hashTable = new HashTable(3);
          hashTable.insert("hashing time");
          const missingNode = hashTable.search("hash the planet");
          expect(missingNode).to.equal(-1);
      });
      it("should successfully delete and return elements", ()=>{
          let hashTable = new HashTable(3);
          hashTable.insert("hashing time", "now");
          hashTable.insert("red shirt", "my first mission");
          const casualty = hashTable.delete("red shirt");
          expect(casualty.key).to.equal("red shirt");
          expect(casualty.value).to.equal("my first mission");
          expect(hashTable.search("red shirt")).to.equal(-1);
      });
      it("should return -1 when attempting to delete non-existent elements", ()=>{
          let hashTable = new HashTable(3);
          hashTable.insert("a safe node");
          expect(hashTable.delete("a doomed node")).to.equal(-1);
      });
  })
  
  mocha.run()