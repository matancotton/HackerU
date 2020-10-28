

var isInViewport = function (elem) {
    var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.right >= 0 &&
		distance.bottom <= (window.innerHeight) &&
		distance.left <= (window.innerWidth)
	);
};
const xModal = document.getElementById('x_modal')
xModal.addEventListener('click',()=>{
    document.getElementById('backdrop').classList.add('close-modal')
    document.getElementById('modal').classList.add('close-modal')
    setTimeout(()=>{
        document.getElementById('backdrop').style.display = "none";
        document.getElementById('modal').style.display = "none";
    },200)
})

const toggleButton = document.getElementById('toggle-button')
const firstToggle = document.getElementById('first__toggle')
const secondToggle = document.getElementById('second__toggle')
const thirdToggle = document.getElementById('third__toggle')
const mobileMenu = document.getElementById('mobile-dropdown')
const mainHeader = document.getElementsByClassName('header_main')[0]
toggleButton.addEventListener('click', ()=>{
    mainHeader.classList.remove('main-nav__height')
    mainHeader.classList.remove('closeMainHeader')
    mainHeader.classList.add('openedMainHeader')
    if (firstToggle.classList[1]!=='rotate45'){
        firstToggle.classList.add('rotate45')
        thirdToggle.classList.add('rotate-45')
        secondToggle.classList.add('slide-middletoggle-bar')
        mobileMenu.classList.add('open')
        
    }
    else{
        firstToggle.classList.remove('rotate45')
        thirdToggle.classList.remove('rotate-45')
        secondToggle.classList.remove('slide-middletoggle-bar')
        mobileMenu.classList.remove('open')
        mainHeader.classList.remove('openedMainHeader')
        mainHeader.classList.add('closeMainHeader')
    }

});

window.addEventListener('resize',()=>{
    if (window.innerWidth > 1100){
        mobileMenu.classList.remove('open')
        mainHeader.classList.remove('main-nav__height')
        mainHeader.classList.add('closeMainHeader')
        firstToggle.classList.remove('rotate45')
        thirdToggle.classList.remove('rotate-45')
        secondToggle.classList.remove('slide-middletoggle-bar')
    }
})

const mobileItems = document.getElementsByClassName('mobile-dropdown__item')
for (let i=0; i<mobileItems.length; i++){
    mobileItems[i].addEventListener('click',()=>{
        const mobileItemMenu = mobileItems[i].children[1]
        if (mobileItemMenu.classList.contains('open')){
            mobileItemMenu.classList.remove('open')
        }
        else {
            mobileItemMenu.classList.add('open')
            mainHeader.classList.add('main-nav__height')
        }
    })
}

const elements = document.getElementsByClassName('fadeInUp')
for (let element of elements){
    if (isInViewport(element))
            element.classList.add('align-up')
    window.addEventListener('scroll',()=>{
        if (isInViewport(element))
            element.classList.add('align-up')
    })
}

const elements2 = document.getElementsByClassName('bounceInRight')
const parent = document.getElementsByClassName('our-process')[0]
window.addEventListener('scroll',()=>{
    if (isInViewport(parent)){
        for (let i=0; i<elements2.length; i++){
            elements2[i].classList.add(`right-animate_${i+1}`)
        }
    }
})


const desktopItems = document.getElementsByClassName('dropdown_item')
for (let i=0; i<desktopItems.length; i++){
    desktopItems[i].addEventListener('click',()=>{
        if (desktopItems[i].classList.contains('underline')){
            desktopItems[i].classList.remove('underline')
        }
        const desktopdropdownMenu = desktopItems[i].children[1]
        if (desktopdropdownMenu.classList.contains('open-desktop-dropdown')){
            desktopdropdownMenu.classList.remove('open-desktop-dropdown')
            return
        }
        for (let item of desktopItems){
            item.children[1].classList.remove('open-desktop-dropdown')
            item.classList.remove('underline')

        }
        desktopdropdownMenu.classList.add('open-desktop-dropdown')
        desktopItems[i].classList.add('underline')
    })
    
}





