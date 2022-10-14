var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

const tabsImplemented1 = $$('.implemented-project-1 .implemented-nav__item')
const contents = $$('.implemented-project-1 .implemented-project__content')

const tabsImplemented2 = $$('.implemented-project-2 .implemented-nav__item')
const contents2 = $$('.implemented-project-2 .implemented-project__content')

var tab = function (tabElement, contents, selector1, seletor2, active) {
  tabElement.forEach(function (tab, index) {
    const content = contents[index]
    tab.onclick = function () {
      $(selector1).classList.remove(active)
      $(seletor2).classList.remove('active')

      content.classList.add('active')
      this.classList.add(active)
    }
  })
}

tab(
  tabsImplemented1,
  contents,
  '.implemented-project-1 .implemented-nav__item.implemented-nav-item--active',
  '.implemented-project-1 .implemented-project__content.active',
  'implemented-nav-item--active'
)
tab(
  $$('.overview-project .implemented-nav__item'),
  $$('.overview-project .implemented-project__content'),
  '.overview-project .implemented-nav__item.implemented-nav-item--active',
  '.overview-project .implemented-project__content.active',
  'implemented-nav-item--active'
)
tab(
  tabsImplemented2,
  contents2,
  '.implemented-project-2 .implemented-nav__item.implemented-nav-item--active',
  '.implemented-project-2 .implemented-project__content.active',
  'implemented-nav-item--active'
)

tab(
  $$(
    '.recruit__career-orientation .implemented-nav__list.white-color .implemented-nav__item'
  ),
  $$('.recruit__career-orientation .implemented-project__content'),
  '.recruit__career-orientation .implemented-nav__item.implemented-nav-item--active',
  '.recruit__career-orientation .implemented-project__content.active',
  'implemented-nav-item--active'
)

tab(
  $$(
    '.recruit__career-orientation.people-bg .implemented-nav__list.black-color .implemented-nav__item'
  ),
  $$('.recruit__career-orientation.people-bg .implemented-project__content'),
  '.recruit__career-orientation.people-bg .implemented-nav__item.implemented-nav-item--active',
  '.recruit__career-orientation.people-bg .implemented-project__content.active',
  'implemented-nav-item--active'
)
tab(
  $$('.news-content-heading__item'),
  $$('.implemented-project__content'),
  '.news-content-heading__item.news-content-heading__item--active',
  '.implemented-project__content.active',
  'news-content-heading__item--active'
)
// console.log($$('.implemented-nav__list.white-color .implemented-nav__item'))

var slideIndex = 0
var memberIndex = 0

var background1 = [
  './assets/img/03.png',
  './assets/img/02.jpg',
  './assets/img/01.jpg',
]

var background2 = [
  './assets/img/15.png',
  './assets/img/02.jpg',
  './assets/img/01.jpg',
]

var background3 = [
  './assets/img/image-8.png',
  './assets/img/02.jpg',
  './assets/img/01.jpg',
]

var background4 = [
  './assets/img/image.png',
  './assets/img/02.jpg',
  './assets/img/01.jpg',
]

var aboutUs = [
  {
    name: 'John Fehily',
    position: 'Director',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta amet dolore quae ab dignissimos blanditiis tenetur soluta tempore sunt, veniam sequi excepturi totam minima hic facere possimus atque, tempora nemo!',
    avt: './assets/img/member.png',
  },
  {
    name: 'Steve Jobs',
    position: 'Manager',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta amet dolore quae ab dignissimos blanditiis tenetur soluta tempore sunt, veniam sequi excepturi totam minima hic facere possimus atque, tempora nemo!',
    avt: './assets/img/member2.jpg',
  },
  {
    name: 'Mark Zuckerberg',
    position: 'Marketing',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta amet dolore quae ab dignissimos blanditiis tenetur soluta tempore sunt, veniam sequi excepturi totam minima hic facere possimus atque, tempora nemo!',
    avt: './assets/img/member3.jpg',
  },
]

/**
 *
 * 1. vi tri slide
 * 2. derection-button
 * 3. slide index
 * 4. index
 * 5. selector
 * 6. active
 * 7. array
 */

// function slide(
//   element,
//   derection,
//   slideIndex,
//   index,
//   selector,
//   active,
//   ...array
// ) {
//   // const slide = $(element)
// }

// var slide = $()

function slideMember(index) {
  var derectionButton = $$('.about-navigation__button')
  var avt = $('.about-img-member')
  var name = $('.about-heading-member-name')
  var position = $('.about-member__position')
  var info = $('.about-member__info')
  memberIndex += index
  if (memberIndex > 2) {
    memberIndex = 0
  } else if (memberIndex < 0) {
    memberIndex = 2
  }
  avt.src = aboutUs[memberIndex].avt
  name.textContent = aboutUs[memberIndex].name
  position.textContent = aboutUs[memberIndex].position
  info.textContent = aboutUs[memberIndex].info

  $('.about-navigation__button.derection-button--active').classList.remove(
    'derection-button--active'
  )
  derectionButton[memberIndex].classList.add('derection-button--active')
}

