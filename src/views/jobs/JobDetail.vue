<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>{{ job.description }}</p>
  </div>
  <div v-else>
    <p>loading...</p>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    Axios.get(`http://localhost:3000/jobs/${this.id}`)
      .then((res) => (this.job = res.data))
      .catch((err) => console.log(err.message));
    // fetch("http://localhost:3000/jobs/" + this.id)
    //   .then((res) => res.json())
    //   .then((data) => (this.job = data))
    //   .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
