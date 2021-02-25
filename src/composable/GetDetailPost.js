import { ref } from "vue";
const GetDetailPost = (id) => {
  const post = ref();
  const loadPost = async () => {
    const res = await fetch("http://localhost:3000/posts/" + id);
    post.value = await res.json();
  };
  loadPost();
  return { post, loadPost };
};

export default GetDetailPost;
