<template>
  <section class="section__space">
    <div class="container our-products">
      <div class="row">
        <div class="our-products-title">
          <h1>Our Products</h1>
        </div>
        <div
          v-for="(product, index) in products"
          :key="index"
          class="col-md-3 our-products-card">
          <img :src="product.image" alt="" class="img-fluid">
          <h1>{{ product.name }}</h1>
          <h2>{{ product.description }}</h2>
          <h3>{{ product.price }}</h3>
          <span>{{ product.originalPrice }}</span>
        </div>
      </div>
      <div class="shop-btn text-center">
        <router-link to="/shop" class="our-products-btn mt-20 mb-20">
          Show More
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          image: require('@/assets/img/our-products/1.jpg'),
          name: 'Syltherine',
          description: 'Stylish cafe chair',
          price: 'DH 2,500.00',
          originalPrice: 'DH 3,500.00'
        },
        {
          image: require('@/assets/img/our-products/2.jpg'),
          name: 'Leviosa',
          description: 'Modern dining chair',
          price: 'DH 1,500.00',
          originalPrice: 'DH 2,500.00'
        },
        {
          image: require('@/assets/img/our-products/3.jpg'),
          name: 'Luxe',
          description: 'Luxury office chair',
          price: 'DH 4,500.00',
          originalPrice: 'DH 6,500.00'
        },
        {
          image: require('@/assets/img/our-products/4.jpg'),
          name: 'Ergon',
          description: 'Ergonomic work chair',
          price: 'DH 3,000.00',
          originalPrice: 'DH 4,000.00'
        },
        {
          image: require('@/assets/img/our-products/5.jpg'),
          name: 'Aura',
          description: 'Elegant lounge chair',
          price: 'DH 3,800.00',
          originalPrice: 'DH 5,000.00'
        },
        {
          image: require('@/assets/img/our-products/6.jpg'),
          name: 'Orb',
          description: 'Minimalist accent chair',
          price: 'DH 2,200.00',
          originalPrice: 'DH 3,200.00'
        },
        {
          image: require('@/assets/img/our-products/7.jpg'),
          name: 'Silvan',
          description: 'Wooden dining chair',
          price: 'DH 1,800.00',
          originalPrice: 'DH 2,800.00'
        },
        {
          image: require('@/assets/img/our-products/8.jpg'),
          name: 'Verve',
          description: 'Versatile armchair',
          price: 'DH 2,700.00',
          originalPrice: 'DH 3,700.00'
        }
      ]
    };
  }
};
</script>
