const numbers = document.querySelectorAll('.number');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');
const dot = document.querySelector('.dot');
const operator = document.querySelectorAll('.blue');

const display = document.querySelector('.present__number');


const MAXLENGTH = 12;
var current='0';
var operation = 0;
var memory = '0';

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
    display.innerHTML=current;
}


operator.forEach(operand =>{
    operand.addEventListener('click',function(){
        operate(operand.innerHTML);
    })
})


//positive negative
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
    display.innerHTML=current;
    console.log(`All clear`);

}

clear.addEventListener('click',clearAll);
