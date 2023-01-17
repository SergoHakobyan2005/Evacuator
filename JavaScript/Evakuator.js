let nav2 = document.querySelectorAll('.navigation-all :nth-child(2)');
let visiablePrice = document.querySelector('.price_section');
let navPosition2 = visiablePrice.getBoundingClientRect().y;

function burgerMenu() {
    burgerOpen.classList.toggle('active-burger-menu');
    document.querySelector('header').classList.toggle('header-active');
    document.body.classList.toggle('body-header-active');
    burgerStick[0].classList.toggle('active-stick-1');
    burgerStick[1].classList.toggle('active-stick-2');
    burgerStick[2].classList.toggle('active-stick-3');
}

nav2.forEach(it => {
    it.addEventListener('click', function () {
        window.scroll(0, navPosition2);
        burgerMenu();
    })
})

let allImg = document.querySelectorAll('.sd');
let modal = document.querySelector('.modal');

allImg.forEach((item) => {
    item.onclick = () => {
        document.body.style.overflow = 'hidden';
        modal.classList.add('active_modal');
        let xz = item.cloneNode(true);
        modal.appendChild(xz);
        let ds = document.querySelector('.modal .sd');
        let z = document.createElement('div');
        z.classList.add('closeIco', 'fa-solid', 'fa-xmark');
        ds.appendChild(z);
        modal.onclick = (e) => {
            let x = e.composedPath().includes(ds);
            if (!x) {
                document.body.style.overflow = 'auto';
                modal.classList.remove('active_modal');
                modal.removeChild(xz);
            }
        }
        z.onclick = () => {
            document.body.style.overflow = 'auto';
            modal.classList.remove('active_modal');
            modal.removeChild(xz);
        }
    }
})

let callBtn = document.querySelector('.call');
let upBtn = document.querySelector('.up');

window.addEventListener('scroll', function () {
    if (document.body.getBoundingClientRect().y <= -350) {
        callBtn.classList.add('call-active');
        upBtn.classList.add('active-up-button');
    } else {
        callBtn.classList.remove('call-active');
        upBtn.classList.remove('active-up-button');
    }
})

upBtn.addEventListener('click', function () {
    window.scroll(0, 0);
})

let arrowDown = document.querySelector('.arrow-down');
let aboutUs = document.querySelector('.language-h2');
let home = document.querySelectorAll('.home');
let aboutUsPosition = aboutUs.getBoundingClientRect().y;

arrowDown.onclick = () => {
    window.scroll(0, aboutUsPosition - 30);
}

home.forEach(it => {
    it.onclick = () => {
        window.scroll(0, aboutUsPosition - 30);
        burgerMenu();
    }
})

let burger = document.querySelector('.burger');
let burgerOpen = document.querySelector('.burger-open-menu');
let burgerStick = document.querySelectorAll('.burger-stick');

burger.addEventListener('click', function () {
    burgerMenu();
})

let footerTitle = document.querySelector('.language-footer-title');
let contactUs = document.querySelectorAll('.contact-us');
let contactUsPosition = footerTitle.getBoundingClientRect().y;

contactUs.forEach(it => {
    it.onclick = () => {
        window.scroll(0, contactUsPosition);
        burgerMenu();
    }
})