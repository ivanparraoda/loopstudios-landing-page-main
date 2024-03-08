document.querySelector('.menu-b').addEventListener('click', () => {
  const menu = document.querySelector('.header')
  const imgShift = document.querySelector('.menu-b')

  if (menu.classList.contains('show')) {
    // Si el menú está mostrándose, cambia el ícono a hamburguesa
    imgShift.src = './images/icon-hamburger.svg'
  } else {
    // Si el menú no está mostrándose, cambia el ícono a cierre
    imgShift.src = './images/icon-close.svg'
  }

  menu.classList.toggle('show')
})
