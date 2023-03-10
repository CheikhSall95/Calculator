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
    let result = a/b;
    if (result % 1 === 0) {
        result = result.toFixed(0);
      } else if (result * 100 % 10 === 0) {
        result = result.toFixed(1);
      } else {
        result = result.toFixed(2);
    }
    return parseFloat(result);
  };
const remainder = function(a,b) {
    return a % b;
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
    else if (operator == "/") {
        return divide(a,b);
    }

    else {
        return remainder(a,b);
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
      
        if (Number.isInteger(parseInt(button.textContent)) && secondNumber == "" && operator == "" && parseInt(firstNumber) < 999999999999 ) { 
            // If the user clicks on a number and no operator is selected and if the number has less than 13 digits (to fit the display)
            firstNumber += button.textContent;
            numberDisplay.textContent = parseFloat(firstNumber); // convert the display to int to remove the first zero
            console.log("FirstNumber: " + firstNumber)
            console.log("SecondNumber: " + secondNumber)
        }
        if (Number.isInteger(parseInt(button.textContent)) && operator != "" && (parseInt(secondNumber) < 999999999999 || secondNumber == "")){
             // If the user clicks on a number and a operator is selected and if the number has less than 13 digits (to fit the display)
            secondNumber += button.textContent;
            numberDisplay.textContent = parseFloat(secondNumber); // convert the display to int to remove the first zero
            console.log("firstNumber: " + firstNumber)
            console.log("secondNumber: " + secondNumber)
            console.log("operator: " + operator)
        }

        

        if ((button.textContent =="+"|| button.textContent =="-"|| button.textContent =="/" || button.textContent =="x"|| button.textContent =="%") && operator =="") { 
            // If an operator is selected , keep ot in memory
            operator = button.textContent;
            console.log("FIRSTNumber: " + firstNumber)
            console.log("SECONDNumber: " + secondNumber)
            console.log("operator: " + operator)
        }
        else if ((button.textContent =="+"|| button.textContent =="-"|| button.textContent =="/" || button.textContent =="x"|| button.textContent =="%") && operator !="") {
            if (secondNumber ==0 && operator == "/"){ //check for zero division
                numberDisplay.style.fontSize = "20px";
                numberDisplay.textContent = "You can't divide by zero!";
                secondNumber = "";
            }
            
            else {

                result = operate(operator,parseFloat(firstNumber),parseFloat(secondNumber));
                numberDisplay.textContent = result;
                firstNumber = result; // the result become the first number and the other variables become null
                secondNumber = "";
                operator = button.textContent; // in this case the operator is the selected one
                console.log("FIRSTNUMBER: " + firstNumber)
                console.log("SECONDNUMBER: " + secondNumber)
                console.log("operator: " + operator)
            }  
        }
        if (button.textContent =="=" && secondNumber != ""){ // If the user clicks on the equal sign  and a second number exists, compute the result
            if (secondNumber ==0 && operator == "/"){ //check for zero division
                numberDisplay.style.fontSize = "20px";
                numberDisplay.textContent = "You can't divide by zero!";
                secondNumber = "";
            }
            
            else {

                result = operate(operator,parseFloat(firstNumber),parseFloat(secondNumber));
                numberDisplay.textContent = result;
                firstNumber = result; // the result become the first number and theother variables become null
                secondNumber = "";
                operator = "";
                console.log("FIRSTNUMBER: " + firstNumber)
                console.log("SECONDNUMBER: " + secondNumber)
                console.log("operator: " + operator)
            }  
        }

        if (button.textContent =="AC") { // Clears everything
            numberDisplay.textContent = 0;
            result = null;
            firstNumber = "0";
            secondNumber = "";
            operator ="";

        }
        
        if (button.textContent =="DEL") { // Remove the last digit
            if (secondNumber == "" && firstNumber != "0" ){
                firstNumber = firstNumber.slice(0, -1);
                numberDisplay.textContent = parseFloat(firstNumber);
                console.log("FIRSTNUMBER: " + firstNumber)
            }
            else if (secondNumber != 0){
                secondNumber = secondNumber.slice(0, -1);
                if (secondNumber == ""){
                    numberDisplay.textContent = 0;
                }
                else {
                    numberDisplay.textContent = parseFloat(secondNumber);
                console.log("secondnumber: " + secondNumber)

                }
            }

        }
        
        if (button.textContent =="+-") { // Transform to negative number
            if (secondNumber == ""){
                firstNumber = `${-1*firstNumber}`;
                numberDisplay.textContent = parseFloat(firstNumber);
            }
            else {
                secondNumber = `${-1*secondNumber}`;
                numberDisplay.textContent = parseFloat(secondNumber);
            }

        }


        if (button.textContent ==".") { // Add a decimal
            if (secondNumber == "" && (parseFloat(firstNumber) % 1 ==0)){
                firstNumber = `${firstNumber}.`;
                numberDisplay.textContent = parseFloat(firstNumber) +".";
                
            }
            else if ((parseFloat(secondNumber) % 1 ==0)){
                secondNumber = `${secondNumber}.`;
                numberDisplay.textContent = parseFloat(secondNumber) +".";
            }

        }

      });


   });
   