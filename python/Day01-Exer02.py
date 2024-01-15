# Một mảng là đơn điệu nếu nó tăng đơn điệu hoặc giảm đơn điệu. Một mảng tăng đơn điệu nếu tất cả 
# các phần tử của mảng đó từ trái sang phải không giảm. Một mảng giảm đơn điệu nếu tất cả các phần tử 
# của mảng đó từ trái sang phải không tăng. Cho một mảng số nguyên trả về đúng nếu mảng đã cho là đơn 
# điệu hoặc trả về sai nếu không.

#! By me
def monotonic_array(array):
    is_increasing = True
    is_decreasing = True
    for i in range(len(array)-1):
        if array[i] > array[i+1]:
            is_increasing = False
        if array[i] < array[i+1]:
            is_decreasing = False
    if is_increasing == True or is_decreasing == True:
        return True
    else:
        return False
    
#! Method
# Time = O(n)  Space = O(1)
def monotonic_array(array):
    if len(array) == 0:
        return True
    first = array[0]
    last = array[len(array)-1]
    if first > last:
        for i in range(len(array)-1):
            if array[i] < array[i+1]:
                return False
    elif first == last:
        for i in range(len(array)-1):
            if array[i] != array[i+1]:
                return False
    else:
        for i in range(len(array)-1):
            if array[i] > array[i+1]:
                return False
    return True