// Navigation bar effect on scroll 
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

// Scroll Button 
const Scrollbtn = document.querySelector(".scroll")

window.addEventListener("scroll", function(){
    Scrollbtn.classList.toggle("active", window.scrollY > 500);
})

Scrollbtn.addEventListener("click", () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// Navigation effect on Scrolling

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    })
})

//Roadmap content
const roadmapMoadals = document.querySelectorAll(".timeline-modal");
const timeline = document.querySelectorAll(".timeline-content");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    roadmapMoadals[modalClick].classList.add("active");
}

timeline.forEach((timelineBtn, i) =>{
    timelineBtn.addEventListener("click", () => {
        modal(i);
    })
})

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        roadmapMoadals.forEach((modalView) => {
            modalView.classList.remove("active");
        })
    })
})


// Responsive navigation menu toggle

const menubtn = document.querySelector(".nav-menu-btn")
const closebtn = document.querySelector(".nav-close-btn")
const navigation = document.querySelector(".navigation")
const navItem = document.querySelectorAll(".nav-items a")

menubtn.addEventListener("click", () => {
    navigation.classList.add("active");
})

closebtn.addEventListener("click", () => {
    navigation.classList.remove("active");
})

navItem.forEach((navItem) =>{
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    })
})


// Scroll Reveal Animation
ScrollReveal({
    reset: true,
    distance: '46px',
    duration: 1750,
    delay: 85
});

ScrollReveal().reveal('.home .home-container h1, .section-title-01, .section-title-02', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.home .home-container h3, .home .home-container p', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.home .home-container .btn', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.contact-left li,', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.policy, .policy-mid, .center-line, .timeline-content, .footer-container .info', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.content .info img, .contact-right, .para1, .img1 img', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.content .info p, .contact-left h2', { delay: 700, origin: 'left'});
ScrollReveal().reveal('.content .info p, .contact-left h2, .para', { delay: 600, origin: 'left'});
ScrollReveal().reveal('.block, .profile-card', { delay: 700, origin: 'bottom', interval:200 });
ScrollReveal().reveal('footer .group', { delay: 500, origin: 'top', interval:200 });