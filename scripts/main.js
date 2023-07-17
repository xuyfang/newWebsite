let img = document.querySelector('img')

img.onclick = function(){
    let mySrc = img.getAttribute('src');
    if(mySrc === 'images/p5r(1)(1).png'){
        img.setAttribute('src', 'images/p5r11.png');
    }else{
        img.setAttribute('src', 'images/p5r(1)(1).png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('请输入您的姓名');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = myName + '认为p5r天下第一';
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let stroedName = localStorage.getItem('name');
    myHeading.textContent = stroedName + '认为p5r天下第一';
}

myButton.onclick = function(){
    setUserName();
}