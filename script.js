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
  let total = 0;
  let memory = 0;
  let operator ="";
  buttons.forEach((button) => {
      button.addEventListener('click', () => {
      
        if (Number.isInteger(parseInt(button.textContent)) && operator == "") { // If the user clicks on a number and no operator is selected, keep it in memory
            memory = memory + button.textContent;
        }
        else if (Number.isInteger(parseInt(button.textContent)) && operator != ""){ // If the user clicks on a number and a operator is selected,compute
            let result = operate(operator,parseInt(memory),memory,button.textContent);
            console.log(result);
        }
        
        if (button.textContent =="AC") {
            memory = "0";
        }
        
        
        if (button.textContent =="+"|| button.textContent =="-"|| button.textContent =="/" || button.textContent =="x") {
            operator = button.textContent;
        }
          
      });
   });
   


  const disp = function() {


    
  }