var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

const tabs = $$('.header-navbar__item')
const contents = $$('.tab__item')
console.log(tabs, contents)

tabs.forEach( index => {
    
});

tabs.forEach(function(tab, index){
    const content = contents[index]
    tab.onclick = function(){
        $('.header-navbar__item.header-navbar-item--active').classList.remove('header-navbar-item--active') 
        $('.tab__item.active').classList.remove('active')
        
        this.classList.add('header-navbar-item--active')
        content.classList.add('active')
    }
})
