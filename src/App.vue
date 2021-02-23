<template>
  <SignupForm />
</template>

<script>
import SignupForm from "./components/SignupForm";
export default {
  name: "App",
  components: { SignupForm },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
#app,
.modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn {
  background-color: rgb(94, 25, 184);
  width: 100px;
  color: #fff;
  margin: 0 10px;
  margin-top: 10px;
}
</style>
