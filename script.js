const bar = document.getElementById("bar");
const nav =document.getElementById("navbar");
const close =document.getElementById("close");


if(bar) {
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

// for form section 

// toggle menu for form

// var loggin=document.getElementById("login");
// var signup=document.getElementById("signup");
// var indicator=document.getElementById("indicator");

// function register(){
//     signup.style.transform="translateX(0)";
//     loggin.style.transform="translateX(0)";
//     indicator.style.transform="translateX(100px)";
// }

// function login(){
//     signup.style.transform="translateX(300px)";
//     loggin.style.transform="translateX(300px)";
//     indicator.style.transform="translateX(0)";
// }

