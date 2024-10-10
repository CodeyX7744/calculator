
let str = "";
let inputNum = document.querySelector('#inputDisplay');
let btnAll = document.querySelectorAll('.btn');
btnAll.forEach(btn => btn.addEventListener('click', getNumber));

let operation = "";
let operand1 = "";
let operand2 = "";
let sum = [];
let total = ""
let isAddition = false;
let isEqual = false;





function appendNumber (num) {
    str += num;
      
    let newStr = null;
    const comma = ',';

    if(str.length >= 4 && str.length <= 6 ) {
        newStr = str.slice(0, str.length-3 ) + comma  + str.slice(str.length-3);
        displayNumber (newStr);
    } else if(str.length >= 7 && str.length <= 9 ) {
        newStr = str.slice(0, str.length-6) + comma  + str.slice(str.length-6,str.length-3) + comma  + str.slice(str.length-3);
        displayNumber (newStr);
    } else if (str.length >= 10 && str.length <= 12)  {
        newStr = str.slice(0, str.length-9 ) + comma + str.slice(str.length-10,str.length-7) + comma  + str.slice(str.length-6,str.length-3) + comma  + str.slice(str.length-3);
        displayNumber (newStr);
    } else displayNumber (str);

}

function displayNumber (num) {
   
    if (isEqual) {

        console.log(sum);
        inputNum.value = sum.toString();
        
        
    } else if (isAddition) {
        console.log(inputNum.value);
        let indexAddOperand = num.indexOf("+");
        operand2 = num.slice(indexAddOperand+1);
        sum.push(operand2);
        // let sumString = sum.forEach(item =>  )
        
        isEqual = true;
        isAddition = false;

        inputNum.value = operand2;
        
        
    } else if (num[num.length-1]==="+") {
        console.log(inputNum.value);
        let indexAddOperand = num.indexOf("+");
        operation = num[indexAddOperand];
        operand1 = num.slice(0,indexAddOperand);
        sum.push(operand1);
        inputNum.value = operand1;
        isAddition = true;
        
    } else inputNum.value = num;
}


function getNumber(btnNum) {
    // console.log(btnNum)
    if (btnNum.target.innerText==="0" && str.length<=0) {
        inputNum.value = ""; 
        appendNumber(inputNum.value);  
      
    } else if (btnNum.target.innerText==="C") {
        inputNum.value = ""; 
        str ="";
        displayNumber(inputNum.value);  
      
    }  else appendNumber(btnNum.target.innerText); 
        
   
}


// function add(addends) {
//     console.log(addends);
    
// }
