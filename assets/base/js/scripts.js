// Variables
const toggleBtns = document.querySelectorAll('.dv-toggle-btn');
const nextSlideBtns = document.querySelectorAll('.dv-next-slide-btn');
const PrevSlideBtns = document.querySelectorAll('.dv-prev-slide-btn');
const accardionItem = document.querySelectorAll('.dv-accardion-item');

// Initializing Main Swiper Of Pages
const mainSwiper = new Swiper('.main-swiper', {
    mousewheel: true,
    effect: 'creative',
    creativeEffect: {
        prev: {
            // will set `translateZ(-400px)` on previous slides
            translate: [0, 0, -400],
        },
        next: {
            // will set `translateX(100%)` on next slides
            translate: ['100%', 0, 0],
        },
    },
})

// A Function That Adds Class Of Animate To Each Variables Init.
function addAnimationToTexts() {
    const titlesInVisibleSlide = document.querySelectorAll('.swiper-slide-visible .dv-title');
    const subTitlesInVisibleSlide = document.querySelectorAll('.swiper-slide-visible .dv-subtitle');
    const paragraphInVisibleSlide = document.querySelectorAll('.swiper-slide-visible .dv-paragraph');
    const labelHoldersInVisibleSlide = document.querySelectorAll('.swiper-slide-visible .dv-label-holder');
    const formsInVisibleSlide = document.querySelectorAll('.swiper-slide-visible form');
    const linksInVisibleSlide = document.querySelectorAll('.swiper-slide-visible .dv-link');
    const footersInVisibleSlide = document.querySelectorAll('.swiper-slide-visible footer');
    const nextAndPrevSlideButtonsInVisibleSlide = document.querySelectorAll('.swiper-slide-visible .dv-next-slide-btn, .swiper-slide-visible .dv-prev-slide-btn');

    titlesInVisibleSlide.forEach(item => item.classList.add('animate'))
    subTitlesInVisibleSlide.forEach(item => item.classList.add('animate'))
    paragraphInVisibleSlide.forEach(item => item.classList.add('animate'))
    labelHoldersInVisibleSlide.forEach(item => item.classList.add('animate'))
    formsInVisibleSlide.forEach(item => item.classList.add('animate'))
    linksInVisibleSlide.forEach(item => item.classList.add('animate'))
    footersInVisibleSlide.forEach(item => item.classList.add('animate'))
    nextAndPrevSlideButtonsInVisibleSlide.forEach(item => item.classList.add('animate'))
}

// Adding Event Listener On Load Of Window Which Calls  'addAnimationToTexts' Function
window.onload = () => addAnimationToTexts();

// Adding Event Listener On Changing Slides Of Main Slider Which Calls  'addAnimationToTexts' Function
mainSwiper.on('slideChange', () => addAnimationToTexts())

// Adding Event Listener On Each Next Slide Button That Listens To Click And Slides Main Swiper To Next Slide Of Current slide
nextSlideBtns.forEach(item => item.addEventListener('click', () => mainSwiper.slideNext()))

// Adding Event Listener On Each Previous Slide Button That Listens To Click And Slides Main Swiper To Previous Slide Of Current slide
PrevSlideBtns.forEach(item => item.addEventListener('click', () => mainSwiper.slidePrev()))

// Adding Event Listener On Each Button That Has Class Of 'dv-toggle-btn' That Listens To Click On Them
// And Then Gets Value Of Attribute Of 'data-toggle-target' And Saves It In Variables Called 'target'. Then
// Gets Target And Toggles 'show' Class To It ..
toggleBtns.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-toggle-target');
        document.querySelector(target).classList.toggle('show');
    })
})

// Adding Event Listener On Each Accordion Item That Listens To Click And First Removes 'active' Class Name From Active Accordion
// Then Toggles (Checks If Given Element Has Given Class Name, If It Has Then Removes It Otherwise Adds It) 'active' Class Name On Clicked Item.
accardionItem.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.dv-accardion-item.active').classList.remove('active');
        item.classList.toggle('active')
    })
})