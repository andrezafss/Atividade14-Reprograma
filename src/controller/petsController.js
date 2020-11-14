
const pets = require("../model/pets");

const getAllPets = (req, res) => {
  pets.find(function (err, pets) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send(pets)
      }
  })
}

const getByIdPets = (req, res) => {
  const id = req.params.id
  pets.find({ id }, function (err, pets) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send(pets)
      }
  })
}

const postPets = (req, res) => {
  let pet = new pets(req.body)

  pet.save(function(err){
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(201).send({ message : "Pet cadastrado!"})
      }
  })
}

const deletePets = (req, res) => {
  const id = req.params.id
  pets.deleteMany({ id }, function(err){
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send({ message : "Pet excluido"})
      }
  })
}
const putPets = (req, res) => {
  const id = req.params.id
  pets.updateMany({ id }, { $set : req.body }, { upsert : true }, function(err){
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send({ message : "Pet atualizado"})
      }
  })
}


module.exports = {
  getAllPets,
  getByIdPets,
  postPets,
  deletePets,
  putPets, 
 
}