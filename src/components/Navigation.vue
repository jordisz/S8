<template>
  <div>
    <ul class="navigation">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li v-if="this.$store.state.isLoggedIn">
        <router-link to="/starships">Starships</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'Navigation',
 
}
</script>

<style scoped>
/* breakpoint @900px */
.navigation {
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  height: 46px;
  border-top: solid 1px #343434;
  border-bottom: solid 1px #343434;
  margin: 0;
  padding: 0;
}

li {
  display: block;
  height: 38px;
  width: 90px;
  padding: 4px 32px;
  border-left: solid 1px #343434;
  font-size: 14px;
  font-weight: 500;
  line-height: 1rem;
}

li:last-of-type {
  border-right: solid 1px #343434;
}

a {
  position: relative;
  display: block;
  margin-top: 11px;
}

.router-link-active:before {
  position: absolute;
  content: '';
  width: 5ch;
  height: 2px;
  left: 23%;
  top: 120%;
  background-color: rgba(255, 99, 71, 0.6);
}

.router-link-active {
  color: #eee;
  text-shadow: rgb(233, 233, 116) .5px 0 6px;
}

a:hover {
  color: #fff;
  text-shadow: rgb(255, 255, 128) 1px 0 10px;
}
</style>