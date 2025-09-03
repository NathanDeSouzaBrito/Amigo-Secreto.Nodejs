<template>
  <div class="container">
    <h1>Amigo Secreto — Admin</h1>
    <PersonForm @created="fetchPeople" />
    <PeopleList :people="people" @refresh="fetchPeople" />
    <hr />
    <button @click="doDraw">Realizar Sorteio</button>
    <div v-if="result">
      <h3>Embaralhamento concluido com sucesso</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PersonForm from "./components/PersonForm.vue";
import PeopleList from "./components/PeopleList.vue";

export default {
  components: { PersonForm, PeopleList },
  data() {
    return { people: [], result: null };
  },
  methods: {
    async fetchPeople() {
      const res = await axios.get("http://localhost:8080/api/persons");
      this.people = res.data;
    },
    async doDraw() {
      const res = await axios.post("http://localhost:8080/api/persons/draw");
      this.result = res.data;
    },
  },
  mounted() {
    this.fetchPeople();
  },
};
</script>
