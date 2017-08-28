import Vue from 'vue';

const inDevMode = process.env.NODE_ENV == 'development'

Vue.config.debug = inDevMode; 
Vue.config.devtools = inDevMode;

window.onload = function () {
    new Vue({
        el: '#header',
        data: {
            test: 'Testas'
        },
        created() {
            window.$Header = this;
        },
    });
}
