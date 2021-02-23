<template>
  <h1>Hello Vue :)</h1>
  <button class="btn-play" :disabled="isPlaying" @click="play">Play</button>
  <Result :score="score" v-if="score !== 0" />
  <Block v-if="isPlaying" :delay="delay" @end="stop" />
</template>

<script>
import Block from "./components/Block";
import Result from "./components/Result";

export default {
  name: "App",
  components: { Block, Result },
  data() {
    return {
      delay: null,
      isPlaying: false,
      score: 0,
    };
  },
  methods: {
    play() {
      this.score = 0;
      this.isPlaying = true;
      this.delay = 2000 + Math.random() * 5000;
    },
    stop(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      console.log("score : ", this.score);
    },
  },
};
</script>

<style>
#app,
.modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn-toggle {
  background-color: bisque;
  width: 100px;
}
.btn-play {
  background-color: rgb(94, 25, 184);
  width: 100px;
  color: #fff;
  margin: 0 10px;
  margin-top: 10px;
}
</style>
