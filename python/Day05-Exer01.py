# Permutations: Hoán vị

def all_permutations(nums):
    #Write code here
    result = []
    if len(nums) == 0:
        return result
    if len(nums) == 1:
        return [nums]
    for i in range(len(nums)):
        m = nums[i]
        remain = nums[:i] + nums[i+1:]
        for p in all_permutations(remain):
            result.append([m] + p)
    return result

# Solution
def all_permutations(nums):
    permutations = []
    if len(nums)==0: return [[]]
    def helper(nums,i):
        if i == len(nums) -1:
            permutations.append(nums.copy())
            return
        for j in range(i,len(nums)):
            nums[i],nums[j] = nums[j],nums[i]
            helper(nums,i+1)
            nums[i],nums[j] = nums[j],nums[i]
    helper(nums,0)
    return permutations


array = [1,2,3]
print(all_permutations(array))


