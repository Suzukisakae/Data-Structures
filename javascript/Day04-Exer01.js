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

// COde 1:
function fibonacci(n) {
  if (n <= 1) return n;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}

// Code 2
const ht = { 0: 0, 1: 1 };
function fibonacci(n) {
  if (n in ht) {
    return ht[n];
  } else {
    ht[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return ht[n];
  }
}

// Code 3
function fibonacci(n) {
  if (n <= 1) return n;
  let counter = 1;
  let prev = 0;
  let curr = 1;
  let next;
  while (counter < n) {
    next = prev + curr;
    prev = curr;
    curr = next;
    counter++;
  }
  return curr;
}
