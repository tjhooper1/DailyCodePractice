using System;
using System.Collections.Generic;
using System.Linq;

namespace Katas
{
    public class Kata
    {
        public static List<Tuple<char, int>> OrderCount(string input)
        {

            List<char> inputList = new List<char>();
                inputList.AddRange(input);
            Dictionary<char, int> charDict = new Dictionary<char, int>();
            
            inputList.ForEach(c =>
            {
                if (!charDict.ContainsKey(c))  
                {
                    charDict[c] = 1;
                }
                else
                {
                    charDict[c]++;
                }
            });
            List<Tuple<char, int>> listOfTuples = new List<Tuple<char, int>>();
            foreach(KeyValuePair<char, int> entry in charDict)
            {
                listOfTuples.Add(Tuple.Create(entry.Key, entry.Value));
            }
            return listOfTuples;
        }
    }
}
