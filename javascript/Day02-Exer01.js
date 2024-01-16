// Cho một mảng, hãy xoay mảng đó sang phải k bước, trong đó k không âm.

//! By me:
const rotateArray = function (array, k) {
  //write code
  const result = new Array(array.length).fill(0);
  for (let i = 0; i < array.length; i++) {
    if (i + k < array.length) {
      result[i + k] = array[i];
    } else {
      const index = (i + k) % array.length;
      result[index] = array[i];
    }
  }
  return result;
};

a = [1, 3, 4, 5];
console.log(rotateArray(a, 2));

//! Method 1:
// Time = O(n), Space = O(n)
const rotateArray1 = function (array, k) {
  const length = array.length;
  k = k % length;
  const temp = array.slice(length - k);
  for (let i = length - k - 1; i >= 0; i--) {
    array[i + k] = array[i];
  }
  for (let i = 0; i < temp.length; i++) {
    array[i] = temp[i];
  }
  return array;
};

//! Optimal: 
// time = O(n), space = O(1)
const reverse = function (nums,start,end){
  while(start<end){
      [nums[start],nums[end]] = [nums[end],nums[start]];
      start++;
      end--;
  }
}

const rotate = function(nums,k){
  k = k%nums.length; //k=102 ,length =5, 2 rotations
  //nums.reverse();
  reverse(nums,0,nums.length-1);
  //start =0, end = k-1
  reverse(nums,0,k-1);
  //start = k, end = length-1
  reverse(nums,k, nums.length-1);
  return nums;
}
