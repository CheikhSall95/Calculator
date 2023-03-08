// Fist we create the functions for the arithmetic

const add = function(a,b) {
	return a + b ;
};

const subtract = function(a,b) {
	return a - b ;
};

const multiply = function(a,b) {
    return a * b;
  };
  
const divide = function(a,b) {
    return a / b;
  };
  
const operate = function(operator,a,b) { // Function to compute the numbers with the operator
    if (operator == "+") {
        return add(a,b);
    }

    else if (operator == "-") {
        return subtract(a,b);
    }

    else if (operator == "x") {
        return multiply(a,b);
    }
    else  {
        return divide(a,b);
    }
  };
  

  const buttons = document.querySelectorAll('button');
  let result = null; // initizilation of variables
  let firstNumber = "0";
  let secondNumber = "";
  let operator ="";

  const display = document.querySelector('.display'); // creation of the text display 
  const numberDisplay = document.createElement('p');
  numberDisplay.textContent = 0; 
  display.appendChild(numberDisplay);


  buttons.forEach((button) => {
      button.addEventListener('click', () => {
      
        if (Number.isInteger(parseInt(button.textContent)) && secondNumber == "" && operator == "") { // If the user clicks on a number and no operator is selected
            firstNumber += button.textContent;
            numberDisplay.textContent = parseInt(firstNumber); // convert the display to int to remove the first zero
            console.log("FirstNumber: " + firstNumber)
            console.log("SecondNumber: " + secondNumber)
        }
        if (Number.isInteger(parseInt(button.textContent)) && operator != ""){ // If the user clicks on a number and a operator is selected
            secondNumber += button.textContent;
            numberDisplay.textContent = parseInt(secondNumber); // convert the display to int to remove the first zero
            console.log("firstNumber: " + firstNumber)
            console.log("secondNumber: " + secondNumber)
            console.log("operator: " + operator)
        }

        

        if (button.textContent =="+"|| button.textContent =="-"|| button.textContent =="/" || button.textContent =="x") { // If an operator is selected , keep ot in memory
            operator = button.textContent;
            console.log("FIRSTNumber: " + firstNumber)
            console.log("SECONDNumber: " + secondNumber)
            console.log("operator: " + operator)
        }
        if (button.textContent =="=" && secondNumber != ""){ // If the user clicks on the equal sign  and a second number exists, compute the result
            result = operate(operator,parseInt(firstNumber),parseInt(secondNumber));
            numberDisplay.textContent = result;
            firstNumber = result; // the result become the first number and theother variables become null
            secondNumber = "";
            operator = "";
            console.log("FIRSTNUMBER: " + firstNumber)
            console.log("SECONDNUMBER: " + secondNumber)
            console.log("operator: " + operator)
        }

        if (button.textContent =="AC") { // Clears everything
            numberDisplay.textContent = 0;
            result = null;
            firstNumber = "0";
            secondNumber = "";
            operator ="";

        }
        



      });


   });
   


  const disp = function() {


    
  }