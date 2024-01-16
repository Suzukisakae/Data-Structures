# Cho một mảng, hãy xoay mảng đó sang phải k bước, trong đó k không âm.

#! By me
def rotate_array(array,k):
    #write code 
    result = [0]*len(array)
    for i in range(len(array)):
        if (i+k<len(array)):
            result[i+k] = array[i]
        else:
            index = (i+k)%len(array)
            result[index] = array[i]
    return result

a = [1,2,3,4,5,6,7]
print(rotate_array(a,10))

#! Method 1
# Time = O(n)  Space = O(n)
def rotate_array(array,k):
    if len(array) == 0: return []
    k=k%len(array)
    temp = array[-k:]
    for i in reversed(range(0,len(array)-k)):
        array[i+k]=array[i]
    for i in range(len(temp)):
        array[i]=temp[i]
    return array

#! Optimized
def reverse(array,start,end):
    while(start<end):
        array[start],array[end] = array[end], array[start]
        start +=1
        end -=1
    return array

def rotate_array(array,k):
    if len(array) == 0: return []
    k= k % len(array)
    reverse(array, 0, len(array)-1)
    reverse(array, 0, k-1)
    reverse(array, k, len(array)-1)
    return array