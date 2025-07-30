
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

class Solution {

    public static int romanToInt(String s) {
        Map<Character, Integer> roman = new HashMap<>();

        roman.put('I', 1);
        roman.put('V', 5);
        roman.put('X', 10);
        roman.put('L', 50);
        roman.put('C', 100);
        roman.put('D', 500);
        roman.put('M', 1000);

        String str = s.toUpperCase();
        int output = 0;
        for (int i = 0; i < str.length(); i++) {
            if (i == 0 || roman.get(str.charAt(i - 1)) >= roman.get(str.charAt(i))) {
                output += roman.get(str.charAt(i));
            } else {
                output += roman.get(str.charAt(i)) - 2 * roman.get(str.charAt(i - 1));
            }
        }
        return output;
    }
}