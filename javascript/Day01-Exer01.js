//TODO  Bạn được cấp một mảng các số nguyên trong đó mỗi giá trị tiếp theo không nhỏ hơn giá trị trước đó.
//TODO Viết hàm lấy mảng này làm đầu vào và trả về một mảng mới với các bình phương của mỗi số được sắp xếp
//TODO theo thứ tự tăng dần.

//! By me:
function sortedSquarredArray(array) {
  //write code here.make sure to return desired array
  const result = [];
  if (array.length == 0) return [];
  else {
    for (let i = 0; i < array.length; i++) {
      result[i] = array[i] * array[i];
    }
  }
  result.sort((a, b) => a - b);
  return result;
}

//! Method 1:
function sortedSquaredArray(array) {
  const sortedSquares = new Array(array.length).fill(0);
  for (let idx = 0; idx < array.length; idx++) {
    const value = array[idx];
    sortedSquares[idx] = value * value;
  }
  sortedSquares.sort((a, b) => a - b);
  return sortedSquares;
}

//! Method 2:
// Time = O(n)  Space = O(n)
function sortedSquarredArray(array){
  const newArray = new Array(array.length).fill(0);
  let pointerLeft =0;
  let pointerRight = array.length-1;
  for(let i=array.length-1;i>=0;i--){
      const leftSquared = Math.pow(array[pointerLeft],2);
      const rightSquared = Math.pow(array[pointerRight],2);
      if(leftSquared>rightSquared){
          newArray[i]=leftSquared;
          pointerLeft++;
      } else{
          newArray[i]=rightSquared;
          pointerRight--;
      }
  }
  return newArray;
}
a = [-2, 0, 1, 2];

console.log(sortedSquaredArray(a));
