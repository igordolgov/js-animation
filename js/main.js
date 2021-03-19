let tl = gsap.timeline();

tl.from(".hero__left", {opacity: 0, y: 100, duration: .8});
tl.from(".hero__descr", {opacity: 0, duration: .4});
tl.from(".photo_1", {scale: 0, duration: .4});
tl.from(".photo_2", {scale: 0, duration: .2});
tl.from(".photo_3", {scale: 0, duration: .2});
tl.from(".photos__author", {opacity: 0, duration: 2});

function func1() {
    let tween = gsap.timeline();
    
    tween.to(".menu", {display: "block", opacity: 1, duration: .3});
    tween.fromTo(".menu__top", {opacity: 0, duration: .3}, {opacity: 1, duration: .3});
    tween.fromTo(".nav__list", {opacity: 0, y: 20, duration: .3}, {opacity: 1, y: 0, duration: .3});
    tween.fromTo(".social", {opacity: 0, y: 20, duration: .2}, {opacity: 1, y: 0, duration: .2});
    tween.fromTo(".menu__right", {opacity: 0, y: 20, duration: .3}, {opacity: 1, y: 0, duration: .3});
    
    document.querySelector(".burger").onclick = () => tween.play();
    document.querySelector(".close").onclick = () => tween.reverse();
}

var element = document.querySelector(".burger");
element.addEventListener("click", func1);