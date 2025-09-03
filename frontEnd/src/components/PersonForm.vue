<template>
  <form @submit.prevent="create">
    <input v-model="name" placeholder="Nome" required />
    <input v-model="email" placeholder="Email" type="email" required />
    <button type="submit">Adicionar</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return { name: "", email: "" };
  },
  methods: {
    async create() {
      await axios.post("http://localhost:8080/api/persons", {
        name: this.name,
        email: this.email,
      });
      this.name = "";
      this.email = "";
      this.$emit("created");
    },
  },
};
</script>
