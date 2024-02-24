const btn = document.querySelector("#OnOff");
const form = document.querySelector('form');
const redLigth = document.querySelector('#red');
const yellowLigth = document.querySelector('#yellow');
const greenLigth = document.querySelector('#green');
let boolClick = false;
btn.addEventListener('click',()=>{
    if(!boolClick)
        btn.innerText = 'Off';
    else{
        btn.innerText = 'On';
        redLigth.style.backgroundColor = 'transparent';
        yellowLigth.style.backgroundColor = 'transparent';
        greenLigth.style.backgroundColor = 'transparent';
    }
    boolClick = !boolClick;
});
redLigth.addEventListener('click',()=>{
    if(boolClick){
        redLigth.style.backgroundColor = 'red';
        yellowLigth.style.backgroundColor = 'transparent';
        greenLigth.style.backgroundColor = 'transparent';
    }
});
yellowLigth.addEventListener('click',()=>{
    if(boolClick){
        redLigth.style.backgroundColor = 'transparent';
        yellowLigth.style.backgroundColor = 'yellow';
        greenLigth.style.backgroundColor = 'transparent';
    }
});
greenLigth.addEventListener('click',()=>{
    if(boolClick){
        redLigth.style.backgroundColor = 'transparent';
        yellowLigth.style.backgroundColor = 'transparent';
        greenLigth.style.backgroundColor = 'green';
    }
});

