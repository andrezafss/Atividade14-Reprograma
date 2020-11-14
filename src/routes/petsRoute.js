const express = require("express");
const router = express.Router();
const controller = require("../controller/petsController");

router.get("/", controller.getAllPets);
router.get("/:id", controller.getByIdPets);
router.post("/", controller.postPets);
router.delete("/:id", controller.deletePets);
router.put("/:id", controller.putPets);

module.exports = router;