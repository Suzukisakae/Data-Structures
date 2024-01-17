// Two Sum - Bạn được cấp một mảng Số nguyên và một số nguyên khác targetValue.
// Viết hàm lấy những đầu vào này và trả về chỉ số của 2 số nguyên trong mảng có tổng giá trị mục tiêu.

//! By me
function findIndicesSum(array, targetValue) {
  if (array.length < 2) return [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if ((array[i] + array[j] == targetValue)&&(array[i] !== array[j])) {
        return [i, j];
      }
    }
  }
  return [];
};

const array = [1,2,3,4];
console.log(findIndicesSum(array,5));
