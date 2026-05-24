//Hamburger Layout

const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n=>n.
    addEventListener("click",()=>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))

    //Button Layout

    const btn=document.getElementById("prompt-btn");
    const output=document.getElementById("output");
    btn.addEventListener("click",()=>{
        const userName=prompt("What's your name?","Guest");
    output.textContent="Hello,"+userName+"!";
    });