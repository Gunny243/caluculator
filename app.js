


let input = document.querySelector('input');


output = document.querySelector('.output');



// eventListenerS

button = document.querySelector('button');
button.addEventListener("click", displayTip);


function displayTip(){
    console.log("click")
    button.disabled = true;
    let amount = input.value
let tip = amount * 0.02;
output.innerText = `tip: ${tip}` ;

}