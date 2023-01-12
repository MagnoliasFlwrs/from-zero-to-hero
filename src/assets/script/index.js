const header = document.querySelector("header")
const burgerMenu = document.querySelector('.burger-menu__icon');
const burgerWrap = document.querySelector('.burger-menu__wrapper');
const overlay = document.querySelector('.overlay');
const burgerLinks = document.querySelectorAll('.burger__navigation__item')
const scrollChange = 10

const add_class_on_scroll = () => header.classList.add("_onscroll")
const remove_class_on_scroll = () => header.classList.remove("_onscroll")

window.addEventListener('scroll', function() {
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }

})

overlay.addEventListener('click', () => {
    overlay.classList.remove('open');
});
if (burgerMenu) {
    burgerMenu.addEventListener('click' , (e) => {
    document.body.classList.toggle('_lock');
    burgerMenu.classList.toggle('_active');
    burgerWrap.classList.toggle('_active');
    overlay.classList.toggle('open');
        overlay.addEventListener('click', () => {
            burgerMenu.classList.remove('_active');
            burgerWrap.classList.remove('_active');
            overlay.classList.remove('open');
        });
    })
}

burgerLinks.forEach((link) => {
    link.addEventListener('click' , () => {
        burgerMenu.classList.remove('_active');
        burgerWrap.classList.remove('_active');
        overlay.classList.remove('open');
        document.body.classList.remove('_lock');
    })
})


const slideHandleClick = (btn) => {
    const activeSlide = document.querySelector('[data-active]')
    const allSlides = document.querySelectorAll('.slide')
    const slides = [...allSlides]
    const slideIndex = slides.indexOf(activeSlide)
    let newIndex = slideIndex + btn
    if (newIndex < 0) {
        newIndex=allSlides.length - 1
    }
    if (newIndex >= allSlides.length) {
        newIndex = 0
    }
    slides[newIndex].dataset.active = true
    delete activeSlide.dataset.active
}
const nextSliderBtn = document.querySelector('.next')
const prevSliderBtn = document.querySelector('.prev')
nextSliderBtn.addEventListener('click' , () => {
    slideHandleClick(1)
})
prevSliderBtn.addEventListener('click' , () => {
    slideHandleClick(-1)
})