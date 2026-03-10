/**
 * Reversing an array out-of-place using merge sort
 * Time complexity: O(n lg n)
*/
function merge(array, left, mid, right) {
  let leftSubArrayLength = mid - left + 1
  let rightSubArrayLength = right - mid

  // create new arrays L[0:nL - 1] and R[0:nR - 1] with respective lengths nL and nR
  let leftSubArray = new Array(leftSubArrayLength)
  let rightSubArray = new Array(rightSubArrayLength)
  
  for (let i = 0; i < leftSubArray.length; i++) {
    leftSubArray[i] = array[left + i]
  }
  
  for (let j = 0; j < rightSubArray.length; j++) {
    rightSubArray[j] = array[mid + j + 1]
  }
  
  
  let i = 0   // i indexes the smallest remaining element in the first subarray
  let j = 0  // j indexes the smallest remaining element in second subarray
  let k = left  // k indexes the location in array to fill
  
  while (i < leftSubArray.length && j < rightSubArray.length) {
    if (leftSubArray[i] >= rightSubArray[j]) {
      array[k] = leftSubArray[i]
      i = i + 1
    } else {
      array[k] = rightSubArray[j]
      j = j + 1
    }
    k = k + 1
  }
  
  while (i < leftSubArray.length) {
    array[k] = leftSubArray[i]
    i = i + 1
    k = k + 1
  }
  
  while (j < rightSubArray.length) {
    array[k] = rightSubArray[j]
    j = j + 1
    k = k + 1
  }
  
  return array
}

function reverseArray(array, left, right) {
  let mid = Math.floor((left + right) / 2)
  if (left >= right) return
  

  reverseArray(array, left, mid)
  reverseArray(array, mid + 1, right)
  
  // merge array[p:q] and array[q+1:r] into array[p:r]
  return merge(array, left, mid, right)
}

// test case
let unsortedArray =[1,2,3,4,5,6,7,8,100]
let sorted = reverseArray(unsortedArray, 0, unsortedArray.length - 1)
console.log(sorted)

