//FORM

emailjs.init({
    publicKey:"DCajSO2e7uhoCZ_h4",
});



//HERO ANIMATION

document.addEventListener("DOMContentLoaded",()=>{

const workspace=document.querySelector(".workspace");
let mouseA=0;
let mouseB=0;
if(workspace){
document.addEventListener("mousemove",(e)=>{
  const x=(e.clientX/window.innerWidth-0.5)*30;
  const y=(e.clientY/window.innerHeight-0.5)*30;
  mouseA=x*25;
  mouseB=y*18;
});

let floatTime=0;
function animateWorkspace(){
    floatTime+=0.02;
    const floatY=Math.sin(floatTime)*12;
    const rotateY=mouseA;
    const rotateX=-mouseB;
    workspace.style.transform=`
    translateY(${floatY}px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)`;
    requestAnimationFrame(animateWorkspace);
}

animateWorkspace();
}

const laptop=document.querySelector(".laptop");
if(laptop){
    document.addEventListener("mousemove",(e)=>{
        const x=(e.clientX/window.innerWidth-0.5)*8;
        const y=(e.clientY/window.innerHeight-0.5)*8;
        laptop.style.transform=`
        rotateX(${70-y}deg)
        rotateZ(${x}deg)`;
    });
}

const orbit=document.querySelector(".orbit-ring");
let orbitRotation=0;
function rotateOrbit(){
    orbitRotation+=0.2;
    orbit.style.transform=`
    translate(-50%, -50%) rotate(${orbitRotation}deg)`;
    requestAnimationFrame(rotateOrbit);
}
rotateOrbit();

const glow=document.querySelector(".workspace-glow");
let glowTime=0;
function pulseGlow(){
    glowTime+=0.03;
    const scale=1+Math.sin(glowTime)*0.08;
    const opacity=0.6+Math.sin(glowTime)*0.2;
    glow.style.transform=`scale(${scale})`;
    glow.style.opacity=opacity;
    requestAnimationFrame(pulseGlow);
}
pulseGlow();


const icons=document.querySelectorAll(".tech-icon");
function animateIcons(){
    icons.forEach((icon, index)=>{
        const t=performance.now()*0.001;
        const y=Math.sin(t+index)*12;
        const x=Math.cos(t+index)*8;
        icon.style.transform=`
        translate(${x}px,${y}px)`;
    });
    requestAnimationFrame(animateIcons);
}
animateIcons();

const commandElement=document.querySelector(".typing-command");
const output=document.querySelector(".terminal-output");
const terminalCommands=[
    {
    command:"npm run dev",
    output:[
        "Starting development server...",
        "Compiled successfully.",
        "Server running on localhost:3000"
    ]
},
{
    command:"git add .",
    output:[
        "Tracking updated files..."
    ]
},
{
    command:"git commit -m \"Portfolio Update\"",
    output:[
        "[main] Portfolio updated successfully."
    ]
},
{
    command:"git push",
    output:[
        "Uploading objects...",
        "Deployment completed."
    ]
},
{
    command:"Python main.py",
    output:[
        "FastAPI server started.",
        "Listening on port 8000"
    ]
}
];

let commandIndex=0;
async function runTerminal() {
    commandElement.textContent="";
    output.innerHTML="";
    const current=terminalCommands[commandIndex];
    for(let i=0;i<current.command.length;i++){
        commandElement.textContent+=current.command[i];
        await new Promise(r=>setTimeout(r,70));
    }
    for(let line of current.output){
        await new Promise(r=>setTimeout(r,400));
        const p=document.createElement("p");
        p.className="terminal-line";
        p.textContent=line;
        output.appendChild(p);
    }
    await new Promise(r=>setTimeout(r,2500));
    commandIndex++;
    if(commandIndex>=terminalCommands.length){
        commandIndex=0;
    }
    runTerminal();
}
runTerminal();

const scroll=document.querySelector(".scroll-indicator");
if(scroll){
    scroll.addEventListener("click",()=>{
        window.scrollTo({
            top:window.innerHeight,
            behavior:"smooth"
        });
    });
}

});


