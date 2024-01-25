// Power Set 
// Cho một mảng số nguyên gồm các phần tử duy nhất, trả về tất cả các tập hợp con có thể có (tập lũy thừa)
// . Bộ giải pháp không được chứa các tập hợp con trùng lặp. Trả lại giải pháp theo thứ tự bất kỳ.

const powerSet = function(nums){
    //write code here
    let result = [];
    let temp = [];
    let start = 0;
    backTracking(result, temp, nums, start);
    return result;
};

function backTracking(result, temp, nums, start){
    result.push([...temp]);
    for(let i = start; i < nums.length; i++){
        temp.push(nums[i]);
        backTracking(result, temp, nums, i + 1);
        temp.pop();
    }
};
