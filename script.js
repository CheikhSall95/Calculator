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
  
const operate = function(operator,a,b) {
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
  let result = 0;
  let firstNumber = "0";
  let secondNumber = "";
  let operator ="";

  const display = document.querySelector('.display');
  const numberDisplay = document.createElement('p');
  numberDisplay.classList.add('numberDisplay');
  numberDisplay.textContent = result;
  display.appendChild(numberDisplay);
  buttons.forEach((button) => {
      button.addEventListener('click', () => {
      
        if (Number.isInteger(parseInt(button.textContent)) && secondNumber == "" && operator == "") { // If the user clicks on a number and no operator is selected, keep it in memory
            firstNumber = firstNumber + button.textContent;
            numberDisplay.textContent = parseInt(firstNumber); // convert the display to int to remove the first zero
            
        }
        if (Number.isInteger(parseInt(button.textContent)) && operator != ""){ // If the user clicks on a number and a operator is selected,compute
            secondNumber = secondNumber + button.textContent;
            numberDisplay.textContent = parseInt(secondNumber); // convert the display to int to remove the first zero
        }

        if (button.textContent =="+"|| button.textContent =="-"|| button.textContent =="/" || button.textContent =="x") {
            operator = button.textContent;
            
        }
        if (button.textContent =="=" && secondNumber != ""){ // If the user clicks on a number and a operator is selected,compute
            result = operate(operator,parseInt(firstNumber),parseInt(secondNumber));
            numberDisplay.textContent = result;
            firstNumber = "";
            operator == "";
        }
        
        if (button.textContent =="AC") {
            numberDisplay.textContent = 0;
            firstNumber = "0";
        }
        



      });


   });
   


  const disp = function() {


    
  }