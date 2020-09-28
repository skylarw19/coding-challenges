// GA codepen exercise for Sets

class Set {
    constructor(list = []) {     // Accept a `list` parameter (default to an empty array).
      this.values = [];     // Create a `values` property and set it equal to an empty array
      list.forEach(el => this.insert(el))     // Loop through the array and insert each item into the set
    }
  
    length() { 
      // return the length of the values property
      return this.values.length;
    }
  
    insert(val) {
      // if `val` is not in the `values` property, then push it in
      if (!this.values.includes(val)) {
        this.values.push(val)
      }
    }
  
    remove(val) {
      // if `val` is in the `values` property, then remove it
      if (this.values.includes(val)){
        let idx = this.values.indexOf(val);
        this.values.splice(idx,1);
      }
    }
  
    has(val) {
      // return true if `val` is in `values`, false if it isn't
      if(this.values.includes(val)) return true;
      else return false;
    }
  
    union(set) {
      // return a new Set with the values from this Set and the Set passed in as a parameter
      return new Set([...this.values, ...set.values])
    }
  
    intersect(set) {
      // return a new Set of the values that appear in both this Set and the Set passed in
      return new Set(this.values.filter(el => set.has(el)))  //have to use has instead of includes b/c set is a Set obj, not arr
    }
  
    difference(set) {
      // return a new Set of the values that only appear in one of the two sets
      let set1 = this.values.filter(el => !set.has(el));  //set1 is an arr of this values that aren't in set
      let set2 = set.values.filter(el => !this.has(el));  //set2 is an arr of set values not in this
      return new Set([...set1, ...set2])
    }
  }
  // Test Script below, DO NOT TOUCH 
  
  mocha.setup('bdd');
  const expect = chai.expect;
  
  describe("Set", () => {
    it("should have a `values` property", () => {
      let set = new Set([1, 2, 3, 4]);
      expect(set.values).to.not.be.undefined;
    });
  
    it("should create a unique list of values", () => {
      let set = new Set([1, 1, 2, 2, 3, 3]);
      expect(set.values).to.deep.equal([1, 2, 3]);
    });
  
    it("should have a `length` property", () => {
      let set = new Set([1, 2, 3]);
      expect(set.length).to.not.be.undefined;
      expect(set.length()).to.equal(3);
    });
  
    describe("Set#insert", () => {
      it("should have an `insert` method", () => {
        let set = new Set();
        expect(set.insert).to.not.be.undefined;
      });
  
      it("should insert a value not already in the Set", () => {
        let set = new Set([1, 2, 3]);
        set.insert(4);
        expect(set.values).to.deep.equal([1, 2, 3, 4]);
      });
  
      it("should not insert items already in the set", () => {
        let set = new Set([1, 2, 3]);
        set.insert(3);
        expect(set.values).to.deep.equal([1, 2, 3]);
      });
    });
  
    describe("Set#remove", () => {
      it("should have a `remove` method", () => {
        let set = new Set();
        expect(set.remove).to.not.be.undefined;
      });
  
      it("should remove an item from the set", () => {
        let set = new Set([1, 2, 3]);
        set.remove(3);
        expect(set.values).to.deep.equal([1, 2]);
      });
    });
  
    describe("Set#has", () => {
      it("should have a `has` method", () => {
        let set = new Set();
        expect(set.has).to.not.be.undefined;
      });
  
      it("should return true if a value is in the Set", () => {
        let set = new Set([1, 2, 3]);
        expect(set.has(3)).to.equal(true);
      });
  
      it("should return false if a value is not in the Set", () => {
        let set = new Set([1, 2, 3]);
        expect(set.has(10)).to.equal(false);
      });
    });
  
    describe("Set#union", () => {
      it("should have a `union` method", () => {
        let set = new Set();
        expect(set.union).to.not.be.undefined;
      });
  
      it("should return a new set combination of the previous two sets", () => {
        let set1 = new Set([1, 2, 3]);
        let set2 = new Set([4, 5, 6]);
        let set3 = set1.union(set2);
        expect(set3.values).to.deep.equal([1, 2, 3, 4, 5, 6]);
      });
  
      it("should remove duplicate values in union set", () => {
        let set1 = new Set([1, 2, 3]);
        let set2 = new Set([2, 3, 4, 5]);
        let set3 = set1.union(set2);
        expect(set3.values).to.deep.equal([1, 2, 3, 4, 5]);
      });
    });
  
    describe("Set#intersect", () => {
      it("should have a `intersect` method", () => {
        let set = new Set();
        expect(set.intersect).to.not.be.undefined;
      });
  
      it("should return a set of items in both sets", () => {
        let set1 = new Set([1, 2, 3, 4]);
        let set2 = new Set([2, 3, 4, 5]);
        let set3 = set1.intersect(set2);
        expect(set3.values).to.deep.equal([2, 3, 4]);
      });
    });
  
    describe("Set#difference", () => {
      it("should have a `difference` method", () => {
        let set = new Set();
        expect(set.difference).to.not.be.undefined;
      });
  
      it("should return a set items in only 1 set", () => {
        let set1 = new Set([1, 2, 3, 4]);
        let set2 = new Set([3, 4, 5]);
        let set3 = set1.difference(set2);
        expect(set3.values).to.deep.equal([1, 2, 5]);
      });
    });
  });
  
  mocha.run()