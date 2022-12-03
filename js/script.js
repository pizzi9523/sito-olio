const hamburgerButtonOpen = document.querySelector(".hamburger-menu-button-open");
const hamburgerButtonClose = document.querySelector(".hamburger-menu-button-close");

const menuMobile = document.querySelector(".menu-mobile");

hamburgerButtonOpen.addEventListener('click', showMenu);
hamburgerButtonClose.addEventListener('click', hideMenu);




function showMenu() {
    console.log(menuMobile);
    menuMobile.style.height = '100vh';
    hamburgerButtonOpen.style.display = 'none';
    hamburgerButtonClose.style.display = 'block';
    console.log('click');

}

function hideMenu() {
    console.log(menuMobile);
    menuMobile.style.height = '0';
    hamburgerButtonOpen.style.display = 'block';
    hamburgerButtonClose.style.display = 'none';
    console.log('click');
}




