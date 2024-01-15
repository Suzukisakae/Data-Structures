#TODO  Bạn được cấp một mảng các số nguyên trong đó mỗi giá trị tiếp theo không nhỏ hơn giá trị trước đó. 
#TODO Viết hàm lấy mảng này làm đầu vào và trả về một mảng mới với các bình phương của mỗi số được sắp xếp 
#TODO  theo thứ tự tăng dần.

#! By me
def sorted_squared(array):
    #write code here.make sure to return desired array
    b = []
    if len(array) == 0:
        return []
    else:
        for i in range(len(array)):
            b.append(array[i]*array[i])
    b.sort()
    return b

#! Method 1
# Time = O(nlogn)  Space = O(n)
def sorted_squared(array):
    new_array = [0]*len(array)
    for i in range(len(array)):
        new_array[i] = array[i]**2
        # new_array[i] = array[i]*array[i]
    new_array.sort()
    return new_array

#! Method 2:
# Time = O(n)  Space = O(n)
def sorted_squared(array):
    i = 0
    j = len(array) - 1
    new_array = [0] * len(array)
    for k in reversed(range(len(array))):
        sq_i = array[i]**2
        sq_j = array[j]** 2
        if sq_i > sq_j:
            new_array[k] = sq_i
            i += 1
        else:
            new_array[k] = sq_j
            j -= 1
    return new_array

