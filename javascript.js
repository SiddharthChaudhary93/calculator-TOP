const numbers = document.querySelectorAll('.number');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');
const dot = document.querySelector('.dot');
const operator = document.querySelectorAll('.blue');

const display = document.querySelector('.present__number');
const secondaryDisplay = document.querySelector('.previous__operation');


const MAXLENGTH = 12;
var current='0';
var operation = 0;
var memory = '0';
var secondDisplayVal='';
//store the numbers
function addNum(num){
    console.log(num)
    if(current.length > MAXLENGTH){
        current = `AAAA TOO LONG!`;
    }else{
        if( (eval(current)===0) &&(current.indexOf('.')=== -1) ){
            current = num;
        }else{
            current += num;
        }
    }
    display.innerHTML = current;
}

numbers.forEach(number=>{
    number.addEventListener('click',function(){
        addNum(number.innerHTML)
    })
})


//dot operator
function checkDecimal(){
    // console.log(typeof(current));
    if(current.length===0){
        current='0.';
    }else{
        if(current.indexOf('.') === -1){
            current+='.';
        }
    }
    display.innerHTML = current;
    return current;
}


dot.addEventListener('click',checkDecimal);


//store the operand
function operate(op){
    // console.log(op);

    if(op.indexOf('*') >-1){
        display.innerHTML = '*';
        operation = 1;
    }
    if(op.indexOf('/') >-1){
        operation = 2;
    }
    if(op.indexOf('+') >-1){
        operation = 3;
    }
    if(op.indexOf('-') >-1){
        operation = 4;
        
    }
    
    memory=current;
    current='';
    // console.log(`memory=${memory}`);
    // console.log(`current=${current}`);
    display.innerHTML=op;
}


operator.forEach(operand =>{
    operand.addEventListener('click',function(){
        operate(operand.innerHTML);
    })
})


//positive negative
//not implemented in the calculator as it looked weird in the layout
function plusMinus(){
    if(current.indexOf('-') === 0){
        current=current.substr(1);
    }else{
        current = '-' + current;
    }
    display.innerHTML=current;
}


//All clear
function clearAll(){
    current='0';
    operation=0;
    memory='0';
    secondDisplayVal='';
    secondaryDisplay.innerHTML = secondDisplayVal;
    display.innerHTML=current;
    console.log(`All clear`);

}

clear.addEventListener('click',clearAll);


//calculate
function calculate(){
    // console.log(eval(memory));
    if (eval(memory) || memory === '0'){//check to see if memory is empty or not
        let op='';
        if( operation === 1){
            op='*';
            secondDisplayVal = memory + op + current + '=';
            current = eval(memory) * eval(current);
        }
        if( operation === 2){
            op='/';
            secondDisplayVal = memory + op + current + '=';
            current = eval(memory) / eval(current);
        }
        if( operation === 3){
            op='+';
            secondDisplayVal = memory + op + current + '=';
            current = eval(memory) + eval(current);
        }
        if( operation === 4){
            op='-';
            secondDisplayVal = memory + op + current + '=';
            current = eval(memory) - eval(current);
        }
        secondaryDisplay.innerHTML = secondDisplayVal;
        operation=0;
        memory='0';
        display.innerHTML=current;
    }
}

equals.addEventListener('click',calculate);

//fix display

function fixDisplay(){
    current = display.innerHTML;
    console.log(`current val${current}`);
    current += '' + parseFloat(current);
    if(current.indexOf('NaN') != -1){
        current = `Aargh! What?`;
    };
    display.innerHTML=current;
}

display.addEventListener('change',fixDisplay);


window.addEventListener('load',function(){
    display.innerHTML=current;
});





