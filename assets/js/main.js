var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

const tabsImplemented1 = $$('.implemented-project-1 .implemented-nav__item')
const contents = $$('.implemented-project-1 .implemented-project__content')

const tabsImplemented2 = $$('.implemented-project-2 .implemented-nav__item')
const contents2 = $$('.implemented-project-2 .implemented-project__content')

tabsImplemented1.forEach(function (tab, index) {
  const content = contents[index]
  tab.onclick = function () {
    $(
      '.implemented-project-1 .implemented-nav__item.implemented-nav-item--active'
    ).classList.remove('implemented-nav-item--active')
    $(
      '.implemented-project-1 .implemented-project__content.active'
    ).classList.remove('active')

    content.classList.add('active')
    this.classList.add('implemented-nav-item--active')
  }
})

tabsImplemented2.forEach(function (tab, index) {
  const content = contents2[index]
  tab.onclick = function () {
    $(
      '.implemented-project-2 .implemented-nav__item.implemented-nav-item--active'
    ).classList.remove('implemented-nav-item--active')
    $(
      '.implemented-project-2 .implemented-project__content.active'
    ).classList.remove('active')

    content.classList.add('active')
    this.classList.add('implemented-nav-item--active')
  }
})

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
  slide.backgroundRepeat = 'no-repeat'

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
  slide.backgroundRepeat = 'no-repeat'
  $(
    '.working-space-nav .derection-button.derection-button--active'
  ).classList.remove('derection-button--active')
  derectionButton[slideIndex].classList.add('derection-button--active')
}
