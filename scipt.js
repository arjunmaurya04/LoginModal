const formopenbtn = document.querySelector("#form_open"),
home = document.querySelector(".home"),
formcontainer = document.querySelector(".form_container"),
formclosebtn = document.querySelector(".form_close"),
signupbtn = document.querySelector("#signup"),
loginbtn = document.querySelector("#login"),
pwshowhide = document.querySelectorAll(".pw_hide");

const overLay = document.querySelector('.overlay');

formopenbtn.addEventListener("click",() =>{
    formcontainer.classList.add("show")
    overLay.classList.add("show-overlay")
} )
formclosebtn.addEventListener("click",() => {
    formcontainer.classList.remove("show")
    overLay.classList.remove("show-overlay")
})



overLay.addEventListener('click',() => {
    overLay.classList.remove("show-overlay")
    formcontainer.classList.remove("show")
});

pwshowhide.forEach(icon => {
    icon.addEventListener("click", () => {
        let getpwinput = icon.parentElement.querySelector("input");
        if (getpwinput.type === "password") {
            getpwinput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        }else{
            getpwinput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash");
        }
    }) 
})

signupbtn.addEventListener("click",(e) =>{
    e.preventDefault();
    formcontainer.classList.add("active")
})
loginbtn.addEventListener("click",(e) =>{
    e.preventDefault();
    formcontainer.classList.remove("active")
})

