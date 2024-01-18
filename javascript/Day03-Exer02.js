// Chuỗi đẳng cấu - Cho hai chuỗi s và t, xác định xem chúng có đẳng cấu hay không. Hai chuỗi s và t là đẳng cấu nếu các ký tự
// trong s có thể được thay thế để có được t. Tất cả các lần xuất hiện của một ký tự phải được thay thế bằng một ký tự khác mà
// vẫn giữ nguyên thứ tự các ký tự. Không có hai ký tự nào có thể ánh xạ tới cùng một ký tự, nhưng một ký tự có thể ánh xạ tới chính nó.
// s và t bao gồm bất kỳ ký tự ascii hợp lệ nào.

//! By me
const checkIsomorphic = function (s, t) {
  //write code here
  if (s.length != t.length) return false;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[i]==s[j] && i!=j && t[i] != t[j])
        return false;
    }
  }
  return true;
};

//! Using hash table
const checkIsomorphicOp = function(s,t){
  if(s.length!==t.length) return false;
  const sHash ={};
  const tHash = {};
  for(let i=0;i<s.length;i++){
      let charS = s[i];
      let charT = t[i];
      if(!sHash[charS]) sHash[charS] = charT;
      if(!tHash[charT]) tHash[charT] = charS;
      if(sHash[charS]!==charT || tHash[charT]!==charS) return false;
  }
  return true;
}
checkIsomorphic('aaca','bbdr');

const s = 'abcd';
const t = 'cvab';
console.log(checkIsomorphic(s,t));
