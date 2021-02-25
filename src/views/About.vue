<template>
  <div class="about">
    <h1>This is an about page</h1>
    <label>Search</label>
    <input v-model="search" type="text" placeholder="search" />
    <br />
    <button @click="handleClick">Stop Watch</button>
  </div>
</template>

<script>
import { ref, watch, watchEffect } from "vue";
export default {
  setup() {
    const search = ref("");
    const myWatch = watch(search, () => {
      console.log("watch function run...");
    });
    const myWatchEffect = watchEffect(() =>
      console.log("WhatEffect function running..." + " " + search.value)
    );
    const handleClick = () => {
      myWatch();
      myWatchEffect();
    };
    return { search, handleClick };
  },
};
</script>
