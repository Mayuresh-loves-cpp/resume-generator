let signupWindow = document.getElementById('signupDiv');
let loginWindow = document.getElementById('loginDiv');
let loginbtn = document.getElementById('loginbtn');
let signupbtn = document.getElementById('signupbtn');
document.getElementById('signupDiv').hidden = false;
document.getElementById('loginDiv').hidden = false;
signupWindow.classList.add("hide");
loginWindow.classList.add("hide");

signupbtn.addEventListener('click', () => {
    loginWindow.classList.add("hide");
    signupWindow.classList.remove("hide");
});

loginbtn.addEventListener('click', () => {
    signupWindow.classList.add("hide");
    loginWindow.classList.remove("hide");
    
    // if (loginWindow.classList.contains("hide")) {
    //     loginWindow.classList.add("hide");
    //     console.log(true)
    // } else {
    //     loginWindow.classList.remove("hide");
    // }
    // document.getElementById('pre-form').style.opacity = '1';
});

function closelogin() {
    let loginWindow = document.getElementById('loginDiv');
    loginWindow.classList.add("hide");
}

function closesignup() {
    let signupWindow = document.getElementById('signupDiv');
    signupWindow.classList.add("hide");
}