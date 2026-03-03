const main = document.querySelector("#main");
const sections = document.querySelectorAll("section");
const dsections = document.querySelectorAll(".section");
const titre = document.querySelector("h1");
const pres = document.querySelector("#presentation");
const contactForm = document.querySelectorAll(".contactForm");
const formContact = document.querySelectorAll(".contact-container");
let debut=true;
let position=1;
const btnD = document.querySelectorAll(".droite");
const btnB = document.querySelectorAll(".bas");
const btnH = document.querySelectorAll(".haut");
const btnG = document.querySelectorAll(".gauche");
const consigne=document.querySelector(".click");

let tContact=0;

function disparaitre(elmt){
    elmt.style.opacity=0;
}
function apparaitre(elmt){
    elmt.classList.remove("hide");
    elmt.style.opacity=("1");
}

sections[0].addEventListener("click", ()=>{
    if (debut && window.innerWidth>=895){
        consigne.style.opacity="0";
        //setTimeout(()=>{consigne.classList.add("hide")});
        titre.style.transform="scale(500)";
        setTimeout(disparaitre(titre), 1000);
        setTimeout(()=>{titre.classList.add("hide");}, 2000);
        setTimeout(apparaitre(pres), 200);
        setTimeout(apparaitre(btnD[0]), 200);
        debut++;
        apparaitre(btnD[1])
    }
})

btnD[0].addEventListener("click", ()=>{
    main.style.height=dsections[1].offsetHeight+"px";
    for (let k=0; k<4; k++)
        sections[k].style.left=("-100vw");
})

btnB[0].addEventListener("click", ()=>{
    main.style.height=dsections[3].offsetHeight+"px";
    for (let k=0; k<4; k++)
        sections[k].style.bottom=(dsections[1].offsetHeight+"px");
})

btnH[0].addEventListener("click", ()=>{
    main.style.height=dsections[1].offsetHeight+"px";
    for (let k=0; k<4; k++)
        sections[k].style.bottom=("0");
})

btnG[0].addEventListener("click", ()=>{
    main.style.height=dsections[2].offsetHeight+"px";
    for (let k=0; k<4; k++)
        sections[k].style.left=("0");
})

btnD[1].addEventListener("click", ()=>{
    main.style.height=dsections[3].offsetHeight+"px";
    for (let k=0; k<4; k++)
        sections[k].style.left=("-100vw");
})

function contact(event){
    if (event.target.parentElement.id==="contact"){
        pres.style.transform="rotateY(90deg)";
        setTimeout(()=>{contactForm[0].style.transform="rotateY(0)"; tContact=1}, 1000);
    }
    else{
        console.log("**********");
        contactForm[1].style.transform="rotateY(0)"; 
        setTimeout(()=>{tContact=1;}, 1000);
    }
    contactForm[0].style.zIndex=1000;
    contactForm[1].style.zIndex=1000;
}
function gotoProj(){
    main.style.height=dsections[3].offsetHeight+"px";
    for (let k=0; k<4; k++)
        sections[k].style.bottom=(dsections[1].offsetHeight+"px");
}

document.addEventListener("click", (event) => {
  if ((!formContact[0].contains(event.target) || !formContact[1].contains(event.target)) && tContact>0) {
    console.log("retour");
    contactForm[0].style.transform="rotateY(90deg)";
    contactForm[1].style.transform="rotateY(90deg)";
    if (tContact===1){
        setTimeout(()=>{pres.style.transform="rotateY(0)";tContact=0;}, 1000);
    }
  }
});