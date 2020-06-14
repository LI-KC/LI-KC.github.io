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
        myHeading.innerHTML = 'Hello welcome to Anson space ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Hello welcome to Anson space ' + storedName; 
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
for(let i = 0;i < 5; i++){
    const p = document.createElement('p');
    const button = document.createElement('button');
    button.innerHTML = "CLICK ME!" + i;
    document.body.appendChild(p);
    document.body.appendChild(button);
}

myHTML2.onclick = function() {
    const listItem = document.createElement('li');
    const listContent = prompt('What content do you want the list item to have?');
    listItem.textContent = listContent;
    document.body.appendChild(listItem);
}
