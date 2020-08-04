public class Kata {
    public static int[] Solve(String word) {
        int upperCaseLetters = 0;
        int lowerCaseLetters = 0;
        int numbers = 0;
        int specialChars = 0;
        for (int i = 0; i < word.length(); i++) {
            char letter = word.charAt(i);
            if (Character.isDigit(letter)) {
                numbers++;
            }
            if (Character.isUpperCase(letter)) {
                upperCaseLetters++;
            }
            if (Character.isLowerCase(letter)) {
                lowerCaseLetters++;
            }
            if (!Character.isDigit(letter) && !Character.isLetter(letter)) {
                specialChars++;
            }
        }
        int[] nums = { upperCaseLetters, lowerCaseLetters, numbers, specialChars };
        return nums;

    }
}