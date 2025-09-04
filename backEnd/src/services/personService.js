const Person = require("../models/Person");

// Buscar todas as pessoas
async function findAll() {
  return await Person.find().sort({ name: 1 });
}

// Criar nova pessoa
async function save(data) {
  const person = new Person(data);
  return await person.save();
}

// Atualizar pessoa existente
async function update(id, data) {
  return await Person.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
}

// Remover pessoa
async function remove(id) {
  return await Person.findByIdAndDelete(id);
}

module.exports = { findAll, save, update, remove };
