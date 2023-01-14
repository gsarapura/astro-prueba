const hamburger = document.querySelector('.hamburger') as HTMLDivElement;
const navLink = document.querySelector('.nav-links') as HTMLSpanElement;

hamburger.addEventListener('click', () => {
    navLink.classList.toggle('expanded');
});

export {};