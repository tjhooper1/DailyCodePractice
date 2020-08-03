public class KeepHydrated {
    public int Liters(double time) {
        final double litersPerHour = 0.5;

        return (int) (litersPerHour * time);
    }
}