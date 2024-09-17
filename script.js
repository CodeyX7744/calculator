
let str = "";
let inputNum = document.querySelector('#inputDisplay');
let btnAll = document.querySelectorAll('.btn');
btnAll.forEach(btn => btn.addEventListener('click', getNumber));

let addEexpression = ""
let operation = ""

function appendNumber (num) {
    displayNumber(str += num);
   
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
    } 

}

function displayNumber (num,operation) {
    addEexpression += num;
    let operatorPosition = addEexpression.indexOf("+");
    console.log(operatorPosition);
    

    if (num[num.length-1]=== "+") {
        // console.log("Addition");
        
    } if (addEexpression[num.length-1]=== "+") {
        // console.log("Adding");
       
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
      
    }  else if (btnNum.target.innerText==="+") {
        
       operation = "+"
       displayNumber("", operation);  
      
    }  else appendNumber(btnNum.target.innerText); 
        
   
}


// function add(addends) {
//     console.log(addends);
    
// }
