<template>
  <div class="nav">
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/about">About</router-link>
    <router-link class="link" to="/jobs">Jobs</router-link>
  </div>
  <button class="nav-btn" @click="back">Back</button>
  <button class="nav-btn" @click="redirect">Redirect</button>
  <button class="nav-btn" @click="forward">Forward</button>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    redirect() {
      this.$router.push({ name: "Home" });
    },
    forward() {
      this.$router.go(1);
    },
  },
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
.nav {
  font-size: 1.6rem;
  color: #8e8e8e;
  font-weight: 700;
  margin: 0 0 50px;
}
.link {
  margin: 0px 10px;
}
.router-link-exact-active {
  background-color: crimson;
  color: #fff;
  padding: 5px;
}
.nav-btn {
  margin: 0 10px;
  padding: 10px 20px;
}
</style>
