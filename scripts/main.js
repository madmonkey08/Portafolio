const typed = new Typed('.typed', {
    strings: ['Web', 'Frontend', 'Backend', 'Fullstack', 'Colombiano'],
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html'
});

const menu = document.querySelector(".menu");
const menu_item = document.querySelectorAll(".menu-item");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
    menu.classList.toggle("navmenu_visible");
});

for (let i = 0; i < menu_item.length; i++) {
    menu_item[i].addEventListener("click", () => {
        menu.classList.remove('navmenu_visible');
    });
}

const btnSTvideo = document.getElementById("stmasters-video");
const btnCerrarST = document.getElementById("btn-cerrarst");
const stvideo = document.getElementById("stvideo");

btnSTvideo.addEventListener("click", () => {
    stvideo.classList.toggle("video-visible");
});

btnCerrarST.addEventListener("click", () => {
    stvideo.classList.remove("video-visible");
});





