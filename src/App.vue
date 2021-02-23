<template>
  <h1>Hello Vue :)</h1>
  <teleport v-if="showModal" to=".modals">
    <Modal :header="header" :text="text" @close="toggleModal" :theme="theme">
      <h1>Trying slot</h1>
      <p>pure slot</p>
      <template v-slot:links>
        <button class="btn-action">Agree</button>
        <button class="btn-action" @click="toggleModal">Cancel</button>
      </template>
    </Modal>
  </teleport>
  <button class="btn-toggle" @click="toggleModal">Show modal</button>
</template>

<script>
import Modal from "./components/Modal";
export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      theme: "dark",
      header: "This is modal header",
      text: "This is modal text",
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
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
.btn-action {
  background-color: darkcyan;
  width: 100px;
  color: #fff;
  margin: 0 10px;
  margin-top: 10px;
}
</style>
