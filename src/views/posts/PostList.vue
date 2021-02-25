<template>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post" />
  </div>
</template>

<script>
import SinglePost from "../posts/SinglePost";
export default {
  components: { SinglePost },
  props: ["posts"],
};
</script>

<style></style>
