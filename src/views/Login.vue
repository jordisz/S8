<template>
  <div class="login-form">
    <h2>Sign In</h2>
    <form>
      <div class="input-wrapper">
        <input class="form-input" type="text" placeholder="Username" v-model="user"/>
        <input class="form-input" type="password" placeholder="Password" v-model="password"/>
        <button class="form-button" @click.prevent="checkUser">Sign In</button>
      </div>
    </form>
    <p>
      <router-link to="/Register">Create an Account</router-link>
    </p>
  </div>
</template>

<script>
export default {
    name: 'Login',
    computed: {
      user: {
        get () {
          return this.$store.state.user;
        },
        set (user) {
          this.$store.commit('setUser', user);
        }
      },
      password: {
        get () {
          return this.$store.state.password;
        },
        set (password) {
          this.$store.commit('setPassword', password);
        }
      }
    },
    methods: {
      checkUser() {
        let users = JSON.parse(localStorage.getItem("userList"));
        let index = users.findIndex(user => user.userName === this.user);
        if(index === -1){
          console.log('Invalid username :(');
          this.$store.commit('setUser', '');
          this.$store.commit('setPassword', '');
          return;
        }
        if(this.password !== users[index].password) {
          console.log('Wrong password. Please try again.');
          this.$store.commit('setPassword', '');
          return;
        }
        this.$store.commit('setLoggedIn', true);
        console.log('Welcome, ' + this.user);
        this.$store.commit('setUser', '');
        this.$store.commit('setPassword', '');
      }
    }
}
</script>

<style scoped>
.login-form {
  margin-top: 60px;
}

h2 {
  text-transform: uppercase;
  font-weight: 300;
  color: #edd700;
}

a {
  color: #edd500d5;
}

</style>