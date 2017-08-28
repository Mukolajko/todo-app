<template>
  <div class="block-login">
    <h3>Login to view or add TO-DOS</h3>
    <div>
      <label for="username">UserName</label>
      <input type="text" id="username" v-model="username" v-on:keyup.13="login"/>
      <button v-on:click="login">Log in</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        username: ""
      }
    },
    methods: {
      login() {
        let logURL = this.globals.url + this.globals.userPath + "?username=" + this.username;
        this.http.Get(logURL)
          .then(result => {
            //get user that match or undefined if we dont have any.
            let user = result.body.pop();
            if (user) {
              this.helpers.setSessionStorage("userName", user.name);
              this.helpers.setSessionStorage("user", JSON.stringify(user));
              //redirect to todo
              window.location.href = "/todo";
            }
            else {
              this.helpers.showErrorMessage("User not exists");
            }
          })
          .catch(err => {
            this.helpers.showErrorMessage("Login Api call error");
          })
      }
    },
    beforeCreate() {
      if (this.helpers.getSessionStorage("userName")) {
        //redirect to todo
        window.location.href = "/todo";
      }
    }
  }
</script>

<style scoped>
  @import "./LoginComponent.css";
</style>
