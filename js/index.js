const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', function() {
  document.body.classList.toggle('nav-open')
})

navLinks.forEach((n) => {
  n.addEventListener('click', function() {
    document.body.classList.remove('nav-open')
  })
})
