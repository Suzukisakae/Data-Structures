// Vùng chứa nhiều nước nhất - Bạn được cung cấp một mảng số nguyên có chiều cao, chiều dài, n.
// Có n đường thẳng đứng được vẽ sao cho hai điểm cuối của đường thứ i là (i, 0) và (i, chiều cao[i]).
// Tìm hai đường cùng với trục x tạo thành một thùng chứa, sao cho thùng chứa nhiều nước nhất (độ sâu giữa
// các thùng chứa không đổi). Trả về diện tích (mà 2 đường và trục X tạo thành) của thùng chứa có thể chứa lượng nước tối đa.
// Lưu ý rằng bạn không được nghiêng thùng chứa.

//! By me:

const maxArea = function (array) {
  if (array.length == 0 || array.length == 1) return 0;
  let maxArea = 0;
  let area = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] >= array[j]) {
        area = Math.abs((j - i) * array[j]);
      }
      if (area > maxArea) {
        maxArea = area;
      }
    }
  }
  return maxArea;
};

const a = [2, 6, 7, 5, 2];
console.log(maxArea(a));

//! Bruteforce
// Time complexity: O(n^2) - Space complexity: O(1)
const maxAreaBruteForce = function (array) {
  //[3,7,5,6,8,4]
  let area = 0;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const height = Math.min(array[i], array[j]);
      const width = j - i;
      area = Math.max(area, height * width);
    }
  }
  return area;
};

//! Optimized
// Time complexity: O(n) - Space complexity: O(1)
const maxAreaOP = function (array){
  let area =0;
  let i=0;
  let j=array.length-1;
  while(i<j){
      let height = Math.min(array[i],array[j]);
      let newArea = height*(j-i);
      area = Math.max(area,newArea);
      if(array[i]<array[j]) i++;
      else j--;
  }
  return area;
}
