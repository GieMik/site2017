require('./form')

window.onload = () => {
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.h-toggle');
    const body = document.querySelector('body');

    Array.from(document.querySelectorAll('.dropdown-inside')).map(item => {
        item.onmouseenter = () => { 
            item.classList.add('open')
        }
        item.onmouseleave = () => { 
            item.classList.remove('open')
        }
    })

    window.onscroll = () => {
        if (window.scrollY > header.clientHeight) {
            header.classList.add('sticky')
        } else if (window.scrollY < header.clientHeight) {
            header.classList.remove('sticky')
        }
    }

    menuToggle.onclick = () => {
        body.classList.toggle('mobile-menu-open');
    }
}
