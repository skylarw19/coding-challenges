// GA codepen for bubble and insertion sort

function bubbleSort(array) {
    let swapped = true;
    while(swapped){
      swapped = false;
      for(let i=0; i<array.length; i++){
        if (array[i] > array[i+1]){
          let temp = array[i];
          array[i] = array[i+1];
          array[i+1] = temp;
          swapped = true;
        }
      }
    }
    return array;
  }
  
  function insertionSort (array) {
    for (let i=1; i<array.length; i++){
      value = array[i];
      let j = i-1;
      while (array[j] > value && j>-1){
        array[j+1] = array[j]
        j--;
      }
      array[j+1] = value;
    }
    return array;
  }
  
  // Test Script below, DO NOT TOUCH 
  
//   mocha.setup('bdd');
//   const expect = chai.expect;
  
//   describe('Bubble Sort', ()=>{
//     it('should sort the array', ()=>{
//       const myArray = [12,6,3,7,13,8];
//       const sorted = bubbleSort(myArray);
//       expect(sorted).to.deep.equal([3,6,7,8,12,13]);
//       const otherArray = [-3, -1, 5, 100];
//       const otherSorted = bubbleSort(otherArray);
//       expect(otherSorted).to.deep.equal([-3, -1, 5, 100]);
//     })
//   });
  
//   describe('Insertion Sort', ()=>{
//     it('should sort the array', ()=>{
//       const myArray = [12,6,3,7,13,8];
//       const sorted = insertionSort(myArray);
//       expect(sorted).to.deep.equal([3,6,7,8,12,13]);
//       const otherArray = [-3, -1, 5, 100];
//       const otherSorted = insertionSort(otherArray);
//       expect(otherSorted).to.deep.equal([-3, -1, 5, 100]);
//     })
//   });
  
//   mocha.run()