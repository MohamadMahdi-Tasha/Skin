// Variables
const toggleBtns = document.querySelectorAll('.dv-toggle-btn');
const nextSlideBtns = document.querySelectorAll('.dv-next-slide-btn');
const PrevSlideBtns = document.querySelectorAll('.dv-prev-slide-btn');

// Initializing Main Swiper Of Pages
const MainSwiper = new Swiper('.main-swiper', {
    mousewheel: true,
    enabled: false,
    breakpoints:  {
        991: {enabled: true,},
        1: {enabled: false,},
    },
})

// Adding Event Listener On Each Next Slide Button That Listens To Click And Slides Main Swiper To Next Slide Of Current slide
nextSlideBtns.forEach(item => item.addEventListener('click', () => MainSwiper.slideNext()))

// Adding Event Listener On Each Previous Slide Button That Listens To Click And Slides Main Swiper To Previous Slide Of Current slide
PrevSlideBtns.forEach(item => item.addEventListener('click', () => MainSwiper.slidePrev()))

// Adding Event Listener On Each Button That Has Class Of 'dv-toggle-btn' That Listens To Click On Them
// And Then Gets Value Of Attribute Of 'data-toggle-target' And Saves It In Variables Called 'target'. Then
// Gets Target And Toggles 'show' Class To It ..
toggleBtns.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-toggle-target');
        document.querySelector(target).classList.toggle('show');
    })
})