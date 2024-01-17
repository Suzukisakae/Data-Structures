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

array = [1,2,3,4]
print(two_sum(array,5))