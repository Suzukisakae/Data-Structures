import java.util.Arrays;

public class Day02 {
    public static void main(String[] args) {
        // Xoay mảng
        int k = 3;
        int[] a = {1,4,5,6,2};
        int[] result = rotateArray(a,k);
        System.out.println(Arrays.toString(result));

        // Tìm thể tích vùng chứa lớn nhất
        int[] b = {1,4,5,6,2};
        double result2 = maxArea(b);
        System.out.println(result2);
    }
    public static int[] rotateArray(int[]array, int k) {
        int[] result = new int[array.length];
        for (int i=0;i<array.length;i++) {
            if (i+k <array.length) 
                result[i+k] = array[i];
            else {
                int index = (i+k)%array.length;
                result[index] = array[i];
            }
        }
        return result;
    }
    public static double maxArea(int[] array) {
        if (array.length == 0 || array.length == 1) return 0;
        double result = 0;
        double area = 0;
        for (int i = 0; i<array.length;i++) {
            for (int j = 0; j<array.length;j++) {
                if (array[i]>=array[j]) {
                    area=Math.abs((j-i)*array[j]);
                }
                if (area > result) {
                    result = area;
                }
            }
        }
        return result;
    }
}
