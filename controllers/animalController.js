const Animal = require('../models/Animal');

// GET all animals
exports.getAllAnimals = async (req, res) => {
  try {
    const animals = await Animal.find();
    res.status(200).json(animals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST a new animal
exports.addAnimal = async (req, res) => {
  const { name, species, age } = req.body;
  const animal = new Animal({ name, species, age });

  try {
    await animal.save();
    res.status(201).json(animal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT update an animal
exports.updateAnimal = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedAnimal = await Animal.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedAnimal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE an animal
exports.deleteAnimal = async (req, res) => {
  const { id } = req.params;
  try {
    await Animal.findByIdAndDelete(id);
    res.status(200).json({ message: 'Animal deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
