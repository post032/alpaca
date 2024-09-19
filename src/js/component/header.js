const header = document.querySelector('.js-header')

if(header) {
  const burger = header.querySelector('.js-burger')
  const nav = header.querySelector('.js-nav')
  const btnsSubMenu = nav.querySelectorAll('.js-open-sub-nav')

  const onCloseSubMenu = () => {
    btnsSubMenu.forEach(btnSubMenu => {
      btnSubMenu.classList.remove('_opened')
      btnSubMenu.nextElementSibling.classList.remove('_opened')
    })
  }

  burger.addEventListener('click', (e) => {
    e.preventDefault()
    burger.classList.toggle('_opened')
    nav.classList.toggle('_opened')
    document.body.classList.toggle('_overlay')
    if(!nav.classList.contains('_opened')) {
      onCloseSubMenu()
    }
  })

  btnsSubMenu.forEach(btnSubMenu => {
    btnSubMenu.addEventListener('click', (e) => {
      e.preventDefault()
      btnSubMenu.classList.toggle('_opened')
      btnSubMenu.nextElementSibling.classList.toggle('_opened')
    })
  })
}
