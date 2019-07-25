// get The Modal Div
const modal = document.getElementById("modalId");

// get the login/signUp buttons
const modalOpen = document.querySelectorAll(".modalOpen");

const closeSpan = document.getElementById("close")
modalOpen.forEach(btn =>{
    btn.addEventListener("click", function(e){
        e.preventDefault();
        modal.style.display = "block"
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