//Hamburger Layout

const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");
const overlay=document.querySelector(".menu-overlay");
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
        
    });
document.querySelectorAll(".nav-link").forEach(n=>n.
    addEventListener("click",()=>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        
    }));


    //SPOTLIGHT

    const spotlight=document.querySelector(".spotlight");
    let currentX=0;
        let currentY=0;
        let targetX=0;
        let targetY=0;
    window.addEventListener("mousemove",(e)=>{
        targetX=e.clientX-250;
        targetY=e.clientY-250;
    });
    function animateSpotlight(){
        currentX+=(targetX-currentX)*0.08;
        currentY+=(targetY-currentY)*0.08;
        spotlight.style.transform=`translate3d(${currentX}px,
        ${currentY}px, 0)`;
        requestAnimationFrame(animateSpotlight); 
    }
    animateSpotlight();


    //MAGNETIC BUTTON

    const magneticButtons=document.querySelectorAll(".magnetic-btn");
    magneticButtons.forEach((button)=>{
            const glow=button.querySelector(".btn-glow");
            const icon=button.querySelector(".btn-icon");
            button.addEventListener("mousemove",(e)=>{
            const rect=button.getBoundingClientRect();
            const x=e.clientX-rect.left;
            const y=e.clientY-rect.top;
            const centerX=rect.width/2;
            const centerY=rect.height/2;
            const moveX=(x-centerX)/5;
            const moveY=(y-centerY)/5;
            button.style.transform=`
            translate(${moveX}px, ${moveY}px)`;
            glow.style.left=`${x-90}px`;
            glow.style.top=`${y-90}px`;
            glow.style.opacity="1";
            icon.style.transform="translateX(6px)";
        });
        button.addEventListener("mouseleave",()=>{
            button.style.transform="translate(0,0)";
            glow.style.opacity="0";
            icon.style.transform="translateX(0)";
        });
        
        button.addEventListener("mousedown",()=>{
            button.style.transform+="scale(0.95)";
        });
        button.addEventListener("mouseup",()=>{
            button.style.transform=`translate(${moveX}px, ${moveY}px)`;
        });
    });
    




    
    /*Form Filling*/

    const contactForm=document.getElementById("contact-form");
    const sendBtn=document.getElementById("send-btn");
    contactForm.addEventListener("submit",function (e) {
        e.preventDefault();
        sendBtn.textContent="Sending...";
        sendBtn.disabled=true;
        emailjs.sendForm(
            "service_8wtk6h1",
            "template_jzws1cm",
            this
        )
        .then(()=>{
            sendBtn.textContent="Message Sent";
            contactForm.reset();
            setTimeout(()=>{
                sendBtn.textContent="Submit";
                sendBtn.disabled=false;
            },3000);
        })
        .catch((error)=>{
            sendBtn.textContent="Try Again";
            sendBtn.disabled=false;   
        });    
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
            }else{
                card.classList.remove("show");
            }
        });
    });


    //PROJECTS CARD TILT

    const projectsTilt=document.querySelectorAll(".card");

            function updateCard(tilt,clientX,clientY){
            const rect=tilt.getBoundingClientRect();
            const x=clientX-rect.left;
            const y=clientY-rect.top;
            tilt.style.setProperty("--x", `${x}px`);
            tilt.style.setProperty("--y", `${y}px`);
            const rotateY=((x/rect.width)-0.5)*18;
            const rotateX=((y/rect.height)-0.5)*-18;
            tilt.style.transform=`
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
            `;
            const image=tilt.querySelector(".project-image");
            if(image){
                image.style.transform=`
                translate(${rotateY*2}px,${rotateX*-2}px)
                scale(1.08)`;
            } 
            }
        function resetCard(tilt){
            tilt.style.transform=
            `perspective(1000px)
             rotateX(0deg) 
            rotateY(0deg) 
            scale(1)`;
        const image=tilt.querySelector(".project-image");
        if(image){
            image.style.transform=`translate(0px,0px) scale(1)`;
        }
    }
    projectsTilt.forEach(tilt=>{
        tilt.addEventListener("mousemove",(e)=>{
            updateCard(tilt,e.clientX,e.clientY);
        });
        tilt.addEventListener("mouseleave",()=>{
            resetCard(tilt);
        });
    });
    projectsTilt.forEach(tilt=>{
        tilt.addEventListener("touchmove",(e)=>{
            const touch=e.touches[0];
            updateCard(tilt,touch.clientX,touch.clientY);
        },{passive:true});
        tilt.addEventListener("touchend",()=>{
            resetCard(tilt);
        });
    });

    //SERVICES CARD REVEAL

    window.addEventListener("scroll",()=>{
        servicesCards.forEach(card=>{
            const cardTop=card.getBoundingClientRect().top;
            if(cardTop<window.innerHeight-100){
                card.classList.add("show");
            }else{
                card.classList.remove("show");
            }
        });
    });

    window.addEventListener("scroll",()=>{
        skillCards.forEach(card=>{
            const cardTop=card.getBoundingClientRect().top;
            if(cardTop<window.innerHeight-100){
                card.classList.add("show");
            }else{
                card.classList.remove("show");
            }
        });
    });


    function  revealContactCards(){
        contactCards.forEach(card=>{
            const cardTop=card.getBoundingClientRect().top;
            if(cardTop<window.innerHeight-100){
                card.classList.add("show");
            }else{
                card.classList.remove("show");
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
            }else{
                input.classList.remove("show");
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
        "Mathematics Student",
        "Software Developer",
        "Data Engineer",
        "AI Developer",
        "Problem Solver"
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
            40:90
        );
    }
    typeEffect();




    //STATSISTICS

    const counters=document.querySelectorAll(".counter");
    function startCounter(counter){
        const target=Number(counter.dataset.target);
        let current=0;
        const duration=2000;
        const startTime=performance.now();
        function updateCounter(currentTime){
            const elapsed=currentTime-startTime;
            const progress=Math.min(elapsed/duration,1);
            const easeOut=1-Math.pow(1-progress,3);
            current=Math.floor(easeOut*target);
            counter.textContent=current.toLocaleString();
            if(progress<1){
                requestAnimationFrame(updateCounter);
            }else{
                counter.textContent=target.toLocaleString();
                const plus=counter.nextElementSibling;
                if(plus){
                    plus.style.opacity="1";
                }
            }
        }
        requestAnimationFrame(updateCounter);
    }
    const counterObserver=new
    IntersectionObserver((entries,observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                startCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    },{
        threshold:0.5
    });
    counters.forEach(counter=>{
        counterObserver.observe(counter);
    });
        



    //PARTICLES

    tsParticles.load("particles-js",{
        particles:{
            number:{
                value:40
            },
            color:{
                value:"#18f0d0"
            },
            move:{
                enable:true,
                speed:1
            },
            size:{
                value:3
            }
        }
    });



/*ROTATION ANIMATION*/

const logo=document.getElementById("logo");
const name=document.getElementById("hero-name");
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





//PROGRESS BAR

window.addEventListener("scroll",()=>{
    const scrollTop=document.documentElement.scrollTop;
    const scrollHeight=document.documentElement.scrollHeight-
    document.documentElement.clientHeight;
    const progress=(scrollTop/scrollHeight)*100;
    document.getElementById("progress-bar").style.width=progress+"%";
});

//REVEAL CONTENTS

const observer=new
IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    });
},{
    threshold:0.2
});
const reveals=document.querySelectorAll(".reveal");
reveals.forEach(reveal=>{
    observer.observe(reveal);
});



