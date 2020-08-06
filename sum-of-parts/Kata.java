import java.util.ArrayList;
import java.util.List;

public class Kata {
    public static int[] sumParts(int[] ls) {
        if (ls.length == 0) {
            int[] totals = { 0 };
            return totals;
        }

        List<Integer> nums = new ArrayList<Integer>(ls.length);
        List<Integer> totalsArray = new ArrayList<Integer>();

        for (int i : ls) {
            nums.add(i);
        }

        while (true) {
            int runningTotals = 0;
            for (int i = 0; i < nums.size(); i++) {
                runningTotals += nums.get(i);
            }
            totalsArray.add(runningTotals);

            if (nums.size() == 0) {
                break;
            } else {
                nums.remove(0);
            }
        }
        return totalsArray.stream().mapToInt(i -> i).toArray();
    }
}