<template>
  <div id="app">
    <template>
      <b-navbar fixed-top>
        <template #brand>
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img
              src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
              alt="Lightweight UI components for Vue.js based on Bulma"
            />
          </b-navbar-item>
        </template>
        <template #start>
          <!-- <b-navbar-item
            tag="router-link"
            v-for="(menu, i) in menulist"
            :key="i"
            :to="menu.href"
          >
            {{ menu.name }}
          </b-navbar-item> -->
        </template>
      </b-navbar>
    </template>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    menulist: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "transactionList",
        href: "/transactionList",
      },
    ],
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
