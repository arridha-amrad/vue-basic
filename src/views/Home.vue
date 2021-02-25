<template>
  <h1>Home</h1>
  <p>My name is {{ username }} and i'm {{ age }} years old</p>
  <button @click="handleClick">Click here</button>
  <br />
  <input type="text" v-model="username" />
  <div v-for="(name, index) in matchingNames" :key="index">
    <p>{{ name }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import { computed, ref } from "vue";
export default {
  name: "Home",
  setup() {
    const username = ref("Arridha");
    const age = ref(26);
    const handleClick = () => {
      username.value = "Amrad";
      age.value = 25;
    };
    const people = ref(["John", "Jane", "Arridha", "Amrad", "Tukul", "Sule"]);
    const matchingNames = computed(() => {
      return people.value.filter((val) =>
        val.toLowerCase().includes(username.value.toLowerCase())
      );
    });
    return { age, username, handleClick, matchingNames };
  },
};
</script>
