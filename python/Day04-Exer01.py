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