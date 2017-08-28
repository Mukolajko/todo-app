<template>
  <div id="app">
    <myHeader v-if="showPartials"></myHeader>
    <div class="error_message"></div>
    <router-view></router-view>
    <myFooter v-if="showPartials"></myFooter>
  </div>
</template>

<script>
  import Header from './components/partials/Header.vue';
  import Footer from './components/partials/Footer.vue';
  export default {
    name: 'app',
    data() {
      return {
        showPartials: !!this.helpers.getSessionStorage('userName')
      }
    },
    components: {
      'myHeader': Header,
      'myFooter': Footer
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    padding: 0 0;
  }
  .error_message {
    color: red;
  }
</style>
