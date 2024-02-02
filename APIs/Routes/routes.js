const router = require("express").Router();
const readAllController = require("../Controllers/controllers");

module.exports = router;

router.get("/api/books", readAllController);
