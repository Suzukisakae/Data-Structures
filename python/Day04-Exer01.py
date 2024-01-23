# Fibonaci

def fibonacci(n):
    #Write code here
    if n == 0:
        return 0
    elif n == 1:
        return 1
    temp = []
    temp.append(0)
    temp.append(1)
    for i in range(2, n+1):
        temp.append(temp[i-1] + temp[i-2])
    return temp[n]

print(fibonacci(8))

#Code 2
ht={0: 0, 1: 1}
def fibonacci(n):
    if n in ht:
        return ht[n]
    else:
        ht[n] = fibonacci(n - 1) + fibonacci(n - 2)
        return ht[n] 
    

# code 3
def fibonacci_3(n):
    if n<=1: return n
    prev = 0
    curr = 1
    counter =1
    while counter < n:
        next = prev + curr
        counter +=1
        prev = curr
        curr = next
    return curr