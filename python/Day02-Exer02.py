# Vùng chứa nhiều nước nhất - Bạn được cung cấp một mảng số nguyên có chiều cao, chiều dài, n. 
# Có n đường thẳng đứng được vẽ sao cho hai điểm cuối của đường thứ i là (i, 0) và (i, chiều cao[i]). 
# Tìm hai đường cùng với trục x tạo thành một thùng chứa, sao cho thùng chứa nhiều nước nhất (độ sâu giữa 
# các thùng chứa không đổi). Trả về diện tích (mà 2 đường và trục X tạo thành) của thùng chứa có thể chứa lượng nước tối đa. 
# Lưu ý rằng bạn không được nghiêng thùng chứa.

#! By me:
def max_area(array):
    if len(array) < 2:
        return 0
    max_area = 0
    area = 0
    for i in range(len(array)):
        for j in range(len(array)):
            if array[i] >= array[j]:
                area = array[j] * (i - j)
            else:
                area = array[i] * (i - j)
            if area > max_area:
                max_area = area
    return max_area

#! Bruteforce
def max_area(array):
    max_area = 0
    for i in range(len(array)-1):
        for j in range(i+1,len(array)):
            area = min(array[i],array[j])*(j-i)
            max_area = max(max_area,area)
    return max_area

#! Optimized
def max_area_optimum(array):
    left = 0
    right = len(array)-1
    max_area=0
    while(left<right):
        area = min(array[left], array[right]) * (right - left)
        max_area = max(area,max_area)
        if array[left]<array[right]:
            left +=1
        else:
            right -= 1
    return max_area