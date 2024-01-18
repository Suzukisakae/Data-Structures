# Two Sum - Bạn được cấp một mảng Số nguyên và một số nguyên khác targetValue. 
# Viết hàm lấy những đầu vào này và trả về chỉ số của 2 số nguyên trong mảng có tổng giá trị mục tiêu.

#! By me
def two_sum(array,target):
    if (len(array) < 2):
        return []
    for i in range(len(array)):
        for j in range(len(array)):
            if ((array[i]+ array[j] == target) and (i != j)):
                return [i,j]
    return []

# Brute Force Solution
# Time complexity: O(n^2), Space complexity: O(1)
def two_sum(array,target):
    for i in range(len(array)-1):
        for j in range(i+1,len(array)):
            if array[i]+array[j] == target:
                return [i,j]
    return []

# Hash Table Solution
# Time complexity: O(n), Space complexity: O(n)
def two_sum_optimal(array,target):
    num_available = {}
    for i in range(len(array)):
        needed_val = target - array[i]
        if needed_val in num_available:
            return [i,num_available[needed_val]]
        else:
            num_available[array[i]]=i
    return []

array = [1,2,3,4]
print(two_sum(array,5))