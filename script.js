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

    /*Form Filling*/

    const form=document.querySelector("form");
    form.addEventListener("submit",async function(e){
        e.preventDefault();
        const formData=new FormData(form);
        const response=await fetch(form.action, {
            method:"POST",
            body:formData
        });

        if(response.ok){alert("Message sent successfully!");
            form.reset();
        }
        else{
            ("Something went wrong.");
    }
});

/*CARDS ANIMATION*/

    document.body.classList.toggle("dark");

    const cards=document.querySelectorAll(".card");
    const skillCards=document.querySelectorAll(".skill-card");
    const servicesCards=document.querySelectorAll(".services-card");
    const contactCards=document.querySelectorAll("contact-card");

    window.addEventListener("scroll",()=>{
        cards.forEach(card=>{
            const cardTop=card.getBoundingClientRect().top;
            if(cardTop<window.innerHeight-100){
                card.classList.add("show");
            }
        });
    });


    window.addEventListener("scroll",()=>{
        servicesCards.forEach(card=>{
            const cardTop=card.getBoundingClientRect().top;
            if(cardTop<window.innerHeight-100){
                card.classList.add("show");
            }
        });
    });

    window.addEventListener("scroll",()=>{
        skillCards.forEach(card=>{
            const cardTop=card.getBoundingClientRect().top;
            if(cardTop<window.innerHeight-100){
                card.classList.add("show");
            }
        });
    });

    const observer=new
    IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                contactCards.forEach((card,index)=>{
                    setTimeout(()=>{
                        card.classList.add("show");
                    },index*200);
                });
            }
        });
    });
    observer.observe(document.querySelector(".contact-container"));



    /*TYPING EFFECTS*/

    const words=[
        "Software Developer",
        "Mathematics Student",
        "Python Programmer"
    ];
    let wordIndex=0;
    let charIndex=0;
    let isDeleting=false;
    const typingElement=document.getElementById("typing");
    function typeEffect(){
        const currentWord=words[wordIndex];

        if(!isDeleting){
            typingElement.textContent=currentWord.substring(0, charIndex+1);
            charIndex++;
            if(charIndex===currentWord.length){
                isDeleting=true;
                setTimeout(typeEffect,1500);
                return;
            }
        }else{
            typingElement.textContent=currentWord.substring(0,charIndex-1);
            charIndex--;
            if(charIndex===0){
                isDeleting=false;
                wordIndex=(wordIndex+1)%
                words.length;
            }
        }
        setTimeout(typeEffect,isDeleting ?
            50:100
        );
    }
    typeEffect();


/*ROTATION ANIMATION*/

const logo=document.getElementById("logo");
const name=document.getElementById("name");
function rotateElement(element){
    element.classList.remove("rotate");
    setTimeout(()=>{
        element.classList.add("rotate");
    },10);
}

logo.addEventListener("click",()=>{
    rotateElement(logo);
});
name.addEventListener("click",()=>{
    rotateElement(name);
})