//SERVICES FADE-UP

const fadeElements=document.querySelectorAll(".fade-up");
function revealFade(){
    fadeElements.forEach(fade=>{
        const fadeTop=fade.getBoundingClientRect().top;
        if(fadeTop<window.innerHeight-100){
                fade.classList.add("show");
        }else{
                fade.classList.remove("show");
        }
    });
}
window.addEventListener(
    "scroll",
    revealFade
);
revealFade();


//SERVICES CARD TILT

const servicesTilt=document.querySelectorAll(".services-card");
const isTouchDevice="ontouchstart" in window || navigator.maxTouchPoints>0;
if(!isTouchDevice){
    servicesTilt.forEach((tilt)=>{
        tilt.addEventListener("mousemove",(e)=>{
            const rect=tilt.getBoundingClientRect();
            const x=e.clientX-rect.left;
            const y=e.clientY-rect.top;
            const centerX=rect.width/2;
            const centerY=rect.height/2;
            const rotateY=(x-centerX)/15;
            const rotateX=(y-centerY)/15;
             const glow=tilt.querySelector(".card-glow");
            glow.style.opacity="1";
            glow.style.left=`${x-125}px`;
            glow.style.top=`${y-125}px`;
            tilt.style.transform=`
            perspective(800px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
            `;
            tilt.style.setProperty("--x", `${x}px`);
            tilt.style.setProperty("--y", `${y}px`);
        });
        tilt.addEventListener("mouseleave",()=>{
            const glow=tilt.querySelector(".card-glow");
            glow.style.opacity="0";
            tilt.style.transform=`
            perspective(800px)
            rotateX(0deg)
            rotateY(odeg)
            scale(1)
            `;
        });
    });
}

