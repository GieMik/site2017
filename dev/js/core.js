require('./form')

window.onload = () => {

    Array.from(document.querySelectorAll('.dropdown-inside')).map(item => {
        item.onmouseenter = () => { 
            item.classList.add('open')
        }
        item.onmouseleave = () => { 
            item.classList.remove('open')
        }
    })

    const header = document.querySelector('header');

    window.onscroll = () => {
        if (window.scrollY > header.clientHeight) {
            header.classList.add('sticky')
        } else if (window.scrollY < header.clientHeight) {
            header.classList.remove('sticky')
        }
    }

    const menuToggle = document.querySelector('.h-toggle');

    const body = document.querySelector('body');

    menuToggle.onclick = () => {
        body.classList.toggle('mobile-menu-open');
    }
}
