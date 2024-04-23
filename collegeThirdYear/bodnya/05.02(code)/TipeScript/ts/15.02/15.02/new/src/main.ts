import "./style.css";
import { setupCounter } from "./counter.ts";



document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <table border="1">
       <tr>
         <td colspan="4"><input id="display"></input></td>
      </tr>
      <tr>
         <td><input type="button" value="1" onclick="display(1)"/> </td>
         <td><input type="button" value="2" onclick="display(2)"/> </td>
         <td><input type="button" value="3" onclick="display(3)"/> </td>
         <td><input type="button" value="/" onclick="display(Operator.divide)"/> </td>
      </tr>
      <tr>
         <td><input type="button" value="4" onclick="display(4)"/> </td>
         <td><input type="button" value="5" onclick="display(5)"/> </td>
         <td><input type="button" value="6" onclick="display(6)"/> </td>
         <td><input type="button" value="-" onclick="display(Operator.subtract)"/> </td>
      </tr>
      <tr>
         <td><input type="button" value="7" onclick="display(7)"/> </td>
         <td><input type="button" value="8" onclick="display(8)"/> </td>
         <td><input type="button" value="9" onclick="display(9)"/> </td>
         <td><input type="button" value="+" onclick="display(Operator.add)"/> </td>
      </tr>
      <tr>
         <td><input type="button" value="0" onclick="display(0)"/> </td>
         <td><input type="button" value="=" onclick="solve()"/> </td>
         <td><input type="button" value="*" onclick="display(Operator.multiply)"/> </td>
         <td colspan="1"><input type="button" onclick="clearAll()" value="Clear" /></td>

      </tr>    
      </table>
   </div>
`;


const display = document.querySelector<HTMLInputElement>("#display")!;
const buttons = document.querySelectorAll<HTMLInputElement>("input[type=button]");

let firstOperand: number | null = null;
let secondOperand: number | null = null;
let operator: Operator | null = null;

enum Operator {
   add = "+",
   subtract = "-",
   multiply = "*",
   divide = "/",
}

//присваиваем события к кнопкам
buttons.forEach((button) => {
   button.addEventListener("click", () => {
      const value = button.value;

      switch (value) {
         case "Clear":
            clearAll();
            break;

         case "+":
         case "-":
         case "*":
         case "/":
            setOperator(value);
            break;

         case "=":
            solve();
            break;

         default:
            displayNumber(parseInt(value));
            break;
      }
   });
});

//вывод  
function displayNumber(num: number) {
   //если нет никакого оператора - меняем 1й
   if (operator === null) {
      if (firstOperand === null) {
         firstOperand = num;
      } else {
         firstOperand = firstOperand * 10 + num;
      }
      display.value = firstOperand.toString();
   }
   //меняем 2й
   else {
      if (secondOperand === null) {
         secondOperand = num;
      } else {
         secondOperand = secondOperand * 10 + num;
      }
      display.value = secondOperand.toString();
   }
}


function setOperator(op: Operator) {
   operator = op;
}

//основная функция
function solve() {
   if (firstOperand === null || secondOperand === null || operator === null) {
      return;
   }

   let result: number;

   switch (operator) {
      case Operator.add:
         result = firstOperand + secondOperand;
         break;

      case Operator.subtract:
         result = firstOperand - secondOperand;
         break;

      case Operator.multiply:
         result = firstOperand * secondOperand;
         break;

      case Operator.divide:
         result = firstOperand / secondOperand;
         break;

      default:
         return;
   }

   display.value = result.toString();
   firstOperand = result;
   secondOperand = null;
   operator = null;
}

//очистка полей
function clearAll() {
   firstOperand = null;
   secondOperand = null;
   operator = null;
   display.value = "0";
}

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
