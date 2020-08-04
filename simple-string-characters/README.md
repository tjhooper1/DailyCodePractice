### Simple string characters

In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

```Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
***
Example Tests: 

```assertArrayEquals(new int[]{1,18,3,2}, Kata.Solve("Codewars@codewars123.com"));
        assertArrayEquals(new int[]{8,6,3,2}, Kata.Solve("CbgA5<1d-tOwUZTS8yQ"));
        assertArrayEquals(new int[]{9,9,6,9}, Kata.Solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"));
        assertArrayEquals(new int[]{15,8,6,9}, Kata.Solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"));
        assertArrayEquals(new int[]{10,7,3,6}, Kata.Solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"));
        assertArrayEquals(new int[]{7,13,4,10}, Kata.Solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"));