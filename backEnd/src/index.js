const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const personController = require("./controllers/personController");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/persons", personController);

mongoose
  .connect("mongodb://localhost:27017/amigos-secreto")
  .then(() => {
    console.log("MongoDB conectado");
    app.listen(8080, () => console.log("Servidor rodando na porta 8080"));
  })
  .catch((err) => console.error(err));
