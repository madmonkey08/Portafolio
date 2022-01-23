
window.onscroll = () => {
    let scrollY = window.scrollY;
    if (scrollY > 0) {
        document.getElementById('navbar').style.background = '#14141ae1';
    } else {
        document.getElementById('navbar').style.background = 'transparent';
    }
}