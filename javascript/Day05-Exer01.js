// Permutations: Hoán vị

function allPermutation(nums){
    //write code here
    let result = [];
    let temp = [];
    let visited = [];
    if (nums.length == 0) return result;
    if (nums.length == 1) return [nums];
    for(let i = 0; i < nums.length; i++){
        visited[i] = false;
    }
    backTracking(result, temp, nums, visited);
    return result;
};

function backTracking(result, temp, nums, visited){
    if(temp.length == nums.length){
        result.push([...temp]);
        return;
    }
    for(let i = 0; i < nums.length; i++){
        if(visited[i] == false){
            visited[i] = true;
            temp.push(nums[i]);
            backTracking(result, temp, nums, visited);
            temp.pop();
            visited[i] = false;
        }
    }
};

// Solution 2: Using swap and recursion
// Time complexity: O(n!)
function allPermutation(nums){
    if(nums.length ==0) return [[]];
    const permutation = [];
    function helper(nums,i){
        if(i=== nums.length-1){
            permutation.push(nums.slice());
            return;
        }
        for(let j=i;j<nums.length;j++){
            //swap i,j
            [nums[i],nums[j]] = [nums[j],nums[i]];
            //recursive
            helper(nums,i+1);
            //swap i,j 
            [nums[i],nums[j]] = [nums[j],nums[i]];
        }
    }
    helper(nums,0);
    return permutation;
};