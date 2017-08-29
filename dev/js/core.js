import Vue from 'vue';

const inDevMode = process.env.NODE_ENV == 'development'

Vue.config.debug = inDevMode; 
Vue.config.devtools = inDevMode;

window.onload = function () {
    new Vue({
        el: '#header',
        data: {
            height: null,
            sticky: false,
            dropdownOpen: false,
            dropdownOpen1: false,
            dropdownOpen2: false
        },
        created() {
            window.$Header = this;
        },
        mounted() {
            $Header.height = document.getElementsByTagName('header')[0].clientHeight;
            window.addEventListener('scroll', $Header.handleScroll);
        },
        methods: {
            handleScroll() {
                console.log(window.scrollY, $Header.height)
                if (window.scrollY > $Header.height) {
                    $Header.sticky = true;
                } else if (window.scrollY < $Header.height) {
                    $Header.sticky = false;
                }
            }
        }
    });
}
