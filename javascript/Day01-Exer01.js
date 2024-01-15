//TODO  Bạn được cấp một mảng các số nguyên trong đó mỗi giá trị tiếp theo không nhỏ hơn giá trị trước đó. 
//TODO Viết hàm lấy mảng này làm đầu vào và trả về một mảng mới với các bình phương của mỗi số được sắp xếp 
//TODO theo thứ tự tăng dần.

//! By me:
const array = [-2, -1, 0, 3, 4];
const result = [];

if (array.length === 0) {
  console.log("Array is empty");
} else {
  for (let i = 0; i < array.length; i++) {
    result[i] = array[i] * array[i];
  }
}

// Sắp xếp mảng theo thứ tự tăng dần
result.sort((a, b) => a - b);

console.log(result);
