//Một mảng là đơn điệu nếu nó tăng đơn điệu hoặc giảm đơn điệu. Một mảng tăng đơn điệu nếu
// tất cả các phần tử của mảng đó từ trái sang phải không giảm. Một mảng giảm đơn điệu nếu tất cả
// các phần tử của mảng đó từ trái sang phải không tăng. Cho một mảng số nguyên trả về đúng nếu mảng
// đã cho là đơn điệu hoặc trả về sai nếu không.

//! By me:
const checkMonotonic = function (array) {
  //write code here to return either true or false
  let is_increasing = true;
  let is_decreasing = true;
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] > array[i + 1]) is_increasing === false;
    if (array[i] < array[i + 1]) is_decreasing === false;
  }
  if (is_decreasing === true || is_increasing === true) return true;
  else return false;
};

//! method
const checkMonotonic2 = function (array) {
  const first = array[0];
  const last = array[array.length - 1];
  
  if (first === last) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1] !== array[i]) return false;
    }
  } else if (first < last) {
    // non decreasing
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1] < array[i]) return false;
    }
  } else {
    // non increasing
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1] > array[i]) return false;
    }
  }
  return true;
};
