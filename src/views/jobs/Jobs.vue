<template>
  <h1>Available Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
    <router-link :to="{ name: 'JobDetail', params: { id: job.id } }">
      <h2 class="job">{{ job.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        {
          id: 1,
          title: "Front-End Developer",
          description:
            "Nulla turpis purus, posuere at dignissim mollis, viverra a diam. Cras et luctus dui. Nunc nec condimentum turpis, non sollicitudin diam. Sed tincidunt elit nec egestas tempor. Integer sit amet arcu lorem.",
        },
        {
          id: 2,
          title: "Back-End Developer",
          description:
            "Donec at mauris vel enim hendrerit sagittis. Maecenas fringilla porta sapien efficitur feugiat. Phasellus mollis sed tellus sit amet consequat. Pellentesque euismod urna auctor faucibus finibus. In bibendum, leo et convallis maximus, lacus ante auctor felis, ut fringilla mauris tortor in odio.",
        },
        {
          id: 3,
          title: "Android Developer",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus libero, venenatis ac fermentum at, pulvinar vitae libero. Ut vitae nulla sit amet magna auctor pulvinar.",
        },
        {
          id: 4,
          title: "IOS Developer",
          description:
            "Pellentesque auctor sem augue. Nulla facilisi. Nullam gravida ipsum ut lacus ultricies, eu maximus nulla hendrerit. Nam vel lorem in odio interdum vestibulum eu sed felis. Suspendisse aliquam eros quis libero gravida, ut scelerisque purus mattis.",
        },
      ],
    };
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
