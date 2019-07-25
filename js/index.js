// get The Modal Div
const modal = document.getElementById("modalId");

// get the login/signUp buttons
const modalOpen = document.getElementById("modalOpen");

console.log(modalOpen)
modalOpen.addEventListener("click", function(e){
    e.preventDefault();
    console.log("hello")
})