<template>
  <div v-if="showBlock" class="block" @click="stopTimer">
    Click me
  </div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: null,
    };
  },
  mounted() {
    console.log("mounted");
    console.log("delay : ", this.delay);
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.$emit("end", this.reactionTime);
      console.log("reaction time :", this.reactionTime);
    },
  },
  updated() {
    console.log("updated");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style>
.block {
  width: 400px;
  background-color: darkcyan;
  color: #fff;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
  cursor: pointer;
}
</style>
