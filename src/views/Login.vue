<template>
  <div class="login-form">
    <h2>Sign In</h2>
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
    data() {
      return {
        inputError: '',
        userErrorMsg: '',
        passwordErrorMsg: ''
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
      checkUser() {
        let users = JSON.parse(localStorage.getItem("userList")) || [];
        let index = users.findIndex(user => user.userName === this.user);
        if(index === -1){
          this.userErrorMsg = 'Invalid username :(';
          this.inputError = 'userName';
          //this.$store.commit('setUser', '');
          this.$store.commit('setPassword', '');
          return;
        }
        if(this.password !== users[index].password) {
          this.passwordErrorMsg = 'Wrong password. Please try again.';
          this.inputError = 'password';
          this.$store.commit('setPassword', '');
          return;
        }
        this.$store.commit('setLoggedIn', true);
        console.log('Welcome, ' + this.user);
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