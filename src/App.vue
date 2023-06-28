<script setup>
  import { onBeforeMount, onMounted } from 'vue';
import Phase1 from './components/Phase1.vue'
  onBeforeMount(() => {
      const urlParams = new URLSearchParams(window.location.search)
      const token = urlParams.get('token')
      console.log(token)
      localStorage.setItem('token', token)
  })
</script>

<template>
  <!-- <nav>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
      <i class="fas fa-bars"></i>
    </label>
    <ul>
      <li><a>Products</a></li>
      <li><a>Customers</a></li>
      <li><a>Invoices</a></li>
    </ul>
  </nav> -->
  <Phase1 />
</template>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