function slideBackground(index) {
  const slide = $('.slide')
  var derectionButton = $$('.slide .derection-button')
  slideIndex += index
  if (slideIndex > 2) {
    slideIndex = 0
  } else if (slideIndex < 0) {
    slideIndex = 2
  }
  slide.style.backgroundImage = `linear-gradient(rgba(38,38,38,0.28), rgba(38,38,38,0.28)), url(${background1[slideIndex]})`
  slide.style.backgroundPosition = 'center'
  slide.style.backgroundSize = 'cover'
  slide.style.backgroundRepeat = 'no-repeat'

  $('.slide .derection-button.derection-button--active').classList.remove(
    'derection-button--active'
  )
  derectionButton[slideIndex].classList.add('derection-button--active')
}

function slideBackground2(index) {
  const slide = $('.working-space')
  var derectionButton = $$('.working-space-nav .derection-button')
  slideIndex += index
  if (slideIndex > 2) {
    slideIndex = 0
  } else if (slideIndex < 0) {
    slideIndex = 2
  }
  slide.style.backgroundImage = `linear-gradient(rgba(38, 38, 38, 0.5), rgba(38, 38, 38, 0.5)), url(${background2[slideIndex]})`
  slide.style.backgroundPosition = 'top center'
  slide.style.backgroundSize = 'cover'
  slide.style.backgroundRepeat = 'no-repeat'
  $(
    '.working-space-nav .derection-button.derection-button--active'
  ).classList.remove('derection-button--active')
  derectionButton[slideIndex].classList.add('derection-button--active')
}

function slideImg(index, background) {
  var slide = $('.slide-img')
  slideIndex += index

  var derectionButton = $$('.derection-button')
  if (slideIndex > 2) {
    slideIndex = 0
  } else if (slideIndex < 0) {
    slideIndex = 2
  }

  slide.style.backgroundImage = `linear-gradient(to right,
    rgba(40, 40, 40, 1),
    rgba(58, 58, 57, 0)),
   url(${background[slideIndex]})`
  slide.style.backgroundPosition = 'top center'
  slide.style.backgroundSize = 'cover'
  slide.style.backgroundRepeat = 'no-repeat'
  $('.derection-button.derection-button--active').classList.remove(
    'derection-button--active'
  )
  derectionButton[slideIndex].classList.add('derection-button--active')
}
menuMobile()
var isOpened = false

function menuMobile() {
  var menuOpen = $('.menu-mobile')
  var menuClose = $('.menu-mobile-close')
  var overLay = $('.menu-overlay')
  menuOpen.onclick = function () {
    if (!isOpened) {
      isOpened = true
      overLay.classList.add('active')
    }
  }
  menuClose.onclick = function () {
    isOpened = false
    overLay.classList.remove('active')
  }
}
submenuMobile()

function submenuMobile() {
  var isOpened = false
  var submenuItemIcon = $$('.menu-mobile-item i')
  var submenuItem = $$('.menu-mobile-sub')
  var icons = $$('.menu-mobile-item i')
  submenuItemIcon.forEach(function (item, index) {
    item.onclick = function () {
      if ($('.menu-mobile-sub.active') != null) {
        $('.menu-mobile-sub.active').classList.remove('active')
      }
      if (isOpened) {
        isOpened = false
        icons[index].style.transform = 'rotate(0deg)'
      } else {
        isOpened = true
        submenuItem[index].classList.add('active')
        icons[index].style.transform = 'rotate(180deg)'
      }
      console.log(isOpened)
    }
  })
}

var contentsNew = $$('page')

$$('.navigation-desktop .news-navigation__button').forEach(function (
  item,
  index
) {
  item.onclick = function (item) {
    $(
      '.navigation-desktop .news-navigation__button.news-navigation__button--active'
    ).classList.remove('news-navigation__button--active')

    $$('.navigation-desktop .news-navigation__button')[index].classList.add(
      'news-navigation__button--active'
    )
  }
})
$$('.navigation-mobile .news-navigation__button').forEach(function (
  item,
  index
) {
  item.onclick = function (item) {
    $(
      '.navigation-mobile .news-navigation__button.news-navigation__button--active'
    ).classList.remove('news-navigation__button--active')

    $$('.navigation-mobile .news-navigation__button')[index].classList.add(
      'news-navigation__button--active'
    )
  }
})

$('.slide-content__arrow-down').onclick = function () {
  $("#more-info").scrollIntoView({
    block: 'center',
  })
}
