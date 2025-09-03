<template>
  <div>
    <h2>Pessoas</h2>
    <ul>
      <li v-for="p in people" :key="p._id">
        {{ p.name }} — {{ p.email }}
        <button @click="remove(p._id)">Remover</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["people"],
  methods: {
    async remove(id) {
      await axios.delete(`http://localhost:8080/api/persons/${id}`);
      this.$emit("refresh");
    },
  },
};
</script>
