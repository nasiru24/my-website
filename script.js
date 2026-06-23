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
    const contactCards=document.querySelectorAll(".contact-card");
    const inputs=document.querySelectorAll(".contact-input");

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


    function  revealContactCards(){
        contactCards.forEach(card=>{
            const cardTop=card.getBoundingClientRect().top;
            if(cardTop<window.innerHeight-100){
                card.classList.add("show");
            }
        });
        
    }
    window.addEventListener("scroll",
        revealContactCards
    );
    revealContactCards();

    function revealInputs(){
        inputs.forEach(input=>{
            const inputTop=input.getBoundingClientRect().top;
            if(inputTop<window.innerHeight-100){
                input.classList.add("show");
            }
        });
    }
    window.addEventListener(
        "scroll",
        revealInputs
    );
    revealInputs();



    /*TYPING EFFECTS*/

    const words=[
        "Software Developer",
        "UEW Student",
        "Mathematics Department",
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



/*LOADING SCREEN*/

window.addEventListener("load",()=>{
    const loader=document.getElementById("loader");
    console.log(loader);
    loader.classList.add("fade-out");
    setTimeout(()=>{
        loader.style.display="none";
    },1200);
});


/*BACK TO TOP BUTTON*/

const topBtn=document.getElementById("top-btn");
window.addEventListener("scroll",()=>{
    if(window.scrollY>300){
        topBtn.style.display="block";
    }
    else{
        topBtn.style.display="none";
    }
});
topBtn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});



//NAVBAR

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-link");
window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach(section=>{
        const top=section.offsetTop;
        const height=section.clientHeight;
        if(scrollY>=top-200){
            current=section.getAttribute("id");
        }
    });
    navLinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href")===`#${current}`)
            {
            link.classList.add("active");
        }
    });
});


//feel

document.addEventListener("mousemove",(e)=>{
    hero.style.backgroundPosition=`${e.clientX/50}px ${e.clientY/50}px`;
});



//PROGRESS BAR

window.addEventListener("scroll",()=>{
    const scrollTop=document.documentElement.scrollTop;
    const scrollHeight=document.documentElement.scrollHeight-
    document.documentElement.clientHeight;
    const progress=(scrollTop/scrollHeight)*100;
    document.getElementById("progress-bar").style.width=progress+"%";
});

//REVEAL CONTENTS

const reveal=document.querySelectorAll(".reveal");
function revealElements(){
    reveal.forEach((element,index)=>{
        const revealTop=element.getBoundingClientRect().top;
        if(revealTop<window.innerHeight-100){
            setTimeout(()=>{
                element.classList.add("show");
            },index*100);
        }
    });
}
window.addEventListener("scroll",revealElements);
revealElements();


//SERVICES FADE-UP

const fadeElements=document.querySelectorAll(".fade-up");
function revealFade(){
    fadeElements.forEach(fade=>{
        const fadeTop=fade.getBoundingClientRect().top;
        if(fadeTop<window.innerHeight-100){
                fade.classList.add("show");
        }
    });
}
window.addEventListener(
    "scroll",
    revealFade
);
revealFade();







//ABOUT TEXTS BLUR

const blurItems=document.querySelectorAll(".blur-reveal");
function revealBlur(){
    blurItems.forEach(item=>{
        const blurTop=item.getBoundingClientRect().top;
        if(blurTop<window.innerHeight-100){
            item.classList.add("show");
        }
    });
}
window.addEventListener(
    "scroll",
    revealBlur
);
revealBlur();



//SKILLS SLIDE

const sliders=document.querySelectorAll(".slide-right, .slide-left");
function revealSlides(){
    sliders.forEach(slide=>{
        const slideTop=slide.getBoundingClientRect().top;
        if(slideTop<window.innerHeight-100){
            slide.classList.add("show");
        }
    });
}
window.addEventListener(
    "scroll",
    revealSlides
);
revealSlides();




//SCROLL-FADE
const section=document.querySelector(".scroll-fade");
window.addEventListener(
    "scroll",()=>{
        const rect=section.getBoundingClientRect();
        const progress=1-rect.top/window.innerHeight;
        progress=Math.max(0,Math.min(progress,1));
        section.style.opacity=progress;
        section.style.filter=`blur(${(1-progress)*10}px)`;
        section.style.transform=`translateY(${(1-progress)*50}px)
        scale(${0.9+progress*0.1})`;
    }
);