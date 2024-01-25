# Power Set 
# Cho một mảng số nguyên gồm các phần tử duy nhất, trả về tất cả các tập hợp con có thể có (tập lũy thừa)
# . Bộ giải pháp không được chứa các tập hợp con trùng lặp. Trả lại giải pháp theo thứ tự bất kỳ.

def power_set (nums):
    #write your code here
    # Use backtracking
    result = []
    if len(nums) == 0:
        return result
    if len(nums) == 1:
        return [nums]
    for i in range(len(nums)):
        m = nums[i]
        remain = nums[:i] + nums[i+1:]
        for p in power_set(remain):
            result.append([m] + p)
    return result


