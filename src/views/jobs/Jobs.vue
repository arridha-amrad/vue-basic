<template>
  <h1>Available Jobs</h1>
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'JobDetail', params: { id: job.id } }">
        <h2 class="job">{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>loading...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
h1 {
  margin: 0 0 20px;
}
.job {
  background-color: #eee;
  padding: 20px;
  margin: 10px 20px;
}
</style>
