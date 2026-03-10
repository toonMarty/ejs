// reverse array elements in-place using insertion sort
// Time complexity: O(n^2)


function reverseArrayInPlace(array) {

  for (i = 1; i < array.length; i++) {
    key = array[i]
    
    let j = i - 1
    while (j >= 0 && array[j] < key) {
      array[j + 1] = array[j]
      j = j - 1
    }
    array[j + 1] = key
  }
  
  return array
}

let arr = [-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10]
let sorted = reverseArrayInPlace(arr)
console.log(sorted)