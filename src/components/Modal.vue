<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
      <slot></slot>
      <div class="action">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "text", "theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.backdrop {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.modal {
  background-color: #fafafa;
  color: #1a1a1a;
  width: 500px;
  padding: 20px 10px;
}
.modal h1 {
  color: rgb(45, 218, 218);
}
.sale {
  background-color: crimson;
}

.sale h1 {
  color: #fff;
}

.sale p {
  color: #fff;
}

p {
  color: #1a1a1a;
}

.action {
  border-top: 2px solid #fff;
  margin: 10px 0px;
  width: 100%;
}
</style>
