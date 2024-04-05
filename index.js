import { controllers } from "./data.js";

const controllerDiv = document.querySelector('.controllers');
const screen = document.querySelector('.screen');


controllers.reverse().forEach(e =>{
    let btn = document.createElement('button');
    btn.className = 'buttons';
    btn.innerHTML = e.name;
    btn.setAttribute('id',e.id);
    if(btn.getAttribute('id') === 'add' || btn.getAttribute('id') === 'multi' || btn.getAttribute('id') === 'div' || btn.getAttribute('id') === 'sub'){
        btn.addEventListener('click', ()=>{
            let val = screen.textContent;
            if(checkOperators(val) != ''){
                screen.textContent = checkOperators(val);
            }else{
                screen.textContent += e.value;
               
            }
        });
    }else{
        btn.addEventListener('click', ()=>{
            screen.innerHTML += e.value;
        });
    }
    controllerDiv.appendChild(btn);
});


// delete last item in the screen
const del = document.getElementById('del');
del.addEventListener('click',()=>{
    let newVal = screen.textContent;
    newVal = newVal.slice(0,-1);
    screen.textContent = newVal;
});


//clear all the equation on the screen
const clear = document.getElementById('clear');
clear.addEventListener('click',()=>{
    screen.textContent = '';
});

//equals 
const equalsBtn = document.getElementById('equal');
equalsBtn.addEventListener('click', () =>{
    let val = screen.textContent;
    screen.textContent = checkOperators(val);
});

// math function
function add(a,b){
    return a + b;
}
function sub(a,b){
    return a - b;
}
function multi(a,b){
    return a * b;
}
function div(a,b){
    return a / b;
}


function checkOperators(val){
    let ans = 0;
    if(val.includes('+')){
        let arr = val.split('+');
        ans = add(Number(arr[0]),Number(arr[1]));
        return ans;
    }
    if(val.includes('-')){
        let arr = val.split(/(?=[-+x÷])/);
        ans = sub(Number(arr[0]),Number(arr[1]));
        return ans;
    }
    if(val.includes('x')){
        let arr = val.split('x');
        ans = multi(Number(arr[0]),Number(arr[1]));
        return ans;
    }
    if(val.includes('÷')){
        let arr = val.split('÷');
        ans = div(Number(arr[0]),Number(arr[1]));
        return ans;
    }
    return '';

}




