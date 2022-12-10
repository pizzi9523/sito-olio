const hamburgerButtonOpen = document.querySelector(".hamburger-menu-button-open");
const hamburgerButtonClose = document.querySelector(".hamburger-menu-button-close");
const orderButton = document.querySelector(".order_button");
const navLink = document.querySelectorAll(".menu-mobile-link a");

console.log(navLink);

const menuMobile = document.querySelector(".menu-mobile");

hamburgerButtonOpen.addEventListener('click', showMenu);
hamburgerButtonClose.addEventListener('click', hideMenu);
orderButton.addEventListener('mousedown', clickButton);
orderButton.addEventListener('mouseup', leaveButton);


navLink.forEach(element => {
    element.addEventListener('click', hideMenu)
})


function showMenu() {
    // console.log(menuMobile);
    menuMobile.style.height = '100vh';
    hamburgerButtonOpen.style.display = 'none';
    hamburgerButtonClose.style.display = 'block';
    // console.log('click');

}

function hideMenu() {
    // console.log(menuMobile);
    menuMobile.style.height = '0';
    hamburgerButtonOpen.style.display = 'block';
    hamburgerButtonClose.style.display = 'none';
    // console.log('click');
}

function clickButton() {
    orderButton.style.filter = 'drop-shadow(0px 0px 7px white)';
    orderButton.style.color = 'white';
    orderButton.style.borderColor = 'white';
}

function leaveButton() {
    orderButton.style.filter = 'drop-shadow(0px 0px 7px black)'
    orderButton.style.color = 'black';
    orderButton.style.borderColor = 'black';
}




