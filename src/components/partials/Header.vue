<template>
  <div class="header_container">
    <div class="left">
      <img src="http://www.mpia.de/imprs-hd/pictures/Students/smiley.jpg">
    </div>
    <div class="right">
      <span>{{userName}}</span>
      <button v-on:click="logout">Log Out</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "header",
    data() {
      return {
        userName: this.helpers.getSessionStorage('userName')
      }
    },
    methods: {
      logout () {
        this.helpers.clearSessionStorage();
        window.location.href = "/";
      }
    }
  }
</script>

<style scoped>
  @import "./Header.css";
</style>
