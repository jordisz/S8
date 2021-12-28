<template>
  <div class="register-form">
    <h2>Create Your Account</h2>
    <form>
      <div class="input-wrapper">
        <div class="input-error-msg">{{userErrorMsg}}</div>
        <input class="form-input" 
          :class="{'input-error': inputError === 'userName' }" 
          type="text" 
          placeholder="Username"
          @click="clearErrorMessages" 
          v-model="user"/>
        <div class="input-error-msg">{{passwordErrorMsg}}</div>
        <input class="form-input" 
          :class="{'input-error': inputError === 'password' }"
          type="password" 
          placeholder="Password"
          @click="clearErrorMessages" 
          v-model="password"/>
        <button class="form-button" @click.prevent="createNewUser">Create Account</button>
      </div>
    </form>
    <p>Already have an account? <router-link to="/Login">Sign in</router-link></p>
  </div>
</template>

<script>
export default {
    name: 'Register',
    data() {
      return {
        focused: false,
        userErrorMsg: '',
        passwordErrorMsg: '',
        inputError: ''
      }
    },
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
      createNewUser() {
        let users = JSON.parse(localStorage.getItem("userList") || "[]");
        if (this.$store.state.user === '') {          
          this.inputError = 'userName';
          this.userErrorMsg = 'Please enter a username';
          this.$store.commit('setUser', '');
          this.$store.commit('setPassword', '');
          return;
        }
        if (users.some(user => user.userName === this.user)) {
          this.inputError = 'userName';
          this.userErrorMsg = `User name ${this.user} already exists, sorry.`
          //this.$store.commit('setUser', '');
          return;
        }
        if (this.$store.state.password.length < 6) {
          this.inputError = 'password';
          this.passwordErrorMsg = 'Password must contain at least 6 characters';
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
        console.log(`New user created: ${this.$store.state.user}, password is ${this.$store.state.password}.`);
        console.log("Welcome, you're logged in.")
        this.$store.commit('setUser', '');
        this.$store.commit('setPassword', '');
        this.$router.push({path: '/starships'});
      },
      clearErrorMessages() {
        this.inputError = '';
        this.userErrorMsg = '';
        this.passwordErrorMsg = '';
      }
    }
}
</script>

<style scoped>
.register-form {
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