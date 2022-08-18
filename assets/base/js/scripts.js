// Variables
const toggleBtns = document.querySelectorAll('.dv-toggle-btn');

// Initializing Main Swiper Of Pages With MouseWheel Option
const MainSwiper = new Swiper('.main-swiper', {mousewheel: true,})

// Adding Event Listener On Each Button That Has Class Of 'dv-toggle-btn' That Listens To Click On Them
// And Then Gets Value Of Attribute Of 'data-toggle-target' And Saves It In Variables Called 'target'. Then
// Gets Target And Toggles 'show' Class To It ..
toggleBtns.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-toggle-target');
        document.querySelector(target).classList.toggle('show');
    })
})