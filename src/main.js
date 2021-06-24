import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueApexCharts from "vue3-apexcharts";
import VueSmoothScroll from 'vue3-smooth-scroll'
import VueFinalModal from 'vue-final-modal'
import vClickOutside from "click-outside-vue3"

createApp(App).
    use(store).
    use(router).
    use(vClickOutside).
    use(VueApexCharts).
    use(VueFinalModal()).
    use(VueSmoothScroll,
        {
            duration: 110,
            offset: -100,
            updateHistory: false,
            EasingFunctions: { linear: t => t, }
        }).
    mount('#app');
