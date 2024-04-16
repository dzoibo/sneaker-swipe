import './style.scss'
import gsap from 'gsap'

let next= document.querySelector(".next");
let prev= document.querySelector(".back");
let cardRed= document.querySelector(".card-red");
let airMax= document.querySelector(".shoes-max");
let redDunk= document.querySelector(".red-dunk");
let dunkDecs=document.querySelector("#dunk-description");
let maxDesc=document.querySelector("#max-description");
let maxCard=document.querySelector("#max-card");
let dunkCard=document.querySelector("#dunk-card");
let shoes= document.querySelectorAll(".shoes-image");
let shoesCard= document.querySelectorAll(".shoes-card");
const customEase = "elastic.out(1,0.85)";
const duration = 0.35;
const swipeDuration = 1.5;
cardRed.classList.add("border-2");

shoes.forEach((item) => {
    item.addEventListener("click", () => {
      animateClickImg(item);
    });
  });
  
  shoesCard.forEach((card, index) => {
    card.addEventListener("click", () => {
      const visibleClickImg = document.querySelector(".shoes-image:not(.hidden)");
      animateClickImg(visibleClickImg, index );
    });
  });

prev.addEventListener("click",()=>{
    next.style.opacity="1";
    prev.style.opacity="0.3";
    shoes.forEach((item) => {
        item.classList.add("hidden");
        redDunk.classList.remove("hidden");
    });
    shoesCard.forEach((item) => {
        item.classList.remove("border-2");
        shoesCard[0].classList.add("border-2");
    });
    gsap.to(airMax,{
        top: 0,
        right:0,
        rotate: "0deg",
        duration:swipeDuration,
        ease:customEase,
    });
    gsap.to(redDunk,{
        left: -900,
        top: -800,
        duration:swipeDuration,
        rotate: "-90deg",
        ease:customEase,
    });
    gsap.to(dunkDecs,{
        duration:0.8,
        left: -500,
    });
    gsap.to(maxDesc,{
        duration:0.8,
        left: 0,
    });
    gsap.to(dunkCard,{
        duration:0.8,
        right:-500,
    });
    gsap.to(maxCard,{
        duration:0.8,
        right:0
    })
    animateClickImg(airMax);
});

next.addEventListener("click",()=>{
    
    next.style.opacity="0.3";
    prev.style.opacity="1";

    gsap.to(redDunk,{
        top: 0,
        left:0,
        rotate: "0deg",
        duration:swipeDuration,
        ease:customEase
    });
    gsap.to(airMax,{
        right: -900,
        top: -800,
        duration:swipeDuration,
        rotate: "90deg",
        ease:customEase
    });
    gsap.to(dunkDecs,{
        left: 0,
        duration:0.8,
    });
    gsap.to(maxDesc,{
        left: -500,
        duration:0.8,
    });
    gsap.to(dunkCard,{
        right: 0,
        duration:0.8
    });
    gsap.to(maxCard,{
        right: -500,
        duration:0.8,

    });
    animateClickImg(redDunk);
    
});





function animateClickImg(clickedImg, index = undefined) {
    const tl = gsap.timeline();
    tl.to(clickedImg, {
      y: -30,
      duration: duration,
      ease: "power1.out",
    })
      .to(clickedImg, {
        rotate: 25,
        duration: duration,
        ease: "power1.out",
      })
      .to(clickedImg, {
        rotate: -10,
        duration: duration,
        ease: "power1.out",
      })
      .to(clickedImg, {
        y: 0,
        rotate: 0,
        duration: duration,
        ease: "power1.out",
        onComplete: () => {
          if (index) {
            shoes.forEach((img) => {
              img.classList.add("hidden");
            });
            shoesCard.forEach((card) => {
              card.classList.remove("border-2");
            });
            shoes[index].classList.remove("hidden");
            shoesCard[index].classList.add("border-2");
          }
        },
      });
  }