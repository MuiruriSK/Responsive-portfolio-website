let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySeleqtor('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offset.Top - 150;
        let height = sec.getAttribute;
    })
}

menuIcon.onclick = ()