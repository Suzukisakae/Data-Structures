# Ký tự không lặp lại - Bạn được cung cấp một chuỗi chỉ bao gồm các bảng chữ cái tiếng Anh viết 
# thường và viết hoa và các số nguyên từ 0 đến 9. Hãy viết một hàm lấy chuỗi này làm Đầu vào và trả về 
# chỉ mục của ký tự đầu tiên không lặp lại.

def non_repeating_char(str):
    for i in range(len(str)):
        repeat = False
        for j in range(len(str)):
            if i!=j and str[i]==str[j]:
                repeat = True
        if repeat == False:
            return i
    return None