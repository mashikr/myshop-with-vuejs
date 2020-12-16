<template>
  <div class="container-fluid pt-2">
    <app-navbar></app-navbar>

    <div class="mt-5">
      <div class="row">
        <div class="col-md-8 col-lg-19 pt-3">
          <router-view></router-view>
        </div>
        <div class="col pt-3 border-left">
          <app-carts></app-carts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Carts from './components/Carts.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    appNavbar: Navbar,
    appCarts: Carts
  }
}
</script>

<style>
</style>
