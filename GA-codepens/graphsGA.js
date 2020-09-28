// GA codepen for graphs. super easy, only uses adjacency lists, not matrix. this is just basic stuff
// should probs learn more about weighted graphs, Dijkstra's algorithm etc.

class Graph {
    constructor() {
      // Create a property called `nodes` and set it equal to an empty object.
      // This will be our adjacency list.
      this.nodes = {};
    }
  
    addNode(node) {
      // If the node value passed in does not already exist in our adjacency
      // list, then add it as a key and set it equal to an empty array.
      if (!this.nodes.hasOwnProperty(node)){
        this.nodes[node] = [];
      }
    }
  
    addEdge(node, edge) {
      // If the node exists in our adjacency list, then push the edge into the
      // array of edges for that node.
      if(this.nodes[node]){
        this.nodes[node].push(edge);
      }
    }
  }
  // Test Script below, DO NOT TOUCH 
  
  mocha.setup('bdd');
  const expect = chai.expect;
  
  describe("Graph", () => {
    describe("Graph.nodes", () => {
      it("should have a `nodes` property that is an object", () => {
        let g = new Graph();
        expect(g.nodes).to.not.be.undefined;
        expect(g.nodes).to.be.eql({});
      });
    });
  
    describe("Graph#addNode", () => {
      it("should have an `addNode` method", () => {
        let g = new Graph();
        expect(g.addNode).to.not.be.undefined;
      });
  
      it("should add a node to the graph", () => {
        let g = new Graph();
        g.addNode("A");
        g.addNode("B");
        expect(g.nodes["A"]).to.eql([]);
        expect(g.nodes["B"]).to.eql([]);
      });
    });
  
    describe("Graph#addEdge", () => {
      it("should have an `addEdge` method", () => {
        let g = new Graph();
        expect(g.addEdge).to.not.be.undefined;
      });
  
      it("should add edges to a node", () => {
        let g = new Graph();
        g.addNode("A");
        g.addNode("B");
        g.addNode("C");
        g.addEdge("A", "B");
        g.addEdge("A", "C");
        g.addEdge("B", "C");
        g.addEdge("C", "A");
  
        expect(g.nodes["A"]).to.eql(["B", "C"]);
        expect(g.nodes["B"]).to.eql(["C"]);
        expect(g.nodes["C"]).to.eql(["A"]);
      });
    });
  });
  
  mocha.run()