// import functions and grab DOM elements
const mainSection = document.getElementById('main');

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const expressions = [
    {
        expression: '+',
        func: function(x, y) {
            return x + y;
        }
  
    },
    {
        expression: '-',
        func: function(x, y) {
            return x - y;
        }
  
    },
    {
        expression: '*',
        func: function(x, y) {
            return x * y;
        }
  
    },
    {
        expression: '/',
        func: function(x, y) {
            return x / y;
        }
  
    },
    {
        expression: '%',
        func: function(x, y) {
      
            return x % y;
        }
  
    },
];


expressions.forEach(expressions => {
    const input1 = document.createElement('input');
    input1.type = 'text';
    input1.id = 'input-1'
    ;
    const expression = document.createElement('span');
    expression.textContent = expressions.expression;
    const input2 = document.createElement('input');
    input2.type = 'text';
    input2.id = 'input-2'
    ;
    const equal = document.createElement('span');
    equal.textContent = '=';
    const output = document.createElement('span');
    const evaluateButton = document.createElement('button');
    evaluateButton.addEventListener('click', () => {
        const result = expressions.func(Number(input1.value), Number(input2.value));
        output.textContent = result;
    });
    const wrapperElement = document.createElement('div');
    wrapperElement.classList.add('calculation');
    wrapperElement.append(input1, expression, input2, equal, evaluateButton, output);
    mainSection.append(wrapperElement);
});


