// menu 

const menuBtn = document.querySelector('.menu-icon');
const headerNav = document.querySelector('.header-nav');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    headerNav.classList.toggle('active');
})

// main-image

const mainImage = document.querySelector('.main-image_big-item_pic');
const smallImages = document.querySelectorAll('.main-image_small-items_pic');

smallImages.forEach(img => {
    img.addEventListener('click', () => {
        mainImage.setAttribute('src', img.getAttribute('src'))
    })
})


// header-scroll 
let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        header.classList.add('hide');
    } else if (scrollPosition() < lastScroll && containHide()) {
        header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
})


// add/remove count
const counterAdd = document.querySelector('.counter-add');
const counterRem = document.querySelector('.counter-rem');
let amount = parseInt(document.querySelector('.counter-amount').innerText);

function declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

counterAdd.addEventListener('click', () => {
    document.querySelector('.counter-amount').innerText = amount += 1;
});

counterRem.addEventListener('click', () => {
    if (amount > 0) {
        document.querySelector('.counter-amount').innerText = amount -= 1;
    }
});

document.querySelector('.main-information_selected').addEventListener('click', () => {
    document.querySelector('.main-information_selected').classList.toggle('active');
    alert('Товар добавлен в избранное');
});

// add to cart
document.querySelector('.add-btn').addEventListener('click', () => {
    if (amount > 0) {
        alert(`Товар в количестве ${document.querySelector('.counter-amount').innerText} ${declOfNum(amount, ['единицы', 'единиц', 'единиц'])} добавлен в корзину`);
    } else {
        alert('Товар не выбран!')
    }
});

// email input

const emailInput = document.querySelector('.email');
const clearEmailBtn = document.querySelector('.clear-email');

clearEmailBtn.addEventListener('click', () => {
    console.log('click')
    emailInput.value = '';
})

// email validation

const subBtn = document.querySelector('.sub-btn');

const validateEmail = email => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) == false) {
        alert('Введите корректный e-mail');
        return false;
    } else {
        alert('e-mail принят');
    }
}

subBtn.addEventListener('click', () => validateEmail(emailInput.value))