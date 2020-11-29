const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.addEventListener('click', function(){
    body.classList.add("disabled");
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
});

cancelBtn.addEventListener('click', function(){
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
});

window.addEventListener('scroll', function(){
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
});