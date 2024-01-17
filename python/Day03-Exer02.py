# Chuỗi đẳng cấu - Cho hai chuỗi s và t, xác định xem chúng có đẳng cấu hay không. Hai chuỗi s và t là đẳng cấu nếu các ký tự 
# trong s có thể được thay thế để có được t. Tất cả các lần xuất hiện của một ký tự phải được thay thế bằng một ký tự khác mà 
# vẫn giữ nguyên thứ tự các ký tự. Không có hai ký tự nào có thể ánh xạ tới cùng một ký tự, nhưng một ký tự có thể ánh xạ tới chính nó. 
# s và t bao gồm bất kỳ ký tự ascii hợp lệ nào.

#! By me
def isomorphic_strings(s, t):
    if (len(s) != len(t)):
        return False
    for i in range(len(s)):
        for j in range(len(s)):
            if (s[i] == s[j] and i != j and t[i] != t[j]):
                return False
            
    return True

s = 'abad'
t = 'cvab'
print(isomorphic_strings(s,t))