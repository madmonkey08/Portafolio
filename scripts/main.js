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

const btnvideo = document.querySelectorAll(".btn-video");
const btnCerrarVideo = document.getElementById("btn-cerrar");
const videoContainer = document.querySelector(".video-container");
const video = document.querySelector(".video");

for (let i = 0; i < btnvideo.length; i++) {
    btnvideo[i].addEventListener("click", () => {
        const id = btnvideo[i].getAttribute('id');
        if (id === 'stmasters-video') {
            video.src = "https://www.youtube.com/embed/aQ4L0vWUjdY";
        } else if (id === 'cellfin-video') {
            video.src = "";
        } else if (id === 'pandapos-video') {
            video.src = "https://www.youtube.com/embed/Xl2Are4jiuc";
        }

        videoContainer.classList.toggle("video-visible");
    });
}

btnCerrarVideo.addEventListener("click", () => {
    video.src = '';
    videoContainer.classList.remove("video-visible");
});





