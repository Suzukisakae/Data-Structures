import java.util.Arrays;

public class Day01_Exer01 {
    public static void main(String[] args) {
        // Bài 1: Sắp xếp mảng bình phương
        int[] a = {-2, 0, 1, 2};
        int[] result = sortedSquaredArray(a);
        System.out.println(Arrays.toString(result));

        // Bài 2: Kiểm tra mảng đơn điệu
        int[] b = {0,0,1,2,3,4};
        boolean result2 = checkMonotonic(b);
        System.out.println(result2);
    }

    public static int[] sortedSquaredArray(int[] array) {
        int[] newArray = new int[array.length];
        int pointerLeft = 0;
        int pointerRight = array.length - 1;

        // Di chuyển phần khai báo của phương thức sortedSquaredArray ra ngoài main
        for (int i = array.length - 1; i >= 0; i--) {
            int leftSquare = array[pointerLeft] * array[pointerLeft];
            int rightSquare = array[pointerRight] * array[pointerRight];
            if (leftSquare > rightSquare) {
                newArray[i] = leftSquare;
                pointerLeft++;
            } else {
                newArray[i] = rightSquare;
                pointerRight--;
            }
        }
        return newArray;
    }
    public static boolean checkMonotonic(int [] array) {
        boolean is_increasing = true;
        boolean is_decreasing = true;
        for (int i=0;i<array.length-1;i++) {
            if (array[i] > array[i+1]) is_decreasing=false;
            if (array[i] < array[i+1]) is_increasing=false;
        }
        if (is_decreasing == true || is_increasing == true) return true;
        else return false;
    }
}
