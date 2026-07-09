/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== DARK / LIGHT THEME ===============*/
// Theme Button
const themeButton = document.getElementById('theme-button')

// Theme Class
const darkTheme = 'dark-theme'

// Icon Class
const iconTheme = 'ri-sun-line'

/*========== PREVIOUSLY SAVED THEME ==========*/
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

/*========== GET CURRENT THEME ==========*/
const getCurrentTheme = () =>
   document.body.classList.contains(darkTheme)
      ? 'dark'
      : 'light'

/*========== GET CURRENT ICON ==========*/
const getCurrentIcon = () =>
   themeButton.querySelector('i').classList.contains(iconTheme)
      ? 'ri-sun-line'
      : 'ri-moon-line'

/*========== APPLY SAVED THEME ==========*/
if(selectedTheme){

   document.body.classList[
      selectedTheme === 'dark'
      ? 'add'
      : 'remove'
   ](darkTheme)

   themeButton.innerHTML =
      selectedIcon === 'ri-sun-line'
      ? '<i class="ri-sun-line"></i>'
      : '<i class="ri-moon-line"></i>'
}

/*========== THEME CHANGE EVENT ==========*/
themeButton.addEventListener('click', () => {

   // Change Theme
   document.body.classList.toggle(darkTheme)

   // Get Icon
   const icon = themeButton.querySelector('i')

   // Change Icon
   if(document.body.classList.contains(darkTheme)){
      icon.classList.replace(
         'ri-moon-line',
         'ri-sun-line'
      )
   }
   else{
      icon.classList.replace(
         'ri-sun-line',
         'ri-moon-line'
      )
   }

   // Save Theme
   localStorage.setItem(
      'selected-theme',
      getCurrentTheme()
   )

   // Save Icon
   localStorage.setItem(
      'selected-icon',
      getCurrentIcon()
   )

})

/*=============== HOME TEXT CIRCULAR ===============*/
/*=============== HOME TEXT CIRCULAR ===============*/
const homeText = document.getElementById('home-text'),
      letters = homeText.textContent.trim().split(''), // Converts text into an array of chara
      angleStep = 360 / letters.length // Angle for each character; length counts the number o

homeText.textContent = '' // Clears the original content

// Iterates through each character
letters.forEach((char, i) => {
    const span = document.createElement('span') // Creates a <span> for each letter
    span.textContent = char // Inserts each character into the span
    span.style.transform = `rotate(${i * angleStep}deg)` // Rotates each letter based on its in
    homeText.appendChild(span) // Appends the span to the main container
})

/*=============== HOME TYPED JS ===============*/
const typedHome = new Typed('#home-typed', {
   strings: ['Freelancer', 'Web Developer', 'SEO Specialist'], // Insert professions
   typeSpeed: 60,
   backSpeed: 30,
   backDelay: 2000,
   loop: true,
})

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')

    // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
    this.scrollY >= 50
        ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER WORK ===============*/ 


/*=============== SERVICES ACCORDION ===============*/ 


/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/ 


/*=============== CONTACT EMAIL JS ===============*/ 
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = async (e) => {
    // Prevent the page from reloading
    e.preventDefault()

    try {
        // serviceID - templateID - #form - publicKey
       // serviceID - templateID - #form - publicKey
await emailjs.sendForm(
    'service_8ii265v',
    'template_85g6ftk',
    '#contact-form',
    'VQaq6RG_bXgUd7BNm'
)
// Show sent message
contactMessage.textContent = 'Message sent successfully ✅'

// Clear input fields
contactForm.reset()

} catch (error) {
    // Show error message
    contactMessage.textContent = 'Message not sent (service error) ❌'

} finally {
    // Remove message after five seconds
    setTimeout(() => contactMessage.textContent = '', 5000)
}

}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== CUSTOM CURSOR ===============*/
/*=============== CUSTOM CURSOR ===============*/
const cursor = document.querySelector('.cursor')
let mouseX = 0, mouseY = 0 // Store mouse position

const cursorMove = () => {
    cursor.style.left = `${mouseX}px` // Horizontal position (X-axis)
    cursor.style.top = `${mouseY}px` // Vertical position (Y-axis)
    cursor.style.transform = 'translate(-50%, -50%)' // Centers the element at the pointer

    // Repeats the function with each movement
    requestAnimationFrame(cursorMove)
}

// Detects mouse movement and updates positions
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX // Save position X
    mouseY = e.clientY
})

cursorMove()
/* Hide custom cursor on links */
const a = document.querySelectorAll('a')

a.forEach(item => {
    // Mouse enters the link and hides the cursor
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hide-cursor')
    })

    // Mouse exits the link and shows the cursor
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hide-cursor')
    })
})

/*=============== SCROLLREVEAL ANIMATION ===============*/
/*=============== SCROLLREVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1200,
    delay: 300,
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    // reset: true, // Animations repeat
})

sr.reveal('.home__subtitle')
sr.reveal('.home__title', {delay: 600})
sr.reveal('.home__description', {delay: 900})
sr.reveal('.home__box-1', {delay: 1200, rotate: {z: -20}})
sr.reveal('.home__box-2', {delay: 1300, rotate: {z: -30}})
sr.reveal('.home__box-3', {delay: 1400, rotate: {z: -40}})
sr.reveal('.home__img', {delay: 1700, distance: '-60px'})
sr.reveal('.home__circle', {delay: 2000, distance: '-100px'})