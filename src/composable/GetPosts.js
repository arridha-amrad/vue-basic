import { ref } from "vue";

const GetPosts = () => {
  const posts = ref([]);
  const error = ref();
  const loadPosts = async () => {
    try {
      const res = await fetch("http://localhost:3000/posts");
      if (!res.ok) {
        throw Error("Fetching failure");
      }
      let data = await res.json();
      posts.value = data;
    } catch (err) {
      console.log(err);
      error.value = err;
    }
  };
  return { posts, error, loadPosts };
};

export default GetPosts;
