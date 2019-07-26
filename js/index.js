// get The Modal Div
const modal = document.getElementById("modalId");
const signUpForm = document.querySelector('.signUPForm')
const loginForm = document.querySelector('.loginForm')
signUpForm.style.display = "none";
loginForm.style.display = "none";
console.log(signUpForm)

// get the login/signUp buttons
const modalOpen = document.querySelectorAll(".modalOpen");

const closeSpan = document.getElementById("close")
modalOpen.forEach(btn =>{
    btn.addEventListener("click", function(e){
        e.preventDefault();
        console.log(e.target.id)
        if(e.target.id === "login"){
            signUpForm.style.display = "none";
            modal.style.display = "block"
            loginForm.style.display = "block";
        }else if (e.target.id === "signUp"){
            modal.style.display = "block"
            loginForm.style.display = "none";
            signUpForm.style.display = "block";
        }
    })
})

closeSpan.addEventListener("click", function(e){
    e.preventDefault();
    modal.style.display = "none";
})
window.addEventListener("click", function(e){
    e.preventDefault();
    if(e.target.className === "modal"){
        modal.style.display = "none";
    }
})