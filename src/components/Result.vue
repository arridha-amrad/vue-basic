<template>
  <p>Reaction Time : {{ score }}</p>
  <p ref="rank">Rank : {{ rank }}</p>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "Ninja fingers";
      this.$refs.rank.classList.add("green");
    } else if (this.score < 400) {
      this.rank = "Rapid Reflexes";
      this.$refs.rank.classList.add("orange");
    } else {
      this.rank = "Snail pace";
      this.$refs.rank.classList.add("gray");
    }
  },
};
</script>

<style scoped>
p {
  color: blueviolet;
  font-size: 1rem;
  margin: 20px 0;
}
.green {
  color: green;
}
.orange {
  color: rgb(220, 140, 20);
}
.gray {
  color: gray;
}
</style>
