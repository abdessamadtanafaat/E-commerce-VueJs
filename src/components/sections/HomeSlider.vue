<template>
  <div class="container-fluid">
    <div class="col-md-12 main-slider">
      <SwiperComponent
          :slides-per-view="1"
          :space-between="10"
          :loop="true"
          :autoplay="{ delay: 24000, disableOnInteraction: false }"
          :mousewheel="true"
          :modules="[Autoplay, Navigation]"
      >
        <SwiperSlideComponent v-for="(slide, index) in slides" :key="index">
          <img :src="slide.image" :alt="slide.alt" class="main-swiper-slide-img" />
          <div class="main-cta-box">
            <h1>{{ slide.title }}</h1>
            <h2 v-html="slide.subtitle"></h2>
            <p>{{ slide.description }}</p>
            <a href="#" class="slider-btn">Shop Now</a>
          </div>
        </SwiperSlideComponent>
      </SwiperComponent>
    </div>
  </div>
</template>

<script>
import { Autoplay, Navigation } from 'swiper/modules';

export default {
  data() {
    return {
      slides: [
        {
          image: require('@/assets/img/home-slider/1.jpg'),
          alt: 'Slide 1',
          title: 'Welcome to Agadir',
          subtitle: 'Discover the Best of <br> Moroccan Craftsmanship',
          description: 'Explore our unique collection of handcrafted products inspired by the rich culture of Morocco.'
        },
        {
          image: require('@/assets/img/home-slider/2.jpg'),
          alt: 'Slide 2',
          title: 'Experience Moroccan Elegance',
          subtitle: 'Enhance Your Space <br> with Traditional Designs',
          description: 'From exquisite furniture to beautiful decor, find the perfect pieces for your home.'
        }
      ]
    };
  },
  setup() {
    return {
      Autoplay,
      Navigation
    };
  }
};
</script>
