const header = document.querySelector('.js-header')

if(header) {
  const burger = header.querySelector('.js-burger')
  const nav = header.querySelector('.js-nav')
  const btnsSubMenuTop = nav.querySelectorAll('.js-open-sub-nav.nav__link')
  const btnsSubMenuBottom = nav.querySelectorAll('.js-open-sub-nav.nav__sub-link')
  const btnsSubMenu = nav.querySelectorAll('.js-open-sub-nav')

  const onCloseSubMenu = () => {
    btnsSubMenu.forEach(btnSubMenu => {
      btnSubMenu.classList.remove('_opened')
      btnSubMenu.nextElementSibling.classList.remove('_opened')
    })
  }

  const onCloseSubMenuBottom = () => {
    btnsSubMenuBottom.forEach(itemBtnBottom => {
      if(itemBtnBottom.closest('.js-open-sub-nav').classList.contains('_opened')) {
        itemBtnBottom.classList.remove('_opened')
        itemBtnBottom.nextElementSibling.classList.remove('_opened')
      }

    })
  }

  const onCloseSubMenuTop = () => {
    btnsSubMenuTop.forEach(itemBtnTop => {
      itemBtnTop.classList.remove('_opened')
      itemBtnTop.nextElementSibling.classList.remove('_opened')
    })
  }

  const onOpenMenu = (itemBtn) => {
      itemBtn.classList.add('_opened')
      itemBtn.nextElementSibling.classList.add('_opened')
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

  btnsSubMenuTop.forEach(btnSubMenu => {
    btnSubMenu.addEventListener('touchend', (e) => {
      e.preventDefault()
      onCloseSubMenuTop()
      onOpenMenu(e.target.closest('.js-open-sub-nav'))
    })
  })

  btnsSubMenuBottom.forEach(btnSubMenu => {
    btnSubMenu.addEventListener('touchend', (e) => {
      e.preventDefault()
      onCloseSubMenuBottom()
      onOpenMenu(e.target.closest('.js-open-sub-nav'))
    })
  })

  document.addEventListener('touchend', (e) => {
    if(!e.target.closest('.js-nav')) {
      onCloseSubMenu()
    }
  })
}
