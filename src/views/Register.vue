<template>
  <div>
    <h2>Create Your Account</h2>
    <form>
      <input type="text" placeholder="Username" v-model="user"/>
      <input type="password" placeholder="Password" v-model="password"/>
      <button @click.prevent="createNewUser">Create Account</button>
    </form>
    <p>Already have an account? <router-link to="/Login">Sign in</router-link></p>
  </div>
</template>

<script>
export default {
    name: 'Register',
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
      createNewUser() {         // TODO: try to move it to store.
        let users = JSON.parse(localStorage.getItem("userList") || "[]");
        if (this.$store.state.user === '') {          
          console.log('Please enter a username');
          this.$store.commit('setUser', '');
          this.$store.commit('setPassword', '');
          return;
        }
        if (users.some(user => user.userName === this.user)) {
          console.log(`User name ${this.user} already exists, sorry.`)
          this.$store.commit('setUser', '');
          this.$store.commit('setPassword', '');
          return;
        }
        if (this.$store.state.password.length < 6) {
          console.log('Password must contain at least 6 characters');
          this.$store.commit('setPassword', '');
          return;
        }
        let newUser = {
          userName: this.$store.state.user, 
          password: this.$store.state.password 
          }

        users.push(newUser);
        localStorage.setItem("userList", JSON.stringify(users));
        this.$store.commit('setLoggedIn', true);
        console.log(`New user created: ${this.$store.state.user}, password is ${this.$store.state.password}. Welcome, you're logged in.`);
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