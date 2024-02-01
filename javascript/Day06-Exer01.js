// Ký tự không lặp lại - Bạn được cung cấp một chuỗi chỉ bao gồm các bảng chữ cái tiếng Anh viết 
// thường và viết hoa và các số nguyên từ 0 đến 9. Hãy viết một hàm lấy chuỗi này làm Đầu vào và trả về 
// chỉ mục của ký tự đầu tiên không lặp lại.

function findNonRepeatingCharacter(string){
    let repeat;
    for(let i=0;i<string.length;i++){
        repeat = false;
        for(let j=0;j<string.length;j++){
            if(string[i]===string[j] && i!==j){
                repeat=true;
            }
        }
        if(repeat === false){
            return i;
        }
    }
    return null;
}