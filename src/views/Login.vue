<template>
  <div>
    <h2>Sign In</h2>
    <form>
      <input type="text" placeholder="Username" v-model="user"/>
      <input type="password" placeholder="Password" v-model="password"/>
      <button @click.prevent="checkUser">Sign In</button>
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
form {
  width: 40vw;
  margin: 20px auto 0 auto;
  display: flex;
  flex-direction: column;
}
</style>