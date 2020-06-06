let myHeading = document.querySelector('h1');
myHeading.textContent = 'HelloWorld!';

let myHTML = document.querySelector('html');
let myImg = document.querySelector('img');
let myButton = document.querySelector('button');

function plzstop(){
    alert('HEY STOP DOING IT YOU IDIOT!');  
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Hello welcome to chi space ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Hello welcome to chi space ' + storedName; 
}

myButton.onclick = function() {
    setUserName();
}

if (myHeading.textContent === 'HelloWorld!'){
    alert(myHeading.textContent + 'Chi is handomse');
} else {
    alert('adwqiud');
}


myHTML.onclick = function() {plzstop();}

myImg.onclick = function() {
    let Atr = myImg.getAttribute('src');
    if (Atr === 'images/cat.jfif') {
        myImg.setAttribute ('src', 'images/woman.jfif');
    } else {
        myImg.setAttribute ('src', 'images/cat.jfif');
    }
}
