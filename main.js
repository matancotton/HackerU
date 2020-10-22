var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight) &&
		distance.right <= (window.innerWidth)
	);
};


const toggleButton = document.getElementById('toggle-button')
const firstToggle = document.getElementById('first__toggle')
const secondToggle = document.getElementById('second__toggle')
const thirdToggle = document.getElementById('third__toggle')
const mobileMenu = document.getElementById('mobile-dropdown')
const mainHeader = document.getElementsByClassName('header_main')[0]
toggleButton.addEventListener('click', ()=>{
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

const mobileItems = document.getElementsByClassName('mobile-dropdown__item')
for (let i=0; i<mobileItems.length; i++){
    mobileItems[i].addEventListener('click',()=>{
        const mobileItemMenu = mobileItems[i].children[1]
        if (mobileItemMenu.classList.contains('open')){
            mobileItemMenu.classList.remove('open')
        }
        else {
            mobileItemMenu.classList.add('open')
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





