const mongoose = require("mongoose")

const petsSchema = new mongoose.Schema({
    id : { type : Number},
    nomeFantasia: { type : String },
    endereco: { type : String },
    telefone: { type : String },
    atende: { type : String },
    
},{
    versionKey: false
})

const pets = new mongoose.model("pets", petsSchema)

module.exports = pets

