<template>
  <div class="container">
    <h1>Amigo Secreto — Admin</h1>
    <PersonForm @created="fetchPeople" />
    <PeopleList :people="people" @refresh="fetchPeople" />
    <hr />
    <button @click="doDraw" :disabled="people.length < 2">
      Realizar Sorteio
    </button>
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
    return {
      //Array com os dados carregados do backend.
      people: [],

      //Array com os dados carregados do backend.
      result: null,
    };
  },
  methods: {
    //Busca lista de pessoas no backend e atualiza people.
    async fetchPeople() {
      const res = await axios.get("http://localhost:8080/api/persons");
      this.people = res.data;
    },

    //Aciona o sorteio no backend e salva o resultado em result.
    async doDraw() {
      const res = await axios.post("http://localhost:8080/api/persons/draw");
      this.result = res.data;
    },
  },

  //Assim que o componente é carregado, chama fetchPeople() para preencher a lista.
  mounted() {
    this.fetchPeople();
  },
};
</script>
