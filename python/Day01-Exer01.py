#TODO  Bạn được cấp một mảng các số nguyên trong đó mỗi giá trị tiếp theo không nhỏ hơn giá trị trước đó. 
#TODO Viết hàm lấy mảng này làm đầu vào và trả về một mảng mới với các bình phương của mỗi số được sắp xếp 
#TODO  theo thứ tự tăng dần.

#! By me
a = [-2, -1, 0, 3, 4]
b = []

if len(a) == 0:
    print("Empty list")
else:
    for i in range(len(a)):
        b.append(a[i]*a[i])
b.sort()
print(b)

