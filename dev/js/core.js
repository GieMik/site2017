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
            dropdownOpen2: false,
            mobileMenuOpen: false
        },
        created() {
            window.$Header = this;
        },
        computed: {
            headerClass() {
                let classes = [];

                if ($Header.sticky) {
                    classes.push('sticky');
                }

                if ($Header.mobileMenuOpen) {
                    classes.push('mobile-menu-open');
                }

                return classes;
            }
        },
        mounted() {
            $Header.height = document.getElementsByTagName('header')[0].clientHeight;
            window.addEventListener('scroll', $Header.handleScroll);
        },
        methods: {
            handleScroll() {
                if (window.scrollY > $Header.height) {
                    $Header.sticky = true;
                } else if (window.scrollY < $Header.height) {
                    $Header.sticky = false;
                }
            }
        }
    });
}
