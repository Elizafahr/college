using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UnitClass
{
    public class MyCalc
    {
        public int Sum(int x, int y)
        {
            return x + y;
        }
        public string Kvadrat(int a, int b, int c)
        {
            double D = Math.Pow(b, 2) - 4 * a * c;
            if (D > 0 || D == 0)
            {
                double x1 = (-b - Math.Sqrt(D)) / (2 * a);
                double x2 = (-b + Math.Sqrt(D)) / (2 * a);
                string str = Convert.ToString(Math.Round(x1, 2)) + Convert.ToString(Math.Round(x2, 2));
                return str;
            }
            else
            {
                return "Простых корней нет";
            }
        }
        public string Three(string x)
        {
            string x1 = Convert.ToString(x[0]);
            string x2 = Convert.ToString(x[1]);
            string x3 = Convert.ToString(x[2]);
            string str = Convert.ToString(Convert.ToInt32(x1)+Convert.ToInt32(x2)+Convert.ToInt32(x3));
            int strlength = str.Length;
            return Convert.ToString(strlength);
        }
        public bool Threecheckone(string number, string numberSearch)
        {
            string number1 = Convert.ToString(number[0]);
            string number2 = Convert.ToString(number[1]);
            string number3 = Convert.ToString(number[2]);
            if (number1 == numberSearch || number2 == numberSearch || number3 == numberSearch)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public bool functionXY(double a, double b)
        {
            if ((5 * a * a - 7 * a + 2) == b)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public string age(int K)
        {
            if ((K % 10 == 1) && (K % 100 != 11))
            {
                return ("Мне " + K + " год");
            }
            else if ((K % 10 >= 2) && (K % 10 <= 4) && ((K % 100 < 12) || (K % 100 > 14)))
            {
                return ("Мне " + K + " года");
            }
            else
            {
                return ("Мне " + K + " лет");
            }
        }

    }
}