if(isTouchDevice){
    servicesTilt.forEach((tilt)=>{
        const icon=tilt.querySelector(".card-icon");
        tilt.addEventListener("touchstart",()=>{
            tilt.style.transform="scale(0.97)";
            tilt.style.boxShadow="0 25px 50px rgba(0,0,0,0.45)";
            if(icon){
                icon.style.transform="translateY(-8px) scale(1.08)";
            }
        });
        tilt.addEventListener("touchend",()=>{
            tilt.style.transform="scale(1)";
            tilt.style.boxShadow="0 15px 35px rgba(0,0,0,0.35)";
            if(icon){
                icon.style.transform="translateY(0) scale(1)";
            }
        });
    });
}




//ABOUT TEXTS BLUR

const blurItems=document.querySelectorAll(".blur-reveal");
function revealBlur(){
    blurItems.forEach(item=>{
        const blurTop=item.getBoundingClientRect().top;
        if(blurTop<window.innerHeight-100){
            item.classList.add("show");
        }else{
                card.classList.remove("show");
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
        }else{
                slide.classList.remove("show");
        }
    });
}
window.addEventListener(
    "scroll",
    revealSlides
);
revealSlides();






//CURSOR

const dot=document.querySelector(".cursor-dot");
const ring=document.querySelector(".cursor-ring");
let mouseX=0;
let mouseY=0;
window.addEventListener("mousemove",(e)=>{
    mouseX=e.clientX;
    mouseY=e.clientY;
});
let ringX=0;
let ringY=0;
function animateCursor(){
    dot.style.left=mouseX+"px";
    dot.style.top=mouseY+"px";
    ringX+=(mouseX-ringX)*0.13;
    ringY+=(mouseY-ringY)*0.13;
    ring.style.left=ringX+"px";
    ring.style.top=ringY+"px";
    requestAnimationFrame(animateCursor);
}
animateCursor();
const hoverItems=document.querySelectorAll("a,.btn,.services-card,.card");
hoverItems.forEach(item=>{
    item.addEventListener("mouseenter",()=>{
        ring.style.width="70px";
        ring.style.height="70px";
        ring.style.borderColor="#ffffff";
    });
});
hoverItems.forEach(item=>{
    item.addEventListener("mouseleave",()=>{
        ring.style.width="40px";
        ring.style.height="40px";
        ring.style.borderColor="#ECECEC";
    });
});
window.addEventListener("mousedown",()=>{
    ring.style.transform="translate(-50%,-50%) scale(0.7)";
});
window.addEventListener("mouseup",()=>{
    ring.style.transform="translate(-50%,-50%) scale(1)";
});
