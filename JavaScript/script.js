// Navigation bar effect on scroll 
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
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