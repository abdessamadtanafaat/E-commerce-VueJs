<template>
  <section class="section__space">
    <div class="container">
      <div class="row">
        <div class="col-md-12 contact-tite">
          <h2>Get In Touch With Us</h2>
          <p>For more information about our products and services, feel free to drop us an email. Our staff is always here to help you. Do not hesitate to reach out!</p>
        </div>
        <div class="col-md-6">
          <div class="address">
            <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="address-icon" />
            <div class="address-details">
              <h3>Address</h3>
              <p>123 Avenue Mohammed V, Agadir 80000, Morocco</p>
            </div>
          </div>
          <div class="address">
            <font-awesome-icon :icon="['fas', 'phone']" class="address-icon" />
            <div class="address-details">
              <h3>Phone</h3>
              <p>+212 5 22 45 67 89</p>
            </div>
          </div>
          <div class="address">
            <font-awesome-icon :icon="['fas', 'clock']" class="address-icon" />
            <div class="address-details">
              <h3>Working Time</h3>
              <p>Sun - Thu: 9 AM - 6 PM</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <form class="contact-form">
            <div class="form-group">
              <input type="text" id="name" class="input" placeholder="Enter your name" required>
            </div>
            <div class="form-group">
              <input type="email" id="email" class="input" placeholder="Enter your email" required>
            </div>
            <div class="form-group">
              <input type="text" id="subject" class="input" placeholder="Enter the subject" required>
            </div>
            <div class="form-group">
              <textarea id="message" class="input" rows="4" placeholder="Write your message" required></textarea>
            </div>
            <button type="submit" class="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // You can add script logic if needed
};
</script>
