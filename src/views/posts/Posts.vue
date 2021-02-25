<template>
  <h1>POST</h1>
  <br />
  <small v-if="error">{{ error }}</small>
  <PostList v-if="posts.length" :posts="posts" />
</template>

<script>
import GetPost from "../../composable/GetPosts";
import PostList from "../posts/PostList";
export default {
  components: { PostList },
  setup() {
    const { posts, error, loadPosts } = GetPost();
    loadPosts();
    return { posts, error };
  },
};
</script>

<style scoped>
h1 {
  margin-top: 20px;
}
small {
  color: red;
}
</style>
