<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <div class="tag-container">
      <span v-for="(tag, index) in post.tags" :key="index">{{ tag }}</span>
    </div>
  </div>
</template>

<script>
import GetDetailPost from "../../composable/GetDetailPost";
export default {
  props: ["id"],
  setup(props) {
    const { post, loadPost } = GetDetailPost(props.id);
    loadPost();
    return { post };
  },
};
</script>

<style scoped>
.tag-container {
  margin-top: 1rem;
}
span {
  display: inline;
  margin: 0 10px;
  padding: 5px;
  border-radius: 30px;
  background-color: crimson;
  color: #fff;
}
</style>
