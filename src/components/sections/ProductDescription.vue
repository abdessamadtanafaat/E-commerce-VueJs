<template>
  <section class="Product__Description section__space">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="product-description">
            <h2>Description</h2>
            <h2>Additional Information</h2>
            <h2>Reviews [5]</h2>
          </div>
          <div class="product-content">
            <p>Agadir, a vibrant coastal city in Morocco, is renowned for its stunning beaches and rich cultural heritage. Visitors flock to its sandy shores and enjoy a range of water sports, making it a popular destination for both relaxation and adventure.</p>
            <p>The city is also famous for its local products, such as high-quality argan oil, handmade pottery, and traditional textiles. Agadir's bustling markets offer a unique shopping experience, showcasing the craftsmanship of local artisans. Experience the blend of modernity and tradition that makes Agadir a must-visit destination.</p>
          </div>
        </div>
        <div class="col-md-6">
          <img :src="productImages[0]" alt="Product 1" class="img-fluid w-100">
        </div>
        <div class="col-md-6">
          <img :src="productImages[0]" alt="Product 1" class="img-fluid w-100">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      productImages: [
        require('@/assets/img/products/pr1.jpg'),
      ],
    };
  },
};
</script>
