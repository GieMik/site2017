
// Ignite the script when window is ready 
window.onload = () => {
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.h-toggle');
    const body = document.querySelector('body');

    // Add event listener for every dropdown button - adds '.open' class for item
    // CSS doest the rest
    Array.from(document.querySelectorAll('.dropdown-inside')).map(item => {
        item.onmouseenter = () => { 
            item.classList.add('open')
        }
        item.onmouseleave = () => { 
            item.classList.remove('open')
        }
    })

    // Adds event listener when scrolling in browser window 
    window.onscroll = () => {
        if (window.scrollY > header.clientHeight) {
            header.classList.add('sticky')
        } else if (window.scrollY < header.clientHeight) {
            header.classList.remove('sticky')
        }
    }

    // Adds event listener for toggling mobile menu
    menuToggle.onclick = () => {
        // Toggles open class on body
        body.classList.toggle('mobile-menu-open');
    }

    // Get the script from form.js
    require('./form')
}
