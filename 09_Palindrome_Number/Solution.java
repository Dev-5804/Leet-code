public class Solution {

    public static boolean isPalindrome(int x) {
        int pal = 0;
        int num = x;
        if (x >= 0) {
            while (x != 0) {
                int mod = x % 10;
                x = x / 10;
                pal = pal * 10 + mod;
            }

            if (num == pal) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}