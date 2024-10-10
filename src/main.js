import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/css/main.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

import BootstrapVue3 from 'bootstrap-vue-3';

import { Swiper as SwiperComponent, SwiperSlide as SwiperSlideComponent } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.component('SwiperComponent', SwiperComponent);
app.component('SwiperSlideComponent', SwiperSlideComponent);

app.use(BootstrapVue3);
app.use(router);
app.use(store);

app.mount('#app');
