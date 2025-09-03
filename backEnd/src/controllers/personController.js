const express = require("express");
const personService = require("../services/personService");
const secretSantaService = require("../services/secretSantaService");

const router = express.Router();

// GET /api/persons
router.get("/", async (req, res) => {
  try {
    const people = await personService.findAll();
    res.json(people);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/persons
router.post("/", async (req, res) => {
  try {
    const person = await personService.save(req.body);
    res.status(201).json(person);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT /api/persons/:id
router.put("/:id", async (req, res) => {
  try {
    const person = await personService.update(req.params.id, req.body);
    if (!person)
      return res.status(404).json({ error: "Pessoa não encontrada" });
    res.json(person);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /api/persons/:id
router.delete("/:id", async (req, res) => {
  try {
    await personService.remove(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/persons/draw
router.post("/draw", async (req, res) => {
  try {
    await secretSantaService.performDraw();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
