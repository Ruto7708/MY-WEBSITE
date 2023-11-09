const header = document.queryselector("header");

window.addEventListener("scroll", function () {
    header.classlist.toggle("sticky", window.scrolly > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = doccument.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};
