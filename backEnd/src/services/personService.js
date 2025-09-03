const Person = require("../models/Person");


async function findAll() {
  return await Person.find().sort({ name: 1 });
}


async function save(data) {
  const person = new Person(data);
  return await person.save();
}


async function update(id, data) {
  return await Person.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
}


async function remove(id) {
  return await Person.findByIdAndDelete(id);
}

module.exports = { findAll, save, update, remove };
