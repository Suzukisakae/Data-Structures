// Fibonacci

//! By me:
function fibonacci(n) {
  //write code here
  if (n == 0) return 0;
  if (n == 1) return 1;
  const hashTable = [];
  hashTable[0] = 0;
  hashTable[1] = 1;
  for (let i = 2; i <= n; i++) {
    hashTable[i] = hashTable[i - 1] + hashTable[i - 2];
  }
  return hashTable[n];
}

console.log(fibonacci(3));
