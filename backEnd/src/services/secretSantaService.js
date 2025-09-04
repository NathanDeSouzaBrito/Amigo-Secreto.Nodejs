const Person = require("../models/Person");
const { sendAssignment } = require("./mailer");

async function performDraw() {

  // busca todas as pessoas
  const people = await Person.find();
  if (people.length < 2)
    throw new Error("É necessário pelo menos 2 pessoas para sortear.");

  // cria uma lista de IDs para embaralhar
  let receivers = people.map((p) => p._id.toString());
  let attempts = 0;
  let invalid;

  // Embaralha até que ninguém tire a si mesmo
  do {
    attempts++;
    receivers.sort(() => Math.random() - 0.5);
    invalid = people.some((p, i) => p._id.toString() === receivers[i]);
  } while (invalid && attempts < 50);

  // fallback: caso continue dando match, força deslocamento
  if (invalid) {
    receivers = receivers.slice(1).concat(receivers[0]);
  }

  // envia os e-mails
  for (let i = 0; i < people.length; i++) {
    const giver = people[i];
    const receiver = people.find((p) => p._id.toString() === receivers[i]);
    await sendAssignment(giver.email, giver.name, receiver.name);
  }
}

module.exports = { performDraw };